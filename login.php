<?php
/** login.php - pemroses formulir login pada beranda (POST). Akun statis: lihat config/auth.php */
require_once __DIR__ . '/config/auth.php';

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    redirect('index.php');
}

$peran    = (string) ($_POST['peran'] ?? '');
$username = (string) ($_POST['username'] ?? '');
$password = (string) ($_POST['password'] ?? '');

/** Kembali ke beranda dengan pesan error; formulir login terbuka otomatis. */
function login_gagal(string $pesan, string $peran): void
{
    $_SESSION['login_error'] = $pesan;
    $_SESSION['login_peran'] = isset(AKUN[$peran]) ? $peran : 'pelayanan';
    redirect('index.php');
}

if (!csrf_valid()) {
    login_gagal('Sesi formulir sudah berakhir. Silakan coba masuk lagi.', $peran);
}
if (($sisa = login_sisa_blokir()) > 0) {
    login_gagal('Terlalu banyak percobaan gagal. Coba lagi dalam ' . (int) ceil($sisa / 60) . ' menit.', $peran);
}
if (trim($username) === '' || $password === '') {
    login_gagal('Username dan password wajib diisi.', $peran);
}
if (!login_coba($peran, $username, $password)) {
    login_gagal('Username atau password salah, atau tidak sesuai dengan peran kerja yang dipilih.', $peran);
}

redirect(AKUN[$peran]['tujuan']);
