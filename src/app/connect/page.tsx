"use client";

import Link from "next/link";
import { ArrowLeft, Share2, Compass, Code, Send } from "lucide-react";
import { useApp } from "@/components/app-context";
import { CONNECT_DATA } from "@/data/connect-data";
import ConnectCard from "@/components/connect-card";

export default function ConnectPage() {
  const { language } = useApp();
  const isIndonesian = language === "id";

  const socialItems = CONNECT_DATA.filter((i) => i.group === "social");
  const developerItems = CONNECT_DATA.filter((i) => i.group === "developer");
  const contactItems = CONNECT_DATA.filter((i) => i.group === "contact");

  return (
    <main className="min-h-screen bg-background text-foreground font-sans relative z-10 overflow-x-hidden pt-28 pb-20 px-4 sm:px-6">
      <div className="w-full max-w-6xl mx-auto space-y-12">
        
        {/* Navigation Breadcrumb Bar */}
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
            <span>{isIndonesian ? "Pusat Koneksi & Sosial" : "Social & Direct Channels"}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto flex flex-col items-center gap-4 py-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-2 border-foreground bg-foreground/5 text-foreground text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_var(--fg)]">
            <Share2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
            <span>{isIndonesian ? "Terhubung & Berkolaborasi" : "Connect & Collaborate"}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase text-foreground tracking-tight leading-none text-center">
            {isIndonesian ? "Mari Terhubung" : "Let's Connect"}
          </h1>

          <p className="text-foreground/85 text-sm sm:text-base md:text-lg font-medium leading-relaxed max-w-2xl text-center">
            {isIndonesian
              ? "Temukan karya, ikuti perjalanan belajar saya, atau hubungi saya untuk berdiskusi dan berkolaborasi."
              : "Discover my creations, follow my daily learning journey, or get in touch for tech discussions and collaborations."}
          </p>
        </section>

        {/* 1. Group: Social Media (Two Instagram Cards + TikTok) */}
        <section aria-labelledby="heading-social" className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-3">
            <h2
              id="heading-social"
              className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIndonesian ? "Media Sosial & Edukasi" : "Social Media & Education"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground border border-foreground">
                {socialItems.length}
              </span>
            </h2>
            <span className="font-mono text-xs font-bold text-foreground/50 hidden sm:inline">
              [ Instagram • TikTok ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {socialItems.map((item) => (
              <ConnectCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 2. Group: Developer & Open Source */}
        <section aria-labelledby="heading-developer" className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-3">
            <h2
              id="heading-developer"
              className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <Code className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIndonesian ? "Pengembang & Open Source" : "Developer & Open Source"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground border border-foreground">
                {developerItems.length}
              </span>
            </h2>
            <span className="font-mono text-xs font-bold text-foreground/50 hidden sm:inline">
              [ GitHub Repositories ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {developerItems.map((item) => (
              <ConnectCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        {/* 3. Group: Direct Contact (WhatsApp & Gmail) */}
        <section aria-labelledby="heading-contact" className="space-y-6">
          <div className="flex items-center justify-between border-b-2 border-foreground/20 pb-3">
            <h2
              id="heading-contact"
              className="font-mono text-sm sm:text-base font-black uppercase tracking-wider text-foreground flex items-center gap-2"
            >
              <Send className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{isIndonesian ? "Kontak Langsung & Formal" : "Direct & Formal Contact"}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-foreground/10 text-foreground border border-foreground">
                {contactItems.length}
              </span>
            </h2>
            <span className="font-mono text-xs font-bold text-foreground/50 hidden sm:inline">
              [ WhatsApp • Gmail ]
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {contactItems.map((item) => (
              <ConnectCard key={item.id} item={item} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}
