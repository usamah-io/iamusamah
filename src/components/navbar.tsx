"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useApp } from "./app-context";
import { usePageTransition } from "./PageTransition";
import content from "@/data/content.json";
import { Sun, Moon, Globe } from "lucide-react";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, setLanguage, theme, toggleTheme } = useApp();
  const { navigateTo } = usePageTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const t = content[language as "id" | "en"] || content.id;

  const toggleMenu = () => {
    if (!isOpen) {
      setIsOpen(true);
      // Lock scroll
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      // Animate overlay entrance
      gsap.fromTo(
        ".nav-overlay-bg",
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );
      gsap.fromTo(
        ".nav-item-el",
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 0.75, stagger: 0.06, ease: "power4.out", delay: 0.1 }
      );
      gsap.fromTo(
        ".nav-footer-el",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power3.out", delay: 0.3 }
      );
    } else {
      // Unlock scroll
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";

      gsap.to(".nav-overlay-bg", {
        opacity: 0,
        duration: 0.3,
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

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3 pointer-events-auto">
            {/* Language Switcher ID | EN */}
            <div className="flex items-center text-[11px] font-mono font-extrabold bg-background/90 dark:bg-zinc-900/90 backdrop-blur-md text-foreground rounded-full px-2.5 sm:px-3 py-1.5 gap-1 border border-foreground/30 shadow-[3px_3px_0px_#000000] dark:shadow-[3px_3px_0px_rgba(255,255,255,0.25)]">
              <button
                onClick={() => setLanguage("id")}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === "id" ? "text-emerald-500 font-black" : "opacity-60 hover:opacity-100"
                }`}
              >
                ID
              </button>
              <span className="opacity-30">|</span>
              <button
                onClick={() => setLanguage("en")}
                className={`transition-colors cursor-pointer px-1 py-0.5 rounded ${
                  language === "en" ? "text-emerald-500 font-black" : "opacity-60 hover:opacity-100"
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
              {theme === "dark" ? <Sun className="w-4 h-4 text-emerald-400" /> : <Moon className="w-4 h-4 text-amber-500" />}
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

      {/* Fullscreen Overlay Menu */}
      {isOpen && (
        <div className="nav-overlay-bg fixed inset-0 z-[120] bg-zinc-950/98 text-white p-8 md:p-12 flex flex-col justify-between overflow-y-auto">
          {/* Top Bar */}
          <div className="flex justify-between items-center border-b border-white/20 pb-6">
            <span className="font-mono text-xl font-black text-emerald-400 tracking-widest">M * U // NAVIGATION</span>
            <button
              onClick={toggleMenu}
              className="font-mono text-xs font-extrabold px-5 py-2 border border-white/30 rounded-full hover:bg-white/10 transition cursor-pointer"
            >
              CLOSE ✕
            </button>
          </div>

          {/* Main Nav Items Stagger */}
          <div className="my-auto py-8 grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-2xl md:text-4xl font-black uppercase tracking-tight">
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/contact")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 00. Get in Touch
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/projects")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 01. {t.nav.projects || "Proyek"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/skills")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 02. {t.nav.articles || "Skill & Tech Stack"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/volunteer")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 03. {t.nav.volunteer || "Volunteer"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/hackathon-recap")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 04. {t.nav.achievement || "Hackathon & Rekap Nilai"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/about")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 05. {t.nav.about || "Tentang Saya"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/tools")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 06. {t.nav.tools || "Alat & AI"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/experience")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 07. {t.nav.education_experience || "Pendidikan & Pengalaman"}
              </button>
            </div>
            <div className="overflow-hidden">
              <button
                onClick={() => handleNavClick("/faq")}
                className="nav-item-el block text-left hover:text-emerald-400 transition transform cursor-pointer"
              >
                ➜ 08. {t.nav.faq || "FAQ"}
              </button>
            </div>
          </div>

          {/* Footer Staggered Items */}
          <div className="border-t border-white/20 pt-6 flex flex-wrap justify-between items-center gap-4 font-mono text-xs text-white/60">
            <div className="nav-footer-el flex flex-wrap items-center gap-4">
              <span className="text-emerald-400 font-bold">FIND ME:</span>
              <a href={content.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
              <a href={content.socials.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Instagram</a>
              <a href={content.socials.tiktok} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">TikTok</a>
              <a href={content.socials.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white transition">WhatsApp</a>
              <a href="/cv-muhammadusamah.pdf" download="CV-Muhammad-Usamah.pdf" target="_blank" rel="noopener noreferrer" className="px-3.5 py-1.5 rounded-full bg-emerald-500 text-black font-mono font-black text-xs uppercase hover:bg-emerald-400 transition cursor-pointer">
                Download CV (PDF)
              </a>
            </div>
            <div className="nav-footer-el">
              (C) MUHAMMAD USAMAH // 2026
            </div>
          </div>
        </div>
      )}
    </>
  );
}
