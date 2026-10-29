"""
proses_unggahan.py - dipanggil oleh api.php setiap ada file yang diunggah.

Memakai ulang alat yang sudah ada (tidak ada logika baca-data yang digandakan):
  - convert_excel.py : membaca Excel Monthly Report
  - parse_pdf.py     : membaca PDF Monthly Report (butuh 'pdftotext' dari poppler)
  - build_data.py    : menggabungkan data PDF dengan data yang sudah ada
Hasilnya ditulis ke data/laporan_data.js, sehingga halaman laporan dan dashboard/pelayanan.php
otomatis memakai data terbaru.

Pemakaian (dijalankan oleh api.php, bisa juga manual):
    python tools/proses_unggahan.py excel  "file.xlsx"  0
    python tools/proses_unggahan.py pdf    "file.pdf"   6  "uploads/nama_tersimpan.pdf"  "Laporan_Juni.pdf"
Argumen ke-3 = nomor bulan (0 = tentukan otomatis dari nama file PDF).
Keluaran: satu baris JSON di akhir, mis. {"ok": true, "bulan": [6], "pesan": "..."}.
"""
import importlib.util
import json
import os
import re
import shutil
import subprocess
import sys
import tempfile
from pathlib import Path

HERE = Path(__file__).resolve().parent
DATA_JS = HERE.parent.parent / "data" / "laporan_data.js"


def _muat(nama):
    spec = importlib.util.spec_from_file_location(nama, HERE / (nama + ".py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


class Gagal(Exception):
    """Kesalahan yang pesannya boleh langsung ditampilkan ke pengguna."""


# ------------------------------------------------------------ data.js
def baca_data():
    teks = DATA_JS.read_text(encoding="utf-8") if DATA_JS.exists() else ""
    kepala = teks.split("const REPORT_DATA")[0] if "const REPORT_DATA" in teks else ""
    try:
        data = json.loads(teks.split("const REPORT_DATA = ", 1)[1].rsplit(";", 1)[0])
    except Exception:
        data = {}
    return kepala, data


def tulis_data(kepala, data):
    if DATA_JS.exists():
        shutil.copyfile(DATA_JS, str(DATA_JS) + ".bak")      # cadangan sebelum ditimpa
    isi = kepala + "const REPORT_DATA = " + json.dumps(data, ensure_ascii=False, indent=1) + ";\n"
    tmp = str(DATA_JS) + ".tmp"
    Path(tmp).write_text(isi, encoding="utf-8")
    os.replace(tmp, DATA_JS)                                  # tulis atomik


def bulan_dari_nama(nama, ce):
    n = re.sub(r"[^A-Z]", " ", nama.upper())
    for i, b in enumerate(ce.BULAN):
        if re.search(r"\b" + b + r"\b", n):
            return i + 1
    return None


def gabung_baris(lama, baru):
    """Gabung daftar baris per kode/nama: nilai baru menimpa, nilai kosong tidak menghapus data lama."""
    def kunci(r):
        return r.get("kode") or r.get("nama")
    hasil = {kunci(r): dict(r) for r in lama if isinstance(r, dict)}
    for r in baru:
        k = kunci(r)
        if k in hasil:
            hasil[k].update({a: b for a, b in r.items() if b is not None})
        else:
            hasil[k] = dict(r)
    return list(hasil.values())


# ------------------------------------------------------------ Excel
def proses_excel(path, ce):
    path = Path(path)
    tmpdir = None
    try:
        if path.suffix.lower() == ".xls":                     # openpyxl hanya bisa .xlsx -> ubah dulu
            soffice = shutil.which("soffice") or shutil.which("libreoffice")
            if not soffice:
                raise Gagal("File .xls perlu diubah dulu ke .xlsx (buka di Excel, Simpan Sebagai .xlsx), "
                            "atau pasang LibreOffice agar bisa diubah otomatis.")
            tmpdir = tempfile.mkdtemp()
            subprocess.run([soffice, "--headless", "--convert-to", "xlsx", "--outdir", tmpdir, str(path)],
                           check=True, capture_output=True, timeout=120)
            hasil = list(Path(tmpdir).glob("*.xlsx"))
            if not hasil:
                raise Gagal("File .xls tidak bisa diubah ke .xlsx. Simpan ulang sebagai .xlsx lalu unggah lagi.")
            path = hasil[0]
        try:
            data = ce.build(str(path))
        except Gagal:
            raise
        except Exception as e:
            raise Gagal("File Excel tidak bisa dibaca (%s)." % e)
    finally:
        if tmpdir:
            shutil.rmtree(tmpdir, ignore_errors=True)

    if not data:
        raise Gagal("Tidak ada data Monthly Report yang dikenali. Pastikan nama sheet (ESURVEY, SLA KLAIM, "
                    "PENGADUAN, MLT, DIGITAL SERVICE ...) dan kolom BLTH berisi nama bulan, mis. \"JUNI 2026\".")

    kepala, semua = baca_data()
    jml = 0
    for m, bagian in data.items():
        cur = semua.get(str(m)) or {"periode": "%s 2026" % ce.NAMA[m - 1], "pdf": None, "catatan": [], "sections": {}}
        S = cur.setdefault("sections", {})
        for k, v in bagian.items():
            S[k] = gabung_baris(S[k], v) if isinstance(v, list) and isinstance(S.get(k), list) else v
            jml += 1
        semua[str(m)] = cur
    semua = {k: semua[k] for k in sorted(semua, key=int)}
    tulis_data(kepala, semua)
    bulan = sorted(data)
    return {"ok": True, "bulan": bulan,
            "pesan": "Data Excel terbaca: %d bagian untuk %s." % (jml, ", ".join(ce.NAMA[m - 1] for m in bulan))}


# ------------------------------------------------------------ PDF
def bulan_dari_sampul_pdf(path, ce):
    """Deteksi periode dari teks halaman pertama PDF, bukan hanya nama file."""
    if not shutil.which("pdftotext"):
        return None
    try:
        r = subprocess.run(
            ["pdftotext", "-f", "1", "-l", "1", "-layout", str(path), "-"],
            check=True, capture_output=True, text=True, encoding="utf-8", errors="replace", timeout=30
        )
        teks = r.stdout.upper()
        for i, nama in enumerate(ce.BULAN, start=1):
            if re.search(r"\b" + re.escape(nama) + r"\b", teks):
                return i
    except Exception:
        pass
    return None


def proses_pdf(path, bulan, simpan_rel, ce, nama_asli=""):
    if not shutil.which("pdftotext"):
        raise Gagal("Program 'pdftotext' (poppler) belum terpasang di server, jadi isi PDF belum bisa dibaca. "
                    "File PDF tetap tersimpan.")
    pp, bd = _muat("parse_pdf"), _muat("build_data")
    # Periode pada sampul PDF adalah sumber utama. Ini mencegah nama file yang
    # keliru (mis. MONTHLY_REPORT_AGUSTUS.pdf berisi SEPTEMBER 2026) masuk ke bulan salah.
    bulan_sampul = bulan_dari_sampul_pdf(path, ce)
    if bulan_sampul:
        bulan = bulan_sampul
    elif not bulan:
        bulan = bulan_dari_nama(nama_asli or os.path.basename(simpan_rel), ce)
    if not bulan:
        raise Gagal("Bulan laporan tidak terdeteksi dari sampul atau nama file. Pilih bulan pada kolom \"Bulan\" lalu unggah lagi.")
    try:
        pdf = pp.parse(str(path), bulan)
    except Exception:
        raise Gagal("Isi PDF tidak sesuai format Monthly Report (11 halaman dashboard), jadi datanya tidak terbaca.")
    if not any(v for bag in ("klaim", "esurvey", "digital", "sla", "pengaduan", "mlt", "unit", "igi")
               for k, v in pdf[bag].items() if k != "narasi"):
        raise Gagal("PDF dibuka, tetapi tidak ada angka laporan yang dikenali. Pastikan ini PDF Monthly Report Pelayanan.")

    kepala, semua = baca_data()
    cur = semua.get(str(bulan)) or {"periode": "%s 2026" % ce.NAMA[bulan - 1], "pdf": None, "catatan": [], "sections": {}}
    cur["sections"] = bd.merge_month(bulan, cur.get("sections"), pdf)
    cur["pdf"] = simpan_rel
    semua[str(bulan)] = cur
    semua = {k: semua[k] for k in sorted(semua, key=int)}
    tulis_data(kepala, semua)
    pesan = "Data PDF terbaca dan dipakai untuk laporan %s." % ce.NAMA[bulan - 1]
    nama_bulan_file = bulan_dari_nama(nama_asli, ce) if nama_asli else None
    if bulan_sampul and nama_bulan_file and nama_bulan_file != bulan_sampul:
        pesan += " Periode di sampul (%s) berbeda dari nama file; periode sampul yang digunakan." % ce.NAMA[bulan_sampul - 1]
    return {"ok": True, "bulan": [bulan], "pesan": pesan}


def main():
    try:
        if len(sys.argv) < 4:
            raise Gagal("Argumen kurang.")
        jenis, path, bulan = sys.argv[1], sys.argv[2], int(sys.argv[3] or 0)
        ce = _muat("convert_excel")
        if jenis == "excel":
            hasil = proses_excel(path, ce)
        elif jenis == "pdf":
            hasil = proses_pdf(path, bulan, sys.argv[4] if len(sys.argv) > 4 else os.path.basename(path), ce,
                               sys.argv[5] if len(sys.argv) > 5 else "")
        else:
            raise Gagal("Jenis file tidak dikenal.")
    except Gagal as e:
        hasil = {"ok": False, "pesan": str(e)}
    except ModuleNotFoundError as e:
        hasil = {"ok": False, "pesan": "Pustaka Python belum terpasang: %s. Jalankan: pip install openpyxl" % e.name}
    except Exception as e:
        hasil = {"ok": False, "pesan": "Terjadi kesalahan saat memproses: %s" % e}
    print(json.dumps(hasil, ensure_ascii=False))


if __name__ == "__main__":
    main()
