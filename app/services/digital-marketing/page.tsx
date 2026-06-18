import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Megaphone, Target, Mail, BarChart } from "lucide-react";

export const metadata: Metadata = {
  title: "Digital Marketing Kolkata — LiterXsys Techsol",
  description: "Google Ads, Meta Ads, and email marketing for Kolkata businesses. Qualified leads, not just clicks.",
};

const channels = [
  { icon: Target, title: "Google Ads", desc: "Show up exactly when potential customers search for your services. Pay only for clicks from real prospects." },
  { icon: Megaphone, title: "Meta Ads (Facebook & Instagram)", desc: "Reach Kolkata customers by location, age, interest, and behaviour. Build awareness and generate leads at scale." },
  { icon: Mail, title: "Email Marketing", desc: "Nurture leads and retain existing customers with targeted email campaigns — automated and personalised." },
  { icon: BarChart, title: "Performance Reporting", desc: "Monthly reports with plain-English summaries: what worked, what we improved, and what is coming next." },
];

const includes = [
  "Campaign strategy & audience research",
  "Ad creative design (graphics + copy)",
  "Landing page setup & optimization",
  "A/B testing for best-performing ads",
  "Budget management & bid optimization",
  "Monthly performance report",
  "Dedicated account manager",
];

export default function DigitalMarketingPage() {
  return (
    <>
      <PageHero
        badge="Digital Marketing"
        title="Ads That Bring Real"
        highlight="Customers, Not Just Clicks"
        description="We run Google and Meta ad campaigns that target exactly the right people in Kolkata — and turn them into enquiries, bookings, and sales."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Channels We Manage</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Multi-Channel Marketing That Works Together</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-14">
            {channels.map((c) => {
              const Icon = c.icon;
              return (
                <div key={c.title} className="bg-white border border-soft-gray rounded-2xl p-6 flex gap-4">
                  <div className="shrink-0 w-11 h-11 bg-amber-cta/10 rounded-xl flex items-center justify-center">
                    <Icon size={20} className="text-amber-cta" />
                  </div>
                  <div>
                    <h3 className="font-jakarta font-bold text-charcoal text-base mb-1">{c.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-amber-cta text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Full Campaign Management</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-amber-cta shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="font-jakarta font-extrabold text-white text-5xl mb-2">₹7,999</div>
                <div className="text-pale-gray/50 text-sm mb-5">per month, starting from (excl. ad spend)</div>
                <p className="text-pale-gray/60 text-sm mb-6">Ad spend budget is separate and fully controlled by you. We manage it for maximum ROI.</p>
                <a href="/free-audit" className="inline-block bg-amber-cta hover:bg-yellow-400 text-midnight-navy font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
                  Get a Free Strategy Call
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to run ads that actually convert?" subtext="Free strategy call — we will audit your current ad spend for free." />
    </>
  );
}
