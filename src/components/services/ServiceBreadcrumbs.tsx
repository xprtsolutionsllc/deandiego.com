import Link from "next/link";

type Breadcrumb = {
  label: string;
  href?: string;
};

export default function ServiceBreadcrumbs({
  items,
}: {
  items: Breadcrumb[];
}) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="text-xs text-gray-500 uppercase tracking-wider mb-4"
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <span aria-hidden="true">/</span> : null}
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-[#DC2626] transition"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-300" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
