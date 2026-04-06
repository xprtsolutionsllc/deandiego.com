"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", projectType: "", budget: "", timeline: "", message: "",
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
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Start a project.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Tell me what you need. I&apos;ll get back to you within 24 hours with a plan and a quote.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition" placeholder="you@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Company</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition" placeholder="Your company" />
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Project Type</label>
                  <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none">
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
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Budget</label>
                  <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none">
                    <option value="" className="bg-[#1A1A1A]">Select...</option>
                    <option value="under1k" className="bg-[#1A1A1A]">Under $1,000</option>
                    <option value="1k-5k" className="bg-[#1A1A1A]">$1,000 - $5,000</option>
                    <option value="5k-15k" className="bg-[#1A1A1A]">$5,000 - $15,000</option>
                    <option value="15k+" className="bg-[#1A1A1A]">$15,000+</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Timeline</label>
                  <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white focus:outline-none focus:border-[#DC2626]/50 transition appearance-none">
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
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition resize-none"
                  placeholder="What do you need built? What problem are you solving? Any specific requirements or deadlines?" />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" disabled={submitting}
                  className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition disabled:opacity-50 text-base">
                  {submitting ? "Sending..." : "Send Project Request"}
                </button>
                <a href="https://calendar.google.com" target="_blank" rel="noopener noreferrer"
                  className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-base text-center">
                  Book a Discovery Call
                </a>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-3">
                  <span className="text-[#DC2626] font-bold font-mono">1</span>
                  I review your request within 24 hours
                </li>
                <li className="flex gap-3">
                  <span className="text-[#DC2626] font-bold font-mono">2</span>
                  We hop on a 30-min discovery call
                </li>
                <li className="flex gap-3">
                  <span className="text-[#DC2626] font-bold font-mono">3</span>
                  You get a quote and timeline on the call
                </li>
                <li className="flex gap-3">
                  <span className="text-[#DC2626] font-bold font-mono">4</span>
                  If it&apos;s a fit, I start building immediately
                </li>
              </ol>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Prefer email?</h3>
              <a href="mailto:xprtsolutionsllc@gmail.com" className="text-[#DC2626] text-sm hover:underline">xprtsolutionsllc@gmail.com</a>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Based in</h3>
              <p className="text-sm text-gray-400">Youngstown, Ohio</p>
              <p className="text-xs text-gray-600 mt-1">Available for remote work nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
