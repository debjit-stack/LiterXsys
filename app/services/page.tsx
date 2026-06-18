import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Globe, Smartphone, Search, Megaphone, Bot, MessageSquare, Wrench, BarChart3, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services — LiterXsys Techsol | Digital Solutions Kolkata",
  description: "Website development, SEO, AI chatbots, WhatsApp automation, Android apps & more — complete digital solutions for Kolkata businesses.",
};

const services = [
  { icon: Globe, title: "Website Development", slug: "website-development", desc: "Fast, beautiful, mobile-first websites built with Next.js. Designed to convert visitors into paying customers.", color: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: Smartphone, title: "Android App Development", slug: "android-app-development", desc: "Custom Android apps — ordering systems, booking apps, loyalty programs — built for real users.", color: "text-cyan-glow", bg: "bg-cyan-glow/10" },
  { icon: Search, title: "SEO Optimization", slug: "seo-optimization", desc: "Rank on the first page of Google for Kolkata searches. Organic traffic that compounds over time.", color: "text-emerald-trust", bg: "bg-emerald-trust/10" },
  { icon: Megaphone, title: "Digital Marketing", slug: "digital-marketing", desc: "Google Ads, Meta Ads & email campaigns. Qualified leads to your business, not just clicks.", color: "text-amber-cta", bg: "bg-amber-cta/10" },
  { icon: Bot, title: "AI Chatbot Development", slug: "ai-chatbot-development", desc: "Your business, open 24/7. AI chatbots capture leads, answer questions, and book appointments automatically.", color: "text-electric-blue", bg: "bg-electric-blue/10" },
  { icon: MessageSquare, title: "WhatsApp Automation", slug: "whatsapp-automation", desc: "Order updates, appointment reminders, and promotional messages sent automatically via WhatsApp.", color: "text-emerald-trust", bg: "bg-emerald-trust/10" },
  { icon: Wrench, title: "Website Maintenance", slug: "website-maintenance", desc: "Keep your website fast, secure and up-to-date. Monthly maintenance — no technical headaches.", color: "text-cyan-glow", bg: "bg-cyan-glow/10" },
  { icon: BarChart3, title: "ERP Solutions", slug: "erp-solutions", desc: "Custom dashboards for inventory, billing, HR & more. Built for small and growing businesses.", color: "text-amber-cta", bg: "bg-amber-cta/10" },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        badge="What We Do"
        title="Complete Digital Solutions"
        highlight="Under One Roof"
        description="From your first website to full business automation — we build the digital stack that lets you focus on running your business."
      />
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group bg-white border border-soft-gray hover:border-electric-blue/40 rounded-2xl p-7 flex gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-electric-blue/5 hover:-translate-y-0.5"
              >
                <div className={`shrink-0 w-12 h-12 ${s.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={22} className={s.color} />
                </div>
                <div className="flex-1">
                  <h2 className="font-jakarta font-bold text-charcoal text-lg mb-2 group-hover:text-electric-blue transition-colors">{s.title}</h2>
                  <p className="text-charcoal/60 text-sm leading-relaxed mb-3">{s.desc}</p>
                  <div className="inline-flex items-center gap-1 text-electric-blue text-xs font-semibold">
                    Learn more <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
      <CTAStrip heading="Not sure which service you need?" subtext="Tell us about your business and we'll recommend the right solution." />
    </>
  );
}
