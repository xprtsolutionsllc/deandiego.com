"use client";

import { useState } from "react";
import { toast } from "sonner";

const SERVICES = [
  {
    title: "Web Applications & SaaS",
    description: "Custom platforms, dashboards, client portals, and internal tools. Modern stack — Next.js, React, Python, PostgreSQL. Deployed and live in days, not months.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "AI Integration & Automation",
    description: "AI-powered workflows, intelligent chatbots, content pipelines, and n8n automations. Connect your business to intelligence that works while you sleep.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z" />
      </svg>
    ),
  },
  {
    title: "Drone Mapping & Aerial Intelligence",
    description: "Autonomous survey flights, orthomosaics, 3D point clouds, property documentation. FAA Part 107 certified. Full pipeline from flight plan to client deliverable.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
      </svg>
    ),
  },
];

const PROJECTS = [
  {
    title: "XPRT Cloud",
    subtitle: "Drone Mapping SaaS Platform",
    description: "Built a full-stack drone mapping platform in 4 days. Automated flight planning, AI photo analysis, GPU-accelerated photogrammetry, 3D point cloud viewer, branded reports, Stripe invoicing, and client portal. Processing pipeline runs through a Cloudflare Tunnel to a personal GPU workstation.",
    tech: ["Next.js", "Python", "FastAPI", "PostgreSQL", "Three.js", "Leaflet", "Cloudflare R2", "OpenDroneMap", "Claude Vision"],
    link: "https://goxprt.com",
    highlight: "Built in 4 days",
  },
  {
    title: "Window Depot USA",
    subtitle: "Enterprise Systems Integration",
    description: "Systems integration architect for 86 independent dealer locations. Automated lead routing, CRM pipeline orchestration, marketing tool deployment, and dealer management workflows. Self-hosted n8n automation platform processing thousands of events daily.",
    tech: ["n8n", "WordPress", "PHP", "Zapier", "MarketSharp", "Builder Prime", "Docker", "PostgreSQL"],
    link: null,
    highlight: "86 dealer locations",
  },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in your name, email, and project description.");
      return;
    }
    setSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast.success("Message sent! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", company: "", projectType: "", budget: "", timeline: "", message: "" });
      } else {
        toast.error("Something went wrong. Try emailing me directly.");
      }
    } catch {
      toast.error("Something went wrong. Try emailing me directly.");
    }
    setSubmitting(false);
  }

  return (
    <main className="flex-1">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="text-lg font-bold tracking-tight">
            <span className="text-[#DC2626]">D</span>ean <span className="text-[#DC2626]">D</span>iego
          </a>
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="bg-[#DC2626] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition">
              Start a Project
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center bg-grid relative pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0A0A0A]" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-6 px-4 py-1.5 border border-[#DC2626]/30 rounded-full text-xs text-[#DC2626] font-medium tracking-wide uppercase">
            AI-Powered Solutions Architect
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            I build what others
            <br />
            <span className="text-[#DC2626]">plan.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Full-stack platforms, autonomous drone systems, and AI integrations — shipped in days, not months. If you can describe it, I can build it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-base"
            >
              Start a Project
            </a>
            <a
              href="#work"
              className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-base"
            >
              See My Work
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold mb-6">The short version.</h2>
              <p className="text-gray-400 leading-relaxed mb-4">
                I&apos;m a systems engineer, founder, and FAA-certified drone pilot based in Youngstown, Ohio. I build production-grade software and autonomous systems using AI as a force multiplier.
              </p>
              <p className="text-gray-400 leading-relaxed mb-4">
                By day, I architect systems integration for Window Depot USA — connecting 86 independent dealer locations through automated workflows, CRM pipelines, and marketing infrastructure.
              </p>
              <p className="text-gray-400 leading-relaxed">
                By night (and weekend), I&apos;m building XPRT Solutions — a drone mapping SaaS platform and an American-made NDAA-compliant drone hardware company. I built the entire platform, flew the first autonomous survey mission, and processed real aerial imagery into 3D models — all in one weekend.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#DC2626]">Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {["TypeScript", "Python", "React", "Next.js", "FastAPI", "PostgreSQL", "Docker", "n8n", "Three.js", "Tailwind CSS", "Cloudflare", "Vercel", "Claude AI", "ArduPilot"].map((t) => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300">{t}</span>
                  ))}
                </div>
              </div>
              <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
                <h3 className="font-semibold mb-3 text-sm uppercase tracking-wider text-[#DC2626]">Credentials</h3>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li>FAA Part 107 Remote Pilot Certificate</li>
                  <li>B.S. General Education — Youngstown State University</li>
                  <li>Founder — XPRT Solutions LLC</li>
                  <li>Systems Integration Engineer — Window Depot USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">What I build.</h2>
          <p className="text-gray-400 mb-12 max-w-xl">AI-accelerated development. What takes agencies weeks, I ship in days.</p>
          <div className="grid md:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-8 hover:border-[#DC2626]/30 transition group">
                <div className="w-10 h-10 bg-[#DC2626]/10 rounded-lg flex items-center justify-center text-[#DC2626] mb-5 group-hover:bg-[#DC2626]/20 transition">
                  {s.icon}
                </div>
                <h3 className="font-semibold text-lg mb-3">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Selected work.</h2>
          <p className="text-gray-400 mb-12 max-w-xl">Real projects. Real results. Shipped fast.</p>
          <div className="space-y-8">
            {PROJECTS.map((p) => (
              <div key={p.title} className="bg-white/[0.03] border border-white/5 rounded-xl p-8 md:p-10 hover:border-[#DC2626]/20 transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-2xl font-bold">{p.title}</h3>
                      <span className="px-2.5 py-0.5 bg-[#DC2626]/10 text-[#DC2626] text-xs font-semibold rounded-full">{p.highlight}</span>
                    </div>
                    <p className="text-gray-500 text-sm">{p.subtitle}</p>
                  </div>
                  {p.link && (
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="text-sm text-[#DC2626] hover:underline whitespace-nowrap">
                      Visit site &rarr;
                    </a>
                  )}
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">{p.description}</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <span key={t} className="px-2.5 py-1 bg-white/5 rounded text-xs text-gray-400">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-24 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">How I work.</h2>
          <p className="text-gray-400 mb-16 max-w-xl mx-auto">Three steps. No fluff. No meetings that could have been emails.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "30-minute call. You tell me what you need. I tell you if I can build it, how fast, and what it'll cost." },
              { step: "02", title: "Build Sprint", desc: "I build. You get daily updates. Most projects ship in 1-5 days. You see real progress, not wireframes." },
              { step: "03", title: "Deploy & Iterate", desc: "Live on the internet. Real users. Real feedback. I stick around to iterate and make sure it works." },
            ].map((s) => (
              <div key={s.step} className="text-left">
                <div className="text-[#DC2626] text-4xl font-bold mb-3 font-mono">{s.step}</div>
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Start a project.</h2>
          <p className="text-gray-400 mb-10">Tell me what you need. I&apos;ll get back to you within 24 hours.</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition"
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Company (optional)</label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition"
                placeholder="Your company"
              />
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Project Type</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none"
                >
                  <option value="" className="bg-[#1A1A1A]">Select...</option>
                  <option value="website" className="bg-[#1A1A1A]">Website</option>
                  <option value="webapp" className="bg-[#1A1A1A]">Web Application</option>
                  <option value="ai" className="bg-[#1A1A1A]">AI Integration</option>
                  <option value="automation" className="bg-[#1A1A1A]">Automation</option>
                  <option value="drone" className="bg-[#1A1A1A]">Drone Services</option>
                  <option value="other" className="bg-[#1A1A1A]">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Budget Range</label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none"
                >
                  <option value="" className="bg-[#1A1A1A]">Select...</option>
                  <option value="under1k" className="bg-[#1A1A1A]">Under $1,000</option>
                  <option value="1k-5k" className="bg-[#1A1A1A]">$1,000 - $5,000</option>
                  <option value="5k-15k" className="bg-[#1A1A1A]">$5,000 - $15,000</option>
                  <option value="15k+" className="bg-[#1A1A1A]">$15,000+</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Timeline</label>
                <select
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none"
                >
                  <option value="" className="bg-[#1A1A1A]">Select...</option>
                  <option value="asap" className="bg-[#1A1A1A]">ASAP</option>
                  <option value="1-2weeks" className="bg-[#1A1A1A]">1-2 weeks</option>
                  <option value="1month" className="bg-[#1A1A1A]">1 month</option>
                  <option value="flexible" className="bg-[#1A1A1A]">Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Tell me about your project *</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition resize-none"
                placeholder="What do you need built? What problem are you solving?"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={submitting}
                className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition disabled:opacity-50 text-base"
              >
                {submitting ? "Sending..." : "Send Project Request"}
              </button>
              <a
                href="https://calendar.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-base text-center"
              >
                Book a Discovery Call
              </a>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <div>XPRT Solutions LLC &mdash; Youngstown, Ohio</div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/in/deandiego" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a>
            <a href="https://github.com/xprtsolutionsllc" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">GitHub</a>
            <a href="https://goxprt.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">XPRT Cloud</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
