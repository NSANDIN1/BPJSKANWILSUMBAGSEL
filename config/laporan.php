<?php
/**
 * laporan.php - pembaca data Monthly Report (Pelayanan).
 * Sumber data: data/laporan_data.js ("const REPORT_DATA = {...};"), diperbarui otomatis
 * oleh pelayanan/tools/*.py saat file Excel/PDF diunggah.
 */

const BERKAS_LAPORAN = __DIR__ . '/../data/laporan_data.js';

/** Seluruh data laporan: [ '6' => ['periode' => 'Juni 2026', 'sections' => [...]], ... ] */
function laporan_data(): array
{
    static $data = null;
    if ($data === null) {
        $data  = [];
        $teks  = is_file(BERKAS_LAPORAN) ? (string) file_get_contents(BERKAS_LAPORAN) : '';
        $awal  = 'const REPORT_DATA = ';
        $pos   = strpos($teks, $awal);
        if ($pos !== false) {
            $json = rtrim(trim(substr($teks, $pos + strlen($awal))), ';');
            $x    = json_decode($json, true);
            if (is_array($x)) {
                $data = $x;
            }
        }
    }
    return $data;
}

/** Nomor bulan (1-12) yang datanya tersedia, urut naik. */
function laporan_bulan_ada(): array
{
    $b = [];
    foreach (array_keys(laporan_data()) as $k) {
        $n = (int) $k;
        if ($n >= 1 && $n <= 12) {
            $b[] = $n;
        }
    }
    sort($b);
    return $b;
}
