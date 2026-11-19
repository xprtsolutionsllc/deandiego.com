import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESUME_PATH } from "@/lib/site-profile";

export const metadata: Metadata = {
  title: "Window Depot USA Dealer Operations",
  description:
    "How I replaced manual lead forwarding with ZIP-based territory routing for about 86 Window Depot USA dealer locations, fixed a St. Louis dealer's CRM mapping with its vendor, and deployed AI webchat that booked a Dallas estimate.",
  openGraph: {
    title: "Window Depot USA Dealer Operations | Dean Diego",
    description:
      "Network OS replaced manual lead forwarding with ZIP-based territory routing for about 86 dealer locations, with native CRM integrations and dealer AI webchat.",
    url: "https://deandiego.com/work/wdusa",
  },
};

const FLOW = [
  { step: "Lead arrives", desc: "A homeowner submits a form on a dealer site. The lead carries a ZIP code and whatever the form captured." },
  { step: "Territory", desc: "The ZIP resolves to a territory, and the territory resolves to the dealer who owns it. No dealer means the lead is held rather than guessed." },
  { step: "CRM delivery", desc: "A native integration hands the lead to Builder Prime or MarketSharp and records whether the contact actually landed." },
  { step: "Follow-up", desc: "Product interests on the form map to the dealer's follow-up rules, so the sales team knows what to call about." },
];

const WORK = [
  {
    title: "Network OS territory routing",
    problem: "Corporate leads reached dealers by hand.",
    body: "Before Network OS, someone decided which dealer should get a corporate-site inquiry and forwarded it. I built Network OS for a network of about 86 dealer locations to replace that with ZIP-based territory routing: the lead resolves from ZIP to territory to dealer, then to that dealer's CRM, and every decision is recorded. I also wrote the onboarding guide staff use to run it.",
  },
  {
    title: "St. Louis: phone numbers missing",
    problem: "Web leads arrived at the CRM without a phone number.",
    body: "A St. Louis dealer's web leads were reaching the CRM with no phone number, so the sales team had no one to call. I worked with the dealer and its CRM vendor to trace the submission from the web form into the CRM, tested submissions together, and corrected the field mapping. I then connected each product interest on the form to the dealer's follow-up rules, so an inquiry about one product starts the right follow-up instead of a generic one.",
  },
  {
    title: "Builder Prime and MarketSharp",
    problem: "Dealers run different CRMs, so forwarding looked the same everywhere and worked the same nowhere.",
    body: "I built native integrations for Builder Prime and MarketSharp rather than one generic forwarder. I verified delivery in the Indianapolis dealer's live CRM, and I updated MarketSharp tracking so a lead is only marked delivered once the contact exists.",
  },
  {
    title: "Dealer AI webchat",
    problem: "Homeowners wanted answers on the dealer site, not a form.",
    body: "I deployed AI webchat for dealers, starting with the training content the chat relies on and staying through launch and support. In Dallas, a homeowner used the chat to book an in-home estimate, and the appointment landed on the dealer's calendar. The dealer later confirmed the sale. The sale belongs to the dealer; my part was getting the conversation onto their calendar.",
  },
  {
    title: "Service intake queue",
    problem: "Service requests arrived as a growing list with no way to work through it.",
    body: "I connected Gravity Forms, n8n, and Asana into a single queue for service requests. Staff closed 615 requests through the queue I built. I then added AI classification so generically named tasks received descriptive titles: 216 of them got a title that tells a coordinator what the request actually is.",
  },
  {
    title: "Read-only Google Ads reporting",
    problem: "Marketing staff needed ad data without write access or a new dashboard to learn.",
    body: "I gave marketing staff a way to query Google Ads in ChatGPT through a read-only integration. I verified live reporting across 16 client accounts. Read-only access was a deliberate choice: the staff get the numbers they need without a path to change spend or campaigns.",
  },
];

const RESULTS = [
  { metric: "About 86", label: "Dealer locations where manual lead forwarding was replaced by ZIP-based territory routing" },
  { metric: "615", label: "Service requests closed by staff through the queue I built" },
  { metric: "216", label: "Service tasks given descriptive titles by AI classification" },
  { metric: "16", label: "Client accounts covered by the read-only Google Ads reporting I verified" },
];

export default function WdusaPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">Dealer Operations at Window Depot USA</h1>
            <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm font-semibold rounded-full">About 86 locations</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            As Systems Integration Engineer, I build and operate the systems a network of about 86 dealer locations relies on to receive leads, book appointments, and work service requests. Most of the work starts with a dealer and their software vendor on the same call.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="aspect-[2/1] rounded-xl overflow-hidden border border-white/10">
            <Image
              src="/images/wdusa-network.jpg"
              alt="Illustrative map of about 86 Window Depot USA dealer locations"
              width={1672}
              height={941}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">A lead is only useful if the right dealer gets it.</h3>
            <p className="text-gray-400 leading-relaxed">
              Dealers operate their own businesses: different CRMs, different lead sources, different follow-up habits. A corporate inquiry has to land with the dealer who owns that ZIP, in the CRM that dealer already uses, with enough detail for the sales team to act. Done by hand, that work is slow, hard to audit, and easy to route to the wrong place.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The System</h2>
            <h3 className="text-2xl font-bold mb-4">ZIP to territory to dealer, then the CRM, then follow-up.</h3>
            <p className="text-gray-400 leading-relaxed">
              Network OS resolves each lead from its ZIP to a territory to a dealer, delivers it into that dealer&apos;s CRM through a native integration, and records the decision and what delivery actually did. Network OS is built on Next.js, TypeScript, Drizzle, and Postgres, deployed on Vercel, and the production repository stays private. The service queue runs on Gravity Forms, n8n, and Asana.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">How a lead moves.</h2>
          <div className="grid md:grid-cols-4 gap-6">
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
          <h2 className="text-2xl font-bold mb-2">What I built.</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">Each item starts with the problem a dealer was having, then what happened after it shipped.</p>
          <div className="space-y-4">
            {WORK.map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 md:p-8">
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-sm text-[#DC2626]/90 mb-3">{item.problem}</p>
                <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">After rollout.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <div className="text-3xl font-bold text-[#DC2626] mb-2">{r.metric}</div>
                <div className="text-xs text-gray-500 leading-relaxed">{r.label}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-500 leading-relaxed mt-8 max-w-3xl">
            No homeowner records, dealer contact details, credentials, or internal consoles are on this page. The production repository stays private. The deeper engineering writeup of Network OS routing and audits is available on request.
          </p>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="flex flex-wrap gap-2">
            {["Next.js", "TypeScript", "PostgreSQL", "Drizzle", "Vercel", "n8n", "Gravity Forms", "Asana", "WordPress", "Builder Prime", "MarketSharp", "OpenAI API"].map((t) => (
              <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-400">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-4">
          <Link href="/work/xprt-cloud" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center">
            Next: XPRT Cloud &rarr;
          </Link>
          <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center">
            Download Resume
          </a>
        </div>
      </section>
    </>
  );
}
