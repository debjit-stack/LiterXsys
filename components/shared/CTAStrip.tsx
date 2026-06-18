import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

interface CTAStripProps {
  heading?: string;
  subtext?: string;
}

export function CTAStrip({
  heading = "Ready to get started?",
  subtext = "Get a free consultation — no commitment required.",
}: CTAStripProps) {
  return (
    <section className="section-dark py-16 px-4 sm:px-6">
      <div className="max-w-content mx-auto text-center">
        <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-3">{heading}</h2>
        <p className="text-pale-gray/60 text-base mb-8">{subtext}</p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/free-audit" className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-electric-blue/30">
            Get Free Audit <ArrowRight size={15} />
          </Link>
          <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full text-sm transition-all">
            <MessageCircle size={15} /> WhatsApp Us
          </Link>
        </div>
      </div>
    </section>
  );
}
