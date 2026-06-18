import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { ArrowLeft, Check, Globe, Clock, TrendingUp } from "lucide-react";

export const metadata: Metadata = {
  title: "Restaurant Website Demo — LiterXsys Portfolio",
  description: "A full-featured restaurant website with online menu, table booking, and local SEO — built by LiterXsys.",
};

const results = [
  { icon: TrendingUp, value: "3x", label: "More Online Enquiries" },
  { icon: Globe,      value: "#1",  label: "Google Ranking (Local)" },
  { icon: Clock,      value: "9 days", label: "Delivered In" },
];

const features = [
  "Full responsive design — mobile-first",
  "Digital menu with categories & photos",
  "Table reservation form with WhatsApp confirmation",
  "Google Maps integration",
  "Local SEO — ranking for 'restaurant near me'",
  "Customer reviews section",
  "Instagram feed integration",
  "Fast loading — under 1.8 seconds",
];

const techStack = ["Next.js 14", "Tailwind CSS", "Vercel Hosting", "Google Analytics", "WhatsApp API"];

export default function RestaurantDemoPage() {
  return (
    <>
      {/* Header */}
      <section className="gradient-mesh py-16 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-pale-gray/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-1 rounded-full border border-orange-500/30">Restaurant</span>
            <span className="bg-electric-blue/20 text-electric-blue text-xs font-semibold px-3 py-1 rounded-full border border-electric-blue/30">Website</span>
            <span className="bg-emerald-trust/20 text-emerald-trust text-xs font-semibold px-3 py-1 rounded-full border border-emerald-trust/30">SEO</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-4">
            Restaurant Digital Presence
          </h1>
          <p className="text-pale-gray/70 text-lg max-w-2xl">
            Complete online presence for a Kolkata restaurant — website, menu, booking system, and local SEO — delivered in under 10 days.
          </p>
        </div>
      </section>

      {/* Results strip */}
      <section className="bg-deep-slate border-y border-white/10 py-10 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-3 gap-6 text-center">
          {results.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label}>
                <Icon size={20} className="text-cyan-glow mx-auto mb-2 opacity-70" />
                <div className="font-jakarta font-extrabold text-white text-3xl mb-1">{r.value}</div>
                <div className="text-pale-gray/50 text-xs">{r.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Mock preview */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              {/* Browser mockup */}
              <div className="bg-deep-slate rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
                <div className="bg-charcoal px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-crimson-urgent/60" />
                    <div className="w-3 h-3 rounded-full bg-amber-cta/60" />
                    <div className="w-3 h-3 rounded-full bg-emerald-trust/60" />
                  </div>
                  <div className="flex-1 bg-midnight-navy rounded-md px-3 py-1 text-pale-gray/40 text-xs font-mono ml-2">
                    www.yourrestaurant.com
                  </div>
                </div>
                <div className="h-80 bg-gradient-to-br from-orange-900 to-red-900 flex flex-col items-center justify-center p-8 text-center">
                  <div className="font-jakarta font-extrabold text-white text-2xl mb-2">Spice Garden</div>
                  <div className="text-orange-200/70 text-sm mb-4">Authentic Bengali Cuisine · Kolkata</div>
                  <div className="flex gap-2 flex-wrap justify-center">
                    <span className="bg-white/10 border border-white/20 text-white text-xs px-3 py-1.5 rounded-full">View Menu</span>
                    <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">Reserve a Table</span>
                  </div>
                </div>
                <div className="bg-charcoal/50 px-6 py-4 grid grid-cols-3 gap-3">
                  {["Starters", "Main Course", "Desserts"].map((cat) => (
                    <div key={cat} className="bg-midnight-navy rounded-xl p-3 text-center">
                      <div className="h-10 bg-white/5 rounded-lg mb-2" />
                      <div className="text-pale-gray/60 text-xs">{cat}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">What Was Built</span>
              <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">
                Everything a Restaurant Needs Online
              </h2>
              <ul className="space-y-3 mb-8">
                {features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-charcoal/80 text-sm">
                    <Check size={15} className="text-emerald-trust shrink-0 mt-0.5" />{f}
                  </li>
                ))}
              </ul>

              <div className="mb-8">
                <p className="text-charcoal/50 text-xs font-bold uppercase tracking-wider mb-3">Tech Stack</p>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((t) => (
                    <span key={t} className="bg-soft-gray text-charcoal/70 text-xs px-3 py-1.5 rounded-lg font-mono">{t}</span>
                  ))}
                </div>
              </div>

              <Link href="/free-audit" className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all hover:scale-105">
                Build Something Like This
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Own a restaurant in Kolkata?" subtext="Get a free demo of what your website could look like — built in 24 hours." />
    </>
  );
}
