import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tick Species on Long Island | Deer Tick, Lone Star & More | LongIslandTick.com",
  description:
    "Learn about the tick species active on Long Island — blacklegged (deer) tick, lone star tick, and American dog tick. Identification, disease risks, and activity seasons. From Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/tick-species-long-island" },
};

const species = [
  {
    name: "Blacklegged Tick (Deer Tick)",
    latin: "Ixodes scapularis",
    risk: "High",
    riskColor: "bg-red-100 text-red-700 border-red-200",
    season: "Nearly year-round — active above 40°F",
    diseases: ["Lyme disease", "Anaplasmosis", "Babesiosis", "Powassan virus (rare)"],
    description: "The blacklegged tick — commonly called the deer tick — is the primary disease-carrying tick species on Long Island and the most common cause of Lyme disease in New York State. Adults are reddish-brown to dark brown, roughly the size of a sesame seed. Nymphs are tiny — about the size of a poppy seed — and are responsible for most Lyme disease transmissions because they are easy to miss.",
    habitats: ["Wooded property edges", "Leaf litter and brush", "Ornamental plantings and mulch", "Shaded areas with deer traffic"],
    prevention: "Deer ticks quest on low vegetation and leaf litter from early spring through late fall. On warm winter days (above 40°F) they can be active even in December and January. Concentrated nymph activity in May–June represents the highest Lyme risk window.",
  },
  {
    name: "Lone Star Tick",
    latin: "Amblyomma americanum",
    risk: "Moderate",
    riskColor: "bg-orange-100 text-orange-700 border-orange-200",
    season: "April through September — peak July–August",
    diseases: ["Ehrlichiosis", "STARI (Southern Tick-Associated Rash Illness)", "Heartland virus (rare)", "Possible alpha-gal allergy link"],
    description: "The lone star tick is identified by a distinctive white spot on the back of females. It is an aggressive tick species that actively pursues hosts, covering distances of several feet. Lone star ticks are expanding their range northward and are now well-established on Long Island — particularly in the East End and wooded areas of Suffolk County.",
    habitats: ["Wooded areas and shrubby edges", "Deer resting sites", "Open fields adjacent to woods", "Recreational areas and parks"],
    prevention: "Lone star ticks are more aggressive biters than deer ticks and will actively pursue hosts. They are most active in summer months and are often encountered in clusters. Unlike deer ticks, they do not typically carry Lyme disease but can cause other illnesses.",
  },
  {
    name: "American Dog Tick",
    latin: "Dermacentor variabilis",
    risk: "Low–Moderate",
    riskColor: "bg-yellow-100 text-yellow-700 border-yellow-200",
    season: "April through August — peak May–July",
    diseases: ["Rocky Mountain Spotted Fever", "Tularemia"],
    description: "The American dog tick is a larger, more visible tick species. Adults have distinctive whitish-gray markings on the back. As the name suggests, dogs are a common host for this species. While it can transmit Rocky Mountain Spotted Fever and tularemia, these diseases are less common than Lyme disease on Long Island.",
    habitats: ["Open fields and grassy areas", "Roadsides and trail edges", "Areas with low vegetation", "Dog walking routes"],
    prevention: "American dog ticks are most active in spring and early summer. They tend to prefer more open habitats than deer ticks and are less likely to be encountered in deep woodland. Regularly check pets after outdoor time, particularly May through July.",
  },
];

export default function TickSpeciesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Tick Species on Long Island</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl mb-4">
            Tick Species Found on Long Island
          </h1>
          <p className="text-brand-200 max-w-2xl text-lg">
            Three established tick species are active on Long Island. Understanding each species — its activity season, habitat, and disease risk — helps you protect your property effectively.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-10">

        {species.map((s) => (
          <div key={s.name} className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h2 className="text-xl font-extrabold text-gray-900">{s.name}</h2>
                <p className="text-sm text-gray-400 italic">{s.latin}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${s.riskColor}`}>
                  Disease Risk: {s.risk}
                </span>
              </div>
            </div>
            <div className="p-6 space-y-5">
              <p className="text-gray-600 leading-relaxed">{s.description}</p>

              <div className="grid gap-5 sm:grid-cols-3">
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Active Season</p>
                  <p className="text-sm text-gray-700">{s.season}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Diseases Carried</p>
                  <ul className="space-y-1">
                    {s.diseases.map((d) => (
                      <li key={d} className="text-sm text-gray-700 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Typical Habitats</p>
                  <ul className="space-y-1">
                    {s.habitats.map((h) => (
                      <li key={h} className="text-sm text-gray-700 flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="rounded-lg bg-gray-50 border border-gray-100 px-4 py-3">
                <p className="text-sm text-gray-600 leading-relaxed">{s.prevention}</p>
              </div>
            </div>
          </div>
        ))}

        {/* Mid-page estimate callout */}
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold text-brand-900 text-lg">Get a Free Estimate from Pestify Pest Control</p>
            <p className="text-brand-700 text-sm mt-1">Tick barrier treatments targeting all three Long Island tick species — Suffolk and Nassau County.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <Button asChild variant="cta">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 px-4 py-2 text-sm font-semibold text-brand-700 hover:bg-brand-100 transition-colors">
              <Phone className="h-4 w-4" />{BUSINESS_PHONE}
            </a>
          </div>
        </div>

        {/* CTA */}
        <div className="rounded-2xl bg-brand-900 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Yard from All Three Species</h2>
          <p className="text-brand-200 mb-6">Pestify&apos;s tick barrier treatments target the harborage zones for all three Long Island tick species. Request a free estimate.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" />{BUSINESS_PHONE}
            </a>
          </div>
        </div>

        {/* Related links */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Information</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Lyme Disease on Long Island", href: "/lyme-disease-long-island" },
              { label: "Tick Season Guide",           href: "/tick-season-long-island" },
              { label: "Tick Control Blog",           href: "/blog" },
              { label: "Long Island Tick Control",    href: "/tick-control-long-island" },
              { label: "Get a Free Estimate",         href: "/free-estimate" },
            ].map((l) => (
              <Link key={l.href} href={l.href} className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                {l.label} <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
