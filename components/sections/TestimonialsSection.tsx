import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/content";

export function TestimonialsSection({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <section className="section-gray py-20 px-4 sm:px-6">
      <div className="max-w-content mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">Client Stories</span>
          <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal leading-tight mb-4">
            What Our Clients Say
          </h2>
          <p className="text-charcoal/60 text-lg max-w-xl mx-auto">
            Real feedback from real businesses we&apos;ve helped grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white border border-soft-gray rounded-2xl p-7">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-amber-cta fill-amber-cta" />
                ))}
              </div>
              <p className="text-charcoal/80 text-base leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-electric-blue/10 flex items-center justify-center font-jakarta font-bold text-electric-blue text-sm">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-charcoal text-sm">{t.name}</div>
                  <div className="text-charcoal/50 text-xs">{t.business}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
