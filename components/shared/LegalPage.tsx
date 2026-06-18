import Link from "next/link";

interface Section {
  heading: string;
  content: string | string[];
}

interface LegalPageProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: Section[];
}

export function LegalPage({ title, subtitle, lastUpdated, sections }: LegalPageProps) {
  return (
    <>
      {/* Header */}
      <section className="gradient-mesh py-16 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-cyan-glow text-xs font-bold tracking-widest uppercase mb-4 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full">
            Legal
          </span>
          <h1 className="font-jakarta font-extrabold text-white text-4xl sm:text-5xl leading-tight mb-4">
            {title}
          </h1>
          <p className="text-pale-gray/60 text-base">{subtitle}</p>
          <p className="text-pale-gray/40 text-sm mt-3">Last updated: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section-light py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-soft-gray rounded-3xl p-8 sm:p-12 space-y-10">
            {sections.map((section, i) => (
              <div key={i}>
                <h2 className="font-jakarta font-bold text-charcoal text-xl mb-4 pb-2 border-b border-soft-gray">
                  {section.heading}
                </h2>
                {Array.isArray(section.content) ? (
                  <ul className="space-y-2">
                    {section.content.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-charcoal/70 text-sm leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-electric-blue shrink-0 mt-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-charcoal/70 text-sm leading-relaxed whitespace-pre-line">{section.content}</p>
                )}
              </div>
            ))}

            {/* Contact footer */}
            <div className="bg-soft-gray rounded-2xl p-6 text-center">
              <p className="text-charcoal/60 text-sm mb-2">Questions about this policy?</p>
              <Link
                href="/contact"
                className="text-electric-blue font-semibold text-sm hover:underline"
              >
                Contact us at hello@literxsys.com
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
