import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { getServiceData, servicesData } from "@/lib/services-data";

export async function generateStaticParams() {
  return servicesData.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = getServiceData(params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} — LiterXsys Techsol | Kolkata`,
    description: service.description,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceData(params.slug);
  if (!service) notFound();

  return (
    <>
      {/* Hero */}
      <section className="gradient-mesh py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/services" className="inline-flex items-center gap-1 text-pale-gray/60 hover:text-pale-gray text-sm mb-6 transition-colors">
            ← All Services
          </Link>
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-5">
            {service.title}
          </h1>
          <p className="text-cyan-glow font-semibold text-lg mb-6">{service.tagline}</p>
          <p className="text-pale-gray/75 text-base max-w-2xl mx-auto mb-10">{service.description}</p>

          {/* Hero stats */}
          <div className="flex flex-wrap justify-center gap-8">
            {service.heroStats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-jakarta font-extrabold text-3xl text-white">{s.value}</div>
                <div className="text-pale-gray/50 text-xs mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">What You Get</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">What&apos;s Included</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {service.benefits.map((b) => (
              <div key={b.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle size={18} className="text-emerald-trust shrink-0" />
                  <h3 className="font-jakarta font-bold text-charcoal text-base">{b.title}</h3>
                </div>
                <p className="text-charcoal/60 text-sm leading-relaxed pl-7">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-dark py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">How It Works</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-white">Our Process</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step) => (
              <div key={step.step} className="bg-charcoal border border-white/10 rounded-2xl p-6">
                <div className="w-10 h-10 bg-electric-blue/20 rounded-xl flex items-center justify-center font-mono font-bold text-electric-blue text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="font-jakarta font-bold text-white text-base mb-2">{step.title}</h3>
                <p className="text-pale-gray/60 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-gray py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">FAQ</span>
            <h2 className="font-jakarta font-extrabold text-3xl text-charcoal">Common Questions</h2>
          </div>
          <div className="space-y-4">
            {service.faqs.map((faq) => (
              <div key={faq.q} className="bg-white border border-soft-gray rounded-2xl p-6">
                <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{faq.q}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-light py-16 px-4 sm:px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-jakarta font-extrabold text-3xl text-charcoal mb-4">Ready to Get Started?</h2>
          <p className="text-charcoal/60 mb-8">Get a free consultation and custom quote for your project — no commitment required.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-7 py-3.5 rounded-full transition-all hover:scale-105">
              {service.cta} <ArrowRight size={16} />
            </Link>
            <Link href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-emerald-trust hover:bg-green-500 text-white font-bold px-7 py-3.5 rounded-full transition-all">
              <MessageCircle size={16} /> WhatsApp Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
