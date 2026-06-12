import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Where Do Ticks Hide in Long Island Yards? | LongIslandTick.com",
  description:
    "Ticks don't live in open lawns — they hide in specific yard zones. Learn exactly where ticks concentrate in Long Island residential yards, and which areas Pestify Pest Control targets.",
  alternates: { canonical: "https://longislandtick.com/blog/where-do-ticks-hide-in-long-island-yards" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Where do ticks hide in Long Island yards?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ticks primarily hide in moist, shaded areas: ornamental shrub and mulch beds, leaf litter, the transition zones between lawn and wooded edges, ground cover plantings, stone walls, and along fence lines with vegetation. They are rarely found in open, sunny lawn areas.",
      },
    },
    {
      "@type": "Question",
      name: "Do ticks live in grass?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ticks do not typically shelter in short, maintained lawn grass. Open lawn areas are too dry and exposed. Ticks concentrate in the edges — mulch beds, ornamental shrubs, leaf litter, and the border areas where maintained lawn meets unmanaged vegetation.",
      },
    },
    {
      "@type": "Question",
      name: "Are ticks in mulch beds?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — mulch beds are one of the most common tick harborage zones in Long Island suburban yards. Mulch retains moisture, provides ground cover, and is often shaded, creating conditions that ticks prefer. Treatment of mulch beds and the ornamental plantings within them is a core part of Pestify's barrier program.",
      },
    },
    {
      "@type": "Question",
      name: "Where should I focus tick control on my property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Focus on the areas where ticks actually shelter: ornamental beds and mulch borders, property perimeter vegetation, wooded or brush edges, leaf litter under trees, ground cover plantings, and shaded areas near fences or structures. A professional barrier treatment from Pestify targets all of these zones.",
      },
    },
  ],
};

const hideZones = [
  {
    zone: "Ornamental Shrub & Mulch Beds",
    detail: "Mulch retains moisture and provides ground-level cover — ideal tick habitat. Foundation plantings and garden beds are among the highest-density tick zones in suburban Long Island yards, regardless of how manicured the surrounding lawn appears.",
    risk: "High",
  },
  {
    zone: "Leaf Litter Under Trees",
    detail: "Leaf litter holds humidity, stays cool, and creates the dark, protected environment ticks need to survive between hosts. Letting fallen leaves accumulate — particularly along property edges and under ornamental trees — creates persistent tick harborage.",
    risk: "High",
  },
  {
    zone: "Lawn-to-Woodland Transition Zones",
    detail: "The edge where maintained lawn meets an unmaintained wooded area, fence line, or overgrown border is where tick density is often highest. Ticks quest from low vegetation in these transition zones, waiting to encounter a passing host.",
    risk: "High",
  },
  {
    zone: "Ground Cover Plantings",
    detail: "Pachysandra, vinca, English ivy, and similar ground covers provide the dense, moist, low-light canopy that ticks favor. These plantings often spread along property edges and borders, creating continuous tick habitat across large areas.",
    risk: "High",
  },
  {
    zone: "Stone Walls & Brush Piles",
    detail: "Stone walls create shelter for small mammals — particularly white-footed mice, which are primary tick hosts. Brush piles and wood stacks provide similar habitat. These structures are not always associated with tick risk but can be significant tick sources.",
    risk: "Moderate–High",
  },
  {
    zone: "Shaded Fence Lines",
    detail: "Vegetation growing along fences — particularly on the north or east sides where shade is consistent — provides shade, moisture, and ground cover for ticks. Fence lines that border neighboring wooded or unmaintained property are especially relevant.",
    risk: "Moderate",
  },
  {
    zone: "Open Lawn",
    detail: "Despite what many homeowners assume, ticks are rarely found in short, well-maintained lawn grass. Open lawn is too dry and exposed. Spraying the open lawn does little to control tick populations — treatment of the true harborage zones is far more effective.",
    risk: "Low",
  },
];

const riskColors: Record<string, string> = {
  "High": "bg-red-100 text-red-700",
  "Moderate–High": "bg-orange-100 text-orange-700",
  "Moderate": "bg-yellow-100 text-yellow-700",
  "Low": "bg-green-100 text-green-700",
};

export default function Article3() {
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
              <span>Where Do Ticks Hide?</span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-semibold text-purple-700">Tick Behavior</span>
              <span className="flex items-center gap-1 text-xs text-brand-300">
                <Calendar className="h-3 w-3" />
                Updated June 2025 · 4 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl leading-tight">
              Where Do Ticks Hide in Long Island Yards?
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              Ticks are not randomly distributed across your yard — they concentrate in specific zones. Knowing where they hide is the first step to controlling them effectively.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Ticks Are Not in Your Lawn — They&apos;re in the Edges</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  One of the most persistent misconceptions about tick control is that ticks live in the lawn and should be treated with blanket lawn sprays. Research on tick distribution consistently shows that ticks are largely absent from open, maintained lawn grass — they shelter in the moist, shaded harborage zones at the edges of your property.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  This is why targeted barrier treatment to specific zones is far more effective than spraying the entire lawn. It&apos;s also why homeowners who spray only open grass areas often continue to find ticks — the harborage zones remain untreated.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Tick Harborage Zones in Long Island Yards</h2>
                <div className="space-y-4">
                  {hideZones.map((z) => (
                    <div key={z.zone} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <h3 className="font-bold text-gray-900">{z.zone}</h3>
                        <span className={`flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${riskColors[z.risk]}`}>
                          {z.risk} density
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 leading-relaxed">{z.detail}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Pestify Targets These Zones</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When Pestify Pest Control treats a property, applicators focus on the harborage zones identified above — not the open lawn. This targeted approach means that applications go exactly where ticks live: the ornamental beds, shrub borders, wooded edges, and transition zones that make up the real tick habitat on a suburban Long Island property.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Pestify serves homeowners across <Link href="/tick-spraying-suffolk-county" className="text-brand-600 hover:underline font-medium">Suffolk County</Link> and <Link href="/tick-spraying-nassau-county" className="text-brand-600 hover:underline font-medium">Nassau County</Link>. View the <Link href="/tick-control" className="text-brand-600 hover:underline font-medium">full list of towns served</Link> or visit the <Link href="/tick-control-long-island" className="text-brand-600 hover:underline font-medium">Long Island tick control page</Link> for more information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How Ticks Encounter Humans and Pets</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ticks don&apos;t jump or fly — they practice &ldquo;questing,&rdquo; where they hold onto low vegetation with their rear legs and extend their front legs to grab onto a passing host. This behavior happens at the edges of the yard: along garden borders, in ornamental plantings, at the edge of a wooded buffer, or along a fence line with ground vegetation.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Children and dogs are often the first to encounter ticks because they move through these edge zones — reaching into garden beds, walking along fence lines, or running through yard edges — where ticks are actively questing. Treating these zones before the May nymph peak reduces risk during the highest-exposure period.
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
                    { label: "How to Reduce Ticks in Your Yard",   href: "/blog/how-to-reduce-ticks-in-your-yard" },
                    { label: "When Do Ticks Come Out?",            href: "/blog/when-do-ticks-come-out-on-long-island" },
                    { label: "Tick Season Guide",                  href: "/tick-season-long-island" },
                    { label: "Tick Control — Long Island",         href: "/tick-control-long-island" },
                    { label: "Get a Free Estimate",                href: "/free-estimate" },
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
                <LeadForm sourcePage="/blog/where-do-ticks-hide-in-long-island-yards" heading="Get a Free Estimate" subheading="Tick Control · Pestify Pest Control" compact />
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
                <p className="text-xs text-brand-700">Pestify Pest Control is fully licensed and insured for pest control in New York State.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-700 mb-3">More Articles</p>
                <ul className="space-y-2">
                  {[
                    { label: "When Do Ticks Come Out?",           href: "/blog/when-do-ticks-come-out-on-long-island" },
                    { label: "How to Reduce Ticks in Your Yard",  href: "/blog/how-to-reduce-ticks-in-your-yard" },
                    { label: "Tick Control for Dog Owners",       href: "/blog/tick-control-for-dog-owners-long-island" },
                    { label: "Mosquito & Tick Control Together",  href: "/blog/mosquito-and-tick-control-long-island" },
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
            <h2 className="text-2xl font-extrabold text-white mb-3">Target the Right Areas with Pestify</h2>
            <p className="text-brand-200 mb-6">Pestify treats the harborage zones where ticks actually live — not just the open lawn. Contact us for a free estimate in your area.</p>
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
