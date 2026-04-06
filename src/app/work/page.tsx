import type { Metadata } from "next";
import Link from "next/link";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "Work" };

const PROJECTS = [
  {
    slug: "xprt-cloud",
    title: "XPRT Cloud",
    category: "SaaS Platform",
    description: "Full-stack drone mapping SaaS — flight planning, AI analysis, GPU photogrammetry, 3D viewer, client portal, invoicing. Built in 4 days.",
    highlight: "Built in 4 days",
    image: "XPRT Cloud dashboard",
  },
  {
    slug: "wdusa",
    title: "Window Depot USA",
    category: "Enterprise Integration",
    description: "Systems integration for 86 independent dealer locations — automated workflows, CRM pipelines, marketing tooling, dealer management.",
    highlight: "86 locations",
    image: "WDUSA workflow / dashboard",
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
                <ImagePlaceholder label={p.image} aspect="aspect-[16/10]" className="group-hover:border-[#DC2626]/30 transition" />
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

      {/* More coming */}
      <section className="py-20 border-t border-white/5 text-center">
        <p className="text-gray-500 mb-4">More projects in the pipeline.</p>
        <Link href="/contact" className="text-[#DC2626] text-sm font-medium hover:underline">Yours could be next &rarr;</Link>
      </section>
    </>
  );
}
