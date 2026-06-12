import type { Metadata } from "next";
import { LeadForm } from "@/components/forms/LeadForm";
import { Phone, Mail, MapPin, Clock, Shield, CheckCircle } from "lucide-react";
import { BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_LOCATION, BUSINESS_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Get a Free Tick Control Estimate | Pestify Pest Control | LongIslandTick.com",
  description:
    "Request a free tick control estimate from Pestify Pest Control. Serving Suffolk and Nassau County homeowners throughout Long Island. Licensed, insured, and locally owned.",
  alternates: { canonical: "https://longislandtick.com/free-estimate" },
};

export default function GetEstimatePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-brand-800 text-white py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold sm:text-4xl mb-3">
            Get a Free Tick Control Estimate
          </h1>
          <p className="text-brand-200 text-lg max-w-xl mx-auto">
            Tell us about your property. A Pestify specialist will follow up to schedule your free inspection and estimate.
          </p>
          <p className="mt-3 text-sm text-brand-400">
            Powered by {BUSINESS_NAME} · Port Jefferson Station, NY · Serving Long Island
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
              <LeadForm
                sourcePage="/free-estimate"
                heading="Request Your Free Estimate"
                subheading="We typically follow up within one business day."
              />
            </div>
          </div>

          {/* Info sidebar */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4">Contact Pestify Directly</h3>
              <div className="space-y-4">
                <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="flex items-center gap-3 text-brand-600 hover:text-brand-700 font-semibold">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-50">
                    <Phone className="h-4 w-4 text-brand-600" />
                  </div>
                  {BUSINESS_PHONE}
                </a>
                <a href={`mailto:${BUSINESS_EMAIL}`} className="flex items-center gap-3 text-gray-600 hover:text-brand-600">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                    <Mail className="h-4 w-4 text-gray-500" />
                  </div>
                  {BUSINESS_EMAIL}
                </a>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                    <MapPin className="h-4 w-4 text-gray-500" />
                  </div>
                  {BUSINESS_LOCATION}
                </div>
                <div className="flex items-center gap-3 text-gray-600">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-50">
                    <Clock className="h-4 w-4 text-gray-500" />
                  </div>
                  <div className="text-sm">
                    <p>Mon–Fri: 8am–6pm</p>
                    <p>Sat: 9am–3pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="font-bold text-gray-900 mb-4">Why Choose Pestify</h3>
              <ul className="space-y-3">
                {[
                  "Locally owned — Port Jefferson Station, NY",
                  "Licensed and insured in New York State",
                  "Tick control specialists for Long Island",
                  "Serving Suffolk and Nassau County",
                  "Fast scheduling available",
                  "Residential and commercial service",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-brand-50 border border-brand-100 p-5">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="h-5 w-5 text-brand-600" />
                <p className="font-semibold text-brand-900 text-sm">Licensed &amp; Insured</p>
              </div>
              <p className="text-xs text-brand-700">
                Pestify Pest Control is fully licensed and insured for pest control services in New York State. We serve homeowners and businesses throughout Suffolk and Nassau County.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
