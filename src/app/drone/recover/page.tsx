import type { Metadata } from "next";
import RecoverFlow from "./RecoverFlow";

export const metadata: Metadata = {
  title: "Deer recovery request",
  description:
    "Request thermal deer recovery in Northeast Ohio. Ohio only, after the taking. $250 to come out. $50 more if found dead.",
};

export default async function RecoverPage({
  searchParams,
}: {
  searchParams: Promise<{ src?: string }>;
}) {
  const depositUrl = process.env.NEXT_PUBLIC_DEER_DEPOSIT_URL || "";
  const venmoUrl = process.env.NEXT_PUBLIC_DEER_VENMO_URL || "";
  const { src } = await searchParams;
  const fromMap = src === "ddr" || src === "map";

  return (
    <section className="min-h-dvh py-10 sm:py-14">
      <div className="max-w-lg mx-auto px-6">
        <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">
          Dean Diego Drone / Recover
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mb-3">Need deer recovery?</h1>
        <p className="text-sm text-gray-400 mb-8 leading-relaxed">
          {fromMap
            ? "Thermal search, Northeast Ohio. Fill this out and sign before Dean rolls. $250 after the search, on site. $50 more if found dead. Ohio only, after the taking."
            : "Thermal search, Northeast Ohio. $250 to come out. $50 more if found dead. Ohio only, after the taking. Dean calls the number you leave."}
        </p>
        <RecoverFlow depositUrl={depositUrl} venmoUrl={venmoUrl} payAfter={fromMap} source={fromMap ? "ddr_map" : "site"} />
      </div>
    </section>
  );
}
