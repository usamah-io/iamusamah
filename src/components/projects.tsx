"use client";

import { useEffect, useRef, useState } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import VolunteerLightbox, { LightboxMedia } from "./volunteer-lightbox";

const INDICATOR_SEGMENTS = 5;
const TICKS_BETWEEN = 7;

// Precalculated coordinates for 16 cards in 3D space to frame the central title cleanly
const cardCoords = [
  { x: -390, y: -210 },
  { x: 360, y: -190 },
  { x: -330, y: 170 },
  { x: 370, y: 150 },
  { x: -210, y: -260 },
  { x: 230, y: -250 },
  { x: -430, y: 30 },
  { x: 410, y: -30 },
  { x: -170, y: 230 },
  { x: 190, y: 240 },
  { x: -290, y: -130 },
  { x: 310, y: -110 },
  { x: -410, y: -150 },
  { x: 430, y: 130 },
  { x: -250, y: 140 },
  { x: 270, y: 70 },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titlesRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const ticksRef = useRef<HTMLSpanElement[]>([]);
  const numsRef = useRef<HTMLParagraphElement[]>([]);
  const dotRef = useRef<HTMLSpanElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<LightboxMedia | null>(null);

  // 16 Real Curated Showcase Cards covering Web Projects, Competitions, Volunteering & Hackathon
  const flyThroughCards = [
    {
      title: "SKS-Master (Platform Ujian AI)",
      badge: "Gemini Hackathon 2026",
      tech: "Next.js • Gemini API • TypeScript",
      image: "/assets/projects/sks-master.png",
      link: "https://sks-master.vercel.app",
      mediaItem: {
        id: "sks-master-preview",
        type: "image" as const,
        title: "SKS-Master — AI-Powered Smart Exam & Learning Platform",
        category: "PROJECT PREVIEW",
        domain: "sks-master.vercel.app",
        description:
          "Platform ujian dan evaluasi adaptif cerdas berbasis Gemini AI, Next.js App Router, dan TypeScript.",
        mediaSrc: "/assets/projects/sks-master.png",
        detailUrl: "https://sks-master.vercel.app",
      },
    },
    {
      title: "Stry - AI Quiz Generator",
      badge: "AI Learning Platform",
      tech: "Next.js • Prisma ORM • Vercel",
      image: "/assets/projects/studee.png",
      link: "https://github.com/usamah-io",
      mediaItem: {
        id: "studee-preview",
        type: "image" as const,
        title: "Stry / Studee — AI Quiz & Study Generation System",
        category: "PROJECT PREVIEW",
        domain: "github.com/usamah-io",
        description:
          "Aplikasi pembelajaran otomatis dengan generator kuis AI dan manajemen materi interaktif.",
        mediaSrc: "/assets/projects/studee.png",
        detailUrl: "https://github.com/usamah-io",
      },
    },
    {
      title: "Budiman Cendikia",
      badge: "Situs Web Sekolah",
      tech: "Next.js • Tailwind CSS • SQL",
      image: "/assets/projects/budiman-cendikia.png",
      link: "https://github.com/usamah-io",
      mediaItem: {
        id: "budiman-cendikia-preview",
        type: "image" as const,
        title: "Budiman Cendikia — School Portal & Information Architecture",
        category: "PROJECT PREVIEW",
        domain: "github.com/usamah-io",
        description:
          "Sistem informasi dan portal profil sekolah terpadu dengan arsitektur web modern yang responsif dan cepat.",
        mediaSrc: "/assets/projects/budiman-cendikia.png",
        detailUrl: "https://github.com/usamah-io",
      },
    },
    {
      title: "Sertifikat Resmi Gemini Hackathon",
      badge: "Official Certificate",
      tech: "Gemini Unity Festival 2026",
      image: "/assets/sks-master-certificate.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "sks-cert",
        type: "image" as const,
        title: "Sertifikat Top 4 Finalis — Gemini Hackathon 2026",
        category: "CERTIFICATE",
        domain: "gemini-hackathon.dev",
        description:
          "Piagam penghargaan resmi atas capaian Top 4 Finalis Nasional Gemini Unity Festival 2026 dengan karya SKS-Master.",
        mediaSrc: "/assets/sks-master-certificate.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Indonesia Creative Competition 2026",
      badge: "Creative Code Teens",
      tech: "TMII Jakarta • 27 September 2026",
      image: "/assets/icc-2026-certificate.jpg",
      link: "/experience",
      mediaItem: {
        id: "icc-2026",
        type: "image" as const,
        title: "Sertifikat Partisipasi — Indonesia Creative Competition Batch 2",
        category: "COMPETITION",
        domain: "icc.dev/creative-code-teens",
        description:
          "Sertifikat partisipasi resmi Muhammad Usamah Abdurrahman pada kategori Creative Code Teens di Museum Listrik dan Energi Baru, TMII, Jakarta (27 September 2026).",
        mediaSrc: "/assets/icc-2026-certificate.jpg",
        detailUrl: "/assets/icc-2026-certificate.jpg",
      },
    },
    {
      title: "Hari Anak Nasional Tasikmalaya",
      badge: "Piagam Apresiasi Dokumentasi",
      tech: "30 Agustus 2026 • Pendopo Baru",
      image: "/assets/sertif-forum-anak.jpg",
      link: "/experience",
      mediaItem: {
        id: "han-cert",
        type: "image" as const,
        title: "Piagam Apresiasi — Hari Anak Nasional 2026",
        category: "VOLUNTEER & COMMUNITY",
        domain: "tasikmalayakab.go.id",
        description:
          "Piagam penghargaan dari Dinsos PPKB P3A Kabupaten Tasikmalaya dan Forum Anak Daerah atas dedikasi Divisi Dokumentasi.",
        mediaSrc: "/assets/sertif-forum-anak.jpg",
        detailUrl: "/assets/sertif-forum-anak.jpg",
      },
    },
    {
      title: "Operator Sound, Mixing & Live Stream",
      badge: "Live Event Tech",
      tech: "Peringatan Hari Anak Nasional 2026",
      image: "/assets/volunteer-hari-anak-nasional.jpg",
      link: "/experience",
      mediaItem: {
        id: "han-operator",
        type: "image" as const,
        title: "Dokumentasi Operator Audio Mixing & Live Stream HAN 2026",
        category: "EVENT PRODUCTION",
        domain: "tasikmalayakab.go.id",
        description:
          "Menjalankan tata suara digital, mixing mikrofon vokal, dan siaran langsung multichannel selama peringatan Hari Anak Nasional 2026.",
        mediaSrc: "/assets/volunteer-hari-anak-nasional.jpg",
        detailUrl: "/assets/volunteer-hari-anak-nasional.jpg",
      },
    },
    {
      title: "Relawan Pemulihan Longsor Cisarua",
      badge: "Aksi Tanggap Bencana",
      tech: "Bandung Barat • 10 Video Dokumentasi",
      image: "/assets/volunteerr.jpg",
      link: "/experience",
      mediaItem: {
        id: "cisarua-relief",
        type: "image" as const,
        title: "Dokumentasi Tanggap Darurat Bencana Longsor Cisarua",
        category: "HUMANITARIAN RELIEF",
        domain: "relawan.org/cisarua",
        description:
          "Aksi relawan kemanusiaan di titik longsor Cisarua, Bandung Barat: distribusi logistik darurat dan produksi 10 video dokumentasi lapangan.",
        mediaSrc: "/assets/volunteerr.jpg",
        detailUrl: "/assets/volunteerr.jpg",
      },
    },
    {
      title: "Arsitektur Sistem SKS-Master",
      badge: "System Architecture",
      tech: "Next.js • Server Actions • Gemini API",
      image: "/assets/arsitektur-sistem.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "sks-arch",
        type: "image" as const,
        title: "Diagram Arsitektur Sistem SKS-Master",
        category: "ARCHITECTURE",
        domain: "sks-master.vercel.app/docs",
        description:
          "Blueprint teknis integrasi LLM Gemini API, state management, caching, dan pipeline pemrosesan soal cerdas.",
        mediaSrc: "/assets/arsitektur-sistem.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Top 4 Finalis Gemini Hackathon",
      badge: "Leaderboard Resmi Juri",
      tech: "Peringkat Nasional • Unity Festival",
      image: "/assets/datakeseluruhan peserta.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "hackathon-leaderboard",
        type: "image" as const,
        title: "Leaderboard & Klasemen Penilaian Juri Gemini Hackathon 2026",
        category: "HACKATHON RESULT",
        domain: "gemini-hackathon.dev/leaderboard",
        description:
          "Tabel rekapitulasi nilai resmi seluruh peserta dari dewan juri Gemini Unity Festival 2026.",
        mediaSrc: "/assets/datakeseluruhan peserta.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Rincian Skor Penilaian Juri",
      badge: "Scorecard Resmi: 86.4",
      tech: "Inovasi 85 • Pitching 88 • Feasibility 88",
      image: "/assets/data sks.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "sks-scorecard",
        type: "image" as const,
        title: "Scorecard Penilaian SKS-Master — Skor Akhir 86.4",
        category: "HACKATHON SCORE",
        domain: "gemini-hackathon.dev/scores",
        description:
          "Detail poin evaluasi dewan juri meliputi kesesuaian SDGs, orisinalitas ide, kelayakan implementasi, dan presentasi final.",
        mediaSrc: "/assets/data sks.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Pengumuman Finalis WhatsApp",
      badge: "Pengumuman Resmi Seleksi",
      tech: "Babak Final Pitching Top Peserta",
      image: "/assets/pengumumanfinalis.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "wa-announcement",
        type: "image" as const,
        title: "Broadcast Pengumuman Finalis Resmi Panitia",
        category: "ANNOUNCEMENT",
        domain: "gemini-hackathon.dev",
        description:
          "Pemberitahuan resmi via grup koordinasi finalis untuk sesi pitching tatap muka dewan juri.",
        mediaSrc: "/assets/pengumumanfinalis.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Diagram Alur Data SKS-Master",
      badge: "Data Flow Pipeline",
      tech: "AI Engine • Prompt Engineering",
      image: "/hackathon/Screenshot 2026-07-26 103858.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "sks-flowchart",
        type: "image" as const,
        title: "Alur Eksekusi & Pemrosesan Prompt AI",
        category: "DATA PIPELINE",
        domain: "sks-master.vercel.app/flow",
        description:
          "Alur pengiriman prompt, parsing respons terstruktur JSON dari Gemini API, dan kalkulasi skor ujian real-time.",
        mediaSrc: "/hackathon/Screenshot 2026-07-26 103858.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Rekapitulasi Top Finalis",
      badge: "Komparasi Nilai Juri",
      tech: "Evaluasi Komprehensif Hackathon",
      image: "/hackathon/leaderboard.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "detail-leaderboard",
        type: "image" as const,
        title: "Rekap Nilai Top 4 Finalis",
        category: "HACKATHON METRICS",
        domain: "gemini-hackathon.dev",
        description:
          "Perbandingan metrik performa dan nilai kriteria dewan juri antar finalis terbaik.",
        mediaSrc: "/hackathon/leaderboard.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Evaluasi Aspek Teknis & Dampak",
      badge: "Breakdown Nilai Juri",
      tech: "SDGs Score 85 • UI/UX Usability",
      image: "/hackathon/rincian-nilai.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "breakdown-nilai",
        type: "image" as const,
        title: "Breakdown Aspek Penilaian Teknis",
        category: "EVALUATION METRICS",
        domain: "gemini-hackathon.dev",
        description:
          "Analisis nilai per komponen: arsitektur, kelayakan teknis, dampak sosial SDGs, dan demo aplikasi.",
        mediaSrc: "/hackathon/rincian-nilai.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      title: "Verifikasi Finalis Panitia",
      badge: "Konfirmasi Peserta Final",
      tech: "Gemini Innovation Hackathon 2026",
      image: "/hackathon/pengumuman-wa.png",
      link: "/hackathon-recap",
      mediaItem: {
        id: "pengumuman-wa-chat",
        type: "image" as const,
        title: "Konfirmasi Jadwal Presentasi Final",
        category: "FINAL PITCH",
        domain: "gemini-hackathon.dev",
        description:
          "Konfirmasi jadwal dan instruksi teknis babak presentasi langsung di hadapan dewan juri.",
        mediaSrc: "/hackathon/pengumuman-wa.png",
        detailUrl: "/hackathon-recap",
      },
    },
  ];

  useEffect(() => {
    if (!sectionRef.current || !titlesRef.current || !cardsContainerRef.current) return;

    const cards = cardsContainerRef.current.querySelectorAll<HTMLElement>(".featured-img-card");

    ticksRef.current = ticksRef.current.slice(0, INDICATOR_SEGMENTS * TICKS_BETWEEN);
    numsRef.current = numsRef.current.slice(0, INDICATOR_SEGMENTS);

    const isMobile = window.innerWidth < 640;
    const spread = isMobile ? 0.55 : 1.0;

    // Initially hide cards container and reset all cards deep in 3D space
    if (cardsContainerRef.current) {
      cardsContainerRef.current.style.opacity = "0";
      cardsContainerRef.current.style.visibility = "hidden";
    }

    cards.forEach((card, index) => {
      const coord = cardCoords[index % cardCoords.length];
      gsap.set(card, {
        x: coord.x * spread,
        y: coord.y * spread,
        z: -1600,
        scale: 0,
        opacity: 0,
        visibility: "hidden",
      });
    });

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        pin: true,
        pinSpacing: true,
        start: "top top",
        end: "+=500%",
        scrub: 0.85,
        anticipatePin: 1,
        onRefresh: () => {
          const currentSpread = window.innerWidth < 640 ? 0.55 : 1.0;
          cards.forEach((card, index) => {
            const coord = cardCoords[index % cardCoords.length];
            gsap.set(card, {
              x: coord.x * currentSpread,
              y: coord.y * currentSpread,
            });
          });
        },
        onLeave: () => {
          // Transition to next section: ensure container & cards are completely cleared
          if (cardsContainerRef.current) {
            cardsContainerRef.current.style.opacity = "0";
            cardsContainerRef.current.style.visibility = "hidden";
          }
          cards.forEach((card) => {
            gsap.set(card, {
              z: -1600,
              scale: 0,
              opacity: 0,
              visibility: "hidden",
            });
          });
        },
        onLeaveBack: () => {
          // Transition back to previous section: ensure container & cards are completely cleared
          if (cardsContainerRef.current) {
            cardsContainerRef.current.style.opacity = "0";
            cardsContainerRef.current.style.visibility = "hidden";
          }
          cards.forEach((card) => {
            gsap.set(card, {
              z: -1600,
              scale: 0,
              opacity: 0,
              visibility: "hidden",
            });
          });
        },
        onUpdate: (self) => {
          const progress = self.progress;

          // 1. Horizontal 500vw title strip translation
          if (titlesRef.current) {
            gsap.set(titlesRef.current, { x: -window.innerWidth * 4 * progress });
          }

          // 2. Master container visibility envelope:
          // Completely hidden before section starts (progress <= 0.01)
          // and completely hidden before next section takes over (progress >= 0.985)
          let contOp = 0;
          if (progress > 0.01 && progress < 0.985) {
            if (progress < 0.06) {
              contOp = (progress - 0.01) / 0.05;
            } else if (progress > 0.93) {
              contOp = Math.max(0, (0.985 - progress) / 0.055);
            } else {
              contOp = 1;
            }
          }

          if (cardsContainerRef.current) {
            cardsContainerRef.current.style.opacity = String(contOp);
            cardsContainerRef.current.style.visibility =
              contOp <= 0.001 ? "hidden" : "visible";
          }

          // 3. Individual card 3D flight & lifecycle
          cards.forEach((card, index) => {
            // Guard: completely hidden outside active range
            if (progress <= 0.01 || progress >= 0.985 || contOp <= 0.001) {
              gsap.set(card, {
                z: -1600,
                scale: 0,
                opacity: 0,
                visibility: "hidden",
              });
              return;
            }

            // Staggered emergence: cards appear one by one between progress 0.015 and 0.165
            const entryP = 0.015 + (index / cards.length) * 0.15;
            if (progress < entryP) {
              gsap.set(card, {
                z: -1600,
                scale: 0,
                opacity: 0,
                visibility: "hidden",
              });
              return;
            }

            // Staggered exit: cards finish flight and exit between progress 0.92 and 0.98
            const exitP = 0.92 + (index / cards.length) * 0.06;
            if (progress > exitP) {
              gsap.set(card, {
                z: -1600,
                scale: 0,
                opacity: 0,
                visibility: "hidden",
              });
              return;
            }

            // Flight cycle calculation (energetic, continuous 3D flow across slides)
            const cardScroll = progress - entryP;
            const cycleLen = 0.38;
            const val = (cardScroll / cycleLen) % 1.0;
            const flightWindow = 0.86;

            if (val < flightWindow) {
              const t = val / flightWindow;
              const z = -1600 + 2200 * t;
              const scale = Math.min(1, t * 6);

              let op = 1;
              if (t < 0.12) {
                op = t / 0.12;
              } else if (t > 0.84) {
                op = Math.max(0, (1 - t) / 0.16);
              }

              // Smooth fade-in at emergence & fade-out before exit
              const birthFade = Math.min(1, (progress - entryP) / 0.03);
              const deathFade = Math.min(1, (exitP - progress) / 0.03);
              const finalOpacity = op * birthFade * deathFade * contOp;

              if (finalOpacity > 0.01) {
                gsap.set(card, {
                  z,
                  scale,
                  opacity: finalOpacity,
                  visibility: "visible",
                });
              } else {
                gsap.set(card, {
                  z: -1600,
                  scale: 0,
                  opacity: 0,
                  visibility: "hidden",
                });
              }
            } else {
              // Reset window behind camera
              gsap.set(card, {
                z: -1600,
                scale: 0,
                opacity: 0,
                visibility: "hidden",
              });
            }
          });

          // 4. Update vertical ruler indicator ticks
          const ticks = ticksRef.current;
          const step = ticks.length > 0 ? 1 / ticks.length : 1;
          ticks.forEach((tick, i) => {
            if (!tick) return;
            tick.style.opacity = progress > i * step ? "1" : "0.2";
          });

          // 5. Update active slide number (01 to 05)
          const active = Math.min(
            INDICATOR_SEGMENTS - 1,
            Math.floor(progress * INDICATOR_SEGMENTS + 0.001)
          );
          numsRef.current.forEach((num, i) => {
            if (!num) return;
            num.classList.toggle("is-active", i === active);
          });

          // 6. Update tracking dot position
          if (dotRef.current) {
            dotRef.current.style.top = `${1.15 + progress * 12.2}em`;
          }
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="projects"
        className="featured-work relative w-screen h-screen overflow-hidden bg-background text-foreground"
      >
        {/* 500vw Title Strip Header translating horizontally */}
        <div
          ref={titlesRef}
          className="featured-titles relative w-[500vw] h-full flex items-center will-change-transform z-10"
        >
          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center px-8 text-center">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">
              PROJECT PORTFOLIO [ 16 ]
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter">
              Proyek Unggulan
            </h1>
          </div>

          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center px-8 text-center">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">
              GEMINI HACKATHON 2026
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter">
              SKS-Master Platform
            </h1>
          </div>

          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center px-8 text-center">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">
              AI LEARNING SYSTEM
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter">
              Stry Quiz Generator
            </h1>
          </div>

          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center px-8 text-center">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">
              SCHOOL WEBSITE ARCHITECTURE
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter">
              Budiman Cendikia
            </h1>
          </div>

          <div className="w-[100vw] flex-shrink-0 flex flex-col justify-center items-center px-8 text-center">
            <span className="font-mono text-xs font-bold text-emerald-500 uppercase tracking-widest mb-2">
              FULL-STACK, COMPETITIONS & IMPACT
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tighter">
              Hackathon & Works
            </h1>
          </div>
        </div>

        {/* 3D Fly-Through Cards Container (perspective: 500px) */}
        <div
          ref={cardsContainerRef}
          className="featured-images absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none z-20"
          style={{ perspective: "500px", transformStyle: "preserve-3d", opacity: 0, visibility: "hidden" }}
        >
          {flyThroughCards.map((card, idx) => (
            <div
              key={idx}
              onClick={() => {
                if (card.mediaItem) {
                  setSelectedMedia(card.mediaItem);
                } else if (card.link) {
                  window.open(card.link, card.link.startsWith("/") ? "_self" : "_blank");
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={card.title}
              className="featured-img-card group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[170px] sm:w-[320px] sm:h-[225px] md:w-[360px] md:h-[250px] overflow-hidden pointer-events-auto rounded-2xl border-4 border-foreground shadow-[0_16px_40px_rgba(0,0,0,0.45)] bg-zinc-950 cursor-pointer select-none transition-shadow hover:shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />

              {/* Top Corner Neubrutalist Badge */}
              <div className="absolute top-2 left-2 z-10 pointer-events-none">
                <span className="inline-block bg-background/90 dark:bg-black/85 backdrop-blur-md text-foreground font-mono text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded border border-foreground/20 shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Bottom Info Gradient Bar */}
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent p-2.5 sm:p-3 pointer-events-none text-left">
                <p className="text-[11px] sm:text-xs font-black text-white truncate drop-shadow-sm">
                  {card.title}
                </p>
                <p className="text-[9px] sm:text-[10px] font-mono text-emerald-400 font-bold truncate">
                  {card.tech}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Vertical 01–05 progress ruler */}
        <aside className="featured-work-indicator" aria-hidden="true">
          <span ref={dotRef} className="indicator-dot" />
          {Array.from({ length: INDICATOR_SEGMENTS }).map((_, segment) => (
            <div key={segment} className="flex flex-col items-center gap-[0.35em]">
              <p
                ref={(el) => {
                  if (el) numsRef.current[segment] = el;
                }}
                className={`indicator-num ${segment === 0 ? "is-active" : ""}`}
              >
                {String(segment + 1).padStart(2, "0")}
              </p>
              {segment < INDICATOR_SEGMENTS - 1 &&
                Array.from({ length: TICKS_BETWEEN }).map((_, tick) => {
                  const tickIndex = segment * TICKS_BETWEEN + tick;
                  return (
                    <span
                      key={`${segment}-${tick}`}
                      ref={(el) => {
                        if (el) ticksRef.current[tickIndex] = el;
                      }}
                      className="indicator-tick"
                    />
                  );
                })}
            </div>
          ))}
        </aside>

        {/* Footer Bar: PROJECT PORTFOLIO [ 16 ] + /////////////////// */}
        <div className="featured-work-footer absolute bottom-0 w-full p-6 flex justify-between items-center z-30 font-mono text-xs font-bold text-foreground border-t border-foreground/20">
          <div>PROJECT PORTFOLIO [ 16 ]</div>
          <div className="text-emerald-500">///////////////////</div>
          <div>MUHAMMAD USAMAH</div>
        </div>
      </section>

      {/* Lightbox Modal for Full Resolution Viewing */}
      <VolunteerLightbox media={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </>
  );
}
