import type { Metadata } from "next";
import Link from "next/link";
import ServiceBreadcrumbs from "@/components/services/ServiceBreadcrumbs";
import ServiceHeroImage from "@/components/services/ServiceHeroImage";
import ServiceDirectoryCard from "@/components/services/ServiceDirectoryCard";

export const metadata: Metadata = {
  title: "AI Integration & Automation",
  description:
    "AI assistants, workflow automation, CRM integrations, and internal tools built around real business operations.",
  alternates: { canonical: "/services/ai-automation" },
  openGraph: {
    title: "AI Integration & Automation | Dean Diego",
    description:
      "Connect AI models and automation workflows to the systems your business already uses.",
    url: "https://deandiego.com/services/ai-automation",
    type: "website",
  },
};

const CAPABILITIES = [
  {
    title: "AI assistants",
    description:
      "Focused assistants that retrieve the right context, use approved tools, and hand uncertain work back to a person.",
  },
  {
    title: "Workflow automation",
    description:
      "Event-driven pipelines for intake, routing, enrichment, notifications, and audit trails.",
  },
  {
    title: "System integration",
    description:
      "APIs and webhooks that connect CRMs, forms, databases, messaging platforms, and internal tools.",
  },
  {
    title: "Document and data processing",
    description:
      "Structured extraction, classification, report generation, and review queues for repetitive information work.",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <section className="border-b border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <ServiceBreadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: "AI Integration & Automation" },
            ]}
          />
          <ServiceHeroImage
          src="/images/services/09_ai_automation.jpg"
          alt="Desk monitors showing abstract automation workflows"
          />

          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            AI Integration & Automation.
          </h1>
          <p className="mb-8 max-w-2xl text-lg leading-relaxed text-gray-400">
            Connect models, workflows, and business systems around one clear
            operational outcome. The result is working infrastructure, not a
            chatbot demo looking for a problem.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/ai-automation/sprint"
              className="rounded-lg bg-[#DC2626] px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-[#B91C1C]"
            >
              See the fixed-scope sprint
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-white/15 px-8 py-3.5 text-sm font-semibold text-gray-300 transition hover:border-[#DC2626]/40"
            >
              Discuss a custom build
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              What I build
            </p>
            <h2 className="mb-3 text-3xl font-bold">
              Intelligence connected to operations.
            </h2>
            <p className="text-gray-400">
              Every system has a defined input, destination, fallback, and
              owner. Automation should make responsibility clearer, not hide
              it.
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
                <p className="text-sm leading-relaxed text-gray-400">
                  {capability.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 max-w-2xl">
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-[#DC2626]">
              Engagement paths
            </p>
            <h2 className="text-3xl font-bold">Pick the right scope.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <ServiceDirectoryCard
              eyebrow="Productized"
              title="AI Automation Sprint"
              description="One specific bottleneck, fixed scope, fixed price, and a production delivery in two weeks."
              href="/services/ai-automation/sprint"
              features={[
                "30-minute scoping call",
                "Production implementation",
                "30-day bug-fix window",
              ]}
            />
            <ServiceDirectoryCard
              eyebrow="Custom"
              title="Systems Integration"
              description="A larger integration when the work crosses several systems, teams, or delivery phases."
              href="/contact"
              features={[
                "Multi-system architecture",
                "Phased implementation",
                "Deployment and handoff",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent py-20">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Start with the bottleneck.
          </h2>
          <p className="mb-8 text-gray-400">
            Describe the manual step, delay, or handoff that keeps failing.
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
