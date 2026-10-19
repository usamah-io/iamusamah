"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LayoutGrid, Image as ImageIcon, Images, ArrowLeft, Camera, ShieldCheck, HeartHandshake } from "lucide-react";
import { useApp } from "@/components/app-context";
import content from "@/data/content.json";
import Typewriter from "@/components/typewriter";
import BrowserMockupCard from "@/components/browser-mockup-card";
import VolunteerLightbox, { LightboxMedia } from "@/components/volunteer-lightbox";

export default function VolunteerGalleryPage() {
  const { language } = useApp();
  const t = content[language as "id" | "en"]?.volunteer || content["id"].volunteer;
  const isIndonesian = language === "id";

  const [activeFilter, setActiveFilter] = useState<"all" | "image">("all");
  const [selectedMedia, setSelectedMedia] = useState<LightboxMedia | null>(null);

  const bouncySpring = {
    type: "spring",
    stiffness: 300,
    damping: 20,
  } as const;

  // Focus filter items on Photo Documentations
  const photoItems = t.items.filter((item) => (item as { type?: string }).type === "image");
  const filteredItems = photoItems.length > 0 ? photoItems : t.items;
  const photoCount = photoItems.length;

  const handleOpenLightbox = (item: (typeof t.items)[0]) => {
    const itemType = "image";
    const mediaSource =
      (item as { imageSrc?: string; videoSrc?: string }).imageSrc ||
      (item as { videoSrc?: string }).videoSrc ||
      "";

    setSelectedMedia({
      id: item.id,
      type: itemType,
      title: item.title,
      category: item.category,
      domain: item.domain,
      description: item.description,
      mediaSrc: mediaSource,
      detailUrl: item.detailUrl,
    });
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
            <span>
              {isIndonesian ? "Dokumentasi Pengalaman" : "Experience Gallery"} ({photoCount} {isIndonesian ? "Foto" : "Photos"})
            </span>
          </div>
        </div>

        {/* Page Header */}
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border-2 border-foreground bg-[var(--accent1)] text-black text-xs font-mono font-black uppercase shadow-[2px_2px_0px_var(--fg)]">
            <Images className="w-3.5 h-3.5 shrink-0" />
            <span>{isIndonesian ? "Galeri Foto & Operator Event" : "Field & Event Photo Gallery"}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
            {isIndonesian ? "Dokumentasi & Galeri Pengalaman" : "Experience & Field Gallery"}
          </h1>

          <p className="text-sm sm:text-base text-foreground/80 font-sans leading-relaxed max-w-3xl">
            {t.subtitle}
          </p>
        </div>

        {/* STATS IMPACT COUNTER */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
          <div className="p-5 rounded-2xl border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black font-mono text-[var(--accent1)]">12+</span>
              <Camera className="w-5 h-5 text-foreground/60" />
            </div>
            <div className="text-xs font-mono font-black uppercase text-foreground/80">
              {isIndonesian ? "Dokumentasi Lapangan" : "Field Documentation"}
            </div>
          </div>

          <div className="p-5 rounded-2xl border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-3xl font-black font-mono text-[var(--accent1)]">1</span>
              <ShieldCheck className="w-5 h-5 text-foreground/60" />
            </div>
            <div className="text-xs font-mono font-black uppercase text-foreground/80">
              {isIndonesian ? "Operator Event Tasik" : "Tasik Event Operator"}
            </div>
          </div>

          <div className="p-5 rounded-2xl border-4 border-foreground bg-background shadow-[6px_6px_0px_var(--fg)] flex flex-col justify-between space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xl font-black font-mono text-[var(--accent1)] uppercase truncate">
                {isIndonesian ? "Pengalaman" : "Experience"}
              </span>
              <HeartHandshake className="w-5 h-5 text-foreground/60" />
            </div>
            <div className="text-xs font-mono font-black uppercase text-foreground/80">
              {isIndonesian ? "Peran Operator & Event" : "Operator & Event Role"}
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => setActiveFilter("all")}
            className={`inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-5 py-2.5 rounded-full border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer ${
              activeFilter === "all"
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-foreground/10"
            }`}
          >
            <LayoutGrid className="w-4 h-4 shrink-0" />
            <span>{t.filter_all || "Semua"} ({photoCount})</span>
          </button>

          <button
            onClick={() => setActiveFilter("image")}
            className={`inline-flex items-center gap-2 font-mono text-xs font-black uppercase px-5 py-2.5 rounded-full border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer ${
              activeFilter === "image"
                ? "bg-foreground text-background"
                : "bg-background text-foreground hover:bg-foreground/10"
            }`}
          >
            <ImageIcon className="w-4 h-4 shrink-0" />
            <span>{t.filter_photo || "Foto"} ({photoCount})</span>
          </button>
        </div>

        {/* Filtered Grid of Photo Browser Mockup Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start w-full max-w-5xl mx-auto">
          {filteredItems.map((item, idx) => {
            const itemType = "image";
            const mediaSource =
              (item as { imageSrc?: string; videoSrc?: string }).imageSrc ||
              (item as { videoSrc?: string }).videoSrc ||
              "";

            const naturalRatio =
              item.id === "vol-han-tasik" || item.id === "vol-sertif-han"
                ? "aspect-video"
                : "aspect-[3/4]";

            return (
              <motion.div 
                key={item.id} 
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                transition={{ ...bouncySpring, delay: idx * 0.1 }}
                className="h-full"
              >
                <BrowserMockupCard
                  layout="vertical"
                  domain={item.domain}
                  mediaType={itemType}
                  mediaSrc={mediaSource}
                  aspectRatio={naturalRatio}
                  floatingBadge={{
                    text: item.badge,
                    variant: idx === 0 ? "neon" : "dark",
                  }}
                  categoryLabel={item.category}
                  title={item.title}
                  description={item.description}
                  tags={item.tags}
                  onMediaClick={() => handleOpenLightbox(item)}
                  primaryAction={{
                    label: isIndonesian ? "Lihat Foto" : "View Photo",
                    onClick: () => handleOpenLightbox(item),
                    icon: <ImageIcon className="w-3.5 h-3.5 shrink-0" />,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <VolunteerLightbox
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </main>
  );
}
