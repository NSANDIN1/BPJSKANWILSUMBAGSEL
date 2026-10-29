<?php
/**
 * kearsipan_atas.php - kepala HTML + sidebar + topbar modul Kearsipan.
 * Set sebelum include:  $judul, $sub (opsional), $menu  ('semua' | 'masuk' | 'keluar' | 'tambah' | kunci kategori | 'tautan'),
 *                       $kategori (hasil kategori_arsip()).
 * Halaman menulis isinya sendiri, lalu include kearsipan_bawah.php.
 */
$b    = base_url();
$sub  = $sub ?? 'Kelola folder Google Drive kearsipan';
$menu = $menu ?? 'semua';
?>
<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e($judul) ?> - Kearsipan</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="<?= e(aset('css/base.css')) ?>">
    <link rel="stylesheet" href="<?= e(aset('css/panel.css')) ?>">
</head>
<body class="panel">
<div class="app">

    <aside class="sidebar">
        <div class="sb-brand">
            <div class="sb-logo"><i class="fa-solid fa-box-archive"></i></div>
            <div>
                <span class="sb-cap">Modul Utama</span>
                <span class="sb-name">KEARSIPAN</span>
            </div>
        </div>
        <nav class="sb-nav">
            <div class="sb-group">Folder Google Drive</div>
            <?php foreach ($kategori as $kunci => $kat): ?>
                <a class="sb-link<?= $menu === $kunci ? ' aktif' : '' ?>" href="<?= e($kat['file']) ?>"><i class="fa-solid <?= e($kat['ikon']) ?> ic-lgreen"></i> <?= e($kat['judul']) ?></a>
            <?php endforeach; ?>
            <a class="sb-link<?= $menu === 'tautan' ? ' aktif' : '' ?>" href="kelola_tautan.php"><i class="fa-solid fa-link ic-yellow"></i> Kelola Tautan</a>
        </nav>
        <div class="sb-foot">
            <a href="<?= e($b) ?>/logout.php" class="sb-btn"><i class="fa-solid fa-arrow-left"></i> Keluar (<?= e(user_aktif()) ?>)</a>
        </div>
    </aside>

    <div class="col">
        <div class="mobile-bar">
            <span>KEARSIPAN</span>
            <a href="kelola_tautan.php">Drive</a>
            <a href="<?= e($b) ?>/logout.php">Keluar</a>
        </div>

        <header class="topbar">
            <div>
                <h1><?= e($judul) ?></h1>
                <p class="sub"><?= e($sub) ?></p>
            </div>
            <span class="status-aktif"><i class="fa-solid fa-circle-check"></i> Data Aktif · <?= e(tanggal_hari_ini()) ?></span>
        </header>

        <main class="content">
            <?= flash_tampil() ?>
