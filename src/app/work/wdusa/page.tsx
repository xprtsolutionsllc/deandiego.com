import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Window Depot USA — Case Study" };

export default function WdusaPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">Window Depot USA</h1>
            <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm font-semibold rounded-full">86 locations</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">Enterprise systems integration for a national home improvement brand — connecting 86 independent dealer locations through automated workflows, CRM pipelines, and marketing infrastructure.</p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <ImagePlaceholder label="WDUSA systems overview / workflow diagram" aspect="aspect-[2/1]" />
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Challenge</h2>
            <h3 className="text-2xl font-bold mb-4">86 independent dealers. One brand. Zero integration.</h3>
            <p className="text-gray-400 leading-relaxed">
              Window Depot USA operates as a franchisor-style model with 86 independently owned dealer locations. Each location used different CRMs, different lead sources, different marketing tools. Corporate had limited visibility into dealer operations, lead flow, and marketing effectiveness.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Solution</h2>
            <h3 className="text-2xl font-bold mb-4">Automated infrastructure that scales.</h3>
            <p className="text-gray-400 leading-relaxed">
              I built the systems integration layer that connects corporate marketing to dealer operations. Automated lead routing, CRM pipeline management, marketing tool deployment, and dealer management — all running on self-hosted infrastructure processing thousands of events daily.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">What I built.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Lead Routing & Distribution", desc: "Automated lead flow from web forms, call tracking, and third-party sources to the correct dealer CRM based on geography, availability, and capacity." },
              { title: "n8n Automation Platform", desc: "Self-hosted workflow engine processing CRM events, marketing triggers, dealer onboarding, and reporting — replacing dozens of Zapier workflows." },
              { title: "Dealer Marketing Infrastructure", desc: "Templated website deployment, Google Business Profile management, review monitoring, and local SEO tooling across all 86 locations." },
              { title: "Reporting & Analytics", desc: "Automated performance reporting, lead attribution, conversion tracking, and dealer scorecards delivered to corporate leadership." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="flex flex-wrap gap-2">
            {["n8n", "WordPress", "PHP", "Docker", "PostgreSQL", "Zapier", "MarketSharp", "Builder Prime", "Gravity Forms", "Google Business API", "Hostinger VPS", "Coolify"].map((t) => (
              <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-400">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "86", label: "Dealer locations" },
              { metric: "1000s", label: "Events/day processed" },
              { metric: "24/7", label: "Automated operations" },
              { metric: "1", label: "Person (me)" },
            ].map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#DC2626] mb-1">{r.metric}</div>
                <div className="text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
