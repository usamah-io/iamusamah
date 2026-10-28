"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { AppItem } from "@/data/apps-data";
import { useApp } from "./app-context";
import AppCard from "./app-card";
import { ExternalLink, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

interface AppsGridProps {
  apps: AppItem[];
}

export default function AppsGrid({ apps }: AppsGridProps) {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const [expandedAppId, setExpandedAppId] = useState<string | null>(null);
  const mobileContainerRef = useRef<HTMLDivElement>(null);

  // Touch tracking to distinguish between vertical scroll gesture and discrete tap on mobile
  const touchStartY = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const isScrolling = useRef(false);

  const activeApp = apps.find((a) => a.id === expandedAppId) || null;

  // Auto-scroll into view when card expands for comfortable mobile viewing
  useEffect(() => {
    if (expandedAppId && mobileContainerRef.current) {
      const top = mobileContainerRef.current.getBoundingClientRect().top + window.scrollY - 85;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, [expandedAppId]);

  const handleExpandedTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
    touchStartX.current = e.touches[0].clientX;
    isScrolling.current = false;
  };

  const handleExpandedTouchMove = (e: React.TouchEvent) => {
    if (touchStartY.current !== null && touchStartX.current !== null) {
      const deltaY = Math.abs(e.touches[0].clientY - touchStartY.current);
      const deltaX = Math.abs(e.touches[0].clientX - touchStartX.current);
      // If finger moved more than 10px, the user is scrolling
      if (deltaY > 10 || deltaX > 10) {
        isScrolling.current = true;
      }
    }
  };

  const handleExpandedTouchEnd = () => {
    if (isScrolling.current) {
      return;
    }
    // Discrete tap on the expanded card collapses it back to the 2-column grid
    setExpandedAppId(null);
  };

  const handleExpandedClick = (e: React.MouseEvent) => {
    if (isScrolling.current) {
      e.preventDefault();
      e.stopPropagation();
      isScrolling.current = false;
      return;
    }
    setExpandedAppId(null);
  };

  return (
    <div className="w-full">
      {/* ========================================================
          1. DESKTOP VIEW (lg breakpoint and above)
          Preserved 100% in its original spacious 2-column layout
         ======================================================== */}
      <div className="hidden lg:grid lg:grid-cols-2 gap-8 sm:gap-10">
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>

      {/* ========================================================
          2. MOBILE VIEW (under lg breakpoint)
          Interactive 2-column portrait grid with tap Expand/Collapse
         ======================================================== */}
      <div ref={mobileContainerRef} className="block lg:hidden w-full">
        <AnimatePresence mode="wait">
          {!activeApp ? (
            /* ==============================================
               STATE A: 2-Column Portrait Grid (Normal View)
               Rasio portrait vertikal 3:4 / 4:5 yang proporsional & konsisten,
               tanpa tulisan "KETUK DETAIL", tanpa panah, tanpa tombol X
               ============================================== */
            <motion.div
              key="compact-portrait-grid"
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-3 sm:gap-4 w-full"
            >
              {apps.map((app) => {
                const isDevelopment = app.status.type === "development";

                return (
                  <div
                    key={app.id}
                    role="button"
                    tabIndex={0}
                    aria-expanded={false}
                    aria-label={app.name}
                    onClick={() => setExpandedAppId(app.id)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setExpandedAppId(app.id);
                      }
                    }}
                    className="group relative flex flex-col justify-between rounded-2xl sm:rounded-3xl border-2 sm:border-3 border-foreground bg-background p-3.5 sm:p-4 shadow-[3px_3px_0px_var(--fg)] hover:shadow-[5px_5px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer select-none overflow-hidden aspect-[3/4.2] min-h-[220px]"
                  >
                    <div className="flex flex-col h-full justify-between">
                      <div>
                        {/* Top Row: App Icon & Status Dot */}
                        <div className="flex items-center justify-between pb-2.5 border-b border-foreground/15">
                          <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl border border-foreground/30 bg-foreground/5 p-1.5 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_var(--fg)] overflow-hidden">
                            <Image
                              src={app.icon}
                              alt=""
                              width={44}
                              height={44}
                              className="object-contain w-full h-full"
                            />
                          </div>

                          {/* Mini Status Dot */}
                          <div className="shrink-0 flex items-center">
                            {isDevelopment ? (
                              <span
                                title={isIndonesian ? "Dalam Pengembangan" : "In Development"}
                                className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-foreground animate-pulse"
                              />
                            ) : (
                              <span
                                title={isIndonesian ? "Terverifikasi / Aktif" : "Verified / Active"}
                                className="w-2.5 h-2.5 rounded-full bg-emerald-500 border border-foreground"
                              />
                            )}
                          </div>
                        </div>

                        {/* App Name */}
                        <h3 className="font-mono text-xs sm:text-sm font-black uppercase text-foreground tracking-tight leading-snug mt-2.5 line-clamp-1">
                          {app.name}
                        </h3>

                        {/* Category / Status Short Label */}
                        <span className="font-mono text-[9px] sm:text-[10px] font-bold uppercase text-[var(--accent1)] mt-0.5 block tracking-wider truncate">
                          {isIndonesian ? app.category.id : app.category.en}
                        </span>
                      </div>

                      {/* Short Description */}
                      <p className="text-[10px] sm:text-[11px] text-foreground/80 font-medium leading-relaxed line-clamp-3 mt-2">
                        {isIndonesian ? app.shortDescription.id : app.shortDescription.en}
                      </p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            /* ==============================================
               STATE B: Focused Expanded Card (Full Width)
               Kartu itu sendiri yang dapat diketuk untuk mengecilkan kembali ke grid,
               tanpa tombol 'Kembali ke Grid', tanpa switcher pills, tanpa ikon X
               ============================================== */
            <motion.div
              key={`expanded-${activeApp.id}`}
              initial={{ opacity: 0, scale: 0.96, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <article
                aria-labelledby={`expanded-title-${activeApp.id}`}
                onClick={handleExpandedClick}
                onTouchStart={handleExpandedTouchStart}
                onTouchMove={handleExpandedTouchMove}
                onTouchEnd={handleExpandedTouchEnd}
                className="relative flex flex-col justify-between rounded-[2rem] border-3 sm:border-4 border-foreground bg-background p-5 sm:p-7 shadow-[6px_6px_0px_var(--fg)] cursor-pointer select-none"
              >
                <div>
                  {/* Card Header: Icon + Name + Category */}
                  <div className="flex items-center gap-3.5 pb-4">
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border-2 border-foreground bg-foreground/5 p-2 flex items-center justify-center shrink-0 shadow-[3px_3px_0px_var(--fg)] overflow-hidden">
                      <Image
                        src={activeApp.icon}
                        alt=""
                        width={64}
                        height={64}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3
                          id={`expanded-title-${activeApp.id}`}
                          className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight leading-tight"
                        >
                          {activeApp.name}
                        </h3>
                        {activeApp.id === "sks-master" && (
                          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono font-black uppercase bg-[var(--accent1)] text-black border border-foreground">
                            <Sparkles className="w-2.5 h-2.5 fill-black shrink-0" />
                            Top 4 Finalist
                          </span>
                        )}
                      </div>
                      <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[var(--accent1)] block mt-0.5">
                        {isIndonesian ? activeApp.category.id : activeApp.category.en}
                      </span>
                    </div>
                  </div>

                  {/* Status Pill Badge (Full label like screenshot) */}
                  <div className="pb-4">
                    {activeApp.status.type === "development" ? (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-black uppercase bg-amber-400 text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{isIndonesian ? activeApp.status.label.id : activeApp.status.label.en}</span>
                      </div>
                    ) : (
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-black uppercase bg-emerald-500 text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{isIndonesian ? activeApp.status.label.id : activeApp.status.label.en}</span>
                      </div>
                    )}
                  </div>

                  {/* Mascot Badge if PyQuest */}
                  {activeApp.mascot && (
                    <div className="mb-4 p-2.5 rounded-xl bg-foreground/5 border border-foreground/30 flex items-center gap-2.5">
                      <div className="w-8 h-8 shrink-0 relative">
                        <Image
                          src={activeApp.mascot}
                          alt=""
                          width={32}
                          height={32}
                          className="object-contain w-full h-full"
                        />
                      </div>
                      <p className="text-[11px] font-mono font-bold text-foreground/80 leading-tight">
                        {isIndonesian
                          ? "Didukung robot PyBot dengan misi logika interaktif."
                          : "Powered by PyBot robot with logic coding missions."}
                      </p>
                    </div>
                  )}

                  {/* Development Note Alert for Studee */}
                  {activeApp.status.type === "development" && activeApp.status.note && (
                    <div className="mb-4 p-3 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-700 dark:text-amber-300 text-[11px] font-medium leading-relaxed flex items-start gap-2">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5 text-amber-500" />
                      <span>{isIndonesian ? activeApp.status.note.id : activeApp.status.note.en}</span>
                    </div>
                  )}

                  <hr className="border-t border-foreground/20 mb-4" />

                  {/* Full Description */}
                  <p className="text-xs sm:text-sm text-foreground/85 font-medium leading-relaxed">
                    {isIndonesian ? activeApp.description.id : activeApp.description.en}
                  </p>

                  {/* Key Features List */}
                  <div className="mt-4 space-y-1.5">
                    <h4 className="font-mono text-[11px] font-black uppercase tracking-wider text-foreground/60">
                      {isIndonesian ? "Fitur Utama:" : "Key Features:"}
                    </h4>
                    <ul className="grid grid-cols-1 gap-1.5">
                      {(isIndonesian ? activeApp.features.id : activeApp.features.en).map(
                        (feat, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-foreground/90 font-medium leading-tight"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        )
                      )}
                    </ul>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-4 pt-3 border-t border-foreground/15 flex flex-wrap gap-1.5 items-center">
                    <span className="font-mono text-[10px] font-black uppercase text-foreground/50 mr-0.5">
                      Tech:
                    </span>
                    {activeApp.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] font-bold px-2 py-0.5 rounded-full border border-foreground/25 bg-foreground/5 text-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons: Stop Propagation to ensure links open without triggering collapse */}
                <div className="mt-6 pt-5 border-t-2 border-foreground/20 flex flex-col gap-2.5">
                  <a
                    href={activeApp.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    onTouchStart={(e) => e.stopPropagation()}
                    onTouchEnd={(e) => e.stopPropagation()}
                    className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                  >
                    <span>
                      {isIndonesian
                        ? activeApp.primaryAction.label.id
                        : activeApp.primaryAction.label.en}
                    </span>
                    <ExternalLink className="w-4 h-4" />
                  </a>

                  {activeApp.repoUrl && (
                    <a
                      href={activeApp.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      onTouchStart={(e) => e.stopPropagation()}
                      onTouchEnd={(e) => e.stopPropagation()}
                      className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs sm:text-sm font-black uppercase px-5 py-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      <span>{isIndonesian ? "Repositori" : "Repositori"}</span>
                    </a>
                  )}
                </div>
              </article>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
