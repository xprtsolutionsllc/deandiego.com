import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Work" };

type Project = {
  slug: string;
  title: string;
  category: string;
  description: string;
  highlight: string;
  stack: string;
  imagePath?: string;
  imageAlt?: string;
};

const PROJECTS: Project[] = [
  {
    slug: "xprt-cloud",
    title: "XPRT Cloud",
    category: "Full-Stack AI SaaS",
    description: "A drone-mapping SaaS built solo, end to end: flight planning, AI photo analysis, GPU photogrammetry, an interactive 3D viewer, a client portal, and Stripe billing live across five tiers.",
    highlight: "Built solo",
    stack: "FastAPI · Next.js · PostgreSQL · Modal H100 · Stripe",
    imagePath: "/images/xprt-cloud-dashboard.png",
    imageAlt: "XPRT Cloud dashboard",
  },
  {
    slug: "conversation-intelligence",
    title: "Conversation Intelligence",
    category: "AI Application",
    description: "An AI system I designed and built: transcript ingestion to GPT-5 structured analysis to pgvector retrieval to a role-aware coaching chat with token-highlighted citations. Owned the data model, pipeline, backend, and UI.",
    highlight: "GPT-5 + pgvector",
    stack: "GPT-5 structured output · pgvector · Next.js · PostgreSQL",
  },
  {
    slug: "rei-engine",
    title: "REI Engine",
    category: "GIS & Data Engineering",
    description: "A real-estate intelligence platform: county parcel-data ingestion over ArcGIS into PostGIS, and a financing-eligibility rules engine using three-valued logic to rank how to fund a given property across OHFA, USDA, FHA, and SBA programs.",
    highlight: "PostGIS + rules engine",
    stack: "Python · FastAPI · PostGIS · ArcGIS REST · Kleene logic",
  },
  {
    slug: "agent-trader",
    title: "Autonomous Agent Trader",
    category: "Agentic Systems",
    description: "A research build exploring safe autonomous trading: the LLM thinks only at setup, deterministic code owns execution and every guardrail. MCP transport, OAuth2 refresh sessions, and 53 passing tests. Paper-stage, never live.",
    highlight: "MCP · OAuth2 · 53 tests",
    stack: "Python · MCP · OAuth2 · deterministic state machine · pytest",
  },
  {
    slug: "quantum-qaoa",
    title: "Quantum QAOA on IBM Hardware",
    category: "Research Experiment",
    description: "Encoded a constrained selection problem as a QAOA circuit and ran it on a real 156-qubit IBM Heron processor. The classical solver won cleanly, and the quantum run surfaced a real insight about baking constraints into the encoding.",
    highlight: "Real quantum hardware",
    stack: "Qiskit · IBM Heron r2 · QUBO / HUBO",
  },
  {
    slug: "trade-bridge",
    title: "TradingView to FreqTrade Bridge",
    category: "Systems & Infra",
    description: "A production webhook bridge translating TradingView strategy signals into exchange orders sub-second. IP allow-listing, shared-secret auth, structured logging, and clean failure modes. End-to-end verified.",
    highlight: "Sub-second execution",
    stack: "Python · FastAPI · webhooks · FreqTrade",
  },
  {
    slug: "osint",
    title: "OSINT Tooling Layer",
    category: "Security & Integration",
    description: "A reconnaissance tooling layer that turns a 1,100-plus-tool catalog across 33 categories into a queryable, scriptable system: a filtering CLI plus credentialed API wrappers for eight providers, with safe credential handling.",
    highlight: "1,100+ tools integrated",
    stack: "Python · REST API integration · JSON registry · sha256 verification",
  },
  {
    slug: "range",
    title: "Range",
    category: "Mobile & On-Device ML",
    description: "A daily tone-guessing game, Wordle for vocal tone. An on-device emotion model scores your two-second read against a target tone and renders a share card. In active development.",
    highlight: "On-device ML",
    stack: "Expo · React Native · TypeScript · Core ML",
  },
  {
    slug: "wdusa",
    title: "Window Depot USA",
    category: "Enterprise Integration",
    description: "Systems integration for 86 independent dealer locations: automated workflows, CRM data pipelines, AI platform rollouts, and a self-routing support-triage system used daily across the network.",
    highlight: "86 locations",
    stack: "Python · TypeScript · n8n · webhooks · PostgreSQL",
    imagePath: "/images/wdusa-network.jpg",
    imageAlt: "Dealer network, 86 locations across the US",
  },
];

const FAST = [
  { metric: "4 days", label: "XPRT Cloud, full SaaS, solo" },
  { metric: "1 day", label: "Real quantum hardware run with Qiskit" },
  { metric: "New stack", label: "GIS, PostGIS, and a rules engine for REI" },
  { metric: "New protocol", label: "MCP and OAuth2 for the agent trader" },
];

const TECH = [
  { label: "Languages", items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"] },
  { label: "AI & LLM", items: ["GPT-5", "Claude", "Gemini", "Grok", "Ollama", "pgvector / RAG", "Structured output", "Prompt engineering"] },
  { label: "Frameworks", items: ["FastAPI", "Next.js", "React", "React Native / Expo", "Pydantic", "Zod"] },
  { label: "Data & GIS", items: ["PostgreSQL", "PostGIS", "ArcGIS REST", "Alembic", "JSON / XML / CSV pipelines"] },
  { label: "Cloud & Infra", items: ["Docker", "Vercel", "Cloudflare R2 / Tunnel", "Modal H100", "Coolify", "Hostinger VPS", "GitHub Actions"] },
  { label: "Agents & Protocols", items: ["MCP", "OAuth2", "Webhooks", "Inngest", "n8n", "Stripe"] },
  { label: "3D & Vision", items: ["NodeODM", "COLMAP", "Gaussian Splatting", "Gemini Vision", "Core ML"] },
  { label: "Security & Research", items: ["OSINT tooling", "Shodan / VirusTotal / Censys", "RBAC / RLS", "Qiskit", "QUBO / HUBO"] },
];

export default function WorkPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Shipped systems and honest writeups across full-stack products, AI applications, infrastructure, geospatial data, security tooling, and research. Different domains, one operator.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#DC2626]/30 transition">
                  {p.imagePath ? (
                    <Image src={p.imagePath} alt={p.imageAlt ?? p.title} width={1920} height={1200} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent p-8 text-center">
                      <div className="text-2xl font-bold text-gray-300 mb-2">{p.title}</div>
                      <div className="text-xs text-gray-600 font-mono">{p.stack}</div>
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{p.category}</div>
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <h2 className="text-3xl font-bold group-hover:text-[#DC2626] transition">{p.title}</h2>
                    <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">{p.highlight}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-4">{p.description}</p>
                  <div className="text-xs text-gray-500 font-mono mb-6">{p.stack}</div>
                  <span className="text-sm text-[#DC2626] font-medium group-hover:underline">View case study &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Learning velocity */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Built fast</h2>
            <h3 className="text-3xl font-bold mb-3">I learn the tool the problem needs.</h3>
            <p className="text-gray-400">New domain, new stack, new protocol. I pick it up by shipping in it, not by waiting to feel ready.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FAST.map((f) => (
              <div key={f.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-[#DC2626] mb-2">{f.metric}</div>
                <div className="text-xs text-gray-400 leading-relaxed">{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & technologies */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-10">Tools &amp; technologies</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-10">
            {TECH.map((g) => (
              <div key={g.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">{g.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 rounded-md text-xs text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Drone services cross-link */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-[1fr_auto] gap-10 items-center rounded-xl border border-white/10 bg-white/[0.03] p-10">
            <div>
              <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Also flying</h2>
              <h3 className="text-2xl font-bold mb-3">The pilot part is for hire too.</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">FAA Part 107 certified and commercially insured. Aerial photos, cinematic video, mapping, and interactive 3D walkthroughs for real estate and construction, with flat per-listing pricing and 24-48 hour delivery.</p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-4">
              <Link href="/services#drone-pricing" className="bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm text-center">See drone pricing</Link>
              <Link href="/contact?topic=drone-realestate" className="border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-semibold hover:border-[#DC2626]/40 transition text-sm text-center">Book a listing</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5 text-center">
        <p className="text-gray-400 mb-4">Open to senior and founding engineer roles.</p>
        <Link href="/contact" className="text-[#DC2626] text-sm font-medium hover:underline">Get in touch &rarr;</Link>
      </section>
    </>
  );
}
