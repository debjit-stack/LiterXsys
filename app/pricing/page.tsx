import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { getPricing, getCampaign } from "@/lib/content";
import { formatPrice } from "@/lib/utils";
import { Check, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing — LiterXsys Techsol | Affordable Digital Solutions Kolkata",
  description: "Transparent, affordable pricing for websites, SEO, AI chatbots & automation. No hidden charges. Starting from ₹8,999.",
};

const addons = [
  { name: "AI Chatbot Integration", price: "12,999", note: "one-time" },
  { name: "WhatsApp Automation Setup", price: "9,999", note: "one-time" },
  { name: "Android App Development", price: "Custom", note: "based on features" },
  { name: "SEO Monthly Package", price: "4,999", note: "per month" },
  { name: "Digital Marketing Management", price: "7,999", note: "per month + ad spend" },
  { name: "Website Maintenance — Basic", price: "1,999", note: "per month" },
  { name: "ERP / Custom Dashboard", price: "Custom", note: "based on scope" },
];

export default function PricingPage() {
  const pricing = getPricing();
  const campaign = getCampaign();

  return (
    <>
      <PageHero
        badge="Pricing"
        title="Honest Pricing,"
        highlight="Zero Surprises"
        description="Everything is discussed and agreed upfront. No hidden fees, no last-minute extras. Just clear, fair pricing for quality work."
      />

      {/* Campaign banner */}
      {campaign.active && (
        <div className="bg-electric-blue py-4 px-4 sm:px-6 text-center">
          <span className="text-white font-semibold text-sm">
            🎉 {campaign.label}: {campaign.headline}
          </span>
          <Link href={campaign.cta_link} className="ml-3 bg-white text-electric-blue text-xs font-bold px-3 py-1 rounded-full hover:bg-off-white transition-colors">
            {campaign.cta_text}
          </Link>
        </div>
      )}

      {/* Main packages */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-14">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Website Packages</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Choose Your Starting Point</h2>
            <p className="text-charcoal/60 mt-3 max-w-xl mx-auto">These packages are starting points. Final scope and pricing are always confirmed after a free consultation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {pricing.packages.map((pkg) => (
              <div key={pkg.name} className={`relative rounded-2xl p-7 border transition-all ${pkg.highlight ? "bg-midnight-navy border-electric-blue shadow-xl shadow-electric-blue/20 scale-[1.02]" : "bg-white border-soft-gray"}`}>
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric-blue text-white text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                )}
                <h3 className={`font-jakarta font-bold text-xl mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>{pkg.name}</h3>
                <p className={`text-xs mb-5 ${pkg.highlight ? "text-pale-gray/60" : "text-charcoal/50"}`}>{pkg.ideal_for}</p>
                <div className={`font-jakarta font-extrabold text-3xl mb-1 ${pkg.highlight ? "text-white" : "text-charcoal"}`}>
                  ₹{formatPrice(pkg.starting_from)}
                  <span className={`text-sm font-normal ml-1 ${pkg.highlight ? "text-pale-gray/50" : "text-charcoal/40"}`}>starting from</span>
                </div>
                <ul className="space-y-2.5 my-6">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={14} className={`mt-0.5 shrink-0 ${pkg.highlight ? "text-cyan-glow" : "text-emerald-trust"}`} />
                      <span className={pkg.highlight ? "text-pale-gray/80" : "text-charcoal/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/free-audit" className={`block w-full text-center font-bold py-3 rounded-full text-sm transition-all ${pkg.highlight ? "bg-electric-blue hover:bg-blue-600 text-white" : "border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"}`}>
                  {pkg.cta}
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-charcoal/50 text-sm">{pricing.note}</p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="section-gray py-16 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Add-On Services</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal">Extend Your Package</h2>
            <p className="text-charcoal/60 mt-3">Add any of these to your website package or as standalone services.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addons.map((a) => (
              <div key={a.name} className="bg-white border border-soft-gray rounded-xl px-5 py-4 flex items-center justify-between gap-4">
                <span className="text-charcoal text-sm font-medium">{a.name}</span>
                <div className="text-right shrink-0">
                  <div className="font-jakarta font-bold text-charcoal text-sm">
                    {a.price.startsWith("Custom") ? a.price : `₹${a.price}`}
                  </div>
                  <div className="text-charcoal/40 text-xs">{a.note}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="section-light py-12 px-4 sm:px-6 border-t border-soft-gray">
        <div className="max-w-2xl mx-auto text-center">
          <h3 className="font-jakarta font-bold text-xl text-charcoal mb-3">Have questions about pricing?</h3>
          <p className="text-charcoal/60 text-sm mb-6">We are happy to explain any part of our pricing. No pressure, no sales tactics — just honest answers.</p>
          <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-emerald-trust hover:bg-green-500 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
            <MessageCircle size={15} /> Ask on WhatsApp
          </Link>
        </div>
      </section>

      <CTAStrip heading="Ready to get started?" subtext="Book a free consultation and get an exact quote in 24 hours." />
    </>
  );
}
