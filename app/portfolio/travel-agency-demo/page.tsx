import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { ArrowLeft, Check, TrendingUp, MessageSquare, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Travel Agency Website Demo — LiterXsys Portfolio",
  description: "A travel agency website with package showcase, enquiry system, and WhatsApp automation — built by LiterXsys.",
};

const results = [
  { icon: TrendingUp,    value: "5x",    label: "Booking Enquiries" },
  { icon: MessageSquare, value: "Auto",  label: "WhatsApp Follow-Up" },
  { icon: Clock,         value: "10 days", label: "Delivered In" },
];

const features = [
  "Travel package showcase with filters",
  "Individual package pages with itinerary",
  "WhatsApp enquiry & booking system",
  "Automated follow-up messages via WhatsApp",
  "Destination gallery with lightbox",
  "Customer testimonials & trip reviews",
  "EMI calculator for packages",
  "Local SEO for travel searches",
];

const techStack = ["Next.js 14", "Tailwind CSS", "WhatsApp API", "SEO", "Vercel"];

export default function TravelAgencyDemoPage() {
  return (
    <>
      <section className="gradient-mesh py-16 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-pale-gray/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-cyan-500/20 text-cyan-400 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-500/30">Travel</span>
            <span className="bg-electric-blue/20 text-electric-blue text-xs font-semibold px-3 py-1 rounded-full border border-electric-blue/30">Website</span>
            <span className="bg-amber-cta/20 text-amber-cta text-xs font-semibold px-3 py-1 rounded-full border border-amber-cta/30">Automation</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-4">
            Travel Agency Booking Site
          </h1>
          <p className="text-pale-gray/70 text-lg max-w-2xl">
            Package showcase website with WhatsApp booking and automated follow-up system — built for a Kolkata travel agency.
          </p>
        </div>
      </section>

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

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="bg-deep-slate rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <div className="bg-charcoal px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-crimson-urgent/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-cta/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-trust/60" />
                </div>
                <div className="flex-1 bg-midnight-navy rounded-md px-3 py-1 text-pale-gray/40 text-xs font-mono ml-2">
                  www.yourtravels.com
                </div>
              </div>
              <div className="h-72 bg-gradient-to-br from-cyan-900 to-teal-900 flex flex-col items-center justify-center p-8 text-center">
                <div className="font-jakarta font-extrabold text-white text-2xl mb-2">Bengal Voyages</div>
                <div className="text-cyan-200/70 text-sm mb-4">Explore India &amp; Beyond</div>
                <div className="grid grid-cols-3 gap-2 w-full max-w-xs">
                  {["Goa · 5D", "Kerala · 6D", "Manali · 7D"].map((pkg) => (
                    <div key={pkg} className="bg-white/10 border border-white/20 rounded-lg p-2 text-center">
                      <div className="text-white/70 text-xs">{pkg}</div>
                      <div className="text-emerald-trust text-xs font-bold mt-0.5">Book Now</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-charcoal/50 px-6 py-3 flex items-center justify-between">
                <span className="text-pale-gray/50 text-xs">WhatsApp Booking Available</span>
                <span className="bg-emerald-trust/20 text-emerald-trust text-xs px-3 py-1 rounded-full font-semibold">● Auto Follow-Up ON</span>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">What Was Built</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">
              A Booking Engine That Works While You Sleep
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
      </section>

      <CTAStrip heading="Run a travel agency?" subtext="Get your package showcase website live in under 2 weeks." />
    </>
  );
}
