import Link from "next/link";
import { Globe, Smartphone, Search, Megaphone, Bot, MessageSquare, Wrench, BarChart3, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Fast, beautiful, mobile-first websites that convert visitors into customers. Built with Next.js for blazing speed.",
    href: "/services/website-development",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Smartphone,
    title: "Android App Development",
    description: "Custom Android apps for your business — from ordering systems to booking apps, built for real users.",
    href: "/services/android-app-development",
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Rank on the first page of Google for Kolkata searches. More visibility means more customers, organically.",
    href: "/services/seo-optimization",
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing",
    description: "Google Ads, Meta Ads & email campaigns that bring qualified leads to your door, not just clicks.",
    href: "/services/digital-marketing",
    color: "text-amber-cta",
    bg: "bg-amber-cta/10",
  },
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description: "Your business, open 24/7. AI chatbots answer questions, capture leads, and book appointments automatically.",
    href: "/services/ai-chatbot-development",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp Automation",
    description: "Send order updates, appointment reminders, and offers automatically via WhatsApp. Save hours every week.",
    href: "/services/whatsapp-automation",
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description: "Keep your website fast, secure, and up-to-date. Monthly maintenance so you never have to worry.",
    href: "/services/website-maintenance",
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
  {
    icon: BarChart3,
    title: "ERP Solutions",
    description: "Custom ERP dashboards for inventory, billing, HR & more — built for small and growing businesses.",
    href: "/services/erp-solutions",
    color: "text-amber-cta",
    bg: "bg-amber-cta/10",
  },
];

export function ServicesSection() {
  return (
    <section className="section-light py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What We Do</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-4">
            Everything Your Business <br className="hidden sm:block" />
            Needs to Win Online
          </h2>
          <p className="text-charcoal/60 text-lg max-w-2xl mx-auto">
            From your first website to full automation — we build the digital stack that lets you focus on running your business.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border border-soft-gray hover:border-electric-blue/30 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/5 hover:-translate-y-1"
              >
                <div className={`w-11 h-11 ${service.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={20} className={service.color} />
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2 group-hover:text-electric-blue transition-colors">
                  {service.title}
                </h3>
                <p className="text-charcoal/60 text-sm leading-relaxed mb-4">{service.description}</p>
                <div className="flex items-center gap-1 text-electric-blue text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={12} />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-white font-semibold px-6 py-3 rounded-full text-sm transition-all"
          >
            View All Services <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
