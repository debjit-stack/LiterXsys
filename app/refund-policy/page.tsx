import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Refund Policy — LiterXsys Techsol",
  description: "Refund and cancellation policy for LiterXsys Techsol services.",
};

export default function RefundPolicyPage() {
  return (
    <LegalPage
      title="Refund Policy"
      subtitle="Our commitment to fair and transparent billing."
      lastUpdated="1 June 2026"
      sections={[
        {
          heading: "1. Our Commitment",
          content: `At LiterXsys Techsol, we are committed to delivering high-quality digital services and ensuring client satisfaction. This policy outlines the circumstances under which refunds are applicable and the process for requesting them.`,
        },
        {
          heading: "2. Advance Payment",
          content: `All projects require a 50% advance payment before work begins. This advance covers the initial discovery, planning, design, and setup work invested before any deliverables are shared.

The advance payment is non-refundable once work has commenced, unless the project is cancelled due to our failure to begin within the agreed timeline.`,
        },
        {
          heading: "3. Full Refund Eligibility",
          content: [
            "We have not yet commenced work on your project despite receiving advance payment.",
            "We are unable to deliver the agreed scope of work due to reasons entirely within our control.",
            "A full refund request is made within 24 hours of advance payment, before any discovery or planning work begins.",
          ],
        },
        {
          heading: "4. Partial Refund Eligibility",
          content: [
            "Work has commenced but the project is cancelled at the Client's request before the midpoint of the project.",
            "In such cases, a partial refund may be issued based on the proportion of work completed, as assessed by our team.",
            "Partial refunds are evaluated case by case and are at the discretion of LiterXsys Techsol.",
          ],
        },
        {
          heading: "5. Non-Refundable Situations",
          content: [
            "Project cancelled by the Client after the midpoint of development.",
            "Dissatisfaction arising from content or materials provided by the Client.",
            "Delays or issues caused by the Client's failure to provide timely feedback or required materials.",
            "Change of mind after work has been delivered and approved.",
            "Third-party service costs (domain registration, hosting fees, API subscriptions) that have already been paid on the Client's behalf.",
            "Monthly retainer payments for ongoing services (SEO, maintenance, digital marketing) for the current billing month.",
          ],
        },
        {
          heading: "6. Monthly Retainer Services",
          content: `For ongoing monthly services (SEO, website maintenance, digital marketing), cancellations must be made at least 7 days before the next billing date to avoid being charged for the following month.

No refunds are issued for the current month's retainer payment once the billing cycle has begun.`,
        },
        {
          heading: "7. How to Request a Refund",
          content: `To request a refund, contact us at hello@literxsys.com with the subject line "Refund Request — [Your Project Name]". Include your name, project details, payment reference, and reason for the request.

We will acknowledge your request within 2 business days and provide a decision within 7 business days. Approved refunds are processed within 10–14 business days to the original payment method.`,
        },
        {
          heading: "8. Disputes",
          content: `We strongly encourage clients to raise any concerns with us directly before initiating a dispute through their bank or payment provider. We are committed to resolving issues fairly and promptly.

Unresolved disputes will be subject to the jurisdiction of courts in Kolkata, West Bengal, India.`,
        },
      ]}
    />
  );
}
