import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { WhatsAppSticky } from "@/components/shared/WhatsAppSticky";
import { ExitIntentPopup } from "@/components/shared/ExitIntentPopup";
import { SkipLink } from "@/components/shared/SkipLink";
import { LocalBusinessSchema } from "@/components/seo/SchemaMarkup";
import { getCampaign } from "@/lib/content";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0F1E",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://literxsys.com"),
  title: {
    default: "LiterXsys Techsol — Websites, SEO, AI & Automation for Kolkata Businesses",
    template: "%s | LiterXsys Techsol",
  },
  description: "We build digital engines for local businesses. Websites, Android Apps, SEO, AI Chatbots & WhatsApp Automation — everything a Kolkata business needs to grow online.",
  keywords: ["website development kolkata", "seo services kolkata", "digital marketing kolkata", "ai chatbot kolkata", "whatsapp automation kolkata"],
  authors: [{ name: "LiterXsys Techsol" }],
  creator: "LiterXsys Techsol",
  publisher: "LiterXsys Techsol",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  openGraph: {
    title: "LiterXsys Techsol — Digital Solutions for Kolkata Businesses",
    description: "Websites, SEO, AI Chatbots & Automation for local businesses.",
    url: "https://literxsys.com",
    siteName: "LiterXsys Techsol",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-default.png", width: 1200, height: 630, alt: "LiterXsys Techsol" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "LiterXsys Techsol — Kolkata Digital Agency",
    description: "Websites, SEO, AI Chatbots & Automation for Kolkata businesses.",
    images: ["/images/og-default.png"],
  },
  alternates: { canonical: "https://literxsys.com" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const campaign = getCampaign();
  return (
    <html lang="en">
      <head>
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX',{page_path:window.location.pathname,send_page_view:true});`,
          }}
        />
        <LocalBusinessSchema />
      </head>
      <body>
        <SkipLink />
        <AnnouncementBar campaign={campaign} />
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppSticky />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
