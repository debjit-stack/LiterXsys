import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readTime: number;
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(postsDir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? "",
    description: data.description ?? "",
    date: data.date ? new Date(data.date).toISOString() : "",
    author: data.author ?? "LiterXsys Team",
    category: data.category ?? "General",
    tags: data.tags ?? [],
    readTime: data.readTime ?? 5,
    featured: data.featured ?? false,
    content,
  };
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .map(({ content: _, ...meta }) => meta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
