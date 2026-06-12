import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tick Control for Dog Owners on Long Island | LongIslandTick.com",
  description:
    "Dogs increase tick exposure for the whole household. Learn how Long Island dog owners can combine yard treatment, personal tick checks, and veterinary guidance for the strongest protection.",
  alternates: { canonical: "https://longislandtick.com/blog/tick-control-for-dog-owners-long-island" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are dogs at higher risk for tick bites on Long Island?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Dogs that spend time outdoors — especially in yards with ornamental beds, wooded edges, or grassy areas — are frequently exposed to ticks during the active season. Dogs move through the edge zones of yards where tick density is highest, and they can bring ticks inside the home.",
      },
    },
    {
      "@type": "Question",
      name: "Can my dog bring ticks into the house?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Ticks that hitch a ride on a dog can detach inside the home and potentially bite household members before being found. Regular tick checks after outdoor time — especially during the May–June and September–October peak windows — help catch ticks before this happens.",
      },
    },
    {
      "@type": "Question",
      name: "Is professional yard treatment safe for dogs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pestify's tick barrier treatments are safe for dogs and people after the treated areas have fully dried — typically 1–2 hours. Pestify will advise you on dry time and any specific precautions at the time of service.",
      },
    },
    {
      "@type": "Question",
      name: "What tick preventives should I use for my dog?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Consult your veterinarian for guidance on tick preventive products appropriate for your dog. Vet-recommended preventives — combined with yard treatment and regular tick checks — provide the strongest combined protection for dog-owning households.",
      },
    },
  ],
};

export default function Article4() {
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
              <span>Tick Control for Dog Owners</span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">Pets &amp; Ticks</span>
              <span className="flex items-center gap-1 text-xs text-brand-300">
                <Calendar className="h-3 w-3" />
                Updated June 2025 · 5 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl leading-tight">
              Tick Control for Dog Owners on Long Island
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              Dogs that spend time in the yard increase tick exposure for everyone in the household. A multi-layer approach — yard treatment, tick checks, and veterinary guidance — provides the strongest protection.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Dog Owners Face Higher Tick Exposure</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dogs move through the areas of a yard where ticks concentrate: ornamental beds, shrub borders, grassy edges, and wooded perimeters. Unlike humans who tend to stay on paths or in open areas, dogs often push into exactly the harborage zones where tick density is highest.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Beyond direct exposure to the dog, ticks can hitch a ride inside and detach indoors — creating exposure risk for the rest of the household. Dog-owning Long Island families often find ticks indoors not because ticks are in the house, but because dogs carry them in from the yard.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">A Three-Layer Approach to Tick Protection</h2>
                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "Treat the Yard",
                      body: "The most direct way to reduce tick exposure for dogs is to reduce the tick population in your yard. A professional barrier treatment from Pestify Pest Control targets the ornamental beds, mulch borders, wooded edges, and perimeter vegetation where ticks shelter — the same areas dogs are most likely to explore.",
                    },
                    {
                      num: "2",
                      title: "Use Veterinary-Recommended Tick Preventives",
                      body: "Yard treatment reduces tick exposure, but it does not eliminate it. Talk to your veterinarian about tick prevention products appropriate for your dog — prescription and over-the-counter options vary in efficacy and appropriate use. This is a veterinary decision, not a pest control one.",
                    },
                    {
                      num: "3",
                      title: "Perform Regular Tick Checks",
                      body: "After outdoor time — especially during the May–June and September–October peak windows — check your dog thoroughly for ticks, paying particular attention to ears, between toes, under collar, around the tail base, and groin area. Also check yourself and other household members. A tick found and removed promptly reduces exposure time.",
                    },
                  ].map((s) => (
                    <div key={s.num} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{s.num}</div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Where Dogs Encounter Ticks in Long Island Yards</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Dogs most often pick up ticks in the same zones where tick density is highest. Understanding these locations helps you focus tick checks and understand why yard treatment targeting these areas matters.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Ornamental shrub and mulch beds at the yard's edge",
                    "Transition zones where lawn meets wooded or brush areas",
                    "Ground cover plantings (pachysandra, ivy)",
                    "Along fence lines with low vegetation",
                    "Leaf litter under trees and in garden corners",
                    "Wooded trails and adjacent property borders",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Is Yard Treatment Safe for Dogs?</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Pestify&apos;s barrier treatments are safe for dogs and people after the treated areas have fully dried — typically 1–2 hours after application. Pestify will advise you on dry time and any specific precautions for your property at the time of service.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  If you have concerns about specific product ingredients or sensitivities, let Pestify know when scheduling so they can address your situation directly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Tick Checks: What to Look For on Your Dog</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Deer tick nymphs — the life stage responsible for most Lyme disease cases — are roughly the size of a poppy seed and are easily missed on dogs with thick or dark coats. After outdoor time in the peak season (May–June especially), a thorough check covering the whole dog, not just visible spots, is the most reliable way to find attached ticks.
                </p>
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-3">Areas to check carefully on dogs:</p>
                  <ul className="grid gap-2 sm:grid-cols-2 text-sm text-gray-600">
                    {["Between toes and paw pads", "Around the ears and ear canal", "Under the collar", "Groin and belly area", "Around the tail base", "In skin folds and armpits"].map((a) => (
                      <li key={a} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  If you find a tick on your dog or are concerned about a bite, consult your veterinarian. This article is informational and does not constitute veterinary advice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Protecting Your Yard for Dogs and Families</h2>
                <p className="text-gray-600 leading-relaxed">
                  <Link href="/tick-control-long-island" className="text-brand-600 hover:underline font-medium">Pestify Pest Control</Link> serves dog-owning households across <Link href="/tick-spraying-suffolk-county" className="text-brand-600 hover:underline font-medium">Suffolk County</Link> and <Link href="/tick-spraying-nassau-county" className="text-brand-600 hover:underline font-medium">Nassau County</Link>. A seasonal barrier treatment program targeting the harborage zones in your yard — combined with the veterinary and personal protection steps above — provides the most comprehensive protection for dogs and their families. View the <Link href="/tick-control" className="text-brand-600 hover:underline font-medium">full list of towns served</Link> to confirm service in your area.
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
                    { label: "Where Do Ticks Hide?",              href: "/blog/where-do-ticks-hide-in-long-island-yards" },
                    { label: "How to Reduce Ticks in Your Yard",  href: "/blog/how-to-reduce-ticks-in-your-yard" },
                    { label: "Tick Species on Long Island",        href: "/tick-species-long-island" },
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
                <LeadForm sourcePage="/blog/tick-control-for-dog-owners-long-island" heading="Get a Free Estimate" subheading="Tick Control · Pestify Pest Control" compact />
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
                    { label: "Where Do Ticks Hide?",              href: "/blog/where-do-ticks-hide-in-long-island-yards" },
                    { label: "How to Reduce Ticks in Your Yard",  href: "/blog/how-to-reduce-ticks-in-your-yard" },
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
            <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Dog&apos;s Yard from Ticks</h2>
            <p className="text-brand-200 mb-6">Pestify Pest Control provides professional tick barrier treatments designed to reduce tick populations in the yard areas dogs use most. Request a free estimate today.</p>
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
