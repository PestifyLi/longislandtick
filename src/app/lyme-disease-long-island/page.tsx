import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { LeadForm } from "@/components/forms/LeadForm";
import { AlertTriangle, CheckCircle, ArrowRight, Phone, Shield, Leaf } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Lyme Disease on Long Island | Risk, Prevention & Tick Control | LongIslandTick.com",
  description:
    "Suffolk County has among the highest Lyme disease rates in New York. Learn about Lyme disease risk on Long Island, prevention strategies, and professional tick control from Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/lyme-disease-long-island" },
};

export default function LymeDiseasePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Lyme Disease on Long Island</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl mb-4">
            Lyme Disease on Long Island
          </h1>
          <p className="text-brand-200 max-w-2xl text-lg">
            Suffolk County consistently ranks among the highest Lyme disease counties in New York State. Understanding your risk is the first step to protecting your family.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lyme Disease Risk on Long Island</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyme disease is caused by the bacterium <em>Borrelia burgdorferi</em> and is transmitted to humans through the bite of infected blacklegged ticks (also called deer ticks, <em>Ixodes scapularis</em>). Long Island — and Suffolk County in particular — has some of the highest rates of Lyme disease in New York State due to the region&apos;s geography, deer populations, and climate.
                </p>
                <p>
                  New York State consistently reports more Lyme disease cases than nearly any other state in the country, and Suffolk County accounts for a significant share of those cases. The combination of large white-tailed deer populations (which host adult ticks), wooded suburban terrain on the North Shore, and a climate that allows nearly year-round tick activity makes Long Island an especially high-risk environment.
                </p>
              </div>
            </section>

            <section>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-amber-900 mb-1">Medical Disclaimer</p>
                    <p className="text-sm text-amber-800">
                      The information on this page is for educational purposes only. If you think you may have been infected with Lyme disease or another tick-borne illness, consult a licensed healthcare provider immediately. Early diagnosis and treatment are important.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How Lyme Disease Is Transmitted</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Lyme disease is transmitted when an infected blacklegged tick attaches to a person and feeds for a sufficient duration — generally 36–48 hours or more. Nymph ticks (the tiny, poppy-seed-sized juvenile stage) are the most common source of Lyme transmission on Long Island because they are difficult to see and peak activity occurs in May and June, when people spend the most time outdoors.
                </p>
                <p>
                  Not all deer tick bites result in Lyme disease — only infected ticks can transmit the bacteria, and even then, the tick generally needs to be attached long enough to transfer the pathogen. However, because ticks are difficult to find and easy to miss, prevention and prompt removal are important.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Lyme Disease Symptoms</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Early symptoms of Lyme disease can appear within 3–30 days after a tick bite. They may include:
              </p>
              <ul className="space-y-2">
                {[
                  "Expanding circular rash (erythema migrans) — often called a &ldquo;bull's-eye&rdquo; rash, though not always circular",
                  "Fatigue, chills, and fever",
                  "Headache and muscle aches",
                  "Joint pain and stiffness",
                  "Swollen lymph nodes",
                ].map((s) => (
                  <li key={s} className="flex items-start gap-2 text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: `<span class="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-500 flex-shrink-0 inline-block mr-1"></span>${s}` }} />
                ))}
              </ul>
              <p className="text-gray-500 text-sm mt-4 italic">
                Not all people with Lyme disease develop a rash. If you suspect a tick bite and develop any of these symptoms, consult a healthcare provider promptly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Preventing Lyme Disease on Long Island</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Use EPA-registered repellents (DEET, picaridin, or permethrin) when outdoors",
                  "Wear long sleeves and pants in wooded or grassy areas",
                  "Perform a full-body tick check after every outdoor activity",
                  "Shower or bathe within two hours of coming indoors",
                  "Check pets for ticks before they enter the home",
                  "Remove leaf litter and maintain lawn edges",
                  "Create a barrier between lawn and wooded areas",
                  "Consider professional tick control for your yard",
                ].map((tip) => (
                  <div key={tip} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
                    <CheckCircle className="h-4 w-4 text-brand-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">What to Do After a Tick Bite</h2>
              <div className="space-y-3">
                {[
                  { step: "Remove the tick promptly", desc: "Use fine-tipped tweezers. Grasp the tick as close to the skin as possible and pull upward with steady pressure. Do not twist or jerk." },
                  { step: "Clean the bite area", desc: "Clean the bite site with rubbing alcohol or soap and water." },
                  { step: "Save the tick if possible", desc: "Place it in a sealed bag or container. Some labs offer tick testing services." },
                  { step: "Monitor for symptoms", desc: "Watch for a rash, fever, fatigue, or muscle aches in the weeks following a bite." },
                  { step: "Contact a healthcare provider", desc: "If you develop symptoms or are concerned about Lyme disease risk, contact your doctor. Early treatment with antibiotics is effective." },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-600 text-xs font-bold text-white">{i + 1}</div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{s.step}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Tick Control</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Yard-level tick control by Pestify Pest Control is one layer of protection that can meaningfully reduce tick encounters on your property. Targeted barrier treatments reduce tick populations at property edges, wooded zones, and harborage areas where ticks are most commonly encountered.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Professional tick control does not eliminate all tick exposure — especially from deer that may carry ticks onto treated areas — but it can significantly reduce the number of ticks present in the areas where your family spends time outdoors.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild variant="cta">
                  <Link href="/free-estimate">Get a Free Estimate from Pestify →</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/tick-control-long-island">How Tick Control Works</Link>
                </Button>
              </div>
            </section>

            {/* Related */}
            <section>
              <h2 className="text-xl font-bold text-gray-900 mb-4">Related Reading</h2>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Tick Species on Long Island", href: "/tick-species-long-island" },
                  { label: "Tick Season Guide",           href: "/tick-season-long-island" },
                  { label: "Tick Control Blog",           href: "/blog" },
                  { label: "Suffolk County Service",      href: "/tick-spraying-suffolk-county" },
                  { label: "Long Island Tick Control",    href: "/tick-control-long-island" },
                  { label: "Get a Free Estimate",         href: "/free-estimate" },
                ].map((l) => (
                  <Link key={l.href} href={l.href} className="flex items-center gap-1 rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:border-brand-300 hover:text-brand-600 transition-colors">
                    {l.label} <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <LeadForm sourcePage="/lyme-disease-long-island" heading="Get a Free Estimate" subheading="Tick Control · Pestify Pest Control" compact />
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
            <div className="rounded-xl border border-green-100 bg-green-50 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Leaf className="h-5 w-5 text-green-600" />
                <p className="font-semibold text-green-900 text-sm">Locally Owned</p>
              </div>
              <p className="text-xs text-green-700">Pestify is based in Port Jefferson Station — a Long Island company that serves Long Island families.</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-5">
              <p className="font-semibold text-amber-900 text-sm mb-2">Medical Emergency?</p>
              <p className="text-xs text-amber-800">If you have symptoms of Lyme disease or another tick-borne illness, contact your healthcare provider. This site provides educational information only.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="bg-brand-900 py-12">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Reduce Tick Exposure on Your Property</h2>
          <p className="text-brand-200 mb-6">
            Pestify Pest Control provides professional tick barrier treatments for Long Island homeowners — targeting the areas where ticks shelter and reducing the chance of tick encounters in your yard.
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
    </div>
  );
}
