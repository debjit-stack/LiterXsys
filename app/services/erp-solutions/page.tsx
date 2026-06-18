import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { CTAStrip } from "@/components/shared/CTAStrip";
import { Check, BarChart3, Package, Users, FileText, IndianRupee, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: "ERP Solutions Kolkata — LiterXsys Techsol",
  description: "Custom ERP dashboards for small and growing businesses in Kolkata. Inventory, billing, HR, and more — all in one place.",
};

const modules = [
  { icon: Package, title: "Inventory Management", desc: "Track stock levels, get low-stock alerts, and manage suppliers — all in real time." },
  { icon: IndianRupee, title: "Billing & Invoicing", desc: "Generate GST-compliant invoices, track payments, and manage accounts receivable automatically." },
  { icon: Users, title: "HR & Attendance", desc: "Employee profiles, attendance tracking, payroll calculation, and leave management." },
  { icon: FileText, title: "Sales & CRM", desc: "Track leads, manage customer relationships, and monitor your sales pipeline." },
  { icon: BarChart3, title: "Reports & Analytics", desc: "Business-wide dashboards with revenue, expense, and performance reports at a glance." },
  { icon: Settings, title: "Custom Modules", desc: "Need something specific? We build custom modules tailored to your exact business process." },
];

const includes = [
  "Custom web-based ERP dashboard",
  "Role-based access control (admin, staff, manager)",
  "Mobile-responsive design",
  "Data import from Excel/CSV",
  "Daily data backup",
  "Training for your team",
  "3 months of support & bug fixes",
];

export default function ERPSolutionsPage() {
  return (
    <>
      <PageHero
        badge="ERP Solutions"
        title="Run Your Business"
        highlight="From One Dashboard"
        description="Custom ERP systems built for small and growing businesses — inventory, billing, HR, and sales tracking in one place. No more spreadsheets."
      />

      <section className="section-light py-20 px-4 sm:px-6">
        <div className="max-w-content mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-electric-blue text-xs font-bold tracking-widest uppercase mb-3">ERP Modules</span>
            <h2 className="font-jakarta font-extrabold text-3xl sm:text-4xl text-charcoal">Everything Your Business Needs to Run Smoothly</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
            {modules.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.title} className="bg-white border border-soft-gray rounded-2xl p-6">
                  <div className="w-11 h-11 bg-amber-cta/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={20} className="text-amber-cta" />
                  </div>
                  <h3 className="font-jakarta font-bold text-charcoal text-base mb-2">{m.title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-midnight-navy rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block text-amber-cta text-xs font-bold tracking-widest uppercase mb-4">What&apos;s Included</span>
                <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-white mb-6">Custom ERP Build</h2>
                <ul className="space-y-3">
                  {includes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-pale-gray/80 text-sm">
                      <Check size={15} className="text-amber-cta shrink-0 mt-0.5" />{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center">
                <div className="font-jakarta font-extrabold text-white text-4xl mb-2">Custom Quote</div>
                <div className="text-pale-gray/50 text-sm mb-5">ERP pricing depends on modules & complexity</div>
                <p className="text-pale-gray/60 text-sm mb-6">Most small-business ERP projects range from ₹30,000 to ₹1,50,000 depending on scope. We give you a free, detailed estimate before any commitment.</p>
                <a href="/free-audit" className="inline-block bg-amber-cta hover:bg-yellow-400 text-midnight-navy font-bold px-8 py-3.5 rounded-full text-sm transition-colors">
                  Get a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTAStrip heading="Ready to replace your spreadsheets?" subtext="Free consultation — we will map out your exact ERP needs." />
    </>
  );
}
