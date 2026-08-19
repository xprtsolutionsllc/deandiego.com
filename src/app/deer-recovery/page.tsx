import type { Metadata } from "next";
import DispatchForm from "./DispatchForm";

export const metadata: Metadata = {
  title: "Dean's Deer Recovery",
  description:
    "Shot a deer you cannot find? Thermal search in Northeast Ohio. $250 to come out. $50 more if we find it.",
};

const CHECK = (
  <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const COUNTIES = ["Mahoning", "Trumbull", "Columbiana", "Portage", "Stark"];

function DepositButton({ url, className }: { url: string; className: string }) {
  if (url) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={className}>
        Pay $250
      </a>
    );
  }
  return (
    <button type="button" disabled className={`${className} opacity-50 cursor-not-allowed`}>
      $250 pending
    </button>
  );
}

export default function DeerRecoveryPage() {
  // Public payment link only. Set NEXT_PUBLIC_DEER_DEPOSIT_URL in Vercel to a
  // Venmo or Stripe checkout URL. Leave unset until that link exists. Never
  // commit a secret or a made-up handle.
  const depositUrl = process.env.NEXT_PUBLIC_DEER_DEPOSIT_URL || "";

  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            <span className="text-gray-300">Dean&apos;s Deer Recovery</span>
            <span className="mx-2">/</span>
            <span>Northeast Ohio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Dean&apos;s Deer Recovery.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Shot a deer you cannot find? Thermal search, Northeast Ohio. $250 to come out. $50 more if we find it.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["Ohio only", "$250 to come out", "$50 more if found", "Thermal search"].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="#dispatch" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm">
              Submit a dispatch
            </a>
            <a href="#pricing" className="border border-white/15 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-[#DC2626]/40 transition text-sm">
              See pricing
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">How it works.</h2>
          <p className="text-gray-400 mb-16 text-center max-w-lg mx-auto">
            If you cannot get Dean on the phone, submit the form. This is an emergency dispatch, not a season list.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Call or submit the form", desc: "Tell him where you are, where you shot it, where you think it went, and where you think you hit it. Ask if he can make it tonight." },
              { step: "02", title: "Pay the $250", desc: "That books the flight. You pay $250 for the look, whether the deer is found or not." },
              { step: "03", title: "Dean flies if he can make it tonight", desc: "If he can take the job, he comes out and searches. $50 more if he finds it. $300 total if found." },
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

      <section id="pricing" className="py-20 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Pricing</h2>
            <h3 className="text-3xl font-bold mb-3">You pay for the look.</h3>
            <p className="text-gray-400">$250 to come out. $50 more if found. $300 if found. No season pack. Hunters pay when they just shot a deer and cannot find it.</p>
          </div>
          <div className="max-w-md">
            <div className="flex flex-col rounded-xl p-8 border border-[#DC2626]/40 bg-[#DC2626]/5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-lg">Thermal search</h4>
                <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">Pay for the look</span>
              </div>
              <div className="text-3xl font-bold mb-1">$250</div>
              <div className="text-xs text-gray-500 mb-4">+ $50 if found ($300 total)</div>
              <p className="text-sm text-gray-400 mb-6">
                $250 is the search. You pay it no matter what. If Dean finds it, $50 more. No season pack.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "$250 to come out and look",
                  "$50 more if he finds it",
                  "$300 total if found",
                  "You pay for the look, not a season pack",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                    {CHECK}
                    {f}
                  </li>
                ))}
              </ul>
              <div className="rounded-lg border border-white/10 bg-black/20 p-4 mb-6">
                <div className="text-sm font-semibold mb-1">$250 books the flight</div>
                <p className="text-xs text-gray-500 mb-4">
                  {depositUrl
                    ? "Pay the $250 to book the search. Dean still has to be able to make it tonight."
                    : "Payment link is not live yet. Submit the dispatch and Dean will tell you how to pay the $250 if he can take the job."}
                </p>
                <DepositButton
                  url={depositUrl}
                  className="block w-full text-center bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#B91C1C] transition"
                />
              </div>
              <a href="#dispatch" className="text-center border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-semibold text-sm hover:border-[#DC2626]/40 transition">
                Submit a dispatch
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Service area</h2>
            <h3 className="text-2xl font-bold mb-3">Ohio only.</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Northeast Ohio. Pennsylvania is a hard no. Do not request a PA recovery.
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
                "If the deer is alive, stop and mark last position",
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

      <section id="dispatch" className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Emergency dispatch</h2>
            <h3 className="text-3xl font-bold mb-3">I am here. Can you make it tonight?</h3>
            <p className="text-gray-400">
              If you cannot get him on the phone, submit this. Name, phone, and where you are. He calls the number you leave.
            </p>
          </div>
          <DispatchForm depositUrl={depositUrl} />
        </div>
      </section>
    </>
  );
}
