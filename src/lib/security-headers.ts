/**
 * Response headers applied to every route.
 *
 * The CSP is report-only. It allows what the production pages actually load:
 * same-origin Next assets, inline JSON-LD and Next bootstrap scripts, inline
 * styles from Tailwind and next/font, the OpenStreetMap embed on deer
 * recovery, and Vercel Analytics / Speed Insights (same-origin in production,
 * va.vercel-scripts.com in development, vitals.vercel-insights.com when a
 * Speed Insights DSN is set).
 */

export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self' https://vitals.vercel-insights.com https://va.vercel-scripts.com",
  "frame-src 'self' https://www.openstreetmap.org",
  "manifest-src 'self'",
].join("; ");

/** Deer recovery calls navigator.geolocation. Other powerful features stay off. */
export const PERMISSIONS_POLICY = [
  "accelerometer=()",
  "camera=()",
  "geolocation=(self)",
  "gyroscope=()",
  "magnetometer=()",
  "microphone=()",
  "payment=()",
  "usb=()",
  "browsing-topics=()",
].join(", ");

export function securityHeaders(): { key: string; value: string }[] {
  return [
    { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains" },
    { key: "X-Content-Type-Options", value: "nosniff" },
    { key: "X-Frame-Options", value: "DENY" },
    { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
    { key: "Permissions-Policy", value: PERMISSIONS_POLICY },
    { key: "Content-Security-Policy-Report-Only", value: CONTENT_SECURITY_POLICY },
  ];
}

export function caseStudyNoStoreHeaders(): { key: string; value: string }[] {
  return [
    { key: "X-Robots-Tag", value: "noindex, nofollow" },
    { key: "Cache-Control", value: "private, no-store" },
  ];
}
