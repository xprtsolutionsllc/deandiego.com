import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "XPRT Cloud — Case Study" };

export default function XprtCloudPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">XPRT Cloud</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">Built in 4 days</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">A full-stack drone mapping SaaS platform — from automated flight planning through GPU-processed orthomosaics, 3D models, AI analysis, branded reports, and client invoicing. The entire system, built and deployed in one weekend.</p>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <ImagePlaceholder label="XPRT Cloud full dashboard screenshot" aspect="aspect-[2/1]" />
        </div>
      </section>

      {/* Problem */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Problem</h2>
            <h3 className="text-2xl font-bold mb-4">Drone pilots are priced out of professional software.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              DroneDeploy charges $499/month. Pix4D is $350/month. 68% of self-employed drone pilots made less than $1,000 from drone work last year. The math doesn&apos;t work.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Pilots need flight planning, photo processing, AI analysis, branded reports, invoicing, and a client portal. Without expensive enterprise tools, they&apos;re stuck stitching together 4-6 separate apps for every job.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">The Solution</h2>
            <h3 className="text-2xl font-bold mb-4">One platform. $59/month. Everything.</h3>
            <p className="text-gray-400 leading-relaxed">
              XPRT Cloud provides the complete drone pilot workflow in a single application — from generating an autonomous flight plan to delivering a finished orthomosaic and invoice to the client. At 82% less than DroneDeploy.
            </p>
          </div>
        </div>
      </section>

      {/* Screenshots grid */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">The platform.</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ImagePlaceholder label="Flight plan generator with Leaflet map" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">Flight Plan Generator</h3>
              <p className="text-xs text-gray-500">Automated grid survey with lawnmower algorithm. Exports KMZ for DJI Fly.</p>
            </div>
            <div>
              <ImagePlaceholder label="AI photo analysis results" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">AI Photo Analysis</h3>
              <p className="text-xs text-gray-500">Claude Vision identifies materials, features, and conditions. 20 photos in 12 seconds.</p>
            </div>
            <div>
              <ImagePlaceholder label="3D point cloud viewer" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">3D Point Cloud Viewer</h3>
              <p className="text-xs text-gray-500">Interactive Three.js viewer with OrbitControls. 500K+ points from GPU processing.</p>
            </div>
            <div>
              <ImagePlaceholder label="Orthomosaic map overlay" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">Orthomosaic Viewer</h3>
              <p className="text-xs text-gray-500">Georeferenced aerial map overlaid on Leaflet with satellite imagery.</p>
            </div>
            <div>
              <ImagePlaceholder label="Client portal view" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">Client Portal</h3>
              <p className="text-xs text-gray-500">Shareable link for clients to view reports, download photos, access orthomosaic.</p>
            </div>
            <div>
              <ImagePlaceholder label="Invoice / Stripe integration" aspect="aspect-video" />
              <h3 className="font-semibold text-sm mt-3">Invoicing</h3>
              <p className="text-xs text-gray-500">Custom line items, Stripe invoicing, payment links. Send directly to clients.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack.</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { label: "Frontend", items: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Three.js", "Leaflet"] },
              { label: "Backend", items: ["Python", "FastAPI", "asyncpg", "PostgreSQL", "Jinja2", "WeasyPrint"] },
              { label: "AI & Processing", items: ["Claude Vision", "OpenDroneMap", "NodeODM", "COLMAP", "Pillow", "laspy"] },
              { label: "Infrastructure", items: ["Cloudflare R2/CDN", "Vercel", "Coolify", "Docker", "Cloudflare Tunnel", "Stripe"] },
            ].map((g) => (
              <div key={g.label}>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DC2626] mb-3">{g.label}</h3>
                <ul className="space-y-1.5">
                  {g.items.map((t) => (
                    <li key={t} className="text-sm text-gray-400">{t}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Results.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "4", label: "Days to build" },
              { metric: "50+", label: "API endpoints" },
              { metric: "14", label: "Database tables" },
              { metric: "1st", label: "Autonomous flight" },
            ].map((r) => (
              <div key={r.label} className="bg-white/[0.03] border border-white/5 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-[#DC2626] mb-1">{r.metric}</div>
                <div className="text-xs text-gray-500">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 border-t border-white/5 text-center">
        <a href="https://goxprt.com" target="_blank" rel="noopener noreferrer" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition inline-block">
          Visit XPRT Cloud &rarr;
        </a>
      </section>
    </>
  );
}
