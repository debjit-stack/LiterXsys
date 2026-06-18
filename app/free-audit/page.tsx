import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ContactForm } from "@/components/shared/ContactForm";
import { CheckCircle, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Free Website Audit — LiterXsys Techsol | Kolkata Digital Agency",
  description: "Get a free, comprehensive audit of your website and digital presence. No commitment. Just honest, actionable feedback.",
};

const whatYouGet = [
  "Website speed & performance score",
  "Mobile-friendliness check",
  "SEO health report (rankings, keywords, issues)",
  "Competitor comparison (3 top local competitors)",
  "Conversion rate assessment",
  "Custom growth recommendations",
];

export default function FreeAuditPage() {
  return (
    <div className="min-h-screen gradient-mesh flex flex-col">
      {/* Minimal header */}
      <header className="px-4 sm:px-6 py-4 flex items-center justify-between max-w-content mx-auto w-full">
        <Link href="/">
          <Image src="/images/logo.png" alt="LiterXsys" width={130} height={36} className="h-8 w-auto" />
        </Link>
        <Link
          href="https://wa.me/91XXXXXXXXXX"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-trust hover:bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full transition-colors"
        >
          <MessageCircle size={13} /> WhatsApp Us
        </Link>
      </header>

      <main className="flex-1 px-4 sm:px-6 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div>
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-5 bg-white/10 border border-white/20 px-3 py-1.5 rounded-full">
              100% Free — No Commitment
            </span>
            <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-5">
              Get Your Free <br />
              <span className="text-gradient">Website Audit</span>
            </h1>
            <p className="text-pale-gray/75 text-lg leading-relaxed mb-8">
              We will audit your entire digital presence and give you a clear, actionable report — absolutely free. No sales pitch at the end. Just honest advice.
            </p>

            <div className="space-y-3 mb-8">
              {whatYouGet.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={16} className="text-emerald-trust shrink-0" />
                  <span className="text-pale-gray/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-sm">
              <p className="text-pale-gray/80 text-sm leading-relaxed">
                <span className="text-white font-semibold">Who is this for?</span> Any Kolkata business — restaurant, gym, training institute, travel agency, clinic — that wants to understand why their website is not generating enough leads.
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl shadow-black/30">
            <h2 className="font-jakarta font-bold text-charcoal text-xl mb-1">Request Your Free Audit</h2>
            <p className="text-charcoal/50 text-sm mb-6">We&apos;ll reach out within 2 hours on business days.</p>
            <ContactForm type="audit" />
          </div>
        </div>
      </main>

      {/* Simple footer strip */}
      <footer className="px-4 sm:px-6 py-4 text-center">
        <p className="text-pale-gray/30 text-xs">© {new Date().getFullYear()} LiterXsys Techsol · <Link href="/privacy-policy" className="hover:text-pale-gray/60">Privacy Policy</Link></p>
      </footer>
    </div>
  );
}
