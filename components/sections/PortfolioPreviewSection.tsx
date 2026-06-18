import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/lib/content";

const TAG_COLORS: Record<string, string> = {
  website: "bg-electric-blue/10 text-electric-blue",
  seo: "bg-emerald-trust/10 text-emerald-trust",
  ai: "bg-cyan-glow/10 text-cyan-glow",
  automation: "bg-amber-cta/10 text-amber-cta",
};

export function PortfolioPreviewSection({ items }: { items: PortfolioItem[] }) {
  const preview = items.slice(0, 3);

  return (
    <section className="section-light py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Our Work</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight">
              Recent Projects
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-electric-blue font-semibold text-sm hover:underline shrink-0"
          >
            View All Projects <ArrowRight size={14} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {preview.map((item) => (
            <div
              key={item.id}
              className="bg-white border border-soft-gray rounded-2xl overflow-hidden group hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="relative h-48 bg-gradient-to-br from-deep-slate to-charcoal flex items-center justify-center overflow-hidden">
                <span className="font-jakarta font-bold text-2xl text-white/20">{item.industry}</span>
                <div className="absolute inset-0 bg-electric-blue/5 group-hover:bg-electric-blue/10 transition-colors" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {item.tags.map((tag) => (
                    <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[tag] ?? "bg-soft-gray text-charcoal"}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2 group-hover:text-electric-blue transition-colors">
                  {item.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((t) => (
                    <span key={t} className="text-[11px] bg-soft-gray text-charcoal/70 px-2 py-0.5 rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={item.demo_link}
                  className="inline-flex items-center gap-1.5 text-electric-blue text-sm font-semibold hover:underline"
                >
                  View Demo <ExternalLink size={12} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
