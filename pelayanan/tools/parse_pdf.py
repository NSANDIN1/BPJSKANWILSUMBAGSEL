"""
parse_pdf.py - OPSIONAL
Membaca PDF Monthly Report (dashboard 11 halaman) dan menyimpannya sebagai JSON.

Pemakaian:
    pip install -r tools/requirements.txt   (hanya openpyxl; PDF dibaca dengan 'pdftotext' dari poppler)
    python tools/parse_pdf.py 6 "Laporan_Juni.pdf" out/juni.json

Argumen pertama = NOMOR BULAN (diambil dari nama file, bukan dari sampul PDF).
Hanya angka yang benar-benar tercetak di PDF yang diambil. 'No data' / '-' menjadi null / dihilangkan.
"""
import json, re, subprocess, sys, html, tempfile, os
from collections import defaultdict

BULAN = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus",
         "September", "Oktober", "November", "Desember"]

KANWIL = ["SUMBARRIAU", "SUMBAGSEL", "SULAWESI MALUKU", "SUMBAGUT", "JATIM", "KALIMANTAN", "BANUSPA",
          "JAWA BARAT", "DKI JAKARTA", "BANTEN", "JATENG DAN DIY"]
CABANG = ["MUARA ENIM", "LAMPUNG TENGAH", "LAHAT PASAR LAMA", "BATANGHARI MUARA BULIAN",
          "LAMPUNG UTARA KOTABUMI", "TULANG BAWANG BANJAR AGUNG", "SUNGAI PENUH YOS SUDARSO",
          "MERANGIN BANGKO", "LAMPUNG SELATAN KALIANDA", "MUARO JAMBI SENGETI", "BELITUNG TANJUNG PANDAN",
          "BANDAR LAMPUNG", "PANGKAL PINANG", "MUARO BUNGO", "TANJUNG JABUNG BARAT KUALA TUNGKAL",
          "PALEMBANG", "PRINGSEWU SUDIRMAN", "REJANG LEBONG CURUP", "LUBUK LINGGAU YOS SUDARSO",
          "PRABUMULIH SUDIRMAN", "SAROLANGUN LINTAS SUMATERA", "BENGKULU", "JAMBI",
          "OGAN KOMERING ULU BATURAJA TIMUR", "KOTA METRO NASUTION", "BANYUASIN PANGKALAN BALAI",
          "ARGA MAKMUR"]


# ---------------------------------------------------------------- util
def ni(s):
    """'1,234' -> 1234 ; '-' / 'No data' -> None"""
    if s is None:
        return None
    s = s.strip().replace("Rp", "").strip()
    if s in ("", "-", "null", "No data"):
        return None
    s = s.replace(",", "")
    try:
        f = float(s)
    except ValueError:
        return None
    return int(f) if f.is_integer() else f


def nd(s):
    """desimal gaya Indonesia '100,00' -> 100.0"""
    if s is None or s.strip() in ("", "-"):
        return None
    return float(s.strip().replace("%", "").replace(".", "").replace(",", "."))


def pct(s):
    """'99.98%' -> 99.98 ; '-' -> None"""
    if s is None or s.strip() in ("", "-"):
        return None
    return float(s.strip().replace("%", "").replace(",", ""))


def dotint(s):
    """Angka pengaduan: '1.478' berarti 1478 (titik ribuan); '675' tetap 675."""
    s = s.strip()
    if re.fullmatch(r"\d{1,3}(\.\d{3})+", s):
        return int(s.replace(".", ""))
    try:
        f = float(s)
        return int(round(f)) if f.is_integer() else f
    except ValueError:
        return None


def load(pdf):
    out = tempfile.mktemp(suffix=".html")
    subprocess.run(["pdftotext", "-bbox-layout", pdf, out], check=True)
    s = open(out, encoding="utf-8").read()
    os.unlink(out)
    pages = []
    for pg in re.findall(r"<page .*?</page>", s, re.S):
        words = [(float(a), float(b), float(c), float(d), html.unescape(t).replace("\u200b", "").strip()) for a, b, c, d, t in
                 re.findall(r'<word xMin="([\d.]+)" yMin="([\d.]+)" xMax="([\d.]+)" yMax="([\d.]+)">(.*?)</word>', pg)]
        blocks = []
        for blk in re.findall(r"<block .*?</block>", pg, re.S):
            m = re.match(r'<block xMin="([\d.]+)" yMin="([\d.]+)"', blk)
            txt = " ".join(html.unescape(t) for t in re.findall(r"<word [^>]*>(.*?)</word>", blk))
            blocks.append((float(m.group(1)), float(m.group(2)), txt))
        pages.append({"words": words, "blocks": blocks})
    return pages


def rows(page, xmin=0, xmax=2000, ymin=0, ymax=3000, tol=3.0):
    """Kelompokkan kata menjadi baris (urut y lalu x) dalam area tertentu."""
    ws = [w for w in page["words"] if xmin <= (w[0] + w[2]) / 2 <= xmax and ymin <= w[1] <= ymax]
    ws.sort(key=lambda w: (round(w[1]), w[0]))
    out, cur, cy = [], [], None
    for w in sorted(ws, key=lambda w: w[1]):
        if cy is None or abs(w[1] - cy) <= tol:
            cur.append(w)
            cy = w[1] if cy is None else (cy + w[1]) / 2
        else:
            out.append(cur)
            cur, cy = [w], w[1]
    if cur:
        out.append(cur)
    res = []
    for r in out:
        r.sort(key=lambda w: w[0])
        res.append({"y": r[0][1], "words": r, "text": " ".join(w[4] for w in r)})
    return res


LABELS = ("Ringkasan", "Insight", "Perlu Ditingkatkan", "Rekomendasi", "Strategi", "Summary")


def narratives(page, keyword, month_name):
    """Blok teks panjang yang memuat kata kunci halaman, diberi label (Ringkasan/Insight/...) bila ada.
    Dibuang jika menyebut bulan lain (teks basi dari bulan sebelumnya)."""
    labels = [(y, x, t) for x, y, t in page["blocks"] if t.strip() in LABELS]
    seen, out = set(), []
    for x, y, t in sorted(page["blocks"], key=lambda b: b[1]):
        t = t.strip()
        if t in LABELS:
            continue
        # label di baris yang sama bisa menempel di awal blok ("Ringkasan Berdasarkan ...")
        lab = None
        for L in LABELS:
            if t.startswith(L + " "):
                lab, t = L, t[len(L):].strip()
        if len(t) < 120 or keyword.lower() not in t.lower():
            continue
        others = [b for b in BULAN if b != month_name and re.search(r"\b" + b + r"\s+2026", t)]
        if others or t in seen:
            continue
        seen.add(t)
        if lab is None:
            cand = [l for l in labels if l[0] <= y + 15 and l[1] <= x + 5]
            lab = max(cand, key=lambda l: l[0])[2] if cand else None
        out.append({"label": lab, "teks": t})
    # gabungkan blok berurutan dengan label sama; buang blok yang sudah termuat di blok lain
    merged = []
    for it in out:
        if merged and merged[-1]["label"] == it["label"] and it["label"] is not None:
            merged[-1]["teks"] += "\n" + it["teks"]
        else:
            merged.append(dict(it))
    return [m for m in merged if not any(m is not o and m["teks"] in o["teks"] for o in merged)]


# ---------------------------------------------------------------- halaman 4: klaim & beasiswa
def parse_klaim(page, month_name):
    res = {}
    progs = []
    for r in rows(page, xmax=460):
        m = re.fullmatch(r"(JHT|JKM|JKK|JP|JKP) ([\d,]+) ([\d,]+)", r["text"])
        if m:
            progs.append({"program": m.group(1), "kasus": ni(m.group(2)), "nominal": ni(m.group(3))})
    if progs:
        res["programs"] = progs
    cab = []
    for r in rows(page, xmin=462, ymin=330):
        m = re.fullmatch(r"([A-Z][A-Z ]+?) ([\d,]+) ([\d,]+)", r["text"])
        if m and m.group(1) in CABANG:
            cab.append({"nama": m.group(1), "kasus": ni(m.group(2)), "nominal": ni(m.group(3))})
    if cab:
        res["cabang"] = cab
    # beasiswa: total
    tot = {}
    for r in rows(page, xmin=440, ymin=990, ymax=1060):
        nums = [w[4] for w in r["words"] if re.fullmatch(r"[\d,]+", w[4])]
        if len(nums) == 2:
            tot = {"totalAnak": ni(nums[0]), "totalNominal": ni(nums[1])}
    # beasiswa: per jenjang (label grafik, dipetakan ke kategori terdekat secara horizontal)
    cats = {}
    for w in page["words"]:
        if w[4] in ("SD", "SMA", "SMP", "KULIAH", "TK", "LAINNYA") and w[0] < 400 and w[1] > 1150:
            cats[w[4]] = (w[0] + w[2]) / 2
    jenjang = {}
    if len(cats) == 6:
        ws = [w for w in page["words"] if w[0] < 380 and w[1] > 1030 and w[1] < cats["SD"] * 0 + 1230]
        toks = []
        ws.sort(key=lambda w: (round(w[1]), w[0]))
        i = 0
        while i < len(ws):
            t = ws[i][4]
            # "12 600 000" terpecah jadi 3 kata
            if re.fullmatch(r"\d{1,3}", t) and i + 2 < len(ws) and re.fullmatch(r"\d{3}", ws[i + 1][4]) \
                    and re.fullmatch(r"\d{3}", ws[i + 2][4]) and abs(ws[i + 1][1] - ws[i][1]) < 3:
                toks.append(((ws[i][0] + ws[i + 2][2]) / 2, ws[i][1], f"{t},{ws[i+1][4]},{ws[i+2][4]}"))
                i += 3
                continue
            toks.append(((ws[i][0] + ws[i][2]) / 2, ws[i][1], t))
            i += 1
        for cx, cy, t in toks:
            if not re.fullmatch(r"[\d,]+", t) or cy > 1215:
                continue
            cat = min(cats, key=lambda c: abs(cats[c] - cx))
            d = jenjang.setdefault(cat, {})
            if t.count(",") >= 2 and ni(t) >= 1_000_000:
                d["nominal"] = ni(t)
            elif t.count(",") <= 1 and ni(t) < 20000 and "kasus" not in d:
                d["kasus"] = ni(t)
    if tot:
        res["beasiswa"] = dict(tot, jenjang=jenjang or None)
    res["narasi"] = narratives(page, "beasiswa", month_name) + narratives(page, "klaim", month_name)
    return res


# ---------------------------------------------------------------- halaman 5: e-survey
CAT = ["SANGAT PUAS", "PUAS", "CUKUP PUAS", "KURANG PUAS", "TIDAK PUAS", "SANGAT TIDAK PUAS"]


def parse_esurvey(page, month_name):
    res = {}
    kp = {}
    for w in page["words"]:
        cx, cy = (w[0] + w[2]) / 2, w[1]
        if 150 < cy < 190:
            if cx < 300 and re.fullmatch(r"\d\.\d\d", w[4]) and "skor" not in kp:
                kp["skor"] = float(w[4])
            elif 320 < cx < 420 and re.fullmatch(r"\d{1,2}", w[4]) and "peringkat" not in kp:
                kp["peringkat"] = int(w[4])
            elif cx > 480 and re.fullmatch(r"\d+\.\d+%", w[4]) and "pctPuas" not in kp:
                kp["pctPuas"] = float(w[4][:-1])
            elif cx > 480 and w[4] == "PASSED":
                kp["status"] = "PASSED"
    t = " ".join(r["text"] for r in rows(page, xmin=440, ymin=215, ymax=250))
    m = re.search(r"(\d+) dari (\d+) responden", t)
    if m:
        kp["respondenPuas"], kp["respondenTotal"] = int(m.group(1)), int(m.group(2))
    if kp:
        res["kpi"] = kp
    kat = []
    for r in rows(page, xmin=560, ymin=290, ymax=420):
        m = re.fullmatch(r"(SANGAT PUAS|PUAS|CUKUP PUAS|KURANG PUAS|TIDAK PUAS|SANGAT TIDAK PUAS) ([\d,]+) ([\d.]+)%", r["text"])
        if m:
            kat.append({"kategori": m.group(1).title(), "responden": ni(m.group(2)), "persen": float(m.group(3))})
    if kat:
        res["kategori"] = kat
    kw = []
    for r in rows(page, xmax=345, ymin=280, ymax=560):
        m = re.fullmatch(r"([A-Z][A-Z ]+?) (\d\.\d\d?)", r["text"])
        if m and m.group(1) in KANWIL:
            kw.append({"nama": m.group(1), "skala5": float(m.group(2))})
    if kw:
        res["kanwil"] = kw
    s100 = {}
    for r in rows(page, xmin=400, ymin=470, ymax=560):
        m = re.fullmatch(r"([A-Z][A-Z ]+?) (\d\d(?:\.\d+)?) (\d\.\d+)", r["text"])
        if m and m.group(1) in KANWIL:
            s100[m.group(1)] = {"skala100": float(m.group(2)), "skala5": float(m.group(3))}
    if s100:
        res["skala100"] = s100
    top, bot, mode = [], [], None
    for r in rows(page, ymin=600):
        tx = r["text"]
        if "TOP 5" in tx:
            mode = "top"
        elif "BOTTOM 5" in tx:
            mode = "bot"
        m = re.fullmatch(r"([A-Z][A-Z ]+?) ((?:-|\d+) (?:-|\d+) (?:-|\d+) (?:-|\d+) (?:-|\d+)) (\d(?:\.\d+)?)", tx)
        if m and m.group(1) in CABANG and mode:
            v = [None if x == "-" else int(x) for x in m.group(2).split()]
            item = {"nama": m.group(1), "sangatTidakPuas": v[0], "tidakPuas": v[1], "kurangPuas": v[2],
                    "puas": v[3], "sangatPuas": v[4], "skala5": float(m.group(3))}
            (top if mode == "top" else bot).append(item)
    if top:
        res["top5"] = top
    if bot:
        res["bottom5"] = bot
    skor = res.get("kpi", {}).get("skor")
    nar = narratives(page, "kepuasan", month_name)
    if skor is not None:
        key = f"{skor:.2f}".replace(".", ",")
        nar = [n for n in nar if key in n["teks"]]       # buang teks basi yang menyebut skor berbeda
    res["narasi"] = nar
    return res


# ---------------------------------------------------------------- halaman 6: digital service
def parse_digital(page, month_name):
    res = {}
    kw = []
    for r in rows(page, xmax=560, ymin=240, ymax=520):
        m = re.fullmatch(r"(\d+) (9\d\d) ([A-Z][A-Z ]+?) (\d+) (\d+,\d\d) (\d+,\d\d) ([\d.]+)", r["text"])
        if m:
            kw.append({"peringkat": int(m.group(1)), "kode": m.group(2), "nama": "KANWIL " + m.group(3),
                       "bobot": int(m.group(4)), "target": nd(m.group(5)), "realisasi": nd(m.group(6)),
                       "pencapaian": float(m.group(7))})
    if kw:
        res["kanwil"] = kw
    for w in page["words"]:
        if w[0] < 200 and 130 < w[1] < 175 and re.fullmatch(r"\d{1,2}", w[4]):
            res["peringkat"] = int(w[4])
    m = re.search(r"Dari (\d+) Kanwil", " ".join(r["text"] for r in rows(page, xmax=300, ymin=195, ymax=230)))
    if m:
        res["dari"] = int(m.group(1))
    # kartu JHT / JP / Beasiswa (kanan)
    nums, pcts = [], []
    for r in rows(page, xmin=600, ymin=250, ymax=560):
        for w in r["words"]:
            if re.fullmatch(r"[\d,]+", w[4]) and (w[4].count(",") or len(w[4]) >= 3) and w[2] - w[0] > 25:
                nums.append(ni(w[4]))
            if re.fullmatch(r"\d+\.\d\d%", w[4]):
                pcts.append(float(w[4][:-1]))
    if len(nums) >= 3 and len(pcts) >= 3:
        res["kartu"] = {"targetJHT": nums[0], "pctJHT": pcts[0], "targetJP": nums[1], "pctJP": pcts[1],
                        "targetBea": nums[2], "pctBea": pcts[2]}
    cab = []
    for r in rows(page, xmax=560, ymin=585):
        m = re.fullmatch(r"([A-Za-z][A-Za-z ]+?) ([\d.]+)% ([\d.]+)% ([\d.]+)% ([\d.]+)%", r["text"])
        if m:
            cab.append({"nama": m.group(1), "pctCapJHT": float(m.group(2)) / 100, "pctCapJP": float(m.group(3)) / 100,
                        "pctCapBea": float(m.group(4)) / 100, "hasil": float(m.group(5)) / 100})
    if cab:
        res["cabang"] = cab
    res["narasi"] = narratives(page, "Digital Service", month_name) + narratives(page, "JMO", month_name)
    return res


# ---------------------------------------------------------------- halaman 7: SLA klaim
def parse_sla(page, month_name):
    res = {}
    kk = [w for r in rows(page, ymin=170, ymax=205) for w in r["words"]]
    nums = [w[4] for w in sorted(kk, key=lambda w: w[0]) if re.fullmatch(r"[\d,]+", w[4])]
    pc = [w[4] for w in kk if re.fullmatch(r"[\d.]+%", w[4])]
    if len(nums) >= 3:
        res["kpi"] = {"total": ni(nums[0]), "terpenuhi": ni(nums[1]), "over": ni(nums[2]),
                      "pct": float(pc[0][:-1]) if pc else None}
    tr = []
    for r in rows(page, xmin=340, ymin=320, ymax=560):
        m = re.fullmatch(r"([A-Z][A-Z ]+?) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+)", r["text"])
        if m and m.group(1) in CABANG:
            v = list(map(int, m.groups()[1:]))
            tr.append({"nama": m.group(1), "jht": v[0], "jkk": v[1], "jkm": v[2], "jpn": v[3], "jkp": v[4], "jumlah": v[5]})
    if tr:
        res["terendah"] = tr
    cab = []
    for r in rows(page, xmax=700, ymin=500):
        m = re.fullmatch(r"([EGH]\d\d) ([A-Z][A-Z ]+?) (\d+) (\d+) (\d+) (\d+) (\d+) (\d+) ([\d.]+)%", r["text"])
        if m:
            v = list(map(int, m.groups()[2:8]))
            cab.append({"kode": m.group(1), "nama": m.group(2), "jht": v[0], "jkk": v[1], "jkm": v[2], "jpn": v[3],
                        "jkp": v[4], "totalSla": v[5], "pencapaian": float(m.group(9)) / 100})
    if cab:
        res["cabang"] = cab
    res["narasi"] = [n for n in narratives(page, "SLA", month_name) if "Kepuasan" not in n]
    return res


# ---------------------------------------------------------------- halaman 8: pengaduan
def parse_pengaduan(page, month_name):
    res = {}
    cab = []
    for r in rows(page, ymin=200):
        m = re.fullmatch(r"([EGH]\d\d) ([A-Z][A-Z ]+?) ([\d.]+) ([\d.]+) (\S+) ([\d.]+) (\d+) (\d+)", r["text"])
        if m:
            cab.append({"kode": m.group(1), "nama": m.group(2), "total": dotint(m.group(3)),
                        "sesuaiSla": dotint(m.group(4)), "pencapaian": float(m.group(6)),
                        "bobot": int(m.group(7)), "skor": int(m.group(8))})
    if cab:
        res["cabang"] = cab
    kp = "\n".join(r["text"] for r in rows(page, ymax=200))
    res["kpiPdf"] = kp
    res["narasi"] = [n for n in narratives(page, "pengaduan", month_name) if "Kepuasan" not in n]
    return res


# ---------------------------------------------------------------- halaman 9: MLT
def parse_mlt(page, month_name):
    res = {}
    kk = [w for r in rows(page, ymin=185, ymax=215) for w in r["words"]]
    kk.sort(key=lambda w: w[0])
    unit = [w[4] for w in kk if re.fullmatch(r"\d+", w[4])]
    rp = [w[4] for w in kk if w[4].startswith("Rp")]
    pc = [w[4] for w in kk if w[4].endswith("%")]
    if unit and rp and len(pc) >= 2:
        res["kpi"] = {"realUnit": int(unit[0]), "realNominal": int(re.sub(r"\D", "", rp[0])),
                      "pctUnit": float(pc[0][:-1].replace(",", ".")), "pctNominal": float(pc[1][:-1].replace(",", "."))}
    cab = []
    for r in rows(page, ymin=300):
        tx = r["text"]
        m = re.fullmatch(r"([A-Za-z][A-Za-z ]+?) (\d+) Rp([\d,.]+) (\d+) (-|Rp[\d,.]+) (-|\d+) (-|Rp[\d,.]+) ([\d.,]+)% ([\d.,]+)%", tx)
        if m:
            cab.append({"nama": m.group(1), "targetUnit": int(m.group(2)), "targetNominal": ni(m.group(3).rsplit(".", 1)[0]),
                        "targetUnit120": int(m.group(4)), "targetNominal120": ni(m.group(5).rsplit(".", 1)[0]) if m.group(5) != "-" else None,
                        "realUnit": None if m.group(6) == "-" else int(m.group(6)),
                        "realNominal": None if m.group(7) == "-" else ni(m.group(7).rsplit(".", 1)[0]),
                        "pctUnit": float(m.group(8).replace(",", "")) / 100, "pctNominal": float(m.group(9).replace(",", "")) / 100})
            continue
        m = re.fullmatch(r"(Kanwil Sumbagsel) (\d+) Rp([\d,.]+) (\d+)(?: .*)?", tx)
        if m:
            cab.append({"nama": m.group(1), "targetUnit": int(m.group(2)), "targetNominal": ni(m.group(3).rsplit(".", 1)[0]),
                        "targetUnit120": int(m.group(4))})
    if cab:
        res["cabang"] = cab
    res["narasi"] = narratives(page, "MLT", month_name)
    return res


# ---------------------------------------------------------------- halaman 10: unit layanan
def parse_unit(page, month_name):
    res = {}
    nums = [w[4] for r in rows(page, ymin=195, ymax=215, xmax=400) for w in r["words"] if re.fullmatch(r"\d+", w[4])]
    if len(nums) >= 2:
        res["jumlah"] = {"pmi": int(nums[0]), "kabKota": int(nums[1])}
    hdr = [w for r in rows(page, ymin=170, ymax=330) for w in r["words"]
           if w[4] in ("NAMA", "CABANG", "PENEMPATAN") and w[1] < 330]
    hx = {}
    for r in rows(page, ymin=170, ymax=330):
        for w in r["words"]:
            if w[4] == "PETUGAS" and "NAMA" in r["text"]:
                hx["nama"] = [x for x in r["words"] if x[4] == "NAMA"][0][0]
            if w[4] == "PAIRING":
                hx["cabang"] = [x for x in r["words"] if x[4] == "CABANG"][0][0]
            if w[4] == "MITRA" and "NAMA" in r["text"]:
                hx["mitra"] = [x for x in r["words"] if x[4] == "NAMA" and x[0] > hx.get("cabang", 0)][0][0]
            if w[4] == "PENEMPATAN":
                hx["penempatan"] = w[0]
    if len(hx) == 4:
        b = sorted(hx.items(), key=lambda kv: kv[1])
        items, start = [], None
        for r in rows(page, ymin=min(w[1] for w in page["words"] if w[4] == "PENEMPATAN") + 8, ymax=1150):
            cols = {k: [] for k in hx}
            for w in r["words"]:
                k = [kk for kk, xx in b if w[0] >= xx - 3][-1] if w[0] >= b[0][1] - 3 else None
                if k:
                    cols[k].append(w[4])
            c = {k: " ".join(v) for k, v in cols.items()}
            if c["nama"] and c["cabang"]:
                items.append(c)
            elif items and c["penempatan"]:
                items[-1]["penempatan"] += " " + c["penempatan"]
        res["petugas"] = [{"petugas": i["nama"], "cabang": i["cabang"], "mitra": i["mitra"], "penempatan": i["penempatan"]}
                          for i in items if i["mitra"]]
    res["narasi"] = narratives(page, "Unit Layanan", month_name)
    return res


# ---------------------------------------------------------------- halaman 11: IGI e-PLKK
def parse_igi(page, month_name):
    res = {}
    hdr = None
    mat = []
    cur = []
    for r in rows(page):
        t = r["text"]
        if t.startswith("NAMA KANTOR FEBRUARI"):
            hdr = t.split()[2:]
            continue
        m = re.fullmatch(r"([A-Z][A-Z ]+?) ((?:\d+(?:[.,]\d+)? ){8}\d+(?:[.,]\d+)?)", t)
        if m and hdr and m.group(1) in ("MUARA ENIM", "PALEMBANG", "BENGKULU", "PANGKAL PINANG", "MUARO BUNGO",
                                         "JAMBI", "LAMPUNG TENGAH", "BANDAR LAMPUNG"):
            vals = [float(x.replace(",", ".")) for x in m.group(2).split()]
            mat.append({"nama": m.group(1), "bulan": dict(zip(["Februari", "Maret", "April", "Mei", "Juni", "Juli",
                                                                 "Agustus", "September"], vals[:8])), "capaian": vals[8]})
            continue
        m = re.fullmatch(r"([A-Z][A-Z ]+?) (\d+) (\d+) ([\d,.]+)% ([\d.,]+)", t)
        if m and m.group(1) in ("PALEMBANG", "JAMBI", "MUARO BUNGO", "MUARA ENIM", "PANGKAL PINANG", "LAMPUNG TENGAH",
                                "BENGKULU", "BANDAR LAMPUNG"):
            cur.append({"nama": m.group(1), "total": int(m.group(2)), "sesuaiSla": int(m.group(3)),
                        "capaian": float(m.group(4).replace(",", ".")), "nilai": float(m.group(5).replace(",", "."))})
    if mat:
        res["matriks"] = mat
    if cur:
        res["berjalan"] = cur
    res["narasi"] = narratives(page, "e-PLKK", month_name)
    return res


def parse(pdf, month):
    name = BULAN[month - 1]
    P = load(pdf)
    return {
        "bulan": month, "periode": f"{name} 2026",
        "klaim": parse_klaim(P[3], name), "esurvey": parse_esurvey(P[4], name),
        "digital": parse_digital(P[5], name), "sla": parse_sla(P[6], name),
        "pengaduan": parse_pengaduan(P[7], name), "mlt": parse_mlt(P[8], name),
        "unit": parse_unit(P[9], name), "igi": parse_igi(P[10], name),
    }


if __name__ == "__main__":
    if len(sys.argv) < 4:
        print(__doc__); sys.exit(1)
    out = parse(sys.argv[2], int(sys.argv[1]))
    os.makedirs(os.path.dirname(os.path.abspath(sys.argv[3])), exist_ok=True)
    json.dump(out, open(sys.argv[3], "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    print("OK ->", sys.argv[3])
