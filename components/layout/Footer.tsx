import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

const services = [
  { label: "Website Development", href: "/services/website-development" },
  { label: "Android App Development", href: "/services/android-app-development" },
  { label: "SEO Optimization", href: "/services/seo-optimization" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "AI Chatbot Development", href: "/services/ai-chatbot-development" },
  { label: "WhatsApp Automation", href: "/services/whatsapp-automation" },
];

const industries = [
  { label: "Restaurants", href: "/industries/restaurants" },
  { label: "Gyms & Fitness", href: "/industries/gyms-fitness" },
  { label: "Training Institutes", href: "/industries/training-institutes" },
  { label: "Travel Agencies", href: "/industries/travel-agencies" },
  { label: "Schools & Colleges", href: "/industries/schools-colleges" },
  { label: "Hospital & Diagnostics", href: "/industries/hospital-diagnostics" },
];

export function Footer() {
  return (
    <footer className="bg-midnight-navy border-t border-white/10">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <Image src="/images/logo.png" alt="LiterXsys" width={140} height={40} className="h-9 w-auto mb-4" />
            <p className="text-pale-gray/80 text-sm leading-relaxed mb-5">
              We grow businesses with websites, SEO, AI &amp; automation. Kolkata&apos;s trusted digital partner.
            </p>
            <div className="space-y-2 text-sm text-pale-gray/70">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 text-cyan-glow shrink-0" />
                <span>Kolkata, West Bengal, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={14} className="text-cyan-glow shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-glow shrink-0" />
                <span>hello@literxsys.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold font-jakarta mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="text-pale-gray/70 hover:text-cyan-glow text-sm transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-jakarta mb-4 text-sm uppercase tracking-wider">Industries</h4>
            <ul className="space-y-2">
              {industries.map((i) => (
                <li key={i.href}>
                  <Link href={i.href} className="text-pale-gray/70 hover:text-cyan-glow text-sm transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold font-jakarta mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 mb-6">
              {[
                { label: "About Us", href: "/about" },
                { label: "Portfolio", href: "/portfolio" },
                { label: "Pricing", href: "/pricing" },
                { label: "Blog", href: "/blog" },
                { label: "Contact", href: "/contact" },
                { label: "Free Website Audit", href: "/free-audit" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-pale-gray/70 hover:text-cyan-glow text-sm transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
            <Link
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-trust hover:bg-green-500 text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors"
            >
              <MessageCircle size={15} />
              Chat on WhatsApp
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-pale-gray/50">
          <span>© {new Date().getFullYear()} LiterXsys Techsol. All rights reserved.</span>
          <div className="flex gap-4">
            {[
              { label: "Privacy Policy", href: "/privacy-policy" },
              { label: "Terms", href: "/terms-and-conditions" },
              { label: "Refund Policy", href: "/refund-policy" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-pale-gray transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
