"use client";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import type { FAQ } from "@/lib/content";

export function FAQSection({ faqs }: { faqs: FAQ[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section className="section-gray py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">FAQ</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-charcoal/60 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-200 ${
                  isOpen ? "border-electric-blue/40 shadow-md shadow-electric-blue/5" : "border-soft-gray"
                }`}
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className={`font-jakarta font-semibold text-sm sm:text-base transition-colors ${isOpen ? "text-electric-blue" : "text-charcoal"}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${isOpen ? "bg-electric-blue text-white" : "bg-soft-gray text-charcoal"}`}>
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-6 pb-5">
                    <p className="text-charcoal/70 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
