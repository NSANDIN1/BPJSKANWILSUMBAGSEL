<?php
/** kearsipan/kelola_tautan.php - ubah semua tautan folder Google Drive sekaligus */
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/konstanta.php';
require_once __DIR__ . '/../config/kearsipan.php';
require_once __DIR__ . '/../koneksi.php';
wajib_login('kearsipan');

$error   = '';
$errors  = [];
$nilai   = [];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    csrf_wajib();
    $kirim = is_array($_POST['link'] ?? null) ? $_POST['link'] : [];
    foreach (KATEGORI_ARSIP as $kunci => $_) {
        $url = trim((string) ($kirim[$kunci] ?? ''));
        $nilai[$kunci] = $url;
        if (!tautan_drive_valid($url)) {
            $errors[$kunci] = 'Tautan harus diawali https://drive.google.com/ atau https://docs.google.com/';
        }
    }
    if (!$errors) {
        try {
            foreach ($nilai as $kunci => $url) {
                kategori_simpan_tautan($koneksi, $kunci, $url);
            }
            flash_set('sukses', 'Tautan berhasil disimpan.');
            redirect('kearsipan/kelola_tautan.php');
        } catch (mysqli_sql_exception $e) {
            error_log($e->getMessage());
            $error = 'Gagal menyimpan. Impor ulang database/db_sistem_internal.sql agar tabel kearsipan_tautan tersedia.';
        }
    }
}

$kategori = kategori_arsip($koneksi);
$judul    = 'Kelola Tautan';
$sub      = 'Atur tautan folder Google Drive untuk setiap kategori kearsipan';
$menu     = 'tautan';
require __DIR__ . '/../includes/kearsipan_atas.php';
?>
            <?php if ($error !== ''): ?><div class="alert-box red"><?= e($error) ?></div><?php endif; ?>

            <section class="box form-box">
                <div>
                    <h2>Tautan folder Google Drive</h2>
                    <p class="lead">Isi tautan setiap kategori lalu klik <strong>Simpan</strong>. Tautan baru langsung dipakai. Kosongkan kotak jika belum tersedia, dan pastikan izin berbagi folder di Google Drive sudah diatur.</p>
                </div>
                <form method="post" action="kelola_tautan.php" class="tautan-list">
                    <?= csrf_field() ?>
                    <?php foreach ($kategori as $kunci => $kat):
                        $siap = tautan_siap($kat['link']);
                        $isi  = $nilai[$kunci] ?? ($siap ? $kat['link'] : '');
                    ?>
                        <div class="tautan-item">
                            <div class="tautan-kepala">
                                <label for="link_<?= e($kunci) ?>"><i class="fa-solid <?= e($kat['ikon']) ?>"></i> <?= e($kat['judul']) ?></label>
                                <span class="kat-status <?= $siap ? 'siap' : 'kosong' ?>"><?= $siap ? 'Tautan aktif' : 'Belum diisi' ?></span>
                            </div>
                            <input class="input<?= isset($errors[$kunci]) ? ' salah' : '' ?>" type="url" id="link_<?= e($kunci) ?>" name="link[<?= e($kunci) ?>]" maxlength="500" value="<?= e($isi) ?>" placeholder="https://drive.google.com/drive/folders/...">
                            <?php if (isset($errors[$kunci])): ?><p class="kat-error"><?= e($errors[$kunci]) ?></p><?php endif; ?>
                            <?php if ($siap): ?><a class="tautan-uji" href="<?= e($kat['link']) ?>" target="_blank" rel="noopener noreferrer"><i class="fa-solid fa-arrow-up-right-from-square"></i> Uji tautan di tab baru</a><?php endif; ?>
                        </div>
                    <?php endforeach; ?>
                    <div class="form-actions">
                        <a class="btn-x abu" href="index.php">Batal</a>
                        <button class="btn-x biru" type="submit"><i class="fa-solid fa-floppy-disk"></i> Simpan</button>
                    </div>
                </form>
            </section>
<?php require __DIR__ . '/../includes/kearsipan_bawah.php'; ?>
