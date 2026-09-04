"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const LINKS_BEFORE_SERVICES = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
];

const LINKS_AFTER_SERVICES = [
  { href: "/#ai-approach", label: "AI Approach" },
  { href: "/contact", label: "Contact" },
];

const SERVICE_GROUPS = [
  {
    label: "Software",
    links: [
      { href: "/services", label: "All Services" },
      { href: "/services/web-applications", label: "Web Applications & SaaS" },
    ],
  },
  {
    label: "AI & Automation",
    links: [
      {
        href: "/services/ai-automation",
        label: "AI Integration & Automation",
      },
      {
        href: "/services/ai-automation/sprint",
        label: "AI Automation Sprint",
      },
    ],
  },
  {
    label: "Aerial Documentation",
    links: [
      { href: "/services/drone", label: "All Aerial Services" },
      {
        href: "/services/drone/real-estate",
        label: "Real Estate Aerials",
      },
      {
        href: "/services/drone/roof-inspection",
        label: "Commercial Roof Documentation",
      },
      { href: "/services/drone/mapping", label: "Aerial Mapping" },
      {
        href: "/services/drone/construction-progress",
        label: "Construction Progress",
      },
      {
        href: "/services/drone/commercial-video",
        label: "Commercial Video",
      },
      {
        href: "/services/drone/deer-recovery",
        label: "Deer Recovery",
      },
    ],
  },
];

function linkActive(href: string, pathname: string) {
  if (href === "/#ai-approach") return false;
  if (href === "/services") {
    return (
      pathname === "/services" ||
      pathname.startsWith("/services/")
    );
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

function DesktopNavLink({
  href,
  label,
  pathname,
}: {
  href: string;
  label: string;
  pathname: string;
}) {
  const active = linkActive(href, pathname);

  return (
    <Link
      href={href}
      aria-current={pathname === href ? "page" : undefined}
      className={`transition ${
        active ? "font-medium text-white" : "text-gray-400 hover:text-white"
      }`}
    >
      {label}
    </Link>
  );
}

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/80 backdrop-blur-lg border-b border-white/5">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-tight">
          <span className="text-[#DC2626]">D</span>ean{" "}
          <span className="text-[#DC2626]">D</span>iego
        </Link>

        {/* Desktop */}
        <div className="hidden h-full items-center gap-8 text-sm md:flex">
          {LINKS_BEFORE_SERVICES.map((link) => (
            <DesktopNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
            />
          ))}
          <div className="group relative flex h-full items-center">
            <Link
              href="/services"
              aria-current={pathname === "/services" ? "page" : undefined}
              aria-haspopup="true"
              className={`flex items-center gap-1.5 transition ${
                linkActive("/services", pathname)
                  ? "font-medium text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              Services
              <svg
                aria-hidden="true"
                className="h-3.5 w-3.5 transition-transform group-hover:rotate-180 group-focus-within:rotate-180"
                fill="none"
                viewBox="0 0 20 20"
                strokeWidth={1.75}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m6 8 4 4 4-4"
                />
              </svg>
            </Link>
            <div
              data-services-menu="desktop"
              role="group"
              aria-label="Services menu"
              className="invisible pointer-events-none absolute left-1/2 top-full w-[calc(100vw-3rem)] max-w-3xl -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto group-focus-within:opacity-100"
            >
              <div className="grid grid-cols-3 gap-6 rounded-xl border border-white/10 bg-[#111111]/98 p-6 shadow-2xl shadow-black/60 backdrop-blur-xl">
                {SERVICE_GROUPS.map((group) => (
                  <div key={group.label}>
                    <p className="mb-2 px-3 text-[11px] font-medium uppercase tracking-wider text-[#DC2626]">
                      {group.label}
                    </p>
                    <div className="space-y-1">
                      {group.links.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href}
                          aria-current={
                            pathname === link.href ? "page" : undefined
                          }
                          className={`block rounded-lg px-3 py-2.5 leading-snug transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC2626] ${
                            pathname === link.href
                              ? "bg-white/[0.06] text-white"
                              : "text-gray-300 hover:bg-white/[0.05] hover:text-white"
                          }`}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {LINKS_AFTER_SERVICES.map((link) => (
            <DesktopNavLink
              key={link.href}
              href={link.href}
              label={link.label}
              pathname={pathname}
            />
          ))}
          <a
            href="/dean-diego-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#DC2626] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#B91C1C] transition"
          >
            Resume
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 text-white md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {open ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-navigation"
        aria-hidden={!open}
        className={`max-h-[calc(100dvh-4rem)] space-y-3 overflow-y-auto border-t border-white/5 bg-[#0A0A0A] px-6 py-4 md:hidden ${
          open ? "block" : "hidden"
        }`}
      >
        {LINKS_BEFORE_SERVICES.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`block py-2 text-sm ${
              linkActive(link.href, pathname)
                ? "font-medium text-white"
                : "text-gray-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <div
          data-services-menu="mobile"
          role="group"
          aria-label="Services menu"
          className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
        >
          <Link
            href="/services"
            onClick={() => setOpen(false)}
            className={`flex items-center justify-between py-1 text-sm ${
              linkActive("/services", pathname)
                ? "font-medium text-white"
                : "text-gray-200"
            }`}
          >
            Services
            <span className="text-xs text-[#DC2626]">View all</span>
          </Link>
          <div className="mt-4 space-y-4 border-l border-white/10 pl-4">
            {SERVICE_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="mb-1.5 text-[10px] font-medium uppercase tracking-wider text-[#DC2626]">
                  {group.label}
                </p>
                <div className="space-y-1">
                  {group.links
                    .filter((link) => link.href !== "/services")
                    .map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        aria-current={
                          pathname === link.href ? "page" : undefined
                        }
                        className={`block py-1.5 text-sm ${
                          pathname === link.href
                            ? "font-medium text-white"
                            : "text-gray-400"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        {LINKS_AFTER_SERVICES.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className={`block py-2 text-sm ${
              linkActive(link.href, pathname)
                ? "font-medium text-white"
                : "text-gray-400"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <a
          href="/dean-diego-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block bg-[#DC2626] text-white px-4 py-2.5 rounded-lg text-sm font-medium text-center mt-2"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
