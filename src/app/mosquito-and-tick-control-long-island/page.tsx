import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight, Shield, Bug } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Mosquito & Tick Control on Long Island | Pestify Pest Control | LongIslandTick.com",
  description:
    "Combined mosquito and tick control for Long Island homeowners. Pestify Pest Control targets both pests in a single barrier treatment program — protecting your yard from spring through fall.",
  alternates: { canonical: "https://longislandtick.com/mosquito-and-tick-control-long-island" },
};

const benefits = [
  "One program targets both mosquitoes and ticks",
  "Fewer service visits, lower overall cost",
  "Barrier treatments cover mulch beds, shrubs, wooded edges, and standing water areas",
  "Deer tick, lone star tick, and mosquito coverage in a single treatment",
  "Pestify applicators are licensed for both pest categories in New York State",
  "Safe for kids and pets after proper dry time",
];

const differences = [
  {
    pest: "Ticks",
    habitat: "Wooded edges, leaf litter, ornamental beds, shaded shrubs",
    season: "Nearly year-round above 40°F — peak spring and fall",
    risk: "Lyme disease, anaplasmosis, babesiosis",
    icon: Bug,
    color: "text-red-600 bg-red-50 border-red-100",
  },
  {
    pest: "Mosquitoes",
    habitat: "Standing water, dense vegetation, shaded areas",
    season: "May through September — peak summer",
    risk: "West Nile virus, Eastern equine encephalitis (rare)",
    icon: Bug,
    color: "text-brand-700 bg-brand-50 border-brand-100",
  },
];

export default function MosquitoAndTickPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Mosquito &amp; Tick Control</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl">
            Mosquito &amp; Tick Control on Long Island
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl text-lg">
            Pestify Pest Control offers combined mosquito and tick treatment programs for Long Island homeowners — protecting your property from both pests in a single coordinated barrier program.
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

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Combine Mosquito and Tick Control?</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                On Long Island, mosquitoes and ticks share many of the same harborage zones — shaded vegetation, mulch beds, and property edges. A coordinated barrier program that targets both pests is often more effective and cost-efficient than treating them separately.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Pestify Pest Control applies targeted treatments to the areas where both mosquitoes and ticks spend most of their time: the perimeter vegetation, ornamental beds, wooded edges, and shaded zones of your property. A single visit can reduce pressure from both pests simultaneously.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Comparing the Two Threats</h2>
              <div className="grid gap-5 sm:grid-cols-2">
                {differences.map((d) => (
                  <div key={d.pest} className={`rounded-xl border p-5 ${d.color}`}>
                    <h3 className="font-bold text-lg mb-3">{d.pest}</h3>
                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-semibold">Habitat: </span>
                        <span className="text-gray-700">{d.habitat}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Season: </span>
                        <span className="text-gray-700">{d.season}</span>
                      </div>
                      <div>
                        <span className="font-semibold">Disease Risk: </span>
                        <span className="text-gray-700">{d.risk}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Benefits of a Combined Program</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Schedule</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                A combined mosquito and tick program is most effective when started in early spring — before ticks begin their nymph peak (May–June) and before mosquito season ramps up. Pestify recommends a treatment schedule that runs from late April through October, with applications timed to each pest&apos;s active window.
              </p>
              <div className="rounded-xl border border-gray-200 bg-white p-5 overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-100">
                      <th className="pb-2 text-left font-semibold text-gray-700">Month</th>
                      <th className="pb-2 text-center font-semibold text-gray-700">Tick Activity</th>
                      <th className="pb-2 text-center font-semibold text-gray-700">Mosquito Activity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {[
                      ["April", "Moderate", "Low"],
                      ["May–June", "High (nymph peak)", "Moderate"],
                      ["July–August", "Moderate", "High"],
                      ["September–October", "High (adult peak)", "Low–Moderate"],
                      ["November+", "Low", "None"],
                    ].map(([m, t, mq]) => (
                      <tr key={m} className="hover:bg-gray-50">
                        <td className="py-2 font-medium text-gray-800">{m}</td>
                        <td className="py-2 text-center text-gray-600">{t}</td>
                        <td className="py-2 text-center text-gray-600">{mq}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Pages</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Tick Control — Long Island",  href: "/tick-control-long-island" },
                  { label: "Suffolk County Tick Control",  href: "/tick-spraying-suffolk-county" },
                  { label: "Nassau County Tick Control",   href: "/tick-spraying-nassau-county" },
                  { label: "Tick Season Guide",            href: "/tick-season-long-island" },
                  { label: "Lyme Disease on Long Island",  href: "/lyme-disease-long-island" },
                  { label: "Tick Control Blog",            href: "/blog" },
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

          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <LeadForm
                sourcePage="/mosquito-and-tick-control-long-island"
                heading="Get a Free Estimate"
                subheading="Mosquito & Tick Program · Pestify Pest Control"
                compact
              />
            </div>
            <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm text-center">
              <p className="text-sm text-gray-500 mb-3">Prefer to call?</p>
              <a
                href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
                className="flex items-center justify-center gap-2 text-lg font-bold text-brand-600 hover:text-brand-700"
              >
                <Phone className="h-5 w-5" />{BUSINESS_PHONE}
              </a>
              <p className="text-xs text-gray-400 mt-2">Mon–Fri 8am–6pm · Sat 9am–3pm</p>
            </div>
            <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-brand-600" />
                <p className="font-semibold text-brand-900 text-sm">Licensed &amp; Insured</p>
              </div>
              <p className="text-xs text-brand-700">
                Pestify Pest Control is fully licensed and insured for pest control services in New York State, covering mosquito and tick programs for Long Island homeowners.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Seasonal Tick &amp; Mosquito Control Built for Long Island</h2>
          <p className="text-brand-200 mb-6">
            Pestify Pest Control offers combined mosquito and tick programs for Long Island homeowners — one coordinated treatment, full-season protection.
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
