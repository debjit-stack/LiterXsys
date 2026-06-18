"use client";
import { useState } from "react";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import type { PortfolioItem } from "@/lib/content";

const TAG_COLORS: Record<string, string> = {
  website:    "bg-electric-blue/10 text-electric-blue",
  seo:        "bg-emerald-trust/10 text-emerald-trust",
  ai:         "bg-cyan-glow/10 text-cyan-glow",
  automation: "bg-amber-cta/10 text-amber-cta",
};

const FILTERS = ["All", "website", "seo", "ai", "automation"];

const INDUSTRY_GRADIENTS: Record<string, string> = {
  Restaurant: "from-orange-900 to-red-900",
  Fitness:    "from-green-900 to-emerald-900",
  Education:  "from-blue-900 to-indigo-900",
  Travel:     "from-cyan-900 to-teal-900",
};

export function PortfolioGrid({ items }: { items: PortfolioItem[] }) {
  const [active, setActive] = useState("All");

  const filtered = active === "All"
    ? items
    : items.filter((i) => i.tags.includes(active));

  return (
    <>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10 justify-center">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              active === f
                ? "bg-electric-blue text-white shadow-md shadow-electric-blue/30"
                : "bg-white border border-soft-gray text-charcoal/70 hover:border-electric-blue/40 hover:text-electric-blue"
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-charcoal/50 py-20">No projects in this category yet — check back soon!</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-soft-gray rounded-2xl overflow-hidden group hover:border-electric-blue/30 hover:shadow-xl hover:shadow-electric-blue/5 transition-all duration-300 hover:-translate-y-1"
          >
            {/* Mock preview image */}
            <div className={`relative h-52 bg-gradient-to-br ${INDUSTRY_GRADIENTS[item.industry] ?? "from-deep-slate to-charcoal"} flex items-center justify-center overflow-hidden`}>
              <div className="text-center">
                <span className="font-jakarta font-extrabold text-3xl text-white/20">{item.industry}</span>
                <p className="text-white/30 text-xs mt-1">Demo Project</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 right-4">
                <span className="bg-black/40 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full border border-white/20">
                  View Demo →
                </span>
              </div>
            </div>

            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-3">
                {item.tags.map((tag) => (
                  <span key={tag} className={`text-xs font-semibold px-2.5 py-1 rounded-full ${TAG_COLORS[tag] ?? "bg-soft-gray text-charcoal"}`}>
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="font-jakarta font-bold text-charcoal text-lg mb-2 group-hover:text-electric-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{item.description}</p>

              <div className="flex flex-wrap gap-2 mb-5">
                {item.tech.map((t) => (
                  <span key={t} className="text-[11px] bg-soft-gray text-charcoal/70 px-2.5 py-1 rounded-lg font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <Link
                href={item.demo_link}
                className="inline-flex items-center gap-2 text-electric-blue text-sm font-semibold hover:underline"
              >
                View Full Case Study <ExternalLink size={13} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
