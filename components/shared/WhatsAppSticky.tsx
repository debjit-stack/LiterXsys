"use client";
import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export function WhatsAppSticky() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show after 3 seconds
    const timer = setTimeout(() => setVisible(true), 3000);
    // Show tooltip after 6 seconds
    const tooltipTimer = setTimeout(() => {
      if (!tooltipDismissed) setShowTooltip(true);
    }, 6000);
    // Auto-hide tooltip after 10 seconds
    const hideTooltip = setTimeout(() => setShowTooltip(false), 12000);
    return () => { clearTimeout(timer); clearTimeout(tooltipTimer); clearTimeout(hideTooltip); };
  }, [tooltipDismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      {showTooltip && !tooltipDismissed && (
        <div className="relative bg-white border border-soft-gray rounded-2xl shadow-xl px-4 py-3 mb-1 max-w-[200px] text-right animate-fade-in-up">
          <button
            onClick={() => { setShowTooltip(false); setTooltipDismissed(true); }}
            className="absolute -top-2 -left-2 w-5 h-5 bg-charcoal rounded-full flex items-center justify-center"
          >
            <X size={10} className="text-white" />
          </button>
          <p className="text-charcoal text-xs font-medium leading-snug">
            Chat with us on WhatsApp — we reply in minutes! 👋
          </p>
        </div>
      )}

      {/* Button */}
      <a
        href="https://wa.me/91XXXXXXXXXX?text=Hi%20LiterXsys!%20I%20want%20to%20know%20more%20about%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
        className="group w-14 h-14 bg-emerald-trust hover:bg-green-500 rounded-full flex items-center justify-center shadow-xl shadow-emerald-trust/30 transition-all hover:scale-110"
        aria-label="Chat on WhatsApp"
        onClick={() => setShowTooltip(false)}
      >
        <MessageCircle size={26} className="text-white" />
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-emerald-trust/40 animate-ping" />
      </a>
    </div>
  );
}
