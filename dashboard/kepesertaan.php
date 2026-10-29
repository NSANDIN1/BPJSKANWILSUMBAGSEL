<?php
/** dashboard/kepesertaan.php - Dashboard Perisai (publik, data agregat tanpa nama Perisai) */
require_once __DIR__ . '/../config/auth.php';

$judul     = 'Dashboard Perisai - BPJS Ketenagakerjaan Sumbagsel';
$extraHead = '<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.1/dist/chart.umd.min.js"></script>' . "\n"
           . '    <link rel="stylesheet" href="' . e(aset('css/dash_kepesertaan.css')) . '">';
require __DIR__ . '/../includes/header_publik.php';
?>
<main class="dash-main">

    <section class="dash-hero">
        <div>
            <span class="dash-badge">Dashboard Publik</span>
            <h1>Perkembangan Perisai Sumbagsel</h1>
            <p id="ket">Memuat data…</p>
        </div>
        <div class="dash-tools">
            <label>Kantor Cabang
                <select id="f-cabang" onchange="render()"></select>
            </label>
        </div>
    </section>

    <div id="kosong" class="hidden card kosong">Belum ada data. Dashboard terisi setelah data Perisai Aktif diimport di modul Kepesertaan.</div>

    <section id="kpi" class="kpi-grid kpi-5"></section>

    <section class="chart-grid">
        <div class="card span-2">
            <h2>Perisai Baru per Bulan <small>(12 bulan terakhir, berdasarkan tanggal aktif)</small></h2>
            <div class="chart-h72"><canvas id="c-bulan"></canvas></div>
        </div>
        <div class="card">
            <h2>Status Wadah <small>(tanpa Perisai baru)</small></h2>
            <div class="chart-h72"><canvas id="c-status"></canvas></div>
        </div>
        <div class="card">
            <h2>Perisai Baru per Tahun</h2>
            <div class="chart-h72"><canvas id="c-tahun"></canvas></div>
        </div>
        <div class="card span-2">
            <h2>10 Cabang dengan Perisai Terbanyak</h2>
            <div class="chart-h72"><canvas id="c-cabang"></canvas></div>
        </div>
    </section>

    <section id="warning" class="card">
        <div class="ew-head">
            <div>
                <h2><span class="ico">⚠️</span> Early Warning Wadah</h2>
                <p>Wadah yang belum mendapat Perisai baru selama 2 bulan atau lebih, diurutkan dari yang terlama. Mengikuti pilihan kantor cabang di atas.</p>
            </div>
            <div id="ew-info"></div>
        </div>
        <div class="tbl-scroll max">
            <table class="tbl-d">
                <thead><tr><th>Kantor Cabang</th><th>Nama Wadah</th><th class="num">Perisai</th><th>Perisai Baru Terakhir</th><th class="num">Tanpa Tambahan</th><th>Status</th></tr></thead>
                <tbody id="tabel"></tbody>
            </table>
        </div>
    </section>

    <p class="foot-note">Data agregat dari import Perisai Aktif terbaru. Nama individu Perisai tidak ditampilkan. Status wadah: Waspada ≥ 60 hari dan Perlu Dibina ≥ 90 hari tanpa Perisai baru.</p>
</main>

<?php
$extraFoot = '<script src="' . e(aset('js/dash_kepesertaan.js')) . '"></script>';
require __DIR__ . '/../includes/footer_publik.php';
