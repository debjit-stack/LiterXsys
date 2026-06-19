import Link from "next/link";
import { Globe, Smartphone, Search, Megaphone, Bot, MessageSquare, Wrench, BarChart3, Truck, Code2, ArrowRight } from "lucide-react";

const services = [
  { icon: Globe,         title: "Website Development",     href: "/services/website-development",     description: "Fast, mobile-first websites that convert visitors into customers. Built with Next.js for blazing speed.",                                color: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: Smartphone,    title: "Android App Development", href: "/services/android-app-development", description: "Custom Android apps — ordering systems, booking apps, loyalty programs — built for real users.",                                    color: "text-cyan-glow",    bg: "bg-cyan-glow/10"    },
  { icon: Search,        title: "SEO Optimization",        href: "/services/seo-optimization",        description: "Rank on the first page of Google for Kolkata searches. More visibility means more customers, organically.",                         color: "text-emerald-trust",bg: "bg-emerald-trust/10"},
  { icon: Megaphone,     title: "Digital Marketing",       href: "/services/digital-marketing",       description: "Google Ads, Meta Ads & email campaigns that bring qualified leads to your door, not just clicks.",                                  color: "text-amber-cta",    bg: "bg-amber-cta/10"    },
  { icon: Bot,           title: "AI Chatbot Development",  href: "/services/ai-chatbot-development",  description: "Your business, open 24/7. AI chatbots answer questions, capture leads, and book appointments automatically.",                       color: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: MessageSquare, title: "WhatsApp Automation",     href: "/services/whatsapp-automation",     description: "Send order updates, appointment reminders, and offers automatically via WhatsApp. Save hours every week.",                          color: "text-emerald-trust",bg: "bg-emerald-trust/10"},
  { icon: Wrench,        title: "Website Maintenance",     href: "/services/website-maintenance",     description: "Keep your website fast, secure, and up-to-date. Monthly maintenance so you never have to worry.",                                   color: "text-cyan-glow",    bg: "bg-cyan-glow/10"    },
  { icon: BarChart3,     title: "ERP Solutions",           href: "/services/erp-solutions",           description: "Custom ERP dashboards for inventory, billing, HR & more — built for small and growing businesses.",                                 color: "text-amber-cta",    bg: "bg-amber-cta/10"    },
  { icon: Truck,         title: "Logistics Solutions",     href: "/services/logistics-solutions",     description: "Fleet tracking, delivery management, driver portals & WhatsApp automation for logistics businesses.",                              color: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: Code2,         title: "Software Development",    href: "/services/software-development",    description: "SaaS products, APIs, ERP/CRM systems, e-commerce platforms & mobile apps — end-to-end custom engineering.", color: "text-cyan-glow",    bg: "bg-cyan-glow/10"    },
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
            From your first website to full automation and enterprise software — we build the complete digital stack that lets you focus on running your business.
          </p>
        </div>

        {/* Grid — 5 cols on xl, 4 on lg, 2 on sm */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white border border-soft-gray hover:border-electric-blue/30 rounded-2xl p-5 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/5 hover:-translate-y-1"
              >
                <div className={`w-10 h-10 ${service.bg} rounded-xl flex items-center justify-center mb-3`}>
                  <Icon size={18} className={service.color} />
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-sm mb-1.5 group-hover:text-electric-blue transition-colors leading-snug">
                  {service.title}
                </h3>
                <p className="text-charcoal/55 text-xs leading-relaxed mb-3 line-clamp-2">{service.description}</p>
                <div className="flex items-center gap-1 text-electric-blue text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <ArrowRight size={11} />
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
