import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = { title: "Work" };

const PROJECTS = [
  {
    slug: "xprt-cloud",
    title: "XPRT Cloud",
    category: "SaaS Platform",
    description: "Full-stack drone mapping SaaS — flight planning, AI analysis, GPU photogrammetry, 3D viewer, client portal, invoicing. Built in 4 days.",
    highlight: "Built in 4 days",
    imagePath: "/images/xprt-cloud-dashboard.png",
    imageAlt: "XPRT Cloud dashboard",
  },
  {
    slug: "wdusa",
    title: "Window Depot USA",
    category: "Enterprise Integration",
    description: "Systems integration for 86 independent dealer locations — automated workflows, CRM pipelines, marketing tooling, dealer management.",
    highlight: "86 locations",
    imagePath: "/images/wdusa-network.jpg",
    imageAlt: "Dealer network — 86 locations connected across the US",
  },
];

const DRONE_SERVICES = [
  {
    topic: "drone-realestate",
    title: "Real Estate",
    tagline: "Listings that move faster.",
    description: "Aerial photos and video for property listings. FAA-licensed Part 107 pilot, fully insured. Turnaround in 24-48 hours.",
    bullets: ["10-15 retouched aerial stills", "60-90 second cinematic walkaround video", "MLS-ready exports"],
    imagePath: "/images/drone-realestate.jpg",
    imageAlt: "Aerial real estate photo",
  },
  {
    topic: "drone-mapping",
    title: "Mapping & Survey",
    tagline: "Drone-collected ground truth.",
    description: "Orthomosaics, 3D models, volumetric measurements, and progress tracking for construction, land development, and surveying.",
    bullets: ["High-res orthomosaic + GeoTIFF", "3D point cloud / mesh", "Cut-and-fill volume reports"],
    imagePath: "/images/drone-mapping.jpg",
    imageAlt: "Drone-generated orthomosaic map",
  },
  {
    topic: "drone-video",
    title: "Cinematic Video",
    tagline: "Brand-grade aerial footage.",
    description: "Commercial, marketing, and event drone video. Color-graded, music-bedded, social-cut deliverables for brand and ad use.",
    bullets: ["4K 60fps source footage", "Edited 30s / 60s / 90s cuts", "Vertical reels for social"],
    imagePath: "/images/drone-video.jpg",
    imageAlt: "Cinematic drone video still",
  },
];

export default function WorkPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Work.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Real projects. Real results. Shipped fast.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          {PROJECTS.map((p) => (
            <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="aspect-[16/10] rounded-xl overflow-hidden border border-white/10 group-hover:border-[#DC2626]/30 transition">
                  <Image src={p.imagePath} alt={p.imageAlt} width={1920} height={1200} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mb-2">{p.category}</div>
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-3xl font-bold group-hover:text-[#DC2626] transition">{p.title}</h2>
                    <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">{p.highlight}</span>
                  </div>
                  <p className="text-gray-400 leading-relaxed mb-6">{p.description}</p>
                  <span className="text-sm text-[#DC2626] font-medium group-hover:underline">View case study &rarr;</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Drone Services */}
      <section id="drone" className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-14 max-w-2xl">
            <div className="text-xs text-[#DC2626] uppercase tracking-wider mb-3 font-semibold">Drone Services</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Fly. Capture. Deliver.</h2>
            <p className="text-lg text-gray-400">FAA Part 107 licensed, fully insured. Operating across Northeast Ohio and Western PA. Available for travel.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {DRONE_SERVICES.map((s) => (
              <Link
                key={s.topic}
                href={`/contact?topic=${s.topic}`}
                className="group block bg-white/[0.02] border border-white/10 rounded-xl overflow-hidden hover:border-[#DC2626]/30 transition"
              >
                <div className="aspect-[16/10] overflow-hidden bg-white/[0.03]">
                  <Image src={s.imagePath} alt={s.imageAlt} width={1280} height={800} className="w-full h-full object-cover group-hover:scale-[1.02] transition" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#DC2626] transition">{s.title}</h3>
                  <div className="text-sm text-[#DC2626] font-medium mb-3">{s.tagline}</div>
                  <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {s.bullets.map((b) => (
                      <li key={b} className="text-xs text-gray-500 flex gap-2">
                        <span className="text-[#DC2626]">&bull;</span>
                        {b}
                      </li>
                    ))}
                  </ul>
                  <span className="text-sm text-[#DC2626] font-medium group-hover:underline">Request a quote &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* More coming */}
      <section className="py-20 border-t border-white/5 text-center">
        <p className="text-gray-500 mb-4">More projects in the pipeline.</p>
        <Link href="/contact" className="text-[#DC2626] text-sm font-medium hover:underline">Yours could be next &rarr;</Link>
      </section>
    </>
  );
}
