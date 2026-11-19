import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { RESUME_PATH, XPRT_CLOUD_URL } from "@/lib/site-profile";

export const metadata: Metadata = {
  title: "XPRT Cloud",
  description:
    "XPRT Cloud turns drone imagery from FAA Part 107 flights into shareable jobsite reports and 3D views. I built and operate the Next.js interface, Python API, Stripe billing, and Docker deployment at XPRT Solutions LLC.",
  openGraph: {
    title: "XPRT Cloud | Dean Diego",
    description:
      "A jobsite documentation platform that turns drone imagery into shareable reports and 3D views. Built and operated by one engineer.",
    url: "https://deandiego.com/work/xprt-cloud",
  },
};

const FEATURES = [
  { title: "Shareable jobsite reports", body: "Branded reports a pilot can send a client the same day, instead of a folder of raw images and a caption." },
  { title: "3D views", body: "3D models reconstructed from drone photos, viewed in the browser, so a client can look around a site without special software." },
  { title: "AI photo analysis", body: "I integrated Gemini to analyze photos, so the imagery gets described and organized rather than only stored." },
  { title: "GPU 3D reconstruction", body: "I ran GPU processing on Modal to reconstruct 3D models from the drone images." },
  { title: "Billing", body: "Stripe billing handles subscriptions inside the product, so the platform can charge for itself." },
  { title: "Operated, not just launched", body: "A Docker deployment that I run, so the product is live and supported by the person who built it." },
];

const STACK = [
  { label: "Interface", items: ["Next.js", "React", "TypeScript"] },
  { label: "API", items: ["Python", "FastAPI", "PostgreSQL"] },
  { label: "AI & processing", items: ["Gemini", "Modal GPU", "3D reconstruction"] },
  { label: "Operations", items: ["Stripe", "Docker", "Cloudflare"] },
];

export default function XprtCloudPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/work" className="text-sm text-gray-500 hover:text-white transition mb-6 block">&larr; Back to Work</Link>
          <div className="flex items-center gap-3 mb-4 flex-wrap">
            <h1 className="text-4xl md:text-5xl font-bold">XPRT Cloud</h1>
            <span className="px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full">Built and operated solo</span>
          </div>
          <p className="text-lg text-gray-400 max-w-3xl">
            A jobsite documentation platform that turns drone imagery into shareable branded reports and 3D views. I built it as founder and sole engineer of XPRT Solutions LLC, and I operate it today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <a href={XPRT_CLOUD_URL} target="_blank" rel="noopener noreferrer" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-center">
              Visit XPRT Cloud &rarr;
            </a>
            <a href={RESUME_PATH} target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-center">
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-xl overflow-hidden border border-white/10 shadow-2xl">
            <Image
              src="/images/xprt-cloud-dashboard.png"
              alt="XPRT Cloud dashboard showing jobs and reports"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </div>
        </div>
      </section>

      {/* Where it comes from */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">Where it comes from</h2>
            <h3 className="text-2xl font-bold mb-4">I fly the jobs the platform was built for.</h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              I am an FAA Part 107 remote pilot, and I fly commercial drone jobs myself. After a flight, I still owe the client a usable record of the site: what was captured, what it shows, and what the client can open and share. Most drone tools either stop at raw files or price a single-pilot operation out of the work.
            </p>
            <p className="text-gray-400 leading-relaxed">
              XPRT Cloud is the answer I built for my own fieldwork: flight imagery goes in, and a shareable jobsite report and a 3D view come out.
            </p>
          </div>
          <div>
            <h2 className="text-xs text-[#DC2626] font-medium uppercase tracking-wider mb-3">What I own</h2>
            <h3 className="text-2xl font-bold mb-4">The full stack, from interface to production.</h3>
            <p className="text-gray-400 leading-relaxed">
              I built and operate the Next.js interface, the Python API, Stripe billing, and the Docker deployment. That means the same person who designs a screen answers when it breaks in production, and the product stays in shape instead of becoming a demo.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">The platform.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div key={f.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold text-sm mb-2">{f.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">Tech stack</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {STACK.map((g) => (
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

      {/* What it taught me */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-8">What it taught me as an engineer.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Fieldwork makes the requirements", body: "Being the pilot means I feel the same friction the customer does: the job is done when the client has a record they can use, not when the flight lands." },
              { title: "Own the boring parts", body: "Billing, deployment, and support are the parts that decide whether software survives. Running them changed how I build everything else." },
              { title: "Ship to production", body: "A product that a real client opens is a different test than a feature that passes locally. I build with the operator's view in mind." },
            ].map((p) => (
              <div key={p.title} className="border-l-2 border-[#DC2626]/50 pl-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-16 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <a href={XPRT_CLOUD_URL} target="_blank" rel="noopener noreferrer" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition inline-block">
            Visit XPRT Cloud &rarr;
          </a>
          <Link href="/work" className="text-sm text-[#DC2626] font-medium hover:underline">Back to all work &rarr;</Link>
        </div>
      </section>
    </>
  );
}
