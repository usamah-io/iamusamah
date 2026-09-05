"use client";

import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { useApp } from "@/components/app-context";
import TechStackSkills from "@/components/TechStackSkills";

export default function SkillsPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-16 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto space-y-12">
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
              href="/cv-muhammadusamah.pdf"
              download="CV-Muhammad-Usamah.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
            >
              <Download className="w-4 h-4 shrink-0" />
              <span>Download CV (PDF)</span>
            </a>

            <div className="hidden sm:flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span>{isIndonesian ? "Skill & Tech Stack" : "Skill & Tech Stack"}</span>
            </div>
          </div>
        </div>

        {/* Tech Stack & Skills Showcase */}
        <TechStackSkills />
      </div>
    </main>
  );
}
