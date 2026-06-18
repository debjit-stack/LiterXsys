import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getPostBySlug, getPostSlugs, getAllPosts } from "@/lib/posts";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-IN", { day: "2-digit", month: "long", year: "numeric" });
}

// Simple MDX-to-HTML renderer using string parsing
function renderMarkdown(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2 class="font-jakarta font-extrabold text-charcoal text-2xl mt-10 mb-4">$1</h2>')
    .replace(/^### (.+)$/gm, '<h3 class="font-jakarta font-bold text-charcoal text-xl mt-8 mb-3">$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-charcoal">$1</strong>')
    .replace(/^---$/gm, '<hr class="border-soft-gray my-10" />')
    .replace(/^- (.+)$/gm, '<li class="text-charcoal/75 leading-relaxed ml-5 list-disc">$1</li>')
    .replace(/^(\d+)\. (.+)$/gm, '<li class="text-charcoal/75 leading-relaxed ml-5 list-decimal">$2</li>')
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-electric-blue underline underline-offset-2">$1</a>')
    .split('\n\n')
    .map(block => {
      if (block.startsWith('<h') || block.startsWith('<hr') || block.startsWith('<li')) return block;
      if (block.trim() === '') return '';
      return `<p class="text-charcoal/75 leading-relaxed mb-5">${block.trim()}</p>`;
    })
    .join('\n');
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const html = renderMarkdown(post.content);

  return (
    <>
      {/* Header */}
      <section className="gradient-mesh py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link href="/blog" className="inline-flex items-center gap-2 text-pale-gray/60 hover:text-white text-sm mb-8 transition-colors">
            <ArrowLeft size={14} /> Back to Blog
          </Link>
          <span className="inline-block bg-electric-blue/20 text-electric-blue text-xs font-semibold px-3 py-1 rounded-full border border-electric-blue/30 mb-5">
            {post.category}
          </span>
          <h1 className="font-jakarta font-extrabold text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-5">
            {post.title}
          </h1>
          <p className="text-pale-gray/70 text-lg mb-6">{post.description}</p>
          <div className="flex flex-wrap items-center gap-4 text-pale-gray/50 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <span>{formatDate(post.date)}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={13} /> {post.readTime} min read</span>
          </div>
        </div>
      </section>

      {/* Body */}
      <section className="section-light py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <article dangerouslySetInnerHTML={{ __html: html }} />

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-soft-gray">
              <Tag size={14} className="text-charcoal/40 mt-0.5" />
              {post.tags.map((tag) => (
                <span key={tag} className="bg-soft-gray text-charcoal/60 text-xs px-3 py-1 rounded-full">{tag}</span>
              ))}
            </div>
          )}

          {/* Inline CTA */}
          <div className="mt-12 bg-midnight-navy rounded-3xl p-8 text-center">
            <h3 className="font-jakarta font-extrabold text-white text-xl sm:text-2xl mb-3">
              Want help applying this to your business?
            </h3>
            <p className="text-pale-gray/60 text-sm mb-6">
              Get a free consultation — we&apos;ll give you a custom action plan for your specific situation.
            </p>
            <Link href="/free-audit" className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-all hover:scale-105">
              Book Free Consultation <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="section-gray py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-jakarta font-bold text-charcoal text-xl mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group bg-white border border-soft-gray rounded-2xl p-5 hover:border-electric-blue/30 transition-all hover:shadow-md">
                  <h3 className="font-jakarta font-bold text-charcoal text-sm leading-snug mb-2 group-hover:text-electric-blue transition-colors">
                    {p.title}
                  </h3>
                  <div className="flex items-center gap-2 text-charcoal/40 text-xs">
                    <Clock size={11} /> {p.readTime} min read
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTAStrip heading="Ready to grow your business online?" subtext="Free consultation — no commitment, no sales pitch." />
    </>
  );
}
