export type ServiceData = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  heroStats: { value: string; label: string }[];
  benefits: { title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  cta: string;
};

export const servicesData: ServiceData[] = [
  {
    slug: "website-development",
    title: "Website Development",
    tagline: "Beautiful, Fast Websites That Convert Visitors Into Customers",
    description: "We build mobile-first, SEO-ready websites using Next.js — the same technology used by major brands worldwide. Your site loads fast, looks great on all devices, and is built to rank on Google from day one.",
    heroStats: [{ value: "7–14", label: "Days to Launch" }, { value: "100%", label: "Mobile Responsive" }, { value: "90+", label: "Google Speed Score" }],
    benefits: [
      { title: "Lightning Fast", desc: "Built with Next.js for sub-2-second load times. Slow websites lose customers — yours won't." },
      { title: "SEO Built-In", desc: "Every page is structured for Google from the start. Meta tags, schema markup, fast loading — all included." },
      { title: "Mobile First", desc: "Over 70% of your customers visit on mobile. We build for mobile first, then desktop." },
      { title: "Easy to Update", desc: "Need to change a price or add a new offer? We make it simple — no tech knowledge needed." },
      { title: "Secure & Reliable", desc: "SSL certificate, regular backups, and 99.9% uptime on Vercel's global CDN." },
      { title: "WhatsApp & CTA Ready", desc: "Every website includes a WhatsApp button, enquiry forms, and clear calls to action." },
    ],
    process: [
      { step: "01", title: "Discovery Call", desc: "We learn about your business, your customers, and your goals." },
      { step: "02", title: "Design Mockup", desc: "You get a visual design to approve before we write a single line of code." },
      { step: "03", title: "Build & Review", desc: "We build your website and share progress updates throughout." },
      { step: "04", title: "Launch & Handover", desc: "We launch your site, train you on updates, and provide 1–6 months of support." },
    ],
    faqs: [
      { q: "How long does it take?", a: "Most websites are delivered in 7–14 business days from the time we have all content from you." },
      { q: "Do I need to provide content?", a: "We can help with basic content and copy. For best results, providing your own text and photos is ideal — but not required." },
      { q: "What happens after launch?", a: "All packages include post-launch support. We remain available for updates, fixes, and improvements." },
    ],
    cta: "Get Your Website Built",
  },
  {
    slug: "android-app-development",
    title: "Android App Development",
    tagline: "Custom Android Apps Built for Real Business Needs",
    description: "From food ordering apps to booking systems and loyalty programs, we build Android apps that your customers will actually use. Native performance, beautiful UI, and built for the Indian market.",
    heroStats: [{ value: "Native", label: "Android App" }, { value: "Play Store", label: "Ready" }, { value: "Custom", label: "UI Design" }],
    benefits: [
      { title: "Native Performance", desc: "Not a web app dressed up — a real Android app with smooth, native performance on all devices." },
      { title: "Offline Capable", desc: "Works even without a stable internet connection — critical for Indian users." },
      { title: "Play Store Ready", desc: "We handle the full Play Store submission process for you." },
      { title: "Push Notifications", desc: "Send offers, reminders, and updates directly to your customers' phones." },
      { title: "Payment Integration", desc: "Razorpay, UPI, and other Indian payment gateways built right in." },
      { title: "Admin Dashboard", desc: "Manage orders, bookings, and users from a web dashboard included with every app." },
    ],
    process: [
      { step: "01", title: "Requirements Mapping", desc: "We document every screen, flow, and feature your app needs." },
      { step: "02", title: "UI/UX Design", desc: "High-fidelity mockups for every screen before development begins." },
      { step: "03", title: "Development & Testing", desc: "Built, tested on real devices, and refined until it is rock solid." },
      { step: "04", title: "Play Store Launch", desc: "We submit to the Play Store and provide post-launch support." },
    ],
    faqs: [
      { q: "Do you build iOS apps too?", a: "Currently we specialize in Android. iOS development is on our roadmap — contact us to discuss." },
      { q: "How long does app development take?", a: "Typically 4–8 weeks depending on complexity. A clear timeline is agreed before we start." },
      { q: "Who owns the app code?", a: "You do. Full source code is handed over to you on project completion." },
    ],
    cta: "Build My Android App",
  },
  {
    slug: "seo-optimization",
    title: "SEO Optimization",
    tagline: "Rank Higher on Google. Get More Local Customers — Organically.",
    description: "Local SEO that gets your business found by customers searching in Kolkata right now. We handle technical SEO, content strategy, and Google Business optimization so you rank where it matters.",
    heroStats: [{ value: "Page 1", label: "Google Target" }, { value: "Local", label: "SEO Focus" }, { value: "Monthly", label: "Reports" }],
    benefits: [
      { title: "Local SEO", desc: "Rank for 'near me' and Kolkata-specific searches — the customers most likely to visit you." },
      { title: "Google Business Profile", desc: "Fully optimized GMB listing with photos, posts, and review management." },
      { title: "Technical SEO", desc: "Site speed, Core Web Vitals, structured data, and crawl optimization handled completely." },
      { title: "Content Strategy", desc: "Blog posts and landing pages targeting keywords your ideal customers are searching." },
      { title: "Backlink Building", desc: "Ethical link building that improves your domain authority and search rankings." },
      { title: "Monthly Reporting", desc: "Clear monthly reports showing keyword rankings, traffic, and leads generated." },
    ],
    process: [
      { step: "01", title: "SEO Audit", desc: "Full technical and content audit of your current website and online presence." },
      { step: "02", title: "Keyword Research", desc: "We identify the exact searches your target customers are making in Kolkata." },
      { step: "03", title: "Optimization", desc: "On-page fixes, content creation, and technical improvements deployed." },
      { step: "04", title: "Track & Grow", desc: "Monthly reports with rankings, traffic, and next-month action plan." },
    ],
    faqs: [
      { q: "How long before I see SEO results?", a: "SEO typically shows meaningful results in 3–6 months. Local SEO can show improvements in as little as 4–8 weeks." },
      { q: "Do you guarantee rankings?", a: "No ethical SEO agency can guarantee specific rankings — Google decides. We guarantee our process, effort, and transparency." },
      { q: "Is SEO a one-time thing?", a: "No — SEO is an ongoing process. We offer monthly retainer packages to keep your rankings growing." },
    ],
    cta: "Start Ranking on Google",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    tagline: "Google Ads & Meta Ads That Bring Real Customers, Not Just Clicks",
    description: "We run data-driven ad campaigns that target your ideal customers in Kolkata and beyond. Every rupee of ad spend is tracked and optimized for maximum return on investment.",
    heroStats: [{ value: "Google", label: "& Meta Ads" }, { value: "ROI", label: "Focused" }, { value: "Weekly", label: "Reporting" }],
    benefits: [
      { title: "Google Search Ads", desc: "Show up when someone searches for your service right now — the highest-intent traffic available." },
      { title: "Meta (Facebook & Instagram) Ads", desc: "Reach your ideal customer by age, interest, location, and behaviour on social media." },
      { title: "Retargeting Campaigns", desc: "Re-engage visitors who didn't convert the first time — a proven way to increase sales." },
      { title: "Landing Page Optimization", desc: "Ads only work if the landing page converts. We optimize both together." },
      { title: "Email Marketing", desc: "Nurture leads and retain customers with targeted email campaigns and automation." },
      { title: "Weekly Reports", desc: "Transparent weekly performance reports with spend, leads, cost-per-lead, and next steps." },
    ],
    process: [
      { step: "01", title: "Goal & Budget Setting", desc: "We align on your goals, budget, and target audience before spending a rupee." },
      { step: "02", title: "Campaign Setup", desc: "Ad accounts, pixel tracking, audiences, and creatives all set up correctly from the start." },
      { step: "03", title: "Launch & Optimize", desc: "Campaigns go live. We monitor daily and optimize continuously for better results." },
      { step: "04", title: "Report & Scale", desc: "Weekly reports. Scale what works, cut what doesn't." },
    ],
    faqs: [
      { q: "What is the minimum ad budget?", a: "We recommend a minimum of ₹5,000–₹10,000/month in ad spend for meaningful results, plus our management fee." },
      { q: "How soon will I see results?", a: "Paid ads can generate leads from day one. Results improve significantly in the first 2–4 weeks as we optimize." },
      { q: "Do you manage the ad accounts or hand them over?", a: "We manage everything. You always have full access to your accounts and can take over any time." },
    ],
    cta: "Start My Ad Campaign",
  },
  {
    slug: "ai-chatbot-development",
    title: "AI Chatbot Development",
    tagline: "Your Business, Open 24/7 — Without Hiring Extra Staff",
    description: "AI chatbots trained on your business information that answer questions, capture leads, and book appointments automatically — even at 3 AM on a Sunday.",
    heroStats: [{ value: "24/7", label: "Available" }, { value: "Custom", label: "Trained on Your Data" }, { value: "Auto", label: "Lead Capture" }],
    benefits: [
      { title: "Custom Trained", desc: "Your chatbot knows your services, prices, FAQs, and policies — not generic AI responses." },
      { title: "Lead Capture", desc: "Captures visitor name, phone, and email automatically and sends them to you instantly." },
      { title: "Appointment Booking", desc: "Integrates with your calendar so customers can book slots directly in the chat." },
      { title: "WhatsApp Integration", desc: "Deploy your AI chatbot on WhatsApp — where your customers already are." },
      { title: "Multilingual Support", desc: "Can respond in English, Bengali, and Hindi — covering your entire customer base." },
      { title: "Analytics Dashboard", desc: "See every conversation, conversion rate, and common questions — all in one dashboard." },
    ],
    process: [
      { step: "01", title: "Knowledge Base Setup", desc: "We gather all your business info: services, FAQs, pricing, and policies." },
      { step: "02", title: "Bot Training", desc: "Your chatbot is trained and tested thoroughly before deployment." },
      { step: "03", title: "Website & WhatsApp Integration", desc: "Deployed on your website and WhatsApp Business account." },
      { step: "04", title: "Monitor & Improve", desc: "We review conversations monthly and retrain for better answers." },
    ],
    faqs: [
      { q: "Can the chatbot take payments?", a: "Yes — we can integrate Razorpay and UPI payment links into chatbot conversations." },
      { q: "What if the bot doesn't know the answer?", a: "It will escalate to a human (you) via WhatsApp or email — no customer left unanswered." },
      { q: "Is there a monthly fee?", a: "The AI platform has a running cost which we pass on transparently. We discuss this during consultation." },
    ],
    cta: "Build My AI Chatbot",
  },
  {
    slug: "whatsapp-automation",
    title: "WhatsApp Automation",
    tagline: "Automate Your Customer Communication on WhatsApp — Save Hours Every Week",
    description: "Send order confirmations, appointment reminders, promotional offers, and follow-ups automatically via WhatsApp. Your customers get instant responses, you save hours of manual work.",
    heroStats: [{ value: "Auto", label: "Responses" }, { value: "Bulk", label: "Messaging" }, { value: "Flows", label: "Custom Built" }],
    benefits: [
      { title: "Order Confirmations", desc: "Automatically send order updates and confirmation messages the moment an order is placed." },
      { title: "Appointment Reminders", desc: "Reduce no-shows by sending automatic reminders 24 hours and 1 hour before appointments." },
      { title: "Promotional Broadcasts", desc: "Send offers, festival greetings, and new product announcements to your entire customer list." },
      { title: "Auto-Reply Flows", desc: "Answer common questions instantly — opening hours, menu, pricing — without manual typing." },
      { title: "Lead Follow-Up", desc: "Automatically follow up with website enquiries via WhatsApp within minutes of them submitting." },
      { title: "CRM Integration", desc: "Connect WhatsApp automation to your lead management system for full visibility." },
    ],
    process: [
      { step: "01", title: "Flow Mapping", desc: "We map out every automated message flow your business needs." },
      { step: "02", title: "WhatsApp Business API Setup", desc: "Official API setup with your business number — fully compliant." },
      { step: "03", title: "Build & Test", desc: "All automation flows built, tested with real scenarios, then deployed." },
      { step: "04", title: "Train & Support", desc: "We train you on managing the system and support you post-launch." },
    ],
    faqs: [
      { q: "Do I need WhatsApp Business API?", a: "Yes — automation requires the official API. We handle the full setup process for you." },
      { q: "Can I send bulk messages legally?", a: "Yes, via the official WhatsApp Business API with opt-in customer lists — fully compliant with WhatsApp policies." },
      { q: "Is there a message sending cost?", a: "WhatsApp charges per conversation. We explain the pricing model clearly before setup." },
    ],
    cta: "Automate My WhatsApp",
  },
  {
    slug: "website-maintenance",
    title: "Website Maintenance",
    tagline: "Your Website, Always Fast, Secure, and Up to Date",
    description: "A website is not a one-time project — it needs regular care to stay fast, secure, and effective. Our maintenance plans keep your site running at its best so you can focus on your business.",
    heroStats: [{ value: "99.9%", label: "Uptime" }, { value: "Monthly", label: "Reports" }, { value: "Fast", label: "Support Response" }],
    benefits: [
      { title: "Security Updates", desc: "Regular updates to plugins, dependencies, and server configuration to keep hackers out." },
      { title: "Performance Monitoring", desc: "We monitor your site speed and Core Web Vitals and fix any drops immediately." },
      { title: "Content Updates", desc: "Need to update prices, add a new menu item, or change your hours? We handle it fast." },
      { title: "Daily Backups", desc: "Your entire website backed up daily so we can restore it in minutes if anything goes wrong." },
      { title: "Uptime Monitoring", desc: "24/7 monitoring with instant alerts and action if your site goes down." },
      { title: "Monthly Report", desc: "Clear monthly report with uptime %, page speed scores, and work done." },
    ],
    process: [
      { step: "01", title: "Site Audit", desc: "We audit your current site for speed, security, and technical issues." },
      { step: "02", title: "Onboarding", desc: "Access setup, monitoring tools configured, and baseline established." },
      { step: "03", title: "Ongoing Maintenance", desc: "Monthly maintenance tasks, updates, and content changes handled proactively." },
      { step: "04", title: "Monthly Report", desc: "Clear summary of all work done and site health metrics." },
    ],
    faqs: [
      { q: "What is your response time for urgent issues?", a: "Critical issues (site down, hacked) get a response within 2 hours, 7 days a week." },
      { q: "Can I cancel anytime?", a: "Yes — our maintenance plans are month-to-month with no lock-in contracts." },
      { q: "Do you maintain websites you didn't build?", a: "Yes — we can take over maintenance of any existing website after an initial audit." },
    ],
    cta: "Protect My Website",
  },
  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    tagline: "Custom Business Management Systems Built for Small & Growing Businesses",
    description: "Stop juggling spreadsheets. We build custom ERP dashboards for inventory management, billing, HR, and reporting — tailored exactly to how your business actually works.",
    heroStats: [{ value: "Custom", label: "Built for You" }, { value: "Web", label: "Based Dashboard" }, { value: "All-in-One", label: "Business Management" }],
    benefits: [
      { title: "Inventory Management", desc: "Track stock levels, set reorder alerts, and manage suppliers — all in one place." },
      { title: "Billing & Invoicing", desc: "Generate GST-compliant invoices, track payments, and manage outstanding dues." },
      { title: "HR & Attendance", desc: "Employee records, attendance tracking, leave management, and payroll calculation." },
      { title: "Sales Dashboard", desc: "Real-time sales reports, revenue analytics, and performance dashboards." },
      { title: "Multi-User Access", desc: "Role-based access so each team member sees only what they need to." },
      { title: "Mobile Accessible", desc: "Access your business data from any device, anywhere — no installation required." },
    ],
    process: [
      { step: "01", title: "Business Analysis", desc: "We map your current workflow and identify exactly what the ERP needs to do." },
      { step: "02", title: "System Design", desc: "Database design, user roles, and screen mockups agreed before development." },
      { step: "03", title: "Build & Test", desc: "Built module by module with your team testing at every stage." },
      { step: "04", title: "Training & Launch", desc: "Full team training and smooth handover with documentation." },
    ],
    faqs: [
      { q: "Can you integrate with Tally or other existing software?", a: "Yes — we can build integrations with Tally, Zoho, and other common business tools." },
      { q: "Is the ERP hosted on our server or yours?", a: "Either option works. We can deploy on your preferred hosting or provide managed hosting." },
      { q: "How long does ERP development take?", a: "Typically 6–12 weeks depending on complexity. A phased approach lets you use core features while rest is built." },
    ],
    cta: "Build My ERP System",
  },
];

export function getServiceData(slug: string): ServiceData | null {
  return servicesData.find((s) => s.slug === slug) ?? null;
}
