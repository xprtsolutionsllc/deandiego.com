import Link from "next/link";
import Image from "next/image";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center bg-grid relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-1.5 border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium tracking-wide uppercase">
              AI-Powered Solutions Architect
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
              I build what
              <br />
              others <span className="text-[#DC2626]">plan.</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-lg mb-8 leading-relaxed">
              Full-stack platforms, autonomous drone systems, and AI integrations — shipped in days, not months. If you can describe it, I can build it.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center">
                Start a Project
              </Link>
              <Link href="/work" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center">
                See My Work
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <ImagePlaceholder label="Your photo — working with tech, drone, or at the desk" aspect="aspect-[4/5]" />
          </div>
        </div>
      </section>

      {/* Quick intro */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Web Applications",
              desc: "Custom platforms and SaaS products built with modern frameworks. Deployed in days.",
              href: "/services#web",
            },
            {
              title: "AI & Automation",
              desc: "Intelligent workflows, chatbots, and AI-powered tools that work while you sleep.",
              href: "/services#ai",
            },
            {
              title: "Drone Mapping",
              desc: "Autonomous aerial surveys, orthomosaics, 3D models. FAA Part 107 certified.",
              href: "/services#drone",
            },
          ].map((s) => (
            <Link key={s.title} href={s.href} className="group bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-[#DC2626]/30 transition">
              <h3 className="font-semibold text-lg mb-3 group-hover:text-[#DC2626] transition">{s.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-4">{s.desc}</p>
              <span className="text-xs text-[#DC2626] font-medium">Learn more &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured work preview */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-2">Selected work.</h2>
              <p className="text-gray-400">Real projects. Real results.</p>
            </div>
            <Link href="/work" className="text-sm text-[#DC2626] hover:underline hidden md:block">View all &rarr;</Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Link href="/work/xprt-cloud" className="group">
              <div className="aspect-video rounded-xl overflow-hidden border border-white/10 mb-4 group-hover:border-[#DC2626]/30 transition">
                <Image src="/images/xprt-cloud-dashboard.png" alt="XPRT Cloud dashboard" width={1920} height={1080} className="w-full h-full object-cover" />
              </div>
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold group-hover:text-[#DC2626] transition">XPRT Cloud</h3>
                <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">Built in 4 days</span>
              </div>
              <p className="text-sm text-gray-400">Full-stack drone mapping SaaS — flight planning, AI analysis, GPU photogrammetry, 3D viewer, invoicing.</p>
            </Link>
            <Link href="/work/wdusa" className="group">
              <ImagePlaceholder label="WDUSA systems / workflow screenshot" className="mb-4 group-hover:border-[#DC2626]/30 transition" />
              <div className="flex items-center gap-3 mb-2">
                <h3 className="text-xl font-bold group-hover:text-[#DC2626] transition">Window Depot USA</h3>
                <span className="px-2.5 py-0.5 bg-white/10 text-gray-300 text-xs font-semibold rounded-full">86 locations</span>
              </div>
              <p className="text-sm text-gray-400">Enterprise systems integration — automated workflows, CRM pipelines, dealer management for 86 locations.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="py-20 border-t border-white/5 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Got a project in mind?</h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">I respond within 24 hours. Most projects ship in 1-5 days.</p>
          <Link href="/contact" className="bg-[#DC2626] text-white px-10 py-4 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-lg inline-block">
            Let&apos;s Talk
          </Link>
        </div>
      </section>
    </>
  );
}
