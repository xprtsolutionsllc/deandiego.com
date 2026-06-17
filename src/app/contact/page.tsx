"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

const TOPIC_PRESETS: Record<string, { inquiryType: string; projectType: string; budget: string; timeline: string; message: string }> = {
  "ai-sprint": {
    inquiryType: "project",
    projectType: "ai-sprint",
    budget: "1k-5k",
    timeline: "1-2weeks",
    message: "I'd like to scope an AI Automation Sprint. The bottleneck I want eliminated is:\n\n",
  },
  "drone-realestate": {
    inquiryType: "project",
    projectType: "drone",
    budget: "under1k",
    timeline: "asap",
    message:
      "I'd like to schedule drone media for a property listing.\n\n" +
      "Property address:\n\n" +
      "Listing goes live:\n\n" +
      "What I need (photos / video / both):\n\n" +
      "Square footage / lot size:\n\n" +
      "Notes:\n",
  },
  "drone-mapping": {
    inquiryType: "project",
    projectType: "drone",
    budget: "1k-5k",
    timeline: "1-2weeks",
    message:
      "I'd like to commission a drone mapping job.\n\n" +
      "Site location:\n\n" +
      "Approximate acreage:\n\n" +
      "Deliverables (orthomosaic / 3D model / volumetrics / progress tracking):\n\n" +
      "Deadline:\n\n" +
      "Notes:\n",
  },
  "drone-video": {
    inquiryType: "project",
    projectType: "drone",
    budget: "1k-5k",
    timeline: "1-2weeks",
    message:
      "I'd like to commission drone video work.\n\n" +
      "Project type (commercial / marketing / event / brand / other):\n\n" +
      "Location:\n\n" +
      "Deliverable format and length:\n\n" +
      "Deadline:\n\n" +
      "Notes:\n",
  },
};

const EMPTY_FORM = {
  inquiryType: "", name: "", email: "", company: "", roleType: "", projectType: "", budget: "", timeline: "", message: "",
};

const INQUIRY_OPTIONS = [
  { value: "hiring", label: "Hiring / a role" },
  { value: "project", label: "A project or freelance work" },
  { value: "other", label: "Something else" },
];

function ContactInner() {
  const params = useSearchParams();
  const topic = params.get("topic") || "";

  const [formData, setFormData] = useState(() => {
    const preset = TOPIC_PRESETS[topic];
    if (!preset) return EMPTY_FORM;
    return { ...EMPTY_FORM, ...preset };
  });
  const [submitting, setSubmitting] = useState(false);

  const isProject = formData.inquiryType === "project";
  const isHiring = formData.inquiryType === "hiring";

  const messageLabel = isHiring
    ? "Tell me about the role"
    : isProject
      ? "Tell me about your project"
      : "What's on your mind?";

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formData.inquiryType || !formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in your name, email, message, and what you're reaching out about.");
      return;
    }
    if (isProject && (!formData.projectType || !formData.budget || !formData.timeline)) {
      toast.error("For a project, please add the project type, budget, and timeline.");
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
        toast.success("Message sent. I'll get back to you within 24 hours.");
        setFormData(EMPTY_FORM);
      } else {
        toast.error("Something went wrong. Try emailing me directly.");
      }
    } catch {
      toast.error("Something went wrong. Try emailing me directly.");
    }
    setSubmitting(false);
  }

  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition";
  const selectClass = inputClass + " appearance-none";

  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s talk.</h1>
          <p className="text-lg text-gray-400 max-w-2xl">Hiring for a role, or have a project in mind? Either way, tell me what you need and I&apos;ll get back to you within 24 hours.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-16">
          {/* Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Inquiry type */}
              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">I&apos;m reaching out about *</label>
                <div className="flex flex-col sm:flex-row gap-3">
                  {INQUIRY_OPTIONS.map((o) => (
                    <button
                      key={o.value}
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: o.value })}
                      className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium border transition ${
                        formData.inquiryType === o.value
                          ? "border-[#DC2626] bg-[#DC2626]/10 text-white"
                          : "border-white/10 bg-white/[0.03] text-gray-400 hover:border-white/20"
                      }`}
                    >
                      {o.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Name *</label>
                  <input type="text" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className={inputClass} placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Email *</label>
                  <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={inputClass} placeholder="you@company.com" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">{isHiring ? "Company" : "Company / Organization"}</label>
                <input type="text" value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} className={inputClass} placeholder={isHiring ? "Where you're hiring" : "Your company"} />
              </div>

              {/* Hiring-specific */}
              {isHiring && (
                <div>
                  <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Role type</label>
                  <select value={formData.roleType} onChange={(e) => setFormData({ ...formData, roleType: e.target.value })} className={selectClass}>
                    <option value="" className="bg-[#1A1A1A]">Select...</option>
                    <option value="full-time" className="bg-[#1A1A1A]">Full-time</option>
                    <option value="founding" className="bg-[#1A1A1A]">Founding engineer</option>
                    <option value="contract" className="bg-[#1A1A1A]">Contract / engagement</option>
                    <option value="not-sure" className="bg-[#1A1A1A]">Not sure yet</option>
                  </select>
                </div>
              )}

              {/* Project-specific */}
              {isProject && (
                <div className="grid md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Project Type *</label>
                    <select value={formData.projectType} onChange={(e) => setFormData({ ...formData, projectType: e.target.value })} className={selectClass}>
                      <option value="" className="bg-[#1A1A1A]">Select...</option>
                      <option value="webapp" className="bg-[#1A1A1A]">Web Application</option>
                      <option value="ai" className="bg-[#1A1A1A]">AI Integration</option>
                      <option value="automation" className="bg-[#1A1A1A]">Automation</option>
                      <option value="website" className="bg-[#1A1A1A]">Website</option>
                      <option value="ai-sprint" className="bg-[#1A1A1A]">AI Sprint</option>
                      <option value="drone" className="bg-[#1A1A1A]">Drone Services</option>
                      <option value="other" className="bg-[#1A1A1A]">Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Budget *</label>
                    <select value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })} className={selectClass}>
                      <option value="" className="bg-[#1A1A1A]">Select...</option>
                      <option value="under1k" className="bg-[#1A1A1A]">Under $1,000</option>
                      <option value="1k-5k" className="bg-[#1A1A1A]">$1,000 - $5,000</option>
                      <option value="5k-15k" className="bg-[#1A1A1A]">$5,000 - $15,000</option>
                      <option value="15k+" className="bg-[#1A1A1A]">$15,000+</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">Timeline *</label>
                    <select value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })} className={selectClass}>
                      <option value="" className="bg-[#1A1A1A]">Select...</option>
                      <option value="asap" className="bg-[#1A1A1A]">ASAP</option>
                      <option value="1-2weeks" className="bg-[#1A1A1A]">1-2 weeks</option>
                      <option value="1month" className="bg-[#1A1A1A]">1 month</option>
                      <option value="flexible" className="bg-[#1A1A1A]">Flexible</option>
                    </select>
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs text-gray-500 uppercase tracking-wider mb-2">{messageLabel} *</label>
                <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={6} className={inputClass + " resize-none"}
                  placeholder={isHiring ? "The role, the team, what you're looking for, and a link to the job if you have one." : "What do you need built, what problem are you solving, and any requirements or deadlines."} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button type="submit" disabled={submitting} className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition disabled:opacity-50 text-base">
                  {submitting ? "Sending..." : "Send Message"}
                </button>
                <a href="/dean-diego-resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-white/5 transition text-base text-center">
                  Download Resume
                </a>
              </div>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Open to</h3>
              <ul className="space-y-2.5 text-sm text-gray-400">
                <li className="flex gap-3"><span className="text-[#DC2626]">&bull;</span>Senior and founding engineer roles</li>
                <li className="flex gap-3"><span className="text-[#DC2626]">&bull;</span>AI, full-stack, and integration work</li>
                <li className="flex gap-3"><span className="text-[#DC2626]">&bull;</span>Select freelance and consulting projects</li>
              </ul>
              <p className="text-xs text-gray-600 mt-4">Remote-first, US-based, US citizen. Open to relocation for the right role.</p>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">What happens next?</h3>
              <ol className="space-y-3 text-sm text-gray-400">
                <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">1</span>I reply within 24 hours</li>
                <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">2</span>We find time for a quick call</li>
                <li className="flex gap-3"><span className="text-[#DC2626] font-bold font-mono">3</span>Clear next steps, whether it&apos;s a role or a project</li>
              </ol>
            </div>

            <div className="bg-white/[0.03] border border-white/5 rounded-xl p-6">
              <h3 className="font-semibold mb-4">Prefer email?</h3>
              <a href="mailto:dean@goxprt.com" className="text-[#DC2626] text-sm hover:underline">dean@goxprt.com</a>
              <h3 className="font-semibold mb-2 mt-5">Based in</h3>
              <p className="text-sm text-gray-400">Youngstown, Ohio</p>
              <p className="text-xs text-gray-600 mt-1">Available for remote work nationwide</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh]" />}>
      <ContactInner />
    </Suspense>
  );
}
