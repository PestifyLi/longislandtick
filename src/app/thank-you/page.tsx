import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Request Received | LongIslandTick.com",
  description: "Your tick control estimate request has been received. Pestify Pest Control will follow up shortly.",
  robots: { index: false, follow: false },
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="mx-auto max-w-xl px-4 py-16 text-center">
        <CheckCircle className="mx-auto mb-4 h-16 w-16 text-green-500" />
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Request Received!</h1>
        <p className="text-gray-600 text-lg mb-6">
          Thank you. A Pestify Pest Control specialist will follow up within one business day to discuss tick control for your property.
        </p>
        <div className="rounded-xl border border-brand-100 bg-brand-50 p-5 mb-8">
          <p className="text-sm text-brand-700 font-medium mb-2">Need to reach us sooner?</p>
          <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="inline-flex items-center gap-2 font-bold text-brand-600 hover:text-brand-700 text-lg">
            <Phone className="h-5 w-5" />
            {BUSINESS_PHONE}
          </a>
          <p className="text-xs text-brand-500 mt-1">Mon–Fri 8am–6pm · Sat 9am–3pm</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button asChild variant="outline">
            <Link href="/lyme-disease-long-island"><ArrowRight className="h-4 w-4 mr-1" />Lyme Disease Info</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tick-season-long-island"><ArrowRight className="h-4 w-4 mr-1" />Tick Season Guide</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/"><ArrowRight className="h-4 w-4 mr-1" />Back to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
