<?php
/** kearsipan/index.php - manajemen arsip surat masuk & keluar (daftar, tambah, ubah, detail, hapus, ekspor CSV) */
require_once __DIR__ . '/../config/auth.php';
require_once __DIR__ . '/../config/konstanta.php';
require_once __DIR__ . '/../config/kearsipan.php';
require_once __DIR__ . '/../koneksi.php';
wajib_login('kearsipan');

$b           = base_url();
$aksi        = (string) ($_GET['aksi'] ?? 'daftar');
$id          = (int) ($_GET['id'] ?? 0);
$jenisFilter = (string) ($_GET['jenis'] ?? 'semua');
if (!in_array($aksi, ['daftar', 'tambah', 'edit', 'detail'], true)) { $aksi = 'daftar'; }
if (!isset(JENIS_SURAT[$jenisFilter])) { $jenisFilter = 'semua'; }
$error = '';

/** Tanggal Y-m-d yang valid? */
function tgl_valid(string $t): bool
{
    $d = DateTime::createFromFormat('Y-m-d', $t);
    return $d !== false && $d->format('Y-m-d') === $t;
}

// ---------- Hapus (POST)
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['hapus'])) {
    csrf_wajib();
    db_exec($koneksi, 'DELETE FROM arsip WHERE id = ?', [(int) $_POST['hapus']]);
    flash_set('sukses', 'Arsip berhasil dihapus.');
    redirect('kearsipan/index.php?jenis=' . urlencode($jenisFilter));
}

// ---------- Simpan baru / perubahan (POST)
$form = ['id' => '', 'jenis_surat' => 'masuk', 'nomor_surat' => '', 'tanggal_surat' => date('Y-m-d'),
         'tanggal_diterima' => '', 'asal_tujuan' => '', 'perihal' => '', 'tahun' => date('Y'), 'link_drive' => ''];

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['simpan_arsip'])) {
    csrf_wajib();
    foreach ($form as $k => $_) {
        $form[$k] = trim((string) ($_POST[$k] ?? ''));
    }
    $formId = (int) $form['id'];
    $tahun  = (int) $form['tahun'];

    if (!isset(JENIS_SURAT[$form['jenis_surat']]) || $form['nomor_surat'] === '' || $form['asal_tujuan'] === '' || $form['perihal'] === ''
        || !tgl_valid($form['tanggal_surat']) || $tahun < 2000 || $tahun > 2100) {
        $error = 'Mohon isi semua kolom wajib dengan benar.';
    } elseif ($form['jenis_surat'] === 'masuk' && $form['tanggal_diterima'] !== '' && !tgl_valid($form['tanggal_diterima'])) {
        $error = 'Format tanggal diterima tidak valid.';
    } elseif ($form['link_drive'] !== '' && !preg_match('#^https?://#i', $form['link_drive'])) {
        $error = 'Link Google Drive harus diawali http:// atau https://';
    } elseif (mb_strlen($form['nomor_surat']) > 100 || mb_strlen($form['asal_tujuan']) > 150 || mb_strlen($form['perihal']) > 255 || mb_strlen($form['link_drive']) > 255) {
        $error = 'Salah satu isian terlalu panjang.';
    }

    if ($error !== '') {
        $aksi = $formId > 0 ? 'edit' : 'tambah';
        $id   = $formId;
    } else {
        $diterima = ($form['jenis_surat'] === 'keluar' || $form['tanggal_diterima'] === '') ? null : $form['tanggal_diterima'];
        $drive    = $form['link_drive'] === '' ? null : $form['link_drive'];
        $nilai    = [$form['jenis_surat'], $form['nomor_surat'], $form['tanggal_surat'], $diterima, $form['asal_tujuan'], $form['perihal'], $tahun, $drive];
        if ($formId > 0) {
            db_exec($koneksi, 'UPDATE arsip SET jenis_surat=?, nomor_surat=?, tanggal_surat=?, tanggal_diterima=?, asal_tujuan=?, perihal=?, tahun=?, link_drive=? WHERE id=?', array_merge($nilai, [$formId]));
            flash_set('sukses', 'Arsip berhasil diperbarui.');
            redirect('kearsipan/index.php?aksi=detail&id=' . $formId);
        }
        db_exec($koneksi, 'INSERT INTO arsip (jenis_surat, nomor_surat, tanggal_surat, tanggal_diterima, asal_tujuan, perihal, tahun, link_drive) VALUES (?,?,?,?,?,?,?,?)', $nilai);
        flash_set('sukses', 'Arsip berhasil ditambahkan.');
        redirect('kearsipan/index.php?aksi=detail&id=' . (int) $koneksi->insert_id);
    }
}

// ---------- Ambil satu arsip (detail / edit)
$row = null;
if (in_array($aksi, ['detail', 'edit'], true)) {
    $row = db_row($koneksi, 'SELECT * FROM arsip WHERE id = ?', [$id]);
    if (!$row) {
        $aksi  = 'daftar';
        $error = 'Data arsip tidak ditemukan.';
    } elseif ($_SERVER['REQUEST_METHOD'] !== 'POST') {
        $form = array_map(fn($v) => (string) ($v ?? ''), $row);
    }
}

// ---------- Daftar + filter
$cari        = trim((string) ($_GET['cari'] ?? ''));
$tahunFilter = (int) ($_GET['tahun'] ?? 0);
$hal         = max(1, (int) ($_GET['hal'] ?? 1));
$perHal      = 25;

$where = ['1=1'];
$par   = [];
if ($jenisFilter !== 'semua') { $where[] = 'jenis_surat = ?'; $par[] = $jenisFilter; }
if ($cari !== '') {
    $where[] = '(nomor_surat LIKE ? OR perihal LIKE ? OR asal_tujuan LIKE ?)';
    $like = '%' . $cari . '%';
    array_push($par, $like, $like, $like);
}
if ($tahunFilter > 0) { $where[] = 'tahun = ?'; $par[] = $tahunFilter; }
$whereSql = implode(' AND ', $where);

// ---------- Ekspor CSV (semua hasil filter)
if (isset($_GET['export'])) {
    $semua = db_all($koneksi, "SELECT * FROM arsip WHERE $whereSql ORDER BY tanggal_surat DESC, id DESC", $par);
    header('Content-Type: text/csv; charset=utf-8');
    header('Content-Disposition: attachment; filename="arsip_' . date('Ymd') . '.csv"');
    $out = fopen('php://output', 'w');
    fwrite($out, "\xEF\xBB\xBF");
    fputcsv($out, ['Jenis Surat', 'Nomor Surat', 'Tanggal Surat', 'Tanggal Diterima', 'Asal/Tujuan', 'Perihal', 'Tahun', 'Link Drive']);
    foreach ($semua as $r) {
        // awali sel berawalan = + - @ dengan tanda kutip agar tidak dibaca sebagai rumus Excel
        $baris = [$r['jenis_surat'], $r['nomor_surat'], $r['tanggal_surat'], $r['tanggal_diterima'], $r['asal_tujuan'], $r['perihal'], $r['tahun'], $r['link_drive']];
        $baris = array_map(fn($v) => (is_string($v) && $v !== '' && strpbrk($v[0], '=+-@') !== false) ? "'" . $v : $v, $baris);
        fputcsv($out, $baris);
    }
    fclose($out);
    exit;
}

$total       = (int) db_value($koneksi, "SELECT COUNT(*) FROM arsip WHERE $whereSql", $par);
$totalHal    = max(1, (int) ceil($total / $perHal));
$hal         = min($hal, $totalHal);
$offset      = ($hal - 1) * $perHal;
$data        = db_all($koneksi, "SELECT * FROM arsip WHERE $whereSql ORDER BY tanggal_surat DESC, id DESC LIMIT $perHal OFFSET $offset", $par);
$totalMasuk  = (int) db_value($koneksi, "SELECT COUNT(*) FROM arsip WHERE jenis_surat='masuk'");
$totalKeluar = (int) db_value($koneksi, "SELECT COUNT(*) FROM arsip WHERE jenis_surat='keluar'");
$daftarTahun = array_column(db_all($koneksi, 'SELECT DISTINCT tahun FROM arsip ORDER BY tahun DESC'), 'tahun');
$queryPaging = http_build_query(array_filter(['cari' => $cari, 'jenis' => $jenisFilter !== 'semua' ? $jenisFilter : '', 'tahun' => $tahunFilter ?: '']));

$judul = ['daftar' => 'Manajemen Arsip', 'tambah' => 'Tambah Arsip', 'detail' => 'Detail Arsip', 'edit' => 'Edit Arsip'][$aksi];
$sub   = 'Kelola surat masuk, surat keluar, dan folder Google Drive kearsipan';
$menu  = $aksi === 'tambah' ? 'tambah' : ($aksi === 'daftar' && $jenisFilter !== 'semua' ? $jenisFilter : 'semua');
$kategori = kategori_arsip($koneksi);
require __DIR__ . '/../includes/kearsipan_atas.php';
?>
            <?php if ($error !== ''): ?><div class="alert-box red"><?= e($error) ?></div><?php endif; ?>

<?php if ($aksi === 'tambah' || $aksi === 'edit'): ?>
            <section class="box form-box">
                <div>
                    <h2><?= $aksi === 'edit' ? 'Ubah data arsip' : 'Formulir arsip baru' ?></h2>
                    <p class="lead">Kolom bertanda * wajib diisi.</p>
                </div>
                <form method="post" class="form-grid" action="index.php?aksi=<?= e($aksi) ?><?= $aksi === 'edit' ? '&id=' . (int) $id : '' ?>">
                    <?= csrf_field() ?>
                    <input type="hidden" name="id" value="<?= e($form['id']) ?>">
                    <div>
                        <label for="f-jenis">Jenis Surat *</label>
                        <select class="input" id="f-jenis" name="jenis_surat" required>
                            <?php foreach (JENIS_SURAT as $k => $nama): ?>
                                <option value="<?= e($k) ?>" <?= $form['jenis_surat'] === $k ? 'selected' : '' ?>><?= e($nama) ?></option>
                            <?php endforeach; ?>
                        </select>
                    </div>
                    <div>
                        <label for="f-nomor">Nomor Surat *</label>
                        <input class="input" id="f-nomor" name="nomor_surat" required maxlength="100" value="<?= e($form['nomor_surat']) ?>">
                    </div>
                    <div>
                        <label for="f-tgl">Tanggal Surat *</label>
                        <input class="input" id="f-tgl" name="tanggal_surat" required type="date" value="<?= e($form['tanggal_surat']) ?>">
                    </div>
                    <div>
                        <label for="f-terima">Tanggal Diterima (surat masuk)</label>
                        <input class="input" id="f-terima" name="tanggal_diterima" type="date" value="<?= e($form['tanggal_diterima']) ?>">
                    </div>
                    <div>
                        <label for="f-asal">Asal / Tujuan *</label>
                        <input class="input" id="f-asal" name="asal_tujuan" required maxlength="150" value="<?= e($form['asal_tujuan']) ?>">
                    </div>
                    <div>
                        <label for="f-perihal">Perihal *</label>
                        <input class="input" id="f-perihal" name="perihal" required maxlength="255" value="<?= e($form['perihal']) ?>">
                    </div>
                    <div>
                        <label for="f-tahun">Tahun *</label>
                        <input class="input" id="f-tahun" name="tahun" required type="number" min="2000" max="2100" value="<?= e($form['tahun']) ?>">
                    </div>
                    <div>
                        <label for="f-drive">Link Google Drive</label>
                        <input class="input" id="f-drive" name="link_drive" type="url" maxlength="255" placeholder="https://drive.google.com/..." value="<?= e($form['link_drive']) ?>">
                    </div>
                    <div class="full form-actions">
                        <a class="btn-x abu" href="index.php">Batal</a>
                        <button class="btn-x biru" type="submit" name="simpan_arsip" value="1"><i class="fa-solid fa-floppy-disk"></i> <?= $aksi === 'edit' ? 'Simpan Perubahan' : 'Simpan Arsip' ?></button>
                    </div>
                </form>
            </section>

<?php elseif ($aksi === 'detail' && $row): ?>
            <section class="box form-box">
                <div class="detail-head">
                    <div>
                        <h2>Informasi Arsip</h2>
                        <p>Detail lengkap surat yang dipilih.</p>
                    </div>
                    <span class="pill <?= e($row['jenis_surat']) ?>"><?= e(JENIS_SURAT[$row['jenis_surat']] ?? $row['jenis_surat']) ?></span>
                </div>
                <dl class="dl-grid">
                    <?php foreach (['Nomor Surat' => 'nomor_surat', 'Tanggal Surat' => 'tanggal_surat', 'Tanggal Diterima' => 'tanggal_diterima', 'Asal / Tujuan' => 'asal_tujuan', 'Perihal' => 'perihal', 'Tahun' => 'tahun'] as $label => $key): ?>
                        <div><dt><?= e($label) ?></dt><dd><?= e($row[$key] ?: '-') ?></dd></div>
                    <?php endforeach; ?>
                </dl>
                <div class="detail-actions">
                    <?php if (!empty($row['link_drive']) && preg_match('#^https?://#i', $row['link_drive'])): ?>
                        <a class="btn-x mint" href="<?= e($row['link_drive']) ?>" rel="noopener noreferrer" target="_blank"><i class="fa-solid fa-arrow-up-right-from-square"></i> Lihat Berkas</a>
                    <?php endif; ?>
                    <a class="btn-x kuning" href="index.php?aksi=edit&amp;id=<?= (int) $row['id'] ?>">Edit Arsip</a>
                    <a class="btn-x abu" href="index.php?jenis=<?= e($row['jenis_surat']) ?>">Kembali ke Daftar</a>
                </div>
            </section>

<?php else: ?>
            <section class="drive-grid" aria-label="Folder Google Drive">
                <?php foreach ($kategori as $kat): $siap = tautan_siap($kat['link']); ?>
                    <a class="drive-kartu" href="<?= e($kat['file']) ?>">
                        <span class="kat-ico"><i class="fa-solid <?= e($kat['ikon']) ?>"></i></span>
                        <span class="drive-teks"><b><?= e($kat['judul']) ?></b><small class="<?= $siap ? 'siap' : 'kosong' ?>"><?= $siap ? 'Tautan aktif' : 'Belum diisi' ?></small></span>
                        <i class="fa-solid fa-arrow-right drive-go"></i>
                    </a>
                <?php endforeach; ?>
            </section>

            <section class="grid-3b">
                <div class="stat-sm"><p>Surat Masuk</p><p class="big" style="color:var(--green)"><?= angka($totalMasuk) ?></p></div>
                <div class="stat-sm"><p>Surat Keluar</p><p class="big" style="color:#4f46e5"><?= angka($totalKeluar) ?></p></div>
                <div class="stat-sm"><p>Hasil Ditampilkan</p><p class="big" style="color:var(--blue)"><?= angka($total) ?></p></div>
            </section>

            <section class="box" id="table-section">
                <div class="list-head">
                    <div>
                        <h2>Daftar Arsip</h2>
                        <p><?= angka($total) ?> data ditemukan.</p>
                    </div>
                    <div class="row-gap">
                        <a class="btn-x hijau kecil" href="index.php?aksi=tambah"><i class="fa-solid fa-plus"></i> Tambah Arsip</a>
                        <a class="btn-x gelap kecil" href="index.php?<?= e(http_build_query(array_merge($_GET, ['export' => 1]))) ?>"><i class="fa-solid fa-file-csv"></i> Export CSV</a>
                    </div>
                </div>

                <form method="get" action="index.php#table-section" class="filter-form">
                    <input class="input" name="cari" placeholder="Cari nomor surat, perihal, asal/tujuan..." value="<?= e($cari) ?>">
                    <select class="input" name="jenis">
                        <option value="semua">Semua jenis</option>
                        <?php foreach (JENIS_SURAT as $k => $nama): ?>
                            <option value="<?= e($k) ?>" <?= $jenisFilter === $k ? 'selected' : '' ?>><?= e($nama) ?></option>
                        <?php endforeach; ?>
                    </select>
                    <select class="input" name="tahun">
                        <option value="0">Semua tahun</option>
                        <?php foreach ($daftarTahun as $t): ?>
                            <option value="<?= (int) $t ?>" <?= $tahunFilter === (int) $t ? 'selected' : '' ?>><?= (int) $t ?></option>
                        <?php endforeach; ?>
                    </select>
                    <div class="btns">
                        <button class="btn-x biru" type="submit">Cari</button>
                        <a class="btn-x abu" href="index.php">Reset</a>
                    </div>
                </form>

                <div class="table-wrap">
                    <table class="tbl">
                        <thead><tr><th>Jenis</th><th>Nomor Surat</th><th>Tanggal</th><th>Asal / Tujuan</th><th>Perihal</th><th>Tahun</th><th>Aksi</th></tr></thead>
                        <tbody>
                        <?php if (!$data): ?>
                            <tr><td colspan="7" class="kosong">Tidak ada arsip yang cocok.</td></tr>
                        <?php endif; ?>
                        <?php foreach ($data as $r): ?>
                            <tr>
                                <td><span class="pill <?= e($r['jenis_surat']) ?>"><?= $r['jenis_surat'] === 'masuk' ? 'Masuk' : 'Keluar' ?></span></td>
                                <td class="t-nomor"><?= e($r['nomor_surat']) ?></td>
                                <td class="nowrap" style="font-size:12px"><?= e($r['tanggal_surat']) ?></td>
                                <td class="t-name"><?= e($r['asal_tujuan']) ?></td>
                                <td><?= e($r['perihal']) ?></td>
                                <td><?= e($r['tahun']) ?></td>
                                <td>
                                    <div class="row-gap">
                                        <a class="btn-x sky kecil" href="index.php?aksi=detail&amp;id=<?= (int) $r['id'] ?>">Detail</a>
                                        <a class="btn-x kuning kecil" href="index.php?aksi=edit&amp;id=<?= (int) $r['id'] ?>">Edit</a>
                                        <form method="post" class="inline-form" action="index.php?jenis=<?= e($jenisFilter) ?>" onsubmit="return confirm('Yakin ingin menghapus arsip ini?')">
                                            <?= csrf_field() ?>
                                            <button class="btn-x merah kecil" type="submit" name="hapus" value="<?= (int) $r['id'] ?>">Hapus</button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
                <?= tampil_paging($hal, $totalHal, $queryPaging) ?>
            </section>
<?php endif; ?>
<?php require __DIR__ . '/../includes/kearsipan_bawah.php'; ?>
