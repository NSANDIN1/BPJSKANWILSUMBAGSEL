<?php
/**
 * pelayanan/data.php - menyajikan data Monthly Report sebagai JavaScript (const REPORT_DATA = {...}).
 * Dipakai halaman Pelayanan dan Dashboard Pelayanan (publik). Sumber: data/laporan_data.js
 */
require_once __DIR__ . '/../config/laporan.php';

header('Content-Type: application/javascript; charset=utf-8');
header('Cache-Control: no-cache');

if (is_file(BERKAS_LAPORAN)) {
    readfile(BERKAS_LAPORAN);
} else {
    echo "const REPORT_DATA = {};\n";
}
