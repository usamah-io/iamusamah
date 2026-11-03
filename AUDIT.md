# AUDIT REPORT — UPGRADE PORTOFOLIO UNTUK BEASISWA SMA
**Website:** Muhammad Usamah Abdurrahman (https://iamusamah.vercel.app/)  
**Branch:** `feat/scholarship-upgrade`  
**Waktu Audit:** 3 November 2026  
**Baseline Status:**
- `npx tsc --noEmit`: **0 error** (Exit code 0).
- `npm run build`: **0 error** (Next.js Turbopack 16.2.11, 23 routes static/dynamic compiled successfully).
- `npm run lint`: **52 masalah baseline** (30 error, 22 warning pada ESLint 9 terkait `react-hooks/set-state-in-effect` dan unused vars pada admin, tools-carousel, typewriter, volunteer-lightbox lama). Seluruh baseline dicatat agar tidak tercampur dengan perubahan baru.

---

## 1. STRUKTUR FOLDER, ROUTE, KOMPONEN, DAN PENYIMPANAN DATA

### A. Struktur Folder & Route Halaman
- `/` (`src/app/page.tsx`): Beranda dengan Hero, Rapid Slideshow, About Section, 3D Project Fly-through, dan Experience/Volunteer Cards.
- `/about` (`src/app/about/page.tsx`): Halaman tentang Usamah (saat ini hanya mengulang ringkasan beranda + tombol CV).
- `/apps` (`src/app/apps/page.tsx`): Katalog 4 aplikasi web (SKS-Master, Quran Search, Studee, PyQuest) dengan expandable mobile grid.
- `/projects` (`src/app/projects/page.tsx`): Daftar proyek lengkap.
- `/skills` (`src/app/skills/page.tsx`): Tech stack & skills showcase.
- `/experience` (`src/app/experience/page.tsx`) & `/experience/senyum-anak-nusantara`: Riwayat pendidikan, pengalaman, dan dokumentasi komunitas.
- `/volunteer` (`src/app/volunteer/page.tsx`): Galeri aktivitas relawan (Cisarua, Hari Anak Nasional, SAN) dengan video player Google Drive.
- `/hackathon-recap` (`src/app/hackathon-recap/page.tsx`): Rekap nilai, leaderboard, dan galeri Gemini Innovation Hackathon 2026.
- `/tools` (`src/app/tools/page.tsx`): Carousel tools pemrograman dan AI.
- `/articles` & `/activity`: Halaman arsip artikel & aktivitas.
- `/connect` (`src/app/connect/page.tsx`): Kartu jejaring sosial & direct contact.
- `/contact` (`src/app/contact/page.tsx`): Formulir kontak email via Nodemailer.
- `/faq` (`src/app/faq/page.tsx`): Tanya jawab seputar keahlian dan ketersediaan proyek.
- `/admin`, `/api-docs`: Manajemen internal & dokumentasi API.

### B. Komponen Reusable Utama
- `src/components/navbar.tsx`: Header global, language switcher ID/EN, theme toggle dark/light, overlay menu.
- `src/components/footer.tsx`: Footer global dengan copyright, tautan media sosial, dan status.
- `src/components/app-context.tsx`: Context provider global untuk bahasa (`language`: "id" | "en") dan tema (`theme`: "dark" | "light").
- `src/components/PageTransition.tsx`: 5-layer curtain page transition (GSAP).
- `src/components/smooth-scroll.tsx`: Lenis smooth scrolling terintegrasi GSAP ScrollTrigger.
- `src/components/CustomCursor.tsx`: Custom cursor desktop beranimasi.
- `src/components/apps-grid.tsx` & `app-card.tsx`: Grid kartu aplikasi responsive.
- `src/components/connect-card.tsx`: Kartu profil koneksi media sosial.
- `src/components/volunteer-lightbox.tsx`: Modal lightbox video & media relawan.
- `src/components/hackathon-modal.tsx`: Modal preview sertifikat dan bukti hackathon.

### C. Lokasi Penyimpanan Data & Konten
1. `src/data/content.json`: Konten terjemahan bilingual (`id` & `en`) untuk hero, stats, about, volunteer, hackathon, faq, footer, dan tautan sosial.
2. `src/data/apps-data.ts`: Struktur data detail 4 aplikasi web (`APPS_DATA`).
3. `src/data/connect-data.ts`: Daftar tautan media sosial & kontak langsung (`CONNECT_ITEMS`).
4. `src/data/tools-data.ts`: Daftar tools & framework (`TOOLS_DATA`).
5. `src/data/showcase.ts`: Data proyek showcase.
6. Komponen lokal: Beberapa teks hard-coded ada di `src/components/volunteer.tsx` (kartu pengalaman & hackathon), `src/components/projects.tsx`, dan `src/components/TechStackSkills.tsx`.

---

## 2. SISTEM BAHASA (MULTILINGUAL / i18n)

Website **sudah memiliki sistem multilingual** yang aktif:
- Dikelola oleh `AppProvider` di `src/components/app-context.tsx`.
- State `language` bernilai `"id"` (default) atau `"en"`, tersimpan di `localStorage`.
- Tombol switch ID | EN terletak di Navbar (`src/components/navbar.tsx`).
- Data multibahasa diakses via `content[language]` (`src/data/content.json`) atau properti objek `{ id: "...", en: "..." }` pada file data TypeScript (`apps-data.ts`, `connect-data.ts`, `volunteer.tsx`).
- Seluruh teks baru untuk halaman About, Scholarship, dan pembaruan konten akan **mengikuti pola native ini secara penuh** tanpa menambah routing baru atau dependensi baru.

---

## 3. ZONA TERLARANG (DILARANG MEROMBAK / MENGHAPUS / MEREDISIGN)

Komponen dan file berikut dilindungi penuh untuk menjaga kestabilan animasi, layout, dan interaksi yang telah dibangun:

1. **Animasi Intro & Hero Header Offset**:
   - `src/components/hero.tsx` (Dual text offset headers "Usamah", responsive sizing, timing).
   - `src/components/typewriter.tsx` (Efek ketik teks).
   - `src/components/HeroImageCard.tsx` (Slideshow cepat 250ms dan rotasi ScrollTrigger).
2. **Animasi Scroll & Engine**:
   - `src/components/smooth-scroll.tsx` (Inisialisasi Lenis dan sinkronisasi `ScrollTrigger.update`).
   - `lib/gsap.ts` (Registrasi plugin GSAP ScrollTrigger).
   - `src/components/PageTransition.tsx` (Animasi transisi tirai 5 lapis).
   - `src/components/CustomCursor.tsx` (Efek kursor custom).
   - `src/components/FloatingParticles.tsx` (Efek visual partikel melayang).
3. **Sistem Tema & Bahasa**:
   - `src/components/app-context.tsx` (State manager light/dark dan ID/EN).
4. **Layout Global**:
   - `src/app/layout.tsx` (Font configuration, Google fonts, body wrapper).
   - `src/components/navbar.tsx` (Struktur navbar hanya boleh ditambahkan 1 item menu data).
   - `src/components/footer.tsx` (Struktur footer hanya disesuaikan tautannya).
5. **Konfigurasi Build**:
   - `package.json`, `package-lock.json` (Tidak upgrade dependency, tidak tambah library berat).
   - `next.config.ts`, `tsconfig.json`, `postcss.config.mjs`.

---

## 4. TEMUAN KONTEN BERTENTANGAN DENGAN FAKTA (SUMBER KEBENARAN)

Hasil penelusuran (grep) menemukan teks-teks berikut yang tidak akurat / melebih-lebihkan:

1. **Klaim "Full-Stack Developer" & "Premium Apps"**:
   - `src/data/content.json` (L37, L64, L714): *"Saya adalah seorang Full-Stack Developer & Digital Content Creator muda..."*, *"Menciptakan aplikasi web premium berkinerja tinggi..."*.
   - `src/app/layout.tsx` (L33, L34, L36, L37, L53, L54): title & metadata menggunakan *"Muhammad Usamah - Full-Stack & AI Developer"*.
   - **Solusi**: Diubah menjadi *"Siswa · Web & AI Developer (belajar mandiri) · Content Creator"*, dan deskripsi *"Saya belajar membangun aplikasi web dan memanfaatkan AI untuk membantu orang belajar."*
2. **Pendidikan Jazacademy & SMPT Bugelan**:
   - `src/data/content.json` (L64, L143, L714, L793) & `src/components/volunteer.tsx` (L239, L244, L257): Menyebut *"bersekolah di Jaz Academy"*, *"pendidikan akselerasi"*, *"SMP - Siswa Aktif"*.
   - **Solusi**: Diganti dengan fakta akurat: Jalur homeschooling di Jazacademy (komunitas belajar dengan sistem seperti asrama, bukan sekolah formal), ujian di SMPT Bugelan Tasikmalaya (periode 2024–2027). Hapus istilah "akselerasi" dan "bersekolah di Jaz Academy". Tulis nama konsisten: **Jazacademy** (satu kata).
3. **Peran & Klaim Hackathon Gemini**:
   - `src/components/volunteer.tsx` (L100, L103), `src/data/content.json` (L125, L129, L206, L775): Tertulis *"Lead Developer — memimpin tim"* dan *"Top 4 dari 186 peserta"*.
   - **Solusi**: Hapus klaim "memimpin tim" dan angka "186" (karena belum terkonfirmasi sumber resminya). Ganti peran menjadi *"Pengembang SKS-Master"* dan *"Salah satu dari lima tim finalis (peringkat keempat)"*.
   - Tambahkan **catatan transparansi** resmi mengenai pendaftaran tim dengan identitas mentor karena syarat mahasiswa, dan sertifikat partisipasi atas nama tim.
4. **Klaim Proyek Budiman Cendikia**:
   - `src/components/volunteer.tsx` (L133, L136) & `src/data/content.json`: Mengklaim *"Full-Stack Developer & System Designer"* dan *"Mengembangkan website profil dan sistem informasi sekolah Budiman Cendikia..."* seolah karya mandiri penuh.
   - **Solusi**: Diubah ke default aman: *"Pengembang (kontribusi sebagian)"*.
5. **Inkonsistensi Nama Proyek ("Stry" vs "Studee")**:
   - Di `src/components/HeroImageCard.tsx` (L8) dan `src/components/projects.tsx` (L95) tertulis *"Stry - AI Quiz Generator"*, padahal nama aplikasi sebenarnya adalah **Studee** (`studee.png` & `studee.svg`).
   - **Solusi**: Samakan secara konsisten menjadi **Studee**.
6. **Privasi & Nomor WhatsApp Pribadi**:
   - Nomor WhatsApp `https://wa.me/6281532896727` tercantum di `src/data/content.json` (L6, L588, L595, L599, L1230, L1237), `src/data/connect-data.ts` (L132), `src/components/footer.tsx` (L190), `src/components/navbar.tsx` (L264), dan `src/app/contact/page.tsx` (L189).
   - **Solusi**: Hapus seluruh nomor WhatsApp dan tautan `wa.me` dari antarmuka publik demi privasi anak di bawah umur. Arahkan interaksi ke form `/contact` dan email resmi, serta tambahkan tautan profil LinkedIn.

---

## 5. TEMUAN ASSET, FILE CV, DAN LINK

1. **Pemeriksaan Asset Gambar & Media**:
   - Total 23 asset unik di `public/assets/` dan `public/hackathon/` yang dirujuk kode telah diverifikasi, **semua file ADA dan utuh** (0 broken images).
2. **File CV**:
   - File `public/cv-muhammad-usamah.pdf` ada dengan ukuran 324.981 byte.
   - Sesuai instruksi: file diduplikasi/diperbarui menjadi `public/cv-muhammad-usamah-abdurrahman.pdf` dan seluruh referensi di repo diarahkan ke nama file ini.
3. **Pemeriksaan Internal & External Links**:
   - Seluruh rute internal (13 rute utama) valid tanpa broken internal route.
   - Domain eksternal `https://iamusamah.vercel.app` akan dipastikan sebagai basis canonical di metadata.

---

## 6. TEMUAN SEO, AKSESIBILITAS, & PERFORMA

1. **SEO & Metadata**:
   - `src/app/layout.tsx` masih mengarah ke preview fallback `https://portofolio-usamah.vercel.app` daripada domain utama `https://iamusamah.vercel.app`.
   - Title dan description masih menggunakan keyword usang "Full-Stack Developer". Perlu disesuaikan menjadi *"Muhammad Usamah — Siswa, Web & AI Developer"*.
   - Belum ada `src/app/sitemap.ts` dan `src/app/robots.ts` standar App Router.
   - Belum ada JSON-LD schema `Person` yang aman tanpa mengekspos data pribadi sensitif.
2. **Aksesibilitas (A11y)**:
   - Dukungan `prefers-reduced-motion` harus dipastikan pada animasi framer-motion dan GSAP di halaman baru.
   - Semantic heading (`h1` unik per halaman, urutan `h2`, `h3` yang logis).
   - Fokus keyboard pada tombol/link serta interaksi modal (Escape key handler).

---

## 7. RENCANA IMPLEMENTASI PER FASE & FILE YANG DISENTUH

| Fase | Fokus Pekerjaan | File yang Disentuh |
|---|---|---|
| **Fase 1** | Koreksi akurasi identitas, pendidikan, hackathon, peran proyek, penghapusan nomor WhatsApp, standardisasi Studee, dan penamaan CV baru. | `src/data/content.json`, `src/data/connect-data.ts`, `src/components/volunteer.tsx`, `src/components/hero.tsx`, `src/components/navbar.tsx`, `src/components/footer.tsx`, `src/app/contact/page.tsx`, `src/components/HeroImageCard.tsx`, `src/components/projects.tsx`, `src/app/layout.tsx`, `public/cv-muhammad-usamah-abdurrahman.pdf`. |
| **Fase 2** | Restrukturisasi & perluasan halaman `/about` (Perkenalan, Latar Belakang Pendidikan, Minat, Perjalanan Belajar, Nilai Pribadi, Tujuan ke Depan) dengan dukungan i18n ID/EN. | `src/app/about/page.tsx`, `src/data/content.json`. |
| **Fase 3** | Pembuatan halaman baru `/scholarship` (Profil Beasiswa SMA) yang rapi, objektif, berorientasi akademis, dan penambahan item menu navigasi minimal. | `src/app/scholarship/page.tsx`, `src/app/scholarship/layout.tsx`, `src/components/navbar.tsx`, `src/data/content.json`. |
| **Fase 4** | Detail proyek SKS-Master & restrukturisasi `/hackathon-recap` (Kategori Competitions, Hackathons, Catatan Transparansi, Scorecard). | `src/app/hackathon-recap/page.tsx`, `src/data/apps-data.ts`. |
| **Fase 5** | Timeline Learning Journey yang akurat sesuai tanggal nyata dan bagian Social Contribution & Nilai. | Terintegrasi di `/about` dan `/scholarship`. |
| **Fase 6** | Pembaruan `/connect` (tambah LinkedIn & IG pribadi, hapus WA) dan audit galeri sertifikat. | `src/app/connect/page.tsx`, `src/data/connect-data.ts`. |
| **Fase 7** | Harmonisasi konten Bahasa Inggris (EN) yang natural di About & Scholarship. | `src/data/content.json`, `src/app/scholarship/page.tsx`. |
| **Fase 8** | SEO (canonical `metadataBase`, `sitemap.ts`, `robots.ts`, JSON-LD Person), a11y, dan build verification. | `src/app/sitemap.ts`, `src/app/robots.ts`, `src/app/layout.tsx`. |
