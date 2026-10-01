import { NextRequest, NextResponse } from "next/server";
import {
  CASE_STUDY_COOKIE,
  CASE_STUDY_PATH,
  caseStudyCookieOptions,
  gateErrorMessage,
  passwordsMatch,
  readCaseStudyPassword,
  signSession,
  type GateErrorCode,
} from "@/lib/case-study-gate";

export const dynamic = "force-dynamic";

function wantsJson(req: NextRequest): boolean {
  const type = req.headers.get("content-type") ?? "";
  if (type.includes("application/json")) return true;
  const accept = req.headers.get("accept") ?? "";
  return accept.includes("application/json");
}

function cookieIsSecure(req: NextRequest): boolean {
  if (process.env.NODE_ENV === "production") return true;
  return req.nextUrl.protocol === "https:";
}

async function readSubmittedPassword(req: NextRequest): Promise<string> {
  const type = req.headers.get("content-type") ?? "";
  if (type.includes("application/json")) {
    const body: unknown = await req.json().catch(() => null);
    if (body && typeof body === "object" && "password" in body && typeof body.password === "string") {
      return body.password;
    }
    return "";
  }
  const form = await req.formData().catch(() => null);
  const value = form?.get("password");
  return typeof value === "string" ? value : "";
}

function failure(req: NextRequest, code: GateErrorCode, status: number) {
  if (wantsJson(req)) {
    return NextResponse.json({ ok: false, error: gateErrorMessage(code) }, { status });
  }
  const url = req.nextUrl.clone();
  url.pathname = CASE_STUDY_PATH;
  url.search = "";
  url.searchParams.set("error", code);
  return NextResponse.redirect(url, 303);
}

function success(req: NextRequest, token: string) {
  const secure = cookieIsSecure(req);
  if (wantsJson(req)) {
    const res = NextResponse.json({ ok: true });
    res.cookies.set(CASE_STUDY_COOKIE, token, caseStudyCookieOptions(secure));
    return res;
  }
  const url = req.nextUrl.clone();
  url.pathname = CASE_STUDY_PATH;
  url.search = "";
  const res = NextResponse.redirect(url, 303);
  res.cookies.set(CASE_STUDY_COOKIE, token, caseStudyCookieOptions(secure));
  return res;
}

export async function POST(req: NextRequest) {
  const expected = readCaseStudyPassword();
  const submitted = await readSubmittedPassword(req);

  if (!expected) return failure(req, "unavailable", 503);
  if (!submitted || !passwordsMatch(submitted, expected)) return failure(req, "incorrect", 401);

  return success(req, signSession(expected));
}

export function GET() {
  return NextResponse.json({ ok: false, error: "Method not allowed." }, { status: 405 });
}
