import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drone Services",
  description:
    "FAA Part 107 certified drone services in Northeast Ohio: real estate aerial photos from $175, cinematic listing video, interactive 3D walkthroughs, and commercial mapping, survey, and progress documentation.",
};

const CHECK = (
  <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const LISTING_TIERS = [
  {
    name: "Aerial Photos",
    price: "from $175",
    turnaround: "24-hour delivery",
    popular: false,
    blurb: "The MLS essentials. Every angle a listing needs to stop the scroll.",
    features: [
      "12-18 MLS-ready aerial stills",
      "Front, rear, sides, orbit, and context shots",
      "Neighborhood and lot-boundary views",
      "Delivered via download link",
    ],
    cta: { label: "Book photos", href: "/contact?topic=drone-realestate" },
  },
  {
    name: "Photos + Video",
    price: "from $325",
    turnaround: "24-48 hour delivery",
    popular: true,
    blurb: "Everything in Aerial Photos, plus motion. The package most listings book.",
    features: [
      "Everything in Aerial Photos",
      "45-60 second cinematic aerial clip",
      "Licensed music, edited and ready to post",
      "Branded photo report",
    ],
    cta: { label: "Book photos + video", href: "/contact?topic=drone-realestate" },
  },
  {
    name: "Premium 3D",
    price: "from $450",
    turnaround: "48-hour delivery",
    popular: false,
    blurb: "The full package, plus an interactive 3D walkthrough buyers open on their phone.",
    features: [
      "Everything in Photos + Video",
      "Interactive 3D walkthrough link",
      "Opens on any phone, no app required",
      "Shareable with every buyer lead",
    ],
    cta: { label: "Book premium 3D", href: "/contact?topic=drone-realestate" },
  },
];

const COMMERCIAL = [
  {
    name: "Mapping & Survey-Grade Capture",
    pricing: "Custom quote, scoped by acreage and deliverables",
    blurb:
      "Autonomous grid flights processed through a GPU photogrammetry pipeline. Built for land, sites, and stockpiles. Positional and boundary deliverables are stamped through licensed-surveyor partners where required.",
    features: [
      "Orthomosaic maps (GeoTIFF)",
      "3D point clouds and textured models",
      "Digital surface models (DSM)",
      "Volumetric measurements",
      "Client portal with downloads",
    ],
    cta: { label: "Scope a mapping job", href: "/contact?topic=drone-mapping" },
  },
  {
    name: "Construction Progress Documentation",
    pricing: "Custom quote, per-visit or recurring",
    blurb:
      "Scheduled flights over active sites with consistent flight paths, so week-over-week progress is actually comparable. AI-assisted photo analysis and branded PDF reports on every visit.",
    features: [
      "Recurring or milestone-based flights",
      "Repeatable flight paths for true comparisons",
      "AI-powered photo analysis",
      "Branded PDF progress reports",
      "Roof and exterior condition documentation",
    ],
    cta: { label: "Set up progress flights", href: "/contact?topic=drone-mapping" },
  },
  {
    name: "Commercial & Brand Video",
    pricing: "Custom quote, scoped by format and length",
    blurb:
      "Cinematic aerial work for businesses, developments, and marketing campaigns. Shot to brief, edited to the format you need, delivered ready to publish.",
    features: [
      "Marketing and brand films",
      "Development and property showcases",
      "Event coverage",
      "Edited deliverables in your formats",
    ],
    cta: { label: "Commission video", href: "/contact?topic=drone-video" },
  },
];

export default function DroneServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            <Link href="/services" className="hover:text-[#DC2626] transition">Services</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Drone</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Drone Services.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            FAA Part 107 certified. Commercially insured. Real estate packages with flat starting prices, and custom-scoped commercial work, all delivered through a professional pipeline I built myself.
          </p>
          <div className="flex flex-wrap gap-3">
            {["FAA Part 107 certified", "Commercial liability insurance", "NDAA-compliant operations", "24-48 hour delivery"].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Real estate packages */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Real estate</h2>
            <h3 className="text-3xl font-bold mb-3">Per-listing packages.</h3>
            <p className="text-gray-400">Flat starting prices, confirmed on a five-minute call. Twilight shoots, same-week rush, lots over 2 acres, and travel beyond 25 miles are quoted as add-ons. Three or more listings a month gets package pricing.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {LISTING_TIERS.map((tier) => (
              <div key={tier.name} className={`flex flex-col rounded-xl p-8 border ${tier.popular ? "border-[#DC2626]/40 bg-[#DC2626]/5" : "border-white/10 bg-white/[0.03]"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold text-lg">{tier.name}</h4>
                  {tier.popular && <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">Most booked</span>}
                </div>
                <div className="text-3xl font-bold mb-1">{tier.price}</div>
                <div className="text-xs text-gray-500 mb-4">{tier.turnaround}</div>
                <p className="text-sm text-gray-400 mb-6">{tier.blurb}</p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                      {CHECK}
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href={tier.cta.href} className={`text-center px-6 py-3 rounded-lg font-semibold text-sm transition ${tier.popular ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]" : "border border-white/15 text-gray-300 hover:border-[#DC2626]/40"}`}>
                  {tier.cta.label}
                </Link>
              </div>
            ))}
          </div>
          <a href="https://goxprt.com/share/uBFW9N_DC4TU9nrcS1LjPW9WxQfIMaTw" target="_blank" rel="noopener noreferrer" className="text-sm text-[#DC2626] font-medium hover:underline">
            See a live 3D walkthrough sample &rarr;
          </a>
        </div>
      </section>

      {/* Commercial work */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl mb-12">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Commercial</h2>
            <h3 className="text-3xl font-bold mb-3">Bigger jobs, scoped to the site.</h3>
            <p className="text-gray-400">Mapping, recurring progress documentation, and commercial video are quoted per project: acreage, deliverables, and cadence drive the number. Every quote lands on the discovery call, not a week later.</p>
          </div>
          <div className="space-y-6">
            {COMMERCIAL.map((job) => (
              <div key={job.name} className="grid md:grid-cols-[2fr_1fr] gap-8 rounded-xl border border-white/10 bg-white/[0.03] p-8 items-start">
                <div>
                  <h4 className="font-semibold text-xl mb-1">{job.name}</h4>
                  <div className="text-xs text-gray-500 mb-4">{job.pricing}</div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">{job.blurb}</p>
                  <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {job.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                        {CHECK}
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:justify-self-end md:self-center">
                  <Link href={job.cta.href} className="inline-block border border-white/15 text-gray-300 px-6 py-3 rounded-lg font-semibold text-sm hover:border-[#DC2626]/40 transition">
                    {job.cta.label}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">How booking works.</h2>
          <p className="text-gray-400 mb-16 text-center max-w-lg mx-auto">Three steps, no waiting on proposals.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Quote on the call", desc: "Five minutes: address, scope, timeline. You get the exact number on the call, and a booking confirmation with my Part 107 certificate and insurance certificate attached." },
              { step: "02", title: "The flight", desc: "Airspace clearance and weather minimums checked before every flight. If conditions are not safe or legal, we reschedule; that discipline is part of what you are paying for." },
              { step: "03", title: "Delivery", desc: "Photos in 24 hours, video in 24-48, 3D walkthroughs in 48. Everything lands in a download link or client portal, ready for MLS, marketing, or the site trailer." },
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

      {/* CTA */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to fly?</h2>
          <p className="text-gray-400 mb-8">Tell me about the property or the project. You will have a number the same day.</p>
          <Link href="/contact?topic=drone-realestate" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
            Book a flight
          </Link>
        </div>
      </section>
    </>
  );
}
