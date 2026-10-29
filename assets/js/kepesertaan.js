/* kepesertaan.js - Dashboard Kepesertaan & EWS Perisai (modul Kepesertaan).
   Impor Excel dibaca di browser (SheetJS) lalu disimpan ke MySQL lewat kepesertaan/api.php. */
let chartTopWadah = null;
let chartDateTrend = null;
const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const EWS_WASPADA = 60;       // peringatan awal (2 bulan)
const EWS_HARI = 90;          // batas 3 bulan
const HITUNG_SEMUA_BARIS = true; // true = setiap baris di file dihitung 1 Perisai, apa pun isi kolom STATUS AKTIF
const UPDATE_MAKS_HARI = 4;   // update minimal 2x seminggu (jeda wajar maks 4 hari)

document.getElementById('date-rekap').valueAsDate = new Date();
document.getElementById('date-perisai').valueAsDate = new Date();

// Data utama disimpan di server MySQL melalui kepesertaan/api.php.
let globalRekapData = [];
let globalPerisaiAktifData = [];

const CSRF = (document.querySelector('meta[name="csrf"]') || {}).content || '';

async function apiKepesertaan(payload) {
    const response = await fetch('api.php', {
        method: payload ? 'POST' : 'GET',
        headers: payload ? {'Content-Type': 'application/json', 'X-CSRF-Token': CSRF} : {},
        body: payload ? JSON.stringify(payload) : undefined,
        credentials: 'same-origin'
    });
    const result = await response.json();
    if (!response.ok || !result.ok) throw new Error(result.message || 'Permintaan ke server gagal.');
    return result;
}

async function simpanDataServer() {
    await apiKepesertaan({action: 'save', rekap: globalRekapData, perisai: globalPerisaiAktifData});
}

async function muatDataServer() {
    try {
        const result = await apiKepesertaan();
        globalRekapData = Array.isArray(result.rekap) ? result.rekap : [];
        globalPerisaiAktifData = Array.isArray(result.perisai) ? result.perisai : [];
        renderDashboard();
    } catch (error) {
        alert('Data server belum dapat dimuat. Pastikan Apache dan MySQL berjalan dan database sudah diimpor (database/db_sistem_internal.sql).\\n\\nDetail: ' + error.message);
        renderDashboard();
    }
}

muatDataServer();

function handleRekapUpload(event) {
    const file = event.target.files[0];
    if (!file) return;
    const periodeDate = document.getElementById('date-rekap').value || 'Tanpa Tanggal';

    const reader = new FileReader();
    reader.onload = async function(e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, {type: 'array'});
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const rows = XLSX.utils.sheet_to_json(worksheet, {header: 1});
        
        let added = 0;
        for (let i = 0; i < rows.length; i++) {
            let row = rows[i];
            if (!row || row.length === 0) continue;
            let no = parseInt(row[0]);
            if (isNaN(no)) continue;

            let cabang = row[2] || '-';
            let wadah = row[4] || '-';
            let perisai = row[6] || '-';
            let jenisPasar = row[7] || 0;
            let jenisDesa = row[8] || 0;
            
            let subTotalBaru = (parseInt(row[9]) || 0) + (parseInt(row[10]) || 0);
            let subTotalLanjutan = (parseInt(row[11]) || 0) + (parseInt(row[12]) || 0);
            let tkRow = parseInt(row[13]) || (subTotalBaru + subTotalLanjutan);
            let jenisStr = (jenisPasar > 0) ? 'PASAR' : ((jenisDesa > 0) ? 'DESA/LURAH' : 'UMUM');

            let record = { periode: periodeDate, cabang, wadah, perisai, jenis: jenisStr, baru: subTotalBaru, lanjutan: subTotalLanjutan, totalTK: tkRow };
            
            let exists = globalRekapData.some(item => item.periode === periodeDate && item.wadah === wadah && item.perisai === perisai);
            if (!exists) {
                globalRekapData.push(record);
                added++;
            }
        }
        try {
            await simpanDataServer();
            renderDashboard();
            alert(`Berhasil! ${added} data Rekap TK tanggal ${periodeDate} berhasil disimpan ke SERVER.`);
        } catch (err) {
            alert('Import terbaca tetapi gagal disimpan ke server: ' + err.message + '\\nPeriksa konfigurasi database/API.');
        }
    };
    reader.readAsArrayBuffer(file);
    event.target.value = '';
}

// ===== IMPORT PERISAI AKTIF =====
// Format file EC015: 0 NO | 1 NO CABANG | 2 NAMA CABANG | 3 KODE PEMBINA | 4 NAMA PEMBINA |
// 5 KODE WADAH | 6 NAMA WADAH | 7 TGL AKTIF WADAH | 8 STATUS WADAH |
// 9 KODE PERISAI | 10 NAMA PERISAI | 11 TGL AKTIF PERISAI | 12 STATUS PERISAI
function teks(x) { return String(x == null ? '' : x).replace(/\s+/g, ' ').trim(); }
function namaNorm(n) { return teks(n).toUpperCase(); }

function keISO(v) {
    if (typeof v === 'number' && v > 20000 && v < 80000) return new Date(Math.round((v - 25569) * 86400000)).toISOString().slice(0, 10);
    if (v instanceof Date && !isNaN(v)) return v.toISOString().slice(0, 10);
    const t = teks(v);
    let m = t.match(/^(\d{1,2})[-\/.](\d{1,2})[-\/.](\d{4})$/);
    if (m) return m[3] + '-' + m[2].padStart(2, '0') + '-' + m[1].padStart(2, '0');
    m = t.match(/^(\d{4})-(\d{2})-(\d{2})/);
    return m ? m[0] : '';
}

function isPerisaiAktif(row) { return HITUNG_SEMUA_BARIS || statusYa(row); }

function statusYa(row) {
    const s = teks(row.statusPerisai).toUpperCase();
    return (s.includes('AKTIF') && !s.includes('TIDAK') && !s.includes('NON')) || s === '1' || s === 'Y' || s === 'YA' || s === 'YES';
}

function parsePerisaiRows(rows, periode) {
    const records = [], seen = new Set();
    let totalRows = 0, dup = 0, nonaktif = 0; const contoh = [];
    rows.forEach(r => {
        if (!r || isNaN(parseInt(r[0]))) return;
        const kode = teks(r[9]).toUpperCase(), nama = teks(r[10]);
        if (!kode && !nama) return;
        totalRows++;
        // Dihitung PER BARIS: setiap baris di file = satu Perisai (baris ganda tetap dihitung, hanya dicatat)
        const key = kode + '|' + namaNorm(nama);
        if (seen.has(key)) dup++;
        seen.add(key);
        const rec = {
            periode: periode, key: key,
            cabang: teks(r[2]) || teks(r[1]) || '(Tanpa Cabang)',
            pembina: teks(r[4]) || teks(r[3]) || '-',
            kodeWadah: teks(r[5]).toUpperCase(), wadah: teks(r[6]) || '-',
            kodePerisai: kode, perisai: nama,
            tglAktif: keISO(r[11]),
            statusPerisai: teks(r[12]).toUpperCase()
        };
        if (!statusYa(rec)) { nonaktif++; if (contoh.length < 3) contoh.push(`${nama} (status "${rec.statusPerisai || 'kosong'}")`); }
        records.push(rec);
    });
    return { records, totalRows, dup, nonaktif, contoh };
}

function handlePerisaiAktifUpload(event) {
    const file = event.target.files[0];
    if (!file) return;

    // Tanggal otomatis dari nama file, mis. EC015_13102026_NAMA.xlsx -> 2026-10-13
    const mf = file.name.match(/(\d{2})(\d{2})(20\d{2})/);
    if (mf && +mf[1] >= 1 && +mf[1] <= 31 && +mf[2] >= 1 && +mf[2] <= 12) {
        document.getElementById('date-perisai').value = `${mf[3]}-${mf[2]}-${mf[1]}`;
    }
    const periodeDate = document.getElementById('date-perisai').value || 'Tanpa Tanggal';
    const reader = new FileReader();

    reader.onload = async function(e) {
        try {
            const workbook = XLSX.read(new Uint8Array(e.target.result), {type: 'array'});
            const rows = XLSX.utils.sheet_to_json(
                workbook.Sheets[workbook.SheetNames[0]],
                {header: 1, defval: null}
            );
            const res = parsePerisaiRows(rows, periodeDate);

            if (!res.records.length) {
                alert('Format file tidak dikenali. Pastikan kolom sesuai format EC015.');
                return;
            }

            // Import pada tanggal yang sama menggantikan data lama.
            const dataSebelumnya = globalPerisaiAktifData;
            globalPerisaiAktifData = globalPerisaiAktifData
                .filter(x => x.periode !== periodeDate)
                .concat(res.records);

            try {
                // Penting: simpan dataset Perisai ke MySQL melalui API.
                await simpanDataServer();
            } catch (saveError) {
                globalPerisaiAktifData = dataSebelumnya;
                throw new Error('Data terbaca, tetapi gagal disimpan ke server. ' + saveError.message);
            }

            renderDashboard();
            alert(`Berhasil disimpan ke SERVER (tgl ${periodeDate})!\n${res.totalRows} baris dibaca → ${res.records.filter(isPerisaiAktif).length} Perisai dihitung (per baris).\nCatatan: ${res.dup} baris ganda tetap dihitung.${res.nonaktif ? `\n${res.nonaktif} baris berstatus selain Y tetap dihitung: ${res.contoh.join('; ')}` : ''}`);
        } catch (err) {
            alert('Import Perisai gagal: ' + err.message);
        } finally {
            event.target.value = '';
        }
    };

    reader.onerror = function() {
        alert('File gagal dibaca oleh browser. Silakan coba lagi.');
        event.target.value = '';
    };

    reader.readAsArrayBuffer(file);
}

// ===== EWS: wadah tanpa Perisai baru >= 3 bulan (berdasarkan TGL AKTIF PERISAI) =====
function renderEWS() {
    const hariIni = new Date(); hariIni.setHours(0, 0, 0, 0);
    const parseTgl = t => /^\d{4}-\d{2}-\d{2}$/.test(t) ? new Date(t + 'T00:00:00') : null;
    const selisih = (a, b) => Math.round((b - a) / 86400000);
    const fmt = d => d.toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });
    const esc = x => String(x == null ? '' : x).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));

    const valid = globalPerisaiAktifData.filter(r => parseTgl(r.periode));
    const tglSet = new Set(valid.map(r => r.periode));
    let tglMax = null;
    valid.forEach(r => { const d = parseTgl(r.periode); if (!tglMax || d > tglMax) tglMax = d; });

    // Hanya data import TERBARU yang dinilai
    const snap = valid.filter(r => parseTgl(r.periode).getTime() === (tglMax && tglMax.getTime())).filter(isPerisaiAktif);
    const wadahMap = {};
    snap.forEach(r => {
        const key = r.kodeWadah || (r.cabang + '|' + r.wadah);
        const w = wadahMap[key] || (wadahMap[key] = { cabang: r.cabang, wadah: r.wadah, pembina: r.pembina, jumlah: 0, terakhir: null, namaTerakhir: '' });
        w.jumlah++;
        const d = parseTgl(r.tglAktif);
        if (d && (!w.terakhir || d > w.terakhir)) { w.terakhir = d; w.namaTerakhir = r.perisai; }
    });

    const semua = Object.values(wadahMap);
    const tanpaTgl = semua.filter(w => !w.terakhir).length;
    const hasil = semua.filter(w => w.terakhir)
        .map(w => Object.assign({}, w, { hari: selisih(w.terakhir, hariIni) }))
        .sort((a, b) => b.hari - a.hari);

    const nKritis = hasil.filter(h => h.hari >= EWS_HARI).length;
    const nWaspada = hasil.filter(h => h.hari >= EWS_WASPADA && h.hari < EWS_HARI).length;
    document.getElementById('stat-ews-kritis').innerText = nKritis;

    let html = '';
            hasil.forEach(h => {
                let badge, rowCls = '';
                if (h.hari >= EWS_HARI) { badge = '<span class="pill red">⚠️ Perlu Dibina</span>'; rowCls = 'row-red'; }
                else if (h.hari >= EWS_WASPADA) { badge = '<span class="pill amber">⏳ Waspada</span>'; }
                else { badge = '<span class="pill green">✓ Aman</span>'; }
                html += `
                    <tr class="${rowCls}">
                        <td class="t-strong">${esc(h.cabang)}</td>
                        <td><div class="t-name">${esc(h.wadah)}</div><div class="t-small">Pembina: ${esc(h.pembina)}</div></td>
                        <td>${h.jumlah} Perisai</td>
                        <td><div class="t-strong" style="font-size:12px">${fmt(h.terakhir)}</div><div class="t-small">${esc(h.namaTerakhir)}</div></td>
                        <td class="t-black">${h.hari} hari</td>
                        <td>${badge}</td>
                    </tr>`;
            });
            if (!hasil.length) html = '<tr><td colspan="6" class="kosong">Belum ada data Perisai Aktif di-import.</td></tr>';
            document.getElementById('warning-table').querySelector('tbody').innerHTML = html;

    let info = '';
            if (tglMax) {
                const sejakUpdate = selisih(tglMax, hariIni);
                const minggu = [...tglSet].filter(t => selisih(parseTgl(t), hariIni) < 7).length;
                const telat = sejakUpdate > UPDATE_MAKS_HARI;
                info += `<div class="info-bar ${telat ? 'red' : 'green'}">${telat ? '⏰' : '✅'} Data Perisai Aktif terakhir diperbarui ${fmt(tglMax)} (${sejakUpdate} hari lalu). Pembaruan 7 hari terakhir: ${minggu} dari minimal 2 kali.${telat ? ' Segera update agar peringatan akurat.' : ''}</div>`;
                info += `<div class="info-bar">Perlu Dibina (≥ ${EWS_HARI} hari): ${nKritis} wadah · Waspada (≥ ${EWS_WASPADA} hari): ${nWaspada} wadah · Total wadah dipantau: ${hasil.length}</div>`;
                if (tanpaTgl) info += `<div class="info-bar blue">ℹ️ ${tanpaTgl} wadah tidak punya TGL AKTIF Perisai yang terbaca, sehingga tidak dinilai.</div>`;
            }
            document.getElementById('ews-info').innerHTML = info;
}

async function resetAllData() {
    if (!confirm('Hapus seluruh data kepesertaan yang tersimpan di SERVER? Tindakan ini tidak dapat dibatalkan.')) return;
    try {
        await apiKepesertaan({action: 'reset'});
        globalRekapData = [];
        globalPerisaiAktifData = [];
        renderDashboard();
        alert('Data server berhasil direset.');
    } catch (error) {
        alert('Gagal mereset data server: ' + error.message);
    }
}

function filterMainTable() {
    const input = document.getElementById('table-search').value.toLowerCase();
    const table = document.getElementById('main-table');
    const tr = table.getElementsByTagName('tr');

    for (let i = 1; i < tr.length; i++) {
        let tdCabang = tr[i].getElementsByTagName('td')[1];
        let tdWadah = tr[i].getElementsByTagName('td')[2];
        let tdPerisai = tr[i].getElementsByTagName('td')[3];
        if (tdCabang || tdWadah || tdPerisai) {
            let textCabang = tdCabang.textContent || tdCabang.innerText;
            let textWadah = tdWadah.textContent || tdWadah.innerText;
            let textPerisai = tdPerisai.textContent || tdPerisai.innerText;
            if (textCabang.toLowerCase().indexOf(input) > -1 || textWadah.toLowerCase().indexOf(input) > -1 || textPerisai.toLowerCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function exportToExcel() {
    if (globalRekapData.length === 0) {
        alert("Tidak ada data rekap TK untuk diexport!");
        return;
    }
    const worksheet = XLSX.utils.json_to_sheet(globalRekapData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Rekap Data TK");
    XLSX.writeFile(workbook, "Laporan_Rekap_Kepesertaan_Sumbagsel.xlsx");
}

function renderDashboard() {
    let totalTK = 0, ewsKritis = 0;
    let mainTableHTML = '', ewsTableHTML = '';
    let sortedByTK = [...globalRekapData].sort((a, b) => b.totalTK - a.totalTK);

    let dateGrouped = {};

    globalRekapData.forEach(row => {
        totalTK += row.totalTK;

        if (!dateGrouped[row.periode]) {
            dateGrouped[row.periode] = 0;
        }
        dateGrouped[row.periode] += row.totalTK;

        mainTableHTML += `
                    <tr>
                        <td class="t-green">${esc(row.periode)}</td>
                        <td class="t-strong">${esc(row.cabang)}</td>
                        <td>${esc(row.wadah)}</td>
                        <td class="t-name">${esc(row.perisai)}</td>
                        <td><span class="pill slate">${esc(row.jenis)}</span></td>
                        <td class="t-blue">${esc(row.baru)}</td>
                        <td class="t-indigo">${esc(row.lanjutan)}</td>
                        <td class="t-black">${esc(row.totalTK)}</td>
                    </tr>
                `;
            });

    if (mainTableHTML === '') mainTableHTML = `<tr><td colspan="8" class="kosong">Belum ada data.</td></tr>`;

    document.getElementById('stat-total-tk').innerText = totalTK.toLocaleString('id-ID');
    document.getElementById('main-table').querySelector('tbody').innerHTML = mainTableHTML;

    // Total Perisai Aktif = jumlah Perisai unik (KODE + NAMA) pada data import TERBARU
    const dataBerTgl = globalPerisaiAktifData.filter(r => /^\d{4}-\d{2}-\d{2}$/.test(r.periode));
    const tglTerbaru = dataBerTgl.length ? dataBerTgl.reduce((m, r) => r.periode > m ? r.periode : m, '') : null;
    const snapshot = globalPerisaiAktifData.filter(r => (!tglTerbaru || r.periode === tglTerbaru) && isPerisaiAktif(r));
    const totalPerisai = snapshot.length;   // per baris
    const perisaiUnik = new Set(snapshot.map(r => r.key));

    const summaryPerisai = {};
    snapshot.forEach(r => {
        const k = r.cabang + '|' + r.pembina;
        if (!summaryPerisai[k]) summaryPerisai[k] = { periode: r.periode, cabang: r.cabang, pembina: r.pembina, n: 0 };
        summaryPerisai[k].n++;
    });

    let perisaiSummaryTableHTML = '';
    Object.values(summaryPerisai).sort((a, b) => b.n - a.n).forEach(item => {
        perisaiSummaryTableHTML += `
                    <tr>
                        <td class="t-green" style="color:var(--blue)">${esc(item.periode)}</td>
                        <td class="t-name">${esc(item.cabang)}</td>
                        <td class="t-strong">${esc(item.pembina)}</td>
                        <td class="c"><span class="pill green">${item.n} Perisai Aktif</span></td>
                    </tr>
                `;
            });
    if (perisaiSummaryTableHTML === '') {
        perisaiSummaryTableHTML = `<tr><td colspan="4" class="kosong">Belum ada data perisai aktif di-import.</td></tr>`;
    }

    document.getElementById('stat-perisai-aktif').innerText = totalPerisai;
    // Diagnostik: bandingkan beberapa cara hitung agar mudah dicek
    const tersimpan = globalPerisaiAktifData.filter(r => r.periode === tglTerbaru);
    const nKode = new Set(snapshot.map(r => r.kodePerisai)).size;
    const nNama = new Set(snapshot.map(r => namaNorm(r.perisai))).size;
    const c0 = snapshot[0];
    document.getElementById('info-perisai').innerHTML = snapshot.length
        ? `🔎 Diagnostik data import ${esc(tglTerbaru)}: ${tersimpan.length} baris tersimpan · aktif (dihitung per baris) <b>${totalPerisai}</b> · unik KODE+NAMA ${perisaiUnik.size} · unik KODE ${nKode} · unik NAMA ${nNama}<br>Contoh baris 1: kode="${esc(c0.kodePerisai)}" nama="${esc(c0.perisai)}" status="${esc(c0.statusPerisai)}" wadah="${esc(c0.wadah)}"`
        : 'Belum ada data Perisai Aktif di-import.';
    document.getElementById('perisai-aktif-summary-table').querySelector('tbody').innerHTML = perisaiSummaryTableHTML;

    // Total TK = data import TERBARU (sama seperti Perisai)
    const tglTkValid = globalRekapData.map(r => r.periode).filter(p => /^\d{4}-\d{2}-\d{2}$/.test(p)).sort();
    const tglTkTerbaru = tglTkValid.length ? tglTkValid[tglTkValid.length - 1] : null;
    const tkRows = globalRekapData.filter(r => !tglTkTerbaru || r.periode === tglTkTerbaru);
    const tkTotal = tkRows.reduce((a, r) => a + (r.totalTK || 0), 0);
    document.getElementById('stat-total-tk').innerText = tkTotal.toLocaleString('id-ID');
    // Tren: total Perisai aktif (per baris) pada setiap tanggal import
    const perisaiPerTgl = {};
    globalPerisaiAktifData.forEach(r => { if (isPerisaiAktif(r)) perisaiPerTgl[r.periode] = (perisaiPerTgl[r.periode] || 0) + 1; });

    renderEWS();
    renderCharts(sortedByTK.slice(0, 5), perisaiPerTgl);
}

function renderCharts(topWadahData, dateGroupedData) {
    const ctx1 = document.getElementById('topWadahChart').getContext('2d');
    if (chartTopWadah) chartTopWadah.destroy();
    chartTopWadah = new Chart(ctx1, {
        type: 'bar',
        data: {
            labels: topWadahData.map(item => item.wadah.length > 15 ? item.wadah.substring(0, 15) + '...' : item.wadah),
            datasets: [{ label: 'Total TK', data: topWadahData.map(item => item.totalTK), backgroundColor: '#00B140', borderRadius: 8, barThickness: 24 }]
        },
        options: { indexAxis: 'y', responsive: true, maintainAspectRatio: false, plugins: { legend: { display: false } }, scales: { x: { beginAtZero: true, grid: { color: '#f1f5f9' } }, y: { grid: { display: false } } } }
    });

    const sortedDates = Object.keys(dateGroupedData).sort();
    const dateValues = sortedDates.map(d => dateGroupedData[d]);

    const ctx2 = document.getElementById('dateTrendChart').getContext('2d');
    if (chartDateTrend) chartDateTrend.destroy();
    chartDateTrend = new Chart(ctx2, {
        type: 'line',
        data: {
            labels: sortedDates.length > 0 ? sortedDates : ['Belum Ada Data'],
            datasets: [{
                label: 'Total Perisai Aktif',
                data: dateValues.length > 0 ? dateValues : [0],
                borderColor: '#0078C8',
                backgroundColor: 'rgba(0, 120, 200, 0.08)',
                fill: true,
                tension: 0.4,
                pointRadius: 6,
                pointBackgroundColor: '#0078C8',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: false, ticks: { precision: 0 }, grid: { color: '#f1f5f9' } }, x: { grid: { display: false } } }
        }
    });
}
