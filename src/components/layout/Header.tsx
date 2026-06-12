"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Bug, ChevronDown, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_PHONE } from "@/lib/constants";

const SERVICE_LINKS = [
  { label: "Tick Control — Long Island",          href: "/tick-control-long-island" },
  { label: "Mosquito & Tick Control",             href: "/mosquito-and-tick-control-long-island" },
  { label: "Suffolk County Tick Control",         href: "/tick-spraying-suffolk-county" },
  { label: "Nassau County Tick Control",          href: "/tick-spraying-nassau-county" },
  { label: "All Towns We Serve",                  href: "/tick-control" },
];

const LEARN_LINKS = [
  { label: "Lyme Disease on Long Island",  href: "/lyme-disease-long-island",    desc: "Risk, symptoms & prevention" },
  { label: "Tick Species on Long Island",  href: "/tick-species-long-island",    desc: "Deer tick, lone star & more" },
  { label: "Tick Season Guide",            href: "/tick-season-long-island",     desc: "When ticks are active" },
  { label: "Blog",                         href: "/blog",                        desc: "Guides for Long Island homeowners" },
  { label: "About Pestify",               href: "/about-pestify",               desc: "Who provides these services" },
];

function NavDropdown({ label, children }: { label: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1 text-sm font-medium text-gray-600 transition-colors hover:text-brand-600"
      >
        {label}
        <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-64 rounded-xl border border-gray-200 bg-white shadow-lg z-50 py-2">
          {children}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [mobileLearn, setMobileLearn] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-600">
              <Bug className="h-5 w-5 text-white" />
            </div>
            <div>
              <span className="text-lg font-bold text-gray-900">
                LongIslandTick
                <span className="text-brand-600">.com</span>
              </span>
              <span className="block text-[10px] font-medium text-brand-600 leading-none -mt-0.5">
                by Pestify Pest Control
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-5 lg:flex">
            <NavDropdown label="Services">
              {SERVICE_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </NavDropdown>

            <NavDropdown label="Learn">
              {LEARN_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex flex-col px-4 py-2.5 hover:bg-brand-50 transition-colors"
                >
                  <span className="text-sm font-medium text-gray-800">{link.label}</span>
                  <span className="text-xs text-gray-400">{link.desc}</span>
                </Link>
              ))}
            </NavDropdown>

            <Link href="/about-pestify" className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-600">
              About
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_PHONE}
            </a>
            <Button asChild size="sm" variant="cta">
              <Link href="/free-estimate">Free Estimate</Link>
            </Button>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 lg:hidden overflow-y-auto max-h-[80vh]">
          <nav className="flex flex-col gap-1">
            <button
              onClick={() => setMobileServices(!mobileServices)}
              className="flex items-center justify-between py-2 text-sm font-semibold text-gray-800"
            >
              Services
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileServices ? "rotate-180" : ""}`} />
            </button>
            {mobileServices && (
              <div className="pl-3 space-y-1 mb-2">
                {SERVICE_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-brand-600">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileLearn(!mobileLearn)}
              className="flex items-center justify-between py-2 text-sm font-semibold text-gray-800"
            >
              Learn
              <ChevronDown className={`h-4 w-4 transition-transform ${mobileLearn ? "rotate-180" : ""}`} />
            </button>
            {mobileLearn && (
              <div className="pl-3 space-y-1 mb-2">
                {LEARN_LINKS.map((link) => (
                  <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)} className="block py-1.5 text-sm text-gray-600 hover:text-brand-600">
                    {link.label}
                  </Link>
                ))}
              </div>
            )}

            <Link href="/about-pestify" onClick={() => setMobileOpen(false)} className="py-2 text-sm font-semibold text-gray-800">
              About Pestify
            </Link>
          </nav>

          <div className="mt-4 flex flex-col gap-2 border-t border-gray-100 pt-4">
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-2 font-semibold text-brand-600"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_PHONE}
            </a>
            <Button asChild variant="cta" className="w-full">
              <Link href="/free-estimate" onClick={() => setMobileOpen(false)}>
                Get Free Estimate
              </Link>
            </Button>
          </div>

          {/* Trust badges in mobile menu */}
          <div className="mt-4 pt-4 border-t border-gray-100 grid grid-cols-2 gap-2">
            {[
              { icon: Shield, text: "Licensed & Insured" },
              { icon: Bug, text: "Locally Owned · LI" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-1.5 text-xs text-gray-500">
                <Icon className="h-3.5 w-3.5 text-brand-500" />
                {text}
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
