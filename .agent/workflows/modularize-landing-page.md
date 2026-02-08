---
description: Workflow untuk memecah LandingPage.vue menjadi komponen-komponen kecil yang modular.
---

1.  **Identifikasi Section**: Baca `src/components/LandingPage.vue` dan identifikasi bagian-bagian utama (Navbar, Hero, Features, Service, Pricing, Footer).
2.  **Buat Direktori Komponen**: Pastikan folder `src/components/` siap.
3.  **Ekstraksi Section**:
    - Salin kode untuk satu section ke file baru, misal `src/components/HeroSection.vue`.
    - Pastikan semua asset (images/icons) dan tailwind classes terbawa.
    - Tambahkan `<script setup>` yang diperlukan.
4.  **Register & Gunakan**:
    - Import komponen baru di `LandingPage.vue` atau `App.vue`.
    - Ganti kode HTML asli dengan komponen tersebut.
5.  **Verifikasi**: Jalankan `npm run dev` dan pastikan tampilan tidak berubah.
6.  **Ulangi**: Lakukan untuk bagian lainnya sampai `LandingPage.vue` menjadi bersih dan hanya mengatur layout tingkat tinggi.
