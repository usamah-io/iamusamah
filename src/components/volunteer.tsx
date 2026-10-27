"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "./app-context";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import VolunteerLightbox, { LightboxMedia } from "./volunteer-lightbox";
import { ArrowDown, Eye, ExternalLink } from "lucide-react";

export default function Volunteer() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<LightboxMedia | null>(
    null,
  );

  // 7 Curated Experiences ordered chronologically descending (newest first)
  const cards = [
    {
      id: "card-icc",
      categories: ["competition"],
      bgColor: "bg-[#ed6a5a] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "KOMPETISI #01",
      location: "TMII, JAKARTA",
      date: isIndonesian ? "27 September 2026" : "September 27, 2026",
      title: "INDONESIA CREATIVE COMPETITION 2026",
      role: isIndonesian
        ? "Peserta — Creative Code Teens"
        : "Participant — Creative Code Teens",
      desc: isIndonesian
        ? "Berpartisipasi dalam Indonesia Creative Competition Batch 2 pada kategori Creative Code Teens di Museum Listrik dan Energi Baru, TMII, Jakarta. Sebuah kompetisi yang mengangkat kreativitas dan inovasi di bidang teknologi."
        : "Participated in Indonesia Creative Competition Batch 2 under Creative Code Teens category at Museum Listrik dan Energi Baru, TMII, Jakarta, showcasing technology innovation and creativity.",
      type: "image" as const,
      imageSrc: "/assets/icc-2026-certificate.jpg",
      orientation: "landscape" as const,
      mediaItem: {
        id: "icc-2026",
        type: "image" as const,
        title: "Sertifikat Partisipasi - Indonesia Creative Competition 2026",
        category: "COMPETITION",
        domain: "icc.dev/creative-code-teens",
        description: isIndonesian
          ? "Sertifikat partisipasi resmi Muhammad Usamah Abdurrahman sebagai peserta Indonesia Creative Competition Batch 2 kategori Creative Code Teens di Museum Listrik dan Energi Baru, TMII, Jakarta (27 September 2026)."
          : "Official certificate of participation for Muhammad Usamah Abdurrahman as participant in Indonesia Creative Competition Batch 2, Creative Code Teens category at Museum Listrik dan Energi Baru, TMII, Jakarta (September 27, 2026).",
        mediaSrc: "/assets/icc-2026-certificate.jpg",
        detailUrl: "/assets/icc-2026-certificate.jpg",
      },
    },
    {
      id: "card-han",
      categories: ["volunteer", "community"],
      bgColor: "bg-[#f4f1bb] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "VOLUNTEER #01",
      location: "PENDOPO BARU, KAB. TASIKMALAYA",
      date: isIndonesian ? "30 Agustus 2026" : "August 30, 2026",
      title: isIndonesian
        ? "Hari Anak Nasional 2026 & Forum Anak Daerah"
        : "National Children's Day 2026 & Regional Children's Forum",
      role: isIndonesian
        ? "Volunteer Divisi Dokumentasi & Operator Audio/Stream"
        : "Documentation Volunteer & Audio/Stream Operator",
      desc: isIndonesian
        ? "Bertugas aktif sebagai Volunteer Divisi Dokumentasi sekaligus operator sound system, audio mixing, dan live stream dalam menyukseskan Peringatan Hari Anak Nasional 2026 Tingkat Kab. Tasikmalaya bersama Dinsos PPKB P3A dan Forum Anak Daerah."
        : "Actively served as Documentation Division Volunteer and sound system, audio mixing, and live stream operator for the 2026 National Children's Day in Tasikmalaya Regency with Dinsos PPKB P3A and Regional Children's Forum.",
      type: "image" as const,
      imageSrc: "/assets/sertif-forum-anak.jpg",
      orientation: "landscape" as const,
      mediaItem: {
        id: "sertif-han-tasik",
        type: "image" as const,
        title: isIndonesian
          ? "Sertifikat Volunteer Dokumentasi - Hari Anak Nasional 2026"
          : "Documentation Volunteer Certificate - National Children's Day 2026",
        category: "VOLUNTEER & FORUM ANAK",
        domain: "volunteer.dev/hari-anak-tasik",
        description: isIndonesian
          ? "Sertifikat penghargaan resmi Kepala Dinas Sosial PPKB P3A Kab. Tasikmalaya kepada Muhammad Usamah Abdurrahman atas dedikasi dan kontribusi aktif sebagai Volunteer Divisi Dokumentasi Hari Anak Nasional 2026 di Pendopo Baru Kab. Tasikmalaya."
          : "Official certificate of appreciation from Dinsos PPKB P3A Tasikmalaya Regency to Muhammad Usamah Abdurrahman as Documentation Volunteer for 2026 National Children's Day.",
        mediaSrc: "/assets/sertif-forum-anak.jpg",
        detailUrl: "/assets/volunteer-hari-anak-nasional.jpg",
      },
    },
    {
      id: "card-gemini",
      categories: ["hackathon", "competition"],
      bgColor: "bg-[#9bc1bc] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "HACKATHON #01",
      location: "TASIKMALAYA (HYBRID)",
      date: isIndonesian ? "28 Juli 2026" : "July 28, 2026",
      title: "Gemini Innovation Hackathon 2026",
      role: isIndonesian
        ? "Lead Developer — SKS Master (Platform Ujian AI)"
        : "Lead Developer — SKS Master (AI Exam Platform)",
      desc: isIndonesian
        ? "Memimpin tim SKS-Master merancang & membangun platform ujian interaktif berbasis AI Google Gemini pada ajang Gemini Innovation Hackathon at Gemini Unity Festival 2026. Meraih Top 4 Finalis dari 186 peserta dengan Nilai Akhir Resmi 86,4."
        : "Led the SKS-Master team designing & building an interactive AI exam platform powered by Google Gemini API at Gemini Innovation Hackathon at Gemini Unity Festival 2026. Placed Top 4 Finalist out of 186 participants with official score 86.4.",
      type: "image" as const,
      imageSrc: "/assets/sks-master-certificate.png",
      orientation: "landscape" as const,
      targetUrl: "/hackathon-recap",
      mediaItem: {
        id: "gemini-hackathon-2026",
        type: "image" as const,
        title: "Sertifikat SKS Master - Gemini Innovation Hackathon 2026",
        category: "HACKATHON",
        domain: "hackathon.dev/sks-master",
        description: isIndonesian
          ? "Sertifikat penghargaan resmi tim SKS Master atas partisipasi & pencapaian Top 4 Finalis Gemini Innovation Hackathon 2026 oleh Google Student Ambassador dan UKM KPM Universitas Siliwangi (Nilai Akhir Resmi 86,4)."
          : "Official certificate for SKS Master team as Top 4 Finalist at Gemini Innovation Hackathon 2026 by Google Student Ambassador and UNSIL (Final Score 86.4).",
        mediaSrc: "/assets/sks-master-certificate.png",
        detailUrl: "/hackathon-recap",
      },
    },
    {
      id: "card-budiman",
      categories: ["project"],
      bgColor: "bg-[#e6ebe0] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "PROJECT #01",
      location: "TASIKMALAYA, JAWA BARAT",
      date: "2025 - 2026",
      title: "Budiman Cendikia School Platform",
      role: isIndonesian
        ? "Full-Stack Developer & System Designer"
        : "Full-Stack Developer & System Designer",
      desc: isIndonesian
        ? "Mengembangkan website profil dan sistem informasi sekolah Budiman Cendikia dengan Decoupled Architecture memakai Next.js, TypeScript, PHP Blade, dan integrasi basis data SQL yang cepat, aman, dan responsif."
        : "Engineered the official school profile website and portal architecture for Budiman Cendikia utilizing Next.js, TypeScript, PHP Blade, and optimized SQL databases.",
      type: "image" as const,
      imageSrc: "/assets/projects/budiman-cendikia.png",
      orientation: "landscape" as const,
      mediaItem: {
        id: "budiman-cendikia-exp",
        type: "image" as const,
        title: "Budiman Cendikia — School Portal & Information Architecture",
        category: "WEB DEVELOPMENT",
        domain: "github.com/usamah-io",
        description: isIndonesian
          ? "Pengembangan sistem web sekolah mandiri dengan performa tinggi, layout responsif, dan struktur data terpadu untuk kebutuhan publikasi dan akademik siswa."
          : "Independent school website platform with modern decoupled architecture, responsive layout, and integrated academic data management.",
        mediaSrc: "/assets/projects/budiman-cendikia.png",
        detailUrl: "https://github.com/usamah-io",
      },
    },
    {
      id: "card-cisarua",
      categories: ["volunteer", "community"],
      bgColor: "bg-[#141414] text-white border-white/20",
      accentTag: "bg-white/10 text-emerald-400 border-white/20",
      btnClass: "bg-emerald-500 text-black hover:bg-emerald-400",
      badge: "VOLUNTEER #02",
      location: "CISARUA, BANDUNG BARAT",
      date: "2024 - 2025",
      title: isIndonesian
        ? "Aksi Tanggap Darurat & Posko Pemulihan Longsor Cisarua"
        : "Cisarua Landslide Relief & Emergency Recovery Action",
      role: isIndonesian
        ? "Tim Relawan Tanggap Darurat & Posko Logistik"
        : "Emergency Response & Relief Post Volunteer",
      desc: isIndonesian
        ? "Terjun langsung dalam aksi kemanusiaan bencana longsor Cisarua, Bandung Barat: briefing koordinasi tim relawan, pendataan dan penyaluran sembako ke rumah warga, operasional dapur umum posko, dan dokumentasi penutupan aksi relawan."
        : "Participated directly in humanitarian relief for the Cisarua landslide disaster in West Bandung: volunteer coordination briefings, door-to-door food package distribution, soup kitchen operations, and field documentation.",
      type: "video" as const,
      imageSrc: "/assets/volunteerr.jpg",
      orientation: "portrait" as const,
      targetUrl: "/volunteer",
      mediaItem: {
        id: "vol-1",
        type: "video" as const,
        title: isIndonesian
          ? "Aksi Tanggap Darurat Longsor Cisarua"
          : "Cisarua Landslide Emergency Response",
        category: "TANGGAP DARURAT",
        domain: "volunteer.dev/cisarua-part-1",
        description: isIndonesian
          ? "Dokumentasi tim relawan saat tiba di lokasi bencana longsor Cisarua, pembagian tugas evakuasi, penyaluran logistik sembako, dan operasional posko dapur umum."
          : "Documentation of volunteer team arrival at Cisarua landslide location, evacuation duties, food aid distribution, and relief post soup kitchen operations.",
        mediaSrc:
          "https://lh3.googleusercontent.com/d/1PuoAcNuSvaQ5WBZ7OuhbPxEdoLxMuf3A",
        detailUrl:
          "https://drive.google.com/file/d/1PuoAcNuSvaQ5WBZ7OuhbPxEdoLxMuf3A/view",
      },
    },
    {
      id: "card-san",
      categories: ["community", "volunteer"],
      bgColor: "bg-[#36c9c6] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "KOMUNITAS #01",
      location: "TASIKMALAYA & JAWA BARAT",
      date: "2024 - 2025",
      title: isIndonesian
        ? "Komunitas Senyum Anak Nusantara (SAN)"
        : "Senyum Anak Nusantara Community (SAN)",
      role: isIndonesian
        ? "Relawan Edukasi & Dokumentasi Sosial"
        : "Youth Education & Field Documentation Volunteer",
      desc: isIndonesian
        ? "Berkontribusi dalam inisiatif sosial Senyum Anak Nusantara yang berfokus pada pendampingan edukatif, keceriaan anak, pengenalan literasi digital, serta dokumentasi visual kegiatan kerelawanan kepemudaan."
        : "Contributed to Senyum Anak Nusantara youth social initiatives focusing on educational mentoring, digital literacy introduction, and visual documentation of community volunteer projects.",
      type: "image" as const,
      imageSrc: "/assets/Senyumanaknusantara.jpg",
      orientation: "portrait" as const,
      targetUrl: "/experience/senyum-anak-nusantara",
      mediaItem: {
        id: "san-community",
        type: "image" as const,
        title: isIndonesian
          ? "Dokumentasi Aksi Komunitas Senyum Anak Nusantara"
          : "Senyum Anak Nusantara Community Action Documentation",
        category: "COMMUNITY & YOUTH",
        domain: "komunitas.org/san",
        description: isIndonesian
          ? "Dokumentasi kegiatan kerelawanan sosial pemuda dalam menyelenggarakan kegiatan edukatif, interaktif, dan apresiasi bakat anak-anak nusantara."
          : "Photo documentation of youth volunteer programs delivering interactive learning, creative sessions, and empowerment for children across the region.",
        mediaSrc: "/assets/Senyumanaknusantara.jpg",
        detailUrl: "/experience/senyum-anak-nusantara",
      },
    },
    {
      id: "card-jaz",
      categories: ["education"],
      bgColor: "bg-[#f08080] text-zinc-950 border-zinc-950",
      accentTag: "bg-black/10 text-zinc-950 border-zinc-950/20",
      btnClass: "bg-zinc-950 text-white hover:bg-zinc-800",
      badge: "EDUCATION #01",
      location: "TASIKMALAYA, JAWA BARAT",
      date: isIndonesian ? "2024 - Sekarang" : "2024 - Present",
      title: "JAZ ACADEMY KOMUNITAS BELAJAR",
      role: isIndonesian
        ? "Siswa Aktif — Software Engineering & AI Workflows"
        : "Active Student — Software Engineering & AI Workflows",
      desc: isIndonesian
        ? "Mengikuti pendidikan akselerasi teknologi di Jaz Academy: memperdalam Full-Stack Web Development (Next.js, TypeScript), arsitektur perangkat lunak modern, integrasi AI Gemini, serta pembuatan konten edukasi pemrograman."
        : "Accelerating modern software engineering capabilities at Jaz Academy: mastering Full-Stack Next.js/TypeScript architecture, Gemini AI integration, and digital educational tech content creation.",
      type: "image" as const,
      imageSrc: "/assets/jazacademy.png",
      orientation: "landscape" as const,
      targetUrl: "https://jazacademy.id/",
      mediaItem: {
        id: "jaz-academy-exp",
        type: "image" as const,
        title: "JAZ Academy — Youth Software Engineering Education",
        category: "EDUCATION",
        domain: "jazacademy.id",
        description: isIndonesian
          ? "Akselerasi keahlian pemrograman modern, rekayasa perangkat lunak, dan kepemimpinan proyek digital berbasis teknologi web terkini."
          : "Intensive youth software engineering track focusing on modern full-stack web technologies, AI workflows, and digital project execution.",
        mediaSrc: "/assets/jazacademy.png",
        detailUrl: "https://jazacademy.id/",
      },
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = sectionRef.current?.querySelectorAll(".service-card");
      if (!cardEls || cardEls.length === 0) return;

      // GSAP Stacking Animation: As each card scrolls up, the card below scales down slightly
      cardEls.forEach((card, index) => {
        if (index === cardEls.length - 1) return;

        gsap.to(card, {
          scale: 0.93,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[index + 1],
            start: "top top+=140",
            end: "top top+=40",
            scrub: true,
          },
        });
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  const handleOpenLightbox = (item: LightboxMedia) => {
    setSelectedMedia(item);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="experience"
        className="services relative w-full max-w-5xl mx-auto px-4 py-20 border-t-2 border-foreground/20 space-y-12"
      >
        {/* Services Header */}
        <div className="services-header text-center space-y-4 py-6">
          <div className="services-profile-icon w-20 h-20 mx-auto rounded-2xl overflow-hidden border-4 border-foreground shadow-lg bg-zinc-900 flex items-center justify-center font-mono text-xl font-black text-emerald-400">
            MU
          </div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
            {isIndonesian
              ? "Rekam Jejak & Pengalaman"
              : "Track Record & Activities"}
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-foreground tracking-tight max-w-3xl mx-auto leading-none">
            {isIndonesian
              ? "Pengalaman, Kompetisi & Relawan"
              : "Experience, Competitions & Volunteering"}
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
            {isIndonesian
              ? "Dokumentasi resmi kompetisi coding, inovasi hackathon, arsitektur proyek web, aksi relawan kemanusiaan, dan kontribusi kepemudaan."
              : "Official documentation of coding competitions, hackathon innovations, web projects, volunteer relief actions, and youth initiatives."}
          </p>
          <div className="services-header-arrow-icon flex justify-center pt-2 text-foreground">
            <ArrowDown className="w-8 h-8 animate-bounce text-emerald-500" />
          </div>
        </div>

        {/* Stacking Cards Sticky Sequential Stack (7 Curated Experiences) */}
        <div className="relative space-y-12">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className={`service-card sticky top-24 sm:top-28 w-full rounded-[2em] border-4 ${card.bgColor} shadow-2xl p-6 sm:p-10 transition-all duration-300 min-h-[380px] flex flex-col justify-between`}
            >
              {/* Meta Top Bar */}
              <div className="flex flex-wrap justify-between items-center font-mono text-xs border-b border-current/20 pb-4 mb-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-black tracking-widest uppercase px-3 py-1 rounded-full border ${card.accentTag}`}
                  >
                    {card.badge}
                  </span>
                  <span className="font-bold opacity-80">{card.date}</span>
                </div>
                <span className="font-bold tracking-wider">
                  {card.location}
                </span>
              </div>

              {/* Main Content Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1 my-2">
                <div className="md:col-span-7 lg:col-span-8 space-y-3">
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                    {card.title}
                  </h3>
                  <div className="font-mono text-xs sm:text-sm font-bold uppercase opacity-85">
                    {card.role}
                  </div>
                  <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed max-w-xl">
                    {card.desc}
                  </p>
                </div>

                {/* Responsive Image Column: Adapts ratio to original orientation (3:4 portrait for SAN, 16:10 for landscape) */}
                <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
                  <div
                    onClick={() => {
                      if (card.targetUrl) {
                        if (card.targetUrl.startsWith("http")) {
                          window.open(
                            card.targetUrl,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        } else {
                          window.location.href = card.targetUrl;
                        }
                      } else {
                        handleOpenLightbox(card.mediaItem);
                      }
                    }}
                    className={`service-card-img w-full rounded-2xl overflow-hidden border-2 border-current/30 shadow-md bg-black/20 cursor-pointer group relative ${
                      card.orientation === "portrait"
                        ? "max-w-[260px] aspect-[3/4] max-h-[340px]"
                        : "max-w-[360px] aspect-[16/10] max-h-[240px]"
                    }`}
                    title={
                      isIndonesian
                        ? "Klik untuk melihat pratinjau penuh"
                        : "Click to view full preview"
                    }
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-[11px] font-black uppercase px-3 py-1.5 rounded-full bg-white text-black border border-black shadow-sm flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {card.targetUrl?.startsWith("http")
                          ? isIndonesian
                            ? "Kunjungi"
                            : "Visit"
                          : card.targetUrl?.startsWith("/")
                            ? isIndonesian
                              ? "Detail"
                              : "Details"
                            : isIndonesian
                              ? "Perbesar"
                              : "Zoom"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button & Indicator (Single Unified "Lihat Selengkapnya" Button) */}
              <div className="pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {card.targetUrl?.startsWith("http") ? (
                    <a
                      href={card.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </a>
                  ) : card.targetUrl?.startsWith("/") ? (
                    <Link
                      href={card.targetUrl}
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleOpenLightbox(card.mediaItem)}
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </button>
                  )}
                </div>

                <span className="font-mono text-xs font-extrabold opacity-60">
                  {`0${idx + 1} // 0${cards.length}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <VolunteerLightbox
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
}
