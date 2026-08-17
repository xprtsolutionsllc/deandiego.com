"use client";

import { useState } from "react";
import { toast } from "sonner";

const COUNTIES = ["Mahoning", "Trumbull", "Columbiana", "Portage", "Stark"];
const SHOT_PLACEMENTS = [
  { value: "shoulder", label: "Shoulder" },
  { value: "guts", label: "Guts" },
  { value: "ham", label: "Ham" },
  { value: "neck", label: "Neck" },
  { value: "unknown", label: "Unknown" },
];

const EMPTY = {
  name: "",
  phone: "",
  email: "",
  county: "",
  location: "",
  shotAt: "",
  direction: "",
  shotPlacement: "",
  accessNotes: "",
};

const inputClass =
  "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition";
const selectClass = inputClass + " appearance-none";

export default function DispatchForm({ depositUrl }: { depositUrl: string }) {
  const [formData, setFormData] = useState(EMPTY);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function set<K extends keyof typeof EMPTY>(key: K, value: string) {
    setFormData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.location.trim()) {
      toast.error("Name, phone, and property address or pin are required.");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/deer-recovery", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Dispatch sent. Keep your phone on.");
        setSubmitted(true);
      } else {
        const body = await res.json().catch(() => ({}));
        toast.error(body.error || "Dispatch failed. Keep trying the phone and submit again.");
      }
    } catch {
      toast.error("Dispatch failed. Keep trying the phone and submit again.");
    }
    setSubmitting(false);
  }

  if (submitted) {
    return (
      <div className="max-w-xl rounded-xl border border-[#DC2626]/40 bg-[#DC2626]/5 p-8">
        <h4 className="text-2xl font-bold mb-3">Dean got it.</h4>
        <p className="text-sm text-gray-300 leading-relaxed mb-4">
          Keep your phone on. He will call the number you left. The $150 deposit books the flight if he can take it tonight.
        </p>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">
          You pay $150 for the look either way. $100 more if he finds it. $250 total if found.
        </p>
        {depositUrl ? (
          <a
            href={depositUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm"
          >
            Pay $150 deposit
          </a>
        ) : (
          <div>
            <button type="button" disabled className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold text-sm opacity-50 cursor-not-allowed">
              $150 deposit pending
            </button>
            <p className="text-xs text-gray-500 mt-3">
              Payment link is not live yet. Dean will tell you how to pay the $150 if he can take the job.
            </p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-16">
      <form onSubmit={handleSubmit} className="md:col-span-2 space-y-5">
        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name *</label>
            <input type="text" value={formData.name} onChange={(e) => set("name", e.target.value)} className={inputClass} placeholder="Your name" autoComplete="name" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Phone *</label>
            <input type="tel" value={formData.phone} onChange={(e) => set("phone", e.target.value)} className={inputClass} placeholder="This is how he calls back" autoComplete="tel" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email</label>
            <input type="email" value={formData.email} onChange={(e) => set("email", e.target.value)} className={inputClass} placeholder="Optional" autoComplete="email" />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">County</label>
            <select value={formData.county} onChange={(e) => set("county", e.target.value)} className={selectClass}>
              <option value="" className="bg-[#1A1A1A]">Ohio counties only</option>
              {COUNTIES.map((c) => (
                <option key={c} value={c} className="bg-[#1A1A1A]">{c} County</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Property address or pin *</label>
          <input type="text" value={formData.location} onChange={(e) => set("location", e.target.value)} className={inputClass} placeholder="Address, GPS pin, or nearest road" />
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">When did you shoot it</label>
            <input type="datetime-local" value={formData.shotAt} onChange={(e) => set("shotAt", e.target.value)} className={inputClass} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Shot placement</label>
            <select value={formData.shotPlacement} onChange={(e) => set("shotPlacement", e.target.value)} className={selectClass}>
              <option value="" className="bg-[#1A1A1A]">Select...</option>
              {SHOT_PLACEMENTS.map((p) => (
                <option key={p.value} value={p.value} className="bg-[#1A1A1A]">{p.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Where do you think it went</label>
          <textarea value={formData.direction} onChange={(e) => set("direction", e.target.value)} rows={3} className={inputClass + " resize-none"} placeholder="Direction, last blood, last seen, terrain" />
        </div>

        <div>
          <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Can you meet tonight / access notes</label>
          <textarea value={formData.accessNotes} onChange={(e) => set("accessNotes", e.target.value)} rows={3} className={inputClass + " resize-none"} placeholder="Can you meet tonight? Gate, landowner, dogs, parked truck" />
        </div>

        <button type="submit" disabled={submitting} className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition disabled:opacity-50 text-base">
          {submitting ? "Sending dispatch..." : "Submit dispatch"}
        </button>
      </form>

      <div className="space-y-8">
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
          <h3 className="font-semibold mb-4">What happens next</h3>
          <ol className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">1</span>Dean gets a DEER DISPATCH TONIGHT ping</li>
            <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">2</span>He calls the phone number you left</li>
            <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">3</span>$150 deposit books the flight if he can take it</li>
          </ol>
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
          <h3 className="font-semibold mb-2">$150 deposit books the flight</h3>
          <p className="text-sm text-gray-400 mb-4">You pay for the look. $100 more if he finds it.</p>
          {depositUrl ? (
            <a href={depositUrl} target="_blank" rel="noopener noreferrer" className="block text-center bg-[#DC2626] text-white px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-[#B91C1C] transition">
              Pay $150 deposit
            </a>
          ) : (
            <button type="button" disabled className="w-full bg-[#DC2626] text-white px-4 py-2.5 rounded-lg font-semibold text-sm opacity-50 cursor-not-allowed">
              $150 deposit pending
            </button>
          )}
        </div>
        <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
          <h3 className="font-semibold mb-2">Pennsylvania</h3>
          <p className="text-sm text-gray-400">Hard no. Ohio only: Mahoning, Trumbull, Columbiana, Portage, Stark.</p>
        </div>
      </div>
    </div>
  );
}
