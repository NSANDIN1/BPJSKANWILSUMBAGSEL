<?php
/** pelayanan/laporan.php - laporan bulanan per bagian (tab). Isi dibangun oleh assets/js/pelayanan_laporan.js */
require_once __DIR__ . '/../config/auth.php';
wajib_login('pelayanan');

$judul      = 'Laporan Bulanan - Divisi Pelayanan BPJS Ketenagakerjaan';
$halaman    = 'laporan';
$bulanAktif = (int) ($_GET['bulan'] ?? 0);
require __DIR__ . '/../includes/pelayanan_atas.php';
?>
    <header class="topbar">
      <button class="menu-btn" id="menu-btn" type="button" aria-label="Buka menu" aria-controls="sidebar" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      <div>
        <div class="tb-title">Monthly Report Divisi Pelayanan <span class="badge">Laporan Bulanan</span></div>
        <div class="tb-sub" id="crumb"><a href="index.php">Beranda</a></div>
      </div>
      <div class="spacer"></div>
      <span class="pill-status" id="tb-status"><span class="pulse"></span><span id="tb-status-text"><?= count($bulanAda) ?> dari 12 bulan tersedia</span></span>
      <a class="btn btn-outline" href="index.php"><i class="fa-solid fa-arrow-left"></i> Halaman utama</a>
    </header>

    <main class="page">
      <div class="report-head">
        <h1 id="judul">Laporan</h1>
        <p class="meta" id="meta"></p>
        <nav class="month-nav" id="month-nav" aria-label="Pilih bulan lain"></nav>
        <div class="tabs" id="tabs" role="tablist" aria-label="Bagian laporan"></div>
      </div>
      <div id="content" aria-live="polite"></div>
    </main>
<?php require __DIR__ . '/../includes/pelayanan_bawah.php'; ?>

  <script src="data.php"></script>
  <script src="<?= e(aset('js/pelayanan_main.js')) ?>"></script>
  <script src="<?= e(aset('js/pelayanan_laporan.js')) ?>"></script>
  <script>initShell(); initLaporan();</script>
</body>
</html>
