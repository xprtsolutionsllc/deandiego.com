import type { Metadata } from "next";
import {
  CASE_STUDY_PATH,
  CASE_STUDY_UNLOCK_PATH,
  gateErrorMessage,
  type GateErrorCode,
} from "@/lib/case-study-gate";
import { isCaseStudyUnlocked } from "@/lib/case-study-session";
import CaseStudyBody from "./case-study";

export const dynamic = "force-dynamic";

function parseGateError(value: string | string[] | undefined): GateErrorCode | null {
  const code = Array.isArray(value) ? value[0] : value;
  if (code === "incorrect" || code === "unavailable") return code;
  return null;
}

export async function generateMetadata(): Promise<Metadata> {
  const unlocked = await isCaseStudyUnlocked();
  const title = unlocked ? "Window Depot USA Network OS" : "Private case study";
  const description = unlocked
    ? "Sanitized operator writeup of routing and delivery for the Window Depot USA lead console. The production repository stays private."
    : "Invite-only writeup. Password required.";

  return {
    title,
    description,
    robots: {
      index: false,
      follow: false,
      nocache: true,
      googleBot: { index: false, follow: false, noimageindex: true },
    },
    openGraph: {
      title,
      description,
      url: `https://deandiego.com${CASE_STUDY_PATH}`,
    },
  };
}

export default async function WindowDepotNetworkOsPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string | string[] }>;
}) {
  const unlocked = await isCaseStudyUnlocked();
  if (unlocked) return <CaseStudyBody />;

  const error = parseGateError((await searchParams).error);
  const inputClass =
    "w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#DC2626]/50 transition";

  return (
    <section className="py-20">
      <div className="max-w-md mx-auto px-6">
        <h1 className="text-3xl font-bold mb-3">Private case study</h1>
        <p className="text-sm text-gray-400 leading-relaxed mb-8">
          This writeup is invite-only. Enter the password to continue.
        </p>
        <form method="post" action={CASE_STUDY_UNLOCK_PATH} className="space-y-4">
          <div>
            <label htmlFor="case-study-password" className="block text-xs text-gray-500 uppercase tracking-wider mb-2">
              Password
            </label>
            <input
              id="case-study-password"
              name="password"
              type="password"
              autoComplete="off"
              required
              className={inputClass}
            />
          </div>
          {error ? <p className="text-sm text-[#DC2626]">{gateErrorMessage(error)}</p> : null}
          <button
            type="submit"
            className="bg-[#DC2626] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#B91C1C] transition"
          >
            Unlock
          </button>
        </form>
      </div>
    </section>
  );
}
