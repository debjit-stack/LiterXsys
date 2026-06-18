import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Hospitals & Diagnostic Centers Kolkata — LiterXsys Techsol",
  description: "Healthcare websites with appointment booking, doctor profiles, and patient information for Kolkata hospitals and diagnostic centers.",
};

export default function HospitalDiagnosticsPage() {
  return (
    <IndustryPageTemplate
      badge="Hospital & Diagnostics"
      title="Patients Find You."
      highlight="Appointments Book Themselves."
      description="A professional healthcare website that builds patient trust, shows your specializations, and lets patients book appointments online — any time of day."
      painPoints={[
        "Patients can't find us when searching for doctors",
        "No easy way to show appointment availability",
        "Hard to communicate our services and specializations",
        "Patients prefer clinics with professional websites",
      ]}
      solutions={[
        { title: "Appointment Booking System", desc: "Online appointment form with department selection, preferred doctor, and date/time — with WhatsApp confirmation." },
        { title: "Doctor & Specialist Profiles", desc: "Individual profiles for each doctor with qualifications, specializations, experience, and consultation hours." },
        { title: "Services & Departments", desc: "Clear listing of all departments, diagnostic tests, and services — helping patients find the right care." },
        { title: "Health Blog", desc: "Educational health articles that rank on Google and position your clinic as a trusted healthcare authority." },
        { title: "Lab Report Portal", desc: "Secure patient login to access and download diagnostic reports online." },
        { title: "Emergency Contact Strip", desc: "Prominent emergency helpline number and ambulance contact visible on every page." },
      ]}
      features={[
        "Professional healthcare website design",
        "Online appointment booking form",
        "Doctor & specialist profiles",
        "Services & departments listing",
        "WhatsApp confirmation for appointments",
        "Health blog / patient education section",
        "Emergency contact strip (all pages)",
        "Local SEO for medical searches",
      ]}
      stats={[
        { value: "3x", label: "More Appointments" },
        { value: "24/7", label: "Online Booking" },
        { value: "14d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Want more patients to find you online?"
      ctaSubtext="Free consultation — no commitment, just honest advice."
    />
  );
}
