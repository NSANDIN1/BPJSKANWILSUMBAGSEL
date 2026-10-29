<?php
/** index.php - beranda: hero + peta 24 titik, pilihan peran kerja, dan formulir login */
require_once __DIR__ . '/config/auth.php';

// Hasil percobaan login sebelumnya (diisi oleh login.php)
$errLogin = (string) ($_SESSION['login_error'] ?? '');
$perSesi  = (string) ($_SESSION['login_peran'] ?? '');
unset($_SESSION['login_error'], $_SESSION['login_peran']);

// Formulir login terbuka bila ada ?login=peran (dialihkan dari halaman terproteksi) atau ada error
$bukaPeran = (string) ($_GET['login'] ?? $perSesi);
if (!isset(AKUN[$bukaPeran])) {
    $bukaPeran = $errLogin !== '' ? 'pelayanan' : '';
}
$modalBuka = ($bukaPeran !== '');

$judul     = 'Sistem Operasional BPJS Kanwil SUMBAGSEL';
$extraHead = '<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css">';
require __DIR__ . '/includes/header_publik.php';
?>

<main class="site-main">

    <!-- HERO -->
    <div id="hero" class="hero hero-bg">
        <div class="grid-dots"></div>
        <div class="blob b1"></div>
        <div class="blob b2"></div>

        <div class="hero-left">
            <div class="hero-badge"><i></i><span>Sistem Pemantauan Operasional Sumbagsel</span></div>

            <h1><span class="grad-text">Memantau dengan presisi,</span> Mengoptimalkan performa operasional dan memberdayakan layanan terbaik di seluruh wilayah Sumbagsel</h1>

            <div class="hero-cta">
                <a href="#peran-kerja" class="btn-hero">Pilih Peran Kerja</a>
                <div class="hero-stats">
                    <div>
                        <div class="num"><span class="count" data-to="24">24</span> Titik</div>
                        <div class="lbl">Wilayah Presisi</div>
                    </div>
                    <div>
                        <div class="num y"><span class="count" data-to="5">5</span> Provinsi</div>
                        <div class="lbl">Cakupan Wilayah</div>
                    </div>
                </div>
            </div>

            <div class="hero-chips">
                <span class="glass">Presisi Data</span>
                <span class="glass">Pemantauan Berkala</span>
                <span class="glass">Kearsipan Terpadu</span>
            </div>
        </div>

        <!-- Peta 24 titik wilayah Sumbagsel -->
        <div class="hero-right">
            <div class="map-box glass"><div id="map"></div></div>
        </div>
    </div>

    <!-- PERAN KERJA -->
    <section id="peran-kerja" class="peran">
        <div class="peran-head">
            <h2>Pilih peran kerja untuk mengoptimalkan layanan dan operasional !</h2>
            <p>Klik pada peran Anda untuk masuk ke antarmuka kerja masing-masing bidang.</p>
        </div>

        <div class="peran-grid">
            <a class="peran-card reveal" href="index.php?login=pelayanan" data-login="pelayanan">
                <div class="peran-top biru">
                    <div class="peran-tag">Pelayanan</div>
                    <div class="peran-ico"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
                    <div class="peran-go"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                </div>
                <div class="peran-body">
                    <h3>Layanan Garansi &amp; Proteksi Utama Peserta</h3>
                    <p>Memberikan pelayanan prima terkait klaim jaminan, informasi program, serta menangani konsultasi dan pengaduan peserta secara terpadu.</p>
                </div>
            </a>

            <a class="peran-card reveal" href="index.php?login=kepesertaan" data-login="kepesertaan">
                <div class="peran-top hijau">
                    <div class="peran-tag">Kepesertaan</div>
                    <div class="peran-ico"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                    <div class="peran-go"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                </div>
                <div class="peran-body">
                    <h3>Pengelolaan &amp; Perluasan Cakupan Peserta</h3>
                    <p>Mengelola registrasi tenaga kerja baru, pemutakhiran data badan usaha, serta pemantauan cakupan kepesertaan di seluruh wilayah Sumbagsel.</p>
                </div>
            </a>

            <a class="peran-card reveal" href="index.php?login=kearsipan" data-login="kearsipan">
                <div class="peran-top lime">
                    <div class="peran-tag">Kearsipan</div>
                    <div class="peran-ico"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v1a2 2 0 01-2 2M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div>
                    <div class="peran-go"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></div>
                </div>
                <div class="peran-body">
                    <h3>Pengelolaan Dokumen &amp; Digitalisasi Berkas</h3>
                    <p>Penyimpanan, penataan, dan penjaminan keamanan dokumen administrasi serta penetapan arsip operasional secara efisien.</p>
                </div>
            </a>
        </div>
    </section>

    <!-- FORMULIR LOGIN -->
    <section id="form-login-section" class="modal<?= $modalBuka ? ' open' : '' ?>" aria-hidden="<?= $modalBuka ? 'false' : 'true' ?>">
        <div id="login-box" class="modal-box<?= $errLogin !== '' ? ' shake' : '' ?>" role="dialog" aria-modal="true" aria-labelledby="login-judul">
            <div class="modal-head">
                <div>
                    <h3 id="login-judul">Masuk ke Akun Anda</h3>
                    <p>Silakan masukkan kredensial kerja Anda</p>
                </div>
                <button type="button" class="modal-close" id="login-tutup" aria-label="Tutup">&times;</button>
            </div>

            <form id="login-form" class="form-login" method="post" action="<?= e(base_url()) ?>/login.php" autocomplete="off">
                <?= csrf_field() ?>
                <div>
                    <label class="lbl" for="role-select">Pilih Peran Kerja</label>
                    <select id="role-select" name="peran">
                        <?php foreach (AKUN as $kunci => $a): ?>
                            <option value="<?= e($kunci) ?>" <?= $bukaPeran === $kunci ? 'selected' : '' ?>><?= e(strtoupper($a['label'])) ?></option>
                        <?php endforeach; ?>
                    </select>
                </div>
                <div>
                    <label class="lbl" for="login-username">Username</label>
                    <input id="login-username" name="username" type="text" required placeholder="Masukkan username" autocomplete="off">
                </div>
                <div>
                    <label class="lbl" for="login-password">Password</label>
                    <input id="login-password" name="password" type="password" required placeholder="••••••••" autocomplete="off">
                </div>

                <div id="login-error" role="alert" aria-live="assertive" class="login-error<?= $errLogin !== '' ? ' tampil' : '' ?>">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"></path></svg>
                    <span id="login-error-text"><?= e($errLogin) ?></span>
                </div>

                <div class="login-opsi">
                    <span></span>
                    <a href="#" id="lupa-password">Lupa password?</a>
                </div>
                <button type="submit" class="btn-submit">Log In Ke Form Dashboard</button>
            </form>
        </div>
    </section>

</main>

<?php
$extraFoot = '<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>' . "\n"
           . '<script src="' . e(aset('js/landing.js')) . '"></script>';
require __DIR__ . '/includes/footer_publik.php';
