import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Schools & Colleges Kolkata — LiterXsys Techsol",
  description: "School and college websites with admissions portal, notice board, fee info, and faculty profiles. Built for Kolkata educational institutions.",
};

export default function SchoolsCollegesPage() {
  return (
    <IndustryPageTemplate
      badge="Schools & Colleges"
      title="A Website Your"
      highlight="Institution Deserves"
      description="A professional educational website that showcases your institution, streamlines admissions enquiries, and keeps students and parents informed — all in one place."
      painPoints={[
        "Parents can't find admission details online",
        "No central place for notices and circulars",
        "Hard to showcase achievements and faculty",
        "Admission enquiries handled only by phone",
      ]}
      solutions={[
        { title: "Admissions Portal", desc: "Online admission enquiry form with document upload, fee structure, and eligibility details — all in one page." },
        { title: "Digital Notice Board", desc: "Easily updatable notice board for circulars, exam schedules, holiday lists, and important announcements." },
        { title: "Faculty Directory", desc: "Faculty profiles with qualifications, departments, and contact details for parents and students." },
        { title: "Achievements Gallery", desc: "Showcase academic results, sports achievements, cultural events, and awards to attract new admissions." },
        { title: "Fee Structure Page", desc: "Clear, transparent fee structure page that answers parents' most common question upfront." },
        { title: "Photo & Video Gallery", desc: "Annual day highlights, sports events, and classroom photos that bring your institution to life online." },
      ]}
      features={[
        "Institution website with multiple departments",
        "Online admission enquiry form",
        "Digital notice board (easy to update)",
        "Faculty directory with profiles",
        "Fee structure & eligibility page",
        "Photo & video gallery",
        "Achievements & awards section",
        "Parent & student contact portal",
      ]}
      stats={[
        { value: "2x", label: "More Admissions" },
        { value: "Easy", label: "Content Updates" },
        { value: "14d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Ready to modernize your institution online?"
      ctaSubtext="Free consultation — we will show you exactly what your website can look like."
    />
  );
}
