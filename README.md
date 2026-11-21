# Kinerja Terminal Petikemas Banjarmasin

Dashboard kinerja kunjungan kapal 2026.

- `index.html`: dashboard
- `perbarui.html`: halaman untuk menyiapkan data baru dari file Excel kinerja
- `data.json`: data dashboard
- `kapal.html`: detail kinerja per kapal (linimasa, crane, penyebab berhenti, rekomendasi)
- `kapal.json`: data detail per kapal

## Memperbarui data

1. Buka `perbarui.html` di alamat website, pilih file Excel kinerja, lalu unduh `data.json`.
2. Di repositori ini klik **Add file** > **Upload files**, seret `data.json`, lalu klik **Commit changes**.
3. Tunggu beberapa menit sampai website berubah.

## Memperbarui data detail per kapal

1. Buka `kapal.html#perbarui` (atau klik **Perbarui data** di halaman detail kapal).
2. Pilih file laporan kapal (.xlsm), Terminal In & Out (.xlsx), atau Receiving Delivery PTOS (.xlsx), lalu klik **Terapkan**.
3. Klik **Unduh kapal.json**, lalu unggah ke repositori lewat **Add file** > **Upload files** > **Commit changes**.

## Memasang sebagai aplikasi

Website ini bisa dipasang seperti aplikasi (PWA): punya ikon di layar utama, terbuka tanpa bilah browser, dan tetap bisa dibuka offline dengan data terakhir.

- **Android (Chrome):** buka website, ketuk menu ⋮ > **Instal aplikasi** / **Tambahkan ke layar utama**.
- **iPhone/iPad (Safari):** buka website, ketuk tombol Bagikan > **Tambah ke Layar Utama**.
- **Laptop (Chrome/Edge):** klik ikon instal di ujung kanan kolom alamat.

File aplikasi: `manifest.webmanifest`, `sw.js`, dan folder `icons/`.
