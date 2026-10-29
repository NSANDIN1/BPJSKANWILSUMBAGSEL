<?php
/**
 * kearsipan.php - daftar kategori folder Google Drive (Tata Naskah, Rekapitulasi, dst.)
 * Tautan disimpan di tabel `kearsipan_tautan` (diisi lewat kearsipan/kelola_tautan.php).
 * Untuk mengubah nama/deskripsi/ikon kategori, cukup edit di KATEGORI_ARSIP di bawah.
 */

const KATEGORI_ARSIP = [
    'tata_naskah' => [
        'judul' => 'Tata Naskah', 'file' => 'tata_naskah.php', 'ikon' => 'fa-file-lines',
        'deskripsi' => 'Folder Google Drive untuk dokumen Tata Naskah.',
    ],
    'rekapitulasi_arsip' => [
        'judul' => 'Rekapitulasi Arsip', 'file' => 'rekapitulasi_arsip.php', 'ikon' => 'fa-table-list',
        'deskripsi' => 'Folder Google Drive untuk dokumen Rekapitulasi Arsip.',
    ],
    'observasi_lapangan' => [
        'judul' => 'Observasi Lapangan', 'file' => 'observasi_lapangan.php', 'ikon' => 'fa-magnifying-glass-location',
        'deskripsi' => 'Folder Google Drive untuk dokumen Observasi Lapangan.',
    ],
    'pemusnahan_arsip' => [
        'judul' => 'Pemusnahan Arsip', 'file' => 'pemusnahan_arsip.php', 'ikon' => 'fa-trash-can',
        'deskripsi' => 'Folder Google Drive untuk dokumen Pemusnahan Arsip.',
    ],
];

/** Tautan Drive valid: https dan host Google Drive / Docs. Kosong dianggap valid (= belum diisi). */
function tautan_drive_valid(string $url): bool
{
    if ($url === '') {
        return true;
    }
    if (strlen($url) > 500 || !filter_var($url, FILTER_VALIDATE_URL)) {
        return false;
    }
    $p = parse_url($url);
    return strtolower($p['scheme'] ?? '') === 'https'
        && in_array(strtolower($p['host'] ?? ''), ['drive.google.com', 'docs.google.com'], true);
}

/** Tautan siap pakai (https)? */
function tautan_siap(?string $url): bool
{
    return is_string($url) && strpos($url, 'https://') === 0;
}

/**
 * Ambil semua kategori beserta tautannya dari database.
 * Bila tabel belum ada (SQL belum diimpor ulang), semua tautan dianggap kosong, halaman tetap jalan.
 */
function kategori_arsip(mysqli $k): array
{
    $kat = KATEGORI_ARSIP;
    foreach ($kat as $kunci => $_) {
        $kat[$kunci]['link'] = '';
    }
    try {
        foreach (db_all($k, 'SELECT kunci, link FROM kearsipan_tautan') as $r) {
            if (isset($kat[$r['kunci']])) {
                $kat[$r['kunci']]['link'] = (string) $r['link'];
            }
        }
    } catch (mysqli_sql_exception $e) {
        error_log('kearsipan_tautan tidak terbaca: ' . $e->getMessage());
    }
    return $kat;
}

/** Simpan satu tautan (kosong = belum diisi). */
function kategori_simpan_tautan(mysqli $k, string $kunci, string $url): void
{
    db_exec($k, 'INSERT INTO kearsipan_tautan (kunci, link) VALUES (?, ?) ON DUPLICATE KEY UPDATE link = VALUES(link)', [$kunci, $url]);
}
