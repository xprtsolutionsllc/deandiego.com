import type { Metadata } from "next";
import Link from "next/link";
import ServiceDirectoryCard from "@/components/services/ServiceDirectoryCard";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web applications, AI automation, and FAA Part 107 aerial documentation from Dean Diego.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services | Dean Diego",
    description:
      "Web applications, AI automation, and FAA Part 107 aerial documentation.",
    url: "https://deandiego.com/services",
    type: "website",
  },
};

const DIRECT_SERVICES = [
  {
    title: "AI Automation Sprint",
    description: "One operational bottleneck, built and shipped in two weeks.",
    href: "/services/ai-automation/sprint",
  },
  {
    title: "Real Estate Aerials",
    description: "Listing photos, cinematic video, and interactive 3D packages.",
    href: "/services/drone/real-estate",
  },
  {
    title: "Commercial Roof Inspection",
    description: "RTK roof files for PEs, consultants, and owners.",
    href: "/services/drone/roof-inspection",
  },
  {
    title: "Aerial Mapping",
    description: "Orthomosaics, surface models, point clouds, and site files.",
    href: "/services/drone/mapping",
  },
  {
    title: "Construction Progress",
    description: "Repeatable aerial documentation across project milestones.",
    href: "/services/drone/construction-progress",
  },
  {
    title: "Commercial Video",
    description: "Cinematic aerial work delivered for campaigns and properties.",
    href: "/services/drone/commercial-video",
  },
  {
    title: "Deer Recovery",
    description: "Thermal search across the Northeast Ohio service area.",
    href: "/services/drone/deer-recovery",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Services.</h1>
          <p className="max-w-2xl text-lg text-gray-400">
            Software, automation, and aerial documentation. Choose the work you
            need, then go straight to the details.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Three capabilities
            </p>
            <h2 className="mb-3 text-3xl font-bold">Built end to end.</h2>
            <p className="text-gray-400">
              Each service now has its own scope, process, and next step.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            <ServiceDirectoryCard
              id="web"
              eyebrow="Software"
              title="Web Applications & SaaS"
              description="Production web applications, client portals, APIs, payments, and deployment."
              href="/services/web-applications"
              features={[
                "Custom applications and SaaS",
                "Portals, APIs, and data systems",
                "Production deployment",
              ]}
            />
            <ServiceDirectoryCard
              id="ai"
              eyebrow="Automation"
              title="AI Integration & Automation"
              description="AI assistants, workflow automation, and internal tools tied to real business systems."
              href="/services/ai-automation"
              features={[
                "AI model integrations",
                "Workflow and CRM automation",
                "Fixed-scope automation sprint",
              ]}
            />
            <ServiceDirectoryCard
              id="drone"
              anchorAliases={["drone-pricing"]}
              eyebrow="Dean Diego Drone"
              title="Aerial Documentation"
              description="FAA Part 107 capture for listings, sites, commercial roofs, video, and deer recovery."
              href="/services/drone"
              features={[
                "Real estate packages",
                "Mapping and progress files",
                "Thermal search",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Go straight to the work
            </p>
            <h2 className="mb-3 text-3xl font-bold">Every service page.</h2>
            <p className="text-gray-400">
              Pricing is public where the scope is repeatable. Commercial work
              is quoted to the site and deliverables.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DIRECT_SERVICES.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-[#DC2626]/40"
              >
                <h3 className="mb-2 font-semibold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold">
            A direct process.
          </h2>
          <p className="mx-auto mb-16 max-w-lg text-center text-gray-400">
            Clear scope, working delivery, and no mystery between the two.
          </p>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Choose the service",
                desc: "Start with the page that matches the outcome you need. Each one states what is included and what is not.",
              },
              {
                step: "02",
                title: "Confirm the scope",
                desc: "Share the bottleneck, property, or deliverables. Repeatable packages show starting prices; custom work gets a direct quote.",
              },
              {
                step: "03",
                title: "Receive the work",
                desc: "Software ships to a working environment. Aerial files arrive ready for the professional or platform that uses them next.",
              },
            ].map((item) => (
              <div key={item.step}>
                <div className="mb-4 font-mono text-5xl font-bold text-[#DC2626]">
                  {item.step}
                </div>
                <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-400">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">Not sure where to start?</h2>
          <p className="mb-8 text-gray-400">
            Describe the outcome. I will point you to the right service.
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
