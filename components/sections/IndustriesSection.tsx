import Link from "next/link";
import { ArrowRight } from "lucide-react";

const industries = [
  { label: "🍽️ Restaurants & Cafes", href: "/industries/restaurants", desc: "Online menus, booking systems, food delivery integration" },
  { label: "🏋️ Gyms & Fitness Centers", href: "/industries/gyms-fitness", desc: "Class schedules, membership plans, trainer profiles" },
  { label: "📚 Training Institutes", href: "/industries/training-institutes", desc: "Course portals, admissions forms, online class platforms" },
  { label: "✈️ Travel Agencies", href: "/industries/travel-agencies", desc: "Package showcases, enquiry systems, booking management" },
  { label: "🏥 Hospital & Diagnostics", href: "/industries/hospital-diagnostics", desc: "Appointment systems, doctor profiles, health records" },
  { label: "🏫 Schools & Colleges", href: "/industries/schools-colleges", desc: "Admissions, notice boards, fee management portals" },
];

export function IndustriesSection() {
  return (
    <section className="section-dark py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-3">Industries We Serve</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-white leading-tight mb-4">
            Built for Your Industry
          </h2>
          <p className="text-pale-gray/70 text-lg max-w-xl mx-auto">
            Every industry has different digital needs. We build solutions that fit yours perfectly.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind) => (
            <Link
              key={ind.href}
              href={ind.href}
              className="group bg-charcoal hover:bg-white/5 border border-white/10 hover:border-cyan-glow/30 rounded-2xl p-6 transition-all duration-300"
            >
              <div className="font-jakarta font-bold text-white text-base mb-2 group-hover:text-cyan-glow transition-colors">
                {ind.label}
              </div>
              <p className="text-pale-gray/60 text-sm leading-relaxed mb-4">{ind.desc}</p>
              <div className="flex items-center gap-1 text-cyan-glow/60 group-hover:text-cyan-glow text-xs font-semibold transition-colors">
                Learn more <ArrowRight size={12} />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
