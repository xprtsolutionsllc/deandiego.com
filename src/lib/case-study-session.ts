import { cookies } from "next/headers";
import { CASE_STUDY_COOKIE, readCaseStudyPassword, verifySession } from "@/lib/case-study-gate";

export async function isCaseStudyUnlocked(): Promise<boolean> {
  const password = readCaseStudyPassword();
  if (!password) return false;
  const jar = await cookies();
  return verifySession(jar.get(CASE_STUDY_COOKIE)?.value, password);
}
