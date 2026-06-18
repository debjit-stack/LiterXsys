import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { ArrowLeft, Check, TrendingUp, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Gym & Fitness Website Demo — LiterXsys Portfolio",
  description: "A modern gym website with class schedules, membership plans, and WhatsApp booking — built by LiterXsys.",
};

const results = [
  { icon: Users,      value: "2x",    label: "Membership Enquiries" },
  { icon: TrendingUp, value: "Top 3", label: "Google — Gym Kolkata" },
  { icon: Clock,      value: "11 days", label: "Delivered In" },
];

const features = [
  "Hero section with video background support",
  "Class schedule timetable (weekly view)",
  "Membership plan cards with WhatsApp CTA",
  "Trainer profiles with specializations",
  "Transformation gallery (before/after)",
  "BMI calculator widget",
  "WhatsApp floating button",
  "Local SEO — ranking for 'gym near me'",
];

const techStack = ["Next.js 14", "Tailwind CSS", "Framer Motion", "WhatsApp API", "Vercel"];

export default function GymDemoPage() {
  return (
    <>
      <section className="gradient-mesh py-16 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-pale-gray/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-green-500/20 text-green-400 text-xs font-semibold px-3 py-1 rounded-full border border-green-500/30">Fitness</span>
            <span className="bg-electric-blue/20 text-electric-blue text-xs font-semibold px-3 py-1 rounded-full border border-electric-blue/30">Website</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-4">
            Gym & Fitness Center Website
          </h1>
          <p className="text-pale-gray/70 text-lg max-w-2xl">
            High-energy fitness website with class schedules, membership plans, trainer profiles, and WhatsApp booking integration.
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
                  www.yourgym.com
                </div>
              </div>
              <div className="h-72 bg-gradient-to-br from-green-900 to-emerald-900 flex flex-col items-center justify-center p-8 text-center">
                <div className="font-jakarta font-extrabold text-white text-2xl mb-2">PowerFit Gym</div>
                <div className="text-green-200/70 text-sm mb-5">Kolkata&apos;s Premier Fitness Center</div>
                <div className="grid grid-cols-3 gap-3 w-full max-w-xs">
                  {["Mon–Wed", "Thu–Fri", "Sat–Sun"].map((day) => (
                    <div key={day} className="bg-white/10 border border-white/20 rounded-xl p-2 text-center">
                      <div className="text-white/80 text-xs font-semibold mb-1">{day}</div>
                      <div className="text-white/40 text-[10px]">6am–9pm</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-charcoal/50 px-6 py-4 grid grid-cols-3 gap-3">
                {["Basic ₹999", "Pro ₹1,999", "Elite ₹3,499"].map((plan) => (
                  <div key={plan} className="bg-midnight-navy rounded-xl p-3 text-center">
                    <div className="text-pale-gray/60 text-xs">{plan}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">What Was Built</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">
              A Website That Converts Visitors Into Members
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

      <CTAStrip heading="Own a gym or fitness center?" subtext="Get a free demo of your future website — delivered in 24 hours." />
    </>
  );
}
