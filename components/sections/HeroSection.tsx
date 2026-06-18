"use client";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Stats } from "@/lib/content";

export function HeroSection({ stats }: { stats: Stats }) {
  return (
    <section className="gradient-mesh min-h-[92vh] flex flex-col items-center justify-center text-center px-4 sm:px-6 py-24 relative overflow-hidden">
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-glow text-xs font-semibold px-4 py-1.5 rounded-full mb-8 backdrop-blur-sm animate-fade-in-up">
          <Sparkles size={12} />
          Kolkata&apos;s Local Digital Partner
        </div>

        {/* Headline */}
        <h1
          className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] tracking-tight mb-6 animate-fade-in-up"
          style={{ animationDelay: "0.1s", opacity: 0 }}
        >
          We Build{" "}
          <span className="text-gradient">Digital Engines</span>
          <br />
          for Local Businesses
        </h1>

        {/* Sub */}
        <p
          className="text-pale-gray/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Websites, Android Apps, SEO, AI Chatbots &amp; WhatsApp Automation — 
          everything your business needs to grow online. Fast delivery. No fluff. Real results.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          <Link
            href="/free-audit"
            className="group inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-electric-blue/30"
          >
            Get Free Website Audit
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-base transition-all backdrop-blur-sm"
          >
            See Our Work
          </Link>
        </div>

        {/* Stats strip */}
        <div
          className="grid grid-cols-2 sm:grid-cols-5 gap-6 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          {[
            { value: `${stats.projects_delivered}+`, label: "Projects Delivered" },
            { value: `${stats.clients_served}+`, label: "Clients Served" },
            { value: `${stats.satisfaction_rate}%`, label: "Satisfaction Rate" },
            { value: `${stats.years_active}+`, label: "Year Active" },
            { value: `${stats.cities_served}`, label: "City Served" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-1">
                {stat.value}
              </div>
              <div className="text-pale-gray/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-off-white to-transparent" />
    </section>
  );
}
