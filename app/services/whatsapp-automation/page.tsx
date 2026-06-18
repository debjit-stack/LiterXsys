import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "WhatsApp Automation Kolkata — LiterXsys Techsol",
  description: "Automate order updates, appointment reminders, and offers via WhatsApp. Save hours every week. Powered by WhatsApp Business API.",
};

const useCases = [
  { title: "Order Confirmations", desc: "Automatically send order details and tracking updates to customers the moment an order is placed." },
  { title: "Appointment Reminders", desc: "Reduce no-shows by automatically reminding clients 24 hours and 1 hour before their appointment." },
  { title: "Promotional Campaigns", desc: "Send targeted offers, festival discounts, and new product announcements to your customer list." },
  { title: "Enquiry Auto-Reply", desc: "Instantly reply to incoming WhatsApp messages with your service menu, pricing, and booking links." },
  { title: "Follow-Up Sequences", desc: "Automatically follow up with leads who enquired but did not convert — with personalised messages." },
  { title: "Feedback Collection", desc: "Send automated feedback requests after every purchase or appointment and collect ratings effortlessly." },
];

const includes = [
  "WhatsApp Business API setup",
  "Up to 5 automation flows",
  "Custom message templates (approved by Meta)",
  "Integration with your website / CRM",
  "Contact list import & segmentation",
  "Dashboard to monitor message delivery",
  "1 month of support & adjustments",
];

export default function WhatsAppAutomationPage() {
  return (
    <>
      <PageHero
        badge="WhatsApp Automation"
        title="Your Business on"
        highlight="Auto-Pilot via WhatsApp"
        description="Automate the repetitive — order updates, reminders, follow-ups, and promotions — so you can focus on running your business, not your inbox."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Use Cases</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">What You Can Automate</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {useCases.map((u) => (
              <div key={u.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                <div className="w-10 h-10 bg-emerald-trust/10 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare size={18} className="text-emerald-trust" />
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{u.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{u.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-emerald-trust text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Full Automation Setup</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-emerald-trust shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="font-jakarta font-extrabold text-white text-5xl mb-2">₹9,999</div>
                <div className="text-pale-gray/50 text-sm mb-5">one-time setup, starting from</div>
                <p className="text-pale-gray/60 text-sm mb-6">Save 10–15 hours per week on manual messaging. The setup pays for itself within the first month.</p>
                <a href="/free-audit" className="inline-block bg-emerald-trust hover:bg-green-500 text-white font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
                  Get a Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Stop sending messages manually." subtext="We will set up your full WhatsApp automation in 7 days." />
    </>
  );
}
