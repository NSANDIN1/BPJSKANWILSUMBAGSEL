<?php
/**
 * auth.php - Login statis berbasis PHP Session (tanpa tabel users).
 * Akun didefinisikan di konstanta AKUN di bawah. Ubah username/password di sini bila perlu.
 *
 * Perlindungan: maks. 5 percobaan gagal per alamat IP, lalu diblokir 5 menit;
 * sesi berakhir bila tidak ada aktivitas 2 jam.
 */
require_once __DIR__ . '/helpers.php';

const LOGIN_MAKS_GAGAL = 5;
const LOGIN_BLOKIR_DTK = 300;
const SESI_IDLE_MAKS   = 2 * 60 * 60;

if (session_status() === PHP_SESSION_NONE) {
    $https = !empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off';
    session_name('SISINTSESS');
    session_set_cookie_params(['path' => '/', 'secure' => $https, 'httponly' => true, 'samesite' => 'Lax']);
    session_start();

    if (isset($_SESSION['terakhir']) && time() - (int) $_SESSION['terakhir'] > SESI_IDLE_MAKS) {
        $_SESSION = [];
    }
    if (!empty($_SESSION['login'])) {
        $_SESSION['terakhir'] = time();
    }
}

/** Daftar akun: kunci = peran/divisi. 'tujuan' = halaman awal setelah login. */
const AKUN = [
    'pelayanan'   => ['username' => 'BPJS.PELAYANAN',   'password' => 'pelayananbpjs',   'label' => 'Pelayanan',   'tujuan' => 'pelayanan/index.php'],
    'kepesertaan' => ['username' => 'BPJS.KEPESERTAAN', 'password' => 'kepesertaanbpjs', 'label' => 'Kepesertaan', 'tujuan' => 'kepesertaan/index.php'],
    'kearsipan'   => ['username' => 'BPJS.KEARSIPAN',   'password' => 'kearsipanbpjs',   'label' => 'Kearsipan',   'tujuan' => 'kearsipan/index.php'],
];

/* ---------- Pembatas percobaan login ---------- */

function login_berkas_gagal(): string
{
    return sys_get_temp_dir() . DIRECTORY_SEPARATOR . 'sisint_login_' . md5($_SERVER['REMOTE_ADDR'] ?? 'x') . '.json';
}

function login_baca_gagal(): array
{
    $d = @json_decode((string) @file_get_contents(login_berkas_gagal()), true);
    return is_array($d) ? $d : ['n' => 0, 't' => 0];
}

function login_tulis_gagal(array $d): void
{
    @file_put_contents(login_berkas_gagal(), json_encode($d), LOCK_EX);
}

/** Sisa detik pemblokiran login (0 = tidak diblokir). */
function login_sisa_blokir(): int
{
    $g = login_baca_gagal();
    if ($g['n'] < LOGIN_MAKS_GAGAL) {
        return 0;
    }
    $sisa = LOGIN_BLOKIR_DTK - (time() - (int) $g['t']);
    if ($sisa <= 0) {
        login_tulis_gagal(['n' => 0, 't' => 0]);
        return 0;
    }
    return $sisa;
}

/** Cek kredensial. Berhasil -> simpan sesi dan kembalikan true. */
function login_coba(string $peran, string $username, string $password): bool
{
    $akun   = AKUN[$peran] ?? null;
    $userOk = $akun !== null && hash_equals($akun['username'], strtoupper(trim($username)));
    $passOk = $akun !== null && hash_equals($akun['password'], $password);

    if (!($userOk && $passOk)) {
        $g = login_baca_gagal();
        $g['n']++;
        $g['t'] = time();
        login_tulis_gagal($g);
        usleep(400000);                     // perlambat tebak-tebakan
        return false;
    }

    login_tulis_gagal(['n' => 0, 't' => 0]);
    session_regenerate_id(true);            // cegah session fixation
    $_SESSION['login']    = true;
    $_SESSION['peran']    = $peran;
    $_SESSION['username'] = $akun['username'];
    $_SESSION['terakhir'] = time();
    return true;
}

function sudah_login(): bool
{
    return !empty($_SESSION['login']);
}

/**
 * Pagar halaman. Panggil di baris pertama setiap halaman terproteksi.
 *   wajib_login('kearsipan');  -> hanya akun divisi Kearsipan
 * Belum login -> diarahkan ke beranda dengan formulir login terbuka untuk peran tsb.
 */
function wajib_login(?string $peran = null): void
{
    if (!sudah_login()) {
        redirect('index.php' . ($peran !== null ? '?login=' . rawurlencode($peran) : ''));
    }
    if ($peran !== null && ($_SESSION['peran'] ?? '') !== $peran) {
        flash_set('error', 'Anda tidak memiliki akses ke modul tersebut.');
        redirect('index.php');
    }
}

/** Versi untuk endpoint JSON: balas 401/403 (bukan redirect). */
function wajib_login_api(string $peran): void
{
    if (!sudah_login()) {
        json_balas(401, ['ok' => false, 'message' => 'Anda belum login atau sesi sudah berakhir.', 'pesan' => 'Anda belum login atau sesi sudah berakhir.']);
    }
    if (($_SESSION['peran'] ?? '') !== $peran) {
        json_balas(403, ['ok' => false, 'message' => 'Peran Anda tidak memiliki akses ke layanan ini.', 'pesan' => 'Peran Anda tidak memiliki akses ke layanan ini.']);
    }
    header('Cache-Control: no-store');
}

function user_aktif(): string { return $_SESSION['username'] ?? ''; }
function peran_aktif(): string { return $_SESSION['peran'] ?? ''; }

function logout_sesi(): void
{
    $_SESSION = [];
    if (ini_get('session.use_cookies')) {
        $p = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000, $p['path'], $p['domain'], $p['secure'], $p['httponly']);
    }
    session_destroy();
}
