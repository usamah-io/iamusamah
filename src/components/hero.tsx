"use client";

import { useApp } from "./app-context";
import content from "@/data/content.json";

export default function Hero() {
  const { language } = useApp();
  const t = content[language as "id" | "en"] || content.id;

  return (
    <section className="hero relative pt-32 sm:pt-36 pb-12 flex flex-col items-center justify-center min-h-[70vh] px-4 overflow-hidden">
      {/* Dual Text Offset Headers */}
      <div className="hero-header-wrapper relative w-full max-w-5xl text-center select-none">
        <div className="hero-header hero-header-1 relative z-10 transform -translate-x-[2%]">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black uppercase tracking-tighter leading-none text-foreground">
            Usamah
          </h1>
        </div>
        <div className="hero-header hero-header-2 relative z-0 transform translate-x-[8%] -mt-8 sm:-mt-14 md:-mt-20 opacity-25">
          <h1 className="text-6xl sm:text-8xl md:text-9xl lg:text-[13rem] font-black uppercase tracking-tighter leading-none text-foreground">
            Usamah
          </h1>
        </div>
      </div>

      {/* Subtitle Description */}
      <div className="mt-8 text-center max-w-2xl space-y-2 px-4">
        <h2 className="font-mono text-base sm:text-xl font-black uppercase text-emerald-500 tracking-tight">
          {t.hero.title_1} & {t.hero.title_2}
        </h2>
        <p className="text-xs sm:text-sm text-foreground/75 font-medium leading-relaxed">
          {t.hero.subtitle}
        </p>
      </div>

      {/* Hero Footer Bar (5 Glyphs | Download CV | Showcase Mode: ON) */}
      <div className="hero-footer w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center border-t-2 border-foreground/30 pt-6 mt-12 sm:mt-16 font-mono text-xs text-foreground/80 gap-4 sm:gap-6 text-center sm:text-left">
        <div className="hero-footer-symbols hidden sm:flex gap-1 tracking-widest text-emerald-500 font-bold">
          /// /// ///
        </div>
        <div className="hero-footer-scroll-down w-full sm:w-auto text-center font-bold">
          <a
            href="/cv-muhammad-usamah.pdf"
            download="CV-Muhammad-Usamah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-link w-full sm:w-auto text-black font-mono text-xs sm:text-xs font-black uppercase tracking-wider bg-emerald-500 hover:bg-emerald-400 py-3 sm:py-2.5 px-6 sm:px-6 rounded-full border-2 border-black shadow-[3px_3px_0px_#000000] transition active:translate-x-[1px] active:translate-y-[1px] inline-flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{t.hero.cta_download_cv || "Download CV (PDF)"}</span>
          </a>
        </div>
        <div className="hero-footer-tags text-center sm:text-right font-bold uppercase tracking-wider text-emerald-500">
          Showcase Mode: ON
        </div>
      </div>
    </section>
  );
}
