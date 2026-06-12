"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export function StickyMobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-gray-200 bg-white shadow-lg">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
          className="flex flex-col items-center justify-center gap-0 bg-gray-900 py-3 text-white hover:bg-gray-800 active:bg-gray-700"
        >
          <span className="flex items-center gap-1.5 text-sm font-semibold">
            <Phone className="h-3.5 w-3.5" />
            Call Pestify
          </span>
          <span className="text-[10px] text-gray-400">{BUSINESS_PHONE}</span>
        </a>
        <Link
          href="/free-estimate"
          className="flex flex-col items-center justify-center gap-0 bg-brand-600 py-3 text-white hover:bg-brand-700 active:bg-brand-800"
        >
          <span className="text-sm font-semibold">Free Estimate</span>
          <span className="text-[10px] text-brand-200">No obligation</span>
        </Link>
      </div>
    </div>
  );
}
