import useResources from "../hooks/useResources";

const ExternalIcon = () => (
  <svg viewBox="0 0 24 24" className="size-4 shrink-0" fill="none" aria-hidden="true">
    <path d="M9 6h9v9M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const ResourceCards = ({ limit }) => {
  const { resources, status, error } = useResources();

  if (status === "loading") {
    return <p className="py-6 text-sm text-muted">Loading resources…</p>;
  }

  if (status === "error") {
    return (
      <p role="alert" className="rounded-md border border-red-200 bg-red-50 p-5 text-sm text-red-700">
        Resources couldn't be loaded. {error} Refresh the page to try again.
      </p>
    );
  }

  const items = limit ? resources.slice(0, limit) : resources;

  return (
    <ul className="grid border-t border-line md:grid-cols-2 md:gap-x-12">
      {items.map(({ id, title, description, category, url }) => (
        <li key={id} className="border-b border-line">
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="group flex h-full flex-col py-7"
          >
            <span className="text-sm text-acm">{category}</span>
            <span className="mt-2 flex items-start justify-between gap-4">
              <span className="font-display text-2xl font-medium text-ink group-hover:text-acm">
                {title}
              </span>
              <span className="mt-2 text-muted group-hover:text-acm">
                <ExternalIcon />
              </span>
            </span>
            <span className="mt-2 max-w-md leading-7 text-muted">{description}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ResourceCards;
