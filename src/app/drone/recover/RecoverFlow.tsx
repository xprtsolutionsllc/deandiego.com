"use client";

import { useState } from "react";
import { toast } from "sonner";
import { OHIO_RULES, WAIVER_BODY, WAIVER_TITLE } from "@/lib/deer-waiver";

const COUNTIES = ["Mahoning", "Trumbull", "Columbiana", "Portage", "Stark"];
const STEPS = ["You", "The deer", "Where", "Agree"] as const;
const DEER_STATUS = [
  { value: "down", label: "Believed down / dead" },
  { value: "wounded", label: "Wounded, still moving" },
  { value: "unknown", label: "Unknown" },
];
const SHOT_PLACEMENTS = [
  { value: "shoulder", label: "Shoulder" },
  { value: "guts", label: "Guts" },
  { value: "ham", label: "Ham" },
  { value: "neck", label: "Neck" },
  { value: "unknown", label: "Unknown" },
];

type FormState = {
  name: string;
  phone: string;
  email: string;
  county: string;
  shotAt: string;
  deerStatus: string;
  shotPlacement: string;
  direction: string;
  location: string;
  lat: string;
  lng: string;
  terrain: string;
  landowner: string;
  accessNotes: string;
  ohioTaken: boolean;
  ohioNoDevice: boolean;
  ohioAliveStop: boolean;
  ohioLandowner: boolean;
  waiverName: string;
  waiverAgreed: boolean;
  mediaOk: boolean;
};

const EMPTY: FormState = {
  name: "",
  phone: "",
  email: "",
  county: "",
  shotAt: "",
  deerStatus: "",
  shotPlacement: "",
  direction: "",
  location: "",
  lat: "",
  lng: "",
  terrain: "",
  landowner: "",
  accessNotes: "",
  ohioTaken: false,
  ohioNoDevice: false,
  ohioAliveStop: false,
  ohioLandowner: false,
  waiverName: "",
  waiverAgreed: false,
  mediaOk: false,
};

const inputClass =
  "w-full min-h-12 bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-base text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition";
const selectClass = inputClass + " appearance-none";

export default function RecoverFlow({ depositUrl, venmoUrl }: { depositUrl: string; venmoUrl: string }) {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(EMPTY);
  const [gpsState, setGpsState] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function canAdvance(): boolean {
    if (step === 0) return Boolean(form.name.trim() && form.phone.trim() && form.county);
    if (step === 2) return Boolean(form.location.trim());
    if (step === 3) {
      return (
        form.ohioTaken &&
        form.ohioNoDevice &&
        form.ohioAliveStop &&
        form.ohioLandowner &&
        form.waiverAgreed &&
        form.waiverName.trim().length > 1
      );
    }
    return true;
  }

  function next() {
    if (!canAdvance()) {
      if (step === 0) toast.error("Name, phone, and Ohio county are required.");
      else if (step === 2) toast.error("Drop a pin or type the last known location.");
      else if (step === 3) toast.error("Check every Ohio rule, type your name, and agree to the waiver.");
      return;
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function pinGps() {
    if (!navigator.geolocation) {
      setGpsState("err");
      toast.error("This phone will not share GPS. Type the location instead.");
      return;
    }
    setGpsState("loading");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude.toFixed(6);
        const lng = pos.coords.longitude.toFixed(6);
        setForm((prev) => ({
          ...prev,
          lat,
          lng,
          location: prev.location.trim() || `${lat}, ${lng}`,
        }));
        setGpsState("ok");
      },
      () => {
        setGpsState("err");
        toast.error("GPS denied. Type the road, address, or pin.");
      },
      { enableHighAccuracy: true, timeout: 12000 },
    );
  }

  async function handleSubmit() {
    if (!canAdvance()) {
      toast.error("Check every Ohio rule, type your name, and agree to the waiver.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/deer-recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          waiverVersion: "2026-08-18",
        }),
      });
      if (res.ok) {
        toast.success("Request received. Keep your phone on.");
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        toast.error(body.error || "Submit failed. Call Dean and try again.");
      }
    } catch {
      toast.error("Submit failed. Call Dean and try again.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    const mapsHref =
      form.lat && form.lng ? `https://maps.apple.com/?ll=${form.lat},${form.lng}&q=Last+known` : "";
    return (
      <div className="rounded-xl border border-[#DC2626]/40 bg-[#DC2626]/5 p-6 sm:p-8">
        <h2 className="text-2xl font-bold mb-3">Request received. Dean will contact you shortly.</h2>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Keep this phone on. He calls the number you left. The $250 books the flight if he can take it tonight.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          $250 for the look either way. $50 more if he finds it dead. $300 total if found.
        </p>
        {mapsHref ? (
          <a href={mapsHref} className="block text-sm text-[#DC2626] mb-6" target="_blank" rel="noopener noreferrer">
            Open the pin you dropped
          </a>
        ) : null}
        <div className="flex flex-col gap-3">
          {depositUrl ? (
            <a
              href={depositUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-[#DC2626] text-white px-6 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition"
            >
              Pay $250 with card
            </a>
          ) : null}
          {venmoUrl ? (
            <a
              href={venmoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center border border-white/15 text-gray-300 px-6 py-3.5 rounded-lg font-semibold hover:border-[#DC2626]/40 transition"
            >
              Pay $250 with Venmo
            </a>
          ) : null}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="mb-8">
        <div className="flex justify-between text-xs uppercase tracking-wider text-gray-500 mb-2">
          <span>
            Step {step + 1} of {STEPS.length}
          </span>
          <span>{STEPS[step]}</span>
        </div>
        <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-[#DC2626] transition-all"
            style={{ width: `${((step + 1) / STEPS.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 0 ? (
        <div className="space-y-5">
          <Field label="Name *">
            <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputClass} autoComplete="name" placeholder="Your name" />
          </Field>
          <Field label="Phone *">
            <input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} autoComplete="tel" placeholder="This is how he calls back" />
          </Field>
          <Field label="Email">
            <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className={inputClass} autoComplete="email" placeholder="Optional" />
          </Field>
          <Field label="Ohio county *">
            <select value={form.county} onChange={(e) => set("county", e.target.value)} className={selectClass}>
              <option value="" className="bg-[#1A1A1A]">
                Ohio only
              </option>
              {COUNTIES.map((c) => (
                <option key={c} value={c} className="bg-[#1A1A1A]">
                  {c} County
                </option>
              ))}
            </select>
          </Field>
          <p className="text-xs text-gray-500">Pennsylvania is a hard no. Do not submit a PA recovery.</p>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="space-y-5">
          <Field label="Approximate shot time">
            <input type="datetime-local" value={form.shotAt} onChange={(e) => set("shotAt", e.target.value)} className={inputClass} />
          </Field>
          <Field label="Is the deer down?">
            <select value={form.deerStatus} onChange={(e) => set("deerStatus", e.target.value)} className={selectClass}>
              <option value="" className="bg-[#1A1A1A]">
                Select
              </option>
              {DEER_STATUS.map((s) => (
                <option key={s.value} value={s.value} className="bg-[#1A1A1A]">
                  {s.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Shot placement">
            <select value={form.shotPlacement} onChange={(e) => set("shotPlacement", e.target.value)} className={selectClass}>
              <option value="" className="bg-[#1A1A1A]">
                Select
              </option>
              {SHOT_PLACEMENTS.map((p) => (
                <option key={p.value} value={p.value} className="bg-[#1A1A1A]">
                  {p.label}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Direction of travel / last blood">
            <textarea
              value={form.direction}
              onChange={(e) => set("direction", e.target.value)}
              rows={4}
              className={inputClass + " resize-none"}
              placeholder="Which way it went, last blood, last seen"
            />
          </Field>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-5">
          <Field label="Last known location *">
            <input
              value={form.location}
              onChange={(e) => set("location", e.target.value)}
              className={inputClass}
              placeholder="Address, road, or GPS pin"
            />
          </Field>
          <button
            type="button"
            onClick={pinGps}
            className="w-full min-h-12 border border-white/15 text-gray-200 px-4 py-3 rounded-lg font-semibold hover:border-[#DC2626]/40 transition"
          >
            {gpsState === "loading" ? "Getting GPS..." : gpsState === "ok" ? "Pin updated from GPS" : "Use this phone GPS as the pin"}
          </button>
          {form.lat && form.lng ? (
            <a
              href={`https://maps.apple.com/?ll=${form.lat},${form.lng}&q=Last+known`}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-[#DC2626]"
            >
              Open pin {form.lat}, {form.lng}
            </a>
          ) : (
            <p className="text-xs text-gray-500">GPS is best. If it fails, type the road or drop a Maps pin and paste it.</p>
          )}
          <Field label="Terrain">
            <textarea
              value={form.terrain}
              onChange={(e) => set("terrain", e.target.value)}
              rows={3}
              className={inputClass + " resize-none"}
              placeholder="Thick brush, creek, standing corn, beans, woods"
            />
          </Field>
          <Field label="Landowner name">
            <input value={form.landowner} onChange={(e) => set("landowner", e.target.value)} className={inputClass} placeholder="Who owns this parcel" />
          </Field>
          <Field label="Access / can you meet tonight">
            <textarea
              value={form.accessNotes}
              onChange={(e) => set("accessNotes", e.target.value)}
              rows={3}
              className={inputClass + " resize-none"}
              placeholder="Gate, dogs, parked truck, permission status"
            />
          </Field>
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">Ohio recovery rules. Check every box.</h3>
            <div className="space-y-3">
              {OHIO_RULES.map((rule) => (
                <label key={rule.id} className="flex gap-3 items-start text-sm text-gray-300">
                  <input
                    type="checkbox"
                    checked={form[rule.id]}
                    onChange={(e) => set(rule.id, e.target.checked)}
                    className="mt-1 h-5 w-5 accent-[#DC2626] shrink-0"
                  />
                  <span>{rule.label}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold mb-2">{WAIVER_TITLE}</h3>
            <div className="max-h-48 overflow-y-auto rounded-lg border border-white/10 bg-black/30 p-4 text-xs text-gray-400 whitespace-pre-wrap leading-relaxed">
              {WAIVER_BODY}
            </div>
          </div>
          <Field label="Type your full name *">
            <input
              value={form.waiverName}
              onChange={(e) => set("waiverName", e.target.value)}
              className={inputClass}
              placeholder="Same as the hunter requesting recovery"
              autoComplete="name"
            />
          </Field>
          <label className="flex gap-3 items-start text-sm text-gray-300">
            <input
              type="checkbox"
              checked={form.waiverAgreed}
              onChange={(e) => set("waiverAgreed", e.target.checked)}
              className="mt-1 h-5 w-5 accent-[#DC2626] shrink-0"
            />
            <span>I agree to this Deer Recovery Waiver for XPRT Solutions LLC, d/b/a Dean Diego Drone.</span>
          </label>
          <label className="flex gap-3 items-start text-sm text-gray-400">
            <input
              type="checkbox"
              checked={form.mediaOk}
              onChange={(e) => set("mediaOk", e.target.checked)}
              className="mt-1 h-5 w-5 accent-[#DC2626] shrink-0"
            />
            <span>Optional: Dean may use a thermal still or my first name in portfolio posts. Face and full name stay off unless I say so later.</span>
          </label>
        </div>
      ) : null}

      <div className="flex gap-3 mt-8">
        {step > 0 ? (
          <button
            type="button"
            onClick={() => setStep((s) => s - 1)}
            className="flex-1 min-h-12 border border-white/15 text-gray-300 px-4 py-3 rounded-lg font-semibold hover:border-white/30 transition"
          >
            Back
          </button>
        ) : null}
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            onClick={next}
            className="flex-1 min-h-12 bg-[#DC2626] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition"
          >
            Continue
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={submitting}
            className="flex-1 min-h-12 bg-[#DC2626] text-white px-4 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition disabled:opacity-50"
          >
            {submitting ? "Sending..." : "Submit request"}
          </button>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">{label}</label>
      {children}
    </div>
  );
}
