<?php
/**
 * pelayanan/api.php - unggah dan daftar file Excel / PDF Monthly Report Divisi Pelayanan.
 *   GET  api.php?aksi=daftar   -> daftar file yang pernah diunggah
 *   POST api.php?aksi=unggah   -> field "file" (.xlsx .xls .pdf) dan "bulan" (0-12, opsional, untuk PDF)
 *   POST api.php?aksi=hapus    -> field "id" (hapus riwayat saja)
 * File disimpan permanen di pelayanan/uploads/, riwayat di tabel MySQL `unggahan`,
 * dan isi laporan ditulis ke data/laporan_data.js oleh pelayanan/tools/proses_unggahan.py.
 */
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/konstanta.php';
require_once __DIR__ . '/../koneksi.php';

wajib_login_api('pelayanan');   // hanya peran Pelayanan yang sudah login

$aksi   = (string) ($_GET['aksi'] ?? 'daftar');
$metode = $_SERVER['REQUEST_METHOD'] ?? 'GET';

if ($aksi === 'daftar') {
    $baris = db_all($koneksi,
        'SELECT id, nama_asli, nama_simpan, jenis, bulan, ukuran, tgl_unggah, status, pesan
         FROM unggahan ORDER BY id DESC LIMIT 100');
    json_balas(200, ['ok' => true, 'daftar' => $baris]);
}

if ($metode !== 'POST' || !in_array($aksi, ['unggah', 'hapus'], true)) {
    json_balas(400, ['ok' => false, 'pesan' => 'Permintaan tidak dikenal.']);
}

// Semua aksi tulis wajib membawa token CSRF (header X-CSRF-Token)
$token = $_SERVER['HTTP_X_CSRF_TOKEN'] ?? '';
if (!is_string($token) || !hash_equals($_SESSION['csrf'] ?? '', $token)) {
    json_balas(419, ['ok' => false, 'pesan' => 'Sesi tidak valid. Muat ulang halaman lalu coba lagi.']);
}

// Hapus riwayat saja: tidak menghapus file di uploads maupun data laporan.
if ($aksi === 'hapus') {
    $id = filter_input(INPUT_POST, 'id', FILTER_VALIDATE_INT);
    if (!$id || $id < 1) {
        json_balas(400, ['ok' => false, 'pesan' => 'ID riwayat tidak valid.']);
    }
    if (db_exec($koneksi, 'DELETE FROM unggahan WHERE id = ?', [$id]) < 1) {
        json_balas(404, ['ok' => false, 'pesan' => 'Riwayat tidak ditemukan atau sudah dihapus.']);
    }
    json_balas(200, ['ok' => true, 'pesan' => 'Riwayat unggahan berhasil dihapus.']);
}

// ---------- unggah: validasi file
$dirUnggah = __DIR__ . '/uploads';
$dirData   = __DIR__ . '/../data';
foreach ([$dirUnggah, $dirData] as $d) {
    if (!is_dir($d)) {
        @mkdir($d, 0777, true);
    }
}

$f = $_FILES['file'] ?? null;
if (!$f || $f['error'] === UPLOAD_ERR_NO_FILE) {
    json_balas(400, ['ok' => false, 'pesan' => 'Belum ada file yang dipilih.']);
}
if ($f['error'] === UPLOAD_ERR_INI_SIZE || $f['error'] === UPLOAD_ERR_FORM_SIZE || $f['size'] > MAKS_UNGGAH) {
    json_balas(400, ['ok' => false, 'pesan' => 'Ukuran file terlalu besar (maksimal 40 MB, atau batas upload_max_filesize di php.ini).']);
}
if ($f['error'] !== UPLOAD_ERR_OK) {
    json_balas(400, ['ok' => false, 'pesan' => 'File gagal diunggah (kode ' . (int) $f['error'] . ').']);
}

$namaAsli = basename(str_replace('\\', '/', (string) $f['name']));
$ext      = strtolower(pathinfo($namaAsli, PATHINFO_EXTENSION));
if (!in_array($ext, ['xlsx', 'xls', 'pdf'], true)) {
    json_balas(400, ['ok' => false, 'pesan' => 'Format file harus .xlsx, .xls, atau .pdf.']);
}
$kepala = (string) file_get_contents($f['tmp_name'], false, null, 0, 8);
$cocok  = ($ext === 'pdf'  && strncmp($kepala, '%PDF', 4) === 0)
       || ($ext === 'xlsx' && strncmp($kepala, 'PK', 2) === 0)
       || ($ext === 'xls'  && strncmp($kepala, "\xD0\xCF\x11\xE0", 4) === 0);
if (!$cocok) {
    json_balas(400, ['ok' => false, 'pesan' => 'Isi file tidak sesuai dengan ekstensinya (' . $ext . ').']);
}

$bulanPilih = (int) ($_POST['bulan'] ?? 0);
if ($bulanPilih < 0 || $bulanPilih > 12) {
    $bulanPilih = 0;
}

// ---------- simpan permanen (nama acak agar tidak bisa menimpa / ditebak)
$namaSimpan = date('Ymd_His') . '_' . bin2hex(random_bytes(3)) . '.' . $ext;
$tujuan     = $dirUnggah . '/' . $namaSimpan;
if (!move_uploaded_file($f['tmp_name'], $tujuan)) {
    json_balas(500, ['ok' => false, 'pesan' => 'File tidak bisa disimpan. Pastikan folder pelayanan/uploads bisa ditulis.']);
}

// ---------- baca isi file (Python memakai alat di pelayanan/tools), satu proses pada satu waktu
$hasil = ['ok' => false, 'pesan' => 'Fungsi exec() dinonaktifkan di php.ini, jadi isi file belum bisa dibaca. File tetap tersimpan.'];
if (function_exists('exec') && stripos((string) ini_get('disable_functions'), 'exec') === false) {
    // Poppler (pdftotext): pastikan proses Python menemukannya meski PATH Apache berbeda.
    if (POPPLER_BIN !== '' && is_dir(POPPLER_BIN)) {
        putenv('PATH=' . (getenv('PATH') ?: '') . PATH_SEPARATOR . POPPLER_BIN);
    }
    $skrip = __DIR__ . '/tools/proses_unggahan.py';
    $jenis = $ext === 'pdf' ? 'pdf' : 'excel';
    $args  = escapeshellarg($skrip) . ' ' . $jenis . ' ' . escapeshellarg($tujuan) . ' ' . $bulanPilih
           . ' ' . escapeshellarg('uploads/' . $namaSimpan) . ' ' . escapeshellarg($namaAsli);

    $kunci = fopen($dirData . '/pelayanan.lock', 'c');
    if ($kunci) {
        flock($kunci, LOCK_EX);
    }
    $hasil = ['ok' => false, 'pesan' => 'Python belum terpasang atau tidak ditemukan di server. File tetap tersimpan.'];
    foreach (['python3', 'python', 'py -3'] as $py) {
        $out  = [];
        $kode = 0;
        @exec($py . ' ' . $args . ' 2>&1', $out, $kode);
        $j = json_decode(trim((string) end($out)), true);
        if (is_array($j) && isset($j['ok'])) {
            $hasil = $j;
            break;
        }
        if ($out) {
            $hasil = ['ok' => false, 'pesan' => 'Gagal menjalankan pembaca data: ' . mb_substr(implode(' ', $out), 0, 200)];
        }
    }
    if ($kunci) {
        flock($kunci, LOCK_UN);
        fclose($kunci);
    }
}

// ---------- catat riwayat
$bulanCatat = null;
if (!empty($hasil['bulan']) && is_array($hasil['bulan'])) {
    $bulanCatat = implode(', ', array_map(function ($b) {
        return NAMA_BULAN[(int) $b - 1] ?? (string) $b;
    }, $hasil['bulan']));
}
db_exec($koneksi,
    'INSERT INTO unggahan (nama_asli, nama_simpan, jenis, bulan, ukuran, tgl_unggah, status, pesan) VALUES (?,?,?,?,?,?,?,?)',
    [$namaAsli, $namaSimpan, $ext === 'pdf' ? 'PDF' : 'Excel', $bulanCatat, (int) $f['size'],
     date('Y-m-d H:i:s'), !empty($hasil['ok']) ? 'berhasil' : 'gagal', mb_substr((string) ($hasil['pesan'] ?? ''), 0, 500)]);

json_balas(200, ['ok' => !empty($hasil['ok']), 'pesan' => (string) ($hasil['pesan'] ?? ''), 'tersimpan' => true, 'bulan' => $bulanCatat]);
