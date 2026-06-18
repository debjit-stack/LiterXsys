import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Search, TrendingUp, MapPin, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "SEO Optimization Kolkata — LiterXsys Techsol",
  description: "Rank on Google's first page for Kolkata searches. Local SEO, technical SEO, and content strategy for local businesses.",
};

const services = [
  { icon: MapPin, title: "Local SEO", desc: "Rank for 'near me' searches and Kolkata-specific keywords. Dominate your local area." },
  { icon: FileText, title: "On-Page SEO", desc: "Optimized titles, meta tags, headings, content structure, and internal linking for every page." },
  { icon: TrendingUp, title: "Technical SEO", desc: "Site speed, Core Web Vitals, mobile optimization, structured data, and crawlability fixes." },
  { icon: Search, title: "Content Strategy", desc: "Blog posts, landing pages, and content that ranks and converts — built around what your customers search." },
];

const includes = [
  "Full website SEO audit",
  "Keyword research (local + national)",
  "Google Business Profile optimization",
  "On-page optimization for all pages",
  "Technical SEO fixes (speed, mobile, schema)",
  "Monthly ranking report",
  "Google Search Console & Analytics setup",
  "Link building strategy",
];

export default function SEOPage() {
  return (
    <>
      <PageHero
        badge="SEO Optimization"
        title="Get Found on Google."
        highlight="Every Day."
        description="Local SEO that puts your business in front of Kolkata customers actively searching for what you offer — not just visits, but real enquiries."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Our SEO Services</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Every Layer of SEO, Covered</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-16">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-soft-gray rounded-2xl p-6 flex gap-4">
                  <div className="shrink-0 w-11 h-11 bg-emerald-trust/10 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-emerald-trust" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-charcoal text-base mb-1">{s.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Full SEO Package</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-emerald-trust shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="font-jakarta font-extrabold text-white text-5xl mb-2">₹4,999</div>
                <div className="text-pale-gray/50 text-sm mb-5">per month, starting from</div>
                <p className="text-pale-gray/60 text-sm mb-6">SEO is a long-term investment. Most clients see significant ranking improvements within 60–90 days.</p>
                <a href="/free-audit" className="inline-block bg-emerald-trust hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
                  Get Free SEO Audit
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to rank on Google?" subtext="Get a free SEO audit of your current website today." />
    </>
  );
}
