"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";

type FormType = "contact" | "audit";

interface ContactFormProps {
  type: FormType;
}

export function ContactForm({ type }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [form, setForm] = useState({
    name: "", email: "", phone: "", business: "", service: "", message: "", website: "",
  });

  const services = [
    "Website Development", "Android App Development", "SEO Optimization",
    "Digital Marketing", "AI Chatbot", "WhatsApp Automation", "Website Maintenance", "ERP Solutions", "Not sure yet",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const endpoint = type === "audit" ? "/api/audit" : "/api/contact";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("success"); }
      else { setStatus("error"); }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <CheckCircle size={48} className="text-emerald-trust mb-4" />
        <h3 className="font-jakarta font-bold text-charcoal text-xl mb-2">Message Sent!</h3>
        <p className="text-charcoal/60 text-sm">
          We&apos;ll get back to you within 2 hours on business days. Check your WhatsApp too — we may reach out there.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Your Name *</label>
          <input
            type="text" name="name" value={form.name} onChange={handleChange} required
            placeholder="Rahul Sharma"
            className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors"
          />
        </div>
        <div>
          <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Phone / WhatsApp *</label>
          <input
            type="tel" name="phone" value={form.phone} onChange={handleChange} required
            placeholder="+91 98765 43210"
            className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors"
          />
        </div>
      </div>

      <div>
        <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Email Address *</label>
        <input
          type="email" name="email" value={form.email} onChange={handleChange} required
          placeholder="rahul@yourbusiness.com"
          className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors"
        />
      </div>

      <div>
        <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Business Name</label>
        <input
          type="text" name="business" value={form.business} onChange={handleChange}
          placeholder="Your Restaurant / Shop / Company"
          className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors"
        />
      </div>

      {type === "audit" && (
        <div>
          <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Your Current Website (if any)</label>
          <input
            type="url" name="website" value={form.website} onChange={handleChange}
            placeholder="https://yourwebsite.com"
            className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors"
          />
        </div>
      )}

      <div>
        <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">Service You Need</label>
        <select
          name="service" value={form.service} onChange={handleChange}
          className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal focus:outline-none focus:border-electric-blue transition-colors bg-white"
        >
          <option value="">Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>

      <div>
        <label className="block text-charcoal/70 text-xs font-semibold uppercase tracking-wider mb-1.5">
          {type === "audit" ? "What are your main business goals?" : "Your Message"}
        </label>
        <textarea
          name="message" value={form.message} onChange={handleChange}
          rows={4}
          placeholder={type === "audit" ? "Tell us about your business and what you want to achieve..." : "Tell us about your project..."}
          className="w-full border border-soft-gray rounded-xl px-4 py-2.5 text-sm text-charcoal placeholder-charcoal/30 focus:outline-none focus:border-electric-blue transition-colors resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-crimson-urgent text-xs">Something went wrong. Please try WhatsApp instead.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-electric-blue hover:bg-blue-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-full text-sm transition-all flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <><Loader2 size={16} className="animate-spin" /> Sending...</>
        ) : (
          <><Send size={15} /> {type === "audit" ? "Request Free Audit" : "Send Message"}</>
        )}
      </button>

      <p className="text-charcoal/40 text-xs text-center">
        No spam. We reply within 2 hours on business days.
      </p>
    </form>
  );
}
