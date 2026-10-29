# Sistem Informasi Internal BPJS Ketenagakerjaan Kanwil Sumbagsel (PHP + MySQL)

Seluruh halaman berupa file `.php`. CSS ada di folder `assets/css/` (tanpa Tailwind/CDN CSS), JS halaman di `assets/js/`.
Kebutuhan: PHP 8.1+ (ekstensi mysqli, fileinfo, mbstring) dan MySQL/MariaDB (mis. XAMPP).

## Instalasi
1. Salin folder `sistem_internal` ke `htdocs`.
2. Start Apache + MySQL, buka phpMyAdmin, **Import** `database/db_sistem_internal.sql`.
3. Sesuaikan host/port/user MySQL di `koneksi.php` (bawaan: 127.0.0.1, port **3308**, root, tanpa password).
4. Buka `http://localhost/sistem_internal/`.
5. Pastikan `pelayanan/uploads/` dan `data/` dapat ditulis oleh Apache.

## Akun login (statis, ubah di `config/auth.php`)
| Peran       | Username          | Password         |
|-------------|-------------------|------------------|
| Pelayanan   | BPJS.PELAYANAN    | pelayananbpjs    |
| Kepesertaan | BPJS.KEPESERTAAN  | kepesertaanbpjs  |
| Kearsipan   | BPJS.KEARSIPAN    | kearsipanbpjs    |

Maks. 5 percobaan gagal per IP lalu diblokir 5 menit; sesi berakhir setelah 2 jam tanpa aktivitas.

## Struktur
```
index.php  login.php  logout.php  koneksi.php
dashboard/    pelayanan.php (publik, grafik Monthly Report)   kepesertaan.php (publik, Dashboard Perisai)
pelayanan/    index.php  laporan.php  data.php  api.php  tools/*.py  uploads/
kepesertaan/  index.php (EWS Perisai, impor Excel)  api.php
kearsipan/    index.php (surat masuk/keluar: daftar, tambah, ubah, detail, hapus, CSV)
              tata_naskah.php  rekapitulasi_arsip.php  observasi_lapangan.php  pemusnahan_arsip.php (folder Google Drive)
              kelola_tautan.php (ubah semua tautan Drive sekaligus)
config/       auth.php  helpers.php  konstanta.php  laporan.php  kearsipan.php
includes/     header_publik.php  footer_publik.php  pelayanan_atas.php  pelayanan_bawah.php
              kearsipan_atas.php  kearsipan_bawah.php  kearsipan_kategori.php
assets/css/   base  publik  panel  pelayanan  dash_kepesertaan
assets/js/    landing  publik  dash_pelayanan  dash_kepesertaan  kepesertaan  pelayanan_main/laporan/unggah
data/         laporan_data.js  (data Monthly Report; dibaca pelayanan/data.php)
database/     db_sistem_internal.sql
```

## Catatan
- Unggah Excel/PDF Monthly Report (Pelayanan) menjalankan Python (`pelayanan/tools/`, PDF butuh Poppler `pdftotext`).
  Atur lokasi Poppler di `POPPLER_BIN` pada `config/konstanta.php`. Tanpa Python, file tetap tersimpan tetapi isinya tidak terbaca.
- Grafik, peta, dan ikon memakai CDN (Chart.js, Leaflet, Font Awesome, SheetJS) sehingga perlu internet.
