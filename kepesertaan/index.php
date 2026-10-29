<?php
/** kepesertaan/index.php - Dashboard Kepesertaan & EWS Perisai (impor Excel, EWS, rekap) */
require_once __DIR__ . '/../config/auth.php';
wajib_login('kepesertaan');
$b = base_url();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="csrf" content="<?= e(csrf_token()) ?>">
    <title>Dashboard Kepesertaan &amp; EWS Perisai - BPJS Ketenagakerjaan Sumbagsel</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= e(aset('css/base.css')) ?>">
    <link rel="stylesheet" href="<?= e(aset('css/panel.css')) ?>">
</head>
<body class="panel">
<div class="app">

    <aside class="sidebar">
        <div class="sb-brand">
            <div class="sb-logo"><i class="fa-solid fa-shield-halved"></i></div>
            <div>
                <span class="sb-cap">Modul Utama</span>
                <span class="sb-name">KEPESERTAAN EWS</span>
            </div>
        </div>
        <nav class="sb-nav">
            <a href="#" class="sb-link aktif"><i class="fa-solid fa-chart-line"></i> Monitoring Dashboard</a>
            <a href="#warning-section" class="sb-link"><i class="fa-solid fa-triangle-exclamation ic-amber"></i> Early Warning System</a>
            <a href="#perisai-aktif-section" class="sb-link"><i class="fa-solid fa-user-check ic-green"></i> Ringkasan Perisai Aktif</a>
            <a href="#data-table" class="sb-link"><i class="fa-solid fa-table-list ic-lgreen"></i> Rekap Data TK</a>
        </nav>
        <div class="sb-foot">
            <a href="<?= e($b) ?>/logout.php" class="sb-btn"><i class="fa-solid fa-arrow-left"></i> Keluar</a>
            <button type="button" onclick="resetAllData()" class="sb-btn danger"><i class="fa-solid fa-trash-can"></i> Reset Semua Data</button>
            <div class="sb-ver">Penyimpanan Server MySQL · <b>Versi 8</b></div>
        </div>
    </aside>

    <div class="col">
        <div class="mobile-bar"><span>KEPESERTAAN EWS</span><a href="<?= e($b) ?>/logout.php">Keluar</a></div>

        <header class="topbar">
            <div>
                <h1>Dashboard Kepesertaan &amp; EWS Perisai <span class="tag-green">Sumbagsel</span></h1>
                <p class="sub">Kantor Wilayah Sumbagsel • Pengelolaan &amp; Perluasan Cakupan Peserta</p>
            </div>

            <div class="tools">
                <div class="tool-box">
                    <div class="cap"><span>TGL IMPORT TK</span><input type="date" id="date-rekap"></div>
                    <label for="excel-rekap" class="btn-imp hijau"><i class="fa-solid fa-file-excel"></i> Import File TK</label>
                    <input type="file" id="excel-rekap" accept=".xlsx, .xls, .csv" class="file-hidden" onchange="handleRekapUpload(event)">
                </div>
                <div class="tool-box">
                    <div class="cap"><span>TGL PERISAI AKTIF</span><input type="date" id="date-perisai"></div>
                    <label for="excel-perisai" class="btn-imp biru"><i class="fa-solid fa-file-excel"></i> Import Perisai Aktif</label>
                    <input type="file" id="excel-perisai" accept=".xlsx, .xls, .csv" class="file-hidden" onchange="handlePerisaiAktifUpload(event)">
                </div>
                <button type="button" onclick="exportToExcel()" class="btn-export"><i class="fa-solid fa-file-arrow-down"></i> Export Excel</button>
            </div>
        </header>

        <main class="content">
            <?= flash_tampil() ?>

            <div class="grid-3">
                <div class="stat">
                    <span class="circle c-green"></span>
                    <div>
                        <p class="stat-label"><span class="dot d-green"></span> Total Tenaga Kerja (TK)</p>
                        <h3 id="stat-total-tk" class="stat-value">0</h3>
                    </div>
                    <div class="stat-ico i-green"><i class="fa-solid fa-users"></i></div>
                </div>
                <div class="stat">
                    <span class="circle c-blue"></span>
                    <div>
                        <p class="stat-label"><span class="dot d-blue"></span> Total Perisai Aktif</p>
                        <h3 id="stat-perisai-aktif" class="stat-value v-blue">0</h3>
                    </div>
                    <div class="stat-ico i-blue"><i class="fa-solid fa-user-shield"></i></div>
                </div>
                <div class="stat">
                    <span class="circle c-amber"></span>
                    <div>
                        <p class="stat-label"><span class="dot d-amber"></span> EWS Wadah Kritis (&gt; 3 Bulan Tanpa Perisai Baru)</p>
                        <h3 id="stat-ews-kritis" class="stat-value v-amber">0</h3>
                    </div>
                    <div class="stat-ico i-amber"><i class="fa-solid fa-triangle-exclamation"></i></div>
                </div>
            </div>

            <div class="grid-2">
                <div class="box">
                    <div class="box-head" style="flex-direction:row;align-items:center">
                        <h3 class="box-title"><span class="ico-sq s-green"><i class="fa-solid fa-ranking-star"></i></span> Top 5 Wadah dengan TK Terbanyak</h3>
                        <span class="box-chip">Ranking Aktif</span>
                    </div>
                    <div class="chart-box"><canvas id="topWadahChart"></canvas></div>
                </div>
                <div class="box">
                    <div class="box-head" style="flex-direction:row;align-items:center">
                        <h3 class="box-title"><span class="ico-sq s-blue"><i class="fa-solid fa-chart-line"></i></span> Tren Total Perisai Aktif Per Tanggal Import</h3>
                        <span class="box-chip">Grafik Harian</span>
                    </div>
                    <div class="chart-box"><canvas id="dateTrendChart"></canvas></div>
                </div>
            </div>

            <div id="warning-section" class="box">
                <div class="box-head">
                    <div>
                        <h3 class="box-title"><span class="ico-sq s-amber"><i class="fa-solid fa-bell"></i></span> Early Warning System (EWS) Wadah &amp; Perisai</h3>
                        <p class="box-desc">Wadah yang tidak mendapat tambahan Perisai baru selama 3 bulan (90 hari). Data Perisai Aktif wajib diperbarui minimal 2 kali seminggu.</p>
                    </div>
                    <span class="chip-amber">⚠️ Perlu Pembinaan</span>
                </div>
                <div id="ews-info" class="info-stack"></div>
                <div class="table-wrap max">
                    <table class="tbl" id="warning-table">
                        <thead><tr><th>Kantor Cabang</th><th>Nama Wadah</th><th>Perisai Aktif</th><th>Perisai Baru Terakhir</th><th>Tanpa Tambahan</th><th>Status EWS</th></tr></thead>
                        <tbody><tr><td colspan="6" class="kosong">Belum ada data Perisai Aktif di-import.</td></tr></tbody>
                    </table>
                </div>
            </div>

            <div id="perisai-aktif-section" class="box">
                <div class="box-head">
                    <div>
                        <h3 class="box-title"><span class="ico-sq s-blue"><i class="fa-solid fa-user-check"></i></span> Ringkasan Perisai Aktif Per Cabang &amp; Pembina</h3>
                        <p class="box-desc">Jumlah Perisai berstatus Aktif per baris data import terbaru, dikelompokkan berdasarkan Pembina.</p>
                    </div>
                    <span class="chip-blue">🛡️ Perisai Aktif</span>
                </div>
                <div id="info-perisai" class="info-bar"></div>
                <div class="table-wrap">
                    <table class="tbl" id="perisai-aktif-summary-table">
                        <thead><tr><th>Tgl Import</th><th>Nama Cabang</th><th>Nama Pembina</th><th class="c" style="text-align:center">Jumlah Perisai Aktif</th></tr></thead>
                        <tbody><tr><td colspan="4" class="kosong">Belum ada data Perisai Aktif di-import.</td></tr></tbody>
                    </table>
                </div>
            </div>

            <div id="data-table" class="box">
                <div class="box-head">
                    <div>
                        <h3 class="box-title">Rekap Data Tenaga Kerja Terakumulasi</h3>
                        <p class="box-desc">Seluruh data pencatatan tenaga kerja yang berhasil di-import ke sistem.</p>
                    </div>
                    <div class="search">
                        <i class="fa-solid fa-search"></i>
                        <input type="text" id="table-search" onkeyup="filterMainTable()" placeholder="Cari wadah, perisai, atau cabang...">
                    </div>
                </div>
                <div class="table-wrap">
                    <table class="tbl" id="main-table">
                        <thead><tr><th>Tgl Import</th><th>Cabang</th><th>Nama Wadah</th><th>Nama Perisai</th><th>Jenis</th><th>Baru</th><th>Lanjutan</th><th>Total TK</th></tr></thead>
                        <tbody><tr><td colspan="8" class="kosong">Belum ada data Rekap TK di-import.</td></tr></tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>
</div>

<script src="<?= e(aset('js/kepesertaan.js')) ?>"></script>
</body>
</html>
