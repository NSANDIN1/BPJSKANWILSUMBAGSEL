/* dash_kepesertaan.js - Dashboard Perisai (publik): data agregat dari kepesertaan/api.php?view=publik.
   Membutuhkan Chart.js. Isinya sudah tanpa nama Perisai. */
const ISO = /^\d{4}-\d{2}-\d{2}$/;
let ALL = [], TGL = null, SNAP = [], GALAT = '';

const $ = id => document.getElementById(id);
const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const num = n => n.toLocaleString('id-ID');
const BULAN = ['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep','Okt','Nov','Des'];
const today = new Date(); today.setHours(0, 0, 0, 0);
const toDate = s => ISO.test(s) ? new Date(s + 'T00:00:00') : null;
const hari = d => Math.round((today - d) / 864e5);
const wk = r => r.kodeWadah || (r.cabang + '|' + r.wadah);
const ch = {};
function grafik(id, cfg) { if (ch[id]) ch[id].destroy(); ch[id] = new Chart($(id), cfg); }

// status tiap wadah: hari sejak Perisai baru terakhir
function statusWadah(rows) {
    const m = {};
    rows.forEach(r => { const d = toDate(r.tglAktif), k = wk(r); if (!m[k]) m[k] = null; if (d && (!m[k] || d > m[k])) m[k] = d; });
    return Object.values(m).filter(Boolean).map(hari);
}

const fmt = t => t.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

function renderEW() {
    const f = $('f-cabang').value;
    const D = f ? SNAP.filter(r => r.cabang === f) : SNAP;
    const m = {};
    D.forEach(r => {
        const k = wk(r), t = toDate(r.tglAktif);
        const w = m[k] || (m[k] = { cabang: r.cabang, wadah: r.wadah, n: 0, last: null });
        w.n++;
        if (t && (!w.last || t > w.last)) w.last = t;
    });
    const butuh = Object.values(m).filter(w => w.last).map(w => Object.assign(w, { h: hari(w.last) })).filter(w => w.h >= 60).sort((a, b) => b.h - a.h);
    const nK = butuh.filter(w => w.h >= 90).length, nW = butuh.length - nK;
    $('ew-info').innerHTML = `<span class="pill pill-red">Perlu Dibina: ${nK}</span><span class="pill pill-amber">Waspada: ${nW}</span>`;
    $('tabel').innerHTML = butuh.length ? butuh.map(w => `<tr class="${w.h >= 90 ? 'row-red' : ''}"><td class="b">${esc(w.cabang)}</td><td class="b">${esc(w.wadah)}</td><td class="num">${num(w.n)}</td><td class="t-date">${fmt(w.last)}</td><td class="num k">${w.h} hari</td><td>${w.h >= 90 ? '<span class="pill pill-red">⚠️ Perlu Dibina</span>' : '<span class="pill pill-amber">⏳ Waspada</span>'}</td></tr>`).join('') : '<tr><td colspan="6" class="aman">✓ Aman, semua wadah mendapat Perisai baru dalam 2 bulan terakhir.</td></tr>';
}

function countUp(el, to) {
    const t0 = performance.now();
    const f = t => { const p = Math.min(1, (t - t0) / 900); el.textContent = num(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) requestAnimationFrame(f); };
    requestAnimationFrame(f);
}

function render() {
    if (!SNAP.length) { $('kosong').classList.remove('hidden'); $('ket').textContent = GALAT || 'Belum ada data.'; return; }
    const f = $('f-cabang').value;
    const D = f ? SNAP.filter(r => r.cabang === f) : SNAP;
    $('ket').textContent = 'Data per ' + (TGL ? new Date(TGL + 'T00:00:00').toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' }) : '-') + (f ? ' · ' + f : ' · seluruh cabang');

    // KPI
    const awalBulan = new Date(today.getFullYear(), today.getMonth(), 1);
    const sw = statusWadah(D);
    const kpis = [
        ['Total Perisai', D.length, '#0078C8'],
        ['Jumlah Wadah', new Set(D.map(wk)).size, '#00B140'],
        ['Baru 90 Hari Terakhir', D.filter(r => { const d = toDate(r.tglAktif); return d && hari(d) < 90; }).length, '#88C438'],
        ['Baru Bulan Ini', D.filter(r => { const d = toDate(r.tglAktif); return d && d >= awalBulan; }).length, '#D4E116'],
        ['Wadah Perlu Dibina', sw.filter(h => h >= 90).length, '#dc2626']
    ];
    $('kpi').innerHTML = kpis.map((k, i) => `<div class="card kpi" style="--g:${k[2]}"><p class="kpi-label">${esc(k[0])}</p><p id="k${i}" class="kpi-value" style="color:${k[2]}">0</p></div>`).join('');
    kpis.forEach((k, i) => countUp($('k' + i), k[1]));

    // Per bulan (12 bulan terakhir) + kumulatif
    const bln = [];
    for (let i = 11; i >= 0; i--) { const d = new Date(today.getFullYear(), today.getMonth() - i, 1); bln.push({ y: d.getFullYear(), m: d.getMonth(), label: BULAN[d.getMonth()] + ' ' + String(d.getFullYear()).slice(2) }); }
    const awal = new Date(bln[0].y, bln[0].m, 1);
    let kum = D.filter(r => { const d = toDate(r.tglAktif); return d && d < awal; }).length;
    const baru = bln.map(b => D.filter(r => { const d = toDate(r.tglAktif); return d && d.getFullYear() === b.y && d.getMonth() === b.m; }).length);
    const kumulatif = baru.map(n => (kum += n));
    grafik('c-bulan', { data: { labels: bln.map(b => b.label), datasets: [
        { type: 'bar', label: 'Perisai baru', data: baru, backgroundColor: '#00B140', borderRadius: 8, yAxisID: 'y' },
        { type: 'line', label: 'Total kumulatif', data: kumulatif, borderColor: '#0078C8', backgroundColor: '#0078C8', tension: .35, yAxisID: 'y1' }
    ] }, options: { responsive: true, maintainAspectRatio: false, scales: { y: { beginAtZero: true, ticks: { precision: 0 } }, y1: { position: 'right', grid: { drawOnChartArea: false }, ticks: { precision: 0 } } } } });

    // Status wadah
    const st = [sw.filter(h => h < 60).length, sw.filter(h => h >= 60 && h < 90).length, sw.filter(h => h >= 90).length];
    grafik('c-status', { type: 'doughnut', data: { labels: ['Aman', 'Waspada', 'Perlu Dibina'], datasets: [{ data: st, backgroundColor: ['#00B140', '#f59e0b', '#dc2626'], borderWidth: 2 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '62%', plugins: { legend: { position: 'bottom' } } } });

    renderEW();

    // Per tahun
    const thn = {};
    D.forEach(r => { const d = toDate(r.tglAktif); if (d) thn[d.getFullYear()] = (thn[d.getFullYear()] || 0) + 1; });
    const ty = Object.keys(thn).sort();
    grafik('c-tahun', { type: 'bar', data: { labels: ty, datasets: [{ label: 'Perisai baru', data: ty.map(y => thn[y]), backgroundColor: '#0078C8', borderRadius: 8 }] }, options: { responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true, ticks: { precision: 0 } } } } });
}

// Peringkat & tabel cabang (selalu seluruh cabang; cabang terpilih disorot)
function isiCabang() {
    const g = {};
    SNAP.forEach(r => { (g[r.cabang] = g[r.cabang] || []).push(r); });
    const baris = Object.entries(g).map(([c, rows]) => ({
        c, n: rows.length, w: new Set(rows.map(wk)).size,
        b90: rows.filter(r => { const d = toDate(r.tglAktif); return d && hari(d) < 90; }).length,
        kritis: statusWadah(rows).filter(h => h >= 90).length
    })).sort((a, b) => b.n - a.n);
    $('f-cabang').innerHTML = '<option value="">Seluruh cabang</option>' + baris.map(b => `<option>${esc(b.c)}</option>`).join('');
    const top = baris.slice(0, 10);
    grafik('c-cabang', { type: 'bar', data: { labels: top.map(b => b.c), datasets: [{ data: top.map(b => b.n), backgroundColor: '#00B140', borderRadius: 8 }] }, options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, ticks: { precision: 0 } } } } });
}

async function muatData() {
    try {
        const resp = await fetch('../kepesertaan/api.php?view=publik', { cache: 'no-store' });
        const hasil = await resp.json();
        if (!resp.ok || !hasil.ok) throw new Error(hasil.message || 'Respons server tidak valid.');
        ALL = Array.isArray(hasil.perisai) ? hasil.perisai : [];
    } catch (e) {
        ALL = [];
        GALAT = 'Data tidak dapat dimuat dari server. Pastikan Apache dan MySQL berjalan dan database sudah diimpor.';
    }
    const valid = ALL.filter(r => ISO.test(r.periode));
    TGL = valid.length ? valid.reduce((m, r) => r.periode > m ? r.periode : m, '') : null;
    SNAP = ALL.filter(r => !TGL || r.periode === TGL);   // import terbaru, dihitung per baris
    if (SNAP.length) { isiCabang(); }
    render();
}
muatData();
