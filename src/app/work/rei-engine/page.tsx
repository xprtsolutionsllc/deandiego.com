import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "REI Engine · Case Study" };

export default function ReiEnginePage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">REI Engine</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">PostGIS + rules engine</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A real-estate intelligence platform with two halves: a geospatial ingestion pipeline that pulls public county property data into PostGIS, and a financing-eligibility rules engine that ranks how to actually fund a given property across federal and state programs. A domain I learned by building it.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">The data exists. It is scattered and unusable.</h3>
            <p className="text-gray-400 leading-relaxed">
              County parcel and distress data lives behind dozens of inconsistent government GIS endpoints, and the question that actually matters, how would I finance this specific property, takes an expert to answer. Both problems are tractable with the right ingestion and rules layers.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Build</h2>
            <h3 className="text-2xl font-bold mb-4">Ingestion plus a financing rules engine.</h3>
            <p className="text-gray-400 leading-relaxed">
              A config-driven ArcGIS adapter normalizes parcel data into a PostGIS property graph with idempotent, dedup-by-APN upserts. On top of it, an effective-dated rules engine evaluates a property and a borrower profile against program criteria and ranks viable financing strategies, with stacking and graceful degradation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">What makes it interesting.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Idempotent geospatial ingestion", desc: "Config-driven ArcGIS field maps, pagination, and a source-hash short-circuit. Re-running the ingest produces zero duplicates." },
              { title: "Three-valued logic engine", desc: "A pure Kleene interpreter returns eligible, ineligible, or needs-input, so the system asks the exact missing question instead of guessing." },
              { title: "Effective-dated rules", desc: "Program criteria are versioned with GiST no-overlap constraints, so eligibility is always evaluated against the rules in force at a given date." },
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
              { label: "Ingestion", items: ["Python", "ArcGIS REST", "PostGIS", "Idempotent upserts", "Source-hash dedup"] },
              { label: "Rules Engine", items: ["Kleene three-valued logic", "Effective-dated criteria", "GiST exclusion constraints", "Strategy stacking"] },
              { label: "API & Dev", items: ["FastAPI", "PostgreSQL", "docker-compose", "pytest", "Next.js dashboard (planned)"] },
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
          <h2 className="text-2xl font-bold mb-8">Verified.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "1,500", label: "Parcels ingested end to end" },
              { metric: "0", label: "Duplicates on re-run" },
              { metric: "3", label: "Borrower scenarios validated" },
              { metric: "24/24", label: "Tests passing" },
            ].map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#DC2626] mb-1">{r.metric}</div>
                <div className="text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-6">Core ingestion and financing engine shipped and verified locally. Dashboard UI and multi-county expansion in progress.</p>
        </div>
      </section>
    </>
  );
}
