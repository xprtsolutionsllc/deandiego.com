import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Automation Sprint — $4,500 fixed-fee, 2 weeks",
  description:
    "$4,500 fixed-fee. Two weeks. One operational bottleneck eliminated. CRM routing, lead workflows, internal AI tools, automation pipelines — built and shipped, not proposed.",
  openGraph: {
    title: "AI Automation Sprint — $4,500 fixed-fee, 2 weeks",
    description:
      "One bottleneck eliminated in 14 days. Fixed price, no scope creep, no retainer.",
    url: "https://deandiego.com/ai-sprint",
    type: "website",
  },
};

const INCLUDED = [
  "30-minute scoping call (free)",
  "Detailed write-up of what gets built and what does not",
  "End-to-end build of one specific automation or AI integration",
  "Production deployment to your stack or mine",
  "Loom walkthrough showing how it works",
  "30 days of bug-fix support after delivery",
  "Source code and full ownership transferred to you",
];

const NOT_INCLUDED = [
  "Open-ended retainers or monthly fees",
  '"Discovery phase" billed by the hour',
  "Multi-system overhauls (those are real projects, not sprints)",
  "Vendor management or holding meetings with your other agencies",
  "Anything I cannot finish in 14 days",
];

const FIT = [
  {
    label: "Home services operators (HVAC, plumbing, electrical, solar, landscaping)",
    desc: "Lead routing, intake automation, scheduling workflows, customer follow-up sequences.",
  },
  {
    label: "Real-estate teams and brokerages",
    desc: "MLS data pipelines, listing automation, agent onboarding flows, AI-powered comparative analysis.",
  },
  {
    label: "Professional service firms (inspectors, adjusters, consultants)",
    desc: "Report generation, document parsing, client portal automation, AI-assisted writing pipelines.",
  },
  {
    label: "Anyone with a single, specific bottleneck",
    desc: "If you know exactly what is broken and can describe it in one sentence, this is for you.",
  },
];

const NOT_A_FIT = [
  "You want a strategist to tell you what to build (I am the builder, not the strategist).",
  "Your bottleneck requires legal, regulated, or compliance-certified work.",
  "You need ongoing engineering support beyond bug fixes.",
  "You want to evaluate three vendors and pick the cheapest. I am not the cheapest.",
];

const TIMELINE = [
  {
    step: "Day 0",
    title: "Scoping call",
    desc: "30 minutes. You describe the bottleneck. I tell you on the call whether I can build it in 14 days, exactly what it will do, and whether it is a fit. No follow-up proposal, no week-long evaluation.",
  },
  {
    step: "Day 1",
    title: "Sprint kickoff",
    desc: "$4,500 invoice paid in full to start. Stripe link. I begin same day. You get a Slack/email channel and a daily-update cadence so you always know where things stand.",
  },
  {
    step: "Days 2-12",
    title: "Build",
    desc: "Working software shipped to a staging environment within the first 5 days. Real, runnable progress every day — not Figma mockups, not Notion docs, not weekly status meetings.",
  },
  {
    step: "Day 13",
    title: "Production deploy + walkthrough",
    desc: "Code deployed to your environment (or hosted on mine). Loom video walking through what it does, where the buttons are, and what to do if anything breaks.",
  },
  {
    step: "Day 14-44",
    title: "Bug-fix window",
    desc: "30 days post-delivery, anything that breaks gets fixed at no additional cost. After day 44, if you want changes, those are scoped as a new sprint or a separate project.",
  },
];

const CASE_STUDIES = [
  {
    label: "Multi-location dealer network — corporate lead routing",
    problem:
      "An ~86-location franchise was getting corporate-website leads but routing them by hand. Leads sat for hours, occasionally days, before reaching the right local dealer. Conversion dropped because of the lag.",
    build:
      "Replaced the manual triage with an automated form-to-CRM pipeline: form submission → state-and-territory lookup → dealer matching → email + audit log → fallback to a designated owner if no match. Live across the entire network.",
    outcome:
      "Routing time dropped from hours to seconds. Every lead has an audit trail. The owner-designate fallback caught the 17 edge-case locations that had no clean match.",
    timebox: "Phase 1 shipped in 2 weeks. Phases 2-3 followed as separate engagements.",
  },
  {
    label: "Inbound partner-request triage",
    problem:
      "Internal team was triaging inbound partner service requests by hand and assigning them based on a submitter-selected category that was wrong about half the time. Wrong assignments stalled work for days.",
    build:
      "Replaced the submitter-categorization with an AI agent that reads the request description, classifies it independently, and auto-assigns to the right team member. Human override one click away.",
    outcome:
      "Mis-routes dropped sharply. Triage labor went to near-zero. The team lead now reviews exceptions instead of triaging from scratch.",
    timebox: "Shipped in 10 days inside a single sprint.",
  },
];

const FAQ = [
  {
    q: "Why fixed-price instead of hourly?",
    a: "Hourly billing rewards slow work. Fixed-price means I am incentivized to ship fast and ship right. If I underestimate, that is on me, not you.",
  },
  {
    q: "What if my bottleneck is too big for 2 weeks?",
    a: "Then it is not a sprint, it is a project. We can talk about scoping it as a multi-sprint engagement or a fixed-fee project. Either way you get a real estimate on the call, not a guess.",
  },
  {
    q: "Do you sign NDAs?",
    a: "Yes. Mutual NDA on request before the scoping call. I will not name your company or your specifics in any outbound case study without explicit written permission.",
  },
  {
    q: "What stack do you build on?",
    a: "Whatever fits. Default toolkit: Next.js, FastAPI, Python, n8n, Stripe, Clerk, PostgreSQL, Cloudflare. Comfortable with most CRMs (Builder Prime, MarketSharp, HubSpot, Salesforce) and most messaging platforms (Twilio, A2P-registered SMS, email APIs).",
  },
  {
    q: "Can I see the code?",
    a: "Yes. You own everything I build for you. Source code, deployment scripts, environment configs — all transferred at delivery. No vendor lock-in.",
  },
  {
    q: "How do I know you can ship in 14 days?",
    a: "I have a track record of shipping production systems in days, not months. The scoping call is where I tell you honestly whether your specific bottleneck fits the 14-day window. If it does not, I will say so.",
  },
];

export default function AISprintPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-white/5 bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <div className="inline-block mb-6 px-4 py-1.5 border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium tracking-wide uppercase">
            AI Automation Sprint
          </div>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] mb-6">
            $4,500. <span className="text-[#DC2626]">Two weeks.</span>
            <br />
            One bottleneck eliminated.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8 leading-relaxed">
            Fixed-fee. Fixed-scope. No retainers, no week-long discovery phase, no monthly invoices.
            One specific operational problem, identified on a 30-minute call, built and shipped in 14 days.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact?topic=ai-sprint"
              className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center"
            >
              Book a 30-min scoping call
            </Link>
            <a
              href="#timeline"
              className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center"
            >
              See the timeline
            </a>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Who this is for</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">A specific bottleneck. A specific deliverable.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {FIT.map((f) => (
              <div key={f.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{f.label}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 pt-12 border-t border-white/5">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">Not a fit if</h3>
            <ul className="space-y-2.5">
              {NOT_A_FIT.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                  <svg className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section id="timeline" className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Timeline</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Day-by-day, no surprises.</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            You get daily updates with real, working progress — not status meetings, not Notion docs, not Figma mockups.
          </p>
          <div className="space-y-6">
            {TIMELINE.map((t) => (
              <div key={t.step} className="grid md:grid-cols-[200px_1fr] gap-6 bg-white/[0.03] border border-white/5 rounded-xl p-6 md:p-8">
                <div>
                  <div className="text-[#DC2626] text-2xl font-bold font-mono">{t.step}</div>
                  <div className="font-semibold mt-1">{t.title}</div>
                </div>
                <p className="text-gray-400 leading-relaxed text-sm md:text-base">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Pricing</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">$4,500. Fixed. Inclusive.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Included</h3>
              <ul className="space-y-3">
                {INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                    <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-6">Not included</h3>
              <ul className="space-y-3">
                {NOT_INCLUDED.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500 max-w-3xl">
            First 1-2 sprints anchor at $4,500 as case-study pricing. Standard rate after that is $7,500. If your
            project is genuinely beyond a 14-day window, we can talk about scoping it as a multi-sprint engagement.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Recent work</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What this looks like in practice.</h2>
          <p className="text-gray-400 mb-12 max-w-2xl">
            Anonymized examples. Specifics are protected by client confidentiality.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((c) => (
              <div key={c.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
                <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-4">{c.label}</div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Problem</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{c.problem}</p>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Build</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{c.build}</p>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">Outcome</h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-5">{c.outcome}</p>
                <div className="text-xs text-gray-500 italic pt-4 border-t border-white/5">{c.timebox}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">FAQ</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">Common questions.</h2>
          <div className="space-y-6">
            {FAQ.map((f) => (
              <div key={f.q} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{f.q}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">One call. Honest answer.</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            30 minutes. You describe the bottleneck. I tell you whether I can fix it in 14 days, exactly what gets
            built, and what it costs. No proposal that takes a week to write. No follow-up sales sequence.
          </p>
          <Link
            href="/contact?topic=ai-sprint"
            className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block"
          >
            Book the call
          </Link>
        </div>
      </section>
    </>
  );
}
