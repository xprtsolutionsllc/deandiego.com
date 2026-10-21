import { createHash } from "node:crypto";

/** Failed and successful guesses share one budget so a correct guess cannot skip the throttle. */
export const UNLOCK_MAX_ATTEMPTS = 8;
export const UNLOCK_WINDOW_MS = 15 * 60 * 1000;

export type UnlockLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

type HeaderSource = {
  get(name: string): string | null;
};

type Bucket = {
  count: number;
  resetAt: number;
};

function firstHop(value: string | null): string | null {
  if (!value) return null;
  const hop = value.split(",")[0]?.trim();
  return hop ? hop : null;
}

/**
 * Address used for the unlock limiter.
 * On Vercel, x-vercel-forwarded-for is set by the platform and is not a client-supplied value.
 * x-forwarded-for is only a fallback for local runs, and the last hop is used so a caller cannot
 * rotate the bucket by prefixing spoofed addresses.
 */
export function unlockClientAddress(headers: HeaderSource): string {
  const vercelForwarded = firstHop(headers.get("x-vercel-forwarded-for"));
  if (vercelForwarded) return vercelForwarded;

  const realIp = headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;

  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    const hops = forwarded
      .split(",")
      .map((part) => part.trim())
      .filter((part) => part.length > 0);
    const nearest = hops[hops.length - 1];
    if (nearest) return nearest;
  }

  return "unknown";
}

export function unlockClientKey(headers: HeaderSource): string {
  return createHash("sha256").update(unlockClientAddress(headers), "utf8").digest("hex");
}

export function createUnlockRateLimiter(options?: {
  now?: () => number;
  maxAttempts?: number;
  windowMs?: number;
}) {
  const now = options?.now ?? (() => Date.now());
  const maxAttempts = options?.maxAttempts ?? UNLOCK_MAX_ATTEMPTS;
  const windowMs = options?.windowMs ?? UNLOCK_WINDOW_MS;
  const buckets = new Map<string, Bucket>();

  return {
    take(key: string): UnlockLimitResult {
      const time = now();
      for (const [bucketKey, bucket] of buckets) {
        if (time >= bucket.resetAt) buckets.delete(bucketKey);
      }

      const existing = buckets.get(key);
      if (!existing) {
        buckets.set(key, { count: 1, resetAt: time + windowMs });
        return { allowed: true, retryAfterSeconds: 0 };
      }

      if (existing.count >= maxAttempts) {
        return {
          allowed: false,
          retryAfterSeconds: Math.max(1, Math.ceil((existing.resetAt - time) / 1000)),
        };
      }

      existing.count += 1;
      return { allowed: true, retryAfterSeconds: 0 };
    },
  };
}

/** Per server instance. Vercel isolates do not share this map. */
export const unlockRateLimiter = createUnlockRateLimiter();
