import Link from "next/link";
import Image from "next/image";

const FEATURED = [
  {
    slug: "xprt-cloud",
    title: "XPRT Cloud",
    category: "Full-Stack AI SaaS",
    description: "A drone-mapping SaaS built solo end to end: flight planning, AI photo analysis, GPU photogrammetry, 3D viewer, Stripe billing.",
    stack: "FastAPI · Next.js · PostgreSQL · Modal H100",
  },
  {
    slug: "conversation-intelligence",
    title: "Conversation Intelligence",
    category: "AI Application",
    description: "An AI system I designed: transcript ingestion to structured LLM analysis to retrieval-grounded coaching chat with citations.",
    stack: "GPT-5 structured output · pgvector · React",
  },
  {
    slug: "quantum-qaoa",
    title: "Quantum QAOA on IBM Hardware",
    category: "Research Experiment",
    description: "Ran a selection problem as a QAOA circuit on a real 156-qubit IBM processor. Honest result, real finding about constraint encoding.",
    stack: "Qiskit · IBM Heron r2 · QUBO/HUBO",
  },
  {
    slug: "trade-bridge",
    title: "TradingView to FreqTrade Bridge",
    category: "Systems & Infra",
    description: "A production webhook bridge translating strategy signals into exchange orders sub-second, with auth, allow-listing, and clean failure modes.",
    stack: "Python · FastAPI · webhooks",
  },
];

const AI_APPROACH = [
  {
    title: "Model selection by task profile",
    desc: "I route work across GPT-5, Claude, Gemini, Grok, and local Ollama by what each does best: vision, structured output, code review, multi-agent reasoning. Constant comparative evaluation of where each model is right and where it fails.",
  },
  {
    title: "AI-gated code review",
    desc: "I ship production code through an AI review gate, reading model output critically and correcting it before merge. On a strong day that is 11+ pull requests, all reviewed, all green.",
  },
  {
    title: "Structured output, validated",
    desc: "Strict JSON-schema output validated with Pydantic and Zod, so I catch and characterize exactly where a model violates a schema, omits a field, or hallucinates.",
  },
  {
    title: "Prompts plus iteration loops",
    desc: "Domain-specific prompt design with deliberate iteration is my normal workflow, codified into a persistent skills-and-memory system that carries context across sessions.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-1.5 border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium tracking-wide uppercase">
              Software Engineer · AI Systems · FAA Part 107
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              Engineer. Pilot.
              <br />
              <span className="text-[#DC2626]">Builder.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              I build production software and the AI systems around it, end to end: full-stack applications, data pipelines, and multi-model LLM workflows. Founder of XPRT Solutions LLC. Open to senior and founding engineer roles.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center">
                See My Work
              </Link>
              <a href="/dean-diego-resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center">
                Download Resume
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/dean-headshot.jpg"
                alt="Dean Diego portrait"
                width={1331}
                height={2000}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-10">What I build</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Full-stack applications",
                desc: "End-to-end products: data model, backend, API, and UI. Python and TypeScript, FastAPI and Next.js, PostgreSQL and pgvector. Owned solo from schema to ship.",
              },
              {
                title: "AI systems",
                desc: "Multi-model LLM orchestration, retrieval-augmented generation, structured output, and evaluation. AI as a co-developer, used with intent, not as a gimmick.",
              },
              {
                title: "Data pipelines and infra",
                desc: "Event-driven integrations, webhooks, idempotency and dead-letter handling, GPU processing, and self-hosted infrastructure on Docker and Cloudflare.",
              },
            ].map((s) => (
              <div key={s.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured work */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected work.</h2>
              <p className="text-gray-400">Shipped systems, honest writeups.</p>
            </div>
            <Link href="/work" className="text-sm text-[#DC2626] hover:underline hidden md:block">View all &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED.map((p) => (
              <Link key={p.slug} href={`/work/${p.slug}`} className="group block bg-white/[0.03] border border-white/5 rounded-xl p-7 hover:border-[#DC2626]/30 transition">
                <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{p.category}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-[#DC2626] transition">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.description}</p>
                <div className="text-xs text-gray-500 font-mono">{p.stack}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How I build with AI */}
      <section id="ai-approach" className="py-24 border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">How I build with AI</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">AI as a co-developer, used with intent.</h3>
            <p className="text-lg text-gray-400">Evaluating and directing AI output is a core, daily discipline for me, not an afterthought. This is how I ship faster without shipping slop.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
            {AI_APPROACH.map((a) => (
              <div key={a.title} className="border-l-2 border-[#DC2626]/40 pl-5">
                <h4 className="font-semibold text-lg mb-2">{a.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Open to senior and founding engineer roles.</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">Remote-first, US-based, US citizen. I respond within 24 hours.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
              Get in Touch
            </Link>
            <a href="/dean-diego-resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/5 transition text-lg inline-block">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
