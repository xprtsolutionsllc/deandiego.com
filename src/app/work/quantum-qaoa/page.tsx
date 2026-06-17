import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Quantum QAOA on IBM Hardware · Case Study" };

export default function QuantumQaoaPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Quantum QAOA on IBM Hardware</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">Real quantum hardware</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">I encoded a constrained selection problem as a QAOA circuit and ran it on a real 156-qubit IBM quantum processor. Most quantum demos quietly drop the part where the classical method wins. This writeup leads with it, because the honest result is the interesting one.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Experiment</h2>
            <h3 className="text-2xl font-bold mb-4">Does quantum help a real selection problem?</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I took the planning optimizer from my selection engine, a problem of picking the best k items under constraints, and expressed it as a QUBO/HUBO. A self-check verified the QUBO-to-Ising math matched my classical energy function exactly on 12 qubits.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Then I ran it as a fixed-angle p=1 QAOA on a real IBM Heron r2 processor and compared the sampled solutions against an exact classical solver.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Honest Result</h2>
            <h3 className="text-2xl font-bold mb-4">Classical won. The quantum run still taught me something.</h3>
            <p className="text-gray-400 leading-relaxed">
              The exact solver found the optimum cleanly. The QPU, noise-dominated at this scale, sampled the true optimum only about 0.34% of the time, roughly 14x better than random but nowhere near useful. The valuable part: the QPU&apos;s lowest-energy sample picked the wrong cardinality, which exposed that my soft cardinality penalty was too weak for any unconstrained solver.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">The run.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "156", label: "Qubit Heron r2 (ibm_fez)" },
              { metric: "4,096", label: "Shots" },
              { metric: "~0.34%", label: "Optimum sampled" },
              { metric: "~14x", label: "Better than uniform" },
            ].map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="text-2xl font-bold text-[#DC2626] mb-1">{r.metric}</div>
                <div className="text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-600 mt-6 font-mono">Verifiable run: IBM job d8pegrq01fac73d1khc0 on ibm_fez, 2026-06-17.</p>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">The real finding.</h2>
          <div className="max-w-3xl space-y-4 text-gray-400 leading-relaxed">
            <p>
              Enforcing a constraint in the solver is not the same as enforcing it in the encoding. My classical path applies a hard cardinality constraint, so it never sees the failure. A raw quantum sampler optimizes the unconstrained energy surface directly, so a too-soft penalty let the global minimum drift off the required k.
            </p>
            <p>
              That is a concrete, reusable lesson for any external or quantum solver: constraints have to be baked into the objective, not assumed by the runtime. The cheap classical tool is the right answer at this scale, and knowing that is the point.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Quantum", items: ["Qiskit Runtime", "IBM Heron r2", "Fixed-angle p=1 QAOA"] },
              { label: "Formulation", items: ["QUBO / HUBO", "QUBO-to-Ising mapping", "Exact-k classical solver"] },
              { label: "Engineering", items: ["Python", "Self-check harness", "Reproducible run JSON"] },
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
    </>
  );
}
