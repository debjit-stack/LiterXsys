import { MessageSquare, FileText, Rocket, Headphones } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Free Consultation",
    description: "Tell us about your business. We listen, ask the right questions, and understand exactly what you need — no sales pitch.",
  },
  {
    icon: FileText,
    step: "02",
    title: "Custom Proposal",
    description: "You get a clear plan: what we'll build, timeline, and a fixed price. No surprises later.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "We Build & Launch",
    description: "Our team builds your solution. You get progress updates throughout. We launch only when you're 100% happy.",
  },
  {
    icon: Headphones,
    step: "04",
    title: "Ongoing Support",
    description: "Post-launch, we remain your partner. Updates, fixes, and growth strategies — we're one WhatsApp message away.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="section-dark py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">Our Process</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-4">
            How We Work
          </h2>
          <p className="text-pale-gray/70 text-lg max-w-xl mx-auto">
            Simple, transparent, and built around your schedule.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative">
                {/* Connector line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-9 left-[calc(50%+28px)] right-0 h-px bg-white/10 z-0" />
                )}
                <div className="relative z-10 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-charcoal border border-white/10 rounded-2xl mb-5 relative">
                    <Icon size={24} className="text-cyan-glow" />
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-electric-blue rounded-full text-white text-[10px] font-bold flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-jakarta font-bold text-white text-base mb-2">{step.title}</h3>
                  <p className="text-pale-gray/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
