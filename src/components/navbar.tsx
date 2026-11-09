"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./app-context";
import { usePageTransition } from "./PageTransition";
import content from "@/data/content.json";
import { Sun, Moon, ChevronDown } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>("explore");

  const { language, setLanguage, theme, toggleTheme } = useApp();
  const { navigateTo } = usePageTransition();
  const isIndonesian = language === "id";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close overlay on route change
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      setIsOpen(false);
    }
  }, [pathname]);

  const toggleCategory = (catId: string) => {
    setActiveCategory((prev) => (prev === catId ? null : catId));
  };

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      gsap.fromTo(
        ".nav-overlay-bg",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".nav-cat-el",
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.45,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.08,
        }
      );
      gsap.fromTo(
        ".nav-footer-el",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "power3.out",
          delay: 0.25,
        }
      );
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      gsap.to(".nav-overlay-bg", {
        opacity: 0,
        duration: 0.25,
        ease: "power2.in",
        onComplete: () => setIsOpen(false),
      });
    }
  };

  const handleNavClick = (href: string) => {
    if (isOpen) {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
      setIsOpen(false);
    }
    navigateTo(href);
  };

  // 5 Expandable Navigation Categories inside the MENU Overlay
  const navCategories = [
    {
      id: "explore",
      num: "01",
      title: "EXPLORE",
      subtitle: isIndonesian ? "Beranda, Proyek & Aplikasi" : "Home, Projects & Apps",
      items: [
        {
          href: "/",
          label: isIndonesian ? "Beranda" : "Home",
          desc: isIndonesian ? "Halaman utama portofolio" : "Main portfolio page",
        },
        {
          href: "/projects",
          label: isIndonesian ? "Proyek" : "Projects",
          desc: isIndonesian ? "Karya software & studi kasus" : "Software works & case studies",
        },
        {
          href: "/apps",
          label: isIndonesian ? "Aplikasi" : "Applications",
          desc: isIndonesian ? "SKS-Master, Quran Search, Studee, PyQuest" : "Interactive web applications catalog",
        },
      ],
    },
    {
      id: "experience",
      num: "02",
      title: "EXPERIENCE",
      subtitle: isIndonesian
        ? "Speaking, Hackathon, Volunteer & Lainnya"
        : "Speaking, Hackathon, Volunteer & More",
      items: [
        {
          href: "/experience/seminar-nasional-programming",
          label: isIndonesian
            ? "Speaking — Seminar Nasional Programming"
            : "Speaking — National Programming Seminar",
          desc: isIndonesian
            ? "Speaker · Python for Data Science Fundamentals"
            : "Speaker · Python for Data Science Fundamentals",
          badge: "SPEAKER",
        },
        {
          href: "/hackathon-recap",
          label: isIndonesian
            ? "Hackathon — Gemini Innovation Hackathon"
            : "Hackathon — Gemini Innovation Hackathon",
          desc: isIndonesian
            ? "Lead Developer SKS-Master · Top 4 Finalist"
            : "Lead Developer SKS-Master · Top 4 Finalist",
          badge: "TOP 4",
        },
        {
          href: "/experience/senyum-anak-nusantara",
          label: isIndonesian
            ? "Volunteer — Senyum Anak Nusantara"
            : "Volunteer — Senyum Anak Nusantara",
          desc: isIndonesian
            ? "Relawan Edukasi & Dokumentasi Sosial"
            : "Youth Education & Media Volunteer",
        },
        {
          href: "/volunteer",
          label: isIndonesian
            ? "Volunteer — Aksi Tanggap Darurat Cisarua"
            : "Volunteer — Cisarua Landslide Relief",
          desc: isIndonesian
            ? "Relawan lapangan & logistik bencana"
            : "Disaster relief & logistics volunteer",
        },
        {
          href: "/experience",
          label: isIndonesian ? "Other Experiences" : "Other Experiences",
          desc: isIndonesian
            ? "Kompetisi coding, pendidikan & arsip lengkap"
            : "Coding competitions, education & full archive",
        },
      ],
    },
    {
      id: "skills",
      num: "03",
      title: "SKILLS & TECHNOLOGY",
      subtitle: isIndonesian
        ? "Tech Stack, Web Dev & AI Tools"
        : "Tech Stack, Web Dev & AI Tools",
      items: [
        {
          href: "/skills",
          label: isIndonesian ? "Skill & Tech Stack" : "Skill & Tech Stack",
          desc: isIndonesian
            ? "Web Development, Programming & Frameworks"
            : "Web Development, Programming & Frameworks",
        },
        {
          href: "/tools",
          label: isIndonesian ? "AI & Tools" : "AI & Tools",
          desc: isIndonesian
            ? "Perangkat lunak, workflow & integrasi AI"
            : "Daily software, workflows & AI integration",
        },
      ],
    },
    {
      id: "about",
      num: "04",
      title: "ABOUT & PROFILE",
      subtitle: isIndonesian
        ? "Perkenalan, Pendidikan, Beasiswa & Koneksi"
        : "Introduction, Education, Scholarship & Connect",
      items: [
        {
          href: "/about",
          label: isIndonesian ? "Tentang Saya" : "About Me",
          desc: isIndonesian
            ? "Perkenalan singkat, latar belakang & minat"
            : "Short introduction, background & interests",
        },
        {
          href: "/experience",
          label: isIndonesian ? "Pendidikan & Rekam Jejak" : "Education & Track Record",
          desc: isIndonesian
            ? "Jazacademy, SMPT Bugelan & riwayat belajar"
            : "Jazacademy, SMPT Bugelan & learning history",
        },
        {
          href: "/scholarship",
          label: isIndonesian ? "Profil Beasiswa SMA" : "High School Scholarship",
          desc: isIndonesian
            ? "Ringkasan akademik & portofolio beasiswa"
            : "Academic summary & scholarship profile",
          badge: "STAR",
        },
        {
          href: "/connect",
          label: isIndonesian ? "Koneksi & Jejaring" : "Connect & Network",
          desc: isIndonesian
            ? "Media sosial, GitHub & saluran komunikasi"
            : "Social media, GitHub & communication channels",
        },
        {
          href: "/contact",
          label: isIndonesian ? "Hubungi Saya" : "Contact Me",
          desc: isIndonesian
            ? "Formulir pesan & kontak email langsung"
            : "Message form & direct email contact",
        },
      ],
    },
    {
      id: "more",
      num: "05",
      title: "MORE",
      subtitle: isIndonesian
        ? "Artikel, Aktivitas & FAQ"
        : "Articles, Activity & FAQ",
      items: [
        {
          href: "/articles",
          label: isIndonesian ? "Artikel & Edukasi" : "Articles & Education",
          desc: isIndonesian
            ? "Konten video programming & AI (@uus.code)"
            : "Programming & AI educational content (@uus.code)",
        },
        {
          href: "/activity",
          label: isIndonesian ? "Aktivitas & Statistik" : "Activity & Stats",
          desc: isIndonesian
            ? "Statistik koding WakaTime & GitHub"
            : "WakaTime coding metrics & GitHub activity",
        },
        {
          href: "/faq",
          label: isIndonesian ? "FAQ" : "FAQ",
          desc: isIndonesian
            ? "Pertanyaan yang sering diajukan"
            : "Frequently asked questions",
        },
      ],
    },
  ];

  if (!mounted) {
    return (
      <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-5xl px-4 sm:px-6 pointer-events-none">
        <div className="flex items-center justify-between w-full pointer-events-auto">
          <div className="font-mono text-sm sm:text-base font-black tracking-widest text-emerald-500 bg-background/90 dark:bg-zinc-900/90 backdrop-blur-md border border-foreground/30 rounded-full px-4 py-2 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)] flex items-center">
            <span>M * U</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="font-mono text-xs font-black uppercase px-4 py-2 rounded-full bg-emerald-500 text-black border border-black shadow-[3px_3px_0px_#000000]">
              Menu
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <>
      {/* ORIGINAL NAVBAR: Only Logo M * U on Left, ID/EN + Theme + MENU on Right */}
      <header className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-[100] w-full max-w-5xl px-4 sm:px-6 pointer-events-none">
        <div className="flex items-center justify-between w-full">
          {/* Logo Brand M * U */}
          <Link
            href="/"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("/");
            }}
            className="font-mono text-sm sm:text-base font-black tracking-widest text-emerald-500 hover:text-emerald-400 transition flex items-center bg-background/90 dark:bg-zinc-900/90 backdrop-blur-md border border-foreground/30 rounded-full px-4 py-2 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)] hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] pointer-events-auto"
          >
            <span>M * U</span>
          </Link>

          {/* Right Action Controls: ID/EN, Theme, MENU */}
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
            {/* Language Switcher ID | EN */}
            <div className="flex items-center text-[11px] font-mono font-extrabold bg-background/90 dark:bg-zinc-900/90 backdrop-blur-md text-foreground rounded-full px-2.5 sm:px-3 py-1.5 gap-1 border border-foreground/30 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)]">
              <button
                onClick={() => setLanguage("id")}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === "id"
                    ? "text-emerald-500 font-black"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                ID
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === "en"
                    ? "text-emerald-500 font-black"
                    : "opacity-60 hover:opacity-100"
                }`}
              >
                EN
              </button>
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-background/90 dark:bg-zinc-900/90 backdrop-blur-md text-foreground border border-foreground/30 hover:border-emerald-500/40 transition cursor-pointer shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)] flex items-center justify-center"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-emerald-400" />
              ) : (
                <Moon className="w-4 h-4 text-amber-500" />
              )}
            </button>

            {/* Menu Toggle Button */}
            <button
              onClick={toggleMenu}
              className="font-mono text-xs font-black uppercase px-3.5 sm:px-5 py-2 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border border-black transition-transform duration-300 active:scale-95 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)] cursor-pointer"
            >
              {isOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>

      {/* FULLSCREEN NAVIGATION OVERLAY */}
      {isOpen && (
        <div className="nav-overlay-bg fixed inset-0 z-[120] bg-zinc-950/98 text-white p-6 sm:p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-white/20 pb-5 max-w-4xl mx-auto w-full shrink-0">
            <span className="font-mono text-lg sm:text-xl font-black text-emerald-400 tracking-widest">
              M * U // NAVIGATION
            </span>
            <button
              onClick={toggleMenu}
              className="font-mono text-xs font-extrabold px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              CLOSE ✕
            </button>
          </div>

          {/* Expandable Categories Accordion (Desktop & Mobile) */}
          <div className="my-auto py-6 sm:py-8 max-w-4xl mx-auto w-full space-y-3">
            {navCategories.map((cat) => {
              const isExpanded = activeCategory === cat.id;

              return (
                <div
                  key={cat.id}
                  className={`nav-cat-el rounded-2xl border transition-colors overflow-hidden ${
                    isExpanded
                      ? "border-emerald-500/50 bg-white/[0.04]"
                      : "border-white/15 bg-white/[0.02] hover:border-white/30"
                  }`}
                >
                  {/* Category Header Trigger */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(cat.id)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="font-mono text-xs sm:text-sm font-black text-emerald-400">
                        {cat.num}.
                      </span>
                      <div>
                        <span className="font-mono text-xl sm:text-2xl md:text-3xl font-black uppercase tracking-tight text-white group-hover:text-emerald-400 transition-colors block">
                          {cat.title}
                        </span>
                        <span className="font-sans text-xs text-white/50 block mt-0.5">
                          {cat.subtitle}
                        </span>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-full border transition-all ${
                        isExpanded
                          ? "border-emerald-500/50 bg-emerald-500/20 text-emerald-400 rotate-180"
                          : "border-white/20 bg-white/5 text-white/70 group-hover:text-white"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                  </button>

                  {/* Submenu Items (Only shown when category is opened) */}
                  {isExpanded && (
                    <div className="border-t border-white/10 px-4 py-3 sm:px-6 sm:py-4 bg-black/40 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cat.items.map((item) => (
                        <button
                          key={`${cat.id}-${item.href}-${item.label}`}
                          onClick={() => handleNavClick(item.href)}
                          className="text-left p-3 sm:p-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-emerald-500/15 hover:border-emerald-500/40 transition cursor-pointer group flex items-start justify-between gap-2"
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-mono text-xs sm:text-sm font-black uppercase text-white group-hover:text-emerald-400 transition-colors">
                                ➜ {item.label}
                              </span>
                              {item.badge && (
                                <span className="font-mono text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-[var(--accent1)] text-black">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-white/55 font-sans mt-1 line-clamp-1">
                              {item.desc}
                            </p>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Footer Staggered Items */}
          <div className="border-t border-white/20 pt-5 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-white/60 max-w-4xl mx-auto w-full shrink-0">
            <div className="nav-footer-el flex flex-wrap items-center gap-4">
              <span className="text-emerald-400 font-bold">FIND ME:</span>
              <a
                href={content.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                GitHub
              </a>
              <a
                href={content.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                Instagram
              </a>
              <a
                href={content.socials.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                TikTok
              </a>
              <a
                href={content.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn
              </a>
              <a
                href="/cv-muhammad-usamah-abdurrahman.pdf"
                download="CV-Muhammad-Usamah-Abdurrahman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-black font-mono font-black text-xs uppercase hover:bg-emerald-400 transition cursor-pointer"
              >
                Download CV (PDF)
              </a>
            </div>
            <div className="nav-footer-el">(C) MUHAMMAD USAMAH // 2026</div>
          </div>
        </div>
      )}
    </>
  );
}
