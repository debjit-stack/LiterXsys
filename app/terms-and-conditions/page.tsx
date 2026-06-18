import type { Metadata } from "next";
import { LegalPage } from "@/components/shared/LegalPage";

export const metadata: Metadata = {
  title: "Terms & Conditions — LiterXsys Techsol",
  description: "Terms and Conditions governing the use of LiterXsys Techsol services.",
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="Please read these terms carefully before engaging our services."
      lastUpdated="1 June 2026"
      sections={[
        {
          heading: "1. Acceptance of Terms",
          content: `By accessing our website or engaging our services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.

These terms constitute a legally binding agreement between you ("Client") and LiterXsys Techsol ("Company", "we", "us") registered in Kolkata, West Bengal, India.`,
        },
        {
          heading: "2. Services",
          content: `We provide digital services including but not limited to: website development, Android app development, SEO optimization, digital marketing, AI chatbot development, WhatsApp automation, website maintenance, and ERP solutions.

The specific scope of work, deliverables, timelines, and pricing for each project are defined in a separate written proposal or agreement provided to the Client before work commences.`,
        },
        {
          heading: "3. Payment Terms",
          content: [
            "All projects require a minimum 50% advance payment before work begins.",
            "The remaining balance is due upon project completion and before final files or access credentials are handed over.",
            "Payments are accepted via bank transfer, UPI, or other agreed methods.",
            "All prices are in Indian Rupees (INR) and are inclusive of applicable GST unless stated otherwise.",
            "Delayed payments beyond 7 days from the due date may result in a pause of work.",
          ],
        },
        {
          heading: "4. Project Timeline",
          content: `Timelines are estimated at the time of proposal and are subject to timely receipt of required materials, content, and feedback from the Client.

Delays caused by the Client (including late feedback, missing assets, or scope changes) will extend the project timeline accordingly and are not the responsibility of LiterXsys Techsol.

We will communicate any timeline changes proactively and transparently.`,
        },
        {
          heading: "5. Client Responsibilities",
          content: [
            "Provide all required content, images, credentials, and materials in a timely manner.",
            "Provide timely feedback at each stage of the project (within 3 business days unless otherwise agreed).",
            "Ensure that any content you provide does not infringe third-party intellectual property rights.",
            "Designate a single point of contact for communication to avoid conflicting instructions.",
          ],
        },
        {
          heading: "6. Revisions",
          content: `Each project includes a defined number of revision rounds as specified in the proposal. Additional revisions beyond the agreed scope will be billed at our standard hourly rate.

Revisions requested after final approval and project handover are considered new work and will be quoted separately.`,
        },
        {
          heading: "7. Intellectual Property",
          content: `Upon receipt of full and final payment, the Client receives full ownership of all custom deliverables created specifically for their project (website design, content, custom code).

We retain the right to use completed projects in our portfolio and marketing materials unless the Client explicitly requests otherwise in writing.

Third-party tools, plugins, stock images, and licensed software used in a project remain subject to their respective licenses and are not transferred to the Client.`,
        },
        {
          heading: "8. Confidentiality",
          content: `Both parties agree to keep confidential any proprietary business information shared during the course of the project. This obligation survives the termination of the agreement for a period of 2 years.`,
        },
        {
          heading: "9. Limitation of Liability",
          content: `Our total liability to the Client for any claim arising from our services shall not exceed the total fees paid for the specific project in question.

We are not liable for indirect, consequential, or incidental damages including loss of revenue, loss of data, or loss of business opportunity. We are not responsible for third-party service outages (hosting providers, payment gateways, WhatsApp API, etc.).`,
        },
        {
          heading: "10. Termination",
          content: `Either party may terminate the agreement with 14 days' written notice. Work completed up to the termination date will be invoiced at the pro-rata rate. The advance payment is non-refundable if termination is initiated by the Client after work has commenced.`,
        },
        {
          heading: "11. Governing Law",
          content: `These Terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Kolkata, West Bengal, India.`,
        },
        {
          heading: "12. Changes to Terms",
          content: `We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the revised Terms.`,
        },
      ]}
    />
  );
}
