import fs from "fs";
import path from "path";

const contentDir = path.join(process.cwd(), "content");

function readJSON<T>(filename: string): T {
  const filePath = path.join(contentDir, filename);
  const raw = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(raw) as T;
}

export type Stats = {
  projects_delivered: number;
  clients_served: number;
  satisfaction_rate: number;
  years_active: number;
  cities_served: number;
};

export type Win = {
  id: string;
  type: "delivery" | "acquisition" | "milestone";
  title: string;
  date: string;
  visible: boolean;
};

export type Campaign = {
  active: boolean;
  label: string;
  headline: string;
  subtext: string;
  cta_text: string;
  cta_link: string;
  expires_at: string;
  style: "urgent" | "normal";
};

export type PricingPackage = {
  name: string;
  starting_from: number;
  highlight: boolean;
  badge: string | null;
  features: string[];
  ideal_for: string;
  cta: string;
};

export type Pricing = {
  packages: PricingPackage[];
  note: string;
};

export type Testimonial = {
  id: string;
  name: string;
  business: string;
  city: string;
  rating: number;
  quote: string;
  visible: boolean;
};

export type PortfolioItem = {
  id: string;
  title: string;
  industry: string;
  tech: string[];
  description: string;
  demo_link: string;
  image: string;
  tags: string[];
  visible: boolean;
};

export type FAQ = {
  id: string;
  question: string;
  answer: string;
  visible: boolean;
};

export function getStats(): Stats {
  return readJSON<Stats>("stats.json");
}

export function getWins(): Win[] {
  const wins = readJSON<Win[]>("wins.json");
  return wins.filter((w) => w.visible);
}

export function getCampaign(): Campaign {
  const campaign = readJSON<Campaign>("campaign.json");
  if (campaign.active && campaign.expires_at) {
    const now = new Date();
    const expiry = new Date(campaign.expires_at);
    if (now > expiry) campaign.active = false;
  }
  return campaign;
}

export function getPricing(): Pricing {
  return readJSON<Pricing>("pricing.json");
}

export function getTestimonials(): Testimonial[] {
  const testimonials = readJSON<Testimonial[]>("testimonials.json");
  return testimonials.filter((t) => t.visible);
}

export function getPortfolio(): PortfolioItem[] {
  const items = readJSON<PortfolioItem[]>("portfolio.json");
  return items.filter((p) => p.visible);
}

export function getFAQs(): FAQ[] {
  const faqs = readJSON<FAQ[]>("faqs.json");
  return faqs.filter((f) => f.visible);
}
