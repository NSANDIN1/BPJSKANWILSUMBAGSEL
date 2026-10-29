"""
build_data.py - OPSIONAL
Menggabungkan Excel + hasil parse PDF menjadi data/laporan_data.js.

Aturan penggabungan (sesuai permintaan):
  1. Data lama yang punya pengganti di PDF terbaru  -> DIGANTI dengan nilai PDF.
  2. Bagian yang sebelumnya kosong                   -> DILENGKAPI dari PDF.
  3. Data lama tanpa pengganti di PDF                -> DIPERTAHANKAN (mis. rincian E-Survey cabang dari Excel).
  4. Tidak ada angka yang dikarang; yang tidak ada di sumber manapun dibiarkan kosong ("Data belum tersedia").
  Satu pengecualian: bila nilai PDF hanya versi bulat dari nilai Excel (mis. 13 vs 13,2), nilai Excel yang lebih presisi dipakai.

Pemakaian:
    python tools/build_data.py excel.xlsx out/6.json out/7.json out/8.json out/9.json
(Setiap json dibuat oleh tools/parse_pdf.py; nomor bulan ada di dalam json.)
"""
import json, sys, importlib.util
from pathlib import Path

HERE = Path(__file__).resolve().parent
spec = importlib.util.spec_from_file_location("convert_excel", HERE / "convert_excel.py")
ce = importlib.util.module_from_spec(spec); spec.loader.exec_module(ce)

# nama file PDF di assets/pdf/ per bulan (sesuai nama file yang Anda kirim)
PDF_FILES = {6: "MONTHLY_REPORT_JUNI.pdf", 7: "MONTHLY_REPORT_JULI.pdf",
             8: "MONTHLY_REPORT_AGUSTUS.pdf", 9: "MONTHLY_REPORT_SEPTEMBER.pdf"}

diffs = []


def put(dst, src, keys, where):
    """Timpa field dst dengan src (PDF). Catat bila nilai lama berbeda secara nyata."""
    for k in keys:
        if k not in src or src[k] is None:
            continue
        new, old = src[k], dst.get(k)
        if isinstance(new, float):
            new = round(new, 6)
        if isinstance(old, (int, float)) and isinstance(new, (int, float)):
            # PDF hanya menampilkan versi dibulatkan (mis. 13 vs 13,2 atau 75,1961 vs 75,1961039):
            # nilai Excel yang lebih presisi dipertahankan
            if abs(old - new) <= 0.0006 * max(1, abs(old)) or (k == "targetUnit120" and new == round(old)):
                continue
            diffs.append(f"{where}.{k}: Excel={old} -> PDF={new}")
        dst[k] = new


def by(rows, key):
    return {r[key]: r for r in (rows or [])}


def merge_month(m, xl, pdf):
    S = dict(xl or {})
    nar = {}
    tag = lambda s: f"{m}/{s}"
    if pdf:
        # ---- E-Survey
        es = pdf["esurvey"]
        kw = by(S.get("esurveyKanwil"), "nama")
        for r in es.get("kanwil", []):
            row = kw.setdefault(r["nama"], {"nama": r["nama"]})
            put(row, r, ["skala5"], tag("esurveyKanwil." + r["nama"]))
        for n, v in es.get("skala100", {}).items():
            put(kw[n], v, ["skala100", "skala5"], tag("esurveyKanwil." + n))
        if es.get("kategori") and "SUMBAGSEL" in kw:
            cmap = {"Sangat Puas": "sangatPuas", "Puas": "puas", "Cukup Puas": "cukupPuas", "Kurang Puas": "kurangPuas",
                    "Tidak Puas": "tidakPuas", "Sangat Tidak Puas": "sangatTidakPuas"}
            put(kw["SUMBAGSEL"], {cmap[k["kategori"]]: k["responden"] for k in es["kategori"]},
                list(cmap.values()), tag("esurveyKanwil.SUMBAGSEL"))
            if es["kpi"].get("status"):
                kw["SUMBAGSEL"]["status"] = es["kpi"]["status"]
        if kw:
            S["esurveyKanwil"] = sorted(kw.values(), key=lambda r: -(r.get("skala5") or 0))
        if es.get("kpi"):
            S["esurveyKpi"] = dict(es["kpi"], kategori=es.get("kategori"))
        if es.get("top5"):
            S["esurveyTop5"] = es["top5"]
        if es.get("bottom5"):
            S["esurveyBottom5"] = es["bottom5"]
        # Excel cabang: timpa bila cabang yang sama muncul di Top/Bottom 5 PDF
        cb = by(S.get("esurveyCabang"), "nama")
        for r in es.get("top5", []) + es.get("bottom5", []):
            if r["nama"] in cb:
                put(cb[r["nama"]], r, ["sangatTidakPuas", "tidakPuas", "puas", "sangatPuas", "skala5"],
                    tag("esurveyCabang." + r["nama"]))
        nar["esurvey"] = es.get("narasi")

        # ---- Digital Service
        dg = pdf["digital"]
        if dg.get("kanwil"):
            S["digitalKanwil"] = dg["kanwil"]
        if dg.get("kartu"):
            S["digitalKartu"] = dict(dg["kartu"], peringkat=dg.get("peringkat"), dari=dg.get("dari"))
        dc = by(S.get("digitalCabang"), "nama")
        for r in dg.get("cabang", []):
            row = dc.setdefault(r["nama"], {"nama": r["nama"]})
            put(row, r, ["pctCapJHT", "pctCapJP", "pctCapBea", "hasil"], tag("digitalCabang." + r["nama"]))
        if dc:
            S["digitalCabang"] = list(dc.values())
        nar["digital"] = dg.get("narasi")

        # ---- SLA Klaim
        sl = pdf["sla"]
        sc = by(S.get("slaKlaim"), "kode")
        for r in sl.get("cabang", []):
            row = sc.setdefault(r["kode"], {"kode": r["kode"]})
            row["nama"] = r["nama"]
            put(row, r, ["jht", "jkk", "jkm", "jpn", "totalSla", "pencapaian"], tag("slaKlaim." + r["kode"]))
            row["jkp"] = r["jkp"]
            row["total"] = sum(row.get(k) or 0 for k in ("jht", "jkk", "jkm", "jpn", "jkp"))
        if sc:
            S["slaKlaim"] = list(sc.values())
        if sl.get("kpi"):
            S["slaKpi"] = sl["kpi"]
        if sl.get("terendah"):
            S["slaTerendah"] = sl["terendah"]
        nar["sla"] = sl.get("narasi")

        # ---- Pengaduan
        pg = pdf["pengaduan"]
        pc = by(S.get("pengaduan"), "kode")
        for r in pg.get("cabang", []):
            row = pc.setdefault(r["kode"], {"kode": r["kode"]})
            row["nama"] = r["nama"]
            put(row, r, ["total", "sesuaiSla", "pencapaian", "bobot", "skor"], tag("pengaduan." + r["kode"]))
        if pc:
            S["pengaduan"] = list(pc.values())
        nar["pengaduan"] = pg.get("narasi")

        # ---- MLT
        ml = pdf["mlt"]
        mc = by(S.get("mlt"), "nama")
        for r in ml.get("cabang", []):
            row = mc.setdefault(r["nama"], {"nama": r["nama"]})
            put(row, r, ["targetUnit", "targetNominal", "targetUnit120", "targetNominal120", "realUnit",
                         "realNominal", "pctUnit", "pctNominal"], tag("mlt." + r["nama"]))
        if mc:
            S["mlt"] = list(mc.values())
        if ml.get("kpi"):
            S["mltKpi"] = ml["kpi"]
        nar["mlt"] = ml.get("narasi")

        # ---- bagian baru (belum ada di versi sebelumnya)
        if pdf["klaim"].get("programs"):
            S["klaim"] = {k: pdf["klaim"].get(k) for k in ("programs", "cabang", "beasiswa")}
            S["klaim"] = {k: v for k, v in S["klaim"].items() if v}
        nar["klaim"] = pdf["klaim"].get("narasi")
        if pdf["unit"].get("petugas"):
            S["unit"] = {"jumlah": pdf["unit"].get("jumlah"), "petugas": pdf["unit"]["petugas"]}
        nar["unit"] = pdf["unit"].get("narasi")
        if pdf["igi"].get("matriks"):
            S["igi"] = {"matriks": pdf["igi"]["matriks"], "berjalan": pdf["igi"].get("berjalan")}
        nar["igi"] = pdf["igi"].get("narasi")

    S["narasi"] = {k: v for k, v in nar.items() if v}
    return {k: v for k, v in S.items() if v not in (None, [], {})}


def main():
    xlsx, jsons = sys.argv[1], sys.argv[2:]
    xl = ce.build(xlsx)
    pdfs = {}
    for j in jsons:
        d = json.load(open(j, encoding="utf-8"))
        pdfs[d["bulan"]] = d
    old = (HERE.parent.parent / "data" / "laporan_data.js").read_text(encoding="utf-8")
    head = old.split("const REPORT_DATA")[0]
    prev = {}
    try:
        prev = json.loads(old.split("const REPORT_DATA = ", 1)[1].rsplit(";", 1)[0])
    except Exception:
        pass
    out = {}
    for m in sorted(set(xl) | set(pdfs)):
        p = prev.get(str(m), {})
        out[str(m)] = {
            "periode": f"{ce.NAMA[m-1]} 2026",
            "pdf": ("assets/pdf/" + PDF_FILES[m]) if m in PDF_FILES and m in pdfs else p.get("pdf"),
            "catatan": p.get("catatan", []),
            "sections": merge_month(m, xl.get(m), pdfs.get(m)),
        }
    (HERE.parent.parent / "data" / "laporan_data.js").write_text(
        head + "const REPORT_DATA = " + json.dumps(out, ensure_ascii=False, indent=1) + ";\n", encoding="utf-8")
    print("Bulan:", [ce.NAMA[int(k) - 1] for k in out])
    print(f"Selisih Excel lama vs PDF baru ({len(diffs)}):")
    for d in diffs:
        print("  ", d)


if __name__ == "__main__":
    main()
