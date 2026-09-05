"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, Layers, Cpu, Wrench } from "lucide-react";
import { useApp } from "./app-context";
import { TOOLS_DATA } from "@/data/tools-data";
import { ToolIcon } from "./tool-icons";

export default function ToolsCarousel() {
  const { language } = useApp();
  const [filter, setFilter] = useState<"all" | "ai" | "google">("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1200);

  const containerRef = useRef<HTMLDivElement>(null);

  // Filter tools based on category tab
  const filteredTools = TOOLS_DATA.filter((tool) => {
    if (filter === "all") return true;
    return tool.category === filter;
  });

  const totalItems = filteredTools.length;

  // Window resize listener for responsive 3D spacing
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Ensure activeIndex is within bounds when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [filter]);

  // Infinite Auto-play slider
  useEffect(() => {
    if (isHovered || isDragging || totalItems <= 1) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, 3500);
    return () => clearInterval(interval);
  }, [isHovered, isDragging, totalItems]);

  // Circular Index Normalization helper
  const getNormalizedOffset = (index: number) => {
    let diff = index - activeIndex + dragOffset;
    const half = totalItems / 2;
    while (diff < -half) diff += totalItems;
    while (diff > half) diff -= totalItems;
    return diff;
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  // Touch & Mouse Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartX;
    const cardWidth = windowWidth < 640 ? 160 : 240;
    setDragOffset(deltaX / cardWidth);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 0.25) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].clientX - dragStartX;
    const cardWidth = windowWidth < 640 ? 140 : 220;
    setDragOffset(deltaX / cardWidth);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 0.25) {
      if (dragOffset > 0) {
        handlePrev();
      } else {
        handleNext();
      }
    }
    setDragOffset(0);
  };

  const activeTool = filteredTools[activeIndex] || filteredTools[0];
  const isIndonesian = language === "id";

  return (
    <section className="relative py-12 px-4 overflow-hidden select-none">
      <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Title & Subtitle */}
        <div className="text-center max-w-3xl mx-auto mb-10 flex flex-col items-center gap-3">
          <span className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/10 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            {isIndonesian ? "Ekosistem Alat & AI Tools" : "Tools & AI Integration Catalog"}
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase text-foreground tracking-tight leading-tight text-center">
            {isIndonesian ? "Katalog Alat & Integrasi AI Ecosystem" : "Tools & AI Integration Catalog"}
          </h2>

          <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed max-w-2xl mt-1 text-center">
            {isIndonesian
              ? "Pemanfaatan kecerdasan buatan terdepan dan ekosistem produktivitas modern dalam mendukung proses alur kerja pembuatan aplikasi web modern berbasis Next.js & Full-Stack."
              : "Leveraging cutting-edge artificial intelligence and modern productivity tool ecosystems to empower Next.js & Full-Stack web application development workflows."}
          </p>

          {/* Neubrutalist Filter Tabs */}
          <div className="w-full max-w-md mx-auto mt-6 px-3 sm:px-0">
            <div className="grid grid-cols-3 gap-2 p-2 rounded-full border-2 border-foreground bg-background shadow-[4px_4px_0px_var(--fg)] w-full">
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-mono font-black uppercase transition-all cursor-pointer w-full text-center ${
                  filter === "all"
                    ? "bg-[var(--accent1)] text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]"
                    : "text-foreground hover:bg-foreground/10"
                }`}
              >
                <Layers className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">{isIndonesian ? "Semua" : "All"}</span>
              </button>

              <button
                onClick={() => setFilter("ai")}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-mono font-black uppercase transition-all cursor-pointer w-full text-center ${
                  filter === "ai"
                    ? "bg-[var(--accent1)] text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]"
                    : "text-foreground hover:bg-foreground/10"
                }`}
              >
                <Cpu className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">AI Tools</span>
              </button>

              <button
                onClick={() => setFilter("google")}
                className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-full text-xs font-mono font-black uppercase transition-all cursor-pointer w-full text-center ${
                  filter === "google"
                    ? "bg-[var(--accent1)] text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]"
                    : "text-foreground hover:bg-foreground/10"
                }`}
              >
                <Wrench className="w-3.5 h-3.5 shrink-0" />
                <span className="whitespace-nowrap">Google</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3D CURVED CAROUSEL CONTAINER */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            handleMouseUp();
          }}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="relative w-full h-[400px] sm:h-[460px] flex items-center justify-center overflow-hidden my-4 cursor-grab active:cursor-grabbing"
          style={{ perspective: "1200px" }}
        >
          <div
            className="relative w-full h-full flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
          >
            {filteredTools.map((tool, idx) => {
              const diff = getNormalizedOffset(idx);
              const absDiff = Math.abs(diff);

              if (absDiff > 4) return null;

              const stepX = windowWidth < 640 ? 110 : windowWidth < 1024 ? 170 : 220;
              const translateX = diff * stepX;
              
              const rotateY = Math.max(-45, Math.min(45, diff * 18));
              const translateZ = 60 - absDiff * 80;
              const translateY = Math.pow(diff, 2) * 8;
              const scale = Math.max(0.7, 1.05 - absDiff * 0.09);
              const opacity = Math.max(0, 1 - absDiff * 0.22);
              const zIndex = 50 - Math.round(absDiff * 10);

              const isActive = Math.round(absDiff) === 0;

              return (
                <div
                  key={tool.id}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx);
                    }
                  }}
                  className={`absolute w-[240px] sm:w-[280px] md:w-[320px] rounded-[1.5rem] p-5 sm:p-6 transition-transform duration-500 ease-out border-4 border-foreground flex flex-col justify-between shadow-[6px_6px_0px_var(--fg)] cursor-pointer bg-background ${
                    isActive ? "ring-4 ring-[var(--accent1)]" : "opacity-90"
                  }`}
                  style={{
                    transform: `translate3d(${translateX}px, ${translateY}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                  }}
                >
                  {/* Top Badge & Highlight tag */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-[10px] font-mono font-black px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1.5 border-2 border-foreground shadow-[2px_2px_0px_var(--fg)] ${
                        tool.isHighlight
                          ? "bg-[var(--accent1)] text-black"
                          : "bg-foreground/10 text-foreground"
                      }`}
                    >
                      {tool.isHighlight && <Sparkles className="w-3.5 h-3.5 fill-black text-black shrink-0" />}
                      {isIndonesian ? tool.badge.id : tool.badge.en}
                    </span>

                    {tool.isHighlight && (
                      <span className="flex h-3 w-3 relative shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent1)] opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[var(--accent1)]"></span>
                      </span>
                    )}
                  </div>

                  {/* Icon & Title */}
                  <div className="flex flex-col items-center text-center my-3">
                    <div
                      className={`w-16 h-16 sm:w-20 sm:h-20 rounded-2xl p-3 flex items-center justify-center mb-3 shrink-0 border-2 border-foreground bg-foreground/5 ${
                        isActive ? "scale-110 shadow-[3px_3px_0px_var(--fg)]" : "scale-100"
                      }`}
                    >
                      <ToolIcon id={tool.id} className="w-10 h-10 sm:w-12 sm:h-12 object-contain" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-black uppercase text-foreground tracking-tight">
                      {tool.name}
                    </h3>
                    <span className="text-xs font-mono font-bold text-foreground/75 mt-0.5 uppercase">
                      {isIndonesian ? tool.categoryLabel.id : tool.categoryLabel.en}
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-xs text-foreground/80 font-medium text-center line-clamp-3 leading-relaxed mt-2">
                    {isIndonesian ? tool.description.id : tool.description.en}
                  </p>

                  {/* Active Indicator bar */}
                  <div className="mt-4 pt-3 border-t-2 border-foreground/20 flex items-center justify-center gap-1.5 text-[11px] font-mono font-black uppercase text-[var(--accent1)]">
                    <span>{isActive ? (isIndonesian ? "Sedang Aktif" : "Active Selection") : (isIndonesian ? "Klik untuk Detail" : "Click for Details")}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Chevrons */}
          <button
            onClick={handlePrev}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background text-foreground border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] hover:bg-[var(--accent1)] hover:text-black transition-all cursor-pointer"
            aria-label="Previous Tool"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-background text-foreground border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] hover:bg-[var(--accent1)] hover:text-black transition-all cursor-pointer"
            aria-label="Next Tool"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 mb-8">
          {filteredTools.map((t, idx) => (
            <button
              key={t.id}
              onClick={() => setActiveIndex(idx)}
              className={`h-3 rounded-full border-2 border-foreground transition-all cursor-pointer ${
                idx === activeIndex
                  ? "w-8 bg-[var(--accent1)] shadow-[2px_2px_0px_var(--fg)]"
                  : "w-3 bg-foreground/20 hover:bg-foreground/40"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* ACTIVE CARD DETAILS EXPANSION DRAWER */}
        {activeTool && (
          <div className="w-full max-w-4xl bg-background border-4 border-foreground rounded-[2rem] p-6 sm:p-8 shadow-[8px_8px_0px_var(--fg)] transition-all">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b-2 border-foreground/20">
              
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-foreground/10 border-2 border-foreground p-2.5 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_var(--fg)]">
                  <ToolIcon id={activeTool.id} className="w-11 h-11" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl sm:text-2xl font-black uppercase text-foreground">
                      {activeTool.name}
                    </h3>
                    {activeTool.isHighlight && (
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-black uppercase bg-[var(--accent1)] text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                        {isIndonesian ? activeTool.badge.id : activeTool.badge.en}
                      </span>
                    )}
                  </div>
                  <span className="text-xs font-mono font-bold uppercase text-[var(--accent1)]">
                    {isIndonesian ? activeTool.categoryLabel.id : activeTool.categoryLabel.en}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 font-mono">
                <span className="text-xs text-foreground/75 font-bold uppercase">
                  {isIndonesian ? "Status Integrasi: Aktif Dalam Workflow" : "Integration Status: Active in Workflow"}
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black uppercase bg-emerald-500 text-black border-2 border-black shadow-[2px_2px_0px_#000000]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verified
                </span>
              </div>
            </div>

            {/* Description & Capabilities Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-xs uppercase font-mono font-black tracking-wider text-foreground/60 mb-2">
                  {isIndonesian ? "Deskripsi Peran Alat:" : "Tool Role Description:"}
                </h4>
                <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                  {isIndonesian ? activeTool.description.id : activeTool.description.en}
                </p>
              </div>

              <div>
                <h4 className="text-xs uppercase font-mono font-black tracking-wider text-foreground/60 mb-2">
                  {isIndonesian ? "Kapabilitas Utama dalam Pengkodean:" : "Key Coding Capabilities:"}
                </h4>
                <ul className="grid grid-cols-1 gap-2">
                  {(isIndonesian ? activeTool.capabilities.id : activeTool.capabilities.en).map((cap, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[var(--accent1)] shrink-0" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
