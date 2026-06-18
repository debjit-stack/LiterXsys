import type { Metadata } from "next";
import Link from "next/link";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { ArrowLeft, Check, TrendingUp, Bot, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Training Institute Demo — LiterXsys Portfolio",
  description: "A course portal with AI chatbot for enquiries and lead capture — built by LiterXsys for a Kolkata training institute.",
};

const results = [
  { icon: TrendingUp, value: "4x",    label: "Admissions Enquiries" },
  { icon: Bot,        value: "24/7",  label: "AI Chatbot Active" },
  { icon: Clock,      value: "12 days", label: "Delivered In" },
];

const features = [
  "Course listing portal with categories & filters",
  "Individual course detail pages with syllabus",
  "Online admission enquiry form",
  "AI chatbot — answers FAQs, captures leads",
  "Faculty profiles section",
  "Batch schedule & fee structure",
  "Student testimonials & placement stats",
  "WhatsApp & call integration",
];

const techStack = ["Next.js 14", "Tailwind CSS", "AI Chatbot", "Lead Forms", "Vercel"];

export default function TrainingInstituteDemoPage() {
  return (
    <>
      <section className="gradient-mesh py-16 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <Link href="/portfolio" className="inline-flex items-center gap-2 text-pale-gray/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Portfolio
          </Link>
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="bg-blue-500/20 text-blue-400 text-xs font-semibold px-3 py-1 rounded-full border border-blue-500/30">Education</span>
            <span className="bg-electric-blue/20 text-electric-blue text-xs font-semibold px-3 py-1 rounded-full border border-electric-blue/30">Website</span>
            <span className="bg-cyan-glow/20 text-cyan-glow text-xs font-semibold px-3 py-1 rounded-full border border-cyan-glow/30">AI Chatbot</span>
          </div>
          <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-4">
            Training Institute Portal
          </h1>
          <p className="text-pale-gray/70 text-lg max-w-2xl">
            Full admissions portal with AI chatbot that handles enquiries, captures student leads, and answers course questions — round the clock.
          </p>
        </div>
      </section>

      <section className="bg-deep-slate border-y border-white/10 py-10 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-3 gap-6 text-center">
          {results.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.label}>
                <Icon size={20} className="text-cyan-glow mx-auto mb-2 opacity-70" />
                <div className="font-jakarta font-extrabold text-white text-3xl mb-1">{r.value}</div>
                <div className="text-pale-gray/50 text-xs">{r.label}</div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          <div>
            <div className="bg-deep-slate rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
              <div className="bg-charcoal px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-crimson-urgent/60" />
                  <div className="w-3 h-3 rounded-full bg-amber-cta/60" />
                  <div className="w-3 h-3 rounded-full bg-emerald-trust/60" />
                </div>
                <div className="flex-1 bg-midnight-navy rounded-md px-3 py-1 text-pale-gray/40 text-xs font-mono ml-2">
                  www.yourinstitute.com
                </div>
              </div>
              <div className="h-72 bg-gradient-to-br from-blue-900 to-indigo-900 flex flex-col items-center justify-center p-8 text-center">
                <div className="font-jakarta font-extrabold text-white text-2xl mb-2">Kolkata Academy</div>
                <div className="text-blue-200/70 text-sm mb-4">Professional Courses · Certification Programs</div>
                <div className="grid grid-cols-2 gap-2 w-full max-w-xs">
                  {["Digital Marketing", "Graphic Design", "Web Dev", "Data Analytics"].map((c) => (
                    <div key={c} className="bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white/70 text-xs text-center">{c}</div>
                  ))}
                </div>
              </div>
              {/* AI Chatbot bubble */}
              <div className="bg-charcoal/50 px-6 py-4 flex items-end justify-end gap-3">
                <div className="bg-midnight-navy rounded-2xl rounded-br-sm px-4 py-2 text-pale-gray/60 text-xs max-w-[200px]">
                  Hi! Want to know about our courses? I can help 👋
                </div>
                <div className="w-8 h-8 bg-electric-blue rounded-full flex items-center justify-center shrink-0">
                  <Bot size={14} className="text-white" />
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-4">What Was Built</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal leading-tight mb-6">
              A Portal That Fills Seats Automatically
            </h2>
            <ul className="space-y-3 mb-8">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-charcoal/80 text-sm">
                  <Check size={15} className="text-emerald-trust shrink-0 mt-0.5" />{f}
                </li>
              ))}
            </ul>
            <div className="mb-8">
              <p className="text-charcoal/50 text-xs font-bold uppercase tracking-wider mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((t) => (
                  <span key={t} className="bg-soft-gray text-charcoal/70 text-xs px-3 py-1.5 rounded-lg font-mono">{t}</span>
                ))}
              </div>
            </div>
            <Link href="/free-audit" className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all hover:scale-105">
              Build Something Like This
            </Link>
          </div>
        </div>
      </section>

      <CTAStrip heading="Run a training institute?" subtext="Let us build your admission portal — with AI chatbot included." />
    </>
  );
}
