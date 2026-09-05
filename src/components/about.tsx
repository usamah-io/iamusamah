"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
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
        { rotation: 5, y: 30 },
        {
          rotation: -2,
          y: -20,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <motion.section
      ref={sectionRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="about-hero relative w-full max-w-4xl mx-auto px-4 py-16 sm:py-24 flex flex-col items-center justify-center text-center gap-8 overflow-hidden border-t-2 border-foreground/20"
    >
      {/* 1. TOP: Centered Large Title */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="about-hero-header text-center space-y-2"
      >
        <h2 className="text-4xl sm:text-6xl lg:text-8xl font-black uppercase text-foreground tracking-tight">
          Hi, I'm Usamah
        </h2>
      </motion.div>

      {/* 2. MIDDLE: Centered Framed Portrait Photo */}
      <motion.div
        ref={portraitRef}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="about-hero-portrait relative w-48 sm:w-64 h-72 sm:h-96 flex-shrink-0 rounded-2xl overflow-hidden border-4 border-[var(--accent1)] shadow-[8px_8px_0px_var(--fg)] transform rotate-3 bg-zinc-950 group my-2"
      >
        <Image
          src="/profile-v2.jpg"
          alt="Muhammad Usamah"
          fill
          sizes="(max-width: 640px) 192px, 256px"
          className="object-cover object-center z-0 transition-transform duration-500 group-hover:scale-105"
          priority
        />
      </motion.div>

      {/* 3. BOTTOM: Centered Bio Intro Paragraph & Tagline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="about-hero-bio max-w-2xl text-center space-y-4"
      >
        <p className="text-sm sm:text-base text-foreground/85 leading-relaxed font-medium">
          {t.about.description}
        </p>
        <p className="font-mono text-xs font-black uppercase tracking-widest text-[var(--accent1)]">
          Code / Design / Craft / Repeat
        </p>
      </motion.div>
    </motion.section>
  );
}
