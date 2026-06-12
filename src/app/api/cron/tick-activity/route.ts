import { NextResponse } from "next/server";
import { createServiceClient } from "@/lib/supabase/server";

// Open-Meteo coordinates — representative points for each region
// Free API, no key required
const REGION_COORDS: Record<string, { lat: number; lon: number }> = {
  "north-shore":     { lat: 40.8868, lon: -73.2040 }, // Smithtown area
  "east-end":        { lat: 40.9176, lon: -72.3170 }, // Bridgehampton area
  "central-suffolk": { lat: 40.7970, lon: -73.2048 }, // Hauppauge area
  "south-shore":     { lat: 40.7282, lon: -73.3212 }, // Babylon area
  "north-fork":      { lat: 41.0020, lon: -72.4960 }, // Southold area
  "nassau":          { lat: 40.7335, lon: -73.5975 }, // Nassau center
};

// Habitat multiplier — regions with denser wooded/deer pressure score higher
const HABITAT_MULTIPLIER: Record<string, number> = {
  "north-shore":     1.20,
  "east-end":        1.35,
  "central-suffolk": 1.15,
  "south-shore":     0.90,
  "north-fork":      1.10,
  "nassau":          0.85,
};

export type TickLevel = "low" | "moderate" | "high" | "very-high";

/**
 * Calculate a 0–10 tick activity score from weather + seasonality.
 * Returns a score and a derived level label.
 *
 * Inputs (all factual/scientific):
 *   - month: calendar month (1–12)
 *   - tempC: current temperature in Celsius
 *   - humidity: relative humidity 0–100
 *   - habitat: per-region multiplier (1.0 = baseline)
 */
function calcTickScore(
  month: number,
  tempC: number,
  humidity: number,
  habitat: number
): { score: number; level: TickLevel; factors: string[] } {
  let score = 0;
  const factors: string[] = [];

  // --- Seasonality (0–4 pts) ---
  // Deer tick peaks: April–June (nymph), September–October (adult)
  // Active but lower: March, July–August, November
  // Dormant: December–February (some risk on warm days)
  if ([5, 6].includes(month)) {
    score += 4;
    factors.push("Peak nymph season (May–June)");
  } else if ([4, 9, 10].includes(month)) {
    score += 3;
    factors.push(month <= 6 ? "Early spring tick emergence" : "Adult deer tick fall peak");
  } else if ([3, 7, 8, 11].includes(month)) {
    score += 2;
    factors.push(month === 11 ? "Late season — deer ticks still active above 40°F" : "Active season, below peak");
  } else {
    score += 0.5;
    factors.push("Winter — low activity, deer ticks possible on warm days");
  }

  // --- Temperature (0–3 pts) ---
  // Deer ticks: active 4°C–25°C (40°F–77°F), most active 10°C–20°C
  if (tempC >= 10 && tempC <= 20) {
    score += 3;
    factors.push(`Temperature ${Math.round(tempC * 9/5 + 32)}°F — optimal tick activity range`);
  } else if ((tempC >= 4 && tempC < 10) || (tempC > 20 && tempC <= 28)) {
    score += 2;
    factors.push(`Temperature ${Math.round(tempC * 9/5 + 32)}°F — suitable for tick activity`);
  } else if (tempC > 28) {
    score += 1;
    factors.push(`Temperature ${Math.round(tempC * 9/5 + 32)}°F — hot; reduced tick questing`);
  } else {
    factors.push(`Temperature ${Math.round(tempC * 9/5 + 32)}°F — below active threshold`);
  }

  // --- Humidity (0–2 pts) ---
  // Ticks desiccate in low humidity; high humidity = more active questing
  if (humidity >= 80) {
    score += 2;
    factors.push(`Humidity ${Math.round(humidity)}% — high humidity favors tick activity`);
  } else if (humidity >= 60) {
    score += 1;
    factors.push(`Humidity ${Math.round(humidity)}% — moderate humidity`);
  } else {
    factors.push(`Humidity ${Math.round(humidity)}% — dry conditions reduce tick questing`);
  }

  // Apply habitat multiplier (wooded/deer pressure)
  score = score * habitat;

  // Clamp to 0–10
  score = Math.min(10, Math.max(0, score));

  let level: TickLevel;
  if (score >= 7.5)      level = "very-high";
  else if (score >= 5.0) level = "high";
  else if (score >= 2.5) level = "moderate";
  else                   level = "low";

  return { score: Math.round(score * 10) / 10, level, factors };
}

async function getWeather(lat: number, lon: number) {
  const url = [
    `https://api.open-meteo.com/v1/forecast`,
    `?latitude=${lat}&longitude=${lon}`,
    `&current=temperature_2m,relative_humidity_2m`,
    `&timezone=America%2FNew_York`,
    `&forecast_days=1`,
  ].join("");
  const res = await fetch(url, { cache: "no-store" });
  if (!res.ok) throw new Error(`Open-Meteo error ${res.status}`);
  return res.json() as Promise<{
    current: { temperature_2m: number; relative_humidity_2m: number };
  }>;
}

export async function GET(req: Request) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const now = new Date();
  const month = now.getMonth() + 1;
  const results: Record<string, unknown>[] = [];

  for (const [regionId, coords] of Object.entries(REGION_COORDS)) {
    try {
      const weather = await getWeather(coords.lat, coords.lon);
      const { temperature_2m: tempC, relative_humidity_2m: humidity } = weather.current;
      const habitat = HABITAT_MULTIPLIER[regionId] ?? 1.0;
      const { score, level, factors } = calcTickScore(month, tempC, humidity, habitat);

      results.push({
        id:          regionId,
        tick_level:  level,
        tick_score:  score,
        temperature: `${Math.round(tempC * 9/5 + 32)}°F`,
        humidity:    `${Math.round(humidity)}%`,
        factors,
        updated_at:  now.toISOString(),
      });
    } catch (err) {
      console.error(`[tick-activity] Weather fetch failed for ${regionId}:`, err);
      // Skip this region — existing Supabase row stays untouched
    }
  }

  if (results.length === 0) {
    return NextResponse.json({ error: "All weather fetches failed" }, { status: 502 });
  }

  // Supabase is optional — if not configured, log and return success
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const supabase = await createServiceClient();
      await Promise.all(
        results.map((row) =>
          supabase.from("tick_activity").upsert(row as never, { onConflict: "id" })
        )
      );
    } catch (err) {
      console.error("[tick-activity] Supabase upsert failed:", err);
      // Non-fatal — return the computed data anyway
    }
  }

  console.log(`[tick-activity] Updated ${results.length} regions at ${now.toISOString()}`);
  return NextResponse.json({ success: true, updated: results.length, regions: results });
}
