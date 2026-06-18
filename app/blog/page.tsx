import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — LiterXsys Techsol | Digital Growth Tips for Kolkata Businesses",
  description: "Practical guides on websites, SEO, AI chatbots, and digital marketing for local Kolkata businesses.",
};

const CATEGORY_COLORS: Record<string, string> = {
  "Business Growth": "bg-electric-blue/10 text-electric-blue",
  "SEO":             "bg-emerald-trust/10 text-emerald-trust",
  "AI & Automation": "bg-cyan-glow/10 text-cyan-glow",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => p.slug !== featured?.slug);

  return (
    <>
      <PageHero
        badge="Blog"
        title="Digital Growth Tips"
        highlight="for Kolkata Businesses"
        description="Practical guides on websites, SEO, AI, and automation — written specifically for local businesses. No jargon, just results."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">

          {featured && (
            <div className="mb-14">
              <p className="text-electric-blue text-xs font-bold uppercase tracking-widest mb-5">Featured Article</p>
              <Link href={`/blog/${featured.slug}`} className="group block bg-midnight-navy rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-electric-blue/10 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="h-56 lg:min-h-[240px] bg-gradient-to-br from-electric-blue/30 to-cyan-glow/20 flex items-center justify-center">
                    <span className="font-jakarta font-extrabold text-white/10 text-7xl">B</span>
                  </div>
                  <div className="p-8 sm:p-10">
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-4 ${CATEGORY_COLORS[featured.category] ?? "bg-white/10 text-pale-gray"}`}>
                      {featured.category}
                    </span>
                    <h2 className="font-jakarta font-extrabold text-white text-2xl sm:text-3xl leading-tight mb-3 group-hover:text-cyan-glow transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-pale-gray/60 text-sm leading-relaxed mb-6">{featured.description}</p>
                    <div className="flex items-center gap-4 text-pale-gray/40 text-xs">
                      <span>{formatDate(featured.date)}</span>
                      <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime} min read</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white border border-soft-gray rounded-2xl overflow-hidden hover:border-electric-blue/30 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                <div className="h-40 bg-gradient-to-br from-deep-slate to-charcoal flex items-center justify-center">
                  <span className="font-jakarta font-extrabold text-white/10 text-5xl">{post.category.charAt(0)}</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 self-start ${CATEGORY_COLORS[post.category] ?? "bg-soft-gray text-charcoal"}`}>
                    {post.category}
                  </span>
                  <h3 className="font-jakarta font-bold text-charcoal text-base leading-snug mb-2 group-hover:text-electric-blue transition-colors flex-1">
                    {post.title}
                  </h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed mb-4 line-clamp-2">{post.description}</p>
                  <div className="flex items-center gap-3 text-charcoal/40 text-xs mt-auto pt-4 border-t border-soft-gray">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1"><Clock size={11} /> {post.readTime} min</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {posts.length === 0 && (
            <p className="text-center text-charcoal/50 py-20">Articles coming soon — check back next week!</p>
          )}
        </div>
      </section>

      <CTAStrip heading="Want personalised advice for your business?" subtext="Book a free consultation — we will audit your digital presence for free." />
    </>
  );
}
