"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { label: "Website Development",     href: "/services/website-development" },
  { label: "Android App Development", href: "/services/android-app-development" },
  { label: "SEO Optimization",        href: "/services/seo-optimization" },
  { label: "Digital Marketing",       href: "/services/digital-marketing" },
  { label: "AI Chatbot Development",  href: "/services/ai-chatbot-development" },
  { label: "WhatsApp Automation",     href: "/services/whatsapp-automation" },
  { label: "Website Maintenance",     href: "/services/website-maintenance" },
  { label: "ERP Solutions",           href: "/services/erp-solutions" },
  { label: "Logistics Solutions",     href: "/services/logistics-solutions" },
  { label: "Software Development",    href: "/services/software-development" },
];

const navLinks = [
  { label: "Home",      href: "/" },
  { label: "About",     href: "/about" },
  { label: "Services",  href: "/services", dropdown: services },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing",   href: "/pricing" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

export function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-midnight-navy/95 backdrop-blur-md shadow-lg shadow-black/20" : "bg-midnight-navy"
      }`}
    >
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <Image src="/images/logo.png" alt="LiterXsys" width={140} height={40} className="h-9 w-auto" priority />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative group">
                  <button className="flex items-center gap-1 text-pale-gray hover:text-white text-sm font-medium transition-colors py-2">
                    {link.label}
                    <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
                  </button>
                  {/* Two-column dropdown for 10 services */}
                  <div className="absolute top-full left-0 mt-1 w-[480px] bg-deep-slate border border-white/10 rounded-xl shadow-xl shadow-black/40 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-3 px-2">
                    <div className="grid grid-cols-2 gap-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-3 py-2 text-sm text-pale-gray hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 px-3">
                      <Link href="/services" className="text-electric-blue text-xs font-semibold hover:underline">
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-pale-gray hover:text-white text-sm font-medium transition-colors"
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/free-audit" className="bg-electric-blue hover:bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              Free Audit
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="lg:hidden text-white p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-deep-slate border-t border-white/10 px-4 py-4">
          {navLinks.map((link) => (
            <div key={link.label}>
              {link.dropdown ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center justify-between w-full py-2 text-pale-gray text-sm font-medium"
                  >
                    {link.label}
                    <ChevronDown size={14} className={servicesOpen ? "rotate-180" : ""} />
                  </button>
                  {servicesOpen && (
                    <div className="pl-4 pb-2 space-y-1">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block py-1.5 text-pale-gray/80 text-sm hover:text-white"
                          onClick={() => setMobileOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={link.href}
                  className="block py-2 text-pale-gray text-sm font-medium hover:text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <Link
            href="/free-audit"
            className="mt-3 block w-full text-center bg-electric-blue text-white text-sm font-semibold px-4 py-2.5 rounded-full"
            onClick={() => setMobileOpen(false)}
          >
            Get Free Audit
          </Link>
        </div>
      )}
    </header>
  );
}
