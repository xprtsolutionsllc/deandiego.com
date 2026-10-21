import assert from "node:assert/strict";
import test from "node:test";
import {
  CONTENT_SECURITY_POLICY,
  PERMISSIONS_POLICY,
  securityHeaders,
} from "../src/lib/security-headers.ts";

test("security headers include the required policies", () => {
  const headers = Object.fromEntries(securityHeaders().map((header) => [header.key, header.value]));

  assert.equal(headers["Strict-Transport-Security"], "max-age=63072000; includeSubDomains");
  assert.equal(headers["X-Content-Type-Options"], "nosniff");
  assert.equal(headers["X-Frame-Options"], "DENY");
  assert.equal(headers["Referrer-Policy"], "strict-origin-when-cross-origin");
  assert.equal(headers["Permissions-Policy"], PERMISSIONS_POLICY);
  assert.equal(headers["Content-Security-Policy-Report-Only"], CONTENT_SECURITY_POLICY);
  assert.equal("Content-Security-Policy" in headers, false);
});

test("report-only CSP matches the hosts this site loads and frames nothing", () => {
  assert.match(CONTENT_SECURITY_POLICY, /frame-ancestors 'none'/);
  assert.match(CONTENT_SECURITY_POLICY, /script-src 'self' 'unsafe-inline' https:\/\/va\.vercel-scripts\.com/);
  assert.match(CONTENT_SECURITY_POLICY, /https:\/\/vitals\.vercel-insights\.com/);
  assert.match(CONTENT_SECURITY_POLICY, /frame-src 'self' https:\/\/www\.openstreetmap\.org/);
  assert.match(PERMISSIONS_POLICY, /geolocation=\(self\)/);
  assert.match(PERMISSIONS_POLICY, /camera=\(\)/);
});
