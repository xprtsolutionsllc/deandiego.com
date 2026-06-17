import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Range · Case Study" };

export default function RangePage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Range</h1>
            <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm font-semibold rounded-full">In development</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A daily tone-guessing game, Wordle for vocal tone. You get a line and a target tone, record a two-second read, and an on-device emotion model scores how close you landed on a tone radar. One puzzle a day, a share card built to be self-deprecating, and zero servers.</p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Idea</h2>
            <h3 className="text-2xl font-bold mb-4">A daily game about how you say it.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Wordle owns letters. Range owns tone. The same line read sarcastic, flirty, disappointed, or supportive scores completely differently, and the gap between what you meant and what the model heard is the joke that makes it shareable.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Selected from 19 candidate concepts after four rounds of adversarial research, then gated behind real validation tests before any app code.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Build</h2>
            <h3 className="text-2xl font-bold mb-4">On-device, offline, no backend.</h3>
            <p className="text-gray-400 leading-relaxed">
              The emotion model runs entirely on the phone, so a read never leaves the device and there is no inference bill. Progression uses unlockable app icons that ship inside the binary with unlock state stored locally. The whole game runs with zero servers and zero per-play cost.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">How a round works.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "Prompt", desc: "A daily line plus a target tone to hit." },
              { step: "2", title: "Record", desc: "A two-second read, captured on device." },
              { step: "3", title: "Score", desc: "On-device emotion model plots your read on a tone radar against the target." },
              { step: "4", title: "Share", desc: "A programmatic share card, designed to be funny when you miss." },
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
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { label: "App", items: ["Expo", "React Native", "TypeScript", "expo-alternate-app-icons"] },
              { label: "On-device ML", items: ["Emotion / tone model", "Core ML conversion", "Offline inference"] },
              { label: "Tooling", items: ["Python scoring harness", "Leave-one-out validation", "Programmatic share-card renderer"] },
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
          <h2 className="text-2xl font-bold mb-4">Status.</h2>
          <p className="text-gray-400 leading-relaxed max-w-3xl">
            In active development. The on-device scoring harness is built and validated, the design and progression mechanics are locked, and the app build is in progress. This page will grow into a full case study as it ships.
          </p>
        </div>
      </section>
    </>
  );
}
