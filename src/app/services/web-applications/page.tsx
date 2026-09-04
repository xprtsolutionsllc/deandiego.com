import type { Metadata } from "next";
import Link from "next/link";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeroImage from "@/components/services/ServiceHeroImage";

export const metadata: Metadata = {
  title: "Web Applications & SaaS",
  description:
    "Custom web applications, SaaS products, client portals, APIs, payments, and production deployment from Dean Diego.",
  alternates: { canonical: "/services/web-applications" },
  openGraph: {
    title: "Web Applications & SaaS | Dean Diego",
    description:
      "Production web applications built from interface through API, data, payments, and deployment.",
    url: "https://deandiego.com/services/web-applications",
    type: "website",
  },
};

const CAPABILITIES = [
  {
    title: "Custom web applications",
    description:
      "Focused applications for a real workflow, from the interface through permissions, data, and deployment.",
    features: ["Responsive interface", "Authentication", "Production hosting"],
  },
  {
    title: "SaaS platforms",
    description:
      "Subscription products with account boundaries, billing, dashboards, and the operational paths behind them.",
    features: ["Multi-tenant architecture", "Stripe billing", "Account workflows"],
  },
  {
    title: "Client portals",
    description:
      "Secure delivery spaces for customers to view status, access files, submit requests, and manage work.",
    features: ["Role-aware access", "File delivery", "Activity and status"],
  },
  {
    title: "APIs and data systems",
    description:
      "Documented endpoints, webhooks, and PostgreSQL models that connect the application to the rest of the business.",
    features: ["API design", "PostgreSQL", "Third-party integrations"],
  },
];

const STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Python",
  "FastAPI",
  "PostgreSQL",
  "Tailwind CSS",
  "Vercel",
  "Stripe",
  "Clerk",
];

export default function WebApplicationsPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "Web Applications & SaaS" },
            ]}
          />
          <ServiceHeroImage
          src="/images/services/10_web_applications.jpg"
          alt="Laptop on a dark desk showing a blurred product dashboard"
          />

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            Web Applications & SaaS.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Production software built end to end. Interface, authentication,
            data, payments, APIs, and deployment stay connected from the first
            decision to the live release.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-lg bg-[#DC2626] px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              Discuss a build
            </Link>
            <Link
              href="/work"
              className="rounded-lg border border-white/15 px-8 py-3.5 text-center text-sm font-semibold text-gray-300 transition hover:border-[#DC2626]/40"
            >
              See shipped work
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Capabilities
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              The complete application path.
            </h2>
            <p className="text-gray-400">
              Build the smallest useful system, connect the real dependencies,
              and put it in front of users.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {CAPABILITIES.map((capability) => (
              <article
                key={capability.title}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-8"
              >
                <h3 className="mb-3 text-xl font-semibold">
                  {capability.title}
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-gray-400">
                  {capability.description}
                </p>
                <ul className="space-y-2.5">
                  {capability.features.map((feature) => (
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
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
                Working stack
              </p>
              <h2 className="mb-4 text-3xl font-bold">
                Modern, boring where it matters.
              </h2>
              <p className="text-sm leading-relaxed text-gray-400">
                Tools are selected for the product and operating environment.
                The default stack is proven, deployable, and easy to hand off.
              </p>
            </div>
            <div className="flex content-start flex-wrap gap-3">
              {STACK.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
            Selected proof
          </p>
          <h2 className="mb-10 text-3xl font-bold">See the systems running.</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Link
              href="/work/xprt-cloud"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#DC2626]/40"
            >
              <h3 className="mb-2 text-xl font-semibold">XPRT Cloud</h3>
              <p className="text-sm leading-relaxed text-gray-400">
                A production SaaS platform spanning capture, processing,
                reports, delivery, accounts, and billing.
              </p>
            </Link>
            <Link
              href="/work/conversation-intelligence"
              className="rounded-xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-[#DC2626]/40"
            >
              <h3 className="mb-2 text-xl font-semibold">
                Conversation Intelligence
              </h3>
              <p className="text-sm leading-relaxed text-gray-400">
                A framework for turning conversations into structured,
                reviewable system actions.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Have a product to ship?</h2>
          <p className="mb-8 text-gray-400">
            Share the users, the workflow, and what success looks like.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#DC2626] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#B91C1C]"
          >
            Contact Dean
          </Link>
        </div>
      </section>
    </>
  );
}
