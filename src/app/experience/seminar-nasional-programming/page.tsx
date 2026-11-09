"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  Calendar,
  Clock,
  Video,
  Mic,
  Award,
  BookOpen,
  ExternalLink,
  Eye,
  X,
  Sparkles,
  Layers,
  HelpCircle,
  Play,
  ArrowUpRight,
  Camera,
  CheckCircle2,
  MessageSquareQuote,
} from "lucide-react";
import { useApp } from "@/components/app-context";

interface LightboxItem {
  src: string;
  alt: string;
}

export default function SeminarNasionalProgrammingPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const [lightboxItem, setLightboxItem] = useState<LightboxItem | null>(null);

  const posterSrc = "/assets/seminar-nasional-programming.webp";
  const youtubeLiveUrl = "https://www.youtube.com/live/ZnpzL5GfeEc";
  const youtubeEmbedUrl = "https://www.youtube.com/embed/ZnpzL5GfeEc";

  const documentationPhotos = [
    {
      src: "/assets/seminar progaming1.png",
      alt: isIndonesian
        ? "Dokumentasi sesi Seminar Nasional Programming bersama para peserta via Zoom"
        : "Documentation of National Programming Seminar session with participants via Zoom",
      caption: isIndonesian
        ? "Sesi pemaparan & kehadiran peserta Seminar Nasional Programming via Zoom."
        : "Presentation session & participant attendance via Zoom.",
    },
    {
      src: "/assets/seminar progaming2.png",
      alt: isIndonesian
        ? "Dokumentasi pembicara Muhammad Usamah bersama moderator dan peserta Seminar Nasional Programming"
        : "Documentation of speaker Muhammad Usamah with moderator and participants",
      caption: isIndonesian
        ? "Momen diskusi interaktif bersama moderator dan peserta selama sesi berlangsung."
        : "Interactive discussion moment with the moderator and attendees during the session.",
    },
  ];

  const librariesLearned = [
    {
      name: "NumPy",
      desc: isIndonesian
        ? "Operasi numerik dan array."
        : "Numerical and array operations.",
    },
    {
      name: "Pandas",
      desc: isIndonesian
        ? "Membaca, mengolah, dan membersihkan data."
        : "Reading, processing, and cleaning data.",
    },
    {
      name: "Matplotlib",
      desc: isIndonesian
        ? "Membuat visualisasi data."
        : "Creating data visualizations.",
    },
    {
      name: "Scikit-learn",
      desc: isIndonesian
        ? "Mengenal dasar machine learning."
        : "Understanding foundational machine learning.",
    },
  ];

  const sessionTopics = isIndonesian
    ? [
        "Pengenalan Data Science dan peran Data Scientist.",
        "Mengapa Python banyak digunakan dalam Data Science.",
        "Dasar pengolahan data menggunakan Pandas dan NumPy.",
        "Visualisasi data menggunakan Matplotlib.",
        "Pengenalan machine learning dengan Scikit-learn.",
        "Demonstrasi dashboard analitik interaktif.",
      ]
    : [
        "Introduction to Data Science and the role of a Data Scientist.",
        "Why Python is widely used in Data Science.",
        "Foundations of data processing using Pandas and NumPy.",
        "Data visualization using Matplotlib.",
        "Introduction to machine learning with Scikit-learn.",
        "Interactive analytics dashboard demonstration.",
      ];

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-24 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>
              {isIndonesian ? "Kembali ke Pengalaman" : "Back to Experience"}
            </span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
            <Mic className="w-3.5 h-3.5" />
            <span>
              {isIndonesian ? "Pengalaman Pembicara" : "Speaking Experience"}
            </span>
          </div>
        </div>

        {/* Hero Header Section */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_var(--fg)]">
            <Award className="w-3.5 h-3.5 shrink-0" />
            <span>National Programming Seminar // Speaker</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight leading-none">
            Seminar Nasional Programming
          </h1>

          <p className="font-mono text-sm sm:text-lg font-bold text-[var(--accent1)] tracking-tight">
            Python for Data Science Fundamentals
          </p>

          <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed max-w-3xl">
            {isIndonesian
              ? "Langkah Awal Membangun Karier Sebagai Data Scientist: Panduan Esensial Mengolah Big Data Berstandar Industri."
              : "First Steps in Building a Career as a Data Scientist: Essential Guide to Industry-Standard Big Data Processing."}
          </p>

          {/* Tagline without any green accent — uses identity Coral & Foreground colors */}
          <blockquote className="italic font-mono text-xs sm:text-sm text-foreground/90 font-bold border-l-4 border-[var(--accent1)] bg-foreground/5 py-2 px-3.5 rounded-r-xl max-w-2xl mx-auto sm:mx-0">
            &ldquo;Kuasai Kodenya, Pahami Datanya, Pimpin Industrinya.&rdquo;
          </blockquote>

          {/* Event Metadata Pills */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 pt-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-foreground bg-background shadow-[2px_2px_0px_var(--fg)] font-bold">
              <Calendar className="w-3.5 h-3.5 text-[var(--accent1)]" />
              7 November 2026
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-foreground bg-background shadow-[2px_2px_0px_var(--fg)] font-bold">
              <Clock className="w-3.5 h-3.5 text-[var(--accent1)]" />
              13.00 WIB - Selesai
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-foreground bg-background shadow-[2px_2px_0px_var(--fg)] font-bold">
              <Video className="w-3.5 h-3.5 text-[var(--accent1)]" />
              Online via Zoom
            </span>

            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)] font-black">
              Engineering Education
            </span>
          </div>
        </div>

        {/* 1. POSTER RESMI ACARA (Proporsional, tidak memenuhi seluruh layar) */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-5 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b-2 border-foreground/20 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase text-foreground">
              <Sparkles className="w-4 h-4 text-[var(--accent1)] shrink-0" />
              <span>
                {isIndonesian ? "Poster Resmi Acara" : "Official Event Poster"}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2.5 font-mono text-xs">
              <a
                href={youtubeLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--accent1)] hover:opacity-90 text-black font-black uppercase transition border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]"
              >
                <Play className="w-3.5 h-3.5 fill-black" />
                <span>
                  {isIndonesian ? "Tonton di YouTube" : "Watch on YouTube"}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={() =>
                  setLightboxItem({
                    src: posterSrc,
                    alt: "Poster Resmi Seminar Nasional Programming",
                  })
                }
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground font-bold uppercase transition cursor-pointer shadow-[2px_2px_0px_var(--fg)]"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>
                  {isIndonesian ? "Perbesar Poster" : "Enlarge Poster"}
                </span>
              </button>
            </div>
          </div>

          {/* Proportional Poster Frame (max-w-xs sm:max-w-[340px], natural ratio preserved) */}
          <div className="flex justify-center">
            <div
              onClick={() =>
                setLightboxItem({
                  src: posterSrc,
                  alt: "Poster Resmi Seminar Nasional Programming",
                })
              }
              className="relative w-full max-w-[300px] sm:max-w-[340px] rounded-2xl overflow-hidden border-3 border-foreground shadow-[5px_5px_0px_var(--fg)] bg-zinc-950 group cursor-pointer"
              title={
                isIndonesian
                  ? "Klik untuk memperbesar poster"
                  : "Click to enlarge poster"
              }
            >
              <Image
                src={posterSrc}
                alt="Poster Resmi Seminar Nasional Programming - Python for Data Science Fundamentals - Speaker Muhammad Usamah Abdurrahman"
                width={680}
                height={900}
                sizes="(max-width: 640px) 300px, 340px"
                className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                priority
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="font-mono text-xs font-black uppercase px-4 py-2 rounded-full bg-background text-foreground border-2 border-foreground shadow-md flex items-center gap-2">
                  <Eye className="w-4 h-4" />
                  {isIndonesian ? "Perbesar Poster" : "Enlarge Poster"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* 2. GALERI DOKUMENTASI ACARA */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Camera className="w-5 h-5 text-[var(--accent1)]" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian ? "DOKUMENTASI ACARA" : "EVENT DOCUMENTATION"}
              </h2>
              <p className="text-xs sm:text-sm text-foreground/75 font-medium mt-0.5">
                {isIndonesian
                  ? "Beberapa momen selama pelaksanaan Seminar Nasional Programming."
                  : "Selected moments during the National Programming Seminar session."}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentationPhotos.map((photo, index) => (
              <div
                key={photo.src}
                onClick={() =>
                  setLightboxItem({ src: photo.src, alt: photo.alt })
                }
                className="rounded-2xl border-3 border-foreground bg-background overflow-hidden shadow-[5px_5px_0px_var(--fg)] group cursor-pointer flex flex-col justify-between transition-transform hover:translate-x-[-1px] hover:translate-y-[-1px]"
              >
                <div className="relative w-full bg-zinc-950 border-b-2 border-foreground overflow-hidden">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    width={1280}
                    height={600}
                    sizes="(max-width: 768px) 100vw, 450px"
                    className="w-full h-auto object-contain block group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="font-mono text-[11px] font-black uppercase px-3.5 py-1.5 rounded-full bg-background text-foreground border-2 border-foreground shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" />
                      {isIndonesian ? "Perbesar Foto" : "Enlarge Photo"}
                    </span>
                  </div>
                </div>
                <div className="p-3.5 sm:p-4 flex items-center justify-between gap-2">
                  <p className="text-xs text-foreground/85 font-medium leading-snug">
                    {photo.caption}
                  </p>
                  <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 rounded bg-foreground/10 text-foreground shrink-0">
                    0{index + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. NARASI 1: THE STORY BEHIND THE SESSION */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-foreground/15 pb-4">
            <div className="p-2.5 rounded-xl bg-foreground text-background border-2 border-foreground shrink-0">
              <BookOpen className="w-4 h-4 text-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                THE STORY BEHIND THE SESSION
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian
                  ? "Berawal dari Software Engineering"
                  : "Starting from Software Engineering"}
              </h2>
            </div>
          </div>

          <div className="space-y-3.5 text-sm sm:text-base text-foreground/85 font-medium leading-relaxed max-w-3xl">
            <p>
              {isIndonesian
                ? "Bidang yang selama ini lebih banyak saya tekuni adalah software engineering, khususnya pengembangan website dan aplikasi full-stack. Karena itu, Data Science bukan bidang spesialisasi yang sejak awal saya dalami."
                : "The field I have primarily focused on so far is software engineering, especially website and full-stack application development. Because of that, Data Science was not a specialization I pursued from the very beginning."}
            </p>
            <p>
              {isIndonesian
                ? "Ketika mendapatkan kesempatan menjadi pembicara dalam Seminar Nasional Programming, saya melihatnya sebagai kesempatan untuk memperluas pemahaman sekaligus membagikan ilmu yang baru saya pelajari."
                : "When I received the opportunity to speak at the National Programming Seminar, I saw it as a chance to broaden my understanding while sharing the knowledge I had newly learned."}
            </p>
            <p>
              {isIndonesian
                ? "Saya mulai mempelajari materi Data Science dengan memanfaatkan fondasi programming yang sudah saya miliki. Saya juga berdiskusi dan berkonsultasi dengan mentor untuk memahami hubungan antara dasar pemrograman dan pengolahan data."
                : "I began studying Data Science material by building upon the programming foundations I already had. I also discussed and consulted with my mentor to understand how core programming concepts connect to data processing."}
            </p>
            <p>
              {isIndonesian
                ? "Dari proses tersebut, saya menyadari bahwa ada banyak konsep programming yang ternyata dapat diterapkan dalam Data Science. Perbedaannya lebih banyak terletak pada tujuan penggunaan, cara mengolah data, serta tools yang digunakan."
                : "Through that process, I realized that many programming concepts can be directly applied in Data Science. The differences lie mostly in the end goal, the way data is processed, and the specific tools used."}
            </p>
          </div>
        </section>

        {/* 4. NARASI 2: PREPARING THE MATERIAL */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-5">
          <div className="flex items-center gap-3 border-b-2 border-foreground/15 pb-4">
            <div className="p-2.5 rounded-xl bg-foreground text-background border-2 border-foreground shrink-0">
              <Layers className="w-4 h-4 text-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                PREPARING THE MATERIAL
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian
                  ? "Mempelajari Data Science dari Fondasi Programming"
                  : "Learning Data Science from Programming Foundations"}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-foreground/85 font-medium leading-relaxed max-w-3xl">
            <p>
              {isIndonesian
                ? "Dalam persiapan materi, saya mempelajari beberapa library dan tools yang umum digunakan dalam ekosistem Python untuk Data Science. Beberapa di antaranya:"
                : " While preparing the material, I studied several libraries and tools commonly used in the Python ecosystem for Data Science, including:"}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {librariesLearned.map((lib) => (
                <div
                  key={lib.name}
                  className="p-3.5 rounded-xl border-2 border-foreground bg-foreground/5 flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0 mt-0.5" />
                  <div className="text-xs sm:text-sm">
                    <span className="font-mono font-black text-foreground">
                      {lib.name}
                    </span>{" "}
                    — <span className="text-foreground/80">{lib.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p>
              {isIndonesian
                ? "Saya juga mempersiapkan demonstrasi dashboard analitik interaktif untuk memperlihatkan bagaimana data dapat dibaca, dibersihkan, dianalisis, dan divisualisasikan."
                : "I also prepared an interactive analytics dashboard demonstration to show how data can be read, cleaned, analyzed, and visualized."}
            </p>

            <p>
              {isIndonesian
                ? "Fokus saya bukan sekadar memperkenalkan library, tetapi membantu peserta memahami bagaimana proses pengolahan data dapat digunakan untuk menemukan pola dan menghasilkan insight."
                : "My focus was not merely introducing libraries, but helping participants understand how the data processing workflow can be used to discover patterns and generate insights."}
            </p>
          </div>
        </section>

        {/* 5. NARASI 3: THE SESSION */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-5">
          <div className="flex items-center gap-3 border-b-2 border-foreground/15 pb-4">
            <div className="p-2.5 rounded-xl bg-foreground text-background border-2 border-foreground shrink-0">
              <Mic className="w-4 h-4 text-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                THE SESSION
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian
                  ? "Membagikan Materi dan Berdiskusi Bersama Peserta"
                  : "Sharing Material and Discussing with Participants"}
              </h2>
            </div>
          </div>

          <div className="space-y-4 text-sm sm:text-base text-foreground/85 font-medium leading-relaxed max-w-3xl">
            <p>
              {isIndonesian
                ? "Pada 7 November 2026, saya berkesempatan membawakan materi Python for Data Science Fundamentals dalam Seminar Nasional Programming yang diselenggarakan oleh Engineering Education secara online melalui Zoom."
                : "On November 7, 2026, I had the opportunity to present Python for Data Science Fundamentals at the National Programming Seminar organized by Engineering Education online via Zoom."}
            </p>

            <div className="space-y-2.5">
              <p className="font-mono text-xs font-black uppercase text-foreground">
                {isIndonesian
                  ? "Dalam sesi tersebut, saya membahas:"
                  : "During the session, I covered:"}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {sessionTopics.map((topic, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-xs sm:text-sm p-3 rounded-xl border border-foreground/20 bg-foreground/5"
                  >
                    <span className="font-mono text-xs font-black text-[var(--accent1)] shrink-0">
                      0{i + 1}.
                    </span>
                    <span>{topic}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p>
              {isIndonesian
                ? "Saya juga mendapatkan kesempatan berdiskusi dengan peserta melalui sesi tanya jawab."
                : "I also had the opportunity to engage in discussions with participants during the Q&A session."}
            </p>
          </div>
        </section>

        {/* 6. NARASI 4: A MOMENT FROM Q&A */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-4">
          <div className="flex items-center gap-3 border-b-2 border-foreground/15 pb-4">
            <div className="p-2.5 rounded-xl bg-foreground text-background border-2 border-foreground shrink-0">
              <HelpCircle className="w-4 h-4 text-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                A MOMENT FROM Q&A
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                {isIndonesian
                  ? "Pertanyaan Sederhana, Jawaban yang Jujur"
                  : "A Simple Question, An Honest Answer"}
              </h2>
            </div>
          </div>

          <div className="space-y-3.5 text-sm sm:text-base text-foreground/85 font-medium leading-relaxed max-w-3xl">
            <p>
              {isIndonesian
                ? "Salah satu pertanyaan yang muncul adalah mengenai perbedaan Python dan Java."
                : "One of the questions that came up was about the difference between Python and Java."}
            </p>
            <p>
              {isIndonesian
                ? "Saya menjelaskan bahwa Python memiliki sintaks yang relatif ringkas dan mudah dibaca, sedangkan Java memiliki struktur penulisan yang berbeda dan cenderung lebih eksplisit."
                : "I explained that Python has a relatively concise and readable syntax, whereas Java has a different writing structure that tends to be more explicit."}
            </p>
            <p>
              {isIndonesian
                ? "Saya juga menyampaikan secara terbuka bahwa Java belum pernah saya gunakan secara langsung. Saya tidak ingin memberikan penjelasan seolah-olah memiliki pengalaman praktik dengan bahasa tersebut."
                : "I also openly shared that I had never used Java directly. I did not want to give an explanation pretending to have hands-on experience with that language."}
            </p>
            <p>
              {isIndonesian
                ? "Bagi saya, mengakui batas pengetahuan bukanlah sesuatu yang perlu ditutupi. Justru itu menjadi bagian dari proses belajar dan diskusi yang sehat."
                : "To me, acknowledging the limits of one's knowledge is nothing to hide. On the contrary, it is part of a healthy learning process and discussion."}
            </p>
          </div>
        </section>

        {/* 7. REFLEKSI SINGKAT */}
        <section className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-foreground/5 p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] space-y-3">
          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)]">
            <MessageSquareQuote className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Refleksi Singkat" : "Short Reflection"}</span>
          </div>

          <p className="text-sm sm:text-base text-foreground/90 font-medium leading-relaxed max-w-3xl">
            {isIndonesian
              ? "Pengalaman ini mengajarkan saya bahwa kesempatan untuk berbagi ilmu juga bisa menjadi kesempatan untuk belajar. Saya datang dengan fondasi programming yang selama ini saya tekuni, kemudian memperluasnya ke bidang Data Science. Dari proses persiapan hingga sesi diskusi, saya mendapatkan pengalaman baru dalam memahami materi, menyusun penjelasan, dan menyampaikannya kepada audiens."
              : "This experience taught me that an opportunity to share knowledge can also be an opportunity to learn. I came with the programming foundations I had been practicing, then expanded them into Data Science. From preparation to the discussion session, I gained new experience in understanding material, structuring explanations, and communicating them to an audience."}
          </p>
        </section>

        {/* 8. WATCH THE SESSION (YOUTUBE RECORDING) */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <Play className="w-5 h-5 text-[var(--accent1)] fill-[var(--accent1)]" />
            </div>
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] block">
                {isIndonesian ? "Rekaman Resmi" : "Official Recording"}
              </span>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                WATCH THE SESSION
              </h2>
            </div>
          </div>

          <div className="rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-4 sm:p-6 shadow-[6px_6px_0px_var(--fg)] space-y-4">
            {/* 16:9 Responsive YouTube Embed */}
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border-2 sm:border-3 border-foreground bg-black">
              <iframe
                src={youtubeEmbedUrl}
                title="Seminar Nasional Programming: Python for Data Science Fundamentals - Muhammad Usamah"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-1 font-mono text-xs">
              <span className="text-foreground/75 font-bold">
                {isIndonesian
                  ? "Siaran Resmi: Engineering Education"
                  : "Official Stream: Engineering Education"}
              </span>

              <a
                href={youtubeLiveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[var(--accent1)] text-black font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] hover:opacity-90 transition"
              >
                <span>
                  {isIndonesian
                    ? "Buka Video di YouTube"
                    : "Open Video on YouTube"}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* LIGHTBOX MODAL FOR POSTER & DOCUMENTATION PHOTOS */}
      {lightboxItem && (
        <div
          onClick={() => setLightboxItem(null)}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <button
            type="button"
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-[var(--accent1)] text-black border-2 border-black hover:opacity-90 transition cursor-pointer z-[210] shadow-[3px_3px_0px_#000000]"
            aria-label="Tutup Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[88vh] w-full flex items-center justify-center"
          >
            <Image
              src={lightboxItem.src}
              alt={lightboxItem.alt}
              width={1400}
              height={1000}
              priority
              sizes="100vw"
              className="max-h-[85vh] w-auto h-auto object-contain rounded-2xl border-3 border-white/20 shadow-2xl bg-black"
            />
          </div>
        </div>
      )}
    </main>
  );
}
