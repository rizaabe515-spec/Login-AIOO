# AIOO Finance & Padel Beans — Luxury Dark Mode Authentication & Portal

Implementasi antarmuka login responsif berskala produksi berdasarkan desain visual luxury dark mode, mengintegrasikan tipografi presisi, efek orbit partikel interaktif, sistem validasi formulir lengkap, penggantian bahasa dinamis (ID/EN), serta transisi mulus ke preview dashboard AIOO Finance & Accounting.

### User Review & Critical Decisions

> [!IMPORTANT]
> Konfirmasi keputusan dari fase klarifikasi sebelumnya:
> - **Aksi Pasca Login**: Menampilkan feedback validasi & notifikasi sukses, lalu transisi animasi halus (*morphing/fade view*) menuju preview dashboard AIOO (Finance, Accounting, Tax) dengan opsi kembali/logout.
> - **Animasi Visual Logo**: Dilengkapi dengan lintasan orbit melingkar yang berotasi lembut, aksen glow luxury, serta partikel cahaya mengambang (*floating celestial dust*) yang responsif terhadap interaksi kursor.
> - **Dukungan Bahasa Dinamis**: Pemilih bahasa di pojok kanan atas (ID/EN) dapat mengubah seluruh teks UI (label form, pesan kesalahan, placeholder, tooltip, dan konten dashboard) secara instan dan reaktif.

---

### 1. Overview & Core Concept

- **What It Does**: Aplikasi web modern berbasis React, Tailwind CSS, dan Motion yang mengonversi rancangan grafis login portal AIOO x Padel Beans menjadi antarmuka interaktif kelas premium. Sistem mencakup validasi input live, tombol reveal password, switch bahasa, dialog reset kata sandi, dan simulasi sesi dashboard terpadu.
- **Target Audience / Persona**: Para eksekutif, akuntan, manajer keuangan, dan staf operasional klub olahraga/kafe Padel Beans yang mengelola pembukuan, arus kas, dan perpajakan melalui platform cloud AIOO.
- **Key Value**: Menggabungkan estetika luxury dark mode bernuansa midnight navy yang elegan dengan responsivitas tinggi di berbagai ukuran layar (mobile, tablet, desktop ultra-wide), serta kenyamanan visual saat bekerja di malam hari.

---

### 2. User Experience & Visual Design

#### A. Key User Flows
1. **Pendaratan Awal (Zero-State)**: Pengguna disambut oleh card elevated mewah berlatar gradien radial midnight navy. Di sisi kiri, logo artistik Padel Beans tersemat di dalam orbit konsentris dengan partikel bercahaya yang berputar lambat.
2. **Interaksi Formulir & Validasi**:
   - Pengguna memasukkan email/username dengan indikator visual fokus (ring glow cyan-blue halus).
   - Pengguna memasukkan password dengan kemampuan toggle visibilitas kata sandi (ikon mata).
   - Opsi centang "Ingat saya di perangkat ini" (*Remember me*).
   - Tombol "Lupa Kata Sandi?" yang membuka modal pemulihan akun interaktif.
3. **Eksekusi Login & Transisi**:
   - Menekan "MASUK SEKARANG" memicu animasi loading spinner mikro dan transisi sukses.
   - Layar melakukan transisi morphing/fade ke tampilan preview **AIOO Finance, Accounting & Tax Dashboard** dengan metrik ringkasan kas, grafik ringkas, dan transaksi terkini.
   - Terdapat tombol kembali/logout untuk kembali ke form login kapan saja.
4. **Penggantian Bahasa (ID ↔ EN)**: Selector di kanan atas mengubah seluruh teks antarmuka dan format tanggal ("Senin, 24 Februari 2025" vs "Monday, 24 February 2025") secara *real-time*.

#### B. Visual Identity & Theme
- **Aesthetic Direction**: *Luxury Midnight Deep Blue* — terinspirasi dari arsitektur ruang lounge premium klub padel dan sistem enterprise modern.
- **Color Palette**:
  - *Dominant Canvas (60%)*: Deep Navy `#051329` hingga Midnight Blue `#0a1e3f`.
  - *Structural Card & Surfaces (30%)*: Card glassmorphism subtle navy `#0d2752` dengan hairline border `rgba(56, 189, 248, 0.15)` dan bayangan lembut.
  - *Accent & Actions (10%)*: Tombol primer White-to-Ice `#FFFFFF` dengan bayangan *luminescent glow* `rgba(255, 255, 255, 0.45)`, teks kontras gelap, dan aksen cyan `#38bdf8` untuk indikator aktif.
- **Typography**:
  - Headings & Brand: Display sans-serif tebal dan proporsional (`Plus Jakarta Sans`), tracking tegas untuk teks vertikal `"SERVE • SIP • REPEAT"`.
  - Body & Labels: Sans-serif bersih dengan ukuran terbaca jelas (`12px-14px`), teks label uppercase bertracking renggang (`tracking-wider`).
  - Data Numerik Dashboard: `tabular-nums` untuk akurasi data keuangan.
- **Komponen Khas**:
  - Teks vertikal samping "SERVE • SIP • REPEAT".
  - Ikon sosial media (Instagram, Facebook, Pinterest) dengan efek hover magnetik/glow.
  - Pemilih tanggal dinamis dengan kalender interaktif.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: SVG Native Logo vs Static Raster Image**
  - *Chosen Approach*: Membuat representasi SVG vektor berkualitas tinggi untuk logo Padel Beans (lengkap dengan raket padel dan biji kopi terintegrasi) yang dipadukan dengan orbit animasi SVG dan partikel canvas/CSS, dengan tetap menyediakan gambar asli sebagai opsi fallback.
  - *Why*: SVG vektor tetap tajam tanpa artefak kompresi di layar retina/4K, dan memungkinkan kontrol animasi CSS/Motion individual per elemen orbit.
- **Decision 2: Lightweight Client-Side State Management**
  - *Chosen Approach*: React useState + useMemo untuk mengelola lokalisasi bahasa (ID/EN), autentikasi simulasi, status form, dan visibilitas modal.
  - *Why*: Sangat cepat, tanpa latensi server, langsung reaktif di browser, dan memudahkan pengujian langsung seluruh skenario interaksi.
- **Decision 3: Seamless Viewport Responsiveness**
  - *Chosen Approach*: Pada layar besar (desktop $\ge 1024\text{px}$), layout split 2 kolom (kiri: visual padel beans, kanan: form login). Pada tablet & mobile ($< 1024\text{px}$), layout beradaptasi vertikal yang rapi tanpa horizontal scrollbar atau teks terpotong.

---

### 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                          AIOO Portal Container                         │
│  ┌─────────────────────────┐             ┌──────────────────────────┐  │
│  │   Top Status Bar        │             │   Language Context       │  │
│  │   Date Display (Locale) │             │   [ ID / EN Switcher ]   │  │
│  └─────────────────────────┘             └──────────────────────────┘  │
│                                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │  Main View State (Login View ⇄ Dashboard Preview View)           │  │
│  │                                                                  │  │
│  │  [ LOGIN VIEW ]                                                  │  │
│  │  ┌─────────────────────────────┬──────────────────────────────┐  │  │
│  │  │ Left Visual Experience      │ Right Authentication Panel   │  │  │
│  │  │ - Vertical Slogan           │ - Brand Header: AIOO         │  │  │
│  │  │ - Interactive Orbit Rings   │ - Email/Username Field       │  │  │
│  │  │ - Vector "padel beans" Logo │ - Password Field (Eye Toggle)│  │  │
│  │  │ - Floating Particle Canvas  │ - Remember Me Checkbox       │  │  │
│  │  │ - Social Icons Navigation   │ - "Masuk Sekarang" CTA       │  │  │
│  │  └─────────────────────────────┴──────────────────────────────┘  │  │
│  │                                                                  │  │
│  │  [ DASHBOARD PREVIEW VIEW (On Success) ]                         │  │
│  │  ┌────────────────────────────────────────────────────────────┐  │  │
│  │  │ - Financial Summary KPI Cards (Revenue, Expenses, Taxes)   │  │  │
│  │  │ - Recent Invoices & Padel Beans Club Bookings              │  │  │
│  │  │ - Logout / Kembali Action Button                           │  │  │
│  │  └────────────────────────────────────────────────────────────┘  │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────────────────────────┘
```

#### Komponen Utama yang Akan Dibangun:
1. `src/types/index.ts`: Tipe data untuk lokalisasi teks, state login, dan data dashboard.
2. `src/data/translations.ts`: Kamus lokalisasi lengkap untuk Bahasa Indonesia (ID) dan Inggris (EN).
3. `src/components/ParticleBackground.tsx`: Komponen partikel ambient bintang/cahaya mengambang halus.
4. `src/components/PadelBeansLogo.tsx`: Komponen visual logo presisi tinggi dengan cincin orbit kosmik dan efek rotasi halus.
5. `src/components/LoginForm.tsx`: Formulir login dengan validasi interaktif, toggle password, forgot password modal, dan tombol submit bercahaya.
6. `src/components/DashboardPreview.tsx`: Tampilan dashboard AIOO Finance & Accounting pasca login dengan animasi transisi.
7. `src/App.tsx`: Penyusun utama, orkestrasi layout responsif, state switching bahasa, dan manajemen transisi.
