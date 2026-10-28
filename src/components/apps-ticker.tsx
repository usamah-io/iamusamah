"use client";

import Image from "next/image";
import { APPS_DATA } from "@/data/apps-data";
import { useApp } from "./app-context";

export default function AppsTicker() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  return (
    <div className="w-full relative py-6 my-6 overflow-hidden select-none border-y-2 border-foreground/20 bg-background/50">
      {/* Subtle Side Vignette Gradients to prevent sharp edge clipping */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-background to-transparent z-10" />

      {/* Marquee Track */}
      <div className="flex w-max items-center gap-6 sm:gap-8 group">
        {/* Set 1: Primary readable items */}
        <div className="flex shrink-0 items-center gap-6 sm:gap-8 animate-apps-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]">
          {APPS_DATA.map((app) => (
            <div
              key={`ticker-1-${app.id}`}
              className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] transition-transform hover:scale-105"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-foreground/30 bg-foreground/5 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={app.icon}
                  alt={`${app.name} Icon`}
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-xs sm:text-sm font-black uppercase text-foreground leading-tight">
                  {app.name}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-foreground/60 uppercase">
                  {isIndonesian ? app.category.id : app.category.en}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Set 2: Duplicate decorative loop (aria-hidden) */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-6 sm:gap-8 animate-apps-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
        >
          {APPS_DATA.map((app) => (
            <div
              key={`ticker-2-${app.id}`}
              className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] transition-transform hover:scale-105"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-foreground/30 bg-foreground/5 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={app.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-xs sm:text-sm font-black uppercase text-foreground leading-tight">
                  {app.name}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-foreground/60 uppercase">
                  {isIndonesian ? app.category.id : app.category.en}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Set 3: Triplicate to ensure seamless fill on ultra-wide screens */}
        <div
          aria-hidden="true"
          className="flex shrink-0 items-center gap-6 sm:gap-8 animate-apps-marquee group-hover:[animation-play-state:paused] motion-reduce:[animation:none]"
        >
          {APPS_DATA.map((app) => (
            <div
              key={`ticker-3-${app.id}`}
              className="inline-flex items-center gap-3.5 px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl border-2 border-foreground bg-background shadow-[3px_3px_0px_var(--fg)] transition-transform hover:scale-105"
            >
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl border border-foreground/30 bg-foreground/5 p-1 flex items-center justify-center shrink-0 overflow-hidden">
                <Image
                  src={app.icon}
                  alt=""
                  width={36}
                  height={36}
                  className="object-contain w-full h-full"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-mono text-xs sm:text-sm font-black uppercase text-foreground leading-tight">
                  {app.name}
                </span>
                <span className="font-mono text-[10px] sm:text-[11px] font-bold text-foreground/60 uppercase">
                  {isIndonesian ? app.category.id : app.category.en}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
