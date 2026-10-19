"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, GraduationCap, MapPin, ExternalLink, Eye, X, Layers, Award, HeartHandshake } from "lucide-react";
import { useApp } from "@/components/app-context";
import content from "@/data/content.json";
import { gsap } from "@/lib/gsap";

export default function ExperiencePage() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const tAbout = content[language]?.about || content["id"].about;
  const rawTimeline = tAbout.timeline || [];

  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  const filteredTimeline = rawTimeline.filter((item: any) => {
    if (activeFilter === "all") return true;
    return item.category === activeFilter;
  });

  useEffect(() => {
    if (!containerRef.current) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 35, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
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

          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>{isIndonesian ? "Pendidikan & Karir" : "Education & Track Record"}</span>
          </div>
        </div>

        {/* Dedicated Section Header */}
        <div className="text-center md:text-left space-y-3">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/10 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            <GraduationCap className="w-4 h-4 text-[var(--accent1)] shrink-0" />
            <span>{isIndonesian ? "Rekam Jejak & Pengalaman" : "Education & Volunteer Experience"}</span>
          </span>
          <h1 className="text-4xl sm:text-6xl font-black uppercase text-foreground tracking-tight leading-none">
            Pendidikan &amp; Rekam Jejak Karir
          </h1>
          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl">
            Jejak langkah akademis, kepemimpinan proyek digital, pengalamanan operasional acara, serta aksi relawan kemanusiaan.
          </p>

          {/* Neubrutalist Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4 font-mono">
            <button
              onClick={() => setActiveFilter("all")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] transition-all cursor-pointer ${
                activeFilter === "all"
                  ? "bg-[var(--accent1)] text-black"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{isIndonesian ? `Semua (${rawTimeline.length})` : `All (${rawTimeline.length})`}</span>
            </button>

            <button
              onClick={() => setActiveFilter("competition")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] transition-all cursor-pointer ${
                activeFilter === "competition"
                  ? "bg-[var(--accent1)] text-black"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isIndonesian ? "Kompetisi Coding" : "Competition"}</span>
            </button>

            <button
              onClick={() => setActiveFilter("hackathon")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] transition-all cursor-pointer ${
                activeFilter === "hackathon"
                  ? "bg-[var(--accent1)] text-black"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>{isIndonesian ? "Hackathon" : "Hackathon"}</span>
            </button>

            <button
              onClick={() => setActiveFilter("volunteer")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] transition-all cursor-pointer ${
                activeFilter === "volunteer"
                  ? "bg-[var(--accent1)] text-black"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>{isIndonesian ? "Relawan & Sosial" : "Volunteer & Social"}</span>
            </button>

            <button
              onClick={() => setActiveFilter("education")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] transition-all cursor-pointer ${
                activeFilter === "education"
                  ? "bg-[var(--accent1)] text-black"
                  : "bg-background text-foreground hover:bg-foreground/10"
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{isIndonesian ? "Pendidikan" : "Education"}</span>
            </button>
          </div>
        </div>

        {/* Interactive Timeline & Cards Grid Container */}
        <div ref={containerRef} className="relative border-l-4 border-foreground ml-4 sm:ml-8 space-y-10 pt-4">
          {filteredTimeline.map((item: any, idx: number) => (
            <div key={item.id || idx} className="relative pl-6 sm:pl-10 group">
              {/* Timeline Dot Indicator */}
              <div className="absolute -left-[13px] top-6 w-6 h-6 rounded-full bg-[var(--accent1)] border-4 border-foreground shadow-[2px_2px_0px_var(--fg)] group-hover:scale-125 transition-transform" />

              {/* Timeline Neubrutalist Card */}
              <div
                ref={addToRefs}
                className="bg-background border-4 border-foreground rounded-[1.5rem] p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] space-y-5"
              >
                {/* Header Row: Badge & Period */}
                <div className="flex flex-wrap items-center justify-between gap-3 font-mono">
                  <span className="text-xs font-black uppercase text-black bg-[var(--accent1)] border-2 border-foreground px-3.5 py-1 rounded-full shadow-[2px_2px_0px_var(--fg)]">
                    {item.badge}
                  </span>
                  <span className="text-xs font-black uppercase text-foreground bg-foreground/10 border border-foreground/20 px-3 py-1 rounded-full">
                    {item.period}
                  </span>
                </div>

                {/* Title & Role */}
                <div>
                  <h3 className="text-xl sm:text-3xl font-black uppercase text-foreground group-hover:text-[var(--accent1)] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-sm font-mono font-bold uppercase text-[var(--accent1)] mt-1">
                    {item.role}
                  </div>
                </div>

                {/* Optional Media Preview Thumbnail */}
                {item.image && (
                  <div
                    onClick={() => setSelectedImage(item.image)}
                    className="relative aspect-video w-full rounded-2xl overflow-hidden border-4 border-foreground shadow-[4px_4px_0px_var(--fg)] group/img cursor-pointer bg-zinc-950 max-w-lg"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover object-top group-hover/img:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-emerald-500 text-black text-xs font-mono font-black uppercase border-2 border-black shadow-[2px_2px_0px_#000000] flex items-center gap-2">
                        <Eye className="w-3.5 h-3.5" />
                        <span>Pratinjau Foto</span>
                      </span>
                    </div>
                  </div>
                )}

                {/* Description */}
                <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed">
                  {item.description}
                </p>

                {/* Skill / Highlights Tags */}
                {item.tags && (
                  <div className="flex flex-wrap gap-2 pt-1 font-mono">
                    {item.tags.map((tag: string, tIdx: number) => (
                      <span
                        key={tIdx}
                        className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-foreground bg-foreground/10 border border-foreground/20 px-3 py-0.5 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer Meta & External Links */}
                <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t-2 border-foreground/20 font-mono text-xs">
                  <div className="flex items-center gap-2 font-bold text-foreground/80">
                    <MapPin className="w-4 h-4 shrink-0 text-foreground" />
                    <span>{item.location}</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    {item.recap_link && (
                      <Link
                        href={item.recap_link}
                        className="inline-flex items-center gap-1.5 font-black uppercase text-black bg-emerald-500 hover:bg-emerald-400 border-2 border-black px-4 py-2 rounded-full shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                      >
                        <span>{item.recap_label || "Lihat Rekap"}</span>
                      </Link>
                    )}

                    {item.web_link && (
                      <a
                        href={item.web_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold uppercase text-foreground hover:bg-foreground hover:text-background border-2 border-foreground px-4 py-2 rounded-full shadow-[3px_3px_0px_var(--fg)] transition cursor-pointer"
                      >
                        <span>{item.web_label || "Kunjungi"}</span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CLEAN IMAGE LIGHTBOX MODAL */}
      {selectedImage && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 cursor-pointer"
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-emerald-500 text-black border-2 border-black hover:bg-emerald-400 transition-colors cursor-pointer z-[210] shadow-[3px_3px_0px_#000000]"
            aria-label="Tutup Preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-5xl max-h-[85vh] aspect-video rounded-2xl overflow-hidden shadow-2xl border-4 border-foreground bg-black"
          >
            <Image
              src={selectedImage}
              alt="Full Resolution Preview"
              fill
              priority
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </main>
  );
}
