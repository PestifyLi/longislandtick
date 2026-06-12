import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { LeadForm } from "@/components/forms/LeadForm";
import { TickActivityMap } from "@/components/sections/TickActivityMap";
import {
  Shield, Clock, CheckCircle, MapPin, Phone,
  AlertTriangle, ArrowRight, TreePine, Microscope, Calendar,
  Leaf, Bug, BookOpen, Home,
} from "lucide-react";
import { BUSINESS_NAME, BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Long Island Tick Control & Yard Protection | LongIslandTick.com",
  description:
    "Seasonal tick and mosquito treatments for Suffolk and Nassau County homes, powered by Pestify Pest Control. Tick activity index, prevention guides, and professional yard protection.",
  alternates: { canonical: "https://longislandtick.com" },
};

const trustBadges = [
  { icon: Shield,      label: "Licensed & Insured",    sub: "NYS pest control certified",  green: false },
  { icon: Leaf,        label: "Locally Owned",          sub: "Port Jefferson Station, NY",  green: true  },
  { icon: MapPin,      label: "Suffolk & Nassau County", sub: "Full Long Island coverage",   green: false },
  { icon: CheckCircle, label: "Powered by Pestify",     sub: "Your local tick specialists",  green: false },
];

const whyLI = [
  {
    icon: TreePine,
    title: "High Deer Tick Pressure",
    desc: "Long Island has significant tick pressure because of its wooded suburbs, deer activity, coastal humidity, and long seasonal activity window — conditions that support large tick populations.",
    green: true,
  },
  {
    icon: AlertTriangle,
    title: "Multiple Species Active",
    desc: "Long Island is home to three established tick species — the blacklegged (deer) tick, lone star tick, and American dog tick — each with different activity seasons and disease risks.",
    green: false,
  },
  {
    icon: Calendar,
    title: "Extended Active Season",
    desc: "Unlike mosquitoes, deer ticks can be active whenever temperatures are above 40°F. Tick activity on Long Island can extend from March through December in mild years.",
    green: false,
  },
  {
    icon: Microscope,
    title: "Year-Round Prevention Matters",
    desc: "Blacklegged ticks on Long Island can carry Lyme disease, anaplasmosis, and babesiosis. Targeted barrier treatments reduce tick populations in and around your usable yard space.",
    green: false,
  },
];

const services = [
  {
    icon: Shield,
    title: "Tick Barrier Treatment",
    desc: "Targeted applications to yard perimeters, wooded edges, and tick harborage zones. Eliminates ticks where they live and wait for hosts.",
    href: "/tick-control-long-island",
    green: false,
  },
  {
    icon: Bug,
    title: "Mosquito & Tick Programs",
    desc: "Combined seasonal barrier treatments targeting both mosquitoes and ticks — one coordinated program for the full outdoor pest season.",
    href: "/mosquito-and-tick-control-long-island",
    green: true,
  },
  {
    icon: TreePine,
    title: "Suffolk County Service",
    desc: "Specialized tick programs for North Shore wooded properties, South Shore neighborhoods, and East End communities.",
    href: "/tick-spraying-suffolk-county",
    green: true,
  },
  {
    icon: Home,
    title: "Nassau County Service",
    desc: "Tick control for Nassau County suburban properties, Oyster Bay communities, and South Shore neighborhoods.",
    href: "/tick-spraying-nassau-county",
    green: false,
  },
];

const aboutCards = [
  { icon: Leaf,     title: "Locally Owned & Operated",  desc: "Pestify is based in Port Jefferson Station, Suffolk County. Real local knowledge — not a national franchise.", green: true  },
  { icon: MapPin,   title: "Built for Long Island",      desc: "Every guide, activity estimate, and service page is tailored to Suffolk County and Nassau County conditions.", green: false },
  { icon: Shield,   title: "Licensed & Fully Insured",   desc: "Pestify holds all required New York State pest control licenses and carries full liability and workers comp insurance.", green: false },
  { icon: BookOpen, title: "Educational First",          desc: "We educate first. Learn about tick activity, Lyme disease risk, and prevention — no pressure to book.", green: false },
  { icon: TreePine, title: "North Shore Expertise",      desc: "We understand Long Island's wooded terrain, deer activity, shaded yards, and seasonal tick pressure from working on local properties every day.", green: true  },
  { icon: Clock,    title: "Fast Scheduling Available",  desc: "When you're ready, most Long Island properties can be scheduled within the week. Request an estimate today.", green: false },
];

const seasonCalendar = [
  { period: "Jan–Feb", activity: "low",      label: "Dormant",    note: "Deer ticks can activate above 40°F." },
  { period: "Mar–Apr", activity: "moderate", label: "Early",      note: "Adult deer tick peak begins. Treat now." },
  { period: "May–Jun", activity: "high",     label: "Nymph Peak", note: "Tiny nymphs. Highest Lyme risk period." },
  { period: "Jul–Aug", activity: "high",     label: "Peak",       note: "All species active. Lone star peak." },
  { period: "Sep–Oct", activity: "moderate", label: "Adult",      note: "Adult deer tick second peak begins." },
  { period: "Nov–Dec", activity: "low",      label: "Late",       note: "Active on warm days. Don't skip fall treatment." },
];

const riskColors: Record<string, string> = {
  low:      "bg-green-100 text-green-700",
  moderate: "bg-yellow-100 text-yellow-700",
  high:     "bg-orange-100 text-orange-700",
};

const trustCards = [
  { icon: Leaf,        label: "Locally Owned",                    sub: "Based in Port Jefferson Station, NY",       green: true  },
  { icon: Shield,      label: "Licensed & Insured",               sub: "NYS pest control certified",                green: false },
  { icon: MapPin,      label: "Serving Suffolk & Nassau",         sub: "Full Long Island coverage",                 green: false },
  { icon: CheckCircle, label: "Powered by Pestify Pest Control",  sub: "Your local tick specialists",               green: false },
  { icon: Bug,         label: "Seasonal Tick & Mosquito Programs",sub: "Coordinated yard protection programs",      green: true  },
];

const learnLinks = [
  { icon: AlertTriangle, title: "Lyme Disease on Long Island",  href: "/lyme-disease-long-island",  desc: "Risk, symptoms, prevention, and what to do after a tick bite." },
  { icon: Microscope,    title: "Tick Species on Long Island",  href: "/tick-species-long-island",  desc: "Deer tick, lone star tick, American dog tick — identification and risks." },
  { icon: Calendar,      title: "Tick Season Guide",            href: "/tick-season-long-island",   desc: "When each species is active and when to schedule treatment." },
  { icon: BookOpen,      title: "Tick Control Blog",            href: "/blog",                      desc: "Practical guides for Long Island homeowners on tick prevention." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div className="max-w-xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-400 text-xs font-bold text-white">P</span>
                <span className="text-sm font-semibold text-white">
                  By <span className="text-brand-200">Pestify Pest Control</span>
                </span>
                <span className="hidden sm:inline-block h-3.5 w-px bg-white/25" />
                <span className="hidden sm:flex items-center gap-1 text-xs text-brand-300">
                  <MapPin className="h-3 w-3" />
                  Port Jefferson Station, NY
                </span>
              </div>

              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-tight">
                Long Island Tick Control &amp;{" "}
                <span className="text-brand-300">Yard Protection</span>
              </h1>

              <p className="mt-5 text-lg text-brand-100 leading-relaxed max-w-lg">
                Seasonal tick and mosquito treatments for Suffolk and Nassau County homes, powered by Pestify Pest Control. Learn about local tick activity, prevention, and professional yard treatment options.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button asChild variant="cta" size="xl">
                  <Link href="/free-estimate">
                    Get a Free Estimate from Pestify
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="xl" className="bg-white text-brand-800 hover:bg-brand-50 font-bold">
                  <Link href="/tick-control-long-island">View Our Programs →</Link>
                </Button>
              </div>

              <div className="mt-5">
                <a
                  href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
                  className="inline-flex items-center gap-2 text-brand-200 font-semibold hover:text-white transition-colors rounded-lg border border-white/20 px-4 py-2.5 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {BUSINESS_PHONE}
                  <span className="text-brand-400 text-xs font-normal">· Call Pestify directly</span>
                </a>
              </div>

              <div className="mt-6">
                <p className="text-xs text-brand-300">
                  Serving Suffolk &amp; Nassau County homeowners · Pestify Pest Control
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-2xl">
              <LeadForm
                sourcePage="/"
                heading="Get a Free Estimate"
                subheading="Pestify Pest Control · No obligation · Long Island"
                compact={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <section className="border-b border-gray-100 bg-white py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {trustBadges.map(({ icon: Icon, label, sub, green }) => (
              <div key={label} className="flex items-center gap-3">
                <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ${green ? "bg-green-50" : "bg-brand-50"}`}>
                  <Icon className={`h-5 w-5 ${green ? "text-green-600" : "text-brand-600"}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TICK ACTIVITY MAP ── */}
      <TickActivityMap />

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">Professional Tick Control</p>
            <h2 className="text-3xl font-extrabold text-gray-900">
              Yard Protection for Long Island Homeowners
            </h2>
            <p className="mt-2 text-gray-500">
              {BUSINESS_NAME} — Licensed tick control specialists serving Suffolk &amp; Nassau County
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <Link key={s.title} href={s.href}>
                <Card className="h-full hover:shadow-md hover:border-brand-200 transition-all cursor-pointer group">
                  <CardContent className="pt-6">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl mb-4 transition-colors ${s.green ? "bg-green-50 group-hover:bg-green-100" : "bg-brand-50 group-hover:bg-brand-100"}`}>
                      <s.icon className={`h-5 w-5 ${s.green ? "text-green-600" : "text-brand-600"}`} />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{s.title}</h3>
                    <p className="text-sm text-gray-500">{s.desc}</p>
                    <p className="mt-3 text-sm font-semibold text-brand-600 flex items-center gap-1">
                      Learn more <ArrowRight className="h-3 w-3" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="cta" size="lg">
              <Link href="/free-estimate">Get a Free Estimate from Pestify →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── ABOUT THIS SITE ── */}
      <section className="py-14 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-sm font-semibold text-brand-600 uppercase tracking-widest mb-2">About This Site</p>
            <h2 className="text-3xl font-extrabold text-gray-900">Local Tick Control Powered by Pestify</h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              LongIslandTick.com is powered by Pestify Pest Control, a locally owned Long Island pest control company serving Suffolk County, Nassau County, and the Hamptons. This site helps homeowners understand local tick activity, prevention, and professional yard treatment options.
            </p>
            <Link href="/about-pestify" className="inline-block mt-4 text-sm font-semibold text-brand-600 hover:underline">
              Learn more about Pestify →
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutCards.map(({ icon: Icon, title, desc, green }) => (
              <div
                key={title}
                className={`rounded-xl border bg-white p-6 hover:shadow-sm transition-all ${green ? "border-green-100 hover:border-green-200" : "border-gray-200 hover:border-brand-200"}`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-4 ${green ? "bg-green-50" : "bg-brand-50"}`}>
                  <Icon className={`h-5 w-5 ${green ? "text-green-600" : "text-brand-600"}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY LONG ISLAND ── */}
      <section className="py-16 bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Why Long Island Has Significant Tick Pressure
            </h2>
            <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
              Long Island&apos;s wooded suburbs, active deer populations, coastal humidity, and extended seasons create conditions that support high tick activity across the region.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {whyLI.map((item) => (
              <div
                key={item.title}
                className={`rounded-xl border bg-white p-6 hover:shadow-sm transition-all ${item.green ? "border-green-100 hover:border-green-200" : "border-gray-200 hover:border-brand-200"}`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg mb-4 ${item.green ? "bg-green-50" : "bg-brand-50"}`}>
                  <item.icon className={`h-5 w-5 ${item.green ? "text-green-600" : "text-brand-600"}`} />
                </div>
                <h3 className="font-bold text-gray-900 mb-2 text-sm">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild variant="outline">
              <Link href="/tick-control-long-island">Learn About Tick Control on Long Island →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── SEASONAL CALENDAR ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Long Island Tick Activity Calendar
            </h2>
            <p className="mt-2 text-gray-500">
              Understanding when each species peaks helps you time treatments correctly.
            </p>
          </div>
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
            {seasonCalendar.map((s) => (
              <div key={s.period} className="rounded-xl border border-gray-200 p-4 text-center bg-white hover:shadow-sm transition-shadow">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-1">{s.period}</p>
                <p className="font-bold text-gray-900 text-sm mb-2">{s.label}</p>
                <span className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${riskColors[s.activity]}`}>
                  {s.activity}
                </span>
                <p className="text-xs text-gray-400 leading-relaxed">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-gray-400">
            Activity estimates based on typical Long Island tick patterns. Actual conditions vary by location and weather.
          </p>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/tick-season-long-island">Full Tick Season Guide →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── LEARN ── */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Long Island Tick Education Center
            </h2>
            <p className="mt-2 text-gray-500 max-w-xl mx-auto">
              Understand the specific tick species, disease risks, and seasonal patterns affecting your property.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {learnLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                <Card className="h-full hover:shadow-md hover:border-brand-200 transition-all cursor-pointer">
                  <CardContent className="pt-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 mb-4">
                      <item.icon className="h-5 w-5 text-brand-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                    <p className="mt-4 text-sm font-semibold text-brand-600 flex items-center gap-1">
                      Read more <ArrowRight className="h-3 w-3" />
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COUNTY COVERAGE ── */}
      <section className="py-14 bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white">Long Island Service Area</h2>
            <p className="text-gray-400 mt-2">{BUSINESS_NAME} serves all of Suffolk and Nassau County.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                county: "Suffolk County",
                accent: "border-brand-500",
                dot:    "bg-brand-500",
                tag:    "Eastern LI",
                href:   "/tick-spraying-suffolk-county",
                notes:  ["North Shore wooded properties", "East End deer tick pressure", "South Shore neighborhoods", "Extended tick season in wooded areas"],
                towns:  ["Smithtown","Huntington","Stony Brook","Port Jefferson","Setauket","Northport","Kings Park","Commack","Hauppauge","Riverhead","Southampton","East Hampton"],
              },
              {
                county: "Nassau County",
                accent: "border-green-500",
                dot:    "bg-green-500",
                tag:    "Western LI",
                href:   "/tick-spraying-nassau-county",
                notes:  ["Oyster Bay wooded communities", "Suburban lot tick pressure", "South Shore neighborhoods", "Active season April through October"],
                towns:  ["Massapequa","Garden City","Oyster Bay","Plainview","Syosset","Merrick","Wantagh","Manhasset","Great Neck","Rockville Centre"],
              },
            ].map((c) => (
              <div key={c.county} className={`rounded-2xl border-2 ${c.accent} bg-gray-800 overflow-hidden`}>
                <div className="px-5 py-4 border-b border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-3 w-3 rounded-full ${c.dot}`} />
                    <h3 className="font-extrabold text-white">{c.county}</h3>
                  </div>
                  <span className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full">{c.tag}</span>
                </div>
                <div className="p-5">
                  <ul className="space-y-1.5 mb-4">
                    {c.notes.map((n) => (
                      <li key={n} className="flex items-start gap-2 text-xs text-gray-300">
                        <CheckCircle className="h-3.5 w-3.5 text-green-400 flex-shrink-0 mt-0.5" />
                        {n}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {c.towns.map((t) => (
                      <span key={t} className="text-xs text-gray-400 bg-gray-700 px-2 py-0.5 rounded-full">{t}</span>
                    ))}
                  </div>
                  <Link href={c.href} className="block text-center rounded-lg bg-brand-600 text-white text-sm font-semibold py-2 hover:bg-brand-700 transition-colors">
                    {c.county} Tick Control →
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-gray-800 border border-gray-700 px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-300">Don&apos;t see your town? Pestify serves all of Long Island.</p>
            <Button asChild variant="cta" size="sm">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* ── LOCAL TRUST ── */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Local Tick Control Powered by Pestify
            </h2>
            <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
              LongIslandTick.com is powered by Pestify Pest Control, a locally owned Long Island pest control company serving Suffolk County, Nassau County, and the Hamptons. This site is designed to help homeowners understand tick activity, prevention, and professional yard treatment options.
            </p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {trustCards.map(({ icon: Icon, label, sub, green }) => (
              <div key={label} className={`rounded-xl border bg-white p-5 text-center hover:shadow-sm transition-all ${green ? "border-green-100 hover:border-green-200" : "border-gray-200 hover:border-brand-200"}`}>
                <div className={`flex h-10 w-10 items-center justify-center rounded-full mx-auto mb-3 ${green ? "bg-green-50" : "bg-brand-50"}`}>
                  <Icon className={`h-5 w-5 ${green ? "text-green-600" : "text-brand-600"}`} />
                </div>
                <p className="font-semibold text-gray-900 text-sm">{label}</p>
                <p className="text-xs text-gray-500 mt-1">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Tick Control FAQ
            </h2>
            <p className="text-gray-500 mt-2">Common questions about Long Island ticks and Pestify&apos;s services.</p>
          </div>
          <div className="space-y-4">
            {[
              { q: "When should I start tick treatment on Long Island?", a: "Early March is the ideal start time. Adult deer ticks become active as soon as temperatures stay above 40°F, which in most Long Island years means late February or early March. Starting before nymph season (May–June) provides the best protection for the highest-risk period." },
              { q: "How does Pestify's tick treatment work?", a: "Pestify uses targeted barrier applications to the perimeter of your property, wooded edges, leaf litter zones, and brush — the areas where ticks harbor and wait for passing hosts. Treatments reduce tick populations in and around your usable yard space." },
              { q: "How long does a tick treatment last?", a: "A single application typically provides 3–4 weeks of residual protection. For sustained season-long protection, a scheduled program of multiple applications through the spring, summer, and fall provides the most consistent results." },
              { q: "Are tick treatments safe for kids and pets?", a: "Pestify uses products that are registered and approved by the EPA and New York State DEC. We follow all label requirements for re-entry intervals and application methods. Most properties are safe for kids and pets to re-enter the same day after the application has dried." },
              { q: "Does Pestify serve my town?", a: "Pestify serves all of Suffolk County and Nassau County, Long Island. If you're not sure whether your specific town is covered, call us directly at (631) 681-5581 and we'll confirm." },
              { q: "What's the difference between deer tick and lone star tick risk?", a: "Deer ticks (blacklegged ticks) are the primary Lyme disease carrier on Long Island and are active nearly year-round in wooded areas. Lone star ticks are more aggressive biters but peak July–August and carry different diseases (ehrlichiosis, STARI). Both require different levels of habitat management." },
            ].map((faq) => (
              <div key={faq.q} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-2">{faq.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/blog" className="text-sm font-semibold text-brand-600 hover:underline">
              Read more tick control guides on the blog →
            </Link>
          </div>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="py-16 bg-brand-900">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 text-center">
          <p className="text-sm font-semibold text-brand-300 uppercase tracking-widest mb-2">Free · No Obligation</p>
          <h2 className="text-3xl font-extrabold text-white">
            Ready to Protect Your Yard?
          </h2>
          <p className="mt-3 text-brand-200 text-lg leading-relaxed">
            Request a free estimate from Pestify Pest Control. We&apos;ll assess your property and recommend the right tick control program for your conditions.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild variant="cta" size="xl">
              <Link href="/free-estimate">Get a Free Estimate from Pestify →</Link>
            </Button>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-xl border-2 border-white/30 px-8 py-4 text-lg font-bold text-white hover:bg-white/10 transition-colors"
            >
              <Phone className="h-5 w-5" />
              {BUSINESS_PHONE}
            </a>
          </div>
          <p className="mt-4 text-xs text-brand-400">
            By Pestify Pest Control · Licensed &amp; Insured · Port Jefferson Station, NY
          </p>
        </div>
      </section>
    </>
  );
}
