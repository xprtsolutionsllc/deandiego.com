import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Services" };

const SERVICES = [
  {
    id: "web",
    title: "Web Applications & SaaS",
    tagline: "Custom platforms that ship in days, not months.",
    description: "I build production-grade web applications using modern frameworks. From landing pages to full SaaS platforms with authentication, payments, dashboards, and APIs. Every project is deployed, live, and ready for real users.",
    includes: [
      "Custom websites and landing pages",
      "SaaS platforms with multi-tenant architecture",
      "Client portals and dashboards",
      "Stripe payment integration",
      "Authentication and user management",
      "API design and development",
      "Database architecture (PostgreSQL)",
      "Deployment and CI/CD setup",
    ],
    tech: ["Next.js", "React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Tailwind CSS", "Vercel", "Stripe", "Clerk"],
    image: "Web app dashboard screenshot",
  },
  {
    id: "ai",
    title: "AI Integration & Automation",
    tagline: "Connect your business to intelligence.",
    description: "I integrate AI models and build automation pipelines that eliminate manual work. From intelligent chatbots to complex multi-step workflows that process data, make decisions, and take action — all running autonomously.",
    includes: [
      "AI-powered chatbots and assistants",
      "Claude, GPT, and Gemini API integrations",
      "Automated workflow design (n8n, custom)",
      "Content generation pipelines",
      "Data extraction and analysis",
      "CRM and tool integrations",
      "Email automation sequences",
      "Custom internal tools",
    ],
    tech: ["Claude API", "OpenAI", "Gemini", "n8n", "Python", "Node.js", "Zapier", "Webhooks"],
    image: "AI workflow or automation diagram",
  },
  {
    id: "drone",
    title: "Drone Mapping & Aerial Intelligence",
    tagline: "Autonomous surveys. Professional deliverables.",
    description: "FAA Part 107 certified drone operations for property documentation, construction progress, roof inspection, and aerial mapping. Full pipeline from automated flight planning through GPU-processed orthomosaics and 3D models, delivered through a custom client portal.",
    includes: [
      "Autonomous grid survey flights",
      "Orthomosaic map generation (GeoTIFF)",
      "3D point cloud and textured models",
      "Digital surface models (DSM)",
      "AI-powered photo analysis",
      "Branded PDF inspection reports",
      "Client portal with downloads",
      "NDAA-compliant operations",
    ],
    tech: ["DJI Air 3", "ArduPilot", "OpenDroneMap", "Three.js", "Leaflet", "XPRT Cloud", "Cloudflare R2"],
    image: "Drone in flight or orthomosaic result",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">AI-accelerated development. What takes agencies weeks, I ship in days.</p>
        </div>
      </section>

      {/* Services */}
      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`py-20 ${i > 0 ? "border-t border-white/5" : ""}`}>
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
            <div className={i % 2 === 1 ? "md:order-2" : ""}>
              <div className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">0{i + 1}</div>
              <h2 className="text-3xl font-bold mb-3">{s.title}</h2>
              <p className="text-lg text-gray-300 mb-4">{s.tagline}</p>
              <p className="text-gray-400 leading-relaxed mb-8">{s.description}</p>

              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">What&apos;s included</h3>
              <ul className="space-y-2.5 mb-8">
                {s.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                    <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {s.tech.map((t) => (
                  <span key={t} className="px-2.5 py-1 bg-white/5 rounded text-xs text-gray-500">{t}</span>
                ))}
              </div>
            </div>
            <div className={i % 2 === 1 ? "md:order-1" : ""}>
              <ImagePlaceholder label={s.image} aspect="aspect-[4/3]" />
            </div>
          </div>
        </section>
      ))}

      {/* Process */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4 text-center">How it works.</h2>
          <p className="text-gray-400 mb-16 text-center max-w-lg mx-auto">Three steps. No fluff.</p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { step: "01", title: "Discovery", desc: "30-minute call. You tell me what you need. I tell you if I can build it, how fast, and what it costs. No proposals that take a week — you get a quote on the call." },
              { step: "02", title: "Build Sprint", desc: "I build. You get daily updates with real, working progress — not mockups. Most projects ship in 1-5 days. You see it live on the internet, not in a Figma file." },
              { step: "03", title: "Deploy & Iterate", desc: "Live for real users. I stick around to iterate, fix, and optimize based on real feedback. You're not abandoned after launch." },
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
          <h2 className="text-3xl font-bold mb-4">Ready to build?</h2>
          <p className="text-gray-400 mb-8">Every project starts with a conversation. No commitment, no sales pitch.</p>
          <Link href="/contact" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
