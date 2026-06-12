import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight, Shield, TreePine, Bug, Leaf } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Suffolk County Tick Control | Pestify Pest Control | LongIslandTick.com",
  description:
    "Professional tick control for Suffolk County homeowners. North Shore, South Shore, and East End coverage. Targeted treatment for deer ticks and lone star ticks. Free estimate from Pestify.",
  alternates: { canonical: "https://longislandtick.com/tick-spraying-suffolk-county" },
};

const SUFFOLK_TOWNS = [
  "Smithtown","Huntington","Stony Brook","Port Jefferson","Setauket",
  "Miller Place","Mount Sinai","Northport","Kings Park","St. James",
  "Commack","Hauppauge","Islip","Babylon","Bay Shore","West Islip",
  "Patchogue","Sayville","Riverhead","Southampton","East Hampton",
  "Medford","Ronkonkoma","Lake Grove","Centereach","Selden","Ridge",
];

export default function SuffolkCountyPage() {
  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <Link href="/tick-control-long-island" className="hover:text-white">Tick Control</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Suffolk County</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl">
            Tick Control in Suffolk County, NY
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl text-lg">
            Pestify Pest Control provides targeted tick barrier treatments for Suffolk County homeowners — from the wooded North Shore to South Shore neighborhoods and the East End.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 font-semibold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" />
              {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Suffolk County Has High Tick Pressure</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Suffolk County consistently has some of the highest rates of Lyme disease in New York State. The combination of large deer populations, extensive wooded areas on the North Shore, natural preserves throughout the county, and suburban lots adjacent to wooded corridors creates conditions where tick exposure is common from early spring through late fall.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                The North Shore — including Smithtown, Huntington, Stony Brook, and Port Jefferson — has particularly high deer tick pressure due to wooded bluffs, shaded property edges, and dense deer movement corridors. The South Shore, while less wooded, still carries tick pressure in residential landscaping and grassy areas.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What Pestify Treats in Suffolk County</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {[
                  "North Shore wooded property perimeters",
                  "South Shore residential yards",
                  "East End community properties",
                  "Properties adjacent to deer corridors",
                  "Wooded edges and leaf litter zones",
                  "Shrub and ornamental planting borders",
                  "HOA common areas and trails",
                  "Commercial and estate properties",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <div className="rounded-xl bg-orange-50 border border-orange-200 p-5 flex items-start gap-3">
                <TreePine className="h-5 w-5 text-orange-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-orange-900 mb-1">North Shore Properties</p>
                  <p className="text-sm text-orange-800">Wooded properties on the North Shore — Smithtown, Stony Brook, Port Jefferson, Huntington, Setauket — face elevated deer tick pressure. If your property has wooded edges, leaf litter, or borders a nature preserve, proactive treatment is especially important.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Suffolk County Towns We Serve</h2>
              <div className="flex flex-wrap gap-2">
                {SUFFOLK_TOWNS.map((t) => (
                  <span key={t} className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-sm text-brand-700">{t}</span>
                ))}
                <span className="rounded-full bg-gray-100 border border-gray-200 px-3 py-1 text-sm text-gray-600">+ All of Suffolk County</span>
              </div>
            </section>

            {/* Mosquito combo callout */}
            <section className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="flex items-start gap-3">
                <Bug className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="text-xl font-bold text-brand-900 mb-2">Tick + Mosquito Programs Available</h2>
                  <p className="text-brand-800 text-sm leading-relaxed mb-3">
                    Add mosquito control to your Suffolk County tick program for full-season pest protection. Pestify treats both pests in coordinated visits — fewer service calls, complete coverage.
                  </p>
                  <Link href="/mosquito-and-tick-control-long-island" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors">
                    Learn about combined programs <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Information</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Long Island Tick Control",    href: "/tick-control-long-island" },
                  { label: "Mosquito & Tick Programs",   href: "/mosquito-and-tick-control-long-island" },
                  { label: "Nassau County Service",       href: "/tick-spraying-nassau-county" },
                  { label: "Lyme Disease on Long Island", href: "/lyme-disease-long-island" },
                  { label: "Tick Season Guide",           href: "/tick-season-long-island" },
                  { label: "Tick Control Blog",           href: "/blog" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                    {l.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>
          </div>

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <LeadForm sourcePage="/tick-spraying-suffolk-county" heading="Get a Free Estimate" subheading="Suffolk County · Pestify Pest Control" compact />
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm text-center">
              <p className="text-sm text-gray-500 mb-3">Prefer to call?</p>
              <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="flex items-center justify-center gap-2 text-lg font-bold text-brand-600 hover:text-brand-700">
                <Phone className="h-5 w-5" />{BUSINESS_PHONE}
              </a>
              <p className="text-xs text-gray-400 mt-2">Mon–Fri 8am–6pm · Sat 9am–3pm</p>
            </div>
            <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-brand-600" />
                <p className="font-semibold text-brand-900 text-sm">Licensed &amp; Insured</p>
              </div>
              <p className="text-xs text-brand-700">Pestify is fully licensed and insured for pest control in New York State. Serving all of Suffolk County.</p>
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-green-900 text-sm">Locally Owned</p>
              </div>
              <p className="text-xs text-green-700">Pestify is based in Port Jefferson Station — a Suffolk County company serving Suffolk County homeowners.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Yard, Pets &amp; Family in Suffolk County</h2>
          <p className="text-brand-200 mb-6">
            Pestify Pest Control provides seasonal tick barrier treatments for Suffolk County homeowners — from the North Shore to the South Shore and East End. Get a free estimate today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate from Pestify →</Link>
            </Button>
            <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" />{BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
