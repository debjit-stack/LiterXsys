import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export function CTABannerSection() {
  return (
    <section className="section-light py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="relative bg-midnight-navy rounded-3xl overflow-hidden px-8 py-16 text-center">
          {/* Background glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-electric-blue/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-cyan-glow/10 rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4">
              Let&apos;s Get Started
            </span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-5">
              Ready to Grow Your <br className="hidden sm:block" />
              Business Online?
            </h2>
            <p className="text-pale-gray/70 text-lg max-w-xl mx-auto mb-10">
              Get a free website audit and custom growth plan — no commitment, no sales pressure. Just honest advice.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/free-audit"
                className="group inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all hover:scale-105 shadow-lg shadow-electric-blue/30"
              >
                Get Free Audit
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-trust hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full text-base transition-all"
              >
                <MessageCircle size={16} />
                WhatsApp Us Now
              </Link>
            </div>

            <p className="text-pale-gray/40 text-sm mt-6">
              Free consultation · No commitment required · Response within 2 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
