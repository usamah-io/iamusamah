"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";
import { useApp } from "./app-context";
import content from "@/data/content.json";

export default function FAQ() {
  const { language } = useApp();
  const t = content[language].faq;

  const [activeId, setActiveId] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleFAQ = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  // Perform smooth GSAP heights animation on state change
  useEffect(() => {
    t.items.forEach((faq) => {
      const el = contentRefs.current[faq.id];
      if (el) {
        const isOpen = activeId === faq.id;
        gsap.to(el, {
          height: isOpen ? el.scrollHeight : 0,
          opacity: isOpen ? 1 : 0,
          duration: 0.4,
          ease: "power3.out",
        });
      }
    });
  }, [activeId, t.items]);

  // Viewport entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-item",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
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
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-12 px-4 w-full max-w-3xl mx-auto relative"
    >
      <div className="text-center mb-12 space-y-2">
        <h2 className="text-3xl sm:text-5xl font-black uppercase text-foreground tracking-tight">
          Pertanyaan Yang Sering Diajukan (FAQ)
        </h2>
        <p className="text-foreground/80 text-sm sm:text-base font-medium leading-relaxed">
          {t.subtitle}
        </p>
      </div>

      <div className="space-y-4">
        {t.items.map((faq) => {
          const isOpen = activeId === faq.id;

          return (
            <div
              key={faq.id}
              className="faq-item bg-background border-4 border-foreground rounded-[1.5rem] overflow-hidden shadow-[6px_6px_0px_var(--fg)] transition-all"
            >
              {/* Accordion Trigger Header */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-6 flex items-center justify-between gap-4 font-black uppercase text-foreground transition-colors cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-base sm:text-lg tracking-tight">{faq.question}</span>
                <span
                  className={`w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-emerald-500 text-black font-bold shrink-0 shadow-[2px_2px_0px_#000000] transition-transform duration-300 ${
                    isOpen ? "rotate-180 bg-[var(--accent1)]" : ""
                  }`}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </button>

              {/* Accordion Content Body */}
              <div
                ref={(el) => {
                  contentRefs.current[faq.id] = el;
                }}
                className="height-0 overflow-hidden px-6"
                style={{ height: 0, opacity: 0 }}
              >
                <p className="text-sm sm:text-base text-foreground/80 font-medium pb-6 leading-relaxed border-t-2 border-foreground/10 pt-4">
                  {faq.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
