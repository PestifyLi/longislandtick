import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Calendar, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "How to Reduce Ticks in Your Yard on Long Island | LongIslandTick.com",
  description:
    "Practical steps Long Island homeowners can take to reduce tick populations in their yards — from lawn habits and landscaping to professional barrier treatments by Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/blog/how-to-reduce-ticks-in-your-yard" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the most effective way to reduce ticks in a Long Island yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professional barrier treatment targeting the specific areas where ticks shelter — ornamental beds, mulch borders, wooded edges, and shaded lawn perimeters — is the most effective single step. Combined with landscape maintenance practices (leaf litter removal, mowing, mulch management), a barrier treatment program significantly reduces tick populations on residential properties.",
      },
    },
    {
      "@type": "Question",
      name: "Does mowing reduce ticks in the yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Regular mowing reduces the moisture and shade that ticks prefer in open lawn areas, but ticks don't primarily live in short grass — they shelter in the edges: mulch beds, ornamental shrubs, leaf litter, and woody borders. Mowing alone won't control a tick population if those harborage zones are left untreated.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I get tick treatment for my Long Island yard?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A seasonal program from Pestify typically includes 3–4 applications: an early spring treatment before the May nymph peak, a mid-season follow-up, and a fall treatment targeting the adult deer tick second peak in September–October. Single applications provide 3–4 weeks of residual protection.",
      },
    },
    {
      "@type": "Question",
      name: "Can I reduce ticks without pesticides?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Non-chemical steps — leaf litter removal, mowing, wood chip borders, and reducing deer attractants — can reduce tick habitat but generally do not eliminate established tick populations the way targeted barrier treatments do. Most homeowners see the best results combining landscape practices with professional treatment.",
      },
    },
  ],
};

const steps = [
  {
    num: "1",
    title: "Remove Leaf Litter Promptly",
    body: "Leaf litter is prime tick habitat — it holds moisture, provides cover, and sits at ground level where ticks quest. Removing fallen leaves from your lawn and garden beds, particularly in fall and early spring, significantly reduces the places ticks can shelter and overwinter.",
  },
  {
    num: "2",
    title: "Keep Lawn Edges Trimmed",
    body: "The transition zone between your lawn and a wooded edge, fence line, or ornamental bed is where tick density is highest. Keeping these edges trimmed and free of overgrown vegetation removes the vegetation ticks use to climb onto passing hosts.",
  },
  {
    num: "3",
    title: "Create a Mulch or Gravel Barrier",
    body: "A 3-foot-wide strip of wood chips or gravel between your lawn and wooded edges creates a dry buffer zone that ticks are reluctant to cross. This is a low-cost structural improvement that can meaningfully reduce tick movement into your usable yard.",
  },
  {
    num: "4",
    title: "Manage Ornamental Beds and Shrubs",
    body: "Mulch beds, ornamental shrubs, and foundation plantings are among the most common tick harborage zones in suburban Long Island yards. Thinning dense plantings, removing thatch, and applying fresh mulch reduce the humidity and cover that ticks depend on.",
  },
  {
    num: "5",
    title: "Stack and Store Wood Away from the House",
    body: "Woodpiles create harborage not just for ticks but for the small rodents — particularly white-footed mice — that serve as tick hosts. Keep firewood stacked in sunny, dry locations away from play areas and the home's perimeter.",
  },
  {
    num: "6",
    title: "Apply Professional Barrier Treatment",
    body: "Landscape practices reduce tick habitat, but they don't eliminate established populations. Professional barrier treatments from Pestify Pest Control target the specific zones where ticks harbor — delivering more consistent protection than DIY sprays or landscape modifications alone.",
  },
];

export default function Article2() {
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
              <span>How to Reduce Ticks in Your Yard</span>
            </div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">Yard Tips</span>
              <span className="flex items-center gap-1 text-xs text-brand-300">
                <Calendar className="h-3 w-3" />
                Updated June 2025 · 6 min read
              </span>
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl leading-tight">
              How to Reduce Ticks in Your Yard on Long Island
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              A combination of landscape management and professional barrier treatment gives Long Island homeowners the most effective protection against tick populations.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <article className="lg:col-span-2 space-y-10">

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Yard Conditions Matter</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Tick populations are not random. Ticks concentrate in specific yard conditions — shaded areas with leaf litter, humid ornamental beds, dense shrubs, and the transition zones between maintained lawn and wooded or unmaintained edges. These are the areas that attract both ticks and the small mammals they feed on as larvae and nymphs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The good news is that modifying these conditions — combined with professional barrier treatment — can substantially reduce tick pressure in your usable yard. What follows are the most effective steps Long Island homeowners can take.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-5">Six Steps to Reduce Ticks in Your Yard</h2>
                <div className="space-y-4">
                  {steps.map((s) => (
                    <div key={s.num} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                        {s.num}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                        <p className="text-sm text-gray-600 leading-relaxed">{s.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">What Professional Barrier Treatment Does</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  A <Link href="/tick-control-long-island" className="text-brand-600 hover:underline font-medium">professional tick barrier treatment</Link> from Pestify Pest Control targets the harborage zones where ticks shelter and quest — not the open lawn, where ticks are largely absent. Licensed applicators treat:
                </p>
                <ul className="grid gap-3 sm:grid-cols-2 mb-4">
                  {[
                    "Ornamental shrub and mulch bed borders",
                    "Property perimeter vegetation",
                    "Wooded edges and leaf litter zones",
                    "Ground cover plantings",
                    "Transition zones between lawn and garden",
                    "Stone walls and brush-adjacent areas",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-gray-600 leading-relaxed">
                  Pestify serves homeowners across <Link href="/tick-spraying-suffolk-county" className="text-brand-600 hover:underline font-medium">Suffolk County</Link> and <Link href="/tick-spraying-nassau-county" className="text-brand-600 hover:underline font-medium">Nassau County</Link>. View the <Link href="/tick-control" className="text-brand-600 hover:underline font-medium">full list of towns served</Link> to confirm availability in your area.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Landscape Practices vs. Professional Treatment</h2>
                <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-100 bg-gray-50">
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Approach</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Effectiveness</th>
                        <th className="px-4 py-3 text-left font-semibold text-gray-700">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {[
                        ["Leaf litter removal", "Moderate", "Reduces harborage, must be consistent"],
                        ["Regular mowing", "Low–Moderate", "Helps at edges; ticks don't live in open lawn"],
                        ["Wood chip border", "Moderate", "Good long-term structural change"],
                        ["Professional barrier treatment", "High", "Targets harborage zones directly; most consistent results"],
                        ["Combined approach", "Highest", "Landscape + treatment provides best protection"],
                      ].map(([a, e, n]) => (
                        <tr key={a} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900">{a}</td>
                          <td className="px-4 py-3 text-gray-600">{e}</td>
                          <td className="px-4 py-3 text-gray-500">{n}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
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
                    { label: "When Do Ticks Come Out?",           href: "/blog/when-do-ticks-come-out-on-long-island" },
                    { label: "Tick Control — Long Island",        href: "/tick-control-long-island" },
                    { label: "Mosquito & Tick Programs",          href: "/mosquito-and-tick-control-long-island" },
                    { label: "All Towns We Serve",                href: "/tick-control" },
                    { label: "Get a Free Estimate",               href: "/free-estimate" },
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
                <LeadForm sourcePage="/blog/how-to-reduce-ticks-in-your-yard" heading="Get a Free Estimate" subheading="Tick Control · Pestify Pest Control" compact />
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
            <h2 className="text-2xl font-extrabold text-white mb-3">Ready to Reduce Tick Pressure in Your Yard?</h2>
            <p className="text-brand-200 mb-6">Pestify Pest Control provides professional tick barrier treatments for Long Island homeowners. Contact us for a free estimate.</p>
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
