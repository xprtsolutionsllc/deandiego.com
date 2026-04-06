import type { Metadata } from "next";
import ImagePlaceholder from "@/components/ImagePlaceholder";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About me.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Systems engineer, founder, FAA-certified drone pilot, and the guy who built an entire SaaS platform in a weekend.</p>
        </div>
      </section>

      {/* Bio + Photo */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-5 gap-16">
          <div className="md:col-span-3 space-y-5 text-gray-400 leading-relaxed">
            <p className="text-white text-lg font-medium">
              I use AI as a force multiplier to build production-grade systems at startup speed.
            </p>
            <p>
              Based in Youngstown, Ohio — a city that knows what it means to rebuild. I take that same energy into everything I build. No fluff. No meetings that could have been emails. Just working software, deployed and live.
            </p>
            <p>
              By day, I&apos;m a Systems Integration Engineer at Window Depot USA, connecting 86 independent dealer locations through automated workflows, CRM pipelines, and marketing infrastructure. I&apos;ve built the systems that keep a national home improvement brand running at scale.
            </p>
            <p>
              By night, I&apos;m building XPRT Solutions — a drone mapping SaaS platform and an American-made NDAA-compliant drone hardware company. I built the entire SaaS platform in 4 days, flew the first autonomous survey mission, and processed real aerial imagery into 3D models. Then I deployed a 9-agent AI research cluster to plan the hardware company. All in one weekend.
            </p>
            <p>
              I&apos;m finishing my B.S. in General Education at Youngstown State University — an interdisciplinary degree that reflects how I think. I don&apos;t stay in one lane. I connect dots across software, hardware, business, aviation, and AI.
            </p>
            <p>
              The common thread: I build things that work, fast, and I ship them to the real world. Not wireframes. Not pitch decks. Working systems that people use today.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <ImagePlaceholder label="Professional headshot or portrait" aspect="aspect-[3/4]" />
            <ImagePlaceholder label="You with the drone / in the field" aspect="aspect-video" />
          </div>
        </div>
      </section>

      {/* Credentials + Stack */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Credentials</h2>
            <div className="space-y-4">
              {[
                { label: "Founder & CEO", org: "XPRT Solutions LLC", year: "2022 — Present" },
                { label: "Systems Integration Engineer", org: "Window Depot USA", year: "Current" },
                { label: "FAA Part 107 Remote Pilot", org: "Federal Aviation Administration", year: "Certified" },
                { label: "B.S. General Education", org: "Youngstown State University", year: "2027 (Expected)" },
              ].map((c) => (
                <div key={c.label} className="bg-white/[0.03] border border-white/5 rounded-lg p-5">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-sm">{c.label}</h3>
                      <p className="text-xs text-gray-500 mt-0.5">{c.org}</p>
                    </div>
                    <span className="text-xs text-gray-600 whitespace-nowrap">{c.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Tech stack</h2>
            <div className="space-y-6">
              {[
                { category: "Frontend", items: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Three.js", "Leaflet"] },
                { category: "Backend", items: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Docker"] },
                { category: "AI & Automation", items: ["Claude API", "Gemini", "n8n", "OpenDroneMap", "ArduPilot"] },
                { category: "Infrastructure", items: ["Cloudflare R2/CDN", "Vercel", "Coolify", "Hetzner", "GitHub Actions"] },
              ].map((g) => (
                <div key={g.category}>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#DC2626] mb-2">{g.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <span key={t} className="px-3 py-1.5 bg-white/5 rounded-lg text-xs text-gray-300">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-10">How I think.</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Ship, don't plan", quote: "A working prototype beats a perfect pitch deck. Every time." },
              { title: "AI is a weapon, not a crutch", quote: "I don't use AI to avoid thinking. I use it to think at 10x speed and build at 100x." },
              { title: "Domain knowledge is the moat", quote: "The code is the easy part. Understanding what drone pilots actually need — that's the hard part. I do both." },
            ].map((p) => (
              <div key={p.title} className="border-l-2 border-[#DC2626]/50 pl-6">
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-gray-400 italic">&ldquo;{p.quote}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
