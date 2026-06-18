import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { PortfolioGrid } from "@/components/shared/PortfolioGrid";
import { getPortfolio } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio — LiterXsys Techsol | Our Work",
  description: "See websites, apps, and digital solutions we have built for Kolkata businesses. Real projects, real results.",
};

export default function PortfolioPage() {
  const items = getPortfolio();
  return (
    <>
      <PageHero
        badge="Our Work"
        title="Projects We're"
        highlight="Proud Of"
        description="Every project here represents a real business we helped grow. Browse by category to see what we can build for you."
      />
      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <PortfolioGrid items={items} />
        </div>
      </section>
      <CTAStrip heading="Want results like these?" subtext="Let's talk about your project — free consultation, no commitment." />
    </>
  );
}
