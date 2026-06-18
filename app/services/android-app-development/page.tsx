import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Android App Development Kolkata — LiterXsys Techsol",
  description: "Custom Android apps for Kolkata businesses — ordering apps, booking systems, loyalty programs. Fast delivery. Affordable pricing.",
};

const useCases = [
  "Online ordering apps for restaurants",
  "Appointment booking for clinics & salons",
  "Loyalty reward apps for retail stores",
  "Course & class apps for training institutes",
  "Field staff & delivery tracking apps",
  "Inventory management for businesses",
];

const includes = [
  "Native Android app (APK + Play Store ready)",
  "Admin dashboard to manage app content",
  "Push notification system",
  "User login & profile management",
  "Payment gateway integration (Razorpay / UPI)",
  "WhatsApp & call integration",
  "3 months free bug fixes post-launch",
];

export default function AndroidAppPage() {
  return (
    <>
      <PageHero
        badge="Android App Development"
        title="Your Business in"
        highlight="Every Customer's Pocket"
        description="Custom Android apps that give your customers a direct, convenient way to order, book, and interact with your business — 24/7."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">Use Cases</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">Who Needs a Business App?</h2>
            <ul className="space-y-3 mb-8">
              {useCases.map((u) => (
                <li key={u} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={16} className="text-emerald-trust shrink-0 mt-0.5" />{u}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">Everything to Go Live</h2>
            <ul className="space-y-3">
              {includes.map((item) => (
                <li key={item} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={16} className="text-cyan-glow shrink-0 mt-0.5" />{item}
                </li>
              ))}
            </ul>
            <div className="mt-8 bg-midnight-navy rounded-2xl p-6 text-center">
              <Smartphone size={36} className="text-cyan-glow mx-auto mb-3 opacity-80" />
              <div className="font-jakarta font-extrabold text-white text-3xl mb-1">Custom Quote</div>
              <p className="text-pale-gray/60 text-sm mb-4">App pricing depends on features. Get a free estimate today.</p>
              <a href="/free-audit" className="block w-full text-center bg-cyan-glow hover:bg-cyan-500 text-midnight-navy font-bold py-3 rounded-full text-sm transition-colors">
                Get a Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Let&apos;s build your business app." subtext="Free consultation. Clear pricing. Fast delivery." />
    </>
  );
}
