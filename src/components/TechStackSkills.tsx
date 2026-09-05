"use client";

import React, { useEffect, useRef } from "react";
import { useApp } from "./app-context";
import { Download, Code2, Palette, Sparkles, ExternalLink, Cpu, Layout } from "lucide-react";
import { gsap } from "@/lib/gsap";

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
    </svg>
  );
}

export default function TechStackSkills() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);

  const skills = [
    {
      name: "Next.js / React Framework",
      level: 92,
      category: "Frontend Architecture",
      icon: <Code2 className="w-5 h-5 text-[var(--accent1)]" />,
      color: "bg-[var(--accent1)]",
    },
    {
      name: "Tailwind CSS / Creative Styling",
      level: 95,
      category: "UI Engineering & Animations",
      icon: <Layout className="w-5 h-5 text-teal-400" />,
      color: "bg-teal-400",
    },
    {
      name: "Figma & UI/UX Design Tools",
      level: 85,
      category: "Visual & Interface Prototyping",
      icon: <Palette className="w-5 h-5 text-purple-400" />,
      color: "bg-purple-400",
    },
    {
      name: "TypeScript & Node.js",
      level: 88,
      category: "Full-Stack Logic & APIs",
      icon: <Cpu className="w-5 h-5 text-amber-400" />,
      color: "bg-amber-400",
    },
    {
      name: "AI Workflows & Gemini Integration",
      level: 90,
      category: "AI Agent Workflows & Prompt Engineering",
      icon: <Sparkles className="w-5 h-5 text-emerald-400" />,
      color: "bg-emerald-400",
    },
  ];

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        const targetWidth = bar.getAttribute("data-width") || "0%";
        gsap.fromTo(
          bar,
          { width: "0%" },
          {
            width: targetWidth,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToBarRefs = (el: HTMLDivElement | null) => {
    if (el && !barsRef.current.includes(el)) {
      barsRef.current.push(el);
    }
  };

  return (
    <section ref={containerRef} className="w-full max-w-5xl mx-auto py-8">
      <div className="rounded-[2rem] border-4 border-foreground bg-background p-6 sm:p-10 shadow-[8px_8px_0px_var(--fg)] space-y-8">
        
        {/* Component Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <div>
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_var(--fg)] mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>{isIndonesian ? "Keahlian & Tech Stack" : "Skills & Tech Stack"}</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-black uppercase text-foreground tracking-tight">
              {isIndonesian ? "Tingkat Penguasaan Teknologi" : "Technical Proficiency & Stack"}
            </h2>
          </div>

          <a
            href="/cv-muhammadusamah.pdf"
            download="CV-Muhammad-Usamah.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer self-start sm:self-auto shrink-0"
          >
            <Download className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Download CV (PDF)" : "Download CV (PDF)"}</span>
          </a>
        </div>

        {/* Skill Bars List */}
        <div className="space-y-6">
          {skills.map((skill, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 font-mono">
                <div className="flex items-center gap-2">
                  {skill.icon}
                  <span className="font-black text-sm sm:text-base uppercase text-foreground">
                    {skill.name}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] sm:text-xs font-bold uppercase text-foreground/75 bg-foreground/10 px-2.5 py-0.5 rounded-full border border-foreground/20">
                    {skill.category}
                  </span>
                  <span className="font-black text-sm text-[var(--accent1)]">
                    {skill.level}%
                  </span>
                </div>
              </div>

              {/* Progress Bar Container */}
              <div className="w-full h-4 rounded-full border-2 border-foreground bg-foreground/10 overflow-hidden shadow-inner p-0.5">
                <div
                  ref={addToBarRefs}
                  data-width={`${skill.level}%`}
                  className={`h-full rounded-full ${skill.color} border-r-2 border-foreground shadow-[2px_0px_0px_var(--fg)]`}
                  style={{ width: "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Direct Profile Integration Banner */}
        <div className="rounded-2xl border-4 border-foreground bg-foreground text-background p-6 shadow-[6px_6px_0px_var(--fg)] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-2xl bg-background text-foreground border-2 border-background shadow-[3px_3px_0px_rgba(255,255,255,0.2)] shrink-0">
              <GithubIcon className="w-8 h-8 text-foreground" />
            </div>
            <div>
              <h3 className="font-black text-lg sm:text-xl uppercase tracking-tight">
                {isIndonesian ? "Repositori & Kode Sumber GitHub" : "GitHub Repositories & Open Source"}
              </h3>
              <p className="text-xs sm:text-sm font-sans font-medium text-background/80 mt-0.5">
                {isIndonesian
                  ? "Jelajahi kode sumber lengkap proyek-proyek web, eksperimentasi AI, dan kontribusi open source."
                  : "Explore complete source codes of web projects, AI experiments, and open-source contributions."}
              </p>
            </div>
          </div>

          <a
            href="https://github.com/usamah-io"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-mono text-xs font-black uppercase border-2 border-black shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer shrink-0"
          >
            <GithubIcon className="w-4 h-4 text-black shrink-0" />
            <span>{isIndonesian ? "Kunjungi GitHub @usamah-io" : "Visit GitHub @usamah-io"}</span>
            <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70" />
          </a>
        </div>

      </div>
    </section>
  );
}
