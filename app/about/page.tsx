import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { getStats } from "@/lib/content";

import { Target, Eye, Heart, Award, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us — LiterXsys Techsol | Kolkata Digital Agency",
  description: "We are a Kolkata-based digital agency helping local businesses grow online through websites, SEO, AI chatbots, and automation.",
};

const values = [
  { icon: Target, title: "Results First", desc: "Every decision we make is measured against one question: does this grow your business?" },
  { icon: Heart, title: "Genuinely Local", desc: "We are a Kolkata business. We understand the local market, your customers, and your challenges." },
  { icon: Zap, title: "Speed Without Sacrifice", desc: "Fast delivery doesn't mean cutting corners. We move quickly and build to last." },
  { icon: Award, title: "Transparent Always", desc: "No hidden fees, no vague timelines, no jargon. Just honest work and honest pricing." },
  { icon: Users, title: "Partnership Mindset", desc: "We don't do projects and disappear. We stay invested in your growth long after launch." },
  { icon: Eye, title: "Attention to Detail", desc: "The difference between good and great is in the details — and we obsess over them." },
];

const timeline = [
  { year: "2025", title: "LiterXsys Founded", desc: "Started with a single mission: help Kolkata businesses compete online." },
  { year: "2025", title: "First Client Delivered", desc: "Successfully launched our first business website with full SEO setup." },
  { year: "2026", title: "AI & Automation Added", desc: "Expanded into AI chatbots and WhatsApp automation for deeper business impact." },
  { year: "2026", title: "Growing Our Reach", desc: "Serving clients across Kolkata and expanding across West Bengal." },
];

export default function AboutPage() {
  const stats = getStats();

  return (
    <>
      <PageHero
        badge="Who We Are"
        title="Built in Kolkata,"
        highlight="Built for Kolkata"
        description="We are a lean, passionate digital agency helping local businesses build a serious online presence — without the corporate price tag or agency runaround."
      />

      {/* Stats strip */}
      <section className="bg-deep-slate py-10 px-4 sm:px-6 border-y border-white/10">
        <div className="max-w-content mx-auto grid grid-cols-2 sm:grid-cols-5 gap-6 text-center">
          {[
            { value: `${stats.projects_delivered}+`, label: "Projects Delivered" },
            { value: `${stats.clients_served}+`, label: "Clients Served" },
            { value: `${stats.satisfaction_rate}%`, label: "Satisfaction Rate" },
            { value: `${stats.years_active}+`, label: "Year Active" },
            { value: `${stats.cities_served}`, label: "City Served" },
          ].map((s) => (
            <div key={s.label}>
              <div className="font-jakarta font-extrabold text-3xl text-white mb-1">{s.value}</div>
              <div className="text-pale-gray/60 text-xs">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">Our Story</span>
              <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight mb-6">
                Why We Started LiterXsys
              </h2>
              <div className="space-y-4 text-charcoal/70 leading-relaxed text-base">
                <p>
                  Most small businesses in Kolkata know they need a digital presence — but they get burned by overpriced agencies, poor delivery, or websites that look outdated the moment they launch.
                </p>
                <p>
                  We started LiterXsys to fix that. Our goal is simple: give local businesses the same quality of digital solutions that large companies enjoy — at a price that makes sense and with a team that actually cares.
                </p>
                <p>
                  Every website we build, every chatbot we deploy, every SEO campaign we run — it&apos;s all aimed at one thing: making your business more money and saving you more time.
                </p>
              </div>
            </div>
            {/* Founder Card */}
            <div className="bg-white border border-soft-gray rounded-3xl p-8 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-electric-blue to-cyan-glow flex items-center justify-center font-jakarta font-extrabold text-white text-3xl mb-5">
                F
              </div>
              <div className="font-jakarta font-bold text-charcoal text-xl mb-1">[Founder Name]</div>
              <div className="text-electric-blue text-sm font-semibold mb-4">Founder & CEO, LiterXsys Techsol</div>
              <p className="text-charcoal/65 text-sm leading-relaxed">
                [Founder bio placeholder — add your story here. What drove you to start LiterXsys? What&apos;s your background? What do you believe about digital growth for local businesses?]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-gray py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What We Stand For</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                  <div className="w-11 h-11 bg-electric-blue/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-electric-blue" />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{v.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">Our Journey</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-white leading-tight">How We Got Here</h2>
          </div>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-white/10" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <div key={i} className={`relative flex gap-6 sm:gap-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-3 h-3 bg-electric-blue rounded-full border-2 border-midnight-navy mt-1.5" />
                  <div className={`ml-10 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? "sm:pl-8" : "sm:pr-8 sm:text-right"}`}>
                    <span className="font-mono text-cyan-glow text-xs font-bold tracking-widest">{item.year}</span>
                    <h3 className="font-jakarta font-bold text-white text-base mt-1 mb-1">{item.title}</h3>
                    <p className="text-pale-gray/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Want to Work With Us?"
        subtext="Book a free consultation and let's talk about your business goals."
      />
    </>
  );
}
