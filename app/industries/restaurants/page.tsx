import type { Metadata } from "next";
import { IndustryPageTemplate } from "@/components/shared/IndustryPage";

export const metadata: Metadata = {
  title: "Website for Restaurants Kolkata — LiterXsys Techsol",
  description: "Restaurant websites with online menu, table booking, and local SEO. Get found on Google Maps and attract more diners. Kolkata-based agency.",
};

export default function RestaurantsPage() {
  return (
    <IndustryPageTemplate
      badge="Restaurants & Cafes"
      title="Get More Diners"
      highlight="From Google"
      description="A professional website turns hungry searchers into paying customers. Online menu, table booking, and local SEO — built specifically for restaurants."
      painPoints={[
        "My restaurant doesn't appear on Google",
        "Customers can't find our menu online",
        "No easy way to take table reservations",
        "Competitors rank higher than us",
      ]}
      solutions={[
        { title: "Digital Menu", desc: "A beautiful, mobile-friendly menu your customers can browse before they visit — with photos, categories, and prices." },
        { title: "Table Reservation System", desc: "Online booking form with WhatsApp confirmation so you never miss a reservation." },
        { title: "Local SEO", desc: "Rank for 'restaurant near me', 'best restaurant in Kolkata', and your specific cuisine searches." },
        { title: "Google Business Profile", desc: "Optimized GMB profile with photos, menu link, reviews, and directions." },
        { title: "Social Integration", desc: "Instagram feed, Facebook page link, and share-ready food photos built into your site." },
        { title: "Offers & Events Page", desc: "Easily update daily specials, festival offers, and upcoming events without any technical help." },
      ]}
      features={[
        "5–10 page mobile-first website",
        "Digital menu with photos & categories",
        "Table booking / takeaway order form",
        "WhatsApp integration for confirmations",
        "Google Maps embed",
        "Local SEO setup",
        "Google Business Profile optimization",
        "Customer review section",
      ]}
      stats={[
        { value: "3x", label: "More Enquiries" },
        { value: "#1", label: "Local Rankings" },
        { value: "9d", label: "Avg. Delivery" },
        { value: "98%", label: "Client Satisfaction" },
      ]}
      ctaHeading="Ready to fill more tables?"
      ctaSubtext="Get a free demo of your restaurant website — ready in 24 hours."
    />
  );
}
