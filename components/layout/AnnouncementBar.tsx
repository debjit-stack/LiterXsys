"use client";
import { useState } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import type { Campaign } from "@/lib/content";

export function AnnouncementBar({ campaign }: { campaign: Campaign }) {
  const [dismissed, setDismissed] = useState(false);

  if (!campaign.active || dismissed) return null;

  const isUrgent = campaign.style === "urgent";

  return (
    <div
      className={`relative z-50 w-full py-2.5 px-4 flex items-center justify-center gap-3 text-sm font-medium text-white ${
        isUrgent ? "bg-crimson-urgent" : "bg-electric-blue"
      }`}
    >
      <span className="text-center leading-snug">
        <span className="font-semibold">{campaign.label}:</span>{" "}
        {campaign.headline}
      </span>
      <Link
        href={campaign.cta_link}
        className="shrink-0 bg-white text-charcoal text-xs font-bold px-3 py-1 rounded-full hover:bg-off-white transition-colors"
      >
        {campaign.cta_text}
      </Link>
      <button
        onClick={() => setDismissed(true)}
        className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
        aria-label="Dismiss announcement"
      >
        <X size={16} />
      </button>
    </div>
  );
}
