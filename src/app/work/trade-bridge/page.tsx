import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "TradingView to FreqTrade Bridge · Case Study" };

export default function TradeBridgePage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">TradingView to FreqTrade Bridge</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">Sub-second execution</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A small, hardened production service that turns TradingView strategy alerts into real exchange orders in under a second. Roughly 150 lines of FastAPI doing one job reliably, with the security and observability a money-moving webhook actually needs.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">A strategy is worthless if it cannot execute.</h3>
            <p className="text-gray-400 leading-relaxed">
              TradingView is where the signal lives. The exchange is where the order has to land. Between them sits a gap that most retail setups fill with brittle copy-paste or unverified third-party webhooks that fail silently and move real money when they misfire.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Solution</h2>
            <h3 className="text-2xl font-bold mb-4">One service, locked down, end-to-end verified.</h3>
            <p className="text-gray-400 leading-relaxed">
              A FastAPI bridge receives the TradingView webhook, authenticates it, and forwards a typed order to FreqTrade for execution. IP allow-listing and a shared secret gate every request, structured logs make every fire auditable, and a verified paper trade proved the full path before anything ran live.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Architecture.</h2>
          <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
            <div className="font-mono text-sm text-gray-400 leading-relaxed space-y-2">
              <div><span className="text-[#DC2626]">TradingView</span> Pine Script alert (signal fires)</div>
              <div className="text-gray-600">&darr; HTTPS webhook (IP allow-list + shared secret)</div>
              <div><span className="text-[#DC2626]">FastAPI bridge</span> validate &rarr; map signal to typed order</div>
              <div className="text-gray-600">&darr; authenticated call</div>
              <div><span className="text-[#DC2626]">FreqTrade</span> forceenter / forceexit on the exchange</div>
              <div className="text-gray-600">&darr;</div>
              <div><span className="text-[#DC2626]">Exchange</span> order placed, structured log written</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "Service", items: ["Python", "FastAPI", "Pydantic", "~150 lines"] },
              { label: "Security", items: ["IP allow-listing", "Shared-secret auth", "HTTPS via Cloudflare and Traefik"] },
              { label: "Execution & Ops", items: ["FreqTrade", "Structured logging", "Coolify", "Docker"] },
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
          <h2 className="text-2xl font-bold mb-8">What it demonstrates.</h2>
          <ul className="space-y-3 max-w-3xl">
            {[
              "Production signal-processing infrastructure with clean, auditable failure modes.",
              "Security-first design on a service that moves money: authn, allow-listing, least surface area.",
              "Small-and-correct over large-and-fragile. One service, one job, verified end to end.",
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
