<?php
/**
 * kearsipan_kategori.php - isi halaman satu kategori folder Google Drive.
 * Dipanggil dari tata_naskah.php dst. dengan $kunci terisi. Semua pengguna Kearsipan boleh melihat dan mengubah tautan.
 */
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/konstanta.php';
require_once __DIR__ . '/../config/kearsipan.php';
require_once __DIR__ . '/../koneksi.php';
wajib_login('kearsipan');

$kategori = kategori_arsip($koneksi);
$k        = $kategori[$kunci];
$error    = '';
$isiForm  = null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['simpan_link'])) {
    csrf_wajib();
    $url      = trim((string) ($_POST['link'] ?? ''));
    $isiForm  = $url;
    if (!tautan_drive_valid($url)) {
        $error = 'Tautan harus diawali https://drive.google.com/ atau https://docs.google.com/';
    } else {
        try {
            kategori_simpan_tautan($koneksi, $kunci, $url);
            flash_set('sukses', 'Tautan berhasil disimpan.');
            redirect('kearsipan/' . $k['file']);
        } catch (mysqli_sql_exception $e) {
            error_log($e->getMessage());
            $error = 'Gagal menyimpan. Impor ulang database/db_sistem_internal.sql agar tabel kearsipan_tautan tersedia.';
        }
    }
}

$siap  = tautan_siap($k['link']);
$kotak = $isiForm ?? ($siap ? $k['link'] : '');

$judul = $k['judul'];
$sub   = 'Folder Google Drive - dokumen tidak disimpan di website ini';
$menu  = $kunci;
require __DIR__ . '/kearsipan_atas.php';
?>
            <div class="kat-wadah">
                <section class="kat-kartu">
                    <div class="kat-ico"><i class="fa-solid <?= e($k['ikon']) ?>"></i></div>
                    <h2><?= e($k['judul']) ?></h2>
                    <p><?= e($k['deskripsi']) ?> Buka folder, lalu unggah dokumen langsung di Google Drive.</p>
                    <span class="kat-status <?= $siap ? 'siap' : 'kosong' ?>"><i class="fa-solid <?= $siap ? 'fa-circle-check' : 'fa-circle-exclamation' ?>"></i> <?= $siap ? 'Tautan aktif' : 'Belum diisi' ?></span>
                    <div class="detail-actions">
                        <?php if ($siap): ?>
                            <a class="btn-x biru" href="<?= e($k['link']) ?>" target="_blank" rel="noopener noreferrer"><i class="fa-brands fa-google-drive"></i> Buka Google Drive</a>
                        <?php else: ?>
                            <span class="btn-x abu btn-off"><i class="fa-brands fa-google-drive"></i> Buka Google Drive</span>
                        <?php endif; ?>
                        <a class="btn-x abu" href="index.php">Kembali ke Kearsipan</a>
                    </div>
                    <?php if (!$siap): ?><p class="kat-catatan">Tautan Google Drive belum diisi. Isi pada kotak "Ubah tautan".</p><?php endif; ?>
                </section>

                <section class="kat-kartu">
                    <div class="kat-ico kuning"><i class="fa-solid fa-link"></i></div>
                    <h2>Ubah tautan</h2>
                    <p>Tempel tautan folder Google Drive untuk kategori ini. Kosongkan jika belum tersedia.</p>
                    <form method="post" action="<?= e($k['file']) ?>" class="kat-form">
                        <?= csrf_field() ?>
                        <label for="link">Tautan Google Drive</label>
                        <input class="input<?= $error !== '' ? ' salah' : '' ?>" type="url" id="link" name="link" maxlength="500" value="<?= e($kotak) ?>" placeholder="https://drive.google.com/drive/folders/...">
                        <?php if ($error !== ''): ?><p class="kat-error"><?= e($error) ?></p><?php endif; ?>
                        <button class="btn-x hijau" type="submit" name="simpan_link" value="1"><i class="fa-solid fa-floppy-disk"></i> Simpan</button>
                    </form>
                </section>
            </div>
<?php require __DIR__ . '/kearsipan_bawah.php'; ?>
