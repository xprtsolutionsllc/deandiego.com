import assert from "node:assert/strict";
import test from "node:test";
import {
  UNLOCK_MAX_ATTEMPTS,
  UNLOCK_WINDOW_MS,
  createUnlockRateLimiter,
  unlockClientAddress,
  unlockClientKey,
} from "../src/lib/case-study-rate-limit.ts";

test("vercel client address ignores a spoofed forwarded-for prefix", () => {
  const headers = new Headers({
    "x-vercel-forwarded-for": "203.0.113.10, 10.0.0.1",
    "x-forwarded-for": "198.51.100.5, 203.0.113.10",
    "x-real-ip": "198.51.100.9",
  });
  assert.equal(unlockClientAddress(headers), "203.0.113.10");
});

test("local forwarded-for uses the last hop", () => {
  const headers = new Headers({
    "x-forwarded-for": "198.51.100.5, 203.0.113.20",
  });
  assert.equal(unlockClientAddress(headers), "203.0.113.20");
  assert.equal(unlockClientAddress(new Headers()), "unknown");
});

test("client keys are stable hashes and do not echo the address", () => {
  const headers = new Headers({ "x-real-ip": "203.0.113.8" });
  const key = unlockClientKey(headers);
  assert.match(key, /^[a-f0-9]{64}$/);
  assert.equal(key.includes("203.0.113.8"), false);
  assert.equal(key, unlockClientKey(headers));
});

test("attempts are allowed through the budget, then throttled until the window resets", () => {
  let now = 1_000_000;
  const limiter = createUnlockRateLimiter({
    now: () => now,
    maxAttempts: UNLOCK_MAX_ATTEMPTS,
    windowMs: UNLOCK_WINDOW_MS,
  });

  for (let attempt = 1; attempt <= UNLOCK_MAX_ATTEMPTS; attempt += 1) {
    const result = limiter.take("client-a");
    assert.equal(result.allowed, true, `attempt ${attempt}`);
  }

  const blocked = limiter.take("client-a");
  assert.equal(blocked.allowed, false);
  assert.equal(blocked.retryAfterSeconds, UNLOCK_WINDOW_MS / 1000);

  assert.equal(limiter.take("client-b").allowed, true);

  now += UNLOCK_WINDOW_MS;
  assert.equal(limiter.take("client-a").allowed, true);
});
