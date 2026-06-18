import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Shield, Zap, RefreshCw, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Website Maintenance Kolkata — LiterXsys Techsol",
  description: "Monthly website maintenance for Kolkata businesses. Speed, security, updates, and backups — handled for you.",
};

const features = [
  { icon: Shield, title: "Security Updates", desc: "Regular security patches and SSL certificate management to keep your site safe." },
  { icon: Zap, title: "Performance Monitoring", desc: "We monitor your site speed and Core Web Vitals monthly and fix any degradation." },
  { icon: RefreshCw, title: "Content Updates", desc: "Need to update pricing, add photos, or change text? Done within 24 hours." },
  { icon: Eye, title: "Uptime Monitoring", desc: "24/7 uptime monitoring. We are alerted and fix issues before you even notice." },
];

const plans = [
  { name: "Basic", price: "1,999", features: ["Monthly security scan", "1 content update/month", "Uptime monitoring", "Monthly report"] },
  { name: "Standard", price: "3,499", features: ["Weekly security scan", "5 content updates/month", "Speed optimization", "Uptime monitoring", "Priority support"], highlight: true },
  { name: "Premium", price: "5,999", features: ["Daily security scan", "Unlimited content updates", "Speed optimization", "SEO monitoring", "Priority WhatsApp support", "Monthly strategy call"] },
];

export default function WebsiteMaintenancePage() {
  return (
    <>
      <PageHero
        badge="Website Maintenance"
        title="Your Website,"
        highlight="Always in Top Shape"
        description="We handle the technical upkeep so you never have to worry about your website going down, slowing down, or falling behind."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="bg-white border border-soft-gray rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-cyan-glow/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-cyan-glow" />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{f.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mb-10">
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Maintenance Plans</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {plans.map((p) => (
              <div key={p.name} className={`rounded-2xl p-7 border ${p.highlight ? "bg-midnight-navy border-electric-blue shadow-xl shadow-electric-blue/20" : "bg-white border-soft-gray"}`}>
                <h3 className={`font-jakarta font-bold text-xl mb-1 ${p.highlight ? "text-white" : "text-charcoal"}`}>{p.name}</h3>
                <div className={`font-jakarta font-extrabold text-3xl mb-5 ${p.highlight ? "text-white" : "text-charcoal"}`}>
                  ₹{p.price}<span className={`text-sm font-normal ml-1 ${p.highlight ? "text-pale-gray/50" : "text-charcoal/40"}`}>/month</span>
                </div>
                <ul className="space-y-2.5 mb-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <Check size={14} className={`mt-0.5 shrink-0 ${p.highlight ? "text-cyan-glow" : "text-emerald-trust"}`} />
                      <span className={p.highlight ? "text-pale-gray/80" : "text-charcoal/70"}>{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="/free-audit" className={`block w-full text-center font-bold py-3 rounded-full text-sm transition-all ${p.highlight ? "bg-electric-blue hover:bg-blue-600 text-white" : "border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white"}`}>
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip heading="Stop worrying about your website." subtext="We handle everything — you focus on your business." />
    </>
  );
}
