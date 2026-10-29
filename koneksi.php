<?php
/**
 * koneksi.php - Koneksi database MySQL (MySQLi)
 * Sesuaikan host/port/user dengan MySQL XAMPP Anda (XAMPP bawaan memakai port 3306).
 */

$db_host = '127.0.0.1';
$db_user = 'root';
$db_pass = '';
$db_name = 'db_sistem_internal';
$port    = 3308;

mysqli_report(MYSQLI_REPORT_ERROR | MYSQLI_REPORT_STRICT);

try {
    $koneksi = new mysqli($db_host, $db_user, $db_pass, $db_name, $port);

    $koneksi->set_charset('utf8mb4');
    $koneksi->query("SET time_zone = '+07:00'");
} catch (mysqli_sql_exception $e) {
    http_response_code(500);
    error_log('Koneksi database gagal: ' . $e->getMessage());

    // Endpoint JSON (api.php) dibalas JSON; halaman biasa dibalas teks.
    if (strpos($_SERVER['SCRIPT_NAME'] ?? '', 'api.php') !== false) {
        header('Content-Type: application/json; charset=utf-8');
        die(json_encode(['ok' => false, 'message' => 'Koneksi database gagal. Periksa konfigurasi MySQL di koneksi.php.', 'pesan' => 'Koneksi database gagal.'], JSON_UNESCAPED_UNICODE));
    }
    die('Koneksi database gagal. Periksa konfigurasi MySQL (koneksi.php) dan log error PHP.');
}
