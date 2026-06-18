"use client";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { X, ArrowRight, Sparkles } from "lucide-react";

export function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  const handleMouseLeave = useCallback((e: MouseEvent) => {
    if (dismissed) return;
    if (e.clientY <= 0) {
      // Check session storage — only show once per session
      const seen = sessionStorage.getItem("exit_popup_seen");
      if (!seen) {
        setShow(true);
        sessionStorage.setItem("exit_popup_seen", "1");
      }
    }
  }, [dismissed]);

  useEffect(() => {
    // Only on desktop and after 15 seconds on page
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 15000);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleDismiss}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up">
        {/* Top gradient bar */}
        <div className="h-2 bg-gradient-to-r from-electric-blue to-cyan-glow" />

        <button
          onClick={handleDismiss}
          className="absolute top-4 right-4 w-8 h-8 bg-soft-gray rounded-full flex items-center justify-center text-charcoal/60 hover:text-charcoal transition-colors z-10"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="p-8 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-electric-blue/10 text-electric-blue text-xs font-bold px-4 py-1.5 rounded-full mb-5">
            <Sparkles size={12} /> Limited Time Offer
          </div>

          <h2 className="font-jakarta font-extrabold text-charcoal text-2xl sm:text-3xl leading-tight mb-3">
            Wait — Get a Free <br />
            <span className="text-gradient">Website Audit</span> Before You Go
          </h2>

          <p className="text-charcoal/60 text-sm leading-relaxed mb-6">
            We will audit your current digital presence and show you exactly what is holding your business back online — completely free, no strings attached.
          </p>

          <div className="bg-soft-gray rounded-2xl px-5 py-4 mb-6 text-left space-y-2">
            {[
              "Speed & performance score",
              "SEO health report",
              "Competitor comparison",
              "Actionable recommendations",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-charcoal/80 text-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0" />
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/free-audit"
            onClick={handleDismiss}
            className="group flex items-center justify-center gap-2 w-full bg-electric-blue hover:bg-blue-600 text-white font-bold py-3.5 rounded-full text-sm transition-all hover:scale-105 shadow-lg shadow-electric-blue/30 mb-3"
          >
            Yes, Audit My Website Free
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={handleDismiss}
            className="text-charcoal/40 text-xs hover:text-charcoal/60 transition-colors"
          >
            No thanks, I don&apos;t need more leads
          </button>
        </div>
      </div>
    </div>
  );
}
