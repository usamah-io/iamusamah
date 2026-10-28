"use client";

import { useState } from "react";
import { ConnectItem } from "@/data/connect-data";
import { useApp } from "./app-context";
import { ExternalLink, Copy, Check, Mail, MessageCircle } from "lucide-react";

interface ConnectCardProps {
  item: ConnectItem;
}

export default function ConnectCard({ item }: ConnectCardProps) {
  const { language } = useApp();
  const isIndonesian = language === "id";
  const [copied, setCopied] = useState(false);

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const textToCopy =
      item.iconType === "gmail"
        ? item.handle
        : item.iconType === "whatsapp"
        ? item.handle
        : item.url;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const renderIcon = () => {
    switch (item.iconType) {
      case "instagram":
        return (
          <svg className="w-6 h-6 fill-current text-[#E1306C]" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
        );
      case "github":
        return (
          <svg className="w-6 h-6 fill-current text-foreground" viewBox="0 0 24 24">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
          </svg>
        );
      case "whatsapp":
        return <MessageCircle className="w-6 h-6 text-[#25D366]" />;
      case "gmail":
        return <Mail className="w-6 h-6 text-[#EA4335]" />;
      case "tiktok":
        return (
          <svg className="w-6 h-6 fill-current text-foreground" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.86.12V9.42a6.34 6.34 0 0 0-.86-.06 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.16 8.16 0 0 0 4.77 1.52V6.82a4.85 4.85 0 0 1-1-.13z" />
          </svg>
        );
      default:
        return <ExternalLink className="w-6 h-6 text-foreground" />;
    }
  };

  return (
    <article
      aria-labelledby={`connect-title-${item.id}`}
      className="group relative flex flex-col justify-between rounded-[2rem] border-4 border-foreground bg-background p-6 sm:p-7 shadow-[5px_5px_0px_var(--fg)] transition-all duration-300 hover:shadow-[8px_8px_0px_var(--fg)] hover:-translate-y-1"
    >
      <div>
        {/* Top Header: Platform Icon + Label + Copy Button */}
        <div className="flex items-start justify-between gap-3 pb-5 border-b-2 border-foreground/20">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl border-2 border-foreground bg-foreground/5 p-2.5 flex items-center justify-center shrink-0 shadow-[2px_2px_0px_var(--fg)]">
              {renderIcon()}
            </div>
            <div>
              <span className="font-mono text-[11px] font-black uppercase tracking-wider text-[var(--accent1)] block">
                {isIndonesian ? item.label.id : item.label.en}
              </span>
              <h3
                id={`connect-title-${item.id}`}
                className="text-xl sm:text-2xl font-black uppercase text-foreground tracking-tight leading-tight"
              >
                {item.handle}
              </h3>
            </div>
          </div>

          {/* Quick Copy Button */}
          <button
            onClick={handleCopy}
            title={isIndonesian ? "Salin ke papan klip" : "Copy to clipboard"}
            aria-label={isIndonesian ? `Salin ${item.handle}` : `Copy ${item.handle}`}
            className="p-2 rounded-xl border-2 border-foreground bg-foreground/5 hover:bg-foreground hover:text-background text-foreground transition-all cursor-pointer shadow-[2px_2px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] shrink-0"
          >
            {copied ? (
              <span className="flex items-center gap-1 font-mono text-[10px] font-black uppercase text-emerald-500">
                <Check className="w-4 h-4 stroke-[3]" />
              </span>
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Platform Display Name */}
        <div className="mt-4">
          <span className="font-mono text-xs font-bold text-foreground/60 uppercase">
            {item.name}
          </span>
          <p className="text-sm text-foreground/85 font-medium leading-relaxed mt-1">
            {isIndonesian ? item.description.id : item.description.en}
          </p>
        </div>
      </div>

      {/* Primary Action Button */}
      <div className="mt-6 pt-5 border-t-2 border-foreground/20 flex items-center justify-between gap-4">
        <a
          href={item.url}
          target={item.url.startsWith("mailto:") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          className="w-full inline-flex items-center justify-center gap-2 font-mono text-xs font-black uppercase py-3 px-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black border-2 border-foreground shadow-[3px_3px_0px_var(--fg)] active:translate-x-[1px] active:translate-y-[1px] transition cursor-pointer"
        >
          <span>{isIndonesian ? item.actionLabel.id : item.actionLabel.en}</span>
          <ExternalLink className="w-4 h-4 shrink-0" />
        </a>
      </div>
    </article>
  );
}
