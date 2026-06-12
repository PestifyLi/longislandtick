import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { LeadForm } from "@/components/forms/LeadForm";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight, Shield, TreePine, MapPin } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";
import { TOWNS, getTownBySlug, REGION_CONTENT } from "@/lib/towns";

type Params = { town: string };

export function generateStaticParams(): Params[] {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) return {};
  return {
    title: `Tick Control in ${town.name}, NY | Pestify Pest Control | LongIslandTick.com`,
    description: `Professional tick control in ${town.name}, NY. Pestify Pest Control provides targeted deer tick barrier treatments for ${town.name} homeowners in ${town.county} County. Get a free estimate.`,
    alternates: { canonical: `https://longislandtick.com/tick-control/${town.slug}` },
  };
}

const treatmentSteps = [
  { step: "1", title: "Free Property Assessment", desc: "Pestify reviews your property's tick risk zones — wooded edges, ornamental beds, mulch borders, shaded areas, and perimeter vegetation." },
  { step: "2", title: "Targeted Barrier Treatment", desc: "Licensed applicators treat the harborage areas where ticks spend the majority of their time — not just the open lawn, which has very little tick activity." },
  { step: "3", title: "Season-Long Program", desc: "Multiple applications timed to tick activity peaks: early spring, pre-nymph, mid-season, and fall adult peak — for protection across the full active season." },
  { step: "4", title: "Mosquito Add-On Available", desc: "Combine your tick program with mosquito control for comprehensive yard protection in a single coordinated treatment visit." },
];

const generalFaqs = [
  { q: "How long does a tick barrier treatment last?", a: "A single barrier treatment typically provides 3–4 weeks of protection. A seasonal program with multiple timed applications provides consistent coverage across the full tick season — from early spring through late fall." },
  { q: "Is the treatment safe for kids and pets?", a: "Yes — once the treated areas have fully dried (typically 1–2 hours), the yard is safe for children and pets. Pestify will advise you on the specific dry time at the time of service." },
  { q: "When is the best time to start tick control?", a: "Early spring — late March or early April — before the nymph season begins in May. Starting early provides protection during the highest-risk window: the May–June deer tick nymph peak." },
  { q: "Do I need tick control if I don't have a wooded property?", a: "Yes. Ticks don't require forests. They live and reproduce in ornamental plantings, mulch beds, leaf litter, and shaded lawn edges — features common in well-landscaped suburban yards across Long Island." },
];

export default async function TownPage({ params }: { params: Promise<Params> }) {
  const { town: slug } = await params;
  const town = getTownBySlug(slug);
  if (!town) notFound();

  const region = REGION_CONTENT[town.region];
  const nearbyWithNames = town.nearbyTowns
    .map((s) => TOWNS.find((t) => t.slug === s))
    .filter(Boolean) as typeof TOWNS;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm flex-wrap">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <Link href="/tick-control" className="hover:text-white">Tick Control by Town</Link>
            <ArrowRight className="h-3 w-3" />
            <span>{town.name}</span>
          </div>
          <div className="flex items-start gap-3 mb-3">
            <MapPin className="h-6 w-6 text-brand-300 flex-shrink-0 mt-1" />
            <span className="text-brand-300 text-sm font-medium">{town.county} County, NY · {region.regionLabel}</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl">
            Tick Control in {town.name}, NY
          </h1>
          <p className="mt-4 text-brand-200 max-w-2xl text-lg">
            Pestify Pest Control provides professional tick barrier treatments for homeowners in {town.name}. Targeted applications to the areas where ticks actually hide — not just the open lawn.
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

            {/* Intro */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tick Control in {town.name}, NY</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{town.intro}</p>
              <p className="text-gray-600 leading-relaxed">
                Pestify Pest Control serves {town.name} homeowners with targeted barrier treatments applied to the specific zones where ticks harbor and quest — ornamental beds, mulch borders, wooded edges, and shaded lawn perimeters. Services are provided by licensed New York State pest control applicators.
              </p>
            </section>

            {/* Why ticks here */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Ticks Are Common in {town.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-5">{town.whyHere}</p>
              <p className="text-gray-600 leading-relaxed">{region.tickHabitatIntro}</p>
            </section>

            {/* Where ticks hide */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Where Ticks Hide in {town.name} Yards</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {region.tickHabitats.map((h) => (
                  <li key={h} className="flex items-start gap-3 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{h}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Alert box */}
            <div className="rounded-xl bg-green-50 border border-green-200 p-5 flex items-start gap-3">
              <TreePine className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-green-900 mb-1">{region.alertTitle}</p>
                <p className="text-sm text-green-800">{region.alertText}</p>
              </div>
            </div>

            {/* Season note */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Tick Season in {town.name}</h2>
              <p className="text-gray-600 leading-relaxed mb-4">{region.seasonNote}</p>
              <p className="text-gray-600 leading-relaxed">
                The two highest-risk windows are <strong>May–June</strong> (deer tick nymph peak — tiny, hard to see, highest Lyme disease risk) and <strong>September–October</strong> (adult deer tick fall peak — often missed when homeowners stop treatment after summer). A seasonal program from Pestify covers both windows.
              </p>
            </section>

            {/* Treatment process */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Pestify&apos;s Tick Treatment Process</h2>
              <div className="space-y-4">
                {treatmentSteps.map((s) => (
                  <div key={s.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">
                      {s.step}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{s.title}</p>
                      <p className="text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Combo CTA */}
            <section className="rounded-2xl border border-brand-100 bg-brand-50 p-6">
              <div className="flex items-start gap-3 mb-3">
                <Shield className="h-5 w-5 text-brand-600 flex-shrink-0 mt-0.5" />
                <h2 className="text-xl font-bold text-brand-900">Add Mosquito Control</h2>
              </div>
              <p className="text-brand-800 text-sm leading-relaxed mb-4">
                Combine your tick program with mosquito control for complete backyard protection. Mosquitoes and ticks share many of the same harborage zones — treating both in a single coordinated program is more efficient and often more cost-effective than separate services.
              </p>
              <Link
                href="/mosquito-and-tick-control-long-island"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-900 transition-colors"
              >
                Learn about the Mosquito &amp; Tick Program <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </section>

            {/* Areas served */}
            {town.areas.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Areas Served in and Around {town.name}</h2>
                <div className="flex flex-wrap gap-2">
                  {town.areas.map((a) => (
                    <span key={a} className="rounded-full bg-brand-50 border border-brand-100 px-3 py-1 text-sm text-brand-700">{a}</span>
                  ))}
                </div>
              </section>
            )}

            {/* FAQ */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-5">Frequently Asked Questions — {town.name} Tick Control</h2>
              <div className="space-y-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <p className="font-semibold text-gray-900 mb-2">{region.faqQ}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{region.faqA}</p>
                </div>
                {generalFaqs.map((f) => (
                  <div key={f.q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-2">{f.q}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{f.a}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Nearby towns */}
            {nearbyWithNames.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Nearby Towns We Also Serve</h2>
                <div className="flex flex-wrap gap-2">
                  {nearbyWithNames.map((t) => (
                    <Link
                      key={t.slug}
                      href={`/tick-control/${t.slug}`}
                      className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors"
                    >
                      Tick Control in {t.name} <ArrowRight className="h-3 w-3" />
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Related pages */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Pages</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Tick Control — Long Island",    href: "/tick-control-long-island" },
                  { label: "Mosquito & Tick Programs",       href: "/mosquito-and-tick-control-long-island" },
                  { label: `${town.county} County Service`,  href: town.countyPage },
                  { label: "Lyme Disease on Long Island",    href: "/lyme-disease-long-island" },
                  { label: "Tick Season Guide",              href: "/tick-season-long-island" },
                  { label: "All Towns We Serve",             href: "/tick-control" },
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

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <LeadForm
                sourcePage={`/tick-control/${town.slug}`}
                heading="Get a Free Estimate"
                subheading={`${town.name}, ${town.county} County · Pestify`}
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
                Pestify Pest Control is fully licensed and insured for pest control in New York State, serving {town.county} County homeowners in {town.name} and surrounding communities.
              </p>
            </div>
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-green-900 text-sm">Locally Owned</p>
              </div>
              <p className="text-xs text-green-700">
                Pestify is based in Port Jefferson Station and serves {town.county} County communities including {town.name}. Not a national franchise — a local Long Island company.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">
            Ready to Protect Your {town.name} Yard?
          </h2>
          <p className="text-brand-200 mb-6">
            Pestify Pest Control provides free estimates for tick barrier treatment in {town.name}. Contact us today to schedule your first application.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-4 w-4" />{BUSINESS_PHONE}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
