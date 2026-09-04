import type { Metadata } from "next";
import Link from "next/link";
import DroneDisclaimer from "@/components/services/DroneDisclaimer";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeroImage from "@/components/services/ServiceHeroImage";

export const metadata: Metadata = {
  title: "Real Estate Drone Photography",
  description:
    "FAA Part 107 real estate aerial photos from $200, photo and video packages from $250, and interactive 3D packages from $450 in Northeast Ohio.",
  alternates: { canonical: "/services/drone/real-estate" },
  openGraph: {
    title: "Real Estate Drone Photography | Dean Diego Drone",
    description:
      "MLS-ready aerial photos, cinematic listing video, and interactive 3D packages in Northeast Ohio.",
    url: "https://deandiego.com/services/drone/real-estate",
    type: "website",
  },
};

const PACKAGES = [
  {
    name: "Aerial Photos",
    price: "from $200",
    turnaround: "24-hour delivery",
    description:
      "The MLS essentials, captured to show the property, lot, access, and surrounding context.",
    features: [
      "12-18 MLS-ready aerial stills",
      "Front, rear, sides, orbit, and context shots",
      "Neighborhood and lot-context views",
      "Delivered through a download link",
    ],
    cta: "Book photos",
    popular: false,
  },
  {
    name: "Photos + Video",
    price: "from $250",
    turnaround: "24-48 hour delivery",
    description:
      "A complete still set plus a short cinematic aerial edit ready for listing and social channels.",
    features: [
      "Everything in Aerial Photos",
      "45-60 second cinematic aerial clip",
      "Licensed music",
      "Branded photo documentation report",
    ],
    cta: "Book photos + video",
    popular: true,
  },
  {
    name: "Premium 3D",
    price: "from $450",
    turnaround: "48-hour delivery",
    description:
      "The full photo and video package plus an interactive 3D walkthrough buyers can open on a phone.",
    features: [
      "Everything in Photos + Video",
      "Interactive 3D walkthrough link",
      "No app required",
      "Shareable with every buyer lead",
    ],
    cta: "Book premium 3D",
    popular: false,
  },
];

export default function RealEstateDronePage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Aerial Documentation", href: "/services/drone" },
              { label: "Real Estate" },
            ]}
          />
          <ServiceHeroImage
          src="/images/services/05_real_estate.jpg"
          alt="Oblique aerial of a suburban Ohio home for real estate listing"
          />

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Real Estate Aerials.
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-gray-400">
            MLS-ready photos, cinematic video, and interactive 3D delivery for
            listings across Northeast Ohio. Flat starting prices keep the
            booking decision simple.
          </p>
          <DroneDisclaimer className="mb-8 max-w-2xl" />
          <Link
            href="/contact?topic=drone-realestate"
            className="inline-block rounded-lg bg-[#DC2626] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Book a listing
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Packages
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Choose the listing deliverable.
            </h2>
            <p className="text-gray-400">
              Starting prices are confirmed from the property address and
              deadline. Three or more listings a month qualifies for package
              pricing.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {PACKAGES.map((item) => (
              <article
                key={item.name}
                className={`flex flex-col rounded-xl border p-8 ${
                  item.popular
                    ? "border-[#DC2626]/40 bg-[#DC2626]/5"
                    : "border-white/10 bg-white/[0.03]"
                }`}
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  {item.popular ? (
                    <span className="rounded-full bg-[#DC2626]/10 px-2.5 py-0.5 text-xs font-semibold text-[#DC2626]">
                      Most booked
                    </span>
                  ) : null}
                </div>
                <p className="mb-1 text-3xl font-bold">{item.price}</p>
                <p className="mb-4 text-xs text-gray-500">{item.turnaround}</p>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
                <ul className="mb-8 flex-1 space-y-2.5">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-gray-400"
                    >
                      <svg
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#DC2626]"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 12.75 6 6 9-13.5"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?topic=drone-realestate"
                  className={`rounded-lg px-6 py-3 text-center text-sm font-semibold transition ${
                    item.popular
                      ? "bg-[#DC2626] text-white hover:bg-[#B91C1C]"
                      : "border border-white/15 text-gray-300 hover:border-[#DC2626]/40"
                  }`}
                >
                  {item.cta}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Add-ons
            </p>
            <h2 className="mb-4 text-3xl font-bold">Quoted from the property.</h2>
            <p className="mb-6 leading-relaxed text-gray-400">
              Twilight timing, same-week rush, lots over 2 acres, and travel
              beyond 25 miles are confirmed before booking. Nothing is added
              after the flight without approval.
            </p>
            <Link
              href="/contact?topic=drone-realestate"
              className="text-sm font-semibold text-[#DC2626] hover:underline"
            >
              Share the listing address <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-gray-500">
              Live delivery sample
            </p>
            <h3 className="mb-3 text-2xl font-bold">Open the 3D experience.</h3>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              See the same browser-based delivery a buyer or agent receives.
              It opens without an app.
            </p>
            <a
              href="https://goxprt.com/share/ivzH1wyTtLHPG5EE_dWPYDOTJwbzg66b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-[#DC2626] hover:underline"
            >
              View the live 3D sample <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Have a listing date?</h2>
          <p className="mb-8 text-gray-400">
            Send the address, target date, and package.
          </p>
          <Link
            href="/contact?topic=drone-realestate"
            className="inline-block rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Book a listing
          </Link>
        </div>
      </section>
    </>
  );
}
