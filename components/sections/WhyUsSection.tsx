import { Zap, Shield, Clock, HeadphonesIcon, IndianRupee, MapPin } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Most websites delivered in 7–14 days. We don't believe in endless delays — you get your site running fast.",
    color: "text-amber-cta",
    bg: "bg-amber-cta/10",
  },
  {
    icon: IndianRupee,
    title: "Honest Pricing",
    description: "What we quote is what you pay. Zero hidden charges, zero surprises. Transparent billing, always.",
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
  {
    icon: MapPin,
    title: "Local First",
    description: "We are a Kolkata business building for Kolkata businesses. We understand your customers, your market.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Shield,
    title: "Quality Guaranteed",
    description: "Every website is mobile-optimized, fast-loading, and SEO-ready before it goes live. No compromises.",
    color: "text-cyan-glow",
    bg: "bg-cyan-glow/10",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "We don't disappear after launch. All packages include support, and we're always reachable on WhatsApp.",
    color: "text-electric-blue",
    bg: "bg-electric-blue/10",
  },
  {
    icon: Clock,
    title: "Always On Time",
    description: "Deadlines are commitments, not suggestions. We have a 100% on-time delivery record.",
    color: "text-emerald-trust",
    bg: "bg-emerald-trust/10",
  },
];

export function WhyUsSection() {
  return (
    <section className="section-gray py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-14">
          <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Why LiterXsys</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl lg:text-5xl text-charcoal leading-tight mb-4">
            Why Local Businesses <br className="hidden sm:block" />
            Choose Us
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            We are not a giant agency. We are your dedicated digital partner — lean, fast, and fully invested in your growth.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="bg-white border border-soft-gray rounded-2xl p-7">
                <div className={`w-12 h-12 ${r.bg} rounded-xl flex items-center justify-center mb-5`}>
                  <Icon size={22} className={r.color} />
                </div>
                <h3 className="font-jakarta font-bold text-charcoal text-lg mb-2">{r.title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{r.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
