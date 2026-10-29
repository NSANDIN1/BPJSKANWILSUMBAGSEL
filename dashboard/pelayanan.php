<?php
/** dashboard/pelayanan.php - Dashboard Pelayanan (publik): Monthly Report Sumbagsel */
require_once __DIR__ . '/../config/auth.php';

$judul     = 'Dashboard Pelayanan - BPJS Ketenagakerjaan Sumbagsel';
$extraHead = '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>';
require __DIR__ . '/../includes/header_publik.php';
?>
<main class="dash-main">

    <section class="dash-hero">
        <div>
            <span class="dash-badge">Dashboard Publik</span>
            <h1>Monthly Report Pelayanan Sumbagsel</h1>
            <p id="ket">Memuat data…</p>
        </div>
        <div class="dash-tools">
            <label>Bulan Laporan
                <select id="f-bulan" onchange="render()"></select>
            </label>
            <a id="lnk-laporan" class="dash-link" href="../pelayanan/laporan.php">Buka laporan lengkap <span aria-hidden="true">→</span></a>
        </div>
    </section>

    <div id="kosong" class="hidden card kosong">Belum ada data Monthly Report. Dashboard terisi setelah laporan diunggah di modul Pelayanan.</div>

    <section id="kpi" class="kpi-grid"></section>

    <section class="chart-grid">
        <div class="card span-2">
            <h2>Tren Capaian Sumbagsel <small>(seluruh bulan yang tersedia)</small></h2>
            <div class="chart-h72"><canvas id="c-tren"></canvas></div>
        </div>
        <div class="card">
            <h2>Komposisi Kasus Klaim <small>(per program)</small></h2>
            <div id="w-klaim" class="chart-h72"><canvas id="c-klaim"></canvas></div>
        </div>
        <div class="card span-2" id="b-esurvey">
            <h2>Skor E-Survey antar Kanwil <small>(skala 5, Sumbagsel disorot)</small></h2>
            <div class="chart-h80"><canvas id="c-esurvey"></canvas></div>
        </div>
        <div class="card" id="b-digital">
            <h2>Capaian Digital Service <small>(antar Kanwil)</small></h2>
            <div class="chart-h80"><canvas id="c-digital"></canvas></div>
        </div>
        <div class="card span-3" id="b-mlt">
            <h2>MLT: Target vs Realisasi Unit <small>(per kantor cabang)</small></h2>
            <div class="chart-h72"><canvas id="c-mlt"></canvas></div>
        </div>
    </section>

    <section class="card">
        <h2>Target, Realisasi, dan Capaian</h2>
        <p class="lead">Ringkasan indikator utama bulan terpilih. Tanda “-” berarti sumber hanya mencantumkan target dan persentase capaian.</p>
        <div class="tbl-scroll">
            <table class="tbl-d">
                <thead><tr><th>Indikator</th><th class="num">Target</th><th class="num">Realisasi</th><th class="num">Capaian</th></tr></thead>
                <tbody id="tabel"></tbody>
            </table>
        </div>
    </section>

    <p class="foot-note">Data bersumber dari dokumen PDF Monthly Report dan file Excel internal Divisi Pelayanan. Bulan tanpa laporan tidak ditampilkan; tidak ada angka perkiraan.</p>
</main>

<?php
$extraFoot = '<script src="' . e(base_url()) . '/pelayanan/data.php"></script>' . "\n"
           . '<script src="' . e(aset('js/dash_pelayanan.js')) . '"></script>';
require __DIR__ . '/../includes/footer_publik.php';
