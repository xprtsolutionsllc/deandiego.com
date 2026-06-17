import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Autonomous Agent Trader · Case Study" };

export default function AgentTraderPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Autonomous Agent Trader</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">MCP · OAuth2 · 53 tests</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A research and engineering build exploring how to let an agent trade safely. The core design decision: the LLM is allowed to think only at setup, and deterministic code owns execution and every guardrail. This is a study in agentic architecture, not a money machine, and it has never traded live.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Question</h2>
            <h3 className="text-2xl font-bold mb-4">How do you let an agent act without letting it improvise?</h3>
            <p className="text-gray-400 leading-relaxed">
              An LLM in the order path is a liability: non-deterministic, hard to test, and capable of expensive surprises. But an LLM is genuinely useful for reading context and forming a plan. The design problem is drawing a hard line between the two.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Architecture</h2>
            <h3 className="text-2xl font-bold mb-4">LLM at setup. Deterministic code at execution.</h3>
            <p className="text-gray-400 leading-relaxed">
              The model reads news and builds a plan once. From there, a deterministic state machine owns every per-tick decision: entry, exit, scaling, and all guardrails. No model call ever touches the order path, which makes the whole system testable and predictable.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">What I built.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Deterministic execution engine", desc: "A tested state machine for entries, auto-exits, and scaling, with conviction-scaled sizing, a hard kill-switch, a three-strike rule, and no averaging down." },
              { title: "Live plumbing, gated", desc: "An OAuth2 refresh session and an MCP transport seam. Order payloads are gated behind explicit live-and-armed checks and send nothing in dry-run." },
              { title: "Signal and convergence layer", desc: "A data layer that scores market signals and gates on convergence between trend and flow before a setup is even considered." },
              { title: "Measurement harness", desc: "A shadow harness that measures the strategy against a baseline so any edge has to be demonstrated, not assumed." },
            ].map((c) => (
              <div key={c.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
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
              { label: "Core", items: ["Python", "Deterministic state machine", "Pure stdlib, runs offline"] },
              { label: "Integration", items: ["MCP transport", "OAuth2 refresh flow", "Broker API payloads (gated)"] },
              { label: "Discipline", items: ["53 passing tests", "Dry-run by default", "Shadow measurement harness"] },
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
          <h2 className="text-2xl font-bold mb-4">Honest posture.</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            This is paper-stage and has never traded real money. My own prior research found no durable edge in the underlying strategy, and most active traders lose. The value of this project is the engineering: a clean separation between probabilistic reasoning and deterministic execution, real broker-auth plumbing, and a test suite that keeps the risky parts honest. I would rather show a guardrailed system that is not live than overstate one that is.
          </p>
        </div>
      </section>
    </>
  );
}
