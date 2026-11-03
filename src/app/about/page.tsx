"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Download,
  GraduationCap,
  Sparkles,
  HeartHandshake,
  Target,
  Compass,
  Code2,
  ExternalLink,
  BookOpen,
  Award,
} from "lucide-react";
import { useApp } from "@/components/app-context";
import About from "@/components/about";

export default function AboutPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto space-y-14">
        {/* Navigation Breadcrumb */}
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

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>{isIndonesian ? "Profil & Bio Lengkap" : "Profile & Bio"}</span>
            </div>
          </div>
        </div>

        {/* 1. HERO ABOUT SECTION (Preserved from original component) */}
        <About />

        {/* 2. PERKENALAN & LATAR BELAKANG PENDIDIKAN */}
        <section className="space-y-6 pt-4 border-t-2 border-foreground/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <GraduationCap className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                01 // {isIndonesian ? "Pendidikan & Identitas" : "Education & Identity"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Latar Belakang & Pendidikan" : "Background & Education"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Kartu Jazacademy */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-[var(--accent1)]">
                    {isIndonesian ? "Tempat Belajar Sehari-hari" : "Daily Learning Community"}
                  </span>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-foreground/30 bg-foreground/5">
                    2024 – 2027
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  Jazacademy
                </h3>
                <p className="font-mono text-xs font-bold text-foreground/70 mt-1">
                  Tasikmalaya, Jawa Barat
                </p>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-3">
                  {isIndonesian
                    ? "Menempuh pendidikan melalui jalur homeschooling di Jazacademy, sebuah komunitas belajar mandiri dengan sistem seperti asrama. Di sini saya fokus mendalami pengembangan web modern, pemanfaatan AI, serta pembuatan konten edukasi pemrograman."
                    : "Pursuing education via the homeschooling pathway at Jazacademy, a boarding-style self-directed learning community. Here I focus on modern web development foundations, AI tools, and programming education content creation."}
                </p>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground/60">
                  {isIndonesian ? "Jalur Homeschooling" : "Homeschooling Track"}
                </span>
                <a
                  href="https://jazacademy.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs font-black uppercase text-[var(--accent1)] hover:underline inline-flex items-center gap-1"
                >
                  <span>jazacademy.id</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Kartu SMPT Bugelan Tasikmalaya */}
            <div className="rounded-[1.75rem] border-3 sm:border-4 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between gap-2 pb-3 border-b-2 border-foreground/15">
                  <span className="font-mono text-xs font-black uppercase text-emerald-500">
                    {isIndonesian ? "Lembaga Ujian Akademik" : "Academic Examination"}
                  </span>
                  <span className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-foreground/30 bg-foreground/5">
                    2024 – 2027
                  </span>
                </div>
                <h3 className="text-xl font-black uppercase text-foreground mt-3 tracking-tight">
                  SMPT Bugelan Tasikmalaya
                </h3>
                <p className="font-mono text-xs font-bold text-foreground/70 mt-1">
                  Tasikmalaya, Jawa Barat
                </p>
                <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed mt-3">
                  {isIndonesian
                    ? "Institusi tempat saya mengikuti evaluasi akademik dan ujian jenjang sekolah menengah pertama secara resmi sesuai kurikulum pendidikan nasional."
                    : "The institution where I officially take academic assessments and junior high school examination requirements aligned with the national curriculum."}
                </p>
              </div>

              <div className="pt-3 border-t border-foreground/15 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase font-bold text-foreground/60">
                  {isIndonesian ? "Jenjang Menengah Pertama" : "Junior Secondary Level"}
                </span>
                <span className="font-mono text-xs font-bold text-foreground/70">
                  Tasikmalaya
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 3. MINAT & KETERAMPILAN BELAJAR MANDIRI */}
        <section className="space-y-6 pt-4 border-t-2 border-foreground/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Compass className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                02 // {isIndonesian ? "Eksplorasi & Keahlian" : "Exploration & Skills"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Minat & Perjalanan Belajar Mandiri" : "Interests & Self-Taught Journey"}
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Minat 1: Web & AI Development */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <div className="p-2.5 w-fit rounded-xl bg-foreground/5 border-2 border-foreground">
                <Code2 className="w-5 h-5 text-emerald-500" />
              </div>
              <h3 className="font-mono text-sm font-black uppercase tracking-tight text-foreground">
                {isIndonesian ? "Web & AI Development" : "Web & AI Development"}
              </h3>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Belajar mandiri membangun aplikasi web dengan Next.js, React, TypeScript, dan Tailwind CSS. Tertarik mengeksplorasi integrasi AI seperti Google Gemini untuk membuat aplikasi yang bermanfaat."
                  : "Self-taught in building web applications with Next.js, React, TypeScript, and Tailwind CSS. Passionate about exploring AI integrations such as Google Gemini to create useful tools."}
              </p>
            </div>

            {/* Minat 2: Pembelajaran Digital & EdTech */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <div className="p-2.5 w-fit rounded-xl bg-foreground/5 border-2 border-foreground">
                <BookOpen className="w-5 h-5 text-[var(--accent1)]" />
              </div>
              <h3 className="font-mono text-sm font-black uppercase tracking-tight text-foreground">
                {isIndonesian ? "Pembelajaran Digital (EdTech)" : "Digital Learning (EdTech)"}
              </h3>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Tertarik pada bagaimana teknologi dapat memudahkan proses belajar. Proyek seperti SKS-Master dan Studee saya buat untuk menguji cara baru dalam latihan soal dan evaluasi pemahaman."
                  : "Fascinated by how technology can facilitate the learning process. Projects like SKS-Master and Studee were built to experiment with adaptive quizzes and interactive study."}
              </p>
            </div>

            {/* Minat 3: Konten Edukasi Pemrograman */}
            <div className="rounded-[1.75rem] border-3 border-foreground bg-background p-6 shadow-[5px_5px_0px_var(--fg)] space-y-3">
              <div className="p-2.5 w-fit rounded-xl bg-foreground/5 border-2 border-foreground">
                <Sparkles className="w-5 h-5 text-blue-500" />
              </div>
              <h3 className="font-mono text-sm font-black uppercase tracking-tight text-foreground">
                {isIndonesian ? "Konten Edukasi (@uus.code)" : "Tech Education Content"}
              </h3>
              <p className="text-xs text-foreground/80 font-medium leading-relaxed">
                {isIndonesian
                  ? "Membuat video edukasi koding untuk pemula dengan analogi sehari-hari yang mudah dicerna. Berbagi apa yang baru saya pelajari membantu saya memahami konsep secara lebih mendalam."
                  : "Creating beginner-friendly coding educational clips using relatable daily analogies. Sharing what I learn helps reinforce my own understanding of programming concepts."}
              </p>
            </div>
          </div>
        </section>

        {/* 4. NILAI PRIBADI & KONTRIBUSI SOSIAL */}
        <section className="space-y-6 pt-4 border-t-2 border-foreground/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <HeartHandshake className="w-5 h-5 text-rose-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                03 // {isIndonesian ? "Prinsip & Kontribusi" : "Principles & Contribution"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Nilai Pribadi & Kegiatan Sosial" : "Personal Values & Social Activities"}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-6">
            <blockquote className="border-l-4 border-[var(--accent1)] pl-4 italic text-base sm:text-lg font-medium text-foreground/90 leading-relaxed">
              &ldquo;{isIndonesian
                ? "Bagi saya, teknologi paling berarti kalau bisa dipakai untuk membantu orang lain belajar dan menyelesaikan masalah nyata."
                : "To me, technology is most meaningful when it is used to help others learn and solve real-world challenges."}&rdquo;
            </blockquote>

            <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
              {isIndonesian
                ? "Di luar waktu belajar coding, saya aktif bergabung dalam kegiatan sosial dan kerelawanan:"
                : "Outside of coding study, I actively participate in community and volunteer activities:"}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans text-xs">
              <div className="p-4 rounded-xl border-2 border-foreground/30 bg-foreground/5 space-y-1.5">
                <span className="font-mono text-[10px] font-black uppercase text-emerald-500 block">
                  Organisasi
                </span>
                <h4 className="font-mono text-xs font-black uppercase text-foreground">
                  Senyum Anak Nusantara (SAN)
                </h4>
                <p className="text-foreground/75 leading-relaxed">
                  {isIndonesian
                    ? "Pengurus divisi Kominfo/PDD: editing video, desain grafis, dan dokumentasi kegiatan kepemudaan."
                    : "Information & Documentation division: video editing, graphic design, and youth social activity documentation."}
                </p>
              </div>

              <div className="p-4 rounded-xl border-2 border-foreground/30 bg-foreground/5 space-y-1.5">
                <span className="font-mono text-[10px] font-black uppercase text-amber-500 block">
                  Volunteer
                </span>
                <h4 className="font-mono text-xs font-black uppercase text-foreground">
                  Hari Anak Nasional 2026
                </h4>
                <p className="text-foreground/75 leading-relaxed">
                  {isIndonesian
                    ? "Volunteer dokumentasi serta operator multimedia, sound system, audio mixing, dan live stream."
                    : "Documentation volunteer and multimedia, sound mixing, and live streaming operator."}
                </p>
              </div>

              <div className="p-4 rounded-xl border-2 border-foreground/30 bg-foreground/5 space-y-1.5">
                <span className="font-mono text-[10px] font-black uppercase text-[var(--accent1)] block">
                  Aksi Tanggap Bencana
                </span>
                <h4 className="font-mono text-xs font-black uppercase text-foreground">
                  Pemulihan Longsor Cisarua
                </h4>
                <p className="text-foreground/75 leading-relaxed">
                  {isIndonesian
                    ? "Relawan lapangan tanggap darurat: pendataan, penyaluran logistik sembako, dan posko dapur umum di Bandung Barat."
                    : "Disaster relief volunteer: aid logistics distribution, emergency food relief coordination, and community support in West Bandung."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. TUJUAN KE DEPAN & ASPIRASI BEASISWA */}
        <section className="space-y-6 pt-4 border-t-2 border-foreground/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Target className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                04 // {isIndonesian ? "Aspirasi Masa Depan" : "Future Aspirations"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "Tujuan ke Depan" : "Future Goals"}
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-5">
            <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
              {isIndonesian
                ? "Saya berencana melanjutkan jenjang pendidikan menengah atas (SMA/sederajat) di sekolah yang memiliki lingkungan akademik kuat dan mendukung pengembangan di bidang teknologi, sains, dan rekayasa perangkat lunak. Melalui peluang beasiswa, saya berharap dapat terus memperdalam dasar-dasar ilmu komputer, berkolaborasi dengan komunitas pembelajar yang berdedikasi, serta menghasilkan karya teknologi yang membawa dampak nyata bagi masyarakat."
                : "I plan to continue my secondary education (high school) at an institution with a strong academic environment that nurtures growth in technology, science, and software engineering. Through scholarship opportunities, I hope to deepen my computer science foundations, collaborate with dedicated learning communities, and engineer technological solutions that create positive social impact."}
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-foreground/15">
              <Link
                href="/scholarship"
                className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>{isIndonesian ? "Lihat Profil Beasiswa" : "View Scholarship Profile"}</span>
              </Link>

              <Link
                href="/projects"
                className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-5 py-2.5 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
              >
                <span>{isIndonesian ? "Eksplorasi Proyek" : "Explore Projects"}</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
