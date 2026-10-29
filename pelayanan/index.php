<?php
/** pelayanan/index.php - beranda Monthly Report: ringkasan, unggah laporan, pilih bulan */
require_once __DIR__ . '/../config/auth.php';
wajib_login('pelayanan');

$judul   = 'Monthly Report Divisi Pelayanan BPJS Ketenagakerjaan';
$halaman = 'home';
require __DIR__ . '/../includes/pelayanan_atas.php';
?>
    <header class="topbar">
      <button class="menu-btn" id="menu-btn" type="button" aria-label="Buka menu" aria-controls="sidebar" aria-expanded="false"><i class="fa-solid fa-bars"></i></button>
      <div>
        <div class="tb-title">Monthly Report Divisi Pelayanan <span class="badge">Laporan Bulanan</span></div>
        <div class="tb-sub">BPJS Ketenagakerjaan · Kanwil Sumbagsel</div>
      </div>
      <div class="spacer"></div>
      <span class="pill-status" id="tb-status"><span class="pulse"></span><span id="tb-status-text"><?= count($bulanAda) ?> dari 12 bulan tersedia</span></span>
    </header>

    <main class="page">
      <!-- Ringkasan ketersediaan (dihitung dari data laporan) -->
      <div class="cards" id="home-cards"></div>

      <!-- Unggah laporan (Excel / PDF): disimpan permanen di server, data langsung dipakai laporan & dashboard -->
      <section class="panel" id="unggah-laporan" aria-labelledby="unggah-title">
        <div class="panel-head">
          <div class="chip-ico"><i class="fa-solid fa-cloud-arrow-up"></i></div>
          <div>
            <h3 id="unggah-title">Unggah Laporan</h3>
          </div>
        </div>
        <p class="hint" style="margin:-6px 0 18px">Pilih file Excel (.xlsx, .xls) atau PDF Monthly Report. File disimpan permanen dan datanya langsung dipakai pada laporan dan dashboard.</p>
        <div class="picker-row">
          <div class="field">
            <label for="u-bulan">Bulan (khusus PDF)</label>
            <select id="u-bulan"><option value="0">Otomatis dari nama file</option></select>
          </div>
          <label class="btn" for="u-file" id="u-btn"><i class="fa-solid fa-file-arrow-up"></i> Pilih &amp; Unggah File</label>
          <input id="u-file" type="file" accept=".xlsx,.xls,.pdf" hidden>
        </div>
        <div id="u-status" class="status-box" role="status" aria-live="polite" style="display:none"></div>
        <div class="table-wrap u-wrap">
          <table class="u-tabel">
            <thead><tr><th>Nama File</th><th>Jenis</th><th>Bulan</th><th>Tanggal Unggah</th><th>Status</th><th></th></tr></thead>
            <tbody id="u-daftar"><tr><td colspan="6" class="u-kosong">Memuat…</td></tr></tbody>
          </table>
        </div>
      </section>

      <!-- Pemilih bulan -->
      <section class="panel" id="pilih-bulan" aria-labelledby="pick-title">
        <div class="panel-head">
          <div class="chip-ico"><i class="fa-regular fa-calendar-check"></i></div>
          <div>
            <h3 id="pick-title">Pilih Bulan Laporan</h3>
          </div>
        </div>
        <p class="hint" style="margin:-6px 0 18px">Pilih bulan Januari sampai Desember, lalu buka laporan yang tersedia.</p>
        <div class="picker-row">
          <div class="field">
            <label for="bulan">Bulan Laporan</label>
            <select id="bulan"></select>
          </div>
          <button class="btn" id="btn-lihat" type="button"><i class="fa-solid fa-chart-column"></i> Lihat Laporan</button>
        </div>
        <div id="status" class="status-box" role="status" aria-live="polite">Pilih bulan, lalu klik “Lihat Laporan”.</div>
      </section>

      <section>
        <h2 class="section-title"><i class="fa-regular fa-calendar"></i> Ketersediaan Data per Bulan</h2>
        <div id="month-grid" class="month-grid" style="margin-top:18px"></div>
      </section>

      <section id="tentang">
        <h2 class="section-title"><i class="fa-solid fa-circle-info"></i> Tentang Laporan</h2>
        <div class="info-grid" style="margin-top:18px">
          <div class="info-card"><div class="ic"><i class="fa-solid fa-money-bill-wave"></i></div><h3>Pembayaran Klaim</h3><p>Kasus dan nominal klaim per program dan per kantor cabang, serta manfaat beasiswa anak.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-regular fa-face-smile"></i></div><h3>E-Survey</h3><p>Skor kepuasan peserta, peringkat antar Kanwil, dan skor per kantor cabang.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-mobile-screen"></i></div><h3>Digital Service</h3><p>Capaian layanan digital JMO: klaim JHT, JP berkala, dan beasiswa.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-stopwatch"></i></div><h3>SLA Klaim</h3><p>Ketepatan penyelesaian klaim terhadap standar waktu per program.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-headset"></i></div><h3>Pengaduan</h3><p>Jumlah pengaduan dan ketepatannya terhadap SLA per kantor cabang.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-house-chimney"></i></div><h3>MLT</h3><p>Target dan realisasi Manfaat Layanan Tambahan: unit dan nominal.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-location-dot"></i></div><h3>Unit Layanan</h3><p>Jumlah titik unit layanan dan penempatannya di wilayah Sumbagsel.</p></div>
          <div class="info-card"><div class="ic"><i class="fa-solid fa-briefcase-medical"></i></div><h3>IGI e-PLKK</h3><p>Penyelesaian klaim pending JKK melalui e-PLKK sesuai SLA.</p></div>
        </div>
      </section>

      <section id="sumber">
        <h2 class="section-title"><i class="fa-solid fa-file-lines"></i> Sumber Data</h2>
        <div class="prose" style="margin-top:18px">
          Data bersumber dari dokumen PDF Monthly Report dan file Excel internal Divisi Pelayanan.
        </div>
      </section>
    </main>
<?php require __DIR__ . '/../includes/pelayanan_bawah.php'; ?>

  <script src="data.php"></script>
  <script src="<?= e(aset('js/pelayanan_main.js')) ?>"></script>
  <script src="<?= e(aset('js/pelayanan_unggah.js')) ?>"></script>
  <script>initShell(); initHome();</script>
</body>
</html>
