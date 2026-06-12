import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyMobileCTA } from "@/components/layout/StickyMobileCTA";
import {
  SITE_NAME, SITE_TAGLINE, BUSINESS_PHONE, BUSINESS_EMAIL, BUSINESS_LOCATION,
} from "@/lib/constants";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://longislandtick.com"),
  title: {
    default:  `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Long Island's tick control and Lyme disease information resource. Seasonal activity estimates, prevention guides, and professional tick control for Suffolk and Nassau County. Powered by Pestify Pest Control.",
  keywords: [
    "tick control Long Island",
    "tick spraying Long Island",
    "Lyme disease Long Island",
    "tick control Suffolk County",
    "tick control Nassau County",
    "deer tick Long Island",
    "Pestify pest control",
    "Long Island tick removal",
  ],
  authors:   [{ name: SITE_NAME }],
  creator:   SITE_NAME,
  publisher: "Pestify Pest Control",
  openGraph: {
    type:        "website",
    locale:      "en_US",
    url:         "https://longislandtick.com",
    siteName:    SITE_NAME,
    title:       `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Tick activity information and professional tick control for Long Island homeowners. Powered by Pestify Pest Control.",
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: "Long Island's tick control & Lyme disease resource.",
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://longislandtick.com" },
};

export const viewport: Viewport = {
  themeColor:   "#2f55a8",
  width:        "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type":    "LocalBusiness",
  name:       "Pestify Pest Control",
  alternateName: SITE_NAME,
  url:        "https://longislandtick.com",
  telephone:  BUSINESS_PHONE,
  email:      BUSINESS_EMAIL,
  address: {
    "@type":          "PostalAddress",
    streetAddress:    "Port Jefferson Station",
    addressLocality:  "Port Jefferson Station",
    addressRegion:    "NY",
    postalCode:       "11776",
    addressCountry:   "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 40.9126, longitude: -73.0521 },
  areaServed: [
    { "@type": "AdministrativeArea", name: "Suffolk County, New York" },
    { "@type": "AdministrativeArea", name: "Nassau County, New York" },
  ],
  serviceType: ["Tick Control", "Mosquito Control", "Pest Control"],
  priceRange:  "$$",
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "08:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "15:00" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type":    "WebSite",
  name:       SITE_NAME,
  url:        "https://longislandtick.com",
  description: SITE_TAGLINE,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-screen bg-white font-sans text-gray-900 antialiased pb-[56px] md:pb-0">
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
