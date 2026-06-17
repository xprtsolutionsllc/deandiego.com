import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Conversation Intelligence · Case Study" };

export default function ConversationIntelligencePage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Conversation Intelligence</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">GPT-5 + pgvector</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">An AI system I designed and built that turns unstructured conversations into structured, coachable insight: transcript ingestion, strict-schema LLM analysis, embedded retrieval, and a role-aware coaching chat grounded in citations. I own the architecture, the data model, the pipeline, the backend, and the UI.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">Conversations hold the signal. Nobody has time to mine it.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Sales and support calls are full of objections, missed questions, and language patterns that decide outcomes. Reviewing them by hand does not scale, and generic transcription tools stop at words on a page.
            </p>
            <p className="text-gray-400 leading-relaxed">
              The hard part is not transcription. It is turning a raw transcript into trustworthy, structured metrics and grounded feedback that a person will actually act on.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The System</h2>
            <h3 className="text-2xl font-bold mb-4">Transcript in. Structured coaching out, in under a minute.</h3>
            <p className="text-gray-400 leading-relaxed">
              A transcript is ingested atomically, analyzed by GPT-5 against a strict JSON schema, embedded into a pgvector store over a domain knowledge corpus, and served back through a role-aware chat that answers with token-highlighted citations. Metrics like talk ratio and open-ended-question rate land on every conversation automatically.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">How it works.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Ingest", desc: "Atomic transactional ingestion via Postgres RPCs. No orphan records under concurrent writes." },
              { step: "2", title: "Analyze", desc: "GPT-5 with strict JSON-schema output. Talk ratio, question rate, objection handling, language patterns." },
              { step: "3", title: "Retrieve", desc: "pgvector embedded retrieval over a domain corpus, with token-overlap citation scoring." },
              { step: "4", title: "Coach", desc: "Role-aware chat that answers grounded in the transcript and corpus, with highlighted citations." },
            ].map((s) => (
              <div key={s.step} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-[#DC2626] mb-2">{s.step}</div>
                <h3 className="font-semibold mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "AI & Retrieval", items: ["GPT-5 structured output", "OpenAI embeddings", "pgvector", "Citation scoring"] },
              { label: "Backend", items: ["PostgreSQL", "Postgres RPCs", "Row-level security", "Signed-URL uploads"] },
              { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
              { label: "Async & Infra", items: ["Inngest step functions", "Audio pipeline", "Structured logging", "Vercel"] },
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
          <h2 className="text-2xl font-bold mb-8">Results.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "<60s", label: "Transcript to metrics" },
              { metric: "$0.02-0.05", label: "Cost per analysis" },
              { metric: "Multi-role", label: "RLS access model" },
              { metric: "Cited", label: "Every coaching answer" },
            ].map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#DC2626] mb-1">{r.metric}</div>
                <div className="text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
