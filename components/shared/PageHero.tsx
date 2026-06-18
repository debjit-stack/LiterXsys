interface PageHeroProps {
  badge?: string;
  title: string;
  highlight?: string;
  description: string;
  dark?: boolean;
}

export function PageHero({ badge, title, highlight, description, dark = true }: PageHeroProps) {
  return (
    <section className={`${dark ? "gradient-mesh" : "section-light"} py-20 px-4 sm:px-6 text-center`}>
      <div className="max-w-3xl mx-auto">
        {badge && (
          <span className={`inline-block text-xs font-bold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full ${dark ? "bg-white/10 text-cyan-glow border border-white/20" : "bg-electric-blue/10 text-electric-blue"}`}>
            {badge}
          </span>
        )}
        <h1 className={`font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-5 ${dark ? "text-white" : "text-charcoal"}`}>
          {title}{" "}
          {highlight && <span className="text-gradient">{highlight}</span>}
        </h1>
        <p className={`text-lg max-w-2xl mx-auto leading-relaxed ${dark ? "text-pale-gray/75" : "text-charcoal/60"}`}>
          {description}
        </p>
      </div>
    </section>
  );
}
