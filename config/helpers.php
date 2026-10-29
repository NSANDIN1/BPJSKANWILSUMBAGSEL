<?php
/** helpers.php - fungsi bantu umum (escape, URL, query singkat, flash, CSRF, JSON) */

date_default_timezone_set('Asia/Jakarta');

/** Escape output HTML (cegah XSS). Pakai di SETIAP echo data dari user/database. */
function e($teks): string
{
    return htmlspecialchars((string) $teks, ENT_QUOTES, 'UTF-8');
}

/** Alamat URL folder proyek, dihitung otomatis dari lokasi folder terhadap document root. */
function base_url(): string
{
    static $base = null;
    if ($base === null) {
        $root = str_replace('\\', '/', (string) realpath(__DIR__ . '/..'));
        $doc  = str_replace('\\', '/', (string) realpath($_SERVER['DOCUMENT_ROOT'] ?? ''));
        $base = ($doc !== '' && strpos($root, $doc) === 0) ? substr($root, strlen($doc)) : '';
    }
    return $base;
}

/** URL file di folder assets (ditambah penanda waktu ubah agar cache browser ikut diperbarui). */
function aset(string $path): string
{
    $file = __DIR__ . '/../assets/' . $path;
    $v    = is_file($file) ? '?v=' . filemtime($file) : '';
    return base_url() . '/assets/' . $path . $v;
}

/** Pindah halaman lalu hentikan skrip. */
function redirect(string $path): void
{
    header('Location: ' . base_url() . '/' . ltrim($path, '/'));
    exit;
}

/** Balas JSON lalu hentikan skrip (untuk endpoint api.php). */
function json_balas(int $kode, array $data): void
{
    http_response_code($kode);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
    exit;
}

/* ---------- Query singkat (prepared statement, aman dari SQL injection) ---------- */

/** Ikat parameter ke statement (kompatibel PHP 7.4+; mysqli execute() dengan array baru ada di PHP 8.1). */
function db_ikat(mysqli_stmt $stmt, array $params): void
{
    if (!$params) {
        return;
    }
    $tipe = '';
    foreach ($params as $p) {
        $tipe .= is_int($p) ? 'i' : (is_float($p) ? 'd' : 's');
    }
    $params = array_values($params);
    $stmt->bind_param($tipe, ...$params);
}

/** Ambil banyak baris. Contoh: db_all($koneksi, "SELECT * FROM t WHERE a=?", [$a]) */
function db_all(mysqli $k, string $sql, array $params = []): array
{
    $stmt = $k->prepare($sql);
    db_ikat($stmt, $params);
    $stmt->execute();
    $hasil = $stmt->get_result()->fetch_all(MYSQLI_ASSOC);
    $stmt->close();
    return $hasil;
}

/** Ambil satu baris (atau null). */
function db_row(mysqli $k, string $sql, array $params = []): ?array
{
    $baris = db_all($k, $sql, $params);
    return $baris[0] ?? null;
}

/** Ambil satu nilai (mis. COUNT). */
function db_value(mysqli $k, string $sql, array $params = [])
{
    $baris = db_all($k, $sql, $params);
    return $baris ? array_values($baris[0])[0] : null;
}

/** Jalankan INSERT/UPDATE/DELETE. Mengembalikan jumlah baris terpengaruh. */
function db_exec(mysqli $k, string $sql, array $params = []): int
{
    $stmt = $k->prepare($sql);
    db_ikat($stmt, $params);
    $stmt->execute();
    $n = $stmt->affected_rows;
    $stmt->close();
    return $n;
}

/* ---------- Pesan sekali tampil (flash) ---------- */

function flash_set(string $tipe, string $pesan): void
{
    $_SESSION['flash'] = ['tipe' => $tipe, 'pesan' => $pesan];
}

/** Kembalikan HTML kotak pesan (tipe: sukses | error) lalu hapus dari sesi. */
function flash_tampil(): string
{
    if (empty($_SESSION['flash'])) {
        return '';
    }
    $f = $_SESSION['flash'];
    unset($_SESSION['flash']);
    return '<div class="alert alert-' . e($f['tipe']) . '">' . e($f['pesan']) . '</div>';
}

/* ---------- CSRF (token pada setiap form POST) ---------- */

function csrf_token(): string
{
    if (empty($_SESSION['csrf'])) {
        $_SESSION['csrf'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf'];
}

function csrf_field(): string
{
    return '<input type="hidden" name="csrf" value="' . e(csrf_token()) . '">';
}

function csrf_valid(): bool
{
    $kirim = $_POST['csrf'] ?? '';
    return is_string($kirim) && hash_equals($_SESSION['csrf'] ?? '', $kirim);
}

/** Hentikan request POST bila token tidak cocok. */
function csrf_wajib(): void
{
    if (!csrf_valid()) {
        http_response_code(419);
        die('Sesi formulir tidak valid. Silakan kembali dan muat ulang halaman.');
    }
}

/* ---------- Format ---------- */

/** Format tanggal Y-m-d menjadi d-m-Y. */
function tgl(?string $t): string
{
    return $t ? date('d-m-Y', strtotime($t)) : '-';
}

/** Format angka gaya Indonesia: 12.345 */
function angka($n): string
{
    return number_format((float) $n, 0, ',', '.');
}

/** Tanggal hari ini dalam bahasa Indonesia, mis. "29 Oktober 2026". */
function tanggal_hari_ini(): string
{
    $bulan = ['', 'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
    return date('j') . ' ' . $bulan[(int) date('n')] . ' ' . date('Y');
}
