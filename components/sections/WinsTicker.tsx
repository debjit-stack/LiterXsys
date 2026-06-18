"use client";
import type { Win } from "@/lib/content";

export function WinsTicker({ wins }: { wins: Win[] }) {
  if (!wins.length) return null;

  // Duplicate for seamless loop
  const doubled = [...wins, ...wins];

  return (
    <div className="bg-deep-slate border-y border-white/10 py-3 overflow-hidden ticker-wrap">
      <div className="flex animate-ticker whitespace-nowrap gap-0">
        {doubled.map((win, i) => (
          <span
            key={`${win.id}-${i}`}
            className="inline-flex items-center gap-2 px-8 text-sm text-pale-gray/80"
          >
            <span>{win.title}</span>
            <span className="text-cyan-glow/40">•</span>
          </span>
        ))}
      </div>
    </div>
  );
}
