import type { Win } from "@/lib/content";

export function WinsTickerSection({ wins }: { wins: Win[] }) {
  if (!wins.length) return null;
  // Duplicate for seamless infinite loop
  const doubled = [...wins, ...wins];

  return (
    <div className="bg-deep-slate border-y border-white/10 py-3 overflow-hidden ticker-wrap">
      <div className="animate-ticker flex gap-0 whitespace-nowrap" style={{ width: "max-content" }}>
        {doubled.map((win, i) => (
          <span key={`${win.id}-${i}`} className="inline-flex items-center gap-3 px-8 text-sm text-pale-gray/80">
            <span>{win.title}</span>
            <span className="text-electric-blue/40">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
