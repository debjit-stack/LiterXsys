import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Page Not Found — LiterXsys Techsol",
};

export default function NotFound() {
  return (
    <section className="gradient-mesh min-h-[80vh] flex items-center justify-center px-4 sm:px-6 text-center">
      <div className="max-w-lg mx-auto">
        <div className="font-jakarta font-extrabold text-white/10 text-[120px] leading-none mb-4 select-none">
          404
        </div>
        <h1 className="font-jakarta font-extrabold text-white text-3xl sm:text-4xl mb-4">
          Page Not Found
        </h1>
        <p className="text-pale-gray/60 text-lg mb-10">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-full text-sm transition-all hover:scale-105"
          >
            <Home size={15} /> Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-3.5 rounded-full text-sm transition-all"
          >
            <ArrowLeft size={15} /> Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
