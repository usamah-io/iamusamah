"use client";

import Link from "next/link";
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Code2,
  Award,
  Layers,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useApp } from "@/components/app-context";
import About from "@/components/about";

export default function AboutPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  const quickLinks = [
    {
      href: "/experience",
      label: isIndonesian ? "Lihat Pengalaman" : "View Experiences",
      sub: isIndonesian
        ? "Speaker, Hackathon & Volunteer"
        : "Speaker, Hackathon & Volunteer",
      icon: Award,
      primary: true,
    },
    {
      href: "/experience",
      label: isIndonesian ? "Lihat Pendidikan" : "View Education",
      sub: isIndonesian
        ? "Jazacademy & SMPT Bugelan"
        : "Jazacademy & SMPT Bugelan",
      icon: GraduationCap,
    },
    {
      href: "/skills",
      label: isIndonesian ? "Lihat Skill" : "View Skills",
      sub: isIndonesian
        ? "Tech Stack & Web Development"
        : "Tech Stack & Web Development",
      icon: Code2,
    },
    {
      href: "/projects",
      label: isIndonesian ? "Lihat Proyek" : "View Projects",
      sub: isIndonesian
        ? "SKS-Master, PyQuest & Karya Web"
        : "SKS-Master, PyQuest & Web Works",
      icon: Layers,
    },
    {
      href: "/apps",
      label: isIndonesian ? "Lihat Aplikasi" : "View Applications",
      sub: isIndonesian
        ? "Katalog 4 Aplikasi Interaktif"
        : "4 Interactive Apps Catalog",
      icon: Sparkles,
    },
    {
      href: "/scholarship",
      label: isIndonesian ? "Profil Beasiswa SMA" : "Scholarship Profile",
      sub: isIndonesian
        ? "Ringkasan Akademik & Aspirasi"
        : "Academic Summary & Aspirations",
      icon: GraduationCap,
    },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto space-y-10">
        {/* Top Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

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
        </div>

        {/* 1 & 2. Foto Profil, Nama & Perkenalan Singkat */}
        <About />

        {/* 3. Deskripsi Siapa Saya, Latar Belakang, Minat & Perjalanan */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-4 text-sm sm:text-base text-foreground/85 font-medium leading-relaxed">
          <div className="font-mono text-xs font-black uppercase tracking-widest text-[var(--accent1)] pb-1 border-b border-foreground/15">
            // {isIndonesian ? "Perkenalan & Latar Belakang" : "Introduction & Background"}
          </div>

          <p>
            {isIndonesian
              ? "Halo! Saya Muhammad Usamah Abdurrahman, seorang siswa tingkat SMP yang saat ini menempuh pendidikan homeschooling di komunitas belajar berasrama Jazacademy Tasikmalaya dan mengikuti ujian akademik resmi di SMPT Bugelan Tasikmalaya."
              : "Hello! I am Muhammad Usamah Abdurrahman, a junior high school student currently pursuing homeschooling at Jazacademy boarding learning community in Tasikmalaya and taking official academic examinations at SMPT Bugelan Tasikmalaya."}
          </p>

          <p>
            {isIndonesian
              ? "Minat utama saya berfokus pada Software Engineering, pengembangan aplikasi web modern menggunakan Next.js dan TypeScript, serta pemanfaatan kecerdasan buatan (AI) untuk membantu proses belajar. Di sela waktu belajar, saya juga aktif membagikan konten edukasi pemrograman dan teknologi melalui akun @uus.code."
              : "My primary interests center around Software Engineering, building modern web applications with Next.js and TypeScript, and leveraging AI to make learning easier. In my spare time, I also create beginner-friendly programming and tech educational content on @uus.code."}
          </p>

          <p>
            {isIndonesian
              ? "Perjalanan belajar ini membawa saya membangun berbagai aplikasi edukasi seperti SKS-Master dan PyQuest, mengikuti kompetisi Gemini Innovation Hackathon, menjadi pembicara di Seminar Nasional Programming, serta berkontribusi sebagai relawan di komunitas Senyum Anak Nusantara."
              : "This learning journey has led me to build educational apps like SKS-Master and PyQuest, compete in the Gemini Innovation Hackathon, speak at the National Programming Seminar, and volunteer with the Senyum Anak Nusantara community."}
          </p>
        </section>

        {/* 4. Tombol & Tautan ke Halaman Terkait */}
        <section className="space-y-4 pt-2">
          <h2 className="font-mono text-xs font-black uppercase tracking-widest text-foreground/70">
            // {isIndonesian ? "Jelajahi Halaman Terkait" : "Explore Related Pages"}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5">
            {quickLinks.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={`${item.href}-${item.label}`}
                  href={item.href}
                  className={`group rounded-2xl border-2 border-foreground p-4 transition-all flex items-center justify-between gap-3 shadow-[4px_4px_0px_var(--fg)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] ${
                    item.primary
                      ? "bg-[var(--accent1)] text-black"
                      : "bg-background text-foreground hover:bg-foreground/5"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-xl border border-current/20 shrink-0 ${
                        item.primary ? "bg-black/10" : "bg-foreground/5"
                      }`}
                    >
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="font-mono text-xs sm:text-sm font-black uppercase block truncate">
                        {item.label}
                      </span>
                      <span
                        className={`text-[11px] block truncate ${
                          item.primary ? "text-black/75 font-medium" : "text-foreground/60"
                        }`}
                      >
                        {item.sub}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 shrink-0 opacity-70 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
