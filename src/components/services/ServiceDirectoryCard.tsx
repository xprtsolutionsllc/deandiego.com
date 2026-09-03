import Link from "next/link";

type ServiceDirectoryCardProps = {
  title: string;
  description: string;
  href: string;
  eyebrow?: string;
  features?: string[];
  id?: string;
  anchorAliases?: string[];
};

export default function ServiceDirectoryCard({
  title,
  description,
  href,
  eyebrow,
  features = [],
  id,
  anchorAliases = [],
}: ServiceDirectoryCardProps) {
  return (
    <article
      id={id}
      className="scroll-mt-24 flex h-full flex-col rounded-xl border border-white/10 bg-white/[0.03] p-8"
    >
      {anchorAliases.map((anchor) => (
        <span key={anchor} id={anchor} className="scroll-mt-24" />
      ))}
      {eyebrow ? (
        <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[#DC2626]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="mb-3 text-2xl font-bold">{title}</h2>
      <p className="mb-6 text-sm leading-relaxed text-gray-400">{description}</p>
      {features.length > 0 ? (
        <ul className="mb-8 space-y-2.5">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm text-gray-400"
            >
              <svg
                aria-hidden="true"
                className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#DC2626]"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 12.75 6 6 9-13.5"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
      ) : null}
      <Link
        href={href}
        className="mt-auto text-sm font-semibold text-[#DC2626] hover:underline"
      >
        Explore {title} <span aria-hidden="true">&rarr;</span>
      </Link>
    </article>
  );
}
