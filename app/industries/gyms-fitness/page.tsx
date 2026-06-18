import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Gyms & Fitness Centers Kolkata — LiterXsys Techsol",
  description: "Gym websites with class schedules, membership plans, and WhatsApp booking. Rank on Google and get more members. Kolkata digital agency.",
};

export default function GymsFitnessPage() {
  return (
    <IndustryPageTemplate
      badge="Gyms & Fitness Centers"
      title="Get More Members"
      highlight="Every Month"
      description="A high-energy website that showcases your gym, converts visitors into members, and keeps your class schedules and plans up to date — always."
      painPoints={[
        "People can't find us when searching for a gym",
        "No easy way to show class schedules online",
        "Membership enquiries go unanswered",
        "Our current website looks outdated",
      ]}
      solutions={[
        { title: "Class Schedule Timetable", desc: "Interactive weekly timetable showing all classes, timings, and available spots — updated easily by you." },
        { title: "Membership Plan Cards", desc: "Clear, attractive plan comparison cards with WhatsApp CTA for instant enquiries." },
        { title: "Trainer Profiles", desc: "Showcase your team with credentials, specializations, and photos to build trust." },
        { title: "Transformation Gallery", desc: "Before/after gallery that shows real results and builds social proof." },
        { title: "WhatsApp Booking", desc: "One-tap WhatsApp button for trial sessions, membership queries, and class bookings." },
        { title: "Local SEO", desc: "Rank for 'gym near me', 'fitness center in [area]', and specific workout type searches." },
      ]}
      features={[
        "High-energy responsive website design",
        "Weekly class schedule timetable",
        "Membership plan comparison section",
        "Trainer / coach profiles",
        "Transformation gallery",
        "WhatsApp trial booking button",
        "Local SEO optimization",
        "Google Maps & location embed",
      ]}
      stats={[
        { value: "2x", label: "More Memberships" },
        { value: "Top3", label: "Google Rankings" },
        { value: "11d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Want more members walking in?"
      ctaSubtext="Free consultation and demo — no commitment needed."
    />
  );
}
