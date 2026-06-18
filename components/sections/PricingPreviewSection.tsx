import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import type { Pricing } from "@/lib/content";

export function PricingPreviewSection({ pricing }: { pricing: Pricing }) {
  return (
    <section className="section-light py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Pricing</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            No hidden fees. No confusing tiers. Just clear packages built for local businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pricing.packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative rounded-2xl p-7 border transition-all ${
                pkg.highlight
                  ? "bg-midnight-navy border-electric-blue shadow-xl shadow-electric-blue/20 scale-[1.02]"
                  : "bg-white border-soft-gray hover:border-electric-blue/30 hover:shadow-md"
              }`}
            >
              {pkg.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                  {pkg.badge}
                </span>
              )}

              <h3 className={`font-jakarta font-bold text-xl mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                {pkg.name}
              </h3>
              <p className={`text-xs mb-5 ${pkg.highlight ? "text-pale-gray/60" : "text-charcoal/50"}`}>
                {pkg.ideal_for}
              </p>

              <div className={`font-jakarta font-extrabold text-3xl mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                ₹{formatPrice(pkg.starting_from)}
                <span className={`text-sm font-normal ml-1 ${pkg.highlight ? "text-pale-gray/50" : "text-charcoal/40"}`}>
                  starting from
                </span>
              </div>

              <ul className="space-y-2.5 my-6">
                {pkg.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check size={14} className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-cyan-glow" : "text-emerald-trust"}`} />
                    <span className={pkg.highlight ? "text-pale-gray/80" : "text-charcoal/70"}>{f}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/free-audit"
                className={`block w-full text-center font-bold py-3 rounded-full text-sm transition-all ${
                  pkg.highlight
                    ? "bg-electric-blue hover:bg-blue-600 text-white"
                    : "border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"
                }`}
              >
                {pkg.cta}
              </Link>
            </div>
          ))}
        </div>

        <p className="text-center text-charcoal/50 text-sm mt-8">{pricing.note}</p>

        <div className="text-center mt-4">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-2 text-electric-blue font-semibold text-sm hover:underline"
          >
            See full pricing details <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
