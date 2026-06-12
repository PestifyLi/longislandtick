import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Shield, MapPin, Phone, Award, Users, Leaf, Clock } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_LOCATION, BUSINESS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Pestify Pest Control | Long Island Tick Specialists | LongIslandTick.com",
  description:
    "Learn about Pestify Pest Control — Long Island's locally owned tick and mosquito control specialists. Licensed, insured, and based in Port Jefferson Station, NY. Serving Suffolk and Nassau County.",
  alternates: { canonical: "https://longislandtick.com/about-pestify" },
};

export default function AboutPestifyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-900 via-brand-800 to-brand-700 py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm text-brand-200 mb-5">
                <MapPin className="h-4 w-4" />
                Port Jefferson Station, Long Island
              </div>
              <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl mb-5">
                About Pestify Pest Control
              </h1>
              <p className="text-lg text-brand-100 leading-relaxed mb-6">
                Pestify is a locally owned pest control company serving Long Island homeowners and businesses. We built LongIslandTick.com to be the most useful tick and Lyme disease resource on Long Island — because better-educated homeowners make better decisions about protecting their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild variant="cta" size="xl">
                  <Link href="/free-estimate">Get a Free Estimate</Link>
                </Button>
                <Button asChild size="xl" className="bg-white/10 border border-white/30 text-white hover:bg-white/20">
                  <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    {BUSINESS_PHONE}
                  </a>
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Shield className="h-6 w-6 text-brand-300" />, label: "Licensed & Insured",       desc: "NYS licensed pest control" },
                { icon: <MapPin className="h-6 w-6 text-brand-300" />,  label: "Locally Owned",            desc: "Port Jefferson Station, NY" },
                { icon: <Users className="h-6 w-6 text-brand-300" />,   label: "LI Tick Specialists",      desc: "Long Island tick focus" },
                { icon: <Clock className="h-6 w-6 text-brand-300" />,   label: "Fast Scheduling",          desc: "Available throughout season" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl bg-white/10 border border-white/20 p-4">
                  <div className="mb-2">{item.icon}</div>
                  <p className="font-bold text-white text-sm">{item.label}</p>
                  <p className="text-xs text-brand-300 mt-0.5">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Who We Are</h2>
          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Pestify Pest Control is a Long Island-based pest control company. We are locally owned and operated out of Port Jefferson Station in Suffolk County, and we specialize in protecting Long Island homeowners from tick and mosquito pressure throughout the season.
            </p>
            <p>
              Long Island is one of the highest-risk areas in the country for tick-borne disease. The combination of large deer populations, wooded North Shore terrain, suburban development adjacent to natural areas, and a climate that allows year-round tick activity creates conditions that require a different approach than most national companies offer.
            </p>
            <p>
              We built LongIslandTick.com because we believe homeowners deserve access to accurate, local information about tick activity and Lyme disease risk — not just generic national content. When you understand why your specific neighborhood has higher pressure, what species are active, and what environmental factors matter, you make better decisions about protecting your family.
            </p>
            <p>
              Pestify powers the professional treatment side of that equation. When you&apos;re ready to act on what you&apos;ve learned, we&apos;re the team that shows up.
            </p>
          </div>
        </div>
      </section>

      {/* Why Pestify */}
      <section className="py-14 bg-gray-50">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-10 text-center">Why Homeowners Choose Pestify</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: <MapPin className="h-6 w-6 text-brand-600" />, title: "We Know Long Island", desc: "We live and work here. We know the difference between North Shore deer tick pressure and South Shore lone star habitat. Your property gets treated with local knowledge." },
              { icon: <Shield className="h-6 w-6 text-brand-600" />, title: "Licensed & Fully Insured", desc: "Pestify holds all required New York State pest control licenses and carries full general liability and workers compensation insurance." },
              { icon: <Leaf className="h-6 w-6 text-brand-600" />, title: "Targeted Treatment", desc: "We focus applications where ticks actually live — wooded edges, leaf litter, shrub borders — rather than treating your entire yard indiscriminately." },
              { icon: <Users className="h-6 w-6 text-brand-600" />, title: "Property-Specific Programs", desc: "A wooded North Shore half-acre needs a different approach than a flat suburban lot. We inspect every property individually." },
              { icon: <Clock className="h-6 w-6 text-brand-600" />, title: "Responsive Scheduling", desc: "Peak season scheduling is available. We try to accommodate same-week requests and always communicate proactively about service windows." },
              { icon: <Award className="h-6 w-6 text-brand-600" />, title: "Residential & Commercial", desc: "We serve homeowners, HOAs, apartment communities, golf courses, and commercial properties throughout Long Island." },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-14 bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8">Credentials &amp; Compliance</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Licensed pest control operator — New York State DEC",
              "General liability insurance",
              "Workers compensation coverage",
              "Applicator training and certification",
              "Products registered and approved by EPA and NYS",
              "Compliant with all local and state pesticide regulations",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About LongIslandTick */}
      <section className="py-14 bg-brand-50 border-y border-brand-100">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 mb-4">About LongIslandTick.com</h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            LongIslandTick.com is a Long Island tick control and Lyme disease information resource built and maintained by Pestify. Our goal is to provide Long Island homeowners with accurate, locally relevant information about tick activity, Lyme disease risk, seasonal patterns, and prevention — and to connect them with professional treatment services when they need it.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The site includes seasonal activity guides, tick species identification, Lyme disease education, county-level service information, and an estimate request form. All content is produced to inform, not to alarm — and every page is honest about the limits of what we know.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-brand-900">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-3">Ready to Get Started?</h2>
          <p className="text-brand-200 mb-6 text-lg">
            Request a free estimate from Pestify. We&apos;ll assess your property and recommend the right tick control program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="cta" size="xl">
              <Link href="/free-estimate">Get a Free Estimate →</Link>
            </Button>
            <Button asChild size="xl" className="bg-white/10 border border-white/30 text-white hover:bg-white/20">
              <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}>
                <Phone className="h-5 w-5 mr-2" />
                {BUSINESS_PHONE}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
