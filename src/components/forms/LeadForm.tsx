"use client";

import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { ALL_TOWNS, SERVICE_TYPES, CALLBACK_TIMES, BUSINESS_PHONE } from "@/lib/constants";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name:                    z.string().min(2, "Please enter your name"),
  phone:                   z.string().min(10, "Please enter a valid phone number"),
  email:                   z.string().email("Please enter a valid email address"),
  address:                 z.string().optional(),
  town:                    z.string().min(1, "Please select your town"),
  service_needed:          z.string().optional(),
  preferred_callback_time: z.string().optional(),
  message:                 z.string().optional(),
});

type FormData = z.infer<typeof schema>;

interface LeadFormProps {
  sourcePage?: string;
  heading?:    string;
  subheading?: string;
  compact?:    boolean;
}

export function LeadForm({
  sourcePage,
  heading    = "Get a Free Tick Control Estimate",
  subheading = "Pestify Pest Control · Serving Suffolk & Nassau County",
  compact    = false,
}: LeadFormProps) {
  const router       = useRouter();
  const [error, setError] = useState<string | null>(null);
  // Prevent double-submit: once we start submitting, block re-entry even if
  // the component re-renders before the router push completes.
  const submittingRef = useRef(false);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    if (submittingRef.current) return;
    submittingRef.current = true;
    setError(null);

    try {
      const res = await fetch("/api/leads", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          source_page: sourcePage ?? (typeof window !== "undefined" ? window.location.pathname : ""),
          source_url:  typeof window !== "undefined" ? window.location.href : "",
          source_type: "form",
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Submission failed. Please try again.");
      }

      // Redirect to thank-you page on success
      router.push("/thank-you");
    } catch (e) {
      submittingRef.current = false;
      setError(e instanceof Error ? e.message : "Something went wrong. Please try again or call us directly.");
    }
  }

  const busy = isSubmitting || submittingRef.current;

  return (
    <div>
      {!compact && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900">{heading}</h2>
          <p className="mt-1 text-sm text-gray-500">{subheading}</p>
        </div>
      )}

      {compact && (
        <div className="mb-4">
          <p className="font-semibold text-gray-900">{heading}</p>
          <p className="text-xs text-gray-500 mt-0.5">{subheading}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
        {/* Name + Phone */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <Input {...register("name")} placeholder="Jane Smith" autoComplete="name" />
            {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <Input {...register("phone")} type="tel" placeholder="(631) 555-0100" autoComplete="tel" />
            {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input {...register("email")} type="email" placeholder="jane@example.com" autoComplete="email" />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>

        {/* Address (shown on full form, hidden on compact) */}
        {!compact && (
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Property Address <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <Input
              {...register("address")}
              placeholder="123 Main St, Smithtown"
              autoComplete="street-address"
            />
          </div>
        )}

        {/* Town + Service */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Your Town <span className="text-red-500">*</span>
            </label>
            <Select
              onValueChange={(v) => {
                setValue("town", v, { shouldValidate: true });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your town" />
              </SelectTrigger>
              <SelectContent>
                {ALL_TOWNS.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.town && <p className="mt-1 text-xs text-red-500">{errors.town.message}</p>}
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">Service Needed</label>
            <Select onValueChange={(v) => setValue("service_needed", v, { shouldValidate: false })}>
              <SelectTrigger>
                <SelectValue placeholder="Select service" />
              </SelectTrigger>
              <SelectContent>
                {SERVICE_TYPES.map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Callback + Message — full form only */}
        {!compact && (
          <>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">Best Time to Call</label>
              <Select onValueChange={(v) => setValue("preferred_callback_time", v, { shouldValidate: false })}>
                <SelectTrigger>
                  <SelectValue placeholder="Preferred callback time" />
                </SelectTrigger>
                <SelectContent>
                  {CALLBACK_TIMES.map((t) => (
                    <SelectItem key={t} value={t}>{t}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium text-gray-700">
                Message <span className="text-gray-400 font-normal">(optional)</span>
              </label>
              <Textarea
                {...register("message")}
                placeholder="Tell us about your property, tick concerns, or any questions..."
                rows={3}
              />
            </div>
          </>
        )}

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-200 p-3">
            <p className="text-sm text-red-700">{error}</p>
            <p className="text-xs text-red-500 mt-1">
              Or call us directly:{" "}
              <a href={`tel:${BUSINESS_PHONE.replace(/\D/g, "")}`} className="font-semibold underline">
                {BUSINESS_PHONE}
              </a>
            </p>
          </div>
        )}

        <Button
          type="submit"
          variant="cta"
          size="lg"
          className="w-full"
          disabled={busy}
          onClick={() => trigger()}
        >
          {busy ? (
            <><Loader2 className="h-4 w-4 animate-spin mr-2" />Submitting…</>
          ) : (
            "Request My Free Estimate →"
          )}
        </Button>

        <p className="text-center text-xs text-gray-400">
          No spam. No obligation. Local Long Island specialists from Pestify Pest Control.
        </p>
      </form>
    </div>
  );
}
