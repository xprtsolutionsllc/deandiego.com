import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Commercial Roof Inspection",
  description:
    "RTK-tagged 2 cm Wide-RGB roof ortho, DSM, and pin list from a Matrice 4T grid, processed in Fieldmesh. Source file for PEs and inspectors. Not a stamp. Ohio commercial. Request a quote.",
};

const CHECK = (
  <svg className="w-4 h-4 text-[#DC2626] mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
  </svg>
);

const IN_PACKAGE = [
  "Georeferenced 2 cm Wide-RGB orthomosaic (GeoTIFF) of the whole roof",
  "DSM for ponding and slope",
  "Marked findings on the ortho: hail, seam/flash, ponding, puncture, HVAC/curb, debris, staining",
  "Pin list with notes you can take into a report or CAD",
  "Close-up stills of damage (separate folder, not in the mosaic)",
  "Capture log: site, date, frame count, RTK FIX %, GSD, coverage (sf)",
];

const FOR_PE = [
  "RTK FIX on the grid. Relative, tagged. Not a cadastral survey.",
  "Wide-only nadir mosaic. Thermal and zoom stay out of the stitch.",
  "GeoTIFF + DSM you can drop on a map. 2 cm GSD target.",
  "40+ Wide frames, 3+ lines, overlap past the parapet. No single-pass mosaics.",
  "You stamp. We do not. The file is evidence for your report.",
];

const NOT_IN_PACKAGE = [
  "Not a Professional Engineer (PE) report. No engineer stamp.",
  "Not an insurance certification or ASTM inspection.",
  "Not a cadastral or land survey. Relative, RTK-tagged.",
  "No mixed thermal mosaic. Thermal is a separate product if you want it.",
  "No single flight line. No mosaic from fewer than 40 Wide frames.",
  "Preview or mock watermarks are never client files.",
];

export default function RoofInspectionPage() {
  return (
    <>
      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs text-gray-500 uppercase tracking-wider mb-4">
            <Link href="/services/drone" className="hover:text-[#DC2626] transition">
              Drone
            </Link>
            <span className="mx-2">/</span>
            <span className="text-gray-300">Commercial Roof Inspection</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Roof Inspection.</h1>
          <p className="text-lg text-gray-400 max-w-2xl mb-6">
            RTK-tagged 2 cm Wide-RGB ortho, DSM, and a pin list. Matrice 4T grid, processed in Fieldmesh. You take it from there.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl mb-8">
            Built for PEs, roof consultants, inspectors, roofers, and owners who need a measured deck, not a folder of JPEGs. We capture and mark. We do not stamp, certify insurance, or sell a land survey. Quote on the call. Delivery after a full roof grid.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            {["RTK FIX", "2 cm GSD", "GeoTIFF + DSM", "You stamp"].map((b) => (
              <span key={b} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300">
                {b}
              </span>
            ))}
          </div>
          <Link
            href="/contact?topic=drone-roof"
            className="inline-block bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm"
          >
            Request a quote
          </Link>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
          <div className="rounded-xl border border-white/10 bg-white/[0.03] p-8">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">Who it is for</h2>
            <h3 className="text-2xl font-bold mb-4">Ohio commercial roofs.</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              Retail, warehouse, school, apartment, municipal. Owners and roofers who need the whole deck. PEs and inspectors who need an RTK file they can put under their own stamp.
            </p>
            <ul className="space-y-2.5">
              {["PE / roof consultant / inspector", "Roofer and GC pre-bid", "Facility owner and property manager", "Retail, warehouse, school, municipal"].map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                  {CHECK}
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-[#DC2626]/40 bg-[#DC2626]/5 p-8">
            <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">The package</h2>
            <h3 className="text-2xl font-bold mb-4">The file, not the stamp.</h3>
            <ul className="space-y-2.5">
              {IN_PACKAGE.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-gray-300">
                  {CHECK}
                  {f}
                </li>
              ))}
            </ul>
            <p className="text-xs text-gray-500 mt-6">
              Thermal pass available as a second product. Never baked into the RGB ortho.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">For PEs and inspectors</h2>
          <h3 className="text-3xl font-bold mb-4">RTK-level capture. Your report.</h3>
          <p className="text-gray-400 max-w-2xl mb-8">
            You already know what a stamp costs and who can put it on paper. What you need is a clean, georeferenced roof you did not have to walk. We fly the grid, process in Fieldmesh, and hand you GeoTIFF, DSM, GSD, FIX %, and pins. You go from there.
          </p>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
            {FOR_PE.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                {CHECK}
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">What this is not</h2>
          <h3 className="text-3xl font-bold mb-8">We will not undersell the grid.</h3>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3 max-w-4xl">
            {NOT_IN_PACKAGE.map((f) => (
              <li key={f} className="flex items-start gap-3 text-sm text-gray-400">
                {CHECK}
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm text-[#DC2626] font-medium uppercase tracking-wider mb-3">How we shoot</h2>
          <h3 className="text-3xl font-bold mb-4">Full roof grid. Wide RGB only.</h3>
          <p className="text-gray-400 max-w-2xl mb-8">
            Pilot 2 Area Route, Ortho Collection. Nadir, Wide camera only. Rectangle with 3+ lines, 10 to 15 m past the parapet, 40+ Wide frames, RTK FIX. Thermal, zoom, and close-up damage stills stay in a separate folder. They never go into the stitch. Processed in Fieldmesh.
          </p>
          <p className="text-sm text-gray-500 max-w-2xl">
            Turnaround is after a full roof grid, not a same-day stills dump. You get a quote on the discovery call.
          </p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-[#DC2626]/5 to-transparent">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">Need an RTK roof file?</h2>
          <p className="text-gray-400 mb-8 max-w-xl">
            Send the site and who needs the stamp. Same-day number on the call.
          </p>
          <Link
            href="/contact?topic=drone-roof"
            className="inline-block bg-[#DC2626] text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-[#B91C1C] transition text-sm"
          >
            Request a quote
          </Link>
        </div>
      </section>
    </>
  );
}
