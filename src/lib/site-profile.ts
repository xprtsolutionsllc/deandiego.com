// Career positioning, kept in one place so the homepage, layout metadata,
// contact form, footer, and llms.txt do not drift apart. Copy mirrors the
// resume: "Forward Deployed Engineer | Systems Integration and AI Automation".

export const SITE_URL = "https://deandiego.com";

export const HEADLINE = "Forward Deployed Engineer | Systems Integration and AI Automation";
export const HEADLINE_LEAD = "Forward Deployed Engineer";
export const HEADLINE_REST = "Systems Integration and AI Automation";

export const HIRING_CTA =
  "Open to Forward Deployed Engineer, Systems Integration Engineer, and customer-facing AI Engineer roles.";

export const ROLES_OPEN_TO = [
  "Forward Deployed Engineer",
  "Systems Integration Engineer",
  "Customer-facing AI Engineer",
] as const;

// Contact form role select. Values are sent through the existing contact API.
export const ROLE_TYPE_OPTIONS = [
  { value: "forward-deployed-engineer", label: "Forward Deployed Engineer" },
  { value: "systems-integration-engineer", label: "Systems Integration Engineer" },
  { value: "customer-facing-ai-engineer", label: "Customer-facing AI Engineer" },
  { value: "full-time", label: "Another role, full-time" },
  { value: "contract", label: "Contract / engagement" },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const LOCATION = "Youngstown, Ohio";

export const INTRO =
  "I work directly with dealers and their software vendors to fix how leads reach sales teams, how customers book appointments, and how staff handle service requests. I also built XPRT Cloud, the jobsite documentation platform I run as a commercial drone pilot.";

export const EMPLOYMENT = [
  {
    title: "Systems Integration Engineer",
    company: "Window Depot USA",
    period: "November 2025 - Present",
    note: "Promoted from Systems Integration Specialist (AI and Automation). Earlier work included dealer websites, lead dashboards, and training materials, 2022 - 2025.",
  },
  {
    title: "Founder and Sole Engineer",
    company: "XPRT Solutions LLC",
    period: "August 2022 - Present",
    note: "Built and operate XPRT Cloud, a platform that turns drone imagery into shareable jobsite reports and 3D views.",
  },
] as const;

export const EDUCATION = {
  school: "Youngstown State University",
  label: "Bachelor of General Studies, in progress",
};

export const CERTIFICATION = {
  org: "Federal Aviation Administration",
  label: "Part 107 Remote Pilot Certificate",
};

// Existing public profile links. The Professional ICM hub is the canonical
// machine-readable profile and is intentionally preserved as-is.
export const LINKEDIN_URL = "https://www.linkedin.com/in/dean-diego-92126a131/";
export const GITHUB_URL = "https://github.com/deand28";
export const XPRT_CLOUD_URL = "https://goxprt.com";
export const ICM_URL = "https://useicm.com/icm/icm_wrHzWkrDvqHL2f44Rm2y7g";
export const RESUME_PATH = "/dean-diego-resume.pdf";

export const WORK_PATHS = {
  dealerOperations: "/work/wdusa",
  xprtCloud: "/work/xprt-cloud",
} as const;
