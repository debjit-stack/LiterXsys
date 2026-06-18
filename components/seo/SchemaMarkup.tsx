export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "LiterXsys Techsol",
    "url": "https://literxsys.com",
    "logo": "https://literxsys.com/images/logo.png",
    "description": "Website development, SEO, AI chatbots, WhatsApp automation and Android apps for Kolkata businesses.",
    "telephone": "+91XXXXXXXXXX",
    "email": "hello@literxsys.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "22.5726",
      "longitude": "88.3639"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "sameAs": [],
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, UPI, Bank Transfer",
    "areaServed": {
      "@type": "City",
      "name": "Kolkata"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Digital Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Website Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SEO Optimization" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "AI Chatbot Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "WhatsApp Automation" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Android App Development" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Digital Marketing" } }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": `https://literxsys.com${item.url}`,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({ title, description, date, author, url }: {
  title: string; description: string; date: string; author: string; url: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "datePublished": date,
    "author": { "@type": "Organization", "name": author },
    "publisher": {
      "@type": "Organization",
      "name": "LiterXsys Techsol",
      "logo": { "@type": "ImageObject", "url": "https://literxsys.com/images/logo.png" }
    },
    "url": `https://literxsys.com${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
