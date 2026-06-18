import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, Bot, Clock, Users, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbot Development Kolkata — LiterXsys Techsol",
  description: "Custom AI chatbots for Kolkata businesses. Answer queries, capture leads, and book appointments automatically — 24/7.",
};

const benefits = [
  { icon: Clock, title: "Always On", desc: "Your chatbot answers customer queries at 2am on a Sunday. Never miss a lead again." },
  { icon: Users, title: "Handles Volume", desc: "One chatbot handles hundreds of conversations simultaneously — no waiting, no delays." },
  { icon: Zap, title: "Instant Responses", desc: "Customers get answers in seconds, not hours. Better experience, higher conversion." },
  { icon: Bot, title: "Learns Your Business", desc: "Trained on your products, services, FAQs, and pricing — it speaks as your brand." },
];

const includes = [
  "Custom AI chatbot trained on your business",
  "Integration with your website",
  "WhatsApp chatbot integration (optional)",
  "Lead capture & CRM integration",
  "Appointment booking flow",
  "FAQ automation",
  "Admin dashboard to view conversations",
  "1 month of fine-tuning after launch",
];

export default function AIChatbotPage() {
  return (
    <>
      <PageHero
        badge="AI Chatbot Development"
        title="Your Business, Open"
        highlight="24 Hours a Day"
        description="AI-powered chatbots that answer questions, capture leads, and book appointments — fully trained on your business. No staff required."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Why AI Chatbot?</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Never Miss a Lead. Never Miss a Customer.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <div key={b.title} className="bg-white border border-soft-gray rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 bg-electric-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-electric-blue" />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{b.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Full Chatbot Setup</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-cyan-glow shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="font-jakarta font-extrabold text-white text-5xl mb-2">₹12,999</div>
                <div className="text-pale-gray/50 text-sm mb-5">one-time setup, starting from</div>
                <p className="text-pale-gray/60 text-sm mb-6">Most businesses see a 30–50% increase in lead capture within the first month of deploying a chatbot.</p>
                <a href="/free-audit" className="inline-block bg-electric-blue hover:bg-blue-600 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
                  Get a Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="See an AI chatbot in action." subtext="We'll build a free demo for your business — no commitment needed." />
    </>
  );
}
