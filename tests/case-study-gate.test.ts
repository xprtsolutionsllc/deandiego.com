import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import {
  CASE_STUDY_TTL_SECONDS,
  passwordsMatch,
  readCaseStudyPassword,
  signSession,
  verifySession,
} from "../src/lib/case-study-gate.ts";

const PASSWORD = "test-password-not-a-secret";

test("password match is exact and ignores lookalikes", () => {
  assert.equal(passwordsMatch(PASSWORD, PASSWORD), true);
  assert.equal(passwordsMatch("wrong", PASSWORD), false);
  assert.equal(passwordsMatch(`${PASSWORD} `, PASSWORD), false);
  assert.equal(passwordsMatch("", PASSWORD), false);
});

test("session cookie verifies only for the signing password and within TTL", () => {
  const now = Date.parse("2026-10-01T00:00:00Z");
  const token = signSession(PASSWORD, now);

  assert.equal(verifySession(token, PASSWORD, now + 1000), true);
  assert.equal(verifySession(token, "other-password", now + 1000), false);
  assert.equal(verifySession(token, null, now + 1000), false);
  assert.equal(verifySession("v1.1.not-a-mac", PASSWORD, now), false);
  assert.equal(
    verifySession(token, PASSWORD, now + (CASE_STUDY_TTL_SECONDS + 120) * 1000),
    false,
  );

  const [version, exp, mac] = token.split(".");
  const tampered = `${version}.${Number(exp) + 1}.${mac}`;
  assert.equal(verifySession(tampered, PASSWORD, now + 1000), false);
});

test("blank env password stays locked", () => {
  const previous = process.env.CASE_STUDY_WDUSA_PASSWORD;
  process.env.CASE_STUDY_WDUSA_PASSWORD = "   ";
  assert.equal(readCaseStudyPassword(), null);
  process.env.CASE_STUDY_WDUSA_PASSWORD = previous;
});

test("case study body copy is ASCII and stays inside the approved facts", () => {
  const body = readFileSync("src/app/work/window-depot-network-os/case-study.tsx", "utf8");
  const nonAscii = [...body].filter((char) => char.charCodeAt(0) > 127);
  assert.deepEqual(nonAscii, []);
  assert.match(body, /Fairfax City \(~24k\)/);
  assert.match(body, /Fairfax County \(~1\.1M\)/);
  assert.match(body, /Two real leads/);
  assert.match(body, /San Bernardino/);
  assert.match(body, /Springfield/);
  assert.match(body, /no territory/);
  assert.match(body, /territory with no dealer/);
  assert.match(body, /ZIP unresolved/);
  assert.match(body, /Airtable/);
  assert.match(body, /one-way ratchet/i);
  assert.match(body, /suppression lists/);
  assert.match(body, /pre-send guard/i);
  assert.match(body, /daily audit/);
  assert.match(body, /production Network OS repository stays private/i);
  assert.match(body, /first audit run tests the tool/i);
  assert.doesNotMatch(body, /Milwaukee|ProVia|86 locations|thousands/i);
});

test("public work surfaces do not list the invite-only path", () => {
  const files = ["src/app/work/page.tsx", "src/app/page.tsx", "src/app/sitemap.ts", "public/llms.txt"];
  for (const file of files) {
    const source = readFileSync(file, "utf8");
    assert.equal(source.includes("window-depot-network-os"), false, file);
  }
  const robots = readFileSync("src/app/robots.ts", "utf8");
  assert.match(robots, /CASE_STUDY_PATH/);
  const locked = readFileSync("src/app/work/window-depot-network-os/page.tsx", "utf8");
  assert.doesNotMatch(locked, /Fairfax|Airtable|Drizzle|Springfield/);
});
