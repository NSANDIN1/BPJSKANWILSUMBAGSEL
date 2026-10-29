/* dash_pelayanan.js - Dashboard Pelayanan (publik): grafik & indikator dari REPORT_DATA (pelayanan/data.php).
   Membutuhkan Chart.js. */
const $ = id => document.getElementById(id);
const BULAN = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
const SUMBAGSEL = /sumbagsel/i;
const nf0 = new Intl.NumberFormat('id-ID', { maximumFractionDigits: 0 });
const nf2 = new Intl.NumberFormat('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const fInt = v => v == null ? '-' : nf0.format(v);
const fDec = v => v == null ? '-' : nf2.format(v);
const fPct = v => v == null ? '-' : nf2.format(v) + '%';
const fPctDown = v => v == null ? '-' : nf2.format(Math.floor(v * 100) / 100) + '%';
const fRp = v => v == null ? '-' : 'Rp ' + nf0.format(v);
const fRpShort = v => v == null ? '-' : Math.abs(v) >= 1e9 ? 'Rp ' + nf2.format(v / 1e9) + ' M' : Math.abs(v) >= 1e6 ? 'Rp ' + nf2.format(v / 1e6) + ' jt' : 'Rp ' + nf0.format(v);
const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sum = (rows, k) => (rows || []).reduce((t, r) => t + (r[k] || 0), 0);

const DATA = (typeof REPORT_DATA !== 'undefined') ? REPORT_DATA : {};
const BULAN_ADA = Object.keys(DATA).map(Number).filter(n => n >= 1 && n <= 12).sort((a, b) => a - b);
const ch = {};
function grafik(id, cfg) { if (ch[id]) ch[id].destroy(); ch[id] = new Chart($(id), cfg); }

// Ringkasan indikator Sumbagsel dari satu bulan (logika sama dengan halaman laporan)
function ringkas(S) {
    const o = {};
    const kp = S.esurveyKpi, k = (S.esurveyKanwil || []).find(r => SUMBAGSEL.test(r.nama));
    if (kp) o.esurvey = { skor: kp.skor, peringkat: kp.peringkat, dari: (S.esurveyKanwil || []).length, pctPuas: kp.pctPuas, puas: kp.respondenPuas, total: kp.respondenTotal };
    else if (k) o.esurvey = { skor: k.skala5 };
    const d = (S.digitalKanwil || []).find(r => SUMBAGSEL.test(r.nama));
    if (d) {
        const urut = S.digitalKanwil.slice().sort((a, b) => b.pencapaian - a.pencapaian);
        o.digital = { capaian: d.pencapaian, target: d.target, real: d.realisasi, rank: urut.indexOf(d) + 1, dari: urut.length };
    }
    if (S.klaim && S.klaim.programs) o.klaim = { kasus: sum(S.klaim.programs, 'kasus'), nominal: sum(S.klaim.programs, 'nominal') };
    if (S.slaKpi) o.sla = { tot: S.slaKpi.total, ok: S.slaKpi.terpenuhi };
    else if (S.slaKlaim && S.slaKlaim.length) o.sla = { tot: sum(S.slaKlaim, 'total'), ok: sum(S.slaKlaim, 'totalSla') };
    if (S.pengaduan && S.pengaduan.length) o.pengaduan = { tot: sum(S.pengaduan, 'total'), ok: sum(S.pengaduan, 'sesuaiSla') };
    if (S.mlt && S.mlt.length) {
        const rows = S.mlt.filter(r => !/kanwil/i.test(r.nama)), kk = S.mltKpi;
        o.mlt = { target: sum(rows, 'targetUnit'), real: kk ? kk.realUnit : sum(rows, 'realUnit'), nominal: kk ? kk.realNominal : sum(rows, 'realNominal'), pct: kk ? kk.pctUnit : null };
    }
    if (S.unit && S.unit.jumlah) o.unit = { pmi: S.unit.jumlah.pmi, kab: S.unit.jumlah.kabKota };
    return o;
}
const pctOf = (a, b) => b ? a / b * 100 : null;

function sembunyi(id, tampil) { $(id).classList.toggle('hidden', !tampil); }

function render() {
    if (!BULAN_ADA.length) { $('kosong').classList.remove('hidden'); $('ket').textContent = 'Belum ada data.'; return; }
    const n = Number($('f-bulan').value) || BULAN_ADA[BULAN_ADA.length - 1];
    const R = DATA[String(n)], S = R.sections || {}, o = ringkas(S);
    $('ket').textContent = 'Periode ' + R.periode + ' · Kanwil Sumbagsel';
    $('lnk-laporan').href = '../pelayanan/laporan.php?bulan=' + n;

    // KPI
    const kpis = [];
    if (o.esurvey) kpis.push(['E-Survey Sumbagsel (skala 5)', fDec(o.esurvey.skor), o.esurvey.peringkat ? 'Peringkat ' + o.esurvey.peringkat + ' dari ' + o.esurvey.dari + ' Kanwil' : '', '#0078C8']);
    if (o.digital) kpis.push(['Digital Service', fPct(o.digital.capaian), 'Peringkat ' + o.digital.rank + ' dari ' + o.digital.dari + ' Kanwil', '#00B140']);
    if (o.klaim) kpis.push(['Pembayaran Klaim', fInt(o.klaim.kasus) + ' kasus', fRpShort(o.klaim.nominal), '#88C438']);
    if (o.sla) kpis.push(['Klaim Sesuai SLA', fPctDown(pctOf(o.sla.ok, o.sla.tot)), fInt(o.sla.ok) + ' dari ' + fInt(o.sla.tot) + ' klaim', '#0078C8']);
    if (o.pengaduan) kpis.push(['Pengaduan Sesuai SLA', fPctDown(pctOf(o.pengaduan.ok, o.pengaduan.tot)), fInt(o.pengaduan.ok) + ' dari ' + fInt(o.pengaduan.tot) + ' pengaduan', '#00B140']);
    if (o.mlt) kpis.push(['MLT Realisasi Unit', fInt(o.mlt.real) + ' / ' + fInt(o.mlt.target), 'Nominal ' + fRpShort(o.mlt.nominal), '#D4E116']);
    else if (o.unit) kpis.push(['Unit Layanan', fInt(o.unit.pmi + o.unit.kab) + ' titik', o.unit.pmi + ' PMI · ' + o.unit.kab + ' Kab/Kota', '#D4E116']);
    $('kpi').innerHTML = kpis.length ? kpis.map(k => `<div class="card kpi" style="--g:${k[3]}"><p class="kpi-label">${esc(k[0])}</p><p class="kpi-value" style="color:${k[3] === '#D4E116' ? '#8d9608' : k[3]}">${esc(k[1])}</p><p class="kpi-sub">${esc(k[2])}</p></div>`).join('')
        : '<div class="card kpi-kosong">Indikator bulan ini belum tersedia.</div>';

    // Komposisi klaim
    const prog = (S.klaim && S.klaim.programs) || [];
    sembunyi('w-klaim', prog.length > 0);
    if (prog.length) grafik('c-klaim', { type: 'doughnut', data: { labels: prog.map(p => p.program), datasets: [{ data: prog.map(p => p.kasus), backgroundColor: ['#0078C8', '#00B140', '#88C438', '#D4E116', '#94a3b8', '#cbd5e1'], borderWidth: 2 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } } });
    else if (ch['c-klaim']) { ch['c-klaim'].destroy(); delete ch['c-klaim']; }

    // E-Survey antar Kanwil
    const es = (S.esurveyKanwil || []).slice().sort((a, b) => b.skala5 - a.skala5);
    sembunyi('b-esurvey', es.length > 0);
    if (es.length) grafik('c-esurvey', { type: 'bar', data: { labels: es.map(r => r.nama), datasets: [{ data: es.map(r => r.skala5), backgroundColor: es.map(r => SUMBAGSEL.test(r.nama) ? '#0078C8' : '#00B140'), borderRadius: 8 }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, max: 6 } } } });

    // Digital Service antar Kanwil
    const dg = (S.digitalKanwil || []).slice().sort((a, b) => b.pencapaian - a.pencapaian);
    sembunyi('b-digital', dg.length > 0);
    if (dg.length) grafik('c-digital', { type: 'bar', data: { labels: dg.map(r => r.nama.replace(/^KANWIL /, '')), datasets: [{ data: dg.map(r => r.pencapaian), backgroundColor: dg.map(r => SUMBAGSEL.test(r.nama) ? '#0078C8' : '#00B140'), borderRadius: 8 }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, max: 100 } } } });

    // MLT per cabang
    const ml = (S.mlt || []).filter(r => !/kanwil/i.test(r.nama));
    sembunyi('b-mlt', ml.length > 0);
    if (ml.length) grafik('c-mlt', { type: 'bar', data: { labels: ml.map(r => r.nama), datasets: [
        { label: 'Target unit', data: ml.map(r => r.targetUnit || 0), backgroundColor: '#cbd5e1', borderRadius: 6 },
        { label: 'Realisasi unit', data: ml.map(r => r.realUnit || 0), backgroundColor: '#0078C8', borderRadius: 6 }
    ] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } } });

    // Tabel target / realisasi / capaian
    const L = [];
    if (o.digital) L.push(['Digital Service (Kanwil Sumbagsel)', fDec(o.digital.target), fDec(o.digital.real), fPct(o.digital.capaian)]);
    if (S.digitalKartu) {
        const c = S.digitalKartu;
        L.push(['Digital Service: Klaim JHT via JMO', fInt(c.targetJHT), '-', fPct(c.pctJHT)]);
        L.push(['Digital Service: JP Berkala', fInt(c.targetJP), '-', fPct(c.pctJP)]);
        L.push(['Digital Service: Beasiswa JMO', fInt(c.targetBea), '-', fPct(c.pctBea)]);
    }
    if (o.sla) L.push(['Klaim sesuai SLA', fInt(o.sla.tot) + ' klaim', fInt(o.sla.ok) + ' klaim', fPctDown(pctOf(o.sla.ok, o.sla.tot))]);
    if (o.pengaduan) L.push(['Pengaduan sesuai SLA', fInt(o.pengaduan.tot) + ' pengaduan', fInt(o.pengaduan.ok) + ' pengaduan', fPctDown(pctOf(o.pengaduan.ok, o.pengaduan.tot))]);
    if (o.mlt) L.push(['MLT (unit)', fInt(o.mlt.target), fInt(o.mlt.real), o.mlt.pct != null ? fPct(o.mlt.pct) : fPct(pctOf(o.mlt.real, o.mlt.target))]);
    $('tabel').innerHTML = L.length ? L.map(l => `<tr><td class="b">${esc(l[0])}</td><td class="num">${esc(l[1])}</td><td class="num">${esc(l[2])}</td><td class="num k">${esc(l[3])}</td></tr>`).join('')
        : '<tr><td colspan="4" class="kosong">Belum ada indikator untuk bulan ini.</td></tr>';
}

// Tren lintas bulan (tidak bergantung pilihan bulan)
function isiTren() {
    const rows = BULAN_ADA.map(m => ({ m, o: ringkas(DATA[String(m)].sections || {}) }));
    const lab = rows.map(r => BULAN[r.m - 1]);
    const seri = (label, fn, warna, axis) => ({ label, data: rows.map(r => { const v = fn(r.o); return v == null ? null : +v.toFixed(2); }), borderColor: warna, backgroundColor: warna, tension: .35, yAxisID: axis, spanGaps: true, pointRadius: 5 });
    grafik('c-tren', { type: 'line', data: { labels: lab, datasets: [
        seri('Klaim sesuai SLA (%)', o => o.sla && Math.floor(pctOf(o.sla.ok, o.sla.tot) * 100) / 100, '#00B140', 'y'),
        seri('Pengaduan sesuai SLA (%)', o => o.pengaduan && Math.floor(pctOf(o.pengaduan.ok, o.pengaduan.tot) * 100) / 100, '#88C438', 'y'),
        seri('Digital Service (%)', o => o.digital && o.digital.capaian, '#0078C8', 'y'),
        seri('E-Survey (skala 5)', o => o.esurvey && o.esurvey.skor, '#f59e0b', 'y1')
    ] }, options: { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'bottom' } },
        scales: { y: { title: { display: true, text: 'Persen' } }, y1: { position: 'right', min: 0, max: 6, grid: { drawOnChartArea: false }, title: { display: true, text: 'Skor' } } } } });
}

if (BULAN_ADA.length) {
    $('f-bulan').innerHTML = BULAN_ADA.slice().reverse().map(m => `<option value="${m}">${BULAN[m - 1]} ${esc((DATA[String(m)].periode || '').split(' ').pop())}</option>`).join('');
    isiTren();
}
render();
