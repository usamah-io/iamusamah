"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Award,
  Code2,
  HeartHandshake,
  Target,
  ExternalLink,
  BookOpen,
  CheckCircle2,
  FileText,
  User,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useApp } from "@/components/app-context";

export default function ScholarshipProfilePage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-24 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          <div className="flex items-center gap-3">
            <a
              href="/cv-muhammad-usamah-abdurrahman.pdf"
              download="CV-Muhammad-Usamah-Abdurrahman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download CV (PDF)</span>
            </a>

            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>{isIndonesian ? "Profil Beasiswa SMA" : "Scholarship Profile"}</span>
            </div>
          </div>
        </div>

        {/* 1. PERSONAL OVERVIEW */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-10 shadow-[6px_6px_0px_var(--fg)] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-6 border-b-2 border-foreground/20">
            <div className="flex items-center gap-5">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl border-3 border-foreground overflow-hidden shadow-[4px_4px_0px_var(--fg)] bg-zinc-950 shrink-0">
                <Image
                  src="/profile-v2.jpg"
                  alt="Muhammad Usamah Abdurrahman"
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-black uppercase bg-emerald-500 text-black border border-black shadow-[2px_2px_0px_#000000]">
                  <User className="w-3 h-3" />
                  <span>{isIndonesian ? "Kandidat Siswa" : "Student Candidate"}</span>
                </span>
                <h1 className="text-2xl sm:text-4xl font-black uppercase text-foreground tracking-tight mt-2 leading-tight">
                  Muhammad Usamah Abdurrahman
                </h1>
                <p className="font-mono text-xs sm:text-sm font-bold text-foreground/75 mt-1">
                  {isIndonesian
                    ? "Siswa SMP · Pengembang Web & AI (Belajar Mandiri) · Content Creator"
                    : "Secondary Student · Web & AI Developer (Self-Taught) · Content Creator"}
                </p>
              </div>
            </div>

            <div className="font-mono text-xs space-y-1.5 self-start sm:self-auto bg-foreground/5 p-4 rounded-xl border border-foreground/25">
              <div className="flex items-center justify-between gap-4">
                <span className="text-foreground/60">{isIndonesian ? "Asal:" : "Origin:"}</span>
                <span className="font-bold text-foreground">Medan, Sumatera Utara</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-foreground/60">{isIndonesian ? "Domisili Belajar:" : "Study Location:"}</span>
                <span className="font-bold text-foreground">Tasikmalaya, Jawa Barat</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-foreground/60">{isIndonesian ? "Jenjang:" : "Current Grade:"}</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">SMP (Tingkat Akhir)</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)]">
              {isIndonesian ? "Ringkasan Profil Diri" : "Executive Summary"}
            </h2>
            <p className="text-xs sm:text-base text-foreground/85 font-medium leading-relaxed">
              {isIndonesian
                ? "Saya adalah siswa SMP asal Medan yang saat ini tinggal dan belajar di Tasikmalaya melalui jalur homeschooling di Jazacademy serta terdaftar mengikuti evaluasi ujian akademik di SMPT Bugelan Tasikmalaya. Memiliki ketertarikan mendalam pada rekayasa web, kecerdasan buatan, dan teknologi edukasi, saya mempelajari pemrograman secara mandiri dan mengembangkannya dalam proyek nyata seperti SKS-Master—platform latihan soal adaptif berbantuan Gemini AI yang terpilih sebagai salah satu dari lima tim finalis Gemini Innovation Hackathon 2026."
                : "I am a junior high school student from Medan currently studying in Tasikmalaya through the homeschooling pathway at Jazacademy and registered for academic examinations at SMPT Bugelan Tasikmalaya. Driven by curiosity in web engineering, artificial intelligence, and edtech, I study programming through self-directed practice and apply it in real-world initiatives like SKS-Master—an AI-powered adaptive study platform recognized as one of five finalist teams at Gemini Innovation Hackathon 2026."}
            </p>
          </div>
        </section>

        {/* 2. EDUCATIONAL BACKGROUND */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                01 // {isIndonesian ? "Riwayat Pendidikan" : "Academic Background"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Pendidikan & Komunitas Belajar" : "Education & Learning Community"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Jazacademy */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] flex flex-col justify-between space-y-3">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-[var(--accent1)] block">
                  {isIndonesian ? "Komunitas Belajar (Homeschooling)" : "Learning Community"}
                </span>
                <h3 className="font-black text-lg uppercase text-foreground mt-1">
                  Jazacademy
                </h3>
                <p className="font-mono text-xs text-foreground/60">
                  Tasikmalaya, Jawa Barat • 2024 – 2027
                </p>
                <p className="text-xs text-foreground/80 font-medium leading-relaxed mt-2.5">
                  {isIndonesian
                    ? "Komunitas belajar mandiri dengan sistem seperti asrama, berfokus pada pendalaman pemrograman web modern (Next.js, TypeScript), eksplorasi AI, pembentukan karakter, dan pembuatan konten edukasi."
                    : "A boarding-style self-directed learning community focusing on modern web development (Next.js, TypeScript), practical AI exploration, character building, and digital educational content."}
                </p>
              </div>
              <div className="pt-2 border-t border-foreground/15">
                <span className="font-mono text-[10px] font-bold text-foreground/60 uppercase">
                  {isIndonesian ? "Jalur Non-Formal / Asrama" : "Boarding Homeschooling"}
                </span>
              </div>
            </div>

            {/* SMPT Bugelan */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] flex flex-col justify-between space-y-3">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-emerald-500 block">
                  {isIndonesian ? "Lembaga Ujian Akademik" : "Examination Institution"}
                </span>
                <h3 className="font-black text-lg uppercase text-foreground mt-1">
                  SMPT Bugelan
                </h3>
                <p className="font-mono text-xs text-foreground/60">
                  Tasikmalaya, Jawa Barat • 2024 – 2027
                </p>
                <p className="text-xs text-foreground/80 font-medium leading-relaxed mt-2.5">
                  {isIndonesian
                    ? "Institusi tempat pelaksanaan evaluasi kurikulum dan ujian akademik jenjang sekolah menengah pertama (SMP) yang diikuti secara berkala."
                    : "The institution where regular secondary school academic curriculum evaluations and national curriculum examinations are conducted."}
                </p>
              </div>
              <div className="pt-2 border-t border-foreground/15">
                <span className="font-mono text-[10px] font-bold text-foreground/60 uppercase">
                  {isIndonesian ? "Pusat Ujian Resmi" : "Official Examination Center"}
                </span>
              </div>
            </div>

            {/* SDIT Swasta Mardhiyah */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] flex flex-col justify-between space-y-3">
              <div>
                <span className="font-mono text-[10px] font-black uppercase text-blue-500 block">
                  {isIndonesian ? "Pendidikan Dasar (SD)" : "Primary Education"}
                </span>
                <h3 className="font-black text-lg uppercase text-foreground mt-1">
                  SDIT Swasta Mardhiyah
                </h3>
                <p className="font-mono text-xs text-foreground/60">
                  Binjai, Sumatera Utara • 2018 – 2024
                </p>
                <p className="text-xs text-foreground/80 font-medium leading-relaxed mt-2.5">
                  {isIndonesian
                    ? "Menyelesaikan pendidikan dasar dengan kurikulum terpadu yang memadukan penguatan sains, matematika, serta penanaman adab dan integritas moral."
                    : "Completed primary education with an integrated curriculum combining math, basic science, and moral character foundations."}
                </p>
              </div>
              <div className="pt-2 border-t border-foreground/15">
                <span className="font-mono text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                  {isIndonesian ? "Lulus Resmi (Alumni)" : "Graduated (Alumnus)"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. TECHNICAL & PRACTICAL SKILLS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Code2 className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                02 // {isIndonesian ? "Keahlian & Penguasaan Alat" : "Skills & Competencies"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Keterampilan Teknis & Soft Skills" : "Technical & Soft Skills"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Tech Stack */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider text-emerald-500 pb-2 border-b border-foreground/15">
                {isIndonesian ? "Teknologi Pemrograman (Belajar Mandiri)" : "Programming Technologies (Self-Taught)"}
              </h3>
              <ul className="space-y-2.5 font-sans text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Next.js & React</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Membangun struktur antarmuka web modern, routing modular, dan komponen interaktif."
                        : "Constructing modern component architectures, client-side interactions, and modular routing."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">TypeScript & JavaScript</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Penulisan kode aman tipe data (static typing), fungsi logika, dan manipulasi data JSON."
                        : "Type-safe programming, core logic implementation, and API data processing."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Tailwind CSS & Responsive Layout</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Perancangan tata letak responsif untuk desktop dan mobile dengan fokus keterbacaan."
                        : "Developing mobile-responsive layouts and accessible UI styling."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Integrasi AI (Google Gemini API)</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Menghubungkan prompt adaptif untuk pembuatan soal dan pembahasan interaktif."
                        : "Connecting prompt structures for instant quiz generation and structured response evaluation."}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Tools & Soft Skills */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] pb-2 border-b border-foreground/15">
                {isIndonesian ? "Tools Praktis & Soft Skills (Tingkat Dasar/Jujur)" : "Practical Tools & Soft Skills"}
              </h3>
              <ul className="space-y-2.5 font-sans text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Tools Desain & Multimedia (Dasar)</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Figma (wireframing dasar), Canva & CapCut (desain poster dan editing video edukasi)."
                        : "Figma (basic wireframing), Canva & CapCut (educational video editing and visual assets)."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Aplikasi Perkantoran & Dokumentasi</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Microsoft Word, Microsoft Excel, dan Google Workspace untuk pencatatan dan laporan."
                        : "Microsoft Word, Excel, and Google Docs for reports and organized documentation."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Kemandirian Belajar (Self-Directed Learning)</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Mampu meneliti dokumentasi resmi, memecahkan error, dan belajar modul baru secara mandiri."
                        : "Self-driven ability to read technical docs, debug problems, and pick up new tools."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">Komunikasi & Konten Edukatif</span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Menerjemahkan ide pemrograman yang rumit menjadi penjelasan visual yang sederhana."
                        : "Breaking down complex programming ideas into simple, beginner-friendly explanations."}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 4. PROJECTS & INNOVATION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Sparkles className="w-5 h-5 text-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                03 // {isIndonesian ? "Rekam Jejak Proyek" : "Projects & Innovations"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Proyek & Eksperimen Digital" : "Digital Projects & Experiments"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* SKS-Master */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-emerald-500">
                    {isIndonesian ? "Proyek Utama // Finalis Hackathon" : "Featured Project // Finalist"}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[var(--accent1)] text-black border border-black">
                    Gemini AI
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  SKS-Master (Platform Ujian AI)
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-2">
                  {isIndonesian
                    ? "Platform latihan soal adaptif berbantuan Google Gemini AI. Menghasilkan kuis adaptif secara instan, menyajikan analisis pembahasan tiap opsi jawaban, dan menyimpan progres secara mandiri via LocalStorage tanpa ketergantungan database eksternal."
                    : "Adaptive exam preparation platform powered by Google Gemini AI. Generates customized quizzes instantly, delivers detailed answer reviews, and stores learner progress locally via LocalStorage."}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {["Next.js", "TypeScript", "Gemini API", "Tailwind CSS", "LocalStorage"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md border border-foreground/20 bg-foreground/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <a
                  href="https://sksmaster.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-emerald-500 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Buka Aplikasi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/usamah-io/Hekaton-Gemini2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-foreground/75 hover:underline"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </div>

            {/* Quran Search */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-blue-500">
                    {isIndonesian ? "Islamic Technology" : "Islamic Technology"}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-foreground/30 bg-foreground/5">
                    Audio & API
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  Quran Search
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-2">
                  {isIndonesian
                    ? "Aplikasi Al-Qur'an modern dengan pencarian ayat dan topik tematik dalam satu layar, mushaf 114 surat lengkap dengan terjemahan bahasa Indonesia, streaming murottal 5 qari ternama, serta latar belakang Asbabun Nuzul."
                    : "Modern Quran application with instant verse search, complete 114 surahs reading view with Indonesian translations, streaming murottal audio from 5 reciters, and contextual revelation background."}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {["SvelteKit", "Tailwind CSS", "Audio Streaming", "Quran API"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md border border-foreground/20 bg-foreground/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <a
                  href="https://quransearch-puce.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-emerald-500 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Buka Aplikasi</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="font-mono text-xs text-foreground/60">
                  {isIndonesian ? "Terverifikasi Aktif" : "Production Active"}
                </span>
              </div>
            </div>

            {/* Studee */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-amber-500">
                    {isIndonesian ? "E-Learning (Dalam Pengembangan)" : "E-Learning (In Dev)"}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-400 text-black border border-black">
                    Work In Progress
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  Studee
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-2">
                  {isIndonesian
                    ? "Platform e-learning yang sedang dieksplorasi untuk menguji antarmuka latihan kuis interaktif, pelacakan konsistensi belajar (streak), dan modularitas materi belajar."
                    : "Experimental e-learning platform testing interactive quiz interfaces, streak learning trackers, and modular curriculum workflows."}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {["Next.js", "TypeScript", "Prisma ORM", "Tailwind CSS"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md border border-foreground/20 bg-foreground/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <a
                  href="https://studee-ten.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-amber-500 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Lihat Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/usamah-io/Studee-x-Python"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-foreground/75 hover:underline"
                >
                  GitHub Repo ↗
                </a>
              </div>
            </div>

            {/* Budiman Cendikia */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-foreground/70">
                    {isIndonesian ? "Proyek Kolaborasi Sekolah" : "School Collaboration"}
                  </span>
                  <span className="font-mono text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-foreground/30 bg-foreground/5">
                    {isIndonesian ? "Kontribusi Sebagian" : "Partial Contribution"}
                  </span>
                </div>

                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  Budiman Cendikia
                </h3>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-2">
                  {isIndonesian
                    ? "Berkontribusi dalam pengembangan website profil dan sistem informasi sekolah Budiman Cendikia menggunakan Next.js dan TypeScript untuk kebutuhan publikasi informasi akademik siswa."
                    : "Contributed to developing the official school profile website and portal architecture for Budiman Cendikia using Next.js and TypeScript."}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5 font-mono text-[10px]">
                  {["Next.js", "TypeScript", "Web Architecture"].map((t) => (
                    <span key={t} className="px-2 py-0.5 rounded-md border border-foreground/20 bg-foreground/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <a
                  href="https://www.budimancendikia.sch.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-emerald-500 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>Kunjungi Situs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <span className="font-mono text-xs text-foreground/60">
                  {isIndonesian ? "Profil Sekolah" : "School Portal"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LEARNING JOURNEY TIMELINE (FAKTA TERVERIFIKASI) */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                04 // {isIndonesian ? "Kronologi Pembelajaran" : "Milestones"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Garis Waktu Perjalanan Belajar (Learning Journey)" : "Learning Journey Timeline"}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-6">
            <div className="relative border-l-3 border-foreground/30 pl-6 sm:pl-8 ml-2 sm:ml-4 space-y-8">
              
              {/* Item 1: 2018 - 2024 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-foreground border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-foreground/10 text-foreground border border-foreground/20">
                  2018 – 2024
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Pendidikan Dasar di SDIT Swasta Mardhiyah" : "Primary Education at SDIT Swasta Mardhiyah"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">Binjai, Sumatera Utara</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Menyelesaikan pendidikan dasar dengan penguatan karakter, matematika, dan dasar sains sebelum melanjutkan studi mandiri."
                    : "Completed primary education with strong moral foundations, basic mathematics, and science before pursuing self-directed study."}
                </p>
              </div>

              {/* Item 2: 2024 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                  2024 – 2027
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Homeschooling di Jazacademy & Ujian di SMPT Bugelan" : "Homeschooling at Jazacademy & Exams at SMPT Bugelan"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">Tasikmalaya, Jawa Barat</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Merantau dari Medan ke Tasikmalaya untuk belajar di Jazacademy (komunitas belajar sistem asrama) dan terdaftar ujian resmi di SMPT Bugelan. Mulai mendalami Next.js, TypeScript, dan membuat konten edukasi pemrograman di @uus.code."
                    : "Moved from Medan to Tasikmalaya to pursue self-directed learning at Jazacademy (boarding-style community) with official examinations at SMPT Bugelan. Began self-taught coding in Next.js, TypeScript, and sharing tutorials on @uus.code."}
                </p>
              </div>

              {/* Item 3: 2024 - 2025 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-rose-500 border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-rose-500/20 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                  2024 – 2025
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Relawan Sosial SAN & Tanggap Bencana Cisarua" : "Social Volunteer at SAN & Cisarua Disaster Relief"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">Tasikmalaya &amp; Bandung Barat</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Mengabdi sebagai pengurus Kominfo/PDD di Senyum Anak Nusantara (SAN) Tasikmalaya dan terjun langsung sebagai relawan posko sembako serta dapur umum pemulihan longsor Cisarua, Bandung Barat."
                    : "Contributed as media/documentation staff at Senyum Anak Nusantara (SAN) Tasikmalaya and served directly in relief logistics and soup kitchens for the Cisarua landslide in West Bandung."}
                </p>
              </div>

              {/* Item 4: 28 Juli 2026 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-[var(--accent1)] border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-[var(--accent1)] text-black border border-black shadow-[1px_1px_0px_#000000]">
                  28 Juli 2026
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Finalis Top 4 Gemini Innovation Hackathon 2026" : "Top 4 Finalist at Gemini Innovation Hackathon 2026"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">Tasikmalaya (Hybrid)</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Mengembangkan platform SKS-Master berbantuan Gemini AI; terpilih sebagai salah satu dari lima tim finalis dengan nilai resmi 86,4 (peringkat 4)."
                    : "Engineered the SKS-Master AI study platform; announced among five finalist teams with an official score of 86.4 (4th place)."}
                </p>
              </div>

              {/* Item 5: 30 Agustus 2026 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-amber-500 border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                  30 Agustus 2026
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Operator Teknis Hari Anak Nasional 2026" : "Technical Operator at National Children's Day 2026"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">Tasikmalaya</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Bertugas mengoperasikan multimedia, audio sound system, dan live streaming serta mendokumentasikan rangkaian acara Hari Anak Nasional."
                    : "Operated multimedia, live audio mixing, and broadcast streaming for National Children's Day in Tasikmalaya."}
                </p>
              </div>

              {/* Item 6: 27 September 2026 */}
              <div className="relative">
                <span className="absolute -left-[31px] sm:-left-[39px] top-1 w-3.5 h-3.5 rounded-full bg-blue-500 border-2 border-background" />
                <span className="font-mono text-[10px] sm:text-xs font-black px-2.5 py-0.5 rounded-md bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30">
                  27 September 2026
                </span>
                <h3 className="font-black text-base sm:text-lg uppercase text-foreground mt-2">
                  {isIndonesian ? "Peserta Indonesia Creative Competition 2026 (Batch 2)" : "Participant at Indonesia Creative Competition 2026"}
                </h3>
                <p className="font-mono text-xs text-foreground/60">TMII, Jakarta</p>
                <p className="text-xs sm:text-sm text-foreground/80 font-medium leading-relaxed mt-1.5">
                  {isIndonesian
                    ? "Berkompetisi pada kategori Creative Code Teens di Museum Listrik dan Energi Baru TMII Jakarta untuk menguji kemampuan pemecahan masalah komputasi."
                    : "Competed in the Creative Code Teens category at TMII Jakarta, testing computational problem-solving and software creativity."}
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* 5. ACHIEVEMENTS & TRANSPARENCY */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Award className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                04 // {isIndonesian ? "Prestasi & Catatan Integritas" : "Achievements & Integrity"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Pencapaian & Kompetisi" : "Achievements & Competitions"}
              </h2>
            </div>
          </div>

          <div className="space-y-6">
            {/* Gemini Innovation Hackathon 2026 */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b-2 border-foreground/15">
                <div>
                  <span className="font-mono text-xs font-black uppercase text-[var(--accent1)] block">
                    {isIndonesian ? "Pencapaian Kompetisi Nasional" : "National Competition Achievement"}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground mt-1">
                    Gemini Innovation Hackathon 2026
                  </h3>
                  <p className="font-mono text-xs text-foreground/70">
                    Google Student Ambassador & Universitas Siliwangi • 28 Juli 2026
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3.5 py-1.5 rounded-full bg-[var(--accent1)] text-black border-2 border-foreground font-mono text-xs font-black uppercase shadow-[2px_2px_0px_var(--fg)]">
                    {isIndonesian ? "Top 4 Finalis (Skor 86,4)" : "Top 4 Finalist (Score 86.4)"}
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                {isIndonesian
                  ? "SKS-Master diumumkan sebagai salah satu dari lima tim finalis dan berhasil meraih peringkat keempat dengan skor resmi juri 86,4 pada sesi presentasi dan demonstrasi teknis."
                  : "SKS-Master was announced as one of five finalist teams and achieved 4th place with an official judges score of 86.4 during technical pitching and live platform demonstration."}
              </p>

              {/* CATATAN TRANSPARANSI RESMI */}
              <div className="p-4 rounded-xl bg-foreground/5 border-2 border-foreground/30 text-xs font-medium leading-relaxed space-y-1">
                <span className="font-mono font-black uppercase text-[var(--accent1)] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  {isIndonesian ? "Catatan Transparansi & Integritas:" : "Official Transparency Note:"}
                </span>
                <p className="text-foreground/85">
                  {isIndonesian
                    ? "Tim SKS-Master didaftarkan dengan identitas mentor karena ketentuan kompetisi mensyaratkan peserta berstatus mahasiswa. Saya adalah pengembang SKS-Master yang merancang dan membangun platform ini. Sertifikat yang tersedia adalah sertifikat partisipasi atas nama tim SKS-Master."
                    : "The SKS-Master team was registered using the mentor's identity due to the competition requirement for university student status. I am the developer who designed and built the SKS-Master platform. The official certificate available is a participation certificate issued in the name of the SKS-Master team."}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/hackathon-recap"
                  className="font-mono text-xs font-black uppercase text-emerald-500 hover:underline inline-flex items-center gap-1.5"
                >
                  <span>{isIndonesian ? "Lihat Bukti & Lembar Nilai Resmi" : "View Scorecard & Proof"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Indonesia Creative Competition 2026 */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b-2 border-foreground/15">
                <div>
                  <span className="font-mono text-xs font-black uppercase text-blue-500 block">
                    {isIndonesian ? "Partisipasi Kompetisi Remaja" : "Youth Coding Competition"}
                  </span>
                  <h3 className="text-lg sm:text-xl font-black uppercase text-foreground mt-1">
                    Indonesia Creative Competition 2026 (Batch 2)
                  </h3>
                  <p className="font-mono text-xs text-foreground/70">
                    Museum Listrik dan Energi Baru, TMII, Jakarta • 27 September 2026
                  </p>
                </div>
                <span className="font-mono text-xs font-bold px-3 py-1 rounded-full border border-foreground/30 bg-foreground/5">
                  {isIndonesian ? "Peserta (Creative Code Teens)" : "Participant (Creative Code Teens)"}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                {isIndonesian
                  ? "Berpartisipasi dalam kompetisi tingkat nasional kategori Creative Code Teens untuk mengasah kemampuan pemrograman, kreativitas solusi digital, dan interaksi dengan komunitas teknologi muda se-Indonesia."
                  : "Participated in the national level Creative Code Teens category, honing software problem solving, digital innovation, and peer exchange with fellow youth coders."}
              </p>
            </div>
          </div>
        </section>

        {/* 6. LEADERSHIP & SOCIAL CONTRIBUTION */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <HeartHandshake className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                05 // {isIndonesian ? "Kontribusi Sosial & Organisasi" : "Social Contribution & Leadership"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Kegiatan Kerelawanan & Komunitas" : "Volunteer & Community Leadership"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SAN Tasikmalaya */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <span className="font-mono text-[10px] font-black uppercase text-emerald-500 block">
                {isIndonesian ? "Organisasi Kepemudaan" : "Youth Organization"}
              </span>
              <h3 className="font-black text-lg uppercase text-foreground tracking-tight">
                Senyum Anak Nusantara (SAN)
              </h3>
              <p className="font-mono text-xs text-foreground/60">
                Tasikmalaya • 2024 – 2025
              </p>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Pengurus divisi Kominfo/PDD: bertanggung jawab atas produksi konten visual, editing video edukasi, desain poster acara, dan dokumentasi aksi sosial anak di Tasikmalaya."
                  : "Member of Information & Media division: responsible for visual content production, educational video editing, and documentation for child-focused community programs."}
              </p>
            </div>

            {/* Hari Anak Nasional */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <span className="font-mono text-[10px] font-black uppercase text-amber-500 block">
                {isIndonesian ? "Volunteer Acara Publik" : "Public Event Volunteer"}
              </span>
              <h3 className="font-black text-lg uppercase text-foreground tracking-tight">
                Hari Anak Nasional 2026
              </h3>
              <p className="font-mono text-xs text-foreground/60">
                Tasikmalaya • 30 Agustus 2026
              </p>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Bertugas sebagai relawan divisi dokumentasi serta operator peralatan teknis multimedia, tata suara (sound mixing), dan siaran langsung (live streaming) selama rangkaian acara."
                  : "Served as documentation volunteer and technical operator for multimedia, audio sound system mixing, and official live streaming throughout the event."}
              </p>
            </div>

            {/* Cisarua Relawan */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <span className="font-mono text-[10px] font-black uppercase text-[var(--accent1)] block">
                {isIndonesian ? "Relawan Kemanusiaan" : "Disaster Relief"}
              </span>
              <h3 className="font-black text-lg uppercase text-foreground tracking-tight">
                Pemulihan Longsor Cisarua
              </h3>
              <p className="font-mono text-xs text-foreground/60">
                Cisarua, Bandung Barat • 2024 – 2025
              </p>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Terjun langsung dalam koordinasi posko tanggap darurat, pendataan dan distribusi bantuan sembako ke rumah warga terdampak, serta operasional dapur umum posko."
                  : "Engaged in on-the-ground disaster response coordination, door-to-door food aid logistics distribution, and volunteer relief soup kitchen operations."}
              </p>
            </div>
          </div>
        </section>

        {/* 7. FUTURE ASPIRATIONS & SCHOLARSHIP GOALS */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                06 // {isIndonesian ? "Visi & Komitmen" : "Vision & Commitment"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Aspirasi & Komitmen Beasiswa SMA" : "High School Scholarship Aspirations"}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-5">
            <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
              {isIndonesian
                ? "Menghadapi jenjang sekolah menengah atas (SMA), saya memiliki tekad kuat untuk mengembangkan potensi diri di sekolah dengan kurikulum sains dan teknologi yang mendalam. Beasiswa ini bukan sekadar bantuan pembiayaan, melainkan sebuah amanah dan kesempatan berharga untuk berinteraksi dengan mentor berpengalaman, berkompetisi secara sehat di bidang riset/informatika, serta mempersiapkan diri menjadi insinyur perangkat lunak yang berintegritas dan mampu memberi manfaat seluas-luasnya bagi masyarakat."
                : "Looking ahead toward high school, I am strongly determined to nurture my potential at an institution renowned for academic rigor in science and technology. This scholarship represents a meaningful trust and opportunity to learn under experienced mentors, participate in scientific/informatics competitions, and prepare myself to become a principled software engineer who builds technology for positive social benefit."}
            </p>

            <div className="pt-4 border-t border-foreground/15 flex flex-wrap items-center justify-between gap-4">
              <a
                href="/cv-muhammad-usamah-abdurrahman.pdf"
                download="CV-Muhammad-Usamah-Abdurrahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <Download className="w-4 h-4 shrink-0" />
                <span>{isIndonesian ? "Unduh Curriculum Vitae (PDF)" : "Download Curriculum Vitae (PDF)"}</span>
              </a>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-5 py-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <span>{isIndonesian ? "Hubungi Saya (Form Kontak)" : "Contact Form"}</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
