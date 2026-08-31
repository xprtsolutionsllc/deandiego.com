import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { TOWNS, townBySlug } from "../towns";

type Props = { params: Promise<{ town: string }> };

export function generateStaticParams() {
  return TOWNS.map((t) => ({ town: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = townBySlug(slug);
  if (!town) return {};
  const title = `Drone Deer Recovery in ${town.name}`;
  const description = `Thermal drone deer recovery in ${town.name}, ${town.county} County, Ohio. $300 to come out. $50 more if we find it.`;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://deandiego.com/deer-recovery/${town.slug}`,
      type: "website",
    },
  };
}

export default async function TownDeerRecoveryPage({ params }: Props) {
  const { town: slug } = await params;
  const town = townBySlug(slug);
  if (!town) notFound();

  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            <Link href="/deer-recovery" className="text-gray-300 hover:text-white">Dean&apos;s Deer Recovery</Link>
            <span className="mx-2">/</span>
            <span>{town.name}, Ohio</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Drone deer recovery in {town.name}.
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-8">
            Shot a deer around {town.name} you cannot find? Thermal search in {town.county} County. $300 to come out. $50 more if we find it.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {[`${town.name}, Ohio`, `${town.county} County`, "$300 to come out", "Thermal search"].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">{b}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/deer-recovery#dispatch" className="bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm">
              Submit a dispatch
            </Link>
            <Link href="/deer-recovery" className="border border-white/15 text-gray-300 px-8 py-3.5 rounded-lg font-semibold hover:border-[#DC2626]/40 transition text-sm">
              How it works
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Thermal search, {town.name}.</h2>
          <p className="text-gray-400 max-w-2xl mb-8">
            Dean flies out of Northeast Ohio. {town.name} is in the service area. Ohio only. Pennsylvania is a hard no.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl">
            This is after the taking, not during the hunt. No hunting devices in the recovery party. If the deer is alive, stop and mark last position.
          </p>
        </div>
      </section>
    </>
  );
}
