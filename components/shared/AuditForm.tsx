"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2, ArrowRight } from "lucide-react";
import Link from "next/link";

type FormState = "idle" | "sending" | "success" | "error";

const goals = [
  "Get more customers online",
  "Rank higher on Google",
  "Automate WhatsApp enquiries",
  "Build a new website",
  "Fix my existing website",
  "Launch an Android app",
  "Run paid ads",
  "Not sure — need advice",
];

export function AuditForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", phone: "", website: "", goal: "", business_type: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, service: `Free Audit Request — ${form.goal}`, message: `Business: ${form.business_type} | Website: ${form.website}` }),
      });
      setState(res.ok ? "success" : "error");
    } catch {
      setState("error");
    }
  };

  if (state === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <div className="w-16 h-16 bg-emerald-trust/10 rounded-full flex items-center justify-center mb-4">
          <CheckCircle size={32} className="text-emerald-trust" />
        </div>
        <h3 className="font-jakarta font-bold text-xl text-charcoal mb-2">Audit Request Received!</h3>
        <p className="text-charcoal/60 text-sm max-w-xs mb-6">
          We&apos;ll send your audit report to your WhatsApp within 24–48 hours. Keep an eye out!
        </p>
        <Link href="/" className="inline-flex items-center gap-2 text-electric-blue font-semibold text-sm hover:underline">
          Back to Home <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  const inputClass = "w-full border border-soft-gray rounded-xl px-4 py-3 text-sm text-charcoal placeholder-charcoal/40 focus:outline-none focus:border-electric-blue focus:ring-2 focus:ring-electric-blue/10 transition-all bg-white";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Your Name *</label>
        <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">WhatsApp Number *</label>
        <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className={inputClass} type="tel" />
        <p className="text-charcoal/40 text-xs mt-1">We&apos;ll send your audit report here</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Type of Business *</label>
        <input name="business_type" value={form.business_type} onChange={handleChange} required
          placeholder="e.g. Restaurant, Gym, Training Institute…" className={inputClass} />
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">Your Website (if you have one)</label>
        <input name="website" value={form.website} onChange={handleChange}
          placeholder="https://yourbusiness.com" className={inputClass} type="url" />
        <p className="text-charcoal/40 text-xs mt-1">Leave blank if you don&apos;t have a website yet</p>
      </div>

      <div>
        <label className="block text-xs font-semibold text-charcoal/70 mb-1.5">What&apos;s your main goal? *</label>
        <select name="goal" value={form.goal} onChange={handleChange} required className={inputClass}>
          <option value="">Select your goal…</option>
          {goals.map((g) => <option key={g} value={g}>{g}</option>)}
        </select>
      </div>

      {state === "error" && (
        <p className="text-crimson-urgent text-xs">Something went wrong. Please WhatsApp us directly at +91 XXXXX XXXXX</p>
      )}

      <button type="submit" disabled={state === "sending"}
        className="w-full flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-600 disabled:opacity-60 text-white font-bold py-4 rounded-full transition-all text-sm shadow-lg shadow-electric-blue/30">
        {state === "sending"
          ? <><Loader2 size={16} className="animate-spin" /> Submitting…</>
          : <><Send size={15} /> Get My Free Audit</>}
      </button>

      <p className="text-center text-charcoal/40 text-xs">No commitment required · 100% free</p>
    </form>
  );
}
