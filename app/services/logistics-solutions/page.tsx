import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Truck, MapPin, MessageSquare, Package, Users, BarChart3 } from "lucide-react";

export const metadata: Metadata = {
  title: "Logistics Solutions Kolkata — LiterXsys Techsol",
  description: "Fleet tracking, delivery management software, WhatsApp automation for logistics, and driver portals for logistics companies in Kolkata.",
};

const solutions = [
  {
    icon: Truck,
    title: "Fleet & Vehicle Tracking System",
    desc: "Real-time GPS tracking dashboard for your entire fleet. Monitor vehicle location, speed, idle time, and route history from a single web panel.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Package,
    title: "Delivery Management Software",
    desc: "End-to-end delivery management — order assignment, status tracking, proof of delivery, and customer notifications. Built for your exact workflow.",
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
  {
    icon: MapPin,
    title: "Logistics Company Website",
    desc: "Professional website for your logistics business — services showcase, quote request form, client portal login, and local SEO to attract new business.",
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation for Deliveries",
    desc: "Automated WhatsApp updates sent to customers at every delivery milestone — dispatched, out for delivery, delivered. Zero manual messaging.",
    color: "text-amber-cta",
    bg: "bg-amber-cta/10",
  },
  {
    icon: Users,
    title: "Driver & Route Management Portal",
    desc: "Driver app and web portal for route assignment, trip sheets, fuel logs, and attendance — reducing paperwork and improving accountability.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: BarChart3,
    title: "Operations Dashboard",
    desc: "A unified operations dashboard with delivery performance metrics, fleet utilisation reports, and customer SLA tracking — all in real time.",
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
];

const includes = [
  "Custom-built web dashboard (no off-the-shelf templates)",
  "Real-time GPS fleet tracking integration",
  "Delivery status tracking with customer notifications",
  "WhatsApp automation for dispatch & delivery updates",
  "Driver mobile portal (Android-friendly web app)",
  "Route optimisation and trip sheet management",
  "Admin panel for operations team",
  "Reporting: deliveries, SLA, fleet utilisation",
  "Role-based access (admin, dispatcher, driver, client)",
  "3 months post-launch support",
];

const process = [
  { step: "01", title: "Operations Audit", desc: "We map your current logistics workflow — from order receipt to final delivery — and identify the exact digital gaps." },
  { step: "02", title: "Custom Solution Design", desc: "We design a tailored system covering only what you need — no bloated features, no unnecessary complexity." },
  { step: "03", title: "Build & Integrate", desc: "We build your platform and integrate it with your existing tools — WhatsApp, GPS devices, or third-party APIs." },
  { step: "04", title: "Train & Launch", desc: "We train your team — drivers, dispatchers, and admins — and stay available for 3 months post-launch." },
];

const useCases = [
  "Last-mile delivery companies",
  "E-commerce fulfilment centres",
  "Courier and express freight businesses",
  "Wholesale distributors with delivery fleets",
  "Cold chain and pharmaceutical logistics",
  "Construction material suppliers",
];

export default function LogisticsSolutionsPage() {
  return (
    <>
      <PageHero
        badge="Logistics Solutions"
        title="Digital Infrastructure for"
        highlight="Logistics Businesses"
        description="Fleet tracking, delivery management, driver portals, and WhatsApp automation — purpose-built for logistics companies that need to move faster and smarter."
      />

      {/* Solutions grid */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What We Build</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight">
              Complete Digital Stack for Logistics
            </h2>
            <p className="text-charcoal/60 text-lg mt-3 max-w-2xl mx-auto">
              From customer-facing websites to back-office operations dashboards — we cover every digital layer your logistics business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {solutions.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-soft-gray rounded-2xl p-6 hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300">
                  <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={20} className={s.color} />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{s.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{s.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Includes + pricing */}
          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">
                  End-to-End Logistics Platform
                </h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-cyan-glow shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="bg-charcoal border border-white/10 rounded-2xl p-7 mb-5 text-center">
                  <Truck size={40} className="text-electric-blue mx-auto mb-4 opacity-80" />
                  <div className="font-jakarta font-extrabold text-white text-4xl mb-1">Custom Quote</div>
                  <div className="text-pale-gray/50 text-sm mb-5">Pricing based on fleet size & feature scope</div>
                  <p className="text-pale-gray/60 text-sm leading-relaxed mb-6">
                    Most logistics platforms start from ₹40,000 for a basic delivery management setup and scale based on fleet size, integrations, and automation requirements.
                  </p>
                  <a
                    href="/free-audit"
                    className="block w-full text-center bg-electric-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-full text-sm transition-colors"
                  >
                    Get a Free Consultation
                  </a>
                </div>

                <div className="bg-charcoal border border-white/10 rounded-2xl p-5">
                  <p className="text-cyan-glow text-xs font-bold uppercase tracking-wider mb-3">Who Is This For?</p>
                  <ul className="space-y-2">
                    {useCases.map((u) => (
                      <li key={u} className="flex items-center gap-2 text-pale-gray/70 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow shrink-0" />
                        {u}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-gray py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Our Process</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">
              How We Build Your Logistics Platform
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {process.map((p) => (
              <div key={p.step} className="bg-white border border-soft-gray rounded-2xl p-6 text-center">
                <div className="w-10 h-10 bg-electric-blue rounded-xl flex items-center justify-center font-mono font-bold text-white text-sm mx-auto mb-4">
                  {p.step}
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{p.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Ready to digitise your logistics operations?"
        subtext="Free consultation — we will map your workflow and recommend the right solution."
      />
    </>
  );
}
