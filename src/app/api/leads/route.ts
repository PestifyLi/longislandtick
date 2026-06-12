import { NextRequest, NextResponse } from "next/server";

// ---------------------------------------------------------------------------
// Simple in-memory rate limiter
// Allows 3 submissions per IP per 10 minutes.
// Resets on server restart — sufficient for basic abuse prevention.
// For high-traffic deployments, replace with Redis/Upstash KV.
// ---------------------------------------------------------------------------
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_WINDOW_MS  = 10 * 60 * 1000; // 10 minutes
const RATE_MAX_HITS   = 3;

function isRateLimited(ip: string): boolean {
  const now    = Date.now();
  const entry  = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }
  if (entry.count >= RATE_MAX_HITS) return true;
  entry.count++;
  return false;
}

// Escape user input before embedding in HTML email
function esc(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Basic server-side field validation
function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function isValidPhone(s: string): boolean {
  return s.replace(/\D/g, "").length >= 10;
}

export async function POST(req: NextRequest) {
  // Rate limiting by IP
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const {
    name,
    phone,
    email,
    address,
    town,
    service_needed,
    preferred_callback_time,
    message,
    source_page,
    source_url,
    source_type,
  } = body as Record<string, string | undefined>;

  // Server-side validation
  const validationErrors: string[] = [];
  if (!name  || String(name).trim().length < 2)  validationErrors.push("Name is required.");
  if (!phone || !isValidPhone(String(phone)))      validationErrors.push("A valid phone number is required.");
  if (!email || !isValidEmail(String(email)))      validationErrors.push("A valid email address is required.");
  if (!town  || String(town).trim().length < 1)   validationErrors.push("Town is required.");

  if (validationErrors.length > 0) {
    return NextResponse.json({ error: validationErrors.join(" ") }, { status: 400 });
  }

  const timestamp = new Date().toISOString();
  const leadData  = {
    name:                    String(name).trim(),
    phone:                   String(phone).trim(),
    email:                   String(email).trim().toLowerCase(),
    address:                 address ? String(address).trim() : null,
    town:                    String(town).trim(),
    service_needed:          service_needed          ? String(service_needed).trim()          : null,
    preferred_callback_time: preferred_callback_time ? String(preferred_callback_time).trim() : null,
    message:                 message                 ? String(message).trim()                 : null,
    source_page:             source_page             ? String(source_page).trim()             : null,
    source_url:              source_url              ? String(source_url).trim()              : null,
    source_type:             source_type ?? "form",
    site:                    "longislandtick.com",
    created_at:              timestamp,
  };

  // Always log the lead to the server console as a fallback.
  // This ensures no lead is silently lost even if both services are down.
  console.log("[lead]", JSON.stringify(leadData));

  let supabaseError: string | null = null;
  let emailError:    string | null = null;

  // ---------------------------------------------------------------------------
  // Supabase — save lead to database
  // Required env vars: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY
  // Required table:    leads (see column list in leadData above)
  // ---------------------------------------------------------------------------
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (supabaseUrl && supabaseKey) {
    try {
      const { createClient } = await import("@supabase/supabase-js");
      const supabase          = createClient(supabaseUrl, supabaseKey);
      const { error }         = await supabase.from("leads").insert(leadData);
      if (error) throw new Error(error.message);
    } catch (err) {
      supabaseError = err instanceof Error ? err.message : String(err);
      console.error("[lead] Supabase insert failed:", supabaseError);
      // Continue — try email even if DB failed
    }
  }

  // ---------------------------------------------------------------------------
  // Resend — send notification email to Pestify
  // Required env vars: RESEND_API_KEY
  // Optional env vars: RESEND_FROM_EMAIL (default: onboarding@resend.dev for testing)
  //                    NOTIFICATION_EMAIL (default: info@pestifyli.com)
  // ---------------------------------------------------------------------------
  const resendKey   = process.env.RESEND_API_KEY;
  const fromEmail   = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
  const toEmail     = process.env.NOTIFICATION_EMAIL ?? "info@pestifyli.com";

  if (resendKey) {
    try {
      const { Resend } = await import("resend");
      const resend      = new Resend(resendKey);

      const { error } = await resend.emails.send({
        from:    fromEmail,
        to:      toEmail,
        replyTo: leadData.email,
        subject: `New lead — ${esc(leadData.name)} in ${esc(leadData.town)}`,
        html: `
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><style>
  body { font-family: Arial, sans-serif; color: #111; margin: 0; padding: 0; background: #f9f9f9; }
  .wrap { max-width: 560px; margin: 32px auto; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden; }
  .hdr { background: #1e3a8a; color: #fff; padding: 20px 24px; }
  .hdr h1 { margin: 0; font-size: 18px; font-weight: bold; }
  .hdr p  { margin: 4px 0 0; font-size: 13px; color: #bfdbfe; }
  .body { padding: 24px; }
  .row  { border-bottom: 1px solid #f3f4f6; padding: 10px 0; display: flex; gap: 12px; }
  .row:last-child { border-bottom: none; }
  .lbl  { font-size: 12px; font-weight: 600; color: #6b7280; text-transform: uppercase; letter-spacing: 0.05em; min-width: 120px; flex-shrink: 0; padding-top: 2px; }
  .val  { font-size: 14px; color: #111827; }
  .msg  { background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 12px; margin-top: 4px; font-size: 13px; color: #374151; white-space: pre-wrap; }
  .ftr  { background: #f3f4f6; padding: 14px 24px; font-size: 12px; color: #6b7280; }
  .btn  { display: inline-block; margin-top: 16px; background: #ea580c; color: #fff; padding: 10px 20px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 14px; }
</style></head>
<body>
<div class="wrap">
  <div class="hdr">
    <h1>New Lead — LongIslandTick.com</h1>
    <p>Submitted ${esc(new Date(timestamp).toLocaleString("en-US", { timeZone: "America/New_York" }))} ET</p>
  </div>
  <div class="body">
    <div class="row"><span class="lbl">Name</span><span class="val">${esc(leadData.name)}</span></div>
    <div class="row"><span class="lbl">Phone</span><span class="val"><a href="tel:${esc(leadData.phone.replace(/\D/g, ""))}">${esc(leadData.phone)}</a></span></div>
    <div class="row"><span class="lbl">Email</span><span class="val"><a href="mailto:${esc(leadData.email)}">${esc(leadData.email)}</a></span></div>
    ${leadData.address ? `<div class="row"><span class="lbl">Address</span><span class="val">${esc(leadData.address)}</span></div>` : ""}
    <div class="row"><span class="lbl">Town</span><span class="val">${esc(leadData.town)}</span></div>
    <div class="row"><span class="lbl">Service</span><span class="val">${esc(leadData.service_needed ?? "Not specified")}</span></div>
    <div class="row"><span class="lbl">Callback</span><span class="val">${esc(leadData.preferred_callback_time ?? "Anytime")}</span></div>
    <div class="row"><span class="lbl">Source</span><span class="val">${esc(leadData.source_page ?? "Unknown")}</span></div>
    ${leadData.message ? `<div class="row"><span class="lbl">Message</span><span class="val"><div class="msg">${esc(leadData.message)}</div></span></div>` : ""}
    <a href="mailto:${esc(leadData.email)}" class="btn">Reply to ${esc(leadData.name)}</a>
  </div>
  <div class="ftr">LongIslandTick.com · Powered by Pestify Pest Control · Port Jefferson Station, NY</div>
</div>
</body>
</html>`,
      });

      if (error) throw new Error(error.message);
    } catch (err) {
      emailError = err instanceof Error ? err.message : String(err);
      console.error("[lead] Resend email failed:", emailError);
      // Continue — don't fail the request because email failed
    }
  }

  // If both services were configured but both failed, return an error so the
  // visitor knows something went wrong and can call instead.
  const supabaseConfigured = !!(supabaseUrl && supabaseKey);
  const resendConfigured   = !!resendKey;
  const bothConfiguredAndFailed =
    supabaseConfigured && resendConfigured && supabaseError !== null && emailError !== null;

  if (bothConfiguredAndFailed) {
    return NextResponse.json(
      { error: "We couldn't save your request right now. Please call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
