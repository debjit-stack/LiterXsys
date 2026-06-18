import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Training Institutes Kolkata — LiterXsys Techsol",
  description: "Course portals with AI chatbot and lead capture for Kolkata training institutes. More admissions, less manual work.",
};

export default function TrainingInstitutesPage() {
  return (
    <IndustryPageTemplate
      badge="Training Institutes"
      title="Fill More Seats"
      highlight="With Less Effort"
      description="A professional course portal with AI chatbot that answers enquiries, captures leads, and books demo classes — automatically, around the clock."
      painPoints={[
        "Students can't find our courses online",
        "Enquiries come at odd hours, no one to answer",
        "Hard to show all courses and batch details",
        "Manual follow-up takes too much time",
      ]}
      solutions={[
        { title: "Course Listing Portal", desc: "Clean, filterable course catalogue with individual pages for each course — syllabus, fees, duration, and batch dates." },
        { title: "AI Chatbot", desc: "24/7 chatbot that answers FAQ, explains courses, and captures student lead details automatically." },
        { title: "Online Admission Form", desc: "Simple enquiry and admission form with instant WhatsApp notification to your team." },
        { title: "Faculty Profiles", desc: "Showcase your instructors with credentials, experience, and student reviews to build credibility." },
        { title: "Placement Stats Section", desc: "Display placement records, company logos, and salary benchmarks to attract more students." },
        { title: "Lead Capture Automation", desc: "Every enquiry goes into a lead list. Automated WhatsApp follow-up keeps them engaged." },
      ]}
      features={[
        "Course catalogue with filters",
        "Individual course pages with syllabus",
        "Online enquiry & admission form",
        "AI chatbot (24/7 lead capture)",
        "Faculty & staff profiles",
        "Batch schedule & fee structure",
        "Placement stats & testimonials",
        "WhatsApp automation for follow-up",
      ]}
      stats={[
        { value: "4x", label: "More Enquiries" },
        { value: "24/7", label: "AI Chatbot" },
        { value: "12d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Ready to fill your next batch?"
      ctaSubtext="Free consultation — we will show you exactly how the chatbot works."
    />
  );
}
