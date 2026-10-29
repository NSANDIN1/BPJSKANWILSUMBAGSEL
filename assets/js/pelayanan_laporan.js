/* pelayanan_laporan.js - membangun halaman pelayanan/laporan.php dari REPORT_DATA (pelayanan/data.php).
   Membutuhkan pelayanan_main.js (format angka). */

/* Daftar bagian (tab). key = nama field di data.js -> sections */
const TABS = [
  { id: "ringkasan", icon: "fa-gauge-high", label: "Ringkasan", needs: [] },
  { id: "klaim", icon: "fa-money-bill-wave", label: "Pembayaran Klaim", needs: ["klaim"] },
  { id: "esurvey", icon: "fa-face-smile", label: "E-Survey", needs: ["esurveyKanwil", "esurveyCabang", "esurveyTop5", "esurveyBottom5"] },
  { id: "digital", icon: "fa-mobile-screen", label: "Digital Service", needs: ["digitalKanwil", "digitalCabang"] },
  { id: "sla", icon: "fa-stopwatch", label: "SLA Klaim", needs: ["slaKlaim"] },
  { id: "pengaduan", icon: "fa-headset", label: "Pengaduan", needs: ["pengaduan"] },
  { id: "mlt", icon: "fa-house-chimney", label: "MLT", needs: ["mlt"] },
  { id: "unit", icon: "fa-location-dot", label: "Unit Layanan", needs: ["unit"] },
  { id: "igi", icon: "fa-briefcase-medical", label: "IGI e-PLKK", needs: ["igi"] }
];
const SUMBAGSEL = /sumbagsel/i;

/* persen dibulatkan ke bawah agar 99,9988% tidak tampil sebagai 100,00% */
function fPctDown(v) { return v == null ? "-" : nf2.format(Math.floor(v * 100) / 100) + "%"; }
function sum(rows, key) { return rows.reduce((t, r) => t + (r[key] || 0), 0); }
function hasTab(tab, S) {
  return tab.needs.length === 0 || tab.needs.some(k => {
    const v = S[k];
    return Array.isArray(v) ? v.length > 0 : !!v && Object.keys(v).length > 0;
  });
}

/* ---------- komponen ---------- */
const CARD_ICONS = [[/e-survey|kepuasan|responden/i, "fa-face-smile"], [/digital|jmo|jht via|jp berkala/i, "fa-mobile-screen"],
  [/beasiswa/i, "fa-graduation-cap"], [/klaim|pembayaran/i, "fa-money-bill-wave"], [/pengaduan/i, "fa-headset"], [/mlt/i, "fa-house-chimney"],
  [/unit layanan|titik|pmi|kab\/kota/i, "fa-location-dot"], [/peringkat/i, "fa-ranking-star"], [/sla/i, "fa-stopwatch"], [/target|realisasi|nominal/i, "fa-bullseye"]];
function iconFor(label) {
  const m = CARD_ICONS.find(x => x[0].test(label));
  return m ? m[1] : "fa-chart-simple";
}
function card(label, value, sub, accent) {
  return '<div class="card' + (accent ? " accent" : "") + '"><div class="cbody"><div class="label">' + esc(label) +
    '</div><div class="value">' + value + '</div>' + (sub ? '<div class="sub">' + sub + '</div>' : "") + '</div><span class="ico"><i class="fa-solid ' + iconFor(label) + '"></i></span></div>';
}

/* grafik batang. items: [{label, value, value2?, hl?}] */
function barChart(items, opt) {
  opt = opt || {};
  const fmt = opt.fmt || fDec;
  const max = opt.max || Math.max.apply(null, items.map(i => Math.max(i.value || 0, i.value2 || 0)).concat([1]));
  const rows = items.map(i => {
    const w = Math.max(0, (i.value || 0) / max * 100);
    const w2 = i.value2 != null ? Math.max(0, i.value2 / max * 100) : null;
    return '<div class="bar-row"><div class="bar-label" title="' + esc(i.label) + '">' + esc(i.label) + '</div>' +
      '<div class="bar-track">' +
      (w2 != null ? '<div class="bar-fill alt" style="width:' + w2 + '%"></div>' : "") +
      '<div class="bar-fill' + (i.hl ? " hl" : "") + '" style="width:' + w + '%"></div>' +
      '<span class="bar-val">' + (opt.valueLabel ? opt.valueLabel(i) : fmt(i.value)) + "</span></div></div>";
  }).join("");
  return '<div class="bars">' + rows + "</div>";
}

/* tabel dengan pencarian + urut kolom. cols: [{key,label,fmt,num}] */
let tableSeq = 0;
function dataTable(cols, rows, opt) {
  opt = opt || {};
  const id = "tb" + (++tableSeq);
  const head = cols.map((c, i) => '<th class="' + (c.num ? "num" : "") + '" data-i="' + i + '">' + esc(c.label) + "</th>").join("");
  const body = rows.map(r => {
    const hl = opt.hl && opt.hl(r) ? ' class="hl"' : "";
    return "<tr" + hl + ">" + cols.map(c => {
      const raw = r[c.key];
      const txt = raw == null ? '<span class="no-data">-</span>' : esc(c.fmt ? c.fmt(raw, r) : raw);
      return '<td class="' + (c.num ? "num" : "") + '" data-v="' + esc(raw == null ? "" : raw) + '">' + txt + "</td>";
    }).join("") + "</tr>";
  }).join("");
  let foot = "";
  if (opt.total) foot = "<tfoot><tr>" + cols.map((c, i) => '<td class="' + (c.num ? "num" : "") + '">' + (opt.total[c.key] != null ? esc(opt.total[c.key]) : (i === 0 ? "Total" : "")) + "</td>").join("") + "</tr></tfoot>";
  return '<div class="table-tools"><div class="search"><i class="fa-solid fa-magnifying-glass"></i><input type="search" placeholder="Cari…" aria-label="Cari di tabel" data-search="' + id + '"></div></div>' +
    '<div class="table-wrap"><table id="' + id + '"><thead><tr>' + head + "</tr></thead><tbody>" + body + "</tbody>" + foot + "</table></div>";
}

function wireTables(root) {
  root.querySelectorAll("input[data-search]").forEach(inp => {
    inp.addEventListener("input", () => {
      const q = inp.value.trim().toLowerCase();
      document.querySelectorAll("#" + inp.dataset.search + " tbody tr").forEach(tr => {
        tr.style.display = tr.textContent.toLowerCase().includes(q) ? "" : "none";
      });
    });
  });
  root.querySelectorAll("table").forEach(t => {
    t.querySelectorAll("th").forEach(th => th.addEventListener("click", () => {
      const i = Number(th.dataset.i);
      const dir = th.dataset.dir === "asc" ? "desc" : "asc";
      t.querySelectorAll("th").forEach(x => x.removeAttribute("data-dir"));
      th.dataset.dir = dir;
      const tb = t.tBodies[0];
      const rows = Array.from(tb.rows);
      rows.sort((a, b) => {
        const x = a.cells[i].dataset.v, y = b.cells[i].dataset.v;
        const nx = parseFloat(x), ny = parseFloat(y);
        const cmp = (x !== "" && y !== "" && !isNaN(nx) && !isNaN(ny)) ? nx - ny : x.localeCompare(y, "id");
        return dir === "asc" ? cmp : -cmp;
      });
      rows.forEach(r => tb.appendChild(r));
    }));
  });
}

function panel(title, hint, inner) {
  return '<section class="panel"><div class="panel-head"><div class="chip-ico"><i class="fa-solid ' + iconFor(title) + '"></i></div><h3>' + esc(title) + "</h3></div>" +
    (hint ? '<p class="hint" style="margin:-6px 0 16px">' + esc(hint) + "</p>" : "") + inner + "</section>";
}
function emptySection(text) {
  return '<div class="empty-state"><div class="big"><i class="fa-regular fa-folder-open"></i></div><h2>Data belum tersedia</h2><p>' + esc(text) + "</p></div>";
}

/* ---------- isi tiap tab ---------- */
function narasiPanel(S, key) {
  const list = S.narasi && S.narasi[key];
  if (!list || !list.length) return "";
  return panel("Narasi dari laporan PDF", "Teks analisis sebagaimana tercantum di dokumen sumber.",
    list.map(n => '<div class="narasi">' + (n.label ? "<h4>" + esc(n.label) + "</h4>" : "") +
      n.teks.split("\n").map(p => "<p>" + esc(p) + "</p>").join("") + "</div>").join(""));
}
function stackBar(parts, total) {
  return '<div class="stack">' + parts.map(p => '<div style="width:' + (total ? p[1] / total * 100 : 0) + '%;background:' + p[2] + '" title="' + esc(p[0]) + '"></div>').join("") + "</div>" +
    '<div class="legend">' + parts.map(p => '<span><i style="background:' + p[2] + '"></i>' + esc(p[0]) + ": " + (p[3] ? p[3](p[1]) : fInt(p[1])) + " (" + fPct(total ? p[1] / total * 100 : 0) + ")</span>").join("") + "</div>";
}
const PALET = ["#0078C8", "#00B140", "#88C438", "#D4E116", "#94a3b8", "#cbd5e1"];

function slaTotals(S) {
  if (S.slaKpi) return { tot: S.slaKpi.total, ok: S.slaKpi.terpenuhi };
  if (S.slaKlaim && S.slaKlaim.length) return { tot: sum(S.slaKlaim, "total"), ok: sum(S.slaKlaim, "totalSla") };
  return null;
}

function renderRingkasan(S) {
  let html = '<div class="cards">';
  let any = false;
  const kp = S.esurveyKpi;
  const k = (S.esurveyKanwil || []).find(r => SUMBAGSEL.test(r.nama));
  if (kp) {
    html += card("E-Survey Sumbagsel (skala 5)", fDec(kp.skor), "Peringkat " + kp.peringkat + " dari " + (S.esurveyKanwil || []).length + " Kanwil · " + esc(kp.status || ""), true);
    html += card("Responden puas + sangat puas", fPct(kp.pctPuas), fInt(kp.respondenPuas) + " dari " + fInt(kp.respondenTotal) + " responden");
    any = true;
  } else if (k) {
    html += card("E-Survey Sumbagsel (skala 5)", fDec(k.skala5), "", true);
    any = true;
  } else if (S.esurveyCabang && S.esurveyCabang.length) {
    html += card("E-Survey Cabang", fInt(S.esurveyCabang.length), "kantor cabang tercatat", true);
    any = true;
  }
  const d = (S.digitalKanwil || []).find(r => SUMBAGSEL.test(r.nama));
  if (d) {
    const sorted = S.digitalKanwil.slice().sort((a, b) => b.pencapaian - a.pencapaian);
    html += card("Digital Service Sumbagsel", fDec(d.realisasi), "Target " + fDec(d.target) + " · Capaian " + fPct(d.pencapaian) + " · Peringkat " + (sorted.findIndex(r => r === d) + 1) + "/" + sorted.length, true);
    any = true;
  }
  if (S.klaim && S.klaim.programs) {
    const tk = sum(S.klaim.programs, "kasus"), tn = sum(S.klaim.programs, "nominal");
    html += card("Pembayaran klaim", fInt(tk) + " kasus", fRpShort(tn), true);
    any = true;
  }
  if (S.klaim && S.klaim.beasiswa) {
    html += card("Beasiswa anak", fInt(S.klaim.beasiswa.totalAnak) + " anak", fRpShort(S.klaim.beasiswa.totalNominal), true);
    any = true;
  }
  const st = slaTotals(S);
  if (st) {
    html += card("Klaim sesuai SLA", fPctDown(st.tot ? st.ok / st.tot * 100 : null), fInt(st.ok) + " dari " + fInt(st.tot) + " klaim" + (S.slaKpi ? " · " + fInt(S.slaKpi.over) + " melewati SLA" : ""), true);
    any = true;
  }
  if (S.pengaduan && S.pengaduan.length) {
    const tot = sum(S.pengaduan, "total"), ok = sum(S.pengaduan, "sesuaiSla");
    html += card("Pengaduan sesuai SLA", fPctDown(tot ? ok / tot * 100 : null), fInt(ok) + " dari " + fInt(tot) + " pengaduan", true);
    any = true;
  }
  if (S.mlt && S.mlt.length) {
    const rows = S.mlt.filter(r => !/kanwil/i.test(r.nama));
    const kk = S.mltKpi;
    const ru = kk ? kk.realUnit : sum(rows, "realUnit"), rn = kk ? kk.realNominal : sum(rows, "realNominal");
    html += card("MLT realisasi unit", fInt(ru) + " / " + fInt(sum(rows, "targetUnit")), "Realisasi nominal " + fRpShort(rn), true);
    any = true;
  }
  if (S.unit && S.unit.jumlah) {
    html += card("Unit Layanan", fInt(S.unit.jumlah.pmi + S.unit.jumlah.kabKota) + " titik", S.unit.jumlah.pmi + " PMI · " + S.unit.jumlah.kabKota + " Kab/Kota", true);
    any = true;
  }
  html += "</div>";
  if (!any) return emptySection("Belum ada indikator yang tercatat untuk bulan ini.");

  const lines = [];
  if (d) lines.push({ ind: "Digital Service (Kanwil Sumbagsel)", target: fDec(d.target), real: fDec(d.realisasi), cap: fPct(d.pencapaian) });
  if (S.digitalKartu) {
    const c = S.digitalKartu;
    lines.push({ ind: "Digital Service: Klaim JHT via JMO", target: fInt(c.targetJHT), real: "-", cap: fPct(c.pctJHT) });
    lines.push({ ind: "Digital Service: JP Berkala", target: fInt(c.targetJP), real: "-", cap: fPct(c.pctJP) });
    lines.push({ ind: "Digital Service: Beasiswa JMO", target: fInt(c.targetBea), real: "-", cap: fPct(c.pctBea) });
  }
  if (st) lines.push({ ind: "Klaim sesuai SLA", target: fInt(st.tot) + " klaim", real: fInt(st.ok) + " klaim", cap: fPctDown(st.tot ? st.ok / st.tot * 100 : null) });
  if (S.pengaduan && S.pengaduan.length) {
    const tot = sum(S.pengaduan, "total"), ok = sum(S.pengaduan, "sesuaiSla");
    lines.push({ ind: "Pengaduan sesuai SLA", target: fInt(tot) + " pengaduan", real: fInt(ok) + " pengaduan", cap: fPctDown(tot ? ok / tot * 100 : null) });
  }
  if (S.mlt && S.mlt.length) {
    const rows = S.mlt.filter(r => !/kanwil/i.test(r.nama));
    const tu = sum(rows, "targetUnit"), ru = sum(rows, "realUnit");
    lines.push({ ind: "MLT (unit)", target: fInt(tu), real: fInt(ru), cap: S.mltKpi ? fPct(S.mltKpi.pctUnit) : fPct(tu ? ru / tu * 100 : null) });
  }
  if (lines.length) {
    html += panel("Target, realisasi, dan capaian", "Kolom realisasi bertanda “-” berarti PDF hanya mencantumkan target dan persentase capaian.",
      '<div class="table-wrap"><table><thead><tr><th>Indikator</th><th class="num">Target</th><th class="num">Realisasi</th><th class="num">Capaian</th></tr></thead><tbody>' +
      lines.map(l => "<tr><td>" + esc(l.ind) + '</td><td class="num">' + esc(l.target) + '</td><td class="num">' + esc(l.real) + '</td><td class="num">' + esc(l.cap) + "</td></tr>").join("") +
      "</tbody></table></div>");
  }
  const missing = TABS.filter(t => t.id !== "ringkasan" && !hasTab(t, S)).map(t => t.label);
  if (missing.length) html += '<p class="hint">Bagian yang datanya belum tersedia bulan ini: ' + esc(missing.join(", ")) + ".</p>";
  return html;
}

function renderKlaim(S) {
  const K = S.klaim;
  if (!K) return emptySection("Data pembayaran klaim bulan ini belum tersedia.");
  const prog = K.programs || [];
  const tk = sum(prog, "kasus"), tn = sum(prog, "nominal");
  let html = '<div class="cards">' + card("Total kasus klaim", fInt(tk), "", true) + card("Total nominal klaim", fRpShort(tn), fRp(tn), true) + "</div>";
  html += '<div class="two-col">' +
    panel("Komposisi kasus per program", "", stackBar(prog.map((p, i) => [p.program, p.kasus, PALET[i]]), tk)) +
    panel("Komposisi nominal per program", "", stackBar(prog.map((p, i) => [p.program, p.nominal, PALET[i], fRpShort]), tn)) + "</div>";
  html += panel("Pembayaran klaim per program", "",
    dataTable([{ key: "program", label: "Program" }, { key: "kasus", label: "Total kasus", fmt: fInt, num: 1 }, { key: "nominal", label: "Nominal klaim", fmt: fRp, num: 1 }], prog, { total: { kasus: fInt(tk), nominal: fRp(tn) } }));
  if (K.cabang) {
    const cb = K.cabang.slice().sort((a, b) => b.kasus - a.kasus);
    html += panel("Kasus klaim per kantor cabang", "Diurutkan dari terbanyak.", barChart(cb.map(r => ({ label: r.nama, value: r.kasus })), { fmt: fInt }));
    html += panel("Pembayaran klaim per kantor cabang", "", dataTable([{ key: "nama", label: "Kantor cabang" }, { key: "kasus", label: "Total kasus", fmt: fInt, num: 1 }, { key: "nominal", label: "Nominal klaim", fmt: fRp, num: 1 }], cb,
      { total: { kasus: fInt(sum(cb, "kasus")), nominal: fRp(sum(cb, "nominal")) } }));
  }
  const B = K.beasiswa;
  if (B) {
    html += '<h2 class="section-title">Manfaat Beasiswa Anak</h2><div class="cards">' + card("Total anak penerima manfaat", fInt(B.totalAnak), "", true) + card("Total nominal beasiswa", fRpShort(B.totalNominal), fRp(B.totalNominal), true) + "</div>";
    if (B.jenjang) {
      const order = ["SD", "SMP", "SMA", "KULIAH", "TK", "LAINNYA"];
      const rows = order.filter(j => B.jenjang[j]).map(j => ({ jenjang: j === "KULIAH" ? "Kuliah" : j === "LAINNYA" ? "Lainnya" : j, kasus: B.jenjang[j].kasus, nominal: B.jenjang[j].nominal }));
      html += '<div class="two-col">' + panel("Penerima per jenjang", "", barChart(rows.map(r => ({ label: r.jenjang, value: r.kasus })), { fmt: fInt })) +
        panel("Nominal per jenjang", "", barChart(rows.map(r => ({ label: r.jenjang, value: r.nominal })), { fmt: fRpShort })) + "</div>";
      html += panel("Tabel beasiswa per jenjang", "Angka diambil dari label grafik pada PDF.",
        dataTable([{ key: "jenjang", label: "Jenjang" }, { key: "kasus", label: "Anak", fmt: fInt, num: 1 }, { key: "nominal", label: "Nominal", fmt: fRp, num: 1 }], rows));
    }
  } else {
    html += panel("Manfaat Beasiswa Anak", "", '<p class="no-data">Data belum tersedia untuk bulan ini (PDF mencantumkan “No data”).</p>');
  }
  return html + narasiPanel(S, "klaim");
}

function esCols(first, withCukup) {
  const c = [{ key: "nama", label: first }, { key: "sangatTidakPuas", label: "Sangat tidak puas", fmt: fInt, num: 1 },
    { key: "tidakPuas", label: "Tidak puas", fmt: fInt, num: 1 }, { key: "kurangPuas", label: "Kurang puas", fmt: fInt, num: 1 }];
  if (withCukup) c.push({ key: "cukupPuas", label: "Cukup puas", fmt: fInt, num: 1 });
  c.push({ key: "puas", label: "Puas", fmt: fInt, num: 1 }, { key: "sangatPuas", label: "Sangat puas", fmt: fInt, num: 1 },
    { key: "skala5", label: "Skala 5", fmt: fDec, num: 1 }, { key: "skala100", label: "Skala 100", fmt: fDec, num: 1 }, { key: "status", label: "Status" });
  return c;
}
function renderEsurvey(S) {
  let html = "";
  const kp = S.esurveyKpi;
  if (kp) {
    html += '<div class="cards">' + card("Skor kepuasan Sumbagsel", fDec(kp.skor), "Skala 1–6 · " + esc(kp.status || ""), true) +
      card("Peringkat nasional", fInt(kp.peringkat), "dari " + (S.esurveyKanwil || []).length + " Kanwil", true) +
      card("Responden puas + sangat puas", fPct(kp.pctPuas), fInt(kp.respondenPuas) + " dari " + fInt(kp.respondenTotal), true) + "</div>";
    if (kp.kategori && kp.kategori.length) {
      const tot = sum(kp.kategori, "responden");
      html += panel("Kategori kepuasan responden Sumbagsel", "", stackBar(kp.kategori.map((c, i) => [c.kategori, c.responden, PALET[i]]), tot));
    }
  }
  if (S.esurveyKanwil && S.esurveyKanwil.length) {
    const rows = S.esurveyKanwil.slice().sort((a, b) => b.skala5 - a.skala5);
    html += panel("Skor kepuasan antar Kanwil (skala 5)", "Diurutkan dari skor tertinggi; Sumbagsel disorot.",
      barChart(rows.map(r => ({ label: r.nama, value: r.skala5, hl: SUMBAGSEL.test(r.nama) })), { max: 6 }));
    html += panel("Detail E-Survey per Kanwil", "Rincian kategori hanya tersedia untuk Sumbagsel; skala 100 hanya untuk 3 Kanwil teratas (sesuai PDF).",
      dataTable(esCols("Kanwil", true), rows, { hl: r => SUMBAGSEL.test(r.nama) }));
  }
  if (S.esurveyCabang && S.esurveyCabang.length) {
    const rows = S.esurveyCabang.slice().sort((a, b) => b.skala5 - a.skala5);
    const valid = rows.filter(r => r.skala5 > 0);
    html += panel("Skor kepuasan per kantor cabang (skala 5)", "Cabang dengan skor 0 (tanpa responden) tidak ditampilkan di grafik, tetapi ada di tabel.",
      barChart(valid.map(r => ({ label: r.nama, value: r.skala5 })), { max: 6 }));
    html += panel("Detail E-Survey per Kantor Cabang", "Klik judul kolom untuk mengurutkan.", dataTable(esCols("Kantor cabang", true), rows));
  } else if (S.esurveyTop5 || S.esurveyBottom5) {
    if (S.esurveyTop5) html += panel("Top 5 kantor cabang: skor kepuasan tertinggi", "", dataTable(esCols("Kantor cabang", false).filter(c => c.key !== "skala100" && c.key !== "status"), S.esurveyTop5));
    if (S.esurveyBottom5) html += panel("Bottom 5 kantor cabang: skor kepuasan terendah", "", dataTable(esCols("Kantor cabang", false).filter(c => c.key !== "skala100" && c.key !== "status"), S.esurveyBottom5));
    html += '<p class="hint">Rincian seluruh kantor cabang bulan ini belum tersedia (PDF hanya memuat Top 5 dan Bottom 5).</p>';
  }
  return (html || emptySection("E-Survey bulan ini belum tersedia.")) + narasiPanel(S, "esurvey");
}

function renderDigital(S) {
  let html = "";
  const c = S.digitalKartu;
  if (c) {
    html += '<div class="cards">' +
      (c.peringkat ? card("Peringkat Sumbagsel", c.peringkat + " / " + c.dari, "Digital Service All Kanwil", true) : "") +
      card("Target JHT via JMO", fInt(c.targetJHT), "Capaian " + fPct(c.pctJHT), true) +
      card("Target JP Berkala", fInt(c.targetJP), "Capaian " + fPct(c.pctJP), true) +
      card("Target Beasiswa JMO", fInt(c.targetBea), "Capaian " + fPct(c.pctBea), true) + "</div>";
  }
  if (S.digitalKanwil && S.digitalKanwil.length) {
    const rows = S.digitalKanwil.slice().sort((a, b) => b.pencapaian - a.pencapaian);
    html += panel("Capaian Digital Service antar Kanwil", "Capaian terhadap target 100.",
      barChart(rows.map(r => ({ label: r.nama.replace(/^KANWIL /, ""), value: r.pencapaian, hl: SUMBAGSEL.test(r.nama) })), { max: 100, fmt: fDec }));
    html += panel("Tabel Digital Service per Kanwil", "",
      dataTable([
        { key: "peringkat", label: "Peringkat", fmt: fInt, num: 1 }, { key: "kode", label: "Kode" }, { key: "nama", label: "Kantor" },
        { key: "bobot", label: "Bobot", fmt: fInt, num: 1 }, { key: "target", label: "Target", fmt: fDec, num: 1 },
        { key: "realisasi", label: "Realisasi", fmt: fDec, num: 1 }, { key: "pencapaian", label: "Pencapaian", fmt: fPct, num: 1 }
      ], rows, { hl: r => SUMBAGSEL.test(r.nama) }));
  }
  if (S.digitalCabang && S.digitalCabang.length) {
    const rows = S.digitalCabang.slice().sort((a, b) => b.hasil - a.hasil);
    const full = rows.some(r => r.targetJHT != null);
    html += panel("Hasil akhir Digital Service per cabang", "Hasil akhir tiap kantor cabang (persen).",
      barChart(rows.map(r => ({ label: r.nama, value: r.hasil * 100 })), { max: 100, fmt: fDec }));
    const cols = [{ key: "nama", label: "Kantor cabang" }];
    if (full) cols.unshift({ key: "kode", label: "Kode" });
    if (full) cols.push({ key: "targetJHT", label: "Target JHT", fmt: fInt, num: 1 }, { key: "realJHT", label: "Realisasi JHT", fmt: fInt, num: 1 });
    cols.push({ key: "pctCapJHT", label: "Capaian JHT", fmt: fPctRatio, num: 1 });
    if (full) cols.push({ key: "targetJP", label: "Target JP", fmt: fInt, num: 1 }, { key: "realJP", label: "Realisasi JP", fmt: fInt, num: 1 });
    cols.push({ key: "pctCapJP", label: "Capaian JP", fmt: fPctRatio, num: 1 });
    if (full) cols.push({ key: "targetBea", label: "Target Beasiswa", fmt: fInt, num: 1 }, { key: "realBea", label: "Realisasi Beasiswa", fmt: fInt, num: 1 });
    cols.push({ key: "pctCapBea", label: "Capaian Beasiswa", fmt: fPctRatio, num: 1 }, { key: "hasil", label: "Hasil akhir", fmt: fPctRatio, num: 1 });
    html += panel("Tabel Digital Service per Kantor Cabang", full ? "JHT, JP, dan Beasiswa: target, realisasi, dan capaian." : "PDF bulan ini hanya memuat persentase capaian; target dan realisasi per cabang belum tersedia.", dataTable(cols, rows));
  }
  return (html || emptySection("Digital Service bulan ini belum tersedia.")) + narasiPanel(S, "digital");
}

function renderSla(S) {
  const rows = S.slaKlaim;
  if (!rows || !rows.length) return emptySection("SLA Klaim bulan ini belum tersedia.");
  const tj = sum(rows, "jht"), tk = sum(rows, "jkk"), tm = sum(rows, "jkm"), tp = sum(rows, "jpn"), tq = sum(rows, "jkp"), tt = sum(rows, "total"), ts = sum(rows, "totalSla");
  const K = S.slaKpi || { total: tt, terpenuhi: ts, over: tt - ts };
  let html = '<div class="cards">' +
    card("Total klaim", fInt(K.total), "JHT, JKK, JKM, JPN" + (tq || S.slaKpi ? ", JKP" : ""), true) +
    card("SLA terpenuhi", fInt(K.terpenuhi), "", true) + card("Over SLA", fInt(K.over), "", true) +
    card("% sesuai SLA", fPctDown(K.total ? K.terpenuhi / K.total * 100 : null), "", true) + "</div>";
  const parts = [["JHT", tj], ["JKK", tk], ["JKM", tm], ["JPN", tp], ["JKP", tq]].filter(p => p[1] > 0 || p[0] !== "JKP").map((p, i) => [p[0], p[1], PALET[i]]);
  html += panel("Komposisi klaim per program", "", stackBar(parts, tt));
  if (S.slaTerendah && S.slaTerendah.length) {
    html += panel("Cabang dengan klaim tidak sesuai SLA", "Jumlah klaim yang tidak sesuai SLA per program.",
      dataTable([{ key: "nama", label: "Kantor" }, { key: "jht", label: "JHT", fmt: fInt, num: 1 }, { key: "jkk", label: "JKK", fmt: fInt, num: 1 },
        { key: "jkm", label: "JKM", fmt: fInt, num: 1 }, { key: "jpn", label: "JPN", fmt: fInt, num: 1 }, { key: "jkp", label: "JKP", fmt: fInt, num: 1 },
        { key: "jumlah", label: "Jumlah tidak sesuai", fmt: fInt, num: 1 }], S.slaTerendah));
  }
  const top = rows.slice().sort((a, b) => b.total - a.total);
  html += panel("Jumlah klaim per kantor cabang", "Diurutkan dari klaim terbanyak.", barChart(top.map(r => ({ label: r.nama, value: r.total })), { fmt: fInt }));
  const withKpi = rows.some(r => r.skor != null);
  const cols = [{ key: "kode", label: "Kode" }, { key: "nama", label: "Kantor cabang" },
    { key: "jht", label: "JHT", fmt: fInt, num: 1 }, { key: "jkk", label: "JKK", fmt: fInt, num: 1 }, { key: "jkm", label: "JKM", fmt: fInt, num: 1 },
    { key: "jpn", label: "JPN", fmt: fInt, num: 1 }, { key: "jkp", label: "JKP", fmt: fInt, num: 1 },
    { key: "total", label: "Total klaim", fmt: fInt, num: 1 }, { key: "totalSla", label: "Sesuai SLA", fmt: fInt, num: 1 },
    { key: "pencapaian", label: "% sesuai SLA", fmt: fPctRatio, num: 1 }];
  if (withKpi) cols.push({ key: "skor", label: "Skor KPI", fmt: fDec, num: 1 });
  html += panel("Tabel SLA Klaim", "Klik judul kolom untuk mengurutkan.", dataTable(cols, rows,
    { total: { total: fInt(tt), totalSla: fInt(ts), jht: fInt(tj), jkk: fInt(tk), jkm: fInt(tm), jpn: fInt(tp), jkp: fInt(tq) } }));
  return html + narasiPanel(S, "sla");
}

function renderPengaduan(S) {
  const rows = S.pengaduan;
  if (!rows || !rows.length) return emptySection("Data pengaduan bulan ini belum tersedia.");
  rows.forEach(r => { r.tidakSesuai = (r.total != null && r.sesuaiSla != null) ? r.total - r.sesuaiSla : null; });
  const tt = sum(rows, "total"), ts = sum(rows, "sesuaiSla");
  let html = '<div class="cards">' + card("Total pengaduan", fInt(tt), "Dijumlah dari tabel per kantor", true) + card("Sesuai SLA", fInt(ts), "", true) +
    card("Tidak sesuai SLA", fInt(tt - ts), "", true) + card("% sesuai SLA", fPctDown(tt ? ts / tt * 100 : null), "", true) + "</div>";
  html += panel("Pengaduan per kantor cabang", "Diurutkan dari terbanyak.",
    barChart(rows.slice().sort((a, b) => b.total - a.total).map(r => ({ label: r.nama, value: r.total })), { fmt: fInt }));
  html += panel("Tabel Pengaduan", "",
    dataTable([
      { key: "kode", label: "Kode" }, { key: "nama", label: "Kantor cabang" },
      { key: "total", label: "Total pengaduan", fmt: fInt, num: 1 }, { key: "sesuaiSla", label: "Sesuai SLA", fmt: fInt, num: 1 },
      { key: "tidakSesuai", label: "Tidak sesuai SLA", fmt: fInt, num: 1 },
      { key: "pencapaian", label: "Pencapaian KPI", fmt: fPct, num: 1 }, { key: "bobot", label: "Bobot", fmt: fInt, num: 1 }, { key: "skor", label: "Skor KPI", fmt: fDec, num: 1 }
    ], rows, { total: { total: fInt(tt), sesuaiSla: fInt(ts), tidakSesuai: fInt(tt - ts) } }));
  return html + narasiPanel(S, "pengaduan");
}

function renderMlt(S) {
  const all = S.mlt;
  if (!all || !all.length) return emptySection("Data MLT bulan ini belum tersedia.");
  const rows = all.filter(r => !/kanwil/i.test(r.nama));
  const kk = S.mltKpi;
  const tu = sum(rows, "targetUnit"), ru = kk ? kk.realUnit : sum(rows, "realUnit"), rn = kk ? kk.realNominal : sum(rows, "realNominal");
  let html = '<div class="cards">' + card("Target unit", fInt(tu), "", true) +
    card("Realisasi unit", fInt(ru), (kk ? fPct(kk.pctUnit) : fPct(tu ? ru / tu * 100 : null)) + " dari target", true) +
    card("Realisasi nominal", fRpShort(rn), fRp(rn) + (kk ? " · " + fPct(kk.pctNominal) + " dari target nominal" : ""), true) + "</div>";
  html += panel("Target vs realisasi unit per cabang", "Batang abu-abu = target unit, batang biru = realisasi unit.",
    '<div class="legend"><span><i style="background:#0078C8"></i>Realisasi</span><span><i style="background:#cbd5e1"></i>Target</span></div>' +
    barChart(rows.map(r => ({ label: r.nama, value: r.realUnit || 0, value2: r.targetUnit || 0 })), { fmt: fInt, valueLabel: i => fInt(i.value) + " / " + fInt(i.value2) }));
  html += panel("Tabel MLT", "Persentase ditampilkan seperti di dokumen sumber.",
    dataTable([
      { key: "nama", label: "Kantor" },
      { key: "targetUnit", label: "Target unit", fmt: fInt, num: 1 }, { key: "targetNominal", label: "Target nominal", fmt: fRp, num: 1 },
      { key: "targetUnit120", label: "Unit 120%", fmt: fDec, num: 1 }, { key: "targetNominal120", label: "Nominal 120%", fmt: fRp, num: 1 },
      { key: "realUnit", label: "Realisasi unit", fmt: fInt, num: 1 }, { key: "realNominal", label: "Realisasi nominal", fmt: fRp, num: 1 },
      { key: "pctUnit", label: "% unit", fmt: fPctRatio, num: 1 }, { key: "pctNominal", label: "% nominal", fmt: fPctRatio, num: 1 }
    ], all));
  return html + narasiPanel(S, "mlt");
}

function renderUnit(S) {
  const U = S.unit;
  if (!U) return emptySection("Data Unit Layanan bulan ini belum tersedia.");
  let html = "";
  if (U.jumlah) html += '<div class="cards">' + card("Unit Layanan PMI", fInt(U.jumlah.pmi), "", true) + card("Unit Layanan Kab/Kota", fInt(U.jumlah.kabKota), "", true) +
    card("Total titik layanan", fInt(U.jumlah.pmi + U.jumlah.kabKota), "", true) + "</div>";
  html += panel("Petugas dan penempatan unit layanan", "Cabang pairing, mitra, dan lokasi penempatan.",
    dataTable([{ key: "petugas", label: "Nama petugas" }, { key: "cabang", label: "Cabang pairing" }, { key: "mitra", label: "Nama mitra" }, { key: "penempatan", label: "Penempatan" }], U.petugas || []));
  return html + narasiPanel(S, "unit");
}

function renderIgi(S) {
  const G = S.igi;
  if (!G) return emptySection("Data IGI bulan ini belum tersedia.");
  const bulan = ["Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September"];
  let html = "";
  if (G.matriks) {
    const cols = [{ key: "nama", label: "Nama kantor" }].concat(bulan.map(b => ({ key: "b_" + b, label: b, fmt: fDec, num: 1 })), [{ key: "capaian", label: "Capaian", fmt: fDec, num: 1 }]);
    const rows = G.matriks.map(r => Object.assign({ nama: r.nama, capaian: r.capaian }, ...bulan.map(b => ({ ["b_" + b]: r.bulan[b] }))));
    html += panel("IGI: penyelesaian klaim pending JKK melalui e-PLKK sesuai SLA", "Skor maksimum 15 per kantor; nilai di bawah 15 berarti ada keterlambatan.", dataTable(cols, rows));
  }
  if (G.berjalan) {
    html += panel("Realisasi periode bulan berjalan", "",
      dataTable([{ key: "nama", label: "Nama kantor" }, { key: "total", label: "Grand total", fmt: fInt, num: 1 }, { key: "sesuaiSla", label: "Sesuai SLA", fmt: fInt, num: 1 },
        { key: "capaian", label: "Capaian", fmt: fPct, num: 1 }, { key: "nilai", label: "Nilai", fmt: fDec, num: 1 }], G.berjalan));
  }
  return html + narasiPanel(S, "igi");
}

const RENDERERS = { ringkasan: renderRingkasan, klaim: renderKlaim, esurvey: renderEsurvey, digital: renderDigital, sla: renderSla, pengaduan: renderPengaduan, mlt: renderMlt, unit: renderUnit, igi: renderIgi };

/* ---------- halaman ---------- */
function initLaporan() {
  const params = new URLSearchParams(location.search);
  const n = parseInt(params.get("bulan"), 10);
  const valid = n >= 1 && n <= 12;
  const name = valid ? MONTH_NAMES[n - 1] : "Bulan tidak dikenal";
  const report = valid && isAvailable(n) ? REPORT_DATA[String(n)] : null;
  const $ = id => document.getElementById(id);

  $("judul").textContent = report ? "Laporan " + report.periode : "Laporan " + name;
  $("crumb").innerHTML = '<a href="index.php">Beranda</a><i class="fa-solid fa-chevron-right"></i><a href="index.php#pilih-bulan">Monthly Report</a><i class="fa-solid fa-chevron-right"></i><strong>' + esc(report ? report.periode : name) + "</strong>";
  document.title = "Laporan " + name + " - Divisi Pelayanan BPJS Ketenagakerjaan";

  /* navigasi 12 bulan */
  $("month-nav").innerHTML = MONTH_NAMES.map((m, i) => {
    const cls = "chip " + (isAvailable(i + 1) ? "ok" : "off") + (i + 1 === n ? " current" : "");
    return '<a class="' + cls + '" href="laporan.php?bulan=' + (i + 1) + '" title="' + (isAvailable(i + 1) ? "Tersedia" : "Data belum tersedia") + '">' + m + "</a>";
  }).join("");

  if (!report) {
    $("meta").textContent = valid ? "Data belum tersedia" : "Parameter bulan tidak valid";
    $("tabs").style.display = "none";
    $("content").innerHTML = '<div class="empty-state"><div class="big"><i class="fa-regular fa-calendar-xmark"></i></div><h2>Laporan bulan ini belum tersedia</h2><p>' +
      (valid ? "Data " + esc(name) + " belum dimasukkan. Tidak ada angka dari bulan lain yang ditampilkan." : "Pilih bulan dari daftar di atas atau kembali ke halaman utama.") +
      '</p><a class="btn" href="index.php"><i class="fa-solid fa-arrow-left"></i> Kembali ke halaman utama</a></div>';
    return;
  }

  $("meta").textContent = "Periode: " + report.periode + " · Kanwil Sumbagsel";
  if (report.pdf && /^uploads\//.test(report.pdf)) $("meta").innerHTML += ' · <a href="' + esc(report.pdf) + '" target="_blank" rel="noopener">Lihat PDF</a>';
  const S = report.sections;
  $("tabs").innerHTML = TABS.map(t => '<button class="tab' + (hasTab(t, S) ? "" : " empty") + '" role="tab" data-id="' + t.id + '"><i class="fa-solid ' + t.icon + '"></i>' + t.label + "</button>").join("");

  function show(id) {
    const tab = TABS.find(t => t.id === id) || TABS[0];
    document.querySelectorAll(".tab").forEach(b => b.setAttribute("aria-selected", b.dataset.id === tab.id));
    let html = "";
    if (report.catatan && report.catatan.length && tab.id === "ringkasan")
      html += '<div class="notice"><strong><i class="fa-solid fa-triangle-exclamation"></i>Catatan data</strong><ul>' + report.catatan.map(c => "<li>" + esc(c) + "</li>").join("") + "</ul></div>";
    html += hasTab(tab, S) ? RENDERERS[tab.id](S) : emptySection("Bagian " + tab.label + " untuk " + report.periode + " belum tersedia.");
    $("content").innerHTML = html;
    wireTables($("content"));
    history.replaceState(null, "", "#" + tab.id);
  }
  $("tabs").addEventListener("click", e => { const b = e.target.closest(".tab"); if (b) show(b.dataset.id); });
  show(location.hash.replace("#", "") || "ringkasan");
}
