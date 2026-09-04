import assert from "node:assert/strict";
import test from "node:test";

const baseUrl = process.env.SERVICE_TEST_BASE_URL ?? "http://127.0.0.1:3210";
const canonicalBase = "https://deandiego.com";
const trustedPreviewHeaders = process.env.VERCEL_OIDC_TOKEN
  ? {
      "x-vercel-trusted-oidc-idp-token": process.env.VERCEL_OIDC_TOKEN,
    }
  : {};

function request(path, init = {}) {
  return fetch(`${baseUrl}${path}`, {
    ...init,
    headers: {
      ...trustedPreviewHeaders,
      ...init.headers,
    },
  });
}

const servicePages = [
  "/services",
  "/services/web-applications",
  "/services/ai-automation",
  "/services/ai-automation/sprint",
  "/services/drone",
  "/services/drone/real-estate",
  "/services/drone/roof-inspection",
  "/services/drone/mapping",
  "/services/drone/construction-progress",
  "/services/drone/commercial-video",
  "/services/drone/deer-recovery",
  "/services/drone/deer-recovery/youngstown",
  "/services/drone/deer-recovery/boardman",
  "/services/drone/deer-recovery/austintown",
  "/services/drone/deer-recovery/canfield",
  "/services/drone/deer-recovery/poland",
];

const navigationServicePages = servicePages.filter(
  (path) => !path.startsWith("/services/drone/deer-recovery/"),
);

const legacyRedirects = [
  ["/ai-sprint", "/services/ai-automation/sprint"],
  ["/drone/roof-inspection", "/services/drone/roof-inspection"],
  ["/drone/deer-recovery", "/services/drone/deer-recovery"],
  [
    "/drone/deer-recovery/youngstown",
    "/services/drone/deer-recovery/youngstown",
  ],
  ["/deer-recovery", "/services/drone/deer-recovery"],
  ["/deer-recovery/youngstown", "/services/drone/deer-recovery/youngstown"],
];

const redirects = legacyRedirects.flatMap(([source, destination]) => [
  [source, destination],
  [`${source}/`, destination],
]);

for (const path of servicePages) {
  test(`${path} renders successfully`, async () => {
    const response = await request(path);

    assert.equal(response.status, 200);
  });
}

for (const [source, destination] of redirects) {
  test(`${source} redirects directly to ${destination}`, async () => {
    const response = await request(source, { redirect: "manual" });
    const location = response.headers.get("location");

    assert.equal(response.status, 308);
    assert.ok(location);
    assert.equal(new URL(location, baseUrl).pathname, destination);
  });
}

test("canonical service URLs normalize trailing slashes in one hop", async () => {
  const response = await request("/services/drone/mapping/", {
    redirect: "manual",
  });
  const location = response.headers.get("location");

  assert.equal(response.status, 308);
  assert.ok(location);
  assert.equal(new URL(location, baseUrl).pathname, "/services/drone/mapping");
});

test("the DDR recovery flow stays at its field URL without site chrome", async () => {
  const response = await request("/drone/recover?src=ddr");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /\$250 after the search, on site/);
  assert.doesNotMatch(html, /<nav[\s>]/);
});

test("the sitemap lists canonical service pages only", async () => {
  const response = await request("/sitemap.xml");
  const xml = await response.text();

  assert.equal(response.status, 200);
  for (const path of servicePages) {
    assert.match(xml, new RegExp(`<loc>${canonicalBase}${path}</loc>`));
  }
  assert.match(xml, /<loc>https:\/\/deandiego\.com\/drone\/recover<\/loc>/);
  assert.doesNotMatch(xml, /<loc>https:\/\/deandiego\.com\/ai-sprint<\/loc>/);
  assert.doesNotMatch(
    xml,
    /<loc>https:\/\/deandiego\.com\/drone\/(?:deer-recovery|roof-inspection)<\/loc>/,
  );
});

test("the site navigation exposes the service tree on desktop and mobile", async () => {
  const response = await request("/");
  const html = await response.text();

  assert.equal(response.status, 200);
  assert.match(html, /data-services-menu="desktop"/);
  assert.match(html, /data-services-menu="mobile"/);
  for (const path of navigationServicePages) {
    assert.match(html, new RegExp(`href="${path}"`));
  }
});
