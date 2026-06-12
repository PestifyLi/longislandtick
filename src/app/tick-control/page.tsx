import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BUSINESS_PHONE } from "@/lib/constants";
import { SUFFOLK_TOWNS_DATA, NASSAU_TOWNS_DATA } from "@/lib/towns";

export const metadata: Metadata = {
  title: "Tick Control by Town on Long Island | Pestify Pest Control | LongIslandTick.com",
  description:
    "Find tick control services by town across Long Island. Pestify Pest Control serves communities in Suffolk and Nassau County — from the North Shore to the East End and South Shore.",
  alternates: { canonical: "https://longislandtick.com/tick-control" },
};

const REGION_LABELS: Record<string, string> = {
  "north-shore": "North Shore",
  "south-shore": "South Shore",
  "east-end": "East End / Hamptons",
  "north-fork": "North Fork",
  "nassau-suburban": "Nassau County",
  "nassau-north": "Nassau North Shore",
  "nassau-south": "Nassau South Shore",
};

export default function TownIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Tick Control by Town</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl">
            Tick Control by Town on Long Island
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl text-lg">
            Pestify Pest Control serves communities across Suffolk and Nassau County. Find your town below for local tick control information and pricing.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="flex items-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />
              {BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 space-y-14">

        {/* Suffolk County */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100">
              <MapPin className="h-5 w-5 text-brand-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Suffolk County</h2>
              <Link href="/tick-spraying-suffolk-county" className="text-sm text-brand-600 hover:underline">
                View Suffolk County Tick Control →
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {SUFFOLK_TOWNS_DATA.map((town) => (
              <Link
                key={town.slug}
                href={`/tick-control/${town.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                      Tick Control in {town.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{REGION_LABELS[town.region]}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{town.intro.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Nassau County */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100">
              <MapPin className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Nassau County</h2>
              <Link href="/tick-spraying-nassau-county" className="text-sm text-brand-600 hover:underline">
                View Nassau County Tick Control →
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {NASSAU_TOWNS_DATA.map((town) => (
              <Link
                key={town.slug}
                href={`/tick-control/${town.slug}`}
                className="group rounded-xl border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-300 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-brand-700 transition-colors">
                      Tick Control in {town.name}
                    </p>
                    <p className="text-xs text-gray-500 mt-0.5">{REGION_LABELS[town.region]}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-brand-600 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="mt-2 text-sm text-gray-600 line-clamp-2">{town.intro.slice(0, 120)}…</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Trust / about */}
        <section className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Serving Long Island Communities</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Pestify Pest Control is a locally owned tick and pest control company based in Port Jefferson Station. We serve homeowners across Suffolk and Nassau County with targeted tick barrier treatments — not a national franchise, a Long Island company.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Don&apos;t see your town listed? We serve all of Long Island. Contact us for service in any Suffolk or Nassau County community not listed above.
              </p>
            </div>
            <div className="space-y-3">
              {[
                { icon: Shield, label: "Licensed & Insured", sub: "NYS pest control certified applicators", green: false },
                { icon: MapPin, label: "Locally Owned", sub: "Port Jefferson Station, NY", green: true },
                { icon: Shield, label: "Suffolk & Nassau Coverage", sub: "All of Long Island served", green: false },
              ].map((b) => (
                <div key={b.label} className="flex items-center gap-3 rounded-lg border border-gray-200 p-3">
                  <div className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full ${b.green ? "bg-green-50" : "bg-brand-50"}`}>
                    <b.icon className={`h-4 w-4 ${b.green ? "text-green-600" : "text-brand-600"}`} />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{b.label}</p>
                    <p className="text-xs text-gray-500">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Pages</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Long Island Tick Control",       href: "/tick-control-long-island" },
              { label: "Mosquito & Tick Programs",        href: "/mosquito-and-tick-control-long-island" },
              { label: "Suffolk County Tick Control",     href: "/tick-spraying-suffolk-county" },
              { label: "Nassau County Tick Control",      href: "/tick-spraying-nassau-county" },
              { label: "Lyme Disease on Long Island",     href: "/lyme-disease-long-island" },
              { label: "Tick Season Guide",               href: "/tick-season-long-island" },
              { label: "Get a Free Estimate",             href: "/free-estimate" },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
              >
                {l.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
