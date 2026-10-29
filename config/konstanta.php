<?php
/** konstanta.php - daftar pilihan & pengaturan (satu tempat, mudah diubah) */

const NAMA_BULAN = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

/** Jenis surat pada modul Kearsipan. */
const JENIS_SURAT = ['masuk' => 'Surat Masuk', 'keluar' => 'Surat Keluar'];

/** Ukuran maksimal unggahan Excel/PDF Monthly Report (Pelayanan). */
const MAKS_UNGGAH = 40 * 1024 * 1024;

/**
 * Folder 'bin' Poppler (pdftotext) untuk membaca PDF Monthly Report.
 * Dipakai hanya saat unggah PDF; kosongkan bila pdftotext sudah ada di PATH server.
 */
const POPPLER_BIN = 'C:\\Release-26.09.0-0\\poppler-26.09.0\\Library\\bin';

/** Tombol nomor halaman sederhana. $base = query string filter tanpa 'hal'. */
function tampil_paging(int $hal, int $totalHal, string $base): string
{
    if ($totalHal <= 1) {
        return '';
    }
    $out = '<div class="paging">';
    for ($i = 1; $i <= $totalHal; $i++) {
        $out .= ($i === $hal)
            ? '<span class="sekarang">' . $i . '</span>'
            : '<a href="?' . e($base . ($base ? '&' : '') . 'hal=' . $i) . '">' . $i . '</a>';
    }
    return $out . '</div>';
}
