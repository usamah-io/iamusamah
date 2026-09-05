"use client";

import { ReactNode } from "react";
import { ExternalLink } from "lucide-react";

export interface CardAction {
  label: string;
  href?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export interface FloatingBadge {
  text: string;
  variant?: "neon" | "emerald" | "amber" | "dark" | "outline";
  icon?: ReactNode;
}

export interface BrowserMockupCardProps {
  layout?: "horizontal" | "vertical";
  domain: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  poster?: string;
  aspectRatio?: string;
  objectFit?: "cover" | "contain";
  floatingBadge?: FloatingBadge;
  secondaryBadge?: FloatingBadge;
  categoryLabel: string;
  title: string;
  description: string;
  tags: string[];
  primaryAction: CardAction;
  secondaryAction?: CardAction;
  extraAction?: CardAction;
  isHighlighted?: boolean;
  onMediaClick?: () => void;
  className?: string;
}

// GitHub Icon Component
function GithubIcon({ className = "w-3.5 h-3.5 shrink-0" }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  );
}

// Extract Google Drive File ID if present
function extractDriveFileId(url: string): string | null {
  if (!url) return null;
  const match = url.match(
    /(?:drive\.google\.com\/(?:file\/d\/|thumbnail\?.*id=|uc\?.*id=|open\?.*id=)|docs\.google\.com\/file\/d\/|lh3\.googleusercontent\.com\/d\/)([a-zA-Z0-9_-]+)/
  );
  if (match && match[1]) {
    return match[1];
  }
  if (/^[a-zA-Z0-9_-]{25,50}$/.test(url.trim())) {
    return url.trim();
  }
  return null;
}

function getResolvedMediaSrc(url: string, type: "image" | "video"): string {
  if (!url) return "";
  if (type === "image") {
    const driveId = extractDriveFileId(url);
    if (driveId && url.includes("drive.google.com")) {
      return `https://lh3.googleusercontent.com/d/${driveId}`;
    }
  }
  return url;
}

export default function BrowserMockupCard({
  layout = "vertical",
  domain,
  mediaType,
  mediaSrc,
  poster,
  aspectRatio,
  objectFit = "cover",
  floatingBadge,
  secondaryBadge,
  categoryLabel,
  title,
  description,
  tags,
  primaryAction,
  secondaryAction,
  extraAction,
  isHighlighted = false,
  onMediaClick,
  className = "",
}: BrowserMockupCardProps) {
  const resolvedMediaSrc = getResolvedMediaSrc(mediaSrc, mediaType);
  const driveFileId = mediaType === "video" ? extractDriveFileId(mediaSrc) : null;
  const streamUrl = driveFileId
    ? `/api/video/${driveFileId}`
    : resolvedMediaSrc;

  // ==========================================
  // MODE 1: LAYOUT HORIZONTAL (Khusus Volunteer Video)
  // ==========================================
  if (layout === "horizontal") {
    return (
      <div
        className={`group relative flex flex-col md:flex-row bg-background text-foreground border-4 border-foreground rounded-2xl overflow-hidden p-4 md:p-6 gap-6 items-center md:items-stretch w-full transition-all duration-300 shadow-[8px_8px_0px_var(--fg)] hover:shadow-[10px_10px_0px_var(--fg)] hover:-translate-y-1 ${className}`}
      >
        {/* SISI KIRI (VIDEO PLAYER POTRET 9:16) */}
        <div className="w-full md:w-[260px] lg:w-[280px] shrink-0 aspect-[9/16] rounded-xl overflow-hidden bg-black relative flex items-center justify-center group/media border-2 border-foreground shadow-[4px_4px_0px_var(--fg)]">
          {mediaType === "image" ? (
            <img
              src={resolvedMediaSrc}
              alt={title}
              loading="lazy"
              className="w-full h-full object-cover block group-hover/media:scale-105 transition-transform duration-500 ease-out"
            />
          ) : (
            <video
              src={streamUrl}
              poster={poster}
              controls
              playsInline
              preload="metadata"
              className="w-full h-full object-cover bg-black"
            >
              Browser Anda tidak mendukung pemutaran video HTML5.
            </video>
          )}

          {/* Status Badge Overlay in top-left of video */}
          {floatingBadge && (
            <div className="absolute top-3 left-3 z-10 bg-[var(--accent1)] text-black font-mono font-black text-xs uppercase px-3 py-1 rounded-full border-2 border-black flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] pointer-events-none">
              {floatingBadge.icon ? (
                floatingBadge.icon
              ) : (
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              )}
              <span>{floatingBadge.text}</span>
            </div>
          )}
        </div>

        {/* SISI KANAN (KETERANGAN & TOMBOL AKSI) */}
        <div className="flex-1 flex flex-col justify-between w-full py-1 space-y-4">
          <div className="space-y-3 flex flex-col items-start">
            {/* 1. Category Badge Only (Above Title) */}
            <span className="text-xs font-mono font-black tracking-wider text-black uppercase bg-[var(--accent1)] border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#000000] inline-block w-fit">
              {categoryLabel}
            </span>

            {/* 2. Judul Utama Video */}
            <h3 className="text-xl md:text-2xl font-black uppercase text-foreground tracking-tight leading-snug">
              {title}
            </h3>

            {/* 3. Deskripsi Video */}
            <p className="text-sm md:text-base text-foreground/80 font-sans leading-relaxed">
              {description}
            </p>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono font-bold text-foreground/90 bg-foreground/10 border border-foreground/30 px-2.5 py-1 rounded-full uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pt-4 border-t-2 border-foreground/20 flex flex-wrap items-center justify-end gap-3 mt-4 md:mt-0">
            {extraAction && (
              <div className="w-full sm:w-auto">
                {extraAction.href ? (
                  <a
                    href={extraAction.href}
                    className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-black uppercase text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                  >
                    {extraAction.icon}
                    <span>{extraAction.label}</span>
                  </a>
                ) : (
                  <button
                    onClick={extraAction.onClick}
                    className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-black uppercase text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                  >
                    {extraAction.icon}
                    <span>{extraAction.label}</span>
                  </button>
                )}
              </div>
            )}

            {secondaryAction && (
              <a
                href={secondaryAction.href || "#"}
                target={secondaryAction.href?.startsWith("http") ? "_blank" : undefined}
                rel={secondaryAction.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                onClick={secondaryAction.onClick}
                className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-black uppercase text-foreground hover:bg-foreground hover:text-background py-2.5 px-4 rounded-full bg-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer text-center"
              >
                {secondaryAction.icon ? (
                  secondaryAction.icon
                ) : secondaryAction.href?.includes("github.com") ? (
                  <GithubIcon className="w-4 h-4 shrink-0" />
                ) : (
                  <ExternalLink className="w-4 h-4 shrink-0" />
                )}
                <span>{secondaryAction.label}</span>
              </a>
            )}

            <a
              href={primaryAction.href || "#"}
              target={primaryAction.href?.startsWith("http") ? "_blank" : undefined}
              rel={primaryAction.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={primaryAction.onClick}
              className="inline-flex items-center justify-center gap-2 text-xs md:text-sm font-mono font-black uppercase text-black bg-[var(--accent1)] hover:bg-[var(--accent1)]/90 py-2.5 px-5 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer text-center"
            >
              <span>{primaryAction.label}</span>
              {primaryAction.icon ? (
                primaryAction.icon
              ) : (
                <svg
                  className="w-4 h-4 shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              )}
            </a>
          </div>
        </div>
      </div>
    );
  }

  // ==========================================
  // MODE 2: LAYOUT VERTIKAL KLASIK (Khusus Proyek Unggulan / Showcase)
  // ==========================================
  return (
    <div
      className={`group relative bg-background text-foreground border-4 border-foreground rounded-2xl overflow-hidden transition-all duration-300 flex flex-col justify-between col-span-1 shadow-[8px_8px_0px_var(--fg)] hover:shadow-[10px_10px_0px_var(--fg)] hover:-translate-y-1 ${className}`}
    >
      {/* 1. Header Mockup Browser */}
      <div className="bg-foreground/5 border-b-2 border-foreground/20 px-2.5 py-1.5 sm:px-4 sm:py-2.5 flex items-center justify-between gap-2 sm:gap-3 z-10 shrink-0 select-none">
        <div className="flex items-center gap-1 sm:gap-1.5">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56] border border-black/30 inline-block shadow-sm" title="Close" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E] border border-black/30 inline-block shadow-sm" title="Minimize" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[#27C93F] border border-black/30 inline-block shadow-sm" title="Expand" />
        </div>

        <div className="flex-1 max-w-[140px] sm:max-w-[280px] mx-auto bg-background px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full border-2 border-foreground/30 text-center flex items-center justify-center gap-1.5 shadow-[2px_2px_0px_var(--fg)]">
          <svg
            className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-foreground/60 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-[9px] sm:text-[11px] font-mono font-bold text-foreground/80 truncate">
            https://{domain}
          </span>
        </div>

        <div className="w-6 sm:w-10 flex justify-end">
          <span className="w-2 h-2 rounded-full bg-foreground/40" />
        </div>
      </div>

      {/* 2. Media Container Standard */}
      <div className={`relative w-full ${aspectRatio || "aspect-video"} overflow-hidden bg-zinc-950 dark:bg-black/95 group/media flex items-center justify-center border-b-2 border-foreground/20`}>
        {mediaType === "image" ? (
          <img
            src={resolvedMediaSrc}
            alt={title}
            loading="lazy"
            onClick={onMediaClick}
            className={`w-full h-full ${objectFit === "contain" ? "object-contain bg-zinc-900/90 p-1.5" : "object-cover"} block group-hover/media:scale-105 transition-transform duration-500 ease-out ${onMediaClick ? "cursor-pointer" : ""}`}
          />
        ) : (
          <video
            src={streamUrl}
            poster={poster}
            controls
            playsInline
            preload="metadata"
            className="w-full h-full object-cover bg-black"
          >
            Browser Anda tidak mendukung pemutaran video HTML5.
          </video>
        )}

        {floatingBadge && (
          <div className="absolute bottom-3 left-3 z-10 pointer-events-none">
            <span
              className="text-[10px] sm:text-xs font-mono font-black uppercase px-3 py-1 rounded-full flex items-center gap-1.5 shadow-[2px_2px_0px_#000000] border-2 border-black bg-[var(--accent1)] text-black"
            >
              {floatingBadge.icon ? (
                floatingBadge.icon
              ) : (
                <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              )}
              <span className="truncate">{floatingBadge.text}</span>
            </span>
          </div>
        )}

        {secondaryBadge && (
          <div className="absolute top-3 right-3 z-10 pointer-events-none">
            <span className="text-[10px] sm:text-xs font-mono font-black uppercase text-black bg-emerald-400 border-2 border-black px-3 py-1 rounded-full shadow-[2px_2px_0px_#000000]">
              {secondaryBadge.text}
            </span>
          </div>
        )}
      </div>

      {/* 3. Isi Kartu Vertikal */}
      <div className="p-4 sm:p-6 flex-1 flex flex-col justify-between space-y-4 bg-background text-foreground">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-[10px] sm:text-xs font-mono font-black tracking-wider text-black bg-[var(--accent1)] border-2 border-black px-2.5 py-0.5 rounded-full uppercase shadow-[2px_2px_0px_#000000]">
              {categoryLabel}
            </span>
          </div>

          <h3 className="text-base sm:text-xl font-black uppercase tracking-tight text-foreground leading-snug line-clamp-2">
            {title}
          </h3>

          <p className="text-xs sm:text-sm text-foreground/80 font-sans leading-relaxed line-clamp-2">
            {description}
          </p>

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 pt-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono font-bold text-foreground/90 bg-foreground/10 border border-foreground/30 px-2.5 py-0.5 rounded-full uppercase"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* 4. Tombol Aksi Vertikal */}
        <div className="pt-4 border-t-2 border-foreground/20 flex flex-wrap items-center gap-2">
          {extraAction && (
            <div className="w-full mb-1">
              {extraAction.href ? (
                <a
                  href={extraAction.href}
                  className="w-full text-center inline-flex items-center justify-center gap-2 text-xs font-mono font-black uppercase text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                >
                  {extraAction.icon}
                  <span>{extraAction.label}</span>
                </a>
              ) : (
                <button
                  onClick={extraAction.onClick}
                  className="w-full text-center inline-flex items-center justify-center gap-2 text-xs font-mono font-black uppercase text-black bg-emerald-500 hover:bg-emerald-400 py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
                >
                  {extraAction.icon}
                  <span>{extraAction.label}</span>
                </button>
              )}
            </div>
          )}

          {secondaryAction && (
            <a
              href={secondaryAction.href || "#"}
              target={secondaryAction.href?.startsWith("http") ? "_blank" : undefined}
              rel={secondaryAction.href?.startsWith("http") ? "noopener noreferrer" : undefined}
              onClick={secondaryAction.onClick}
              className="inline-flex flex-1 items-center justify-center gap-2 text-xs font-mono font-black uppercase text-foreground hover:bg-foreground hover:text-background py-2.5 px-4 rounded-full bg-background border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer text-center"
            >
              {secondaryAction.icon ? (
                secondaryAction.icon
              ) : secondaryAction.href?.includes("github.com") ? (
                <GithubIcon className="w-4 h-4 shrink-0" />
              ) : (
                <ExternalLink className="w-4 h-4 shrink-0" />
              )}
              <span>{secondaryAction.label}</span>
            </a>
          )}

          <a
            href={primaryAction.href || "#"}
            target={primaryAction.href?.startsWith("http") ? "_blank" : undefined}
            rel={primaryAction.href?.startsWith("http") ? "noopener noreferrer" : undefined}
            onClick={primaryAction.onClick}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 text-xs font-mono font-black uppercase text-black bg-[var(--accent1)] hover:bg-[var(--accent1)]/90 py-2.5 px-4 rounded-full shadow-[3px_3px_0px_#000000] border-2 border-black active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer text-center"
          >
            <span>{primaryAction.label}</span>
            {primaryAction.icon ? (
              primaryAction.icon
            ) : (
              <svg
                className="w-4 h-4 shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            )}
          </a>
        </div>
      </div>
    </div>
  );
}
