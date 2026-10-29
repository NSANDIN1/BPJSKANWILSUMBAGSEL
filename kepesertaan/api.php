<?php
/**
 * kepesertaan/api.php - data Dashboard Kepesertaan (tabel MySQL dashboard_data).
 *   GET  ?view=publik         : data teragregat tanpa nama Perisai (untuk dashboard/kepesertaan.php), tanpa login.
 *   GET                       : rekap + perisai lengkap (wajib login Kepesertaan).
 *   POST {action:"save", rekap:[], perisai:[]} / {action:"reset"} : wajib login Kepesertaan + token CSRF.
 */
require_once __DIR__ . '/../config/auth.php';

$metode = $_SERVER['REQUEST_METHOD'] ?? 'GET';
$publik = $metode === 'GET' && ($_GET['view'] ?? '') === 'publik';

if (!$publik) {
    wajib_login_api('kepesertaan');
}
if ($metode === 'POST') {
    $token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
    if (!is_string($token) || !hash_equals($_SESSION['csrf'] ?? '', $token)) {
        json_balas(419, ['ok' => false, 'message' => 'Sesi tidak valid. Muat ulang halaman lalu coba lagi.']);
    }
    if (stripos($_SERVER['CONTENT_TYPE'] ?? '', 'application/json') === false) {
        json_balas(415, ['ok' => false, 'message' => 'Content-Type harus application/json.']);
    }
}

require_once __DIR__ . '/../koneksi.php';

try {
    if ($metode === 'GET') {
        $data = ['rekap' => [], 'perisai' => []];
        foreach (db_all($koneksi, "SELECT data_key, payload FROM dashboard_data WHERE data_key IN ('rekap','perisai')") as $row) {
            $dec = json_decode((string) $row['payload'], true);
            $data[$row['data_key']] = is_array($dec) ? $dec : [];
        }

        if ($publik) {
            // Hanya kolom yang dibutuhkan dashboard; nama/kode Perisai dan pembina tidak dikirim.
            $aman = [];
            foreach ($data['perisai'] as $r) {
                if (!is_array($r)) {
                    continue;
                }
                $aman[] = [
                    'periode'   => $r['periode']   ?? '',
                    'cabang'    => $r['cabang']    ?? '',
                    'kodeWadah' => $r['kodeWadah'] ?? '',
                    'wadah'     => $r['wadah']     ?? '',
                    'tglAktif'  => $r['tglAktif']  ?? '',
                ];
            }
            json_balas(200, ['ok' => true, 'perisai' => $aman]);
        }
        json_balas(200, ['ok' => true, 'rekap' => $data['rekap'], 'perisai' => $data['perisai']]);
    }

    if ($metode !== 'POST') {
        header('Allow: GET, POST');
        json_balas(405, ['ok' => false, 'message' => 'Metode request tidak didukung.']);
    }

    $raw   = (string) file_get_contents('php://input');
    $input = json_decode($raw, true);
    if (trim($raw) === '' || !is_array($input)) {
        json_balas(400, ['ok' => false, 'message' => 'Payload JSON tidak valid.']);
    }
    $action = $input['action'] ?? '';

    if ($action === 'reset') {
        db_exec($koneksi, "DELETE FROM dashboard_data WHERE data_key IN ('rekap','perisai')");
        json_balas(200, ['ok' => true, 'message' => 'Data dashboard berhasil direset.']);
    }
    if ($action !== 'save') {
        json_balas(400, ['ok' => false, 'message' => 'Action tidak dikenal.']);
    }
    foreach (['rekap', 'perisai'] as $key) {
        if (!array_key_exists($key, $input) || !is_array($input[$key])) {
            json_balas(400, ['ok' => false, 'message' => "Data {$key} tidak valid."]);
        }
    }

    // Transaksi agar kedua dataset tersimpan bersama-sama.
    $koneksi->begin_transaction();
    try {
        foreach (['rekap', 'perisai'] as $key) {
            $json = json_encode($input[$key], JSON_UNESCAPED_UNICODE | JSON_INVALID_UTF8_SUBSTITUTE);
            if ($json === false) {
                throw new RuntimeException("Gagal mengubah data {$key} menjadi JSON.");
            }
            db_exec($koneksi,
                'INSERT INTO dashboard_data (data_key, payload, updated_at) VALUES (?, ?, NOW())
                 ON DUPLICATE KEY UPDATE payload = VALUES(payload), updated_at = NOW()',
                [$key, $json]);
        }
        $koneksi->commit();
    } catch (Throwable $e) {
        $koneksi->rollback();
        throw $e;
    }
    json_balas(200, ['ok' => true, 'message' => 'Data berhasil disimpan ke server.']);
} catch (Throwable $e) {
    error_log('Operasi API kepesertaan gagal: ' . $e->getMessage());
    // Detail hanya ditampilkan ke petugas yang sudah login (bukan di tampilan publik).
    $detail = $publik ? '' : ' Detail: ' . $e->getMessage();
    json_balas(500, ['ok' => false, 'message' => 'Operasi database gagal. Periksa struktur tabel dan log PHP server.' . $detail]);
}
