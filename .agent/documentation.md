# AI Development Guide - Jagalapak

Dokumen ini disusun untuk membantu AI Agent dalam memahami konteks, standar koding, dan arsitektur proyek Jagalapak.

## 🎯 Konteks Proyek
Jagalapak adalah bisnis jasa manajemen digital remote. Landing page ini harus mencerminkan profesionalisme, kepercayaan, dan efisiensi.

## 🛠️ Standar Teknologi
1.  **Frontend**: Vue.js 3
    - Gunakan `<script setup>` syntax.
    - Hindari penggunaan Options API.
    - Gunakan `ref` dan `reactive` untuk state management lokal.
2.  **Styling**: Tailwind CSS
    - Gunakan utility classes secara langsung.
    - Jika ada pola yang berulang (misalnya button), buat komponen Vue daripada menggunakan `@apply`.
3.  **Animasi**:
    - Gunakan transisi CSS standar atau library ringan jika diperlukan.
    - Pastikan interaksi terasa halus (smooth transitions).

## 🏗️ Arsitektur Komponen
- **Halaman Tunggal**: Saat ini proyek adalah Single Page Application (SPA) sederhana.
- **Komponen**: Simpan komponen yang dapat digunakan kembali di `src/components/`.
- **Aset**: Gambar dan aset statis lainnya sebaiknya diletakkan di `public/` atau `src/assets/`.

## 🎨 Design System (Referensi)
- **Primary Color**: Slate-900 (Background), Emerald/Indigo (Accents).
- **Typography**: Poppins (Utama).
- **Style**: Dark mode friendly dengan aksen modern dan glassmorphism.

## 🚀 Workflow Pengembangan

### Menambah Komponen Baru
1. Buat file `.vue` baru di `src/components/`.
2. Gunakan template dasar:
```vue
<script setup>
// Imports
</script>

<template>
  <section class="...">
    <!-- Content -->
  </section>
</template>

<style scoped>
/* Specific styles if tailwind is not enough */
</style>
```

### Memperbarui Konten
- Konten landing page utama berada di `src/components/LandingPage.vue`.
- Perubahan strategi bisnis harus selaras dengan `blueprint-jagalapak.md`.

## 📦 Build & Deployment
- Proyek menggunakan Vite. Build output akan berada di folder `dist/`.
- Konfigurasi Nginx (jika ada) harus mendukung routing SPA.

## 📝 Roadmap Technical (Next Steps)
1. **Modularisasi**: Memecah `LandingPage.vue` yang besar menjadi komponen-komponen kecil (Hero, Services, Pricing, Testimonials).
2. **Form Integration**: Menghubungkan form kontak ke WhatsApp API atau backend.
3. **Multi-language**: Implementasi i18n jika ekspansi ke pasar luar diperlukan (prioritas rendah, saat ini fokus Pasar Lokal/Makassar).
