import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dean's Deer Recovery",
  description:
    "Dean's Deer Recovery: thermal search for wounded deer in Northeast Ohio. Season opens September 26, 2026. Get on the list for a callback.",
};

const CHECK = (
  <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const PRICING = [
  {
    name: "Single recovery",
    price: "$300",
    note: "+ $50 if found dead ($350 total)",
    popular: false,
    blurb: "You pay for the search, not the find. The $300 base covers the flight. If the deer is found dead, $50 more. If the deer is still alive, the search stops and the base is still owed.",
    features: [
      "Thermal search after the taking",
      "Ohio only: Mahoning, Trumbull, Columbiana, Portage, Stark",
      "Alive-deer shutdown still owes the $300 base",
      "Found dead: $350 total",
    ],
    cta: { label: "Request a callback", href: "/contact?topic=deer-recovery" },
  },
  {
    name: "Season pack",
    price: "$750",
    note: "3 prepaid recoveries, 2026 Ohio season",
    popular: true,
    blurb: "Three prepaid recoveries for the 2026 Ohio season. Same search rules as a single recovery, prepaid so you are already on the list when the season opens.",
    features: [
      "3 prepaid recoveries",
      "2026 Ohio season",
      "Same $50 found-dead add-on per recovery",
      "Get on the list before opening day",
    ],
    cta: { label: "Get on the list", href: "/contact?topic=deer-recovery" },
  },
];

const COUNTIES = ["Mahoning", "Trumbull", "Columbiana", "Portage", "Stark"];

export default function DeerRecoveryPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            <span className="text-gray-300">Dean's Deer Recovery</span>
            <span className="mx-2">/</span>
            <span>Ohio, 2026 season</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dean's Deer Recovery.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Thermal search for wounded deer in Northeast Ohio. Season opens September 26, 2026. This page is for getting on the list and requesting a callback, not same-night dispatch.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Ohio only", "Season opens Sep 26, 2026", "FAA Part 107 certified", "Launch-phase list"].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact?topic=deer-recovery" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm">
              Get on the 2026 list
            </Link>
            <Link href="/contact?topic=deer-recovery" className="border border-white/15 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-[#DC2626]/40 transition text-sm">
              Request a callback
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Pricing</h2>
            <h3 className="text-3xl font-bold mb-3">You pay for the search.</h3>
            <p className="text-gray-400">The market pays for the search, not the find. $300 base covers the flight. $50 more if the deer is found dead ($350 total). An alive-deer shutdown still owes the base.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {PRICING.map((tier) => (
              <div key={tier.name} className={`flex flex-col rounded-xl p-8 border ${tier.popular ? "border-[#DC2626]/40 bg-[#DC2626]/5" : "border-white/10 bg-white/[0.03]"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">{tier.name}</h4>
                  {tier.popular && <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">Season pack</span>}
                </div>
                <div className="text-3xl font-bold mb-1">{tier.price}</div>
                <div className="text-xs text-gray-500 mb-4">{tier.note}</div>
                <p className="text-sm text-gray-400 mb-6">{tier.blurb}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                      {CHECK}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={tier.cta.href} className={`text-center px-6 py-3 rounded-lg font-semibold text-sm transition ${tier.popular ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]" : "border border-white/15 text-gray-300 hover:border-[#DC2626]/40"}`}>
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">How it works.</h2>
          <p className="text-gray-400 mb-16 text-center max-w-lg mx-auto">Launch-phase for the 2026 Ohio season. Get on the list first.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Get on the list", desc: "Request a callback. Season opens September 26, 2026. This is not same-night dispatch. You are joining the list for the season." },
              { step: "02", title: "Confirm the job", desc: "County, last known location, and that the taking already happened. Ohio only: Mahoning, Trumbull, Columbiana, Portage, or Stark." },
              { step: "03", title: "Thermal search", desc: "After the taking only. If the deer is still alive, the search stops, last position is reported, and the $300 base is still owed." },
            ].map((s) => (
              <div key={s.step}>
                <div className="text-[#DC2626] text-5xl font-bold mb-4 font-mono">{s.step}</div>
                <h3 className="font-semibold text-xl mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service area + compliance */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Service area</h2>
            <h3 className="text-2xl font-bold mb-3">Ohio only.</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Northeast Ohio. Pennsylvania jobs are not accepted. Do not request a PA recovery.
            </p>
            <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
              {COUNTIES.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-gray-400">
                  {CHECK}
                  {c} County
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Compliance</h2>
            <h3 className="text-2xl font-bold mb-3">After the taking only.</h3>
            <ul className="space-y-2.5">
              {[
                "Recovery starts after the taking, not during the hunt",
                "No hunting devices in the recovery party",
                "If the deer is alive, stop and report last position",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                  {CHECK}
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get on the 2026 Ohio list.</h2>
          <p className="text-gray-400 mb-8">Request a callback for Dean's Deer Recovery. Season opens September 26, 2026.</p>
          <Link href="/contact?topic=deer-recovery" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
            Request a callback
          </Link>
        </div>
      </section>
    </>
  );
}
