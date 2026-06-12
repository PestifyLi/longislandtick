import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tick Season on Long Island | When Ticks Are Active | LongIslandTick.com",
  description:
    "Learn when ticks are active on Long Island. Deer ticks are active nearly year-round above 40°F. Know when to protect your property with guidance from Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/tick-season-long-island" },
};

const months = [
  { period: "January–February", deerTick: "low",      loneStar: "dormant", dogTick: "dormant", summary: "Deer ticks can activate on warm days above 40°F. Generally low activity overall. Do not assume the risk is gone." },
  { period: "March–April",      deerTick: "moderate",  loneStar: "low",     dogTick: "low",     summary: "Adult deer tick season peaks in early spring. Lone star and dog ticks begin to emerge by late April." },
  { period: "May–June",         deerTick: "high",      loneStar: "moderate", dogTick: "moderate", summary: "Deer tick nymph peak — the highest Lyme risk window. All three species now active. Highest risk month for tick-borne disease." },
  { period: "July–August",      deerTick: "moderate",  loneStar: "high",    dogTick: "high",    summary: "Deer tick nymph season winding down. Lone star and American dog tick activity at peak. Hot summer months." },
  { period: "September–October", deerTick: "high",     loneStar: "moderate", dogTick: "low",     summary: "Adult deer tick second peak. This is a critical window often missed by homeowners who stop treatment after summer." },
  { period: "November–December", deerTick: "low",      loneStar: "dormant", dogTick: "dormant", summary: "Deer ticks remain active on warm days. Lone star and dog ticks largely dormant. Don't skip a fall treatment in mild years." },
];

const riskColors: Record<string, string> = {
  dormant:  "bg-gray-100 text-gray-500",
  low:      "bg-green-100 text-green-700",
  moderate: "bg-yellow-100 text-yellow-700",
  high:     "bg-orange-100 text-orange-700",
};

export default function TickSeasonPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Tick Season on Long Island</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl mb-4">
            Tick Season on Long Island
          </h1>
          <p className="text-brand-200 max-w-2xl text-lg">
            Unlike mosquitoes, ticks don&apos;t have a clean &ldquo;season.&rdquo; On Long Island, deer ticks can be active nearly any time temperatures exceed 40°F — which can mean tick risk in any month of the year.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8 space-y-12">

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Tick Season Misconception</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Many Long Island homeowners think tick risk ends in September when school starts, or begins in summer when mosquitoes become a nuisance. Both assumptions can lead to preventable tick bites. The truth is that tick activity on Long Island is more complex and longer than most people realize.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Blacklegged (deer) ticks are active year-round above 40°F. In mild Long Island winters — where temperatures frequently climb above 40°F even in January — adult deer ticks can be questing on leaf litter. The spring nymph season (May–June) and the fall adult season (September–October) are the two highest-risk windows and are the periods when most Lyme disease transmission occurs.
          </p>
        </section>

        {/* Monthly table */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Month-by-Month Activity Guide</h2>
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-100 bg-gray-50">
                    <th className="px-4 py-3 text-left font-semibold text-gray-700">Period</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">Deer Tick</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">Lone Star</th>
                    <th className="px-4 py-3 text-center font-semibold text-gray-700">Dog Tick</th>
                    <th className="px-4 py-3 text-left font-semibold text-gray-700 hidden sm:table-cell">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {months.map((m) => (
                    <tr key={m.period} className="hover:bg-gray-50 transition-colors">
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{m.period}</td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${riskColors[m.deerTick]}`}>{m.deerTick}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${riskColors[m.loneStar]}`}>{m.loneStar}</span>
                      </td>
                      <td className="px-4 py-3 text-center">
                        <span className={`inline-block rounded-full px-2 py-0.5 text-xs font-semibold ${riskColors[m.dogTick]}`}>{m.dogTick}</span>
                      </td>
                      <td className="px-4 py-3 text-xs text-gray-500 hidden sm:table-cell">{m.summary}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="px-4 py-3 text-xs text-gray-400 border-t border-gray-100">
              Activity levels are estimates based on typical Long Island seasonal patterns. Actual conditions vary by location, microclimate, and current weather.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Two Critical Windows</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {[
              {
                title: "May–June: Nymph Season",
                badge: "Highest Lyme Risk",
                badgeColor: "bg-red-100 text-red-700",
                desc: "Deer tick nymphs are tiny — the size of a poppy seed — and are responsible for most Lyme disease cases on Long Island. They emerge May through June and are nearly invisible. A nymph tick can feed undetected for the 36–48 hours needed to potentially transmit Lyme disease.",
              },
              {
                title: "September–October: Adult Fall Peak",
                badge: "Often Missed",
                badgeColor: "bg-orange-100 text-orange-700",
                desc: "Adult deer ticks reach a second peak in fall. They are larger and more visible than nymphs, but many homeowners have stopped treatment after summer, leaving yards unprotected during this active period. Fall treatments are an important part of comprehensive tick control.",
              },
            ].map((w) => (
              <div key={w.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-brand-600" />
                    <h3 className="font-bold text-gray-900">{w.title}</h3>
                  </div>
                </div>
                <span className={`inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold mb-3 ${w.badgeColor}`}>{w.badge}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{w.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Mid-page estimate callout */}
        <div className="rounded-2xl border border-brand-100 bg-brand-50 p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <p className="font-bold text-brand-900 text-lg">Get a Free Estimate from Pestify Pest Control</p>
            <p className="text-brand-700 text-sm mt-1">Seasonal tick barrier treatments for Long Island homeowners — Suffolk and Nassau County.</p>
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

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">When to Schedule Tick Treatment</h2>
          <div className="space-y-4">
            {[
              { timing: "Early March",          action: "Start of season treatment",     desc: "Target adult deer tick activity before nymph season begins." },
              { timing: "Late April–May",        action: "Pre-nymph season treatment",   desc: "Critical application before the May–June nymph peak." },
              { timing: "June–July",             action: "Mid-season follow-up",         desc: "Maintain protection through summer. Lone star tick season peaks." },
              { timing: "September",             action: "Fall treatment",               desc: "Target adult deer tick fall peak before activity declines." },
              { timing: "November (mild years)", action: "Late season application",      desc: "Optional final treatment on properties with heavy deer traffic." },
            ].map((t, i) => (
              <div key={t.timing} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-sm font-bold text-white">{i + 1}</div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2 mb-0.5">
                    <p className="font-semibold text-gray-900">{t.action}</p>
                    <span className="text-xs text-brand-600 font-medium">{t.timing}</span>
                  </div>
                  <p className="text-sm text-gray-500">{t.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="rounded-2xl bg-brand-900 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Protect Your Yard, Pets &amp; Family This Season</h2>
          <p className="text-brand-200 mb-6">Pestify Pest Control can schedule your first treatment early in the season for maximum protection. Request a free estimate today — no obligation.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/30 px-6 py-3 font-bold text-white hover:bg-white/10 transition-colors">
              <Phone className="h-4 w-4" />{BUSINESS_PHONE}
            </a>
          </div>
        </div>

        {/* Related */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-4">Related Information</h2>
          <div className="flex flex-wrap gap-2">
            {[
              { label: "Tick Species on Long Island",  href: "/tick-species-long-island" },
              { label: "Lyme Disease on Long Island",  href: "/lyme-disease-long-island" },
              { label: "Tick Control Blog",            href: "/blog" },
              { label: "Long Island Tick Control",     href: "/tick-control-long-island" },
              { label: "Suffolk County Service",       href: "/tick-spraying-suffolk-county" },
              { label: "Get a Free Estimate",          href: "/free-estimate" },
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
