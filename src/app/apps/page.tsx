"use client";

import Link from "next/link";
import { ArrowLeft, Layers } from "lucide-react";
import { useApp } from "@/components/app-context";
import { APPS_DATA } from "@/data/apps-data";
import AppsTicker from "@/components/apps-ticker";
import AppsGrid from "@/components/apps-grid";

export default function AppsPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto space-y-10">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-emerald-500 text-black shadow-[2px_2px_0px_var(--fg)]">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>{isIndonesian ? "Katalog 4 Aplikasi" : "4 Web Applications"}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 py-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/5 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            <Layers className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{isIndonesian ? "Koleksi Ekosistem Web" : "Web Ecosystem Collection"}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-none text-center">
            {isIndonesian ? "Aplikasi yang Saya Bangun" : "Applications I've Built"}
          </h1>

          <p className="text-foreground/85 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl text-center">
            {isIndonesian
              ? "Kumpulan aplikasi dan eksperimen digital yang saya kembangkan untuk belajar, memecahkan masalah, dan mengeksplorasi teknologi."
              : "A curated collection of web applications and digital experiments I engineered to learn, solve real-world problems, and explore modern web technologies."}
          </p>
        </section>

        {/* Horizontal Application Icon Ticker */}
        <section aria-label="Animated App Icons Ticker" className="w-full">
          <div className="text-center mb-1">
            <span className="font-mono text-[11px] font-black uppercase tracking-widest text-foreground/50">
              /// {isIndonesian ? "Ekosistem Aplikasi" : "Applications Ecosystem"} ///
            </span>
          </div>
          <AppsTicker />
        </section>

        {/* Applications Catalog Grid */}
        <section aria-labelledby="apps-grid-heading" className="space-y-6 pt-4">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-3">
            <h2
              id="apps-grid-heading"
              className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <span>{isIndonesian ? "Daftar Aplikasi Unggulan" : "Featured Applications List"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-[var(--accent1)] text-black border border-foreground">
                {APPS_DATA.length}
              </span>
            </h2>
            <span className="font-mono text-xs font-bold text-foreground/60 hidden sm:inline">
              [ Next.js • SvelteKit • Gemini AI ]
            </span>
          </div>

          {/* Interactive Responsive Grid (2-column expandable on mobile, 2-column spacious on desktop) */}
          <AppsGrid apps={APPS_DATA} />
        </section>

      </div>
    </main>
  );
}
