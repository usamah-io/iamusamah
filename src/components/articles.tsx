"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useApp } from "./app-context";
import content from "@/data/content.json";

export default function Articles() {
  const { language } = useApp();
  const t = content[language].articles;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 30, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [t.items]);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardsRef.current.includes(el)) {
      cardsRef.current.push(el);
    }
  };

  // Limit content display to max 6 elements
  const displayedItems = (t.items || []).slice(0, 6);

  return (
    <section
      ref={containerRef}
      className="py-12 px-4 w-full max-w-5xl mx-auto relative"
    >
      {/* Header */}
      <div className="text-center md:text-left mb-12 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
          Artikel, Catatan &amp; Dokumentasi Teknis
        </h2>
        <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {displayedItems.map((item, idx) => {
          const isVideo = (item.platform || "").toLowerCase().includes("tiktok") || (item.platform || "").toLowerCase().includes("instagram");

          return (
            <div
              key={item.id || item.title || idx}
              ref={addToRefs}
              className="group relative bg-background border-4 border-foreground rounded-[1.5rem] p-6 shadow-[6px_6px_0px_var(--fg)] transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] flex flex-col justify-between"
            >
              <div>
                {/* Meta info / Badges */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[10px] font-black uppercase tracking-wider text-black bg-[var(--accent1)] border-2 border-foreground px-3 py-1 rounded-full shadow-[2px_2px_0px_var(--fg)]">
                    {item.tag}
                  </span>
                  <span className="font-mono text-[10px] font-bold uppercase text-foreground bg-foreground/10 border border-foreground/20 px-2.5 py-1 rounded-full">
                    {item.platform}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-black uppercase text-foreground group-hover:text-[var(--accent1)] transition-colors mb-6 leading-snug line-clamp-3">
                  {item.title}
                </h3>
              </div>

              {/* Responsive Action Button */}
              <div className="border-t-2 border-foreground/20 pt-4 mt-2">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-black font-mono text-xs font-black uppercase py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                >
                  <span className="truncate">{isVideo ? t.watch_video : t.read_more}</span>
                  <svg className="w-3.5 h-3.5 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
