import type { Metadata } from "next";
import Link from "next/link";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight, Shield, Leaf, MapPin, Bug } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tick Control Long Island | Professional Service | Pestify Pest Control",
  description:
    "Professional tick control for Long Island homeowners. Targeted treatments for deer ticks, lone star ticks, and American dog ticks. Serving all of Suffolk and Nassau County. Free estimate.",
  alternates: { canonical: "https://longislandtick.com/tick-control-long-island" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Long Island Tick Control",
  description: "Professional tick barrier treatment and seasonal tick control programs for Long Island homeowners.",
  provider: { "@type": "LocalBusiness", name: "Pestify Pest Control", telephone: BUSINESS_PHONE, url: "https://longislandtick.com" },
  areaServed: { "@type": "AdministrativeArea", name: "Long Island, New York" },
  serviceType: "Tick Control",
};

export default function TickControlLongIslandPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="min-h-screen">
        {/* Hero */}
        <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
              <Link href="/" className="hover:text-white">Home</Link>
              <ArrowRight className="h-3 w-3" />
              <span>Tick Control — Long Island</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-brand-200 mb-4">
              Pestify Pest Control · Licensed &amp; Insured
            </div>
            <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl">
              Professional Tick Control for Long Island
            </h1>
            <p className="mt-4 text-brand-200 max-w-2xl text-lg">
              Targeted tick barrier treatments for Long Island properties. Pestify specializes in reducing tick populations where they live — protecting your family throughout the season.
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

              {/* What's included */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What&apos;s Included</h2>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {[
                    "Targeted perimeter barrier applications",
                    "Wooded edge and leaf litter treatment",
                    "Shrub and brush zone applications",
                    "Property walk and risk assessment",
                    "Deer tick, lone star tick, and dog tick coverage",
                    "Treatments timed to peak activity seasons",
                    "Safe for kids and pets after dry time",
                    "Licensed NYS applicators on every visit",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <CheckCircle className="h-5 w-5 text-brand-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{b}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {/* How it works */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">How Pestify&apos;s Tick Treatment Works</h2>
                <div className="space-y-4">
                  {[
                    { step: "Property Assessment", desc: "We walk your property to identify tick harborage zones — wooded edges, leaf litter, overgrown areas, and deer corridors — and assess your specific risk level." },
                    { step: "Targeted Application", desc: "We apply barrier treatments to the areas where ticks live and wait for passing hosts. This means property edges, shrub borders, and transition zones — not your entire lawn." },
                    { step: "Scheduled Follow-Ups", desc: "For sustained protection, we schedule return applications through the season. Treatments are timed to coincide with peak activity periods for the species active in your area." },
                    { step: "Treatment Report", desc: "After each visit, we'll confirm what was treated, note any conditions we observed, and provide guidance on any property improvements that would support tick reduction." },
                  ].map((s, i) => (
                    <div key={s.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</div>
                      <div>
                        <p className="font-semibold text-gray-900">{s.step}</p>
                        <p className="mt-1 text-sm text-gray-500">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* County links */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service by County</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { county: "Suffolk County", href: "/tick-spraying-suffolk-county", desc: "North Shore, South Shore, and East End tick control." },
                    { county: "Nassau County",  href: "/tick-spraying-nassau-county",  desc: "Oyster Bay, South Shore, and suburban Nassau tick control." },
                  ].map((c) => (
                    <Link key={c.county} href={c.href} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 hover:border-brand-300 hover:shadow-sm transition-all">
                      <ArrowRight className="h-4 w-4 text-brand-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-semibold text-gray-900">{c.county}</p>
                        <p className="text-xs text-gray-500">{c.desc}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    { q: "When is the best time to start tick treatment?", a: "Early March is ideal for Long Island. Adult deer ticks activate above 40°F, which can happen as early as late February. Starting before nymph season (May–June) provides the most complete protection." },
                    { q: "How long does each treatment last?", a: "A single treatment provides approximately 3–4 weeks of residual control. For continuous season-long protection, a program of scheduled applications through spring, summer, and fall provides the best results." },
                    { q: "Is tick treatment safe for children and pets?", a: "Yes. We use EPA-registered and NYS-approved products applied per label requirements. Most properties are safe for kids and pets to re-enter on the same day after the application has dried, typically 1–2 hours." },
                    { q: "What areas of the property do you treat?", a: "We focus on the areas where ticks actually harbor and quest — wooded edges, leaf litter zones, shrub borders, ornamental plantings, and the transition zone between lawn and natural areas. We do not typically treat open lawn areas." },
                  ].map((faq) => (
                    <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                      <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                      <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Mosquito + Tick combo callout */}
              <section className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
                <div className="flex items-start gap-3">
                  <Bug className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h2 className="text-xl font-bold text-brand-900 mb-2">Tick + Mosquito Programs Available</h2>
                    <p className="text-brand-800 text-sm leading-relaxed mb-3">
                      Mosquitoes and ticks share many of the same harborage zones. Pestify offers combined mosquito and tick barrier treatments — one coordinated program for both pests, fewer visits, and coverage through the full pest season.
                    </p>
                    <Link href="/mosquito-and-tick-control-long-island" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors">
                      Learn about Mosquito &amp; Tick Programs <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </section>

              {/* Related */}
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Information</h2>
                <div className="flex flex-wrap gap-2">
                  {[
                    { label: "Mosquito & Tick Programs",    href: "/mosquito-and-tick-control-long-island" },
                    { label: "Suffolk County Service",      href: "/tick-spraying-suffolk-county" },
                    { label: "Nassau County Service",       href: "/tick-spraying-nassau-county" },
                    { label: "Lyme Disease on Long Island", href: "/lyme-disease-long-island" },
                    { label: "Tick Species Guide",          href: "/tick-species-long-island" },
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

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <LeadForm sourcePage="/tick-control-long-island" heading="Get a Free Estimate" subheading="Pestify Pest Control · No obligation" compact />
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm text-center">
                <p className="text-sm text-gray-500 mb-3">Prefer to call?</p>
                <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="flex items-center justify-center gap-2 text-lg font-bold text-brand-600 hover:text-brand-700">
                  <Phone className="h-5 w-5" />
                  {BUSINESS_PHONE}
                </a>
                <p className="text-xs text-gray-400 mt-2">Mon–Fri 8am–6pm · Sat 9am–3pm</p>
              </div>
              <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Shield className="h-5 w-5 text-brand-600" />
                  <p className="font-semibold text-brand-900 text-sm">Licensed &amp; Insured</p>
                </div>
                <p className="text-xs text-brand-700">Pestify holds all required NYS pest control licenses and carries full liability and workers comp insurance.</p>
              </div>
              <div className="rounded-xl border border-green-100 bg-green-50 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="h-5 w-5 text-green-600" />
                  <p className="font-semibold text-green-900 text-sm">Locally Owned</p>
                </div>
                <p className="text-xs text-green-700">Pestify is based in Port Jefferson Station — a Long Island company, not a national franchise.</p>
              </div>
              <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-5 w-5 text-brand-600" />
                  <p className="font-semibold text-gray-900 text-sm">Serving Suffolk &amp; Nassau</p>
                </div>
                <p className="text-xs text-gray-600">Full Long Island coverage — North Shore, South Shore, East End, and Nassau County communities.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Yard, Pets &amp; Family</h2>
          <p className="text-brand-200 mb-6">
            Pestify Pest Control provides seasonal tick barrier treatments for Long Island homeowners. Get a free estimate — no obligation.
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
    </>
  );
}
