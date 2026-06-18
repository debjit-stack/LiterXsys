import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Travel Agencies Kolkata — LiterXsys Techsol",
  description: "Travel agency websites with package showcases, WhatsApp booking, and automated follow-up. More bookings, less manual work.",
};

export default function TravelAgenciesPage() {
  return (
    <IndustryPageTemplate
      badge="Travel Agencies"
      title="More Bookings,"
      highlight="Less Manual Work"
      description="A stunning travel website that showcases your packages, captures leads via WhatsApp, and follows up automatically — so you focus on planning trips, not chasing enquiries."
      painPoints={[
        "Customers don't trust us without a professional site",
        "Hard to showcase all packages attractively",
        "Enquiries go cold before we follow up",
        "Competitors with better websites get the bookings",
      ]}
      solutions={[
        { title: "Package Showcase", desc: "Beautiful package cards with itinerary, inclusions, pricing, and destination photos that make customers want to book." },
        { title: "WhatsApp Booking", desc: "One-tap WhatsApp button on every package. Customer enquiries land directly in your inbox." },
        { title: "Automated Follow-Up", desc: "WhatsApp automation sends follow-up messages to enquiries within minutes — no leads go cold." },
        { title: "Destination Gallery", desc: "Immersive photo galleries by destination that inspire customers and reduce hesitation." },
        { title: "Customer Reviews", desc: "Trip review section with photos and ratings that builds trust with new visitors." },
        { title: "Custom Itinerary Pages", desc: "Detailed day-by-day itinerary pages for each package — transparency that converts browsers into bookers." },
      ]}
      features={[
        "Package showcase with filter by destination",
        "Individual package pages with itinerary",
        "WhatsApp booking & enquiry system",
        "Automated WhatsApp follow-up",
        "Destination photo gallery",
        "Customer testimonials & trip reviews",
        "EMI calculator for packages",
        "Local SEO for travel searches",
      ]}
      stats={[
        { value: "5x", label: "More Bookings" },
        { value: "Auto", label: "WhatsApp Follow-Up" },
        { value: "10d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Ready to get more travel bookings?"
      ctaSubtext="Free consultation — we will show you a demo built for your agency."
    />
  );
}
