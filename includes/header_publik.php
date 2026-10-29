<?php
/**
 * header_publik.php - kepala halaman publik (beranda & dashboard) + menu navigasi.
 * Set sebelum include:  $judul = '...';   (opsional) $extraHead = '<link ...>';
 * Prasyarat: config/auth.php sudah di-require.
 */
$judul     = $judul ?? 'Sistem Operasional BPJS Kanwil SUMBAGSEL';
$extraHead = $extraHead ?? '';
$b         = base_url();
$sudahMasuk = sudah_login();
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($judul) ?></title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <?= $extraHead ?>
    <link rel="stylesheet" href="<?= e(aset('css/base.css')) ?>">
    <link rel="stylesheet" href="<?= e(aset('css/publik.css')) ?>">
</head>
<body class="publik">

<header class="site-header">
    <a class="brand" href="<?= e($b) ?>/index.php">
        <div class="brand-logo">BPJS</div>
        <span class="brand-name">KANWIL SUMBAGSEL</span>
    </a>

    <nav class="site-nav">
        <a href="<?= e($b) ?>/index.php">Beranda</a>
        <a href="<?= e($b) ?>/index.php#peran-kerja">Peran Kerja</a>

        <div class="dd" id="dropdownBisnis">
            <button type="button" class="dd-btn" id="ddToggle" aria-haspopup="true" aria-expanded="false">
                <span>Dashboard</span>
                <i class="fa-solid fa-chevron-down" id="arrowIcon"></i>
            </button>
            <div id="dropdownMenu" class="dd-menu hidden">
                <a href="<?= e($b) ?>/dashboard/pelayanan.php"><i class="fa-solid fa-handshake"></i><span>Pelayanan</span></a>
                <a href="<?= e($b) ?>/dashboard/kepesertaan.php"><i class="fa-solid fa-briefcase"></i><span>Kepesertaan</span></a>
            </div>
        </div>
    </nav>

    <div class="header-actions">
        <button type="button" aria-label="Cari" class="icon-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </button>
        <button type="button" aria-label="Notifikasi" class="icon-btn">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
        </button>
        <?php if ($sudahMasuk): ?>
            <a class="btn-login" href="<?= e($b . '/' . (AKUN[peran_aktif()]['tujuan'] ?? 'index.php')) ?>">Modul Saya</a>
            <a class="btn-login ghost" href="<?= e($b) ?>/logout.php">Keluar</a>
        <?php else: ?>
            <a class="btn-login" href="<?= e($b) ?>/index.php?login=pelayanan" data-login="pelayanan">Login</a>
        <?php endif; ?>
    </div>
</header>
<?php $pesan = flash_tampil(); if ($pesan !== ''): ?>
<div class="flash-wrap"><?= $pesan ?></div>
<?php endif; ?>
