import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "When Do Ticks Come Out on Long Island? | LongIslandTick.com",
  description:
    "Ticks are active on Long Island nearly year-round. Learn when deer ticks, lone star ticks, and dog ticks peak in activity — and when treatment matters most. From Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/blog/when-do-ticks-come-out-on-long-island" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When do ticks come out on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Deer ticks (blacklegged ticks) are active on Long Island nearly year-round — any time temperatures exceed 40°F. That can include warm days in January and February. Lone star and American dog ticks are seasonal, typically active from April through August.",
      },
    },
    {
      "@type": "Question",
      name: "What month is tick season on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no single 'tick month' on Long Island. The two highest-risk windows are May–June (deer tick nymph peak) and September–October (adult deer tick fall peak). Treating only in summer misses both of these critical windows.",
      },
    },
    {
      "@type": "Question",
      name: "Are ticks active in winter on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Adult deer ticks can be active in winter on Long Island when temperatures rise above 40°F. Long Island's mild winters — with frequent above-freezing days — mean tick exposure is possible in any month. Lone star and dog ticks are generally dormant in winter.",
      },
    },
    {
      "@type": "Question",
      name: "When should I start tick treatment on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The ideal time to start tick treatment is late March or early April — before the May–June nymph peak begins. Starting early provides protection during the highest-risk window of the year.",
      },
    },
  ],
};

const months = [
  { period: "January–February", deer: "Low (active above 40°F)", star: "Dormant", dog: "Dormant" },
  { period: "March–April",      deer: "Moderate — adult peak begins", star: "Low", dog: "Low" },
  { period: "May–June",         deer: "High — nymph peak",            star: "Moderate", dog: "Moderate" },
  { period: "July–August",      deer: "Moderate",                     star: "High — peak", dog: "High — peak" },
  { period: "September–October",deer: "High — adult fall peak",        star: "Moderate", dog: "Low" },
  { period: "November–December",deer: "Low (active on warm days)",     star: "Dormant", dog: "Dormant" },
];

export default function Article1() {
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
              <span>When Do Ticks Come Out?</span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-semibold text-orange-700">Tick Season</span>
              <span className="flex items-center gap-1 text-xs text-brand-300">
                <Calendar className="h-3 w-3" />
                Updated June 2025 · 5 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl leading-tight">
              When Do Ticks Come Out on Long Island?
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              Many Long Island homeowners think ticks are a summer problem. The reality is more complicated — and the windows that matter most aren&apos;t always when people expect.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Short Answer: Nearly Year-Round</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  On Long Island, deer ticks — the primary species responsible for Lyme disease — are active any time temperatures exceed 40°F. Long Island winters are mild enough that this threshold is crossed frequently, even in January and February. This means tick risk on Long Island is not confined to a single season the way many homeowners assume.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  That said, tick activity is not uniform throughout the year. There are two peak windows that represent the highest risk periods, and understanding them helps you make better decisions about when to prioritize yard protection and personal tick checks.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Month-by-Month Tick Activity on Long Island</h2>
                <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-gray-100 bg-gray-50">
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Period</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700">Deer Tick</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Lone Star</th>
                          <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Dog Tick</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100">
                        {months.map((m) => (
                          <tr key={m.period} className="hover:bg-gray-50">
                            <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{m.period}</td>
                            <td className="px-4 py-3 text-gray-600">{m.deer}</td>
                            <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{m.star}</td>
                            <td className="px-4 py-3 text-gray-500 hidden sm:table-cell">{m.dog}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
                    Activity levels represent typical Long Island seasonal patterns. Actual conditions vary by location and weather.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">The Two Highest-Risk Windows</h2>
                <div className="grid gap-5 sm:grid-cols-2">
                  {[
                    {
                      title: "May–June: Nymph Season",
                      badge: "Highest Lyme Risk",
                      color: "border-red-200 bg-red-50",
                      badgeColor: "bg-red-100 text-red-700",
                      body: "Deer tick nymphs emerge in May and are active through June. They are the size of a poppy seed — easy to miss on skin or clothing. Nymphs are responsible for most Lyme disease cases on Long Island, partly because they feed undetected long enough to potentially transmit the bacteria. This is the window where yard protection matters most.",
                    },
                    {
                      title: "September–October: Adult Fall Peak",
                      badge: "Often Overlooked",
                      color: "border-orange-200 bg-orange-50",
                      badgeColor: "bg-orange-100 text-orange-700",
                      body: "Adult deer ticks reach a second activity peak in fall. They are larger and more visible than nymphs, but many homeowners have stopped treatment after summer, leaving their yards unprotected. September and October are the months when adult deer ticks are most actively questing for hosts before winter.",
                    },
                  ].map((w) => (
                    <div key={w.title} className={`rounded-xl border p-5 ${w.color}`}>
                      <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3 ${w.badgeColor}`}>{w.badge}</span>
                      <h3 className="font-bold text-gray-900 mb-2">{w.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">{w.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Misconceptions About Tick Season</h2>
                <div className="space-y-4">
                  {[
                    {
                      myth: "\"Ticks are only active in summer.\"",
                      fact: "The two highest-risk windows — May–June and September–October — bracket summer rather than fall within it. Summer has tick activity, but it's not the peak risk period for deer ticks.",
                    },
                    {
                      myth: "\"Ticks go away after the first frost.\"",
                      fact: "A single frost doesn't end tick season for deer ticks. They remain active above 40°F and can quest on leaf litter on warm winter days.",
                    },
                    {
                      myth: "\"I don't have woods, so I don't have ticks.\"",
                      fact: "Ticks are common in well-landscaped suburban yards. They shelter in mulch beds, ornamental shrubs, and leaf litter — not just forests.",
                    },
                  ].map((item) => (
                    <div key={item.myth} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="font-semibold text-gray-800 mb-2 italic">{item.myth}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{item.fact}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Schedule Tick Treatment</h2>
                <p className="text-gray-600 leading-relaxed mb-5">
                  A seasonal tick program from <Link href="/tick-control-long-island" className="text-brand-600 hover:underline font-medium">Pestify Pest Control</Link> is timed around the actual activity peaks — not just a calendar season. The most effective approach covers the property before the May nymph emergence, follows up mid-season, and includes a fall treatment for the adult deer tick peak.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Homeowners in <Link href="/tick-spraying-suffolk-county" className="text-brand-600 hover:underline font-medium">Suffolk County</Link> and <Link href="/tick-spraying-nassau-county" className="text-brand-600 hover:underline font-medium">Nassau County</Link> can schedule service for any point in the season — starting in late March for maximum coverage through October. See the full <Link href="/tick-control" className="text-brand-600 hover:underline font-medium">towns we serve</Link> to confirm coverage in your area.
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
                    { label: "Tick Season Guide",              href: "/tick-season-long-island" },
                    { label: "Tick Species on Long Island",    href: "/tick-species-long-island" },
                    { label: "Tick Control — Long Island",     href: "/tick-control-long-island" },
                    { label: "Lyme Disease on Long Island",    href: "/lyme-disease-long-island" },
                    { label: "Where Do Ticks Hide?",           href: "/blog/where-do-ticks-hide-in-long-island-yards" },
                    { label: "Get a Free Estimate",            href: "/free-estimate" },
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
                <LeadForm sourcePage="/blog/when-do-ticks-come-out-on-long-island" heading="Get a Free Estimate" subheading="Tick Control · Pestify Pest Control" compact />
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
                <p className="text-xs text-brand-700">Pestify Pest Control is fully licensed and insured for pest control in New York State, serving Suffolk and Nassau County homeowners.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="text-sm font-semibold text-gray-700 mb-3">More Articles</p>
                <ul className="space-y-2">
                  {[
                    { label: "How to Reduce Ticks in Your Yard",         href: "/blog/how-to-reduce-ticks-in-your-yard" },
                    { label: "Where Do Ticks Hide in Long Island Yards?", href: "/blog/where-do-ticks-hide-in-long-island-yards" },
                    { label: "Tick Control for Dog Owners",               href: "/blog/tick-control-for-dog-owners-long-island" },
                    { label: "Mosquito & Tick Control Together",          href: "/blog/mosquito-and-tick-control-long-island" },
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
            <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Yard This Season</h2>
            <p className="text-brand-200 mb-6">Pestify Pest Control provides targeted tick barrier treatments for Long Island homeowners. Request a free estimate today.</p>
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
