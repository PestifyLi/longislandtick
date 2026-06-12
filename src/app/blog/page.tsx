import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BUSINESS_PHONE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Tick Control Blog | Long Island Tick Tips & Guides | LongIslandTick.com",
  description:
    "Practical guides and educational articles about tick control, Lyme disease prevention, and protecting your Long Island property. From Pestify Pest Control.",
  alternates: { canonical: "https://longislandtick.com/blog" },
};

const articles = [
  {
    slug: "when-do-ticks-come-out-on-long-island",
    title: "When Do Ticks Come Out on Long Island?",
    excerpt:
      "Many homeowners assume ticks are only a summer problem. On Long Island, deer ticks can be active nearly any time temperatures exceed 40°F — including warm days in January. Here's what you need to know about Long Island tick activity throughout the year.",
    category: "Tick Season",
    readTime: "5 min read",
    date: "June 2025",
  },
  {
    slug: "how-to-reduce-ticks-in-your-yard",
    title: "How to Reduce Ticks in Your Yard on Long Island",
    excerpt:
      "Reducing tick populations starts with making your yard less hospitable. From mowing habits and leaf litter management to creating buffer zones and professional barrier treatments — practical steps for Long Island homeowners.",
    category: "Yard Tips",
    readTime: "6 min read",
    date: "June 2025",
  },
  {
    slug: "where-do-ticks-hide-in-long-island-yards",
    title: "Where Do Ticks Hide in Long Island Yards?",
    excerpt:
      "Ticks don't just live in deep woods. On Long Island, ticks hide in mulch beds, ornamental shrubs, leaf litter, and the transition zones between lawn and wooded edges. Knowing where they concentrate helps you protect the right areas.",
    category: "Tick Behavior",
    readTime: "4 min read",
    date: "June 2025",
  },
  {
    slug: "tick-control-for-dog-owners-long-island",
    title: "Tick Control for Dog Owners on Long Island",
    excerpt:
      "Dogs that spend time outdoors are at elevated risk for tick bites — and they can bring ticks inside the home. A combined approach of yard treatment, regular tick checks, and veterinary preventives gives dog owners on Long Island the strongest protection.",
    category: "Pets & Ticks",
    readTime: "5 min read",
    date: "June 2025",
  },
  {
    slug: "mosquito-and-tick-control-long-island",
    title: "Why Mosquito and Tick Control Go Together on Long Island",
    excerpt:
      "Mosquitoes and ticks share overlapping habitats on Long Island properties. A coordinated barrier treatment program can target both pests in a single visit — reducing the cost and complexity of protecting your yard through the full pest season.",
    category: "Pest Control",
    readTime: "5 min read",
    date: "June 2025",
  },
];

const categoryColors: Record<string, string> = {
  "Tick Season":  "bg-orange-100 text-orange-700",
  "Yard Tips":    "bg-green-100 text-green-700",
  "Tick Behavior":"bg-purple-100 text-purple-700",
  "Pets & Ticks": "bg-blue-100 text-blue-700",
  "Pest Control": "bg-brand-100 text-brand-700",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-brand-900 to-brand-700 text-white py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 mb-3 text-brand-300 text-sm">
            <Link href="/" className="hover:text-white">Home</Link>
            <ArrowRight className="h-3 w-3" />
            <span>Blog</span>
          </div>
          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl max-w-3xl mb-4">
            Tick Control Guides for Long Island Homeowners
          </h1>
          <p className="text-brand-200 max-w-2xl text-lg">
            Practical, educational articles on tick activity, Lyme disease prevention, and protecting your Long Island property — from Pestify Pest Control.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6 sm:p-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${categoryColors[article.category]}`}>
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Calendar className="h-3 w-3" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-gray-400">
                    <Clock className="h-3 w-3" />
                    {article.readTime}
                  </span>
                </div>
                <Link href={`/blog/${article.slug}`}>
                  <h2 className="text-xl font-extrabold text-gray-900 mb-3 leading-snug hover:text-brand-700 transition-colors">
                    {article.title}
                  </h2>
                </Link>
                <p className="text-gray-600 leading-relaxed text-sm mb-5">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href={`/blog/${article.slug}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-800 transition-colors"
                  >
                    Read article <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-brand-900 p-8 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Ready to Protect Your Yard?</h2>
          <p className="text-brand-200 mb-6 max-w-xl mx-auto">
            Pestify Pest Control provides professional tick and mosquito barrier treatments for Long Island homeowners. Request a free estimate today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/free-estimate"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-semibold text-brand-900 hover:bg-brand-50 transition-colors"
            >
              Request a Free Estimate →
            </Link>
            <a
              href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10 transition-colors"
            >
              Call Pestify
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <p className="w-full text-sm font-semibold text-gray-500 mb-1">Related Pages</p>
          {[
            { label: "Tick Control — Long Island", href: "/tick-control-long-island" },
            { label: "Tick Season Guide",           href: "/tick-season-long-island" },
            { label: "Tick Species on Long Island", href: "/tick-species-long-island" },
            { label: "Lyme Disease on Long Island", href: "/lyme-disease-long-island" },
            { label: "Mosquito & Tick Control",     href: "/mosquito-and-tick-control-long-island" },
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
      </div>
    </div>
  );
}

