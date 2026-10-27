"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, HeartHandshake, MapPin, Calendar, Users, Eye, X, Camera, Sparkles } from "lucide-react";
import { useApp } from "@/components/app-context";

export default function SenyumAnakNusantaraPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const photoSrc = "/assets/Senyumanaknusantara.jpg";

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-24 px-4 sm:px-6">
      <div className="w-full max-w-4xl mx-auto space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b-2 border-foreground/20 pb-6">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider text-foreground hover:bg-foreground hover:text-background transition-all py-2.5 px-4 rounded-full border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4 shrink-0" />
            <span>{isIndonesian ? "Kembali ke Pengalaman" : "Back to Experience"}</span>
          </Link>

          <div className="flex items-center gap-2 font-mono text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black shadow-[2px_2px_0px_var(--fg)]">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span>{isIndonesian ? "Dokumentasi Komunitas" : "Community Documentation"}</span>
          </div>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_var(--fg)]">
            <HeartHandshake className="w-3.5 h-3.5 shrink-0" />
            <span>{isIndonesian ? "Aksi Kepemudaan & Sosial" : "Youth & Social Movement"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-foreground tracking-tight leading-tight">
            Komunitas Senyum Anak Nusantara (SAN)
          </h1>

          <p className="text-sm sm:text-base text-foreground/80 font-medium leading-relaxed max-w-2xl">
            {isIndonesian
              ? "Gerakan sosial dan kepemudaan yang berfokus pada pendampingan edukatif, pengenalan literasi digital, keceriaan anak, serta dokumentasi aksi sosial kemasyarakatan."
              : "A youth-driven social community dedicated to educational mentorship, digital literacy, child empowerment, and volunteer field documentation."}
          </p>

          {/* Quick Info Tags */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2 font-mono text-xs">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/30 bg-foreground/5 font-bold">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              2024 - 2025
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/30 bg-foreground/5 font-bold">
              <MapPin className="w-3.5 h-3.5 text-emerald-500" />
              Tasikmalaya &amp; Jawa Barat
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-foreground/30 bg-foreground/5 font-bold">
              <Users className="w-3.5 h-3.5 text-emerald-500" />
              {isIndonesian ? "Relawan Edukasi & Dokumentasi" : "Education & Media Volunteer"}
            </span>
          </div>
        </div>

        {/* Hero Image Showcase (Main 3:4 Portrait Photo) */}
        <section className="rounded-[2.5rem] border-4 border-foreground bg-background p-6 sm:p-10 shadow-[8px_8px_0px_var(--fg)] space-y-6">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-4">
            <div className="flex items-center gap-2 font-mono text-xs sm:text-sm font-black uppercase text-foreground">
              <Camera className="w-4 h-4 text-[var(--accent1)] shrink-0" />
              <span>{isIndonesian ? "Foto Dokumentasi Tim Relawan" : "Volunteer Team Documentation"}</span>
            </div>
            <span className="font-mono text-[11px] font-bold text-foreground/60 uppercase">
              Rasio 3:4 Portrait
            </span>
          </div>

          {/* Portrait 3:4 Frame preserving authentic photo proportions without cropping people */}
          <div className="relative mx-auto w-full max-w-md aspect-[3/4] rounded-2xl overflow-hidden border-4 border-foreground shadow-[6px_6px_0px_var(--fg)] bg-zinc-950 group cursor-pointer"
            onClick={() => setLightboxOpen(true)}
            title={isIndonesian ? "Klik untuk melihat foto resolusi penuh" : "Click to view full resolution"}
          >
            <Image
              src={photoSrc}
              alt="Dokumentasi Komunitas Senyum Anak Nusantara"
              fill
              sizes="(max-width: 640px) 100vw, 448px"
              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="font-mono text-xs font-black uppercase px-4 py-2 rounded-full bg-white text-black border-2 border-black shadow-md flex items-center gap-2">
                <Eye className="w-4 h-4" />
                {isIndonesian ? "Perbesar Foto" : "Zoom Photo"}
              </span>
            </div>
          </div>

          <p className="text-center font-mono text-xs text-foreground/70 italic max-w-lg mx-auto">
            {isIndonesian
              ? "Dokumentasi tim relawan Senyum Anak Nusantara dalam persiapan program edukasi anak & literasi Sekolah Nusantara."
              : "Senyum Anak Nusantara volunteer team preparing child education & literacy initiatives."}
          </p>
        </section>

        {/* Narrative & Contribution Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-2xl border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)] space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-emerald-500">
              <Sparkles className="w-4 h-4 shrink-0" />
              <span>{isIndonesian ? "Tentang Inisiatif" : "About The Initiative"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              {isIndonesian ? "Pemberdayaan & Keceriaan Anak" : "Child Empowerment & Engagement"}
            </h2>
            <p className="text-sm text-foreground/85 leading-relaxed font-medium">
              {isIndonesian
                ? "Senyum Anak Nusantara merupakan wadah kepemudaan yang hadir untuk menjangkau anak-anak melalui pendekatan kasih sayang, keceriaan bermain sambil belajar, serta pembekalan karakter positif demi masa depan generasi penerus."
                : "Senyum Anak Nusantara brings youth together to inspire children through interactive learning, playful education, and positive character building for the future."}
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)] space-y-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase text-emerald-500">
              <Camera className="w-4 h-4 shrink-0" />
              <span>{isIndonesian ? "Kontribusi Nyata" : "Key Contributions"}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black uppercase tracking-tight">
              {isIndonesian ? "Edukasi & Dokumentasi Media" : "Education & Field Media"}
            </h2>
            <ul className="text-sm text-foreground/85 space-y-2.5 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{isIndonesian ? "Mendukung sesi pengenalan literasi dan teknologi bagi anak-anak." : "Supporting digital literacy and creative learning for youth."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{isIndonesian ? "Merekam dokumentasi fotografi dan visual kegiatan lapangan." : "Producing field photo and video documentation for social outreach."}</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <span>{isIndonesian ? "Membangun interaksi positif dan keceriaan bersama tim relawan." : "Fostering positive engagement and camaraderie with fellow volunteers."}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t-2 border-foreground/20">
          <Link
            href="/#experience"
            className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-6 py-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground hover:text-background transition-all shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>{isIndonesian ? "Kembali ke Kartu Pengalaman" : "Back to Experience Cards"}</span>
          </Link>

          <Link
            href="/volunteer"
            className="inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-6 py-3 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black hover:opacity-90 transition-all shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px]"
          >
            <span>{isIndonesian ? "Galeri Dokumentasi Lapangan ↗" : "Field Gallery ↗"}</span>
          </Link>
        </div>
      </div>

      {/* Full Resolution Image Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md select-none"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-2xl w-full max-h-[90vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
              aria-label="Tutup"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="relative w-full aspect-[3/4] max-h-[80vh] rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
              <Image
                src={photoSrc}
                alt="Senyum Anak Nusantara"
                fill
                sizes="(max-width: 768px) 100vw, 800px"
                className="object-contain"
                priority
              />
            </div>
            <div className="mt-4 text-center text-white font-mono text-xs">
              <p className="font-bold">Dokumentasi Komunitas Senyum Anak Nusantara</p>
              <p className="text-white/70 text-[11px]">Rasio Asli 3:4 (3024 × 4032 piksel)</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
