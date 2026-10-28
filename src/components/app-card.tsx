"use client";

import Image from "next/image";
import { AppItem } from "@/data/apps-data";
import { useApp } from "./app-context";
import { ExternalLink, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";

interface AppCardProps {
  app: AppItem;
}

export default function AppCard({ app }: AppCardProps) {
  const { language } = useApp();
  const isIndonesian = language === "id";

  const isDevelopment = app.status.type === "development";

  return (
    <article
      aria-labelledby={`app-title-${app.id}`}
      className="relative flex flex-col justify-between rounded-[2rem] border-4 border-foreground bg-background p-6 sm:p-8 shadow-[6px_6px_0px_var(--fg)] transition-all duration-300 hover:shadow-[10px_10px_0px_var(--fg)] hover:-translate-y-1"
    >
      <div>
        {/* Top Header: Icon + Name + Category + Status */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b-2 border-foreground/20">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border-2 border-foreground bg-foreground/5 p-2 flex items-center justify-center shrink-0 shadow-[3px_3px_0px_var(--fg)] overflow-hidden">
              <Image
                src={app.icon}
                alt={`${app.name} icon`}
                width={80}
                height={80}
                className="object-contain w-full h-full"
              />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3
                  id={`app-title-${app.id}`}
                  className="text-2xl sm:text-3xl font-black uppercase text-foreground tracking-tight"
                >
                  {app.name}
                </h3>
                {app.id === "sks-master" && (
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-black uppercase bg-[var(--accent1)] text-black border border-foreground">
                    <Sparkles className="w-3 h-3 fill-black shrink-0" />
                    Top 4 Finalist
                  </span>
                )}
              </div>
              <span className="font-mono text-xs font-black uppercase tracking-wider text-[var(--accent1)] mt-0.5 block">
                {isIndonesian ? app.category.id : app.category.en}
              </span>
            </div>
          </div>

          {/* Status Badge */}
          <div className="shrink-0 self-start sm:self-auto">
            {isDevelopment ? (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-black uppercase bg-amber-400 text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{isIndonesian ? app.status.label.id : app.status.label.en}</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-black uppercase bg-emerald-500 text-black border-2 border-foreground shadow-[2px_2px_0px_var(--fg)]">
                <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                <span>{isIndonesian ? app.status.label.id : app.status.label.en}</span>
              </span>
            )}
          </div>
        </div>

        {/* Mascot badge for PyQuest */}
        {app.mascot && (
          <div className="mt-4 p-3 rounded-2xl bg-foreground/5 border-2 border-foreground/30 flex items-center gap-3">
            <div className="w-10 h-10 shrink-0 relative">
              <Image
                src={app.mascot}
                alt="PyBot mascot"
                width={40}
                height={40}
                className="object-contain w-full h-full"
              />
            </div>
            <p className="text-xs font-mono font-bold text-foreground/80">
              {isIndonesian
                ? "Didukung robot pemandu PyBot dengan misi logika & sintaks interaktif."
                : "Powered by PyBot interactive guide robot with logic & syntax missions."}
            </p>
          </div>
        )}

        {/* Development Note Alert for Studee */}
        {isDevelopment && app.status.note && (
          <div className="mt-4 p-3.5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 text-amber-700 dark:text-amber-300 text-xs font-medium leading-relaxed flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-amber-500" />
            <span>{isIndonesian ? app.status.note.id : app.status.note.en}</span>
          </div>
        )}

        {/* Description */}
        <p className="text-sm sm:text-base text-foreground/85 font-medium leading-relaxed mt-5">
          {isIndonesian ? app.description.id : app.description.en}
        </p>

        {/* Key Features List */}
        <div className="mt-6 space-y-2">
          <h4 className="font-mono text-xs font-black uppercase tracking-wider text-foreground/60 mb-2">
            {isIndonesian ? "Fitur Utama:" : "Key Features:"}
          </h4>
          <ul className="grid grid-cols-1 gap-2.5">
            {(isIndonesian ? app.features.id : app.features.en).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90 font-medium leading-normal"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-6 pt-5 border-t-2 border-foreground/10 flex flex-wrap gap-2 items-center">
          <span className="font-mono text-[11px] font-black uppercase text-foreground/50 mr-1">
            Tech:
          </span>
          {app.tech.map((t) => (
            <span
              key={t}
              className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full border border-foreground/30 bg-foreground/5 text-foreground"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 pt-6 border-t-2 border-foreground/20 flex flex-wrap items-center justify-between gap-4">
        <a
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 font-mono text-xs font-black uppercase px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
        >
          <span>{isIndonesian ? app.primaryAction.label.id : app.primaryAction.label.en}</span>
          <ExternalLink className="w-4 h-4" />
        </a>

        {app.repoUrl && (
          <a
            href={app.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 font-mono text-xs font-black uppercase px-5 py-3 rounded-full border-2 border-foreground bg-background hover:bg-foreground/10 text-foreground shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>{isIndonesian ? "Repositori" : "Repository"}</span>
          </a>
        )}
      </div>
    </article>
  );
}
