import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Globe, Zap, Smartphone, Search, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Development Kolkata — LiterXsys Techsol",
  description: "Professional website development for Kolkata businesses. Fast, mobile-first, SEO-ready websites built with Next.js. Starting from ₹8,999.",
};

const features = [
  { icon: Zap, title: "Blazing Fast", desc: "Built with Next.js — loads under 2 seconds, even on mobile data." },
  { icon: Smartphone, title: "Mobile First", desc: "Over 70% of your customers visit on phone. Your site looks perfect on every screen." },
  { icon: Search, title: "SEO Ready", desc: "Every page is optimized for Google from day one. Start ranking immediately." },
  { icon: Shield, title: "Secure & Reliable", desc: "SSL certificates, secure hosting, and 99.9% uptime guaranteed." },
];

const includes = [
  "Custom responsive design (no templates)",
  "Up to 15 pages depending on package",
  "Contact forms & WhatsApp integration",
  "Google Analytics & Search Console setup",
  "Basic on-page SEO for all pages",
  "Fast hosting on Vercel",
  "Domain connection & DNS setup",
  "1–6 months free support",
];

const process = [
  { step: "01", title: "Discovery Call", desc: "We learn about your business, goals, and what makes you different." },
  { step: "02", title: "Design Mockup", desc: "We create a visual mockup of your homepage for your approval." },
  { step: "03", title: "Development", desc: "We build your full site — clean code, fast performance." },
  { step: "04", title: "Review & Launch", desc: "You review every page. We fix anything. Then we go live." },
];

export default function WebsiteDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="Website Development"
        title="Websites That Actually"
        highlight="Win Customers"
        description="We build fast, beautiful, conversion-focused websites for Kolkata businesses. Not just pretty pages — digital assets that bring in real enquiries."
      />

      {/* Features */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What You Get</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Built Different. Built Better.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-soft-gray rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-electric-blue" />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{f.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Includes */}
      <section className="section-gray py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">Everything Included</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight mb-8">
              No Hidden Extras.<br />Everything You Need.
            </h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={16} className="text-emerald-trust shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-midnight-navy rounded-3xl p-8 text-center">
            <Globe size={48} className="text-electric-blue mx-auto mb-5 opacity-80" />
            <div className="font-jakarta font-extrabold text-white text-4xl mb-1">₹8,999</div>
            <div className="text-pale-gray/50 text-sm mb-6">Starting from</div>
            <p className="text-pale-gray/70 text-sm leading-relaxed mb-6">
              Final price shared after understanding your exact requirements. No hidden charges.
            </p>
            <a
              href="/free-audit"
              className="block w-full text-center bg-electric-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-full text-sm transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-dark py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">Our Process</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-white">From Idea to Live in 14 Days</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((p) => (
              <div key={p.step} className="bg-charcoal border border-white/10 rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center font-mono font-bold text-white text-sm mx-auto mb-4">{p.step}</div>
                <h3 className="font-jakarta font-bold text-white text-base mb-2">{p.title}</h3>
                <p className="text-pale-gray/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready for a website that works?" subtext="Get a free consultation and custom quote in 24 hours." />
    </>
  );
}
