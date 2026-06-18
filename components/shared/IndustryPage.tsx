
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, ArrowRight } from "lucide-react";

export interface IndustryPageProps {
  badge: string;
  title: string;
  highlight: string;
  description: string;
  painPoints: string[];
  solutions: { title: string; desc: string }[];
  features: string[];
  stats: { value: string; label: string }[];
  ctaHeading: string;
  ctaSubtext: string;
  accentColor?: string;
}

export function IndustryPageTemplate({
  badge, title, highlight, description,
  painPoints, solutions, features, stats,
  ctaHeading, ctaSubtext,
}: IndustryPageProps) {
  return (
    <>
      <PageHero badge={badge} title={title} highlight={highlight} description={description} />

      {/* Pain points */}
      <section className="bg-deep-slate border-y border-white/10 py-12 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <p className="text-pale-gray/50 text-xs font-bold uppercase tracking-widest text-center mb-6">Sound familiar?</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {painPoints.map((p) => (
              <div key={p} className="bg-charcoal border border-white/10 rounded-xl px-4 py-3 text-pale-gray/70 text-sm text-center">
                &ldquo;{p}&rdquo;
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Our Solution</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">What We Build For You</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {solutions.map((s) => (
              <div key={s.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{s.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Features checklist */}
          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">Everything Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Your Complete Digital Package</h2>
                <ul className="space-y-3">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-cyan-glow shrink-0 mt-0.5" />{f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="bg-charcoal border border-white/10 rounded-2xl p-6 text-center">
                    <div className="font-jakarta font-extrabold text-white text-3xl mb-1">{s.value}</div>
                    <div className="text-pale-gray/50 text-xs">{s.label}</div>
                  </div>
                ))}
                <div className="col-span-2">
                  <Link href="/free-audit"
                    className="flex items-center justify-center gap-2 w-full bg-electric-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-full text-sm transition-all hover:scale-105">
                    Get a Free Quote <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading={ctaHeading} subtext={ctaSubtext} />
    </>
  );
}
