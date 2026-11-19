import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CERTIFICATION, EDUCATION, EMPLOYMENT, LOCATION } from "@/lib/site-profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Systems Integration Engineer at Window Depot USA and founder of XPRT Solutions LLC. My path from dealer websites and training materials into systems integration, CRM work, and applied AI.",
};

const PROGRESSION = [
  {
    period: "2022 - 2025",
    title: "Dealer websites and training materials",
    body: "I started at Window Depot USA building dealer websites, lead dashboards, and the training materials dealers used to run them. The work was close to the people using it, which is where I learned that software a dealer team cannot operate is software that does not ship.",
  },
  {
    period: "2025",
    title: "Systems Integration Specialist, AI and Automation",
    body: "The next step was connecting the pieces. I moved into integrations between web forms, n8n workflows, and the tools dealers already ran, then into AI automation as dealers asked for webchat, service triage, and reporting that reached their staff rather than another dashboard.",
  },
  {
    period: "November 2025 - Present",
    title: "Systems Integration Engineer",
    body: "Today I build and support the systems a network of about 86 dealer locations depends on: Network OS for ZIP-based territory routing, native CRM integrations for Builder Prime and MarketSharp, dealer AI webchat, and the service queue staff use daily. Much of the most useful work happens on a call with a single dealer and their CRM vendor.",
  },
];

const CREDENTIALS = [
  { label: EMPLOYMENT[0].title, org: EMPLOYMENT[0].company, year: EMPLOYMENT[0].period },
  { label: EMPLOYMENT[1].title, org: EMPLOYMENT[1].company, year: EMPLOYMENT[1].period },
  { label: CERTIFICATION.label, org: CERTIFICATION.org, year: "Certified" },
  { label: EDUCATION.label, org: EDUCATION.school, year: "In progress" },
];

const STACK = [
  { category: "Software", items: ["Python", "TypeScript", "SQL", "FastAPI", "React", "Next.js", "PostgreSQL", "Docker", "GitHub Actions"] },
  { category: "Integrations", items: ["REST APIs", "Webhooks", "n8n", "Zapier", "WordPress", "OpenAI API", "Vendasta", "Stripe"] },
  { category: "Dealer systems", items: ["Gravity Forms", "Builder Prime", "MarketSharp", "Google Ads API", "Asana"] },
  { category: "Aerial", items: ["FAA Part 107", "Aerial mapping", "3D reconstruction", "Site documentation"] },
];

const PRINCIPLES = [
  { title: "Stay close to the rollout", quote: "Deploying is the middle of the job. I want to hear what the dealer, the coordinator, or the marketing lead says after launch, because that is where the real problems show up." },
  { title: "Work with the vendors, not around them", quote: "A dealer's CRM vendor knows their product better than I do. I bring the integration and the data, and we fix the mapping together." },
  { title: "Trace the failure to the data", quote: "A field labeled active can hold a date. A provider can say delivered while the message never arrives. I read the values before I trust the check that reads them." },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About me.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Systems Integration Engineer at Window Depot USA, founder and sole engineer at XPRT Solutions LLC, and an FAA Part 107 commercial drone pilot based in {LOCATION}.
          </p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-3 space-y-5 text-gray-400 leading-relaxed">
            <p className="text-white text-lg font-medium">
              I work directly with dealers and their software vendors to fix how leads reach sales teams, how customers book appointments, and how staff handle service requests.
            </p>
            <p>
              I did not start in integration. I started on the dealer side of a home improvement network, building websites, lead dashboards, and training materials for teams who had to use them the next morning. That path led into systems integration, and then into applied AI, because the same question kept coming up: does this actually reach the person who has to act on it?
            </p>
            <p>
              At Window Depot USA I am a Systems Integration Engineer for a network of about 86 dealer locations. I built Network OS to replace manual lead forwarding with ZIP-based territory routing, wrote the onboarding guide staff use, and built native integrations for the CRMs dealers already run. Some of my most useful work is on a call with one dealer: in St. Louis, web leads were arriving without phone numbers, so the dealer, its CRM vendor, and I tested submissions together until the mapping was right.
            </p>
            <p>
              I also know what it feels like to be the person in the field. I fly commercial drone jobs, and after a flight I still owe the client a usable record of the site. As founder and sole engineer of XPRT Solutions, I built XPRT Cloud to turn aerial imagery into shareable jobsite reports and 3D views. I own the application from the Next.js interface and Python API through Stripe billing and the Docker deployment.
            </p>
            <p>
              {EDUCATION.label} at {EDUCATION.school}. The degree is interdisciplinary by design, and it fits how I work: software, business operations, aviation, and AI tend to meet in the same problem.
            </p>
            <p>
              The common thread: I build things that reach production, get used by real staff and customers, and I am still the person who answers when a dealer says the lead did not arrive.
            </p>
            <p>
              <Link href="/work" className="text-[#DC2626] hover:underline">See how the dealer operations work turned out</Link>
            </p>
          </div>
          <div className="md:col-span-2">
            <div className="aspect-[3/4] rounded-xl overflow-hidden border border-white/10 sticky top-24">
              <Image
                src="/images/dean-headshot.jpg"
                alt="Dean Diego portrait"
                width={900}
                height={1200}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Progression */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-2">How I got here.</h2>
          <p className="text-gray-400 mb-10 max-w-2xl">From dealer websites and training materials into systems integration and customer-facing AI.</p>
          <div className="space-y-4">
            {PROGRESSION.map((step) => (
              <div key={step.title} className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-10 border-l-2 border-[#DC2626]/40 pl-6 py-2">
                <div className="text-sm text-[#DC2626] font-medium">{step.period}</div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials + Stack */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Credentials</h2>
            <div className="space-y-4">
              {CREDENTIALS.map((c) => (
                <div key={c.label} className="bg-white/[0.03] border border-white/5 rounded-lg p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-sm">{c.label}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{c.org}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">{c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Tech stack</h2>
            <div className="space-y-6">
              {STACK.map((g) => (
                <div key={g.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DC2626] mb-2">{g.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">How I work.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PRINCIPLES.map((p) => (
              <div key={p.title} className="border-l-2 border-[#DC2626]/50 pl-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
