"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Award, FileText, ExternalLink, Eye, X, Trophy, ArrowLeft } from "lucide-react";
import { useApp } from "@/components/app-context";
import content from "@/data/content.json";

export default function HackathonRecapPage() {
  const { language } = useApp();
  const tData = (content[language] || content["id"]) as typeof content["id"];
  const t = tData.hackathon;

  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const mainCertificateSrc = "/assets/sks-master-certificate.png";

  const filteredGallery =
    activeCategory === "Semua" || activeCategory === "All"
      ? t.gallery_items
      : t.gallery_items.filter((item) => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-24 px-4 sm:px-6">
      <div className="w-full max-w-5xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb & Back Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{language === "id" ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>Gemini Hackathon 2026</span>
          </div>
        </div>

        {/* Hero Title Section */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/10 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            <Award className="w-4 h-4 text-[var(--accent1)] shrink-0" />
            <span>Official Achievement Showcase</span>
          </span>

          <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none text-foreground">
            Galeri &amp; Rekap Nilai Resmi
          </h1>

          <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* CERTIFICATE FIRST HERO MEDIA PREVIEW */}
        <section className="rounded-[2rem] border-4 border-foreground bg-background p-6 sm:p-10 shadow-[8px_8px_0px_var(--fg)] space-y-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 pb-6 border-b-2 border-foreground/20">
            <div className="space-y-2 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--accent1)] text-black text-xs font-mono font-black uppercase border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                <Trophy className="w-3.5 h-3.5" />
                <span>{t.badge || "Top 4 Gemini Hackathon 2026"}</span>
              </span>
              <h2 className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight">
                Sks-Master (Platform Ujian AI Interactive)
              </h2>
              <p className="text-xs sm:text-sm text-foreground/80 max-w-xl font-medium leading-relaxed">
                Platform evaluasi belajar cerdas berbasis Google Gemini API untuk membantu institusi pendidikan mengotomatiskan pembuatan dan analisis soal ujian.
              </p>
            </div>

            {/* Score Pill */}
            <div className="flex flex-col items-center justify-center p-6 rounded-2xl bg-[var(--accent1)] text-black border-4 border-foreground min-w-[200px] shrink-0 text-center shadow-[4px_4px_0px_var(--fg)] font-mono">
              <span className="text-xs font-black uppercase tracking-wider text-black/80">
                {t.final_score_label || "Skor Akhir Juri"}
              </span>
              <div className="text-5xl font-black my-1 text-black">
                {t.final_score}
              </div>
              <span className="text-xs font-black uppercase bg-black text-white px-3 py-1 rounded-full border border-black shadow-xs">
                Peringkat 4 Nasional
              </span>
            </div>
          </div>

          {/* Certificate Image Hero Preview Container */}
          <div className="space-y-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs sm:text-sm font-mono font-black uppercase text-foreground">
                <Award className="w-4 h-4 text-[var(--accent1)] shrink-0" />
                <span>Sertifikat &amp; Lembar Penilaian Utama</span>
              </div>
              <button
                onClick={() => setSelectedImage(mainCertificateSrc)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[var(--accent1)] hover:underline cursor-pointer"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Buka Layar Penuh</span>
              </button>
            </div>

            <div
              onClick={() => setSelectedImage(mainCertificateSrc)}
              className="relative aspect-video w-full rounded-2xl overflow-hidden border-4 border-foreground shadow-[6px_6px_0px_var(--fg)] group cursor-pointer bg-zinc-950"
            >
              <Image
                src={mainCertificateSrc}
                alt="Sertifikat Rekap Nilai Resmi SKS Master Gemini Hackathon 2026"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-5 py-3 rounded-full bg-emerald-500 text-black text-xs font-mono font-black uppercase border-2 border-black shadow-[3px_3px_0px_#000000]">
                  Lihat Sertifikat Full-Size
                </span>
              </div>
            </div>

            {/* Formal Action Buttons */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-2 font-mono">
              <button
                onClick={() => setSelectedImage(mainCertificateSrc)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black font-mono text-xs font-black uppercase shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] cursor-pointer"
              >
                <Award className="w-4 h-4 shrink-0" />
                <span>Lihat Sertifikat</span>
              </button>

              <a
                href="https://docs.google.com/spreadsheets/d/1VVHQfvEqWVzb5cl165ivFw7pp-UFCtlxI_-6fqUrr7I/edit?gid=1263546258#gid=1263546258"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-background text-foreground border-2 border-foreground font-mono text-xs font-black uppercase shadow-[3px_3px_0px_var(--fg)] hover:translate-x-[-1px] hover:translate-y-[-1px] transition cursor-pointer"
              >
                <FileText className="w-4 h-4 shrink-0 text-[var(--accent1)]" />
                <span>Lembar Penilaian (Spreadsheet)</span>
                <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-60 ml-0.5" />
              </a>
            </div>
          </div>
        </section>

        {/* TABEL REKAPITULASI NILAI RESMI */}
        <section className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                Tabel Rekapitulasi Nilai Resmi
              </h2>
              <p className="text-xs sm:text-sm text-foreground/75 font-sans font-medium">
                Rincian bobot dan skor dari lembar penilaian spreadsheet juri
              </p>
            </div>
          </div>

          {/* Desktop Table View */}
          <div className="w-full overflow-x-auto rounded-[1.5rem] border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)]">
            <table className="w-full text-left border-collapse min-w-[600px] font-mono text-xs sm:text-sm">
              <thead>
                <tr className="border-b-4 border-foreground bg-foreground text-background uppercase tracking-wider font-black">
                  <th className="py-4 px-6">Kriteria Penilaian</th>
                  <th className="py-4 px-4 text-center">Bobot</th>
                  <th className="py-4 px-6 text-center">Skor Juri</th>
                  <th className="py-4 px-6 text-right">Nilai Akhir</th>
                </tr>
              </thead>
              <tbody className="divide-y-2 divide-foreground/20 font-sans">
                {t.scores.map((item, idx) => (
                  <tr key={idx} className="hover:bg-foreground/5 transition-colors">
                    <td className="py-4 px-6 font-medium text-foreground">
                      <div className="font-black text-sm sm:text-base uppercase text-foreground">
                        {item.kriteria}
                      </div>
                      <div className="text-xs text-foreground/75 mt-1 leading-relaxed">
                        {item.keterangan}
                      </div>
                    </td>
                    <td className="py-4 px-4 text-center font-mono font-bold">
                      <span className="px-3 py-1 rounded-full bg-foreground/10 border border-foreground/30 text-foreground text-xs font-mono font-black">
                        {item.bobot}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-center">
                      <span className="font-mono font-black text-base sm:text-lg text-foreground">
                        {item.skor}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right font-mono font-black text-foreground text-base sm:text-lg">
                      {item.nilai.toFixed(1)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-[var(--accent1)] text-black border-t-4 border-foreground font-mono font-black">
                  <td colSpan={3} className="py-4 px-6 text-right uppercase text-xs sm:text-base">
                    TOTAL NILAI AKHIR REKAPITULASI:
                  </td>
                  <td className="py-4 px-6 text-right text-xl sm:text-2xl">
                    {t.final_score}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* GALERI FOTO DOKUMENTASI */}
        <section className="space-y-8 pt-8 border-t-2 border-foreground/20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-foreground text-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight">
                  Galeri Dokumentasi Kompetisi
                </h2>
                <p className="text-xs sm:text-sm text-foreground/75 font-sans font-medium">
                  Dokumentasi proses pitching, demonstrasi platform, dan pengumuman hasil
                </p>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 font-mono">
              {t.gallery_categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-black uppercase transition-all border-2 border-foreground cursor-pointer shadow-[2px_2px_0px_var(--fg)] ${
                    activeCategory === category
                      ? "bg-[var(--accent1)] text-black"
                      : "bg-background text-foreground hover:bg-foreground/10"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredGallery.map((img) => (
              <div
                key={img.id}
                onClick={() => setSelectedImage(img.src)}
                className="group relative bg-background border-4 border-foreground rounded-[1.5rem] overflow-hidden shadow-[6px_6px_0px_var(--fg)] cursor-pointer transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] flex flex-col"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-zinc-950">
                  <Image
                    src={img.src}
                    alt={img.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 text-[10px] font-black font-mono uppercase tracking-wider text-black bg-emerald-500 border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#000000]">
                    {img.category}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
                  <h3 className="font-black text-base uppercase text-foreground group-hover:text-[var(--accent1)] transition-colors">
                    {img.title}
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed font-sans line-clamp-2">
                    {img.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
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
