"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useApp } from "./app-context";
import content from "@/data/content.json";
import { gsap } from "@/lib/gsap";

export default function About() {
  const { language } = useApp();
  const t = content[language as "id" | "en"] || content.id;
  const sectionRef = useRef<HTMLDivElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current || !portraitRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        portraitRef.current,
        { rotation: 6, y: 50 },
        {
          rotation: -2,
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="about-hero relative w-full max-w-5xl mx-auto px-4 py-20 flex flex-col md:flex-row items-center justify-between gap-10 overflow-hidden border-t-2 border-foreground/20"
    >
      <div className="about-hero-bio flex-1 space-y-6 text-center md:text-left">
        <div className="about-hero-header space-y-2">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase text-foreground">
            Hi, I'm Usamah
          </h2>
        </div>
        <p className="text-sm sm:text-base text-foreground/80 leading-relaxed max-w-xl font-medium">
          {t.about.description}
        </p>
        <p className="font-mono text-xs font-black uppercase tracking-widest text-emerald-500">
          Code / Design / Craft / Repeat
        </p>
      </div>

      {/* Portrait Frame: rotate(6deg), Emerald Border + Zinc Outline */}
      <div
        ref={portraitRef}
        className="about-hero-portrait relative w-48 sm:w-60 h-72 sm:h-84 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-emerald-500 outline outline-4 outline-zinc-800 dark:outline-zinc-200 transform rotate-6 shadow-2xl bg-zinc-950 group"
      >
        <Image
          src="/profile-v2.jpg"
          alt="Muhammad Usamah"
          fill
          sizes="(max-width: 640px) 192px, 240px"
          className="object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </div>
    </section>
  );
}
