import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Why Mosquito and Tick Control Go Together on Long Island | LongIslandTick.com",
  description:
    "Mosquitoes and ticks share overlapping habitats on Long Island properties. Learn why a combined barrier treatment program from Pestify Pest Control is more efficient than treating them separately.",
  alternates: { canonical: "https://longislandtick.com/blog/mosquito-and-tick-control-long-island" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can one treatment control both mosquitoes and ticks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Because mosquitoes and ticks share many of the same harborage zones — shaded vegetation, mulch beds, and property edges — a targeted barrier treatment can reduce populations of both pests in a single application. Pestify offers combined mosquito and tick programs for Long Island homeowners.",
      },
    },
    {
      "@type": "Question",
      name: "Is mosquito and tick season the same on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "They overlap but are not identical. Tick season runs nearly year-round for deer ticks (above 40°F). Mosquito season runs roughly May through September, peaking in July–August. A combined program from late April through October covers both pest seasons effectively.",
      },
    },
    {
      "@type": "Question",
      name: "Why is a combined program more efficient?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Mosquitoes and ticks share many of the same harborage areas in a residential yard — shaded vegetation, mulch beds, wooded edges, and standing water areas. Treating both in a single coordinated program reduces the number of visits, can lower the overall cost compared to separate services, and ensures both pest types are addressed in the same application window.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start a combined mosquito and tick program?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Late April is the ideal start point. This timing covers the early spring deer tick adult activity, provides protection before the May–June tick nymph peak, and gets ahead of mosquito season ramping up in May. A program running through October covers both pest seasons fully.",
      },
    },
  ],
};

const comparison = [
  { label: "Primary habitat", tick: "Wooded edges, leaf litter, ornamental beds, shaded shrubs", mosquito: "Standing water, dense vegetation, shaded areas" },
  { label: "Active season", tick: "Nearly year-round (above 40°F) — peak spring and fall", mosquito: "May–September — peak July–August" },
  { label: "Disease risk", tick: "Lyme disease, anaplasmosis, babesiosis", mosquito: "West Nile virus, Eastern equine encephalitis (rare)" },
  { label: "Overlap zone", tick: "Shaded vegetation, ornamental beds, property edges", mosquito: "Shaded vegetation, ornamental beds, property edges" },
];

export default function Article5() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="min-h-screen bg-gray-50">
        {/* Hero */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-14">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm flex-wrap">
              <Link href="/" className="hover:text-white">Home</Link>
              <ArrowRight className="h-3 w-3" />
              <Link href="/blog" className="hover:text-white">Blog</Link>
              <ArrowRight className="h-3 w-3" />
              <span>Mosquito &amp; Tick Control Together</span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="rounded-full bg-brand-100 px-3 py-1 text-xs font-semibold text-brand-700">Pest Control</span>
              <span className="flex items-center gap-1 text-xs text-brand-300">
                <Calendar className="h-3 w-3" />
                Updated June 2025 · 5 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl leading-tight">
              Why Mosquito and Tick Control Go Together on Long Island
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              Long Island homeowners often address mosquitoes and ticks as separate problems. They don&apos;t have to be — and treating them together is often more efficient and cost-effective.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Two Pests, Many of the Same Habitats</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Mosquitoes and ticks are often thought of as entirely separate pest problems requiring separate treatment programs. In practice, they share significant overlap in the harborage zones where they shelter and breed on a typical Long Island residential property: shaded vegetation, ornamental beds, mulch borders, and dense property edges.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Because these habitats overlap, a coordinated barrier treatment targeting both pests can often reduce mosquito and tick pressure in a single visit — reducing the complexity and cost of managing both pest types separately across a season.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Mosquitoes vs. Ticks: Similarities and Differences</h2>
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Factor</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Ticks</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Mosquitoes</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {comparison.map((row) => (
                          <tr key={row.label} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{row.label}</td>
                            <td className="px-4 py-3 text-gray-600">{row.tick}</td>
                            <td className="px-4 py-3 text-gray-600">{row.mosquito}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Benefits of a Combined Program</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "One program targets both mosquitoes and ticks",
                    "Fewer service visits, lower overall cost",
                    "Barrier treatments cover shared harborage zones in a single pass",
                    "Deer tick, lone star tick, and mosquito coverage together",
                    "Licensed applicators for both pest categories",
                    "Seasonal coordination timed to both pest activity windows",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How the Seasons Line Up</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tick and mosquito seasons on Long Island are not identical, but they overlap substantially from May through October — the core of the pest season for both. A combined program starting in late April provides:
                </p>
                <div className="space-y-3">
                  {[
                    { month: "Late April", what: "Spring tick treatment before nymph emergence; ahead of mosquito season start" },
                    { month: "May–June",   what: "Peak Lyme risk window (tick nymph peak) + rising mosquito pressure" },
                    { month: "July–August",what: "Mosquito peak season; continued tick coverage" },
                    { month: "September–October", what: "Adult deer tick fall peak; decreasing mosquito activity through season end" },
                  ].map((r) => (
                    <div key={r.month} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <div className="w-32 flex-shrink-0">
                        <p className="text-sm font-semibold text-brand-700">{r.month}</p>
                      </div>
                      <p className="text-sm text-gray-600">{r.what}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What&apos;s Different Between the Two Treatments</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  While the harborage zones overlap, there are meaningful differences in where each pest concentrates. Mosquitoes also require standing water for breeding — a key element of mosquito treatment that doesn&apos;t apply to ticks. Ticks shelter more specifically in leaf litter and dense low vegetation year-round.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pestify&apos;s <Link href="/mosquito-and-tick-control-long-island" className="text-brand-600 hover:underline font-medium">combined mosquito and tick program</Link> addresses both pest types in a single coordinated treatment, applying to the shared and distinct harborage zones of each pest. This is a more thorough approach than separate programs that might treat only one pest type at a time.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Is a Combined Program Right for You?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A combined program makes sense for most Long Island homeowners who use their outdoor space during the pest season. If you&apos;re already considering tick control for your <Link href="/tick-spraying-suffolk-county" className="text-brand-600 hover:underline font-medium">Suffolk County</Link> or <Link href="/tick-spraying-nassau-county" className="text-brand-600 hover:underline font-medium">Nassau County</Link> property, adding mosquito control is an efficient way to extend protection with minimal additional service visits.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  View Pestify&apos;s <Link href="/mosquito-and-tick-control-long-island" className="text-brand-600 hover:underline font-medium">combined program page</Link> for more information, or check the <Link href="/tick-control" className="text-brand-600 hover:underline font-medium">full list of towns served</Link> across Long Island.
                </p>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {faqSchema.mainEntity.map((f) => (
                    <div key={f.name} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="font-semibold text-gray-900 mb-2">{f.name}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{f.acceptedAnswer.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Related Articles & Pages</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Mosquito & Tick Programs",           href: "/mosquito-and-tick-control-long-island" },
                    { label: "Tick Control — Long Island",          href: "/tick-control-long-island" },
                    { label: "Suffolk County Tick Control",         href: "/tick-spraying-suffolk-county" },
                    { label: "Nassau County Tick Control",          href: "/tick-spraying-nassau-county" },
                    { label: "Tick Season Guide",                   href: "/tick-season-long-island" },
                    { label: "Get a Free Estimate",                 href: "/free-estimate" },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                      {l.label} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </section>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <LeadForm sourcePage="/blog/mosquito-and-tick-control-long-island" heading="Get a Free Estimate" subheading="Mosquito & Tick · Pestify Pest Control" compact />
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
                <p className="text-xs text-brand-700">Pestify Pest Control is fully licensed and insured for pest control in New York State, including mosquito and tick programs.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-700 mb-3">More Articles</p>
                <ul className="space-y-2">
                  {[
                    { label: "When Do Ticks Come Out?",           href: "/blog/when-do-ticks-come-out-on-long-island" },
                    { label: "Where Do Ticks Hide?",              href: "/blog/where-do-ticks-hide-in-long-island-yards" },
                    { label: "How to Reduce Ticks in Your Yard",  href: "/blog/how-to-reduce-ticks-in-your-yard" },
                    { label: "Tick Control for Dog Owners",       href: "/blog/tick-control-for-dog-owners-long-island" },
                  ].map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="text-sm text-brand-600 hover:underline">{l.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-brand-900 py-12">
          <div className="mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-2xl font-extrabold text-white mb-3">Get Combined Mosquito &amp; Tick Protection</h2>
            <p className="text-brand-200 mb-6">Pestify Pest Control&apos;s combined program covers both pests in a single coordinated treatment. Request a free estimate for your Long Island property.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="cta" size="lg">
                <Link href="/free-estimate">Get a Free Estimate →</Link>
              </Button>
              <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
                <Phone className="h-4 w-4" />{BUSINESS_PHONE}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
