-- ============================================================
-- db_sistem_internal.sql
-- Cara pakai: phpMyAdmin -> Import, atau
--   mysql -u root -P 3308 < database/db_sistem_internal.sql
-- Aman diimpor ulang (CREATE TABLE IF NOT EXISTS; data contoh hanya masuk bila tabel arsip kosong).
-- ============================================================
CREATE DATABASE IF NOT EXISTS db_sistem_internal
    CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE db_sistem_internal;

-- ---------- Kearsipan: surat masuk & surat keluar ----------
CREATE TABLE IF NOT EXISTS arsip (
    id               INT UNSIGNED NOT NULL AUTO_INCREMENT,
    jenis_surat      ENUM('masuk','keluar') NOT NULL,
    nomor_surat      VARCHAR(100) NOT NULL,
    tanggal_surat    DATE         NOT NULL,
    tanggal_diterima DATE         DEFAULT NULL,            -- hanya untuk surat masuk
    asal_tujuan      VARCHAR(150) NOT NULL,
    perihal          VARCHAR(255) NOT NULL,
    tahun            SMALLINT UNSIGNED NOT NULL,
    link_drive       VARCHAR(255) DEFAULT NULL,
    created_at       TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    KEY idx_jenis (jenis_surat),
    KEY idx_tanggal (tanggal_surat),
    KEY idx_tahun (tahun)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Kearsipan: tautan folder Google Drive per kategori ----------
CREATE TABLE IF NOT EXISTS kearsipan_tautan (
    kunci      VARCHAR(50)  NOT NULL,
    link       VARCHAR(500) NOT NULL DEFAULT '',
    diperbarui TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (kunci)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT IGNORE INTO kearsipan_tautan (kunci, link) VALUES
('tata_naskah', ''), ('rekapitulasi_arsip', ''), ('observasi_lapangan', ''), ('pemusnahan_arsip', '');

-- ---------- Kepesertaan: data hasil impor Excel (rekap TK & Perisai Aktif) ----------
-- data_key: 'rekap' dan 'perisai', payload = JSON
CREATE TABLE IF NOT EXISTS dashboard_data (
    data_key   VARCHAR(50) NOT NULL,
    payload    LONGTEXT    NOT NULL,
    updated_at DATETIME    NOT NULL,
    PRIMARY KEY (data_key)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Pelayanan: riwayat unggah Excel / PDF Monthly Report ----------
CREATE TABLE IF NOT EXISTS unggahan (
    id          INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nama_asli   VARCHAR(255) NOT NULL,
    nama_simpan VARCHAR(255) NOT NULL,
    jenis       VARCHAR(10)  NOT NULL,                     -- PDF / Excel
    bulan       VARCHAR(40)  DEFAULT NULL,
    ukuran      INT UNSIGNED NOT NULL,
    tgl_unggah  DATETIME     NOT NULL,
    status      VARCHAR(10)  NOT NULL,                     -- berhasil / gagal
    pesan       VARCHAR(500) DEFAULT NULL,
    PRIMARY KEY (id),
    KEY idx_tgl (tgl_unggah)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- ---------- Data contoh Kearsipan (hanya bila tabel masih kosong; boleh dihapus) ----------
INSERT INTO arsip (jenis_surat, nomor_surat, tanggal_surat, tanggal_diterima, asal_tujuan, perihal, tahun, link_drive)
SELECT * FROM (
    SELECT 'masuk' AS jenis_surat, '001/UND/I/2024' AS nomor_surat, '2024-01-10' AS tanggal_surat, '2024-01-12' AS tanggal_diterima, 'Dinas Pendidikan' AS asal_tujuan, 'Undangan Rapat Koordinasi' AS perihal, 2024 AS tahun, 'https://drive.google.com/dummy-link-1' AS link_drive
    UNION ALL SELECT 'masuk', '014/PMH/III/2024',  '2024-03-05', '2024-03-07', 'PT Contoh Sejahtera',  'Permohonan Kerja Sama',          2024, 'https://drive.google.com/dummy-link-2'
    UNION ALL SELECT 'masuk', '027/EDR/II/2025',   '2025-02-18', '2025-02-20', 'Kementerian Contoh',   'Surat Edaran Libur Nasional',    2025, 'https://drive.google.com/dummy-link-3'
    UNION ALL SELECT 'masuk', '045/UND/VI/2025',   '2025-06-02', '2025-06-03', 'Universitas Contoh',   'Undangan Seminar Nasional',      2025, 'https://drive.google.com/dummy-link-4'
    UNION ALL SELECT 'masuk', '003/PMH/I/2026',    '2026-01-15', '2026-01-16', 'Badan Contoh',         'Permohonan Data Pegawai',        2026, 'https://drive.google.com/dummy-link-5'
    UNION ALL SELECT 'keluar', '101/KLR/II/2024',  '2024-02-20', NULL,         'Dinas Kesehatan',      'Balasan Undangan Rapat',         2024, 'https://drive.google.com/dummy-link-6'
    UNION ALL SELECT 'keluar', '056/KLR/IX/2024',  '2024-09-11', NULL,         'PT Mitra Contoh',      'Persetujuan Kerja Sama',         2024, 'https://drive.google.com/dummy-link-7'
    UNION ALL SELECT 'keluar', '078/KLR/IV/2025',  '2025-04-22', NULL,         'Kementerian Contoh',   'Laporan Kegiatan Triwulan I',    2025, 'https://drive.google.com/dummy-link-8'
    UNION ALL SELECT 'keluar', '092/KLR/VIII/2025','2025-08-14', NULL,         'Universitas Contoh',   'Pemberitahuan Jadwal Kunjungan', 2025, 'https://drive.google.com/dummy-link-9'
    UNION ALL SELECT 'keluar', '011/KLR/II/2026',  '2026-02-09', NULL,         'Badan Contoh',         'Pengiriman Dokumen Pendukung',   2026, 'https://drive.google.com/dummy-link-10'
) AS contoh
WHERE NOT EXISTS (SELECT 1 FROM arsip);
