import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "OSINT Tooling Layer · Case Study" };

export default function OsintPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">OSINT Tooling Layer</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">1,100+ tools integrated</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A reconnaissance tooling layer that turns a sprawling open-source-intelligence catalog into a queryable, scriptable system: a filtering CLI over a tracked registry of more than 1,100 tools, plus credentialed API wrappers for the providers worth automating, with credential handling that never leaks a key.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">A thousand tools is not a capability. It is a pile.</h3>
            <p className="text-gray-400 leading-relaxed">
              The open-source intelligence space is enormous and unindexed: hundreds of tools per category, wildly different access models, paid versus free, passive versus active. A raw catalog is useless until you can filter it by what you actually need right now.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Build</h2>
            <h3 className="text-2xl font-bold mb-4">Make the catalog queryable and the APIs scriptable.</h3>
            <p className="text-gray-400 leading-relaxed">
              I built a tracked registry of the full catalog and a filtering CLI that slices it by category, keyword, opsec posture, pricing, and access requirements. For the providers worth automating, I wrote thin credentialed wrappers with a single safe path for missing keys.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">What I built.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Tracked registry", desc: "More than 1,100 tools across 33 categories, sha256-tracked with a baseline so changes to the upstream catalog are visible and diffable." },
              { title: "Filtering CLI", desc: "A ten-flag query tool: filter by category, keyword, opsec posture, pricing, and whether a tool needs an API key, install, or registration." },
              { title: "Credentialed wrappers", desc: "Thin clients for eight providers including Shodan, VirusTotal, Censys, and GreyNoise, with a missing-key path that fails cleanly and never prints a secret." },
            ].map((c) => (
              <div key={c.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Core", items: ["Python", "Standard library only", "JSON registry", "sha256 change tracking"] },
              { label: "Integrations", items: ["Shodan", "VirusTotal", "Censys", "GreyNoise", "AbuseIPDB", "HIBP", "IPInfo", "SecurityTrails"] },
              { label: "Design", items: ["Safe missing-key handling", "No secret leakage", "Idempotent sync", "Passive-by-default posture"] },
            ].map((g) => (
              <div key={g.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DC2626] mb-3">{g.label}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((t) => (
                    <li key={t} className="text-sm text-gray-400">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">What it demonstrates.</h2>
          <ul className="space-y-3 max-w-3xl">
            {[
              "Integration breadth: many providers, one consistent, scriptable interface.",
              "Security-domain fluency and disciplined credential handling.",
              "Turning an unstructured catalog into a tool a person can actually drive.",
            ].map((b) => (
              <li key={b} className="flex gap-3 text-gray-400">
                <span className="text-[#DC2626] mt-1">&bull;</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
