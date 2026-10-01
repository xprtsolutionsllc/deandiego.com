import { createHash, createHmac, timingSafeEqual } from "node:crypto";

export const CASE_STUDY_PATH = "/work/window-depot-network-os";
export const CASE_STUDY_UNLOCK_PATH = "/api/work/window-depot-network-os/unlock";
export const CASE_STUDY_COOKIE = "wdusa_network_os";
/** 14 days. Rotating CASE_STUDY_WDUSA_PASSWORD invalidates existing sessions. */
export const CASE_STUDY_TTL_SECONDS = 60 * 60 * 24 * 14;

const SESSION_VERSION = "v1";

export type GateErrorCode = "incorrect" | "unavailable";

export function readCaseStudyPassword(): string | null {
  const value = process.env.CASE_STUDY_WDUSA_PASSWORD;
  if (typeof value !== "string" || value.trim().length === 0) return null;
  return value;
}

export function passwordsMatch(input: string, expected: string): boolean {
  const left = createHash("sha256").update(input, "utf8").digest();
  const right = createHash("sha256").update(expected, "utf8").digest();
  return timingSafeEqual(left, right);
}

export function signSession(password: string, nowMs = Date.now()): string {
  const exp = Math.floor(nowMs / 1000) + CASE_STUDY_TTL_SECONDS;
  const payload = `${SESSION_VERSION}.${exp}`;
  const mac = createHmac("sha256", password).update(payload).digest("base64url");
  return `${payload}.${mac}`;
}

export function verifySession(
  token: string | undefined | null,
  password: string | null,
  nowMs = Date.now(),
): boolean {
  if (!password || !token) return false;
  const parts = token.split(".");
  if (parts.length !== 3) return false;
  const [version, expStr, mac] = parts;
  if (version !== SESSION_VERSION || !/^\d+$/.test(expStr)) return false;

  const exp = Number(expStr);
  const nowSec = Math.floor(nowMs / 1000);
  if (!Number.isSafeInteger(exp) || exp <= nowSec) return false;
  if (exp > nowSec + CASE_STUDY_TTL_SECONDS + 60) return false;

  const payload = `${SESSION_VERSION}.${expStr}`;
  const expected = createHmac("sha256", password).update(payload).digest("base64url");
  const actualBuf = Buffer.from(mac);
  const expectedBuf = Buffer.from(expected);
  if (actualBuf.length !== expectedBuf.length) return false;
  return timingSafeEqual(actualBuf, expectedBuf);
}

export function caseStudyCookieOptions(secure: boolean) {
  return {
    httpOnly: true,
    secure,
    sameSite: "lax" as const,
    path: CASE_STUDY_PATH,
    maxAge: CASE_STUDY_TTL_SECONDS,
  };
}

export function gateErrorMessage(code: GateErrorCode): string {
  switch (code) {
    case "incorrect":
      return "Incorrect password.";
    case "unavailable":
      return "This page is not available right now.";
    default: {
      const exhaustive: never = code;
      return exhaustive;
    }
  }
}
