"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  Code2,
  CheckCircle2,
  Layers,
  Award,
  Zap,
  ShieldCheck,
  Cpu,
  Database,
  ArrowUpRight,
} from "lucide-react";
import { useApp } from "@/components/app-context";
import Projects from "@/components/projects";

export default function ProjectsPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          <div className="flex items-center gap-2.5">
            <Link
              href="/apps"
              className="font-mono text-xs font-bold uppercase px-3.5 py-1.5 rounded-full border border-foreground/30 bg-foreground/5 hover:bg-foreground/10 transition"
            >
              {isIndonesian ? "Katalog 4 Aplikasi ↗" : "4 Apps Catalog ↗"}
            </Link>

            <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-emerald-500 text-black shadow-[2px_2px_0px_var(--fg)]">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>{isIndonesian ? "Proyek & Studi Kasus" : "Projects & Case Studies"}</span>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/5 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            <Code2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{isIndonesian ? "Eksplorasi Rekayasa Perangkat Lunak" : "Software Engineering Work"}</span>
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-none">
            {isIndonesian ? "Proyek & Inovasi" : "Projects & Innovation"}
          </h1>
          <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed">
            {isIndonesian
              ? "Koleksi aplikasi web yang saya bangun untuk belajar, memecahkan masalah nyata, dan mengeksplorasi kecerdasan buatan."
              : "A curated collection of web applications built to experiment, solve real learning problems, and explore practical AI."}
          </p>
        </div>

        {/* ========================================================
            STUDI KASUS PRIORITAS: SKS-MASTER
            Struktur 10 bagian:
            1. Overview, 2. Latar Belakang Masalah, 3. Tujuan & Motivasi,
            4. Peran Saya, 5. Proses Pengembangan, 6. Teknologi,
            7. Fitur Utama, 8. Tantangan & Solusi, 9. Hasil, 10. Demo & Repo
           ======================================================== */}
        <section aria-labelledby="sks-master-case-study" className="rounded-[2.5rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-10 shadow-[8px_8px_0px_var(--fg)] space-y-8">
          {/* Header & Badges */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-6 border-b-2 border-foreground/20">
            <div className="space-y-2">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-black uppercase bg-[var(--accent1)] text-black border border-black shadow-[2px_2px_0px_var(--fg)]">
                  <Sparkles className="w-3 h-3 fill-black" />
                  {isIndonesian ? "Studi Kasus Unggulan" : "Featured Case Study"}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-mono font-black uppercase bg-emerald-500 text-black border border-black shadow-[2px_2px_0px_var(--fg)]">
                  Top 4 Finalist
                </span>
              </div>
              <h2 id="sks-master-case-study" className="text-3xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
                SKS-Master (Platform Ujian AI Adaptif)
              </h2>
              <p className="font-mono text-xs sm:text-sm text-foreground/70">
                {isIndonesian
                  ? "Pengembangan Platform Latihan Soal Mandiri Berbantuan Google Gemini API"
                  : "Adaptive Self-Study Quiz Platform Powered by Google Gemini API"}
              </p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3 font-mono">
              <a
                href="https://sksmaster.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black text-xs font-black uppercase shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <span>{isIndonesian ? "Buka Aplikasi" : "Live Demo"}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href="https://github.com/usamah-io/Hekaton-Gemini2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground text-xs font-black uppercase shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <span>GitHub Repo</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* 1. Overview & Media Preview */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)]">
                01 // {isIndonesian ? "Ringkasan Eksekutif (Overview)" : "Project Overview"}
              </h3>
              <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                {isIndonesian
                  ? "SKS-Master adalah platform web edukatif yang dirancang untuk membantu pelajar mempersiapkan ujian melalui latihan soal adaptif. Aplikasi ini memanfaatkan model bahasa Google Gemini untuk menyusun pertanyaan kontekstual, mengevaluasi pilihan jawaban pengguna secara mendalam, serta memberikan analisis pembahasan komprehensif tanpa perlu koneksi database yang rumit."
                  : "SKS-Master is an educational web platform engineered to assist students in preparing for academic examinations through adaptive quiz practice. The application utilizes the Google Gemini API to dynamically generate contextual multiple-choice questions, analyze user responses, and provide in-depth feedback without requiring complex database infrastructure."}
              </p>

              {/* 2. Latar Belakang Masalah */}
              <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/20 space-y-2">
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  {isIndonesian ? "Latar Belakang Masalah:" : "Problem Background:"}
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {isIndonesian
                    ? "Banyak pelajar yang mengandalkan sistem 'SKS' (Sistem Kebut Semalam) mengalami kesulitan menemukan bank soal latihan yang relevan dan langsung menyediakan penjelasan mengapa sebuah jawaban salah atau benar. Ketergantungan pada buku statis sering kali membatasi variasi soal dan tidak melatih daya nalar analitis."
                    : "Many students preparing for tests under tight timelines struggle to find relevant practice quizzes that immediately explain why an answer is right or wrong. Static study guides offer limited question variations and lack personalized feedback for analytical reasoning."}
                </p>
              </div>

              {/* 3. Tujuan dan Motivasi */}
              <div className="p-4 rounded-2xl bg-foreground/5 border border-foreground/20 space-y-2">
                <h4 className="font-mono text-xs font-black uppercase tracking-wider text-foreground flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  {isIndonesian ? "Tujuan & Motivasi:" : "Goals & Motivation:"}
                </h4>
                <p className="text-xs text-foreground/80 leading-relaxed font-medium">
                  {isIndonesian
                    ? "Menciptakan alat bantu belajar gratis, cepat, dan ringan yang dapat diakses siapa saja dari browser tanpa perlu registrasi akun berbelit-belit, sekaligus membuktikan bahwa integrasi AI dapat diaplikasikan langsung pada materi kurikulum sekolah."
                    : "To create a fast, accessible, and lightweight study companion runnable in any browser without mandatory sign-up walls, proving how generative AI can be applied practically to academic curriculum study."}
                </p>
              </div>
            </div>

            {/* Preview Image / Architecture */}
            <div className="lg:col-span-5 space-y-4">
              <div className="relative aspect-video rounded-2xl overflow-hidden border-3 border-foreground shadow-[5px_5px_0px_var(--fg)] bg-zinc-950">
                <Image
                  src="/assets/projects/sks-master.png"
                  alt="SKS-Master Platform Interface Preview"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover"
                />
              </div>

              <div className="p-4 rounded-2xl border-2 border-foreground/25 bg-background space-y-2 font-mono text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-foreground/15">
                  <span className="text-foreground/60">{isIndonesian ? "Peran Saya:" : "My Role:"}</span>
                  <span className="font-black text-emerald-600 dark:text-emerald-400">
                    {isIndonesian ? "Pengembang SKS-Master" : "SKS-Master Developer"}
                  </span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-foreground/15">
                  <span className="text-foreground/60">{isIndonesian ? "Kompetisi:" : "Competition:"}</span>
                  <span className="font-black text-foreground">Gemini Hackathon 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground/60">{isIndonesian ? "Status Hasil:" : "Result:"}</span>
                  <span className="font-black text-[var(--accent1)]">Top 4 Finalis (86,4)</span>
                </div>
              </div>
            </div>
          </div>

          {/* 4. Fitur Utama & Teknologi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t-2 border-foreground/20">
            {/* Fitur Utama */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider text-emerald-500 flex items-center gap-2">
                <Zap className="w-4 h-4" />
                <span>{isIndonesian ? "Fitur Utama Sistem" : "Key System Features"}</span>
              </h3>
              <ul className="space-y-2.5 font-sans text-xs">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">
                      {isIndonesian ? "Kuis Adaptif Instan via Gemini AI" : "Instant Adaptive Quiz Generation"}
                    </span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Menghasilkan pertanyaan pilihan ganda dengan tingkat kesulitan yang dapat disesuaikan per topik materi."
                        : "Generates multiple-choice questions tailored to specific academic topics and difficulty levels."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">
                      {isIndonesian ? "Analisis Jawaban & Distractor Review" : "In-Depth Answer & Distractor Analysis"}
                    </span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Bukan sekadar kunci jawaban, melainkan alasan mengapa opsi lain kurang tepat untuk memicu pemahaman konsep."
                        : "Explains why incorrect choices are wrong, reinforcing concept mastery rather than mere rote memorization."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">
                      {isIndonesian ? "Ekspor Catatan Review ke TXT" : "Direct Export to TXT"}
                    </span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Memungkinkan pengguna mengunduh ringkasan soal salah untuk dipelajari kembali saat offline."
                        : "Enables students to download incorrect questions and review summaries for offline study."}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-black text-foreground">
                      {isIndonesian ? "Serverless & Database-Free Architecture" : "Serverless & DB-Free Persistence"}
                    </span>
                    <span className="text-foreground/75 block">
                      {isIndonesian
                        ? "Progres belajar dan riwayat latihan tersimpan aman di browser pengguna menggunakan LocalStorage."
                        : "Student session progress is stored locally in the browser via LocalStorage with zero external database dependencies."}
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Arsitektur Teknologi & Tantangan-Solusi */}
            <div className="space-y-4">
              <h3 className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                <span>{isIndonesian ? "Teknologi & Tantangan Teknis" : "Tech Stack & Challenges"}</span>
              </h3>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 font-mono text-[11px]">
                {["Next.js", "TypeScript", "Google Gemini API", "Tailwind CSS", "LocalStorage", "Vercel Serverless"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full border-2 border-foreground bg-foreground/5 font-bold">
                    {t}
                  </span>
                ))}
              </div>

              {/* Tantangan & Solusi */}
              <div className="space-y-3 font-sans text-xs">
                <div className="p-3.5 rounded-xl border border-foreground/20 bg-foreground/5 space-y-1">
                  <span className="font-mono font-bold text-foreground block">
                    {isIndonesian ? "Tantangan: Latensi & Biaya Database" : "Challenge: Latency & Database Overhead"}
                  </span>
                  <p className="text-foreground/75 leading-relaxed">
                    {isIndonesian
                      ? "Menyediakan latihan instan tanpa beban login atau biaya server database backend."
                      : "Providing instant quizzes without requiring login walls or costly backend database hosting."}
                  </p>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block pt-1">
                    {isIndonesian ? "Solusi: Arsitektur LocalStorage Mandiri" : "Solution: Client-side LocalStorage Persistence"}
                  </span>
                </div>

                <div className="p-3.5 rounded-xl border border-foreground/20 bg-foreground/5 space-y-1">
                  <span className="font-mono font-bold text-foreground block">
                    {isIndonesian ? "Tantangan: Format Respons AI yang Konsisten" : "Challenge: Consistent AI Response Parsing"}
                  </span>
                  <p className="text-foreground/75 leading-relaxed">
                    {isIndonesian
                      ? "Memastikan model bahasa menghasilkan output struktur data JSON yang valid dan tidak patah saat parsing."
                      : "Ensuring LLM prompts consistently return valid JSON structures for frontend quiz rendering without parsing crashes."}
                  </p>
                  <span className="font-mono font-bold text-emerald-600 dark:text-emerald-400 block pt-1">
                    {isIndonesian ? "Solusi: Structured System Prompting & Fallbacks" : "Solution: Structured Prompt Constraints & Fallbacks"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Catatan Transparansi */}
          <div className="p-4 sm:p-5 rounded-2xl bg-foreground/5 border-2 border-foreground/30 text-xs font-medium leading-relaxed space-y-1">
            <span className="font-mono font-black uppercase text-[var(--accent1)] flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              {isIndonesian ? "Catatan Transparansi Kompetisi:" : "Competition Transparency Note:"}
            </span>
            <p className="text-foreground/85">
              {isIndonesian
                ? "Tim SKS-Master didaftarkan dengan identitas mentor karena ketentuan kompetisi mensyaratkan peserta berstatus mahasiswa. Saya adalah pengembang SKS-Master yang merancang dan membangun platform ini. Sertifikat resmi yang tersedia adalah sertifikat partisipasi atas nama tim SKS-Master."
                : "The SKS-Master team was registered using the mentor's identity due to the competition requirement for university students. I am the developer who designed and built the SKS-Master platform. The official certificate available is a participation certificate issued in the name of the SKS-Master team."}
            </p>
          </div>
        </section>

        {/* ========================================================
            ORIGINAL 3D SHOWCASE & INTERACTIVE CAROUSEL
            (Preserved completely without breaking animations)
           ======================================================== */}
        <section className="space-y-6 pt-6 border-t-2 border-foreground/20">
          <div className="flex items-center justify-between">
            <h2 className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-foreground flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-500" />
              <span>{isIndonesian ? "Eksplorasi Proyek Lengkap (3D Showcase)" : "Full Projects 3D Showcase"}</span>
            </h2>
            <span className="font-mono text-xs text-foreground/60 hidden sm:inline">
              [ Interactive Cards ]
            </span>
          </div>

          {/* Dedicated Original Projects Component */}
          <Projects />
        </section>

      </div>
    </main>
  );
}
