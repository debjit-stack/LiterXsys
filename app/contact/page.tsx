import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { ContactForm } from "@/components/shared/ContactForm";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us — LiterXsys Techsol | Kolkata Digital Agency",
  description: "Get in touch with LiterXsys. Free consultation for websites, SEO, AI chatbots & automation. Based in Kolkata, serving businesses across India.",
};

const contactDetails = [
  { icon: MapPin, label: "Location", value: "Kolkata, West Bengal, India" },
  { icon: Phone, label: "Phone / WhatsApp", value: "+91 XXXXX XXXXX" },
  { icon: Mail, label: "Email", value: "hello@literxsys.com" },
  { icon: Clock, label: "Working Hours", value: "Mon–Sat, 10am–7pm IST" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        badge="Get In Touch"
        title="Let's Talk About"
        highlight="Your Business"
        description="Have a project in mind? A question about our services? Or just want to explore what's possible? We would love to hear from you."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          {/* Left: info */}
          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-5">Contact Information</span>
            <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-charcoal mb-6">
              We respond within 2 hours on business days.
            </h2>
            <p className="text-charcoal/65 text-sm leading-relaxed mb-8">
              Whether you want a full project quote, a quick question answered, or just an honest opinion on your current website — reach out. No pushy sales calls, ever.
            </p>

            <div className="space-y-5 mb-8">
              {contactDetails.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-electric-blue/10 rounded-xl flex items-center justify-center shrink-0">
                      <Icon size={18} className="text-electric-blue" />
                    </div>
                    <div>
                      <div className="text-charcoal/50 text-xs font-medium uppercase tracking-wider mb-0.5">{c.label}</div>
                      <div className="text-charcoal font-medium text-sm">{c.value}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-trust hover:bg-green-500 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all"
            >
              <MessageCircle size={16} /> Chat on WhatsApp Now
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-white border border-soft-gray rounded-3xl p-8 shadow-sm">
            <h3 className="font-jakarta font-bold text-charcoal text-xl mb-6">Send Us a Message</h3>
            <ContactForm type="contact" />
          </div>
        </div>
      </section>
    </>
  );
}
