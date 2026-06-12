import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Thermometer, Droplets } from "lucide-react";
import { createServiceClient } from "@/lib/supabase/server";
import type { TickLevel } from "@/app/api/cron/tick-activity/route";

// ---------------------------------------------------------------------------
// Static fallback — used when Supabase is not configured or query fails.
// Values represent typical mid-season (May–June) Long Island conditions.
// ---------------------------------------------------------------------------
const FALLBACK_REGIONS: RegionData[] = [
  {
    id:          "north-shore",
    label:       "North Shore",
    tick_level:  "high",
    tick_score:  7.2,
    temperature: "—",
    humidity:    "—",
    factors:     ["Dense wooded corridors and deer paths", "Leaf litter in wooded backyards", "High deer activity through residential areas"],
    updated_at:  null,
    href:        "/tick-spraying-suffolk-county",
    towns:       ["Smithtown","Huntington","Northport","Stony Brook","Port Jefferson","Setauket"],
  },
  {
    id:          "east-end",
    label:       "East End / Hamptons",
    tick_level:  "very-high",
    tick_score:  9.1,
    temperature: "—",
    humidity:    "—",
    factors:     ["Among the highest Lyme disease rates in NY State", "Large white-tailed deer populations throughout", "Mix of wooded, grassy, and maritime habitats"],
    updated_at:  null,
    href:        "/tick-control-long-island",
    towns:       ["Southampton","East Hampton","Bridgehampton","Sag Harbor","Montauk","Amagansett"],
  },
  {
    id:          "central-suffolk",
    label:       "Central Suffolk",
    tick_level:  "high",
    tick_score:  6.9,
    temperature: "—",
    humidity:    "—",
    factors:     ["Suburban lots adjacent to pine barrens and preserves", "Deer movement through neighborhoods", "Consistent deer tick pressure spring through fall"],
    updated_at:  null,
    href:        "/tick-spraying-suffolk-county",
    towns:       ["Commack","Hauppauge","Brentwood","Islip","Bay Shore","Sayville"],
  },
  {
    id:          "south-shore",
    label:       "South Shore",
    tick_level:  "moderate",
    tick_score:  4.8,
    temperature: "—",
    humidity:    "—",
    factors:     ["Open and coastal habitats reduce wooded tick zones", "Tick activity near preserved land and greenways", "Dog tick pressure in grassy coastal areas"],
    updated_at:  null,
    href:        "/tick-spraying-suffolk-county",
    towns:       ["Babylon","West Islip","Massapequa Park","Freeport","Wantagh","Seaford"],
  },
  {
    id:          "north-fork",
    label:       "North Fork",
    tick_level:  "high",
    tick_score:  6.6,
    temperature: "—",
    humidity:    "—",
    factors:     ["Agricultural and vineyard land adjacent to wooded edges", "High deer density in rural corridors", "Mild maritime climate extends tick season"],
    updated_at:  null,
    href:        "/tick-control-long-island",
    towns:       ["Riverhead","Southold","Cutchogue","Mattituck","Greenport","Orient"],
  },
  {
    id:          "nassau",
    label:       "Nassau County",
    tick_level:  "moderate",
    tick_score:  4.5,
    temperature: "—",
    humidity:    "—",
    factors:     ["Oyster Bay and north shore communities have highest pressure", "Tick pressure concentrated near greenways and preserves", "Suburban lot sizes limit wooded harborage in many areas"],
    updated_at:  null,
    href:        "/tick-spraying-nassau-county",
    towns:       ["Oyster Bay","Plainview","Syosset","Manhasset","Great Neck","Garden City"],
  },
];

// Per-region static metadata (label, href, towns) that never comes from DB
const REGION_META: Record<string, { label: string; href: string; towns: string[] }> = {
  "north-shore":     { label: "North Shore",          href: "/tick-spraying-suffolk-county", towns: ["Smithtown","Huntington","Northport","Stony Brook","Port Jefferson","Setauket"] },
  "east-end":        { label: "East End / Hamptons",  href: "/tick-control-long-island",     towns: ["Southampton","East Hampton","Bridgehampton","Sag Harbor","Montauk","Amagansett"] },
  "central-suffolk": { label: "Central Suffolk",      href: "/tick-spraying-suffolk-county", towns: ["Commack","Hauppauge","Brentwood","Islip","Bay Shore","Sayville"] },
  "south-shore":     { label: "South Shore",          href: "/tick-spraying-suffolk-county", towns: ["Babylon","West Islip","Massapequa Park","Freeport","Wantagh","Seaford"] },
  "north-fork":      { label: "North Fork",           href: "/tick-control-long-island",     towns: ["Riverhead","Southold","Cutchogue","Mattituck","Greenport","Orient"] },
  "nassau":          { label: "Nassau County",        href: "/tick-spraying-nassau-county",  towns: ["Oyster Bay","Plainview","Syosset","Manhasset","Great Neck","Garden City"] },
};

const REGION_ORDER = ["north-shore","east-end","central-suffolk","south-shore","north-fork","nassau"];

type RegionData = {
  id: string;
  label: string;
  tick_level: TickLevel;
  tick_score: number;
  temperature: string;
  humidity: string;
  factors: string[];
  updated_at: string | null;
  href: string;
  towns: string[];
};

const LEVEL_CONFIG: Record<TickLevel, {
  label: string;
  badgeClass: string;
  barColor: string;
  barWidth: string;
  accentBorder: string;
  dot: string;
}> = {
  "low":       { label: "Low",       badgeClass: "text-green-700 bg-green-50 border-green-200",   barColor: "bg-green-500",  barWidth: "25%",  accentBorder: "border-green-300",  dot: "bg-green-500"  },
  "moderate":  { label: "Moderate",  badgeClass: "text-yellow-700 bg-yellow-50 border-yellow-200", barColor: "bg-yellow-500", barWidth: "55%",  accentBorder: "border-yellow-300", dot: "bg-yellow-500" },
  "high":      { label: "High",      badgeClass: "text-orange-700 bg-orange-50 border-orange-200", barColor: "bg-orange-500", barWidth: "75%",  accentBorder: "border-orange-300", dot: "bg-orange-500" },
  "very-high": { label: "Very High", badgeClass: "text-red-700 bg-red-50 border-red-200",          barColor: "bg-red-500",    barWidth: "95%",  accentBorder: "border-red-400",    dot: "bg-red-500"    },
};

async function getRegions(): Promise<{ regions: RegionData[]; lastUpdated: string | null; fromDB: boolean }> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseKey) {
    return { regions: FALLBACK_REGIONS, lastUpdated: null, fromDB: false };
  }

  try {
    const supabase = await createServiceClient();
    const { data, error } = await supabase.from("tick_activity").select("*");

    if (error || !data || data.length === 0) {
      return { regions: FALLBACK_REGIONS, lastUpdated: null, fromDB: false };
    }

    const dbMap = new Map(
      (data as Array<Record<string, unknown>>).map((row) => [row.id as string, row])
    );

    const regions = REGION_ORDER.map((id) => {
      const row = dbMap.get(id);
      const meta = REGION_META[id];
      const fallback = FALLBACK_REGIONS.find((r) => r.id === id)!;

      if (!row) return fallback;

      return {
        id,
        label:       meta.label,
        tick_level:  (row.tick_level as TickLevel) ?? fallback.tick_level,
        tick_score:  (row.tick_score as number) ?? fallback.tick_score,
        temperature: (row.temperature as string) ?? "—",
        humidity:    (row.humidity as string) ?? "—",
        factors:     (row.factors as string[]) ?? fallback.factors,
        updated_at:  (row.updated_at as string) ?? null,
        href:        meta.href,
        towns:       meta.towns,
      } satisfies RegionData;
    });

    const latestUpdate = regions
      .map((r) => r.updated_at)
      .filter(Boolean)
      .sort()
      .at(-1) ?? null;

    return { regions, lastUpdated: latestUpdate, fromDB: true };
  } catch {
    return { regions: FALLBACK_REGIONS, lastUpdated: null, fromDB: false };
  }
}

// Runs at request time on the server — Next.js revalidates every 6 hours
// so each server render always has a fresh read from Supabase.
export const revalidate = 21600; // 6 hours

export async function TickActivityMap() {
  const { regions, lastUpdated, fromDB } = await getRegions();

  const dateLabel = lastUpdated
    ? new Date(lastUpdated).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" })
    : new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/New_York" });

  return (
    <section className="py-16 bg-gray-50 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <span className="inline-block rounded-full bg-green-100 border border-green-200 px-3 py-1 text-xs font-semibold text-green-700 uppercase tracking-widest mb-3">
            Seasonal Activity Index · Updated Daily
          </span>
          <h2 className="text-3xl font-extrabold text-gray-900">
            Long Island Tick Activity Map
          </h2>
          <p className="mt-3 text-gray-500 max-w-2xl mx-auto">
            Explore estimated tick pressure across Suffolk County, Nassau County, and the East End based on seasonal activity, habitat, deer activity, and regional property conditions.
          </p>
          <div className="mt-3 flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className={`inline-block h-2 w-2 rounded-full ${fromDB ? "bg-green-400" : "bg-gray-300"}`} />
            <span>
              {fromDB ? "Estimated tick pressure" : "Seasonal baseline estimate"} · Updated {dateLabel}
            </span>
          </div>
        </div>

        {/* Region cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => {
            const cfg = LEVEL_CONFIG[region.tick_level];
            return (
              <div
                key={region.id}
                className={`rounded-2xl border-2 ${cfg.accentBorder} bg-white shadow-sm overflow-hidden flex flex-col`}
              >
                {/* Card header */}
                <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full flex-shrink-0 ${cfg.dot}`} />
                    <h3 className="font-extrabold text-gray-900">{region.label}</h3>
                  </div>
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-bold ${cfg.badgeClass}`}>
                    {cfg.label}
                  </span>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  {/* Activity bar */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Estimated Tick Pressure</span>
                      {(region.temperature !== "—" || region.humidity !== "—") && (
                        <span className="flex items-center gap-2 text-xs text-gray-400">
                          {region.temperature !== "—" && (
                            <span className="flex items-center gap-0.5"><Thermometer className="h-3 w-3" />{region.temperature}</span>
                          )}
                          {region.humidity !== "—" && (
                            <span className="flex items-center gap-0.5"><Droplets className="h-3 w-3" />{region.humidity}</span>
                          )}
                        </span>
                      )}
                    </div>
                    <div className="h-2 w-full rounded-full bg-gray-100 overflow-hidden">
                      <div className={`h-2 rounded-full ${cfg.barColor}`} style={{ width: cfg.barWidth }} />
                    </div>
                  </div>

                  {/* Pressure factors */}
                  <div className="mb-3 flex-1">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">Pressure Factors</p>
                    <ul className="space-y-1.5">
                      {region.factors.slice(0, 3).map((f) => (
                        <li key={f} className="flex items-start gap-2 text-xs text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500 flex-shrink-0" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Town chips */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-1">
                      {region.towns.map((t) => (
                        <span key={t} className="rounded-full bg-green-50 border border-green-100 px-2 py-0.5 text-xs text-green-700">{t}</span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href={region.href}
                    className="flex items-center justify-center gap-1 rounded-lg bg-brand-600 text-white text-xs font-semibold py-2 hover:bg-brand-700 transition-colors"
                  >
                    <MapPin className="h-3 w-3" />
                    View {region.label} Tick Control
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTAs */}
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild variant="outline">
            <Link href="/tick-season-long-island">Tick Season Guide →</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/tick-control-long-island">Long Island Tick Control →</Link>
          </Button>
          <Button asChild variant="cta">
            <Link href="/free-estimate">Get a Free Estimate →</Link>
          </Button>
        </div>

        {/* Disclaimer */}
        <p className="mt-6 text-center text-xs text-gray-400 max-w-2xl mx-auto">
          This activity map is an educational estimate, not a real-time scientific measurement or government surveillance system.
          Scores are calculated daily using seasonality, temperature, humidity, habitat type, deer pressure, and regional baseline risk.
          Actual tick activity can vary by property, weather, vegetation, and wildlife activity.
          For informational purposes only.
        </p>
      </div>
    </section>
  );
}
