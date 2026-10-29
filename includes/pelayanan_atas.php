<?php
/**
 * pelayanan_atas.php - kepala + sidebar modul Pelayanan (Monthly Report).
 * Set sebelum include:  $judul, $halaman ('home' | 'laporan'), $bulanAktif (int, untuk 'laporan').
 * Halaman menulis sendiri <header class="topbar"> dan <main> di dalam .main-col, lalu include pelayanan_bawah.php.
 */
require_once __DIR__ . '/../config/laporan.php';
require_once __DIR__ . '/../config/konstanta.php';

$judul      = $judul ?? 'Monthly Report Divisi Pelayanan BPJS Ketenagakerjaan';
$halaman    = $halaman ?? 'home';
$bulanAktif = (int) ($bulanAktif ?? 0);
$bulanAda   = laporan_bulan_ada();
$bulanAkhir = $bulanAda ? end($bulanAda) : null;
?>
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="csrf" content="<?= e(csrf_token()) ?>">
  <title><?= e($judul) ?></title>
  <!-- Font Inter + ikon Font Awesome (butuh internet; tanpa internet tampilan tetap berfungsi, hanya ikon/font yang tidak muncul) -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <link rel="stylesheet" href="<?= e(aset('css/pelayanan.css')) ?>">
</head>
<body>
  <aside class="sidebar" id="sidebar" aria-label="Navigasi utama">
    <a class="sb-brand" href="index.php"><span class="sb-logo"><i class="fa-solid fa-chart-pie"></i></span><span class="sb-title"><small>Modul Utama</small><b>MONTHLY REPORT</b></span></a>
    <nav class="sb-scroll">
      <div class="sb-label">Menu</div>
      <a class="sb-link<?= $halaman === 'home' ? ' active' : '' ?>" href="index.php"><i class="fa-solid fa-house"></i>Beranda</a>
      <a class="sb-link<?= $halaman === 'laporan' ? ' active' : '' ?>" href="<?= $bulanAkhir ? 'laporan.php?bulan=' . (int) $bulanAkhir : 'index.php#pilih-bulan' ?>"><i class="fa-solid fa-chart-line"></i>Monthly Report</a>
      <div class="sb-label">Bulan laporan</div>
      <?php foreach (NAMA_BULAN as $i => $nama): $n = $i + 1; $ok = in_array($n, $bulanAda, true); ?>
        <a class="sb-link <?= $ok ? 'ok' : 'off' ?><?= ($halaman === 'laporan' && $n === $bulanAktif) ? ' active' : '' ?>" href="laporan.php?bulan=<?= $n ?>" title="<?= $ok ? 'Data tersedia' : 'Data belum tersedia' ?>"><i class="fa-regular <?= $ok ? 'fa-calendar-check' : 'fa-calendar' ?>"></i><?= e($nama) ?><span class="dot"></span></a>
      <?php endforeach; ?>
      <div class="sb-label">Informasi</div>
      <a class="sb-link" href="index.php#tentang"><i class="fa-solid fa-circle-info"></i>Tentang laporan</a>
      <a class="sb-link" href="index.php#sumber"><i class="fa-solid fa-file-lines"></i>Sumber data</a>
    </nav>
    <div class="sb-bottom">
      <a class="sb-back" href="../index.php"><i class="fa-solid fa-arrow-left"></i>Kembali ke Halaman Utama</a>
      <a class="sb-back" href="../logout.php"><i class="fa-solid fa-right-from-bracket"></i>Keluar (<?= e(user_aktif()) ?>)</a>
    </div>
  </aside>
  <div class="sb-backdrop" id="sb-backdrop"></div>

  <div class="main-col">
