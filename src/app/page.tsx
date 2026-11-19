import Link from "next/link";
import Image from "next/image";
import {
  EMPLOYMENT,
  GITHUB_URL,
  HIRING_CTA,
  HEADLINE_LEAD,
  HEADLINE_REST,
  INTRO,
  LINKEDIN_URL,
  LOCATION,
  RESUME_PATH,
  WORK_PATHS,
  XPRT_CLOUD_URL,
} from "@/lib/site-profile";

const FEATURED = [
  {
    slug: "wdusa",
    title: "Dealer Operations at Window Depot USA",
    category: "Systems Integration",
    description:
      "Network OS replaced manual lead forwarding with ZIP-based territory routing for a network of about 86 dealer locations. When a St. Louis dealer's web leads arrived without phone numbers, I worked with the dealer and its CRM vendor to fix the field mapping and route each product interest to the right follow-up.",
    outcome: "In Dallas, webchat booked an in-home estimate on the dealer's calendar.",
    stack: "Next.js, TypeScript, PostgreSQL, n8n, Gravity Forms",
    imagePath: "/images/wdusa-network.jpg",
    imageAlt: "Illustrative map of about 86 Window Depot USA dealer locations",
    href: WORK_PATHS.dealerOperations,
  },
  {
    slug: "xprt-cloud",
    title: "XPRT Cloud",
    category: "Product Engineering",
    description:
      "I fly commercial drone jobs under my FAA Part 107 certificate, and I built the platform that turns the imagery into shareable jobsite reports and 3D views. I own the Next.js interface, the Python API, Stripe billing, and the Docker deployment.",
    outcome: "A running product used on my own flights.",
    stack: "Next.js, Python API, Stripe, Docker",
    imagePath: "/images/xprt-cloud-dashboard.png",
    imageAlt: "XPRT Cloud dashboard showing jobs and reports",
    href: WORK_PATHS.xprtCloud,
  },
];

const BUILD = [
  {
    title: "Dealer-facing systems",
    desc: "Lead intake, territory routing, CRM delivery, appointment booking, and service queues for a network of about 86 dealer locations. I work with dealers and their CRM vendors on the same problems in the same call.",
  },
  {
    title: "Applied AI that reaches the work",
    desc: "AI webchat that books estimates on a dealer's calendar, request classification that gives generically named service tasks real titles, and read-only analytics access for marketing staff.",
  },
  {
    title: "Software I run end to end",
    desc: "XPRT Cloud: a Next.js interface, a Python API, Stripe billing, and a Docker deployment. I built it and I am the person who operates it after launch.",
  },
];

const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dean Diego",
  jobTitle: "Forward Deployed Engineer",
  description:
    "Forward Deployed Engineer focused on systems integration and AI automation. Systems Integration Engineer at Window Depot USA, founder and sole engineer at XPRT Solutions LLC, and FAA Part 107 remote pilot.",
  url: "https://deandiego.com",
  address: { "@type": "PostalAddress", addressLocality: "Youngstown", addressRegion: "OH", addressCountry: "US" },
  sameAs: [LINKEDIN_URL, GITHUB_URL, XPRT_CLOUD_URL],
  worksFor: [
    { "@type": "Organization", name: "Window Depot USA" },
    { "@type": "Organization", name: "XPRT Solutions LLC" },
  ],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "Part 107 Remote Pilot Certificate",
    credentialCategory: "certification",
    recognizedBy: { "@type": "Organization", name: "Federal Aviation Administration" },
  },
  knowsAbout: [
    "systems integration",
    "AI automation",
    "CRM integration",
    "lead routing",
    "network operations",
    "Python",
    "TypeScript",
    "Next.js",
    "REST APIs and webhooks",
    "FAA Part 107",
    "aerial documentation",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(PERSON_JSON_LD).replace(/</g, "\\u003c"),
        }}
      />
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-1.5 border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium tracking-wide uppercase">
              Systems Integration | AI Automation | FAA Part 107
            </div>
            <h1 className="mb-6 tracking-tight">
              <span className="block text-[2.6rem] leading-[1.05] sm:text-6xl md:text-7xl font-bold text-[#DC2626]">
                {HEADLINE_LEAD}
              </span>
              <span className="mt-3 block text-xl sm:text-2xl md:text-3xl font-semibold text-gray-200 leading-snug">
                {HEADLINE_REST}
              </span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mb-4 leading-relaxed">{INTRO}</p>
            <p className="text-sm text-gray-500 mb-8">
              {LOCATION} &middot; Systems Integration Engineer at Window Depot USA &middot; Founder and sole engineer, XPRT Solutions LLC
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/work" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center">
                See My Work
              </Link>
              <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center">
                Download Resume
              </a>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="aspect-[4/5] rounded-xl overflow-hidden border border-white/10">
              <Image
                src="/images/dean-headshot.jpg"
                alt="Dean Diego portrait"
                width={1331}
                height={2000}
                priority
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected work.</h2>
              <p className="text-gray-400 max-w-xl">Two systems I built and still operate: dealer operations for Window Depot USA and XPRT Cloud.</p>
            </div>
            <Link href="/work" className="text-sm text-gray-300 hover:text-white hover:underline hidden md:block whitespace-nowrap">View all &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {FEATURED.map((p) => (
              <Link key={p.slug} href={p.href} className="group flex flex-col bg-white/[0.03] border border-white/5 rounded-xl overflow-hidden hover:border-[#DC2626]/30 transition">
                <div className="aspect-[16/9] overflow-hidden border-b border-white/5">
                  <Image
                    src={p.imagePath}
                    alt={p.imageAlt}
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 p-7">
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{p.category}</div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-[#DC2626] transition">{p.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{p.description}</p>
                  <p className="text-sm text-gray-300 leading-relaxed mb-4 border-l-2 border-[#DC2626]/50 pl-3">{p.outcome}</p>
                  <div className="mt-auto text-xs text-gray-500 font-mono">{p.stack}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What I build */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">What I build</h2>
            <h3 className="text-3xl font-bold">Software that has to work for the people using it.</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {BUILD.map((s) => (
              <div key={s.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applied AI */}
      <section id="ai-approach" className="py-24 border-t border-white/5 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-10">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Applied AI</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">AI is only worth it when it reaches the work.</h3>
            <p className="text-lg text-gray-400">
              I deploy AI where a salesperson, a service coordinator, or a marketing lead has to act on it, then I stay close enough to a rollout to hear what happened after launch.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-7">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Dealer webchat</div>
              <h4 className="font-semibold text-lg mb-3">Dallas: a booked estimate</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                I deployed AI webchat for dealers from training content through launch and support. In Dallas, a homeowner used the chat to book an in-home estimate, and the appointment landed on the dealer&apos;s calendar. The dealer later confirmed the sale. The sale belongs to the dealer; my part was getting the conversation onto their calendar.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-7">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Service intake</div>
              <h4 className="font-semibold text-lg mb-3">615 requests through the queue</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Staff closed 615 service requests through the queue I built. I added AI classification to give generically named tasks descriptive titles so the queue could be triaged instead of reread.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-7">
              <div className="text-xs text-gray-500 uppercase tracking-wider mb-3">Reporting</div>
              <h4 className="font-semibold text-lg mb-3">Read-only ads reporting</h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                Marketing staff can now query Google Ads in plain language without taking raw API access or write permissions somewhere they do not belong. I verified read-only reporting across 16 client accounts.
              </p>
            </div>
          </div>
          <p className="mt-8 text-sm text-gray-500">
            More on how each rollout went: <Link href={WORK_PATHS.dealerOperations} className="text-[#DC2626] hover:underline">dealer operations case study</Link>.
          </p>
        </div>
      </section>

      {/* Employment */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-10">Where I work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {EMPLOYMENT.map((job) => (
              <div key={job.company} className="bg-white/[0.03] border border-white/5 rounded-xl p-8">
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-sm text-gray-300 mt-1">{job.company}</p>
                <p className="text-xs text-gray-500 mt-1">{job.period}</p>
                <p className="text-sm text-gray-400 leading-relaxed mt-4">{job.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Hiring for a customer-facing engineering role?</h2>
          <p className="text-gray-300 mb-2 max-w-2xl mx-auto">{HIRING_CTA}</p>
          <p className="text-sm text-gray-500 mb-8">{LOCATION}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact?topic=hiring" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
              Get in Touch
            </Link>
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-10 py-4 rounded-lg font-semibold hover:bg-white/5 transition text-lg inline-block">
              Download Resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
