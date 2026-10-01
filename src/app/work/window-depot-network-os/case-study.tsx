import Link from "next/link";

const FLOW = [
  { step: "ZIP", desc: "The lead arrives with a postal code and nothing else I am willing to trust." },
  { step: "Territory", desc: "The ZIP resolves to a territory. The territory is an identifier, not a label on a spreadsheet." },
  { step: "Dealer", desc: "The territory resolves to the dealer who owns it. No dealer means the lead stays unrouted." },
  { step: "CRM", desc: "A delivery adapter hands a forwarded lead to that dealer's CRM." },
  { step: "Audit", desc: "The trail records the routing decision and what delivery actually did." },
];

const INCIDENTS = [
  {
    title: "The wrong Fairfax",
    body: "Fairfax City (~24k) was configured where Fairfax County (~1.1M) belonged. Two real leads were impacted. San Bernardino was missing from Riverside. A Springfield cross-wire nearly put an Illinois dealer on Missouri counties. That one was caught before a misroute.",
  },
  {
    title: "Unrouted was one pile",
    body: "Leads that failed to route sat in a single bucket. A missing territory, a territory with no dealer, and a ZIP that would not resolve are different problems. Treating them as one failure hid the map of where the network had no coverage.",
  },
  {
    title: "The column was not a lifecycle",
    body: "The dealer importer reads Airtable. A field that looked like the lifecycle value \"active\" was actually join-date notes. A refresh could re-arm inactive dealers. The column name implied a status. Reading the cell values exposed the defect.",
  },
  {
    title: "Send OK was a claim",
    body: "The email provider reported send OK while its suppression lists blocked live dealer lead addresses. The console showed a delivery. The dealer never received the lead.",
  },
];

const FIXES = [
  {
    title: "Identifier reconcile",
    body: "Territory config is fixed by reconciling FIPS and other identifiers, then working a punch list. Not by another round of spreadsheet patches.",
  },
  {
    title: "Coverage buckets",
    body: "Unrouted leads are split into no territory, territory with no dealer, ZIP unresolved, and other. The failures become a recruitment map.",
  },
  {
    title: "One-way ratchet",
    body: "The importer may tighten a dealer and may not loosen one. A refresh can keep an inactive dealer inactive. It cannot turn them back on from a misread note.",
  },
  {
    title: "Pre-send guard",
    body: "Delivery checks the address before send, and a daily audit compares provider success with what was actually accepted. OK is not proof.",
  },
];

const HABITS = [
  {
    title: "Identifiers come from the data",
    body: "Resolve a place, a dealer, or a status from the values in the cells. The name of the column is a hint, and this bug showed it can be the wrong hint.",
  },
  {
    title: "The first audit run tests the tool",
    body: "If the audit trusts the same field that caused the defect, the first run blesses the defect. I read the values before I trust the check that reads them.",
  },
  {
    title: "Success is what the dealer received",
    body: "A provider status, a green row, or a refreshed import is a claim about the world. The operator question is whether the dealer got the lead, and whether an inactive dealer stayed inactive.",
  },
];

export default function CaseStudyBody() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Window Depot USA Network OS</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">Private repo</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            I build and operate the routing and delivery layers of the corporate lead console for the Window Depot USA dealer network. The production Network OS repository stays private. This page is a sanitized operator writeup.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">A lead is only useful if the right dealer gets it.</h3>
            <p className="text-gray-400 leading-relaxed">
              Corporate takes a homeowner inquiry, decides which dealer owns that ZIP, and has to land it in that dealer&apos;s CRM with a record of the decision. Miss the territory and the lead sits. Wire the wrong county and it goes to the wrong shop. I own the routing and delivery path that has to get that right.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The System</h2>
            <h3 className="text-2xl font-bold mb-4">ZIP to territory to dealer, then the CRM, then an audit.</h3>
            <p className="text-gray-400 leading-relaxed">
              Routing resolves ZIP to territory to dealer. The inbox marks each lead spam, held, forwarded, or unrouted. Delivery adapters hand a forwarded lead to the dealer CRM. The audit trail records the decision and the send. The stack is Next.js, TypeScript, Drizzle, Postgres, and Vercel.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">The path.</h2>
          <pre className="mb-8 overflow-x-auto rounded-xl border border-white/10 bg-white/[0.03] p-6 text-sm text-gray-300 font-mono leading-relaxed">{`ZIP -> territory -> dealer -> CRM -> audit
              |            |
              |            +-> inbox: spam | held | forwarded | unrouted
              +-> gap: no territory | territory, no dealer | ZIP unresolved | other`}</pre>
          <div className="grid md:grid-cols-5 gap-6">
            {FLOW.map((item, index) => (
              <div key={item.step} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <div className="text-2xl font-bold text-[#DC2626] mb-2">{index + 1}</div>
                <h3 className="font-semibold mb-2">{item.step}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Incident</h2>
          <h3 className="text-2xl font-bold mb-8">What the data did when the config was wrong.</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {INCIDENTS.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Fix</h2>
          <h3 className="text-2xl font-bold mb-8">Make the failure mode visible, then stop it from coming back.</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {FIXES.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Operator habits</h2>
          <h3 className="text-2xl font-bold mb-8">Rules I kept after these incidents.</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {HABITS.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "Drizzle", "Postgres", "Vercel"].map((item) => (
              <span key={item} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-400">{item}</span>
            ))}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-3xl">
            No homeowner records, credentials, or internal consoles are on this page. The production repository stays private.
          </p>
        </div>
      </section>
    </>
  );
}
