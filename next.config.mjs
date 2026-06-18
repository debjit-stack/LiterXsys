import createMDX from "@next/mdx";
import remarkGfm from "remark-gfm";

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  optimizeFonts: false,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default withMDX(nextConfig);
