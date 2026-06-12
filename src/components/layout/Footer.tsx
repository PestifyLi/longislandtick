import Link from "next/link";
import { Bug, Phone, Mail, MapPin } from "lucide-react";
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  BUSINESS_EMAIL,
  BUSINESS_LOCATION,
} from "@/lib/constants";
import { SUFFOLK_TOWNS_DATA, NASSAU_TOWNS_DATA } from "@/lib/towns";

const serviceLinks = [
  { label: "Tick Control — Long Island",          href: "/tick-control-long-island" },
  { label: "Mosquito & Tick Control",             href: "/mosquito-and-tick-control-long-island" },
  { label: "Suffolk County Tick Control",          href: "/tick-spraying-suffolk-county" },
  { label: "Nassau County Tick Control",           href: "/tick-spraying-nassau-county" },
  { label: "Get a Free Estimate",                  href: "/free-estimate" },
];

const learnLinks = [
  { label: "Lyme Disease on Long Island",          href: "/lyme-disease-long-island" },
  { label: "Tick Species on Long Island",          href: "/tick-species-long-island" },
  { label: "Tick Season Guide",                    href: "/tick-season-long-island" },
  { label: "Blog — Tick Control Guides",           href: "/blog" },
  { label: "About Pestify Pest Control",           href: "/about-pestify" },
];

const featuredSuffolk = SUFFOLK_TOWNS_DATA.slice(0, 10);
const featuredNassau  = NASSAU_TOWNS_DATA.slice(0, 6);

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500">
                <Bug className="h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold text-white">
                LongIslandTick<span className="text-brand-400">.com</span>
              </span>
            </Link>
            <p className="mt-3 text-sm text-gray-400 leading-relaxed">
              Tick control and Lyme disease information for Long Island homeowners.
              Pest control services provided by <strong className="text-gray-300">{BUSINESS_NAME}</strong> — locally owned, licensed &amp; insured, serving Suffolk &amp; Nassau County.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-white">
                <Phone className="h-4 w-4 text-brand-400" />
                {BUSINESS_PHONE}
              </a>
              <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-2 hover:text-white">
                <Mail className="h-4 w-4 text-brand-400" />
                {BUSINESS_EMAIL}
              </a>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-brand-400" />
                {BUSINESS_LOCATION}
              </div>
            </div>
          </div>

          {/* Services & Learn */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Services</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-6 mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Learn</h3>
            <ul className="space-y-2">
              {learnLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-white hover:underline">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Suffolk towns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Suffolk County Towns</h3>
            <ul className="columns-2 gap-4 space-y-2">
              {featuredSuffolk.map((town) => (
                <li key={town.slug}>
                  <Link href={`/tick-control/${town.slug}`} className="text-sm hover:text-white hover:underline">{town.name}</Link>
                </li>
              ))}
            </ul>
            <Link href="/tick-control" className="mt-3 inline-block text-xs text-brand-400 hover:text-brand-300 hover:underline">
              All towns →
            </Link>
          </div>

          {/* Nassau towns */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-400">Nassau County Towns</h3>
            <ul className="space-y-2">
              {featuredNassau.map((town) => (
                <li key={town.slug}>
                  <Link href={`/tick-control/${town.slug}`} className="text-sm hover:text-white hover:underline">{town.name}</Link>
                </li>
              ))}
            </ul>
            <Link href="/tick-control" className="mt-3 inline-block text-xs text-brand-400 hover:text-brand-300 hover:underline">
              All towns →
            </Link>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 space-y-4 text-xs text-gray-500">
          <p className="leading-relaxed max-w-3xl">
            <strong className="text-gray-400">Disclaimer:</strong> Tick activity and risk information on this site is educational and based on general Long Island seasonal patterns and available public health data. It is not a substitute for professional medical advice. If you have been bitten by a tick or are concerned about tick-borne illness, consult a healthcare provider. Risk descriptions are estimates only — actual conditions vary by location, microclimate, and season.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p>
              © {new Date().getFullYear()} LongIslandTick.com — an information resource by{" "}
              <a href="https://pestifyli.com" target="_blank" rel="noopener noreferrer" className="text-brand-400 hover:text-brand-300 underline">
                {BUSINESS_NAME}
              </a>
              {" "}· Port Jefferson Station, NY
            </p>
            <div className="flex gap-4">
              <Link href="/privacy" className="hover:text-gray-300">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-gray-300">Terms</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
