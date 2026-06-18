import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy — LiterXsys Techsol",
  description: "Cookie Policy for LiterXsys Techsol — how we use cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      subtitle="How we use cookies and similar technologies on our website."
      lastUpdated="1 June 2026"
      sections={[
        {
          heading: "1. What Are Cookies?",
          content: `Cookies are small text files placed on your device when you visit a website. They help websites remember your preferences, understand how you use the site, and deliver relevant content.

Cookies can be "session cookies" (deleted when you close your browser) or "persistent cookies" (remaining on your device for a set period or until you delete them).`,
        },
        {
          heading: "2. Cookies We Use",
          content: [
            "Essential cookies: Required for the website to function properly. These cannot be disabled. They include session management and security cookies.",
            "Analytics cookies: We use Google Analytics 4 (GA4) to understand how visitors interact with our website — pages visited, time spent, traffic sources. This data is anonymous and aggregated.",
            "Preference cookies: These remember your choices (such as dismissing our announcement bar) to improve your experience on return visits.",
            "Marketing cookies: If you click through from a paid ad, cookies may track the source of your visit to help us measure campaign effectiveness.",
          ],
        },
        {
          heading: "3. Third-Party Cookies",
          content: [
            "Google Analytics 4 — website usage analytics (Google Privacy Policy applies).",
            "Google Tag Manager — manages analytics and marketing scripts.",
            "Meta Pixel — if you visit our site from a Facebook or Instagram ad (Meta Privacy Policy applies).",
            "Google Fonts — loads our website fonts from Google servers (may set preference cookies).",
          ],
        },
        {
          heading: "4. How to Control Cookies",
          content: `You can control and delete cookies through your browser settings. Most browsers allow you to:

• View cookies currently stored on your device
• Block all or specific cookies
• Delete cookies when you close your browser
• Set alerts when websites attempt to place cookies

Please note that blocking essential cookies may affect the functionality of our website. To manage cookies in your browser, refer to your browser's help documentation.`,
        },
        {
          heading: "5. Google Analytics Opt-Out",
          content: `To opt out of Google Analytics tracking across all websites, you can install the Google Analytics Opt-out Browser Add-on available at tools.google.com/dlpage/gaoptout.

Alternatively, you can disable personalised advertising in your Google account settings at adssettings.google.com.`,
        },
        {
          heading: "6. Cookie Retention Periods",
          content: [
            "Session cookies: Deleted when you close your browser.",
            "GA4 analytics cookies: Retained for up to 2 years.",
            "Preference cookies (e.g., announcement bar dismissed): Retained for up to 30 days.",
            "Exit intent popup session marker: Deleted when you close your browser (session storage).",
          ],
        },
        {
          heading: "7. Updates to This Policy",
          content: `We may update this Cookie Policy as we add new features or as regulations change. The "last updated" date at the top of this page reflects the most recent revision. We recommend reviewing this policy periodically.`,
        },
        {
          heading: "8. Contact",
          content: `For questions about our use of cookies, contact us at hello@literxsys.com or via WhatsApp at +91 XXXXX XXXXX.`,
        },
      ]}
    />
  );
}
