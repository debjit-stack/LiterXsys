import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy — LiterXsys Techsol",
  description: "Privacy Policy for LiterXsys Techsol. How we collect, use, and protect your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your personal information."
      lastUpdated="1 June 2026"
      sections={[
        {
          heading: "1. Who We Are",
          content: `LiterXsys Techsol ("we", "our", "us") is a digital services company based in Kolkata, West Bengal, India. We provide website development, SEO, digital marketing, AI chatbot development, WhatsApp automation, and related services to businesses.

This Privacy Policy explains how we handle personal information collected through our website (literxsys.com) and in the course of providing our services.`,
        },
        {
          heading: "2. Information We Collect",
          content: [
            "Name, email address, phone number, and business name submitted through our contact or audit request forms.",
            "Your website URL, if provided voluntarily for audit purposes.",
            "Service preferences and project requirements you share with us.",
            "Technical data including IP address, browser type, device type, and pages visited — collected automatically via analytics tools.",
            "Cookies and similar tracking technologies (see our Cookie Policy for details).",
          ],
        },
        {
          heading: "3. How We Use Your Information",
          content: [
            "To respond to your enquiries and provide the services you have requested.",
            "To send you a quote, proposal, or audit report based on your submission.",
            "To send you updates about your project or our services — only with your consent.",
            "To improve our website and service quality based on usage analytics.",
            "To comply with legal obligations applicable to our business in India.",
          ],
        },
        {
          heading: "4. How We Share Your Information",
          content: `We do not sell, rent, or trade your personal information to any third party.

We may share your information with trusted third-party service providers (such as email delivery, analytics, or payment processing) solely to deliver our services. These providers are contractually bound to protect your data and use it only for the specified purpose.

We may disclose your information if required by law, court order, or governmental authority in India.`,
        },
        {
          heading: "5. Data Retention",
          content: `We retain your personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by applicable law.

Lead and enquiry data is retained for a maximum of 2 years. Project-related communications are retained for the duration of the project and up to 3 years after completion. You may request deletion of your data at any time (see Section 7).`,
        },
        {
          heading: "6. Data Security",
          content: `We take reasonable technical and organisational measures to protect your personal information from unauthorised access, disclosure, alteration, or destruction. Our website uses SSL/TLS encryption for all data in transit.

However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.`,
        },
        {
          heading: "7. Your Rights",
          content: [
            "Right to access: You may request a copy of the personal information we hold about you.",
            "Right to correction: You may ask us to correct inaccurate or incomplete information.",
            "Right to deletion: You may request that we delete your personal data, subject to legal retention requirements.",
            "Right to withdraw consent: Where we process your data based on consent, you may withdraw it at any time.",
            "To exercise any of these rights, contact us at hello@literxsys.com.",
          ],
        },
        {
          heading: "8. Third-Party Links",
          content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices of those websites and encourage you to review their privacy policies before providing any personal information.`,
        },
        {
          heading: "9. Children's Privacy",
          content: `Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such information, please contact us immediately.`,
        },
        {
          heading: "10. Changes to This Policy",
          content: `We may update this Privacy Policy from time to time. We will notify you of significant changes by posting a notice on our website or by email. The "last updated" date at the top of this page reflects the most recent revision.`,
        },
        {
          heading: "11. Contact Us",
          content: `For any privacy-related questions or to exercise your rights, contact:

LiterXsys Techsol
Email: hello@literxsys.com
WhatsApp: +91 XXXXX XXXXX
Location: Kolkata, West Bengal, India`,
        },
      ]}
    />
  );
}
