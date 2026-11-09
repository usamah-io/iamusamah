"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useApp } from "./app-context";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import VolunteerLightbox, { LightboxMedia } from "./volunteer-lightbox";
import { ArrowDown, Eye, ExternalLink } from "lucide-react";
import { getFeaturedHomeExperiences } from "@/data/experiences-data";

export default function Volunteer() {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedMedia, setSelectedMedia] = useState<LightboxMedia | null>(null);

  // Single Source of Truth: Centralized Featured Experiences for Homepage
  const featuredExperiences = getFeaturedHomeExperiences();
  const cards = featuredExperiences.map((exp) => ({
    id: exp.id,
    badge: exp.badge[isIndonesian ? "id" : "en"],
    date: exp.date[isIndonesian ? "id" : "en"],
    location: exp.location[isIndonesian ? "id" : "en"],
    title: exp.title[isIndonesian ? "id" : "en"],
    role: exp.role[isIndonesian ? "id" : "en"],
    desc: exp.fullDescription[isIndonesian ? "id" : "en"],
    imageSrc: exp.image,
    orientation: exp.orientation || "landscape",
    targetUrl: exp.targetUrl || exp.externalUrl,
    bgColor: exp.cardStyle.bgColor,
    accentTag: exp.cardStyle.accentTag,
    btnClass: exp.cardStyle.btnClass,
    mediaItem: {
      id: exp.id,
      type: "image" as const,
      title: exp.title[isIndonesian ? "id" : "en"],
      category: exp.category.toUpperCase(),
      domain: exp.organizer
        ? exp.organizer[isIndonesian ? "id" : "en"]
        : "usamah.dev",
      description: exp.fullDescription[isIndonesian ? "id" : "en"],
      mediaSrc: exp.image,
      detailUrl: exp.targetUrl || exp.image,
    },
  }));

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cardEls = sectionRef.current?.querySelectorAll(".service-card");
      if (!cardEls || cardEls.length === 0) return;

      // GSAP Stacking Animation: As each card scrolls up, the card below scales down slightly
      cardEls.forEach((card, index) => {
        if (index === cardEls.length - 1) return;

        gsap.to(card, {
          scale: 0.93,
          opacity: 0.8,
          ease: "none",
          scrollTrigger: {
            trigger: cardEls[index + 1],
            start: "top top+=140",
            end: "top top+=40",
            scrub: true,
          },
        });
      });
      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, [language]);

  const handleOpenLightbox = (item: LightboxMedia) => {
    setSelectedMedia(item);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="experience"
        className="services relative w-full max-w-5xl mx-auto px-4 py-20 border-t-2 border-foreground/20 space-y-12"
      >
        {/* Services Header */}
        <div className="services-header text-center space-y-4 py-6">
          <div className="services-profile-icon w-20 h-20 mx-auto rounded-2xl overflow-hidden border-4 border-foreground shadow-lg bg-zinc-900 flex items-center justify-center font-mono text-xl font-black text-emerald-400">
            MU
          </div>
          <p className="font-mono text-xs font-bold uppercase tracking-widest text-emerald-500">
            {isIndonesian
              ? "Rekam Jejak & Pengalaman"
              : "Track Record & Activities"}
          </p>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase text-foreground tracking-tight max-w-3xl mx-auto leading-none">
            {isIndonesian
              ? "Pengalaman, Pembicara, Kompetisi & Relawan"
              : "Experience, Speaking, Competitions & Volunteering"}
          </h2>
          <p className="text-sm sm:text-base text-foreground/80 font-medium max-w-2xl mx-auto leading-relaxed">
            {isIndonesian
              ? "Dokumentasi resmi seminar nasional, kompetisi coding, inovasi hackathon, arsitektur proyek web, aksi relawan kemanusiaan, dan kontribusi kepemudaan."
              : "Official documentation of national seminars, coding competitions, hackathons, web projects, volunteer actions, and youth initiatives."}
          </p>
          <div className="services-header-arrow-icon flex justify-center pt-2 text-foreground">
            <ArrowDown className="w-8 h-8 animate-bounce text-emerald-500" />
          </div>
        </div>

        {/* Stacking Cards Sticky Sequential Stack */}
        <div className="relative space-y-12">
          {cards.map((card, idx) => (
            <div
              key={card.id}
              id={`service-card-${card.id}`}
              className={`service-card sticky top-24 sm:top-28 w-full rounded-[2em] border-4 ${card.bgColor} shadow-2xl p-6 sm:p-10 transition-all duration-300 min-h-[380px] flex flex-col justify-between`}
            >
              {/* Meta Top Bar */}
              <div className="flex flex-wrap justify-between items-center font-mono text-xs border-b border-current/20 pb-4 mb-4 gap-2">
                <div className="flex items-center gap-2.5">
                  <span
                    className={`font-black tracking-widest uppercase px-3 py-1 rounded-full border ${card.accentTag}`}
                  >
                    {card.badge}
                  </span>
                  <span className="font-bold opacity-80">{card.date}</span>
                </div>
                <span className="font-bold tracking-wider">
                  {card.location}
                </span>
              </div>

              {/* Main Content Row */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center flex-1 my-2">
                <div className="md:col-span-7 lg:col-span-8 space-y-3">
                  <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight leading-none">
                    {card.title}
                  </h3>
                  <div className="font-mono text-xs sm:text-sm font-bold uppercase opacity-85">
                    {card.role}
                  </div>
                  <p className="text-sm sm:text-base font-medium opacity-90 leading-relaxed max-w-xl">
                    {card.desc}
                  </p>
                </div>

                {/* Responsive Image Column */}
                <div className="md:col-span-5 lg:col-span-4 flex justify-center md:justify-end">
                  <div
                    onClick={() => {
                      if (card.targetUrl) {
                        if (card.targetUrl.startsWith("http")) {
                          window.open(
                            card.targetUrl,
                            "_blank",
                            "noopener,noreferrer",
                          );
                        } else {
                          window.location.href = card.targetUrl;
                        }
                      } else {
                        handleOpenLightbox(card.mediaItem);
                      }
                    }}
                    className={`service-card-img w-full rounded-2xl overflow-hidden border-2 border-current/30 shadow-md bg-black/20 cursor-pointer group relative ${
                      card.orientation === "portrait"
                        ? "max-w-[260px] aspect-[3/4] max-h-[340px]"
                        : "max-w-[360px] aspect-[16/10] max-h-[240px]"
                    }`}
                    title={
                      isIndonesian
                        ? "Klik untuk melihat pratinjau penuh"
                        : "Click to view full preview"
                    }
                  >
                    <Image
                      src={card.imageSrc}
                      alt={card.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 360px"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="font-mono text-[11px] font-black uppercase px-3 py-1.5 rounded-full bg-white text-black border border-black shadow-sm flex items-center gap-1">
                        <Eye className="w-3.5 h-3.5" />
                        {card.targetUrl?.startsWith("http")
                          ? isIndonesian
                            ? "Kunjungi"
                            : "Visit"
                          : card.targetUrl?.startsWith("/")
                            ? isIndonesian
                              ? "Detail"
                              : "Details"
                            : isIndonesian
                              ? "Perbesar"
                              : "Zoom"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Button & Indicator */}
              <div className="pt-4 border-t border-current/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  {card.targetUrl?.startsWith("http") ? (
                    <a
                      href={card.targetUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </a>
                  ) : card.targetUrl?.startsWith("/") ? (
                    <Link
                      href={card.targetUrl}
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleOpenLightbox(card.mediaItem)}
                      className={`font-mono text-xs font-black uppercase px-6 py-3 rounded-full transition cursor-pointer flex items-center gap-2 shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] ${card.btnClass}`}
                    >
                      <Eye className="w-4 h-4" />
                      <span>
                        {isIndonesian ? "Lihat Selengkapnya" : "View Details"}
                      </span>
                    </button>
                  )}
                </div>

                <span className="font-mono text-xs font-extrabold opacity-60">
                  {`0${idx + 1} // 0${cards.length}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      <VolunteerLightbox
        media={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
}
