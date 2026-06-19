import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Code2, Smartphone, Cloud, Database, ShoppingCart, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Software Development Kolkata — LiterXsys Techsol",
  description: "Custom software development — SaaS products, APIs, ERP & CRM systems, e-commerce platforms, and Android & iOS apps. End-to-end engineering from Kolkata.",
};

const subServices = [
  {
    icon: Cloud,
    title: "SaaS Product Development",
    desc: "We build cloud-based software products from idea to launch — multi-tenant architecture, subscription billing, user management, and scalable infrastructure.",
    examples: ["Business management tools", "Booking & scheduling platforms", "Industry-specific SaaS products"],
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Database,
    title: "API & Backend Development",
    desc: "Robust, well-documented REST and GraphQL APIs that power your web apps, mobile apps, and third-party integrations — built to scale.",
    examples: ["Payment gateway integrations", "Third-party API integrations", "Microservices architecture"],
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
  {
    icon: BarChart3,
    title: "ERP & CRM Systems",
    desc: "Custom enterprise resource planning and CRM platforms tailored to your business processes — inventory, billing, HR, sales pipeline, and customer management.",
    examples: ["Manufacturing ERP", "Sales CRM with pipeline tracking", "Multi-branch business management"],
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Platforms",
    desc: "Full-featured e-commerce platforms with product management, payment gateway, order tracking, and vendor management — built for Indian businesses.",
    examples: ["Multi-vendor marketplaces", "B2B wholesale portals", "D2C brand stores"],
    color: "text-amber-cta",
    bg: "bg-amber-cta/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    desc: "Android and cross-platform mobile apps built with React Native — one codebase, native performance on both Android and iOS.",
    examples: ["Customer-facing apps", "Field staff apps", "On-demand service apps"],
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Code2,
    title: "Web Application Development",
    desc: "Complex, interactive web applications beyond standard websites — dashboards, portals, real-time tools, and data-heavy platforms.",
    examples: ["Admin & operations dashboards", "Client portals", "Real-time analytics tools"],
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
];

const techStack = [
  { category: "Frontend", techs: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", techs: ["Node.js", "Express", "Python", "REST / GraphQL"] },
  { category: "Database", techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis"] },
  { category: "Mobile", techs: ["React Native", "Android (Java/Kotlin)"] },
  { category: "Cloud & DevOps", techs: ["AWS", "Vercel", "Docker", "CI/CD pipelines"] },
  { category: "Integrations", techs: ["Razorpay", "WhatsApp API", "Twilio", "Stripe"] },
];

const includes = [
  "Full discovery & technical architecture planning",
  "UI/UX design with Figma prototypes",
  "Agile development with weekly progress updates",
  "Code reviews and quality assurance",
  "Automated testing for critical flows",
  "Staging environment for pre-launch testing",
  "Deployment to cloud infrastructure",
  "Detailed technical documentation",
  "Team training & knowledge transfer",
  "3–6 months post-launch support",
];

const differentiators = [
  { title: "We own the whole stack", desc: "Frontend, backend, database, DevOps — no handoffs to third-party teams. One team, full accountability." },
  { title: "Built to scale", desc: "Architecture decisions made for your 10x future, not just your current user count." },
  { title: "Clean, documented code", desc: "Every project is handed over with documentation so your internal team or any future developer can maintain it." },
  { title: "Business-first thinking", desc: "We are not just engineers. We understand your business goals and make product decisions accordingly." },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <PageHero
        badge="Software Development"
        title="Custom Software That"
        highlight="Scales With You"
        description="From SaaS products to enterprise platforms — we engineer complete software solutions that solve real business problems. End-to-end, from architecture to deployment."
      />

      {/* Sub-services */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What We Build</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight">
              Every Type of Software,<br className="hidden sm:block" /> One Trusted Team
            </h2>
            <p className="text-charcoal/60 text-lg mt-3 max-w-2xl mx-auto">
              Whether you need a SaaS MVP, a complex ERP, or a mobile app — we have the engineering depth to build it right.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {subServices.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="bg-white border border-soft-gray rounded-2xl p-6 hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300 flex flex-col">
                  <div className={`w-11 h-11 ${s.bg} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon size={20} className={s.color} />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{s.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-4 flex-1">{s.desc}</p>
                  <div className="space-y-1.5 pt-4 border-t border-soft-gray">
                    {s.examples.map((e) => (
                      <div key={e} className="flex items-center gap-2 text-charcoal/50 text-xs">
                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${s.color.replace("text-", "bg-")}`} />
                        {e}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tech stack */}
          <div className="bg-deep-slate rounded-3xl p-8 sm:p-10 mb-8">
            <div className="text-center mb-8">
              <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">Our Tech Stack</span>
              <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white">
                Modern Technologies, Production-Proven
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
              {techStack.map((stack) => (
                <div key={stack.category} className="bg-charcoal border border-white/10 rounded-xl p-4">
                  <p className="text-pale-gray/50 text-xs font-bold uppercase tracking-wider mb-3">{stack.category}</p>
                  <div className="space-y-1.5">
                    {stack.techs.map((t) => (
                      <div key={t} className="text-pale-gray/80 text-xs font-mono">{t}</div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Includes + differentiators */}
      <section className="section-gray py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Includes */}
          <div className="bg-midnight-navy rounded-3xl p-8">
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Always Included</span>
            <h2 className="font-jakarta font-extrabold text-2xl text-white mb-6">
              Our Development Standard
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

          {/* Differentiators */}
          <div className="flex flex-col gap-5">
            <div>
              <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">Why LiterXsys for Software</span>
              <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-charcoal leading-tight mb-6">
                Engineering With Business Sense
              </h2>
            </div>
            {differentiators.map((d) => (
              <div key={d.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{d.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}

            {/* Pricing card */}
            <div className="bg-white border border-electric-blue/30 rounded-2xl p-6 text-center shadow-lg shadow-electric-blue/5">
              <div className="font-jakarta font-extrabold text-charcoal text-3xl mb-1">Custom Pricing</div>
              <div className="text-charcoal/50 text-sm mb-4">Scoped after understanding your requirements</div>
              <p className="text-charcoal/60 text-sm mb-5">
                Projects range from ₹50,000 for an MVP to ₹5,00,000+ for full enterprise platforms. We provide a detailed, itemised quote before any commitment.
              </p>
              <Link
                href="/free-audit"
                className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105"
              >
                Discuss Your Project <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link to related services */}
      <section className="section-light py-12 px-4 sm:px-6 border-t border-soft-gray">
        <div className="max-w-content mx-auto">
          <p className="text-center text-charcoal/50 text-sm mb-6">Software development works best combined with these services:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "AI Chatbot Integration", href: "/services/ai-chatbot-development" },
              { label: "WhatsApp Automation", href: "/services/whatsapp-automation" },
              { label: "SEO Optimization", href: "/services/seo-optimization" },
              { label: "Digital Marketing", href: "/services/digital-marketing" },
              { label: "Logistics Solutions", href: "/services/logistics-solutions" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="inline-flex items-center gap-1.5 border border-electric-blue/30 text-electric-blue hover:bg-electric-blue hover:text-white text-sm font-semibold px-4 py-2 rounded-full transition-all"
              >
                {l.label} <ArrowRight size={12} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip
        heading="Have a software idea or a problem to solve?"
        subtext="Free technical consultation — we will scope your project honestly and give you a clear build plan."
      />
    </>
  );
}
