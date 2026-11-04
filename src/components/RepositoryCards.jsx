import useRepositories from "../hooks/useRepositories";
import { chapter } from "../data/chapter";

const languageColors = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  C: "#555555",
  "C++": "#f34b7d",
  Java: "#b07219",
  Rust: "#dea584",
  Go: "#00ADD8",
  Shell: "#89e051",
  "Jupyter Notebook": "#DA5B0B",
  Dart: "#00B4AB",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  "C#": "#178600",
};

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

const ExternalIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
    <path d="M9 6h9v9M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="currentColor" aria-hidden="true">
    <path d="M8 1.6 9.9 5.5l4.3.6-3.1 3 .7 4.3L8 11.3l-3.8 2.1.7-4.3-3.1-3 4.3-.6L8 1.6Z" />
  </svg>
);

const ForkIcon = () => (
  <svg viewBox="0 0 16 16" className="size-3.5 shrink-0" fill="none" aria-hidden="true">
    <path
      d="M4 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Zm8 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM4 4v2.5A2.5 2.5 0 0 0 6.5 9h3A2.5 2.5 0 0 0 12 6.5V4M8 9v3m0 0a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RepositoryCards = ({ limit, className = "" }) => {
  const { repositories, status, error } = useRepositories();

  if (status === "loading") {
    return (
      <ul className={`grid gap-6 md:grid-cols-2 ${className}`} aria-label="Loading projects">
        {Array.from({ length: limit ?? 4 }).map((_, index) => (
          <li
            key={index}
            className="h-52 animate-pulse rounded-lg border border-line bg-mist motion-reduce:animate-none"
          />
        ))}
      </ul>
    );
  }

  if (status === "error") {
    return (
      <div role="alert" className="rounded-lg border border-red-200 bg-red-50 p-6 text-sm text-red-700">
        <p>Projects couldn&apos;t be loaded from GitHub. {error}</p>
        <a
          href={chapter.socials.github}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 font-semibold underline"
        >
          Browse the organization on GitHub
          <ExternalIcon className="size-3.5" />
        </a>
      </div>
    );
  }

  if (repositories.length === 0) {
    return (
      <div className="border-y border-line py-10">
        <p className="font-display text-2xl text-ink">No public projects yet</p>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          Repositories will appear here as the chapter publishes them.{" "}
          <a href={chapter.socials.github} target="_blank" rel="noreferrer" className="text-acm hover:underline">
            Visit the GitHub organization
          </a>{" "}
          to see what is in progress.
        </p>
      </div>
    );
  }

  const items = limit ? repositories.slice(0, limit) : repositories;

  return (
    <ul className={`grid gap-6 md:grid-cols-2 ${className}`}>
      {items.map(({ id, name, description, url, language, stars, forks, topics, updatedAt, archived }) => (
        <li key={id}>
          <article className="group flex h-full flex-col rounded-lg border border-line p-6 transition-colors hover:border-acm/40">
            <div className="flex items-start justify-between gap-4">
              <h3 className="font-display text-2xl font-medium leading-snug text-ink">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-start gap-2 hover:text-acm"
                >
                  <span className="break-all">{name}</span>
                  <ExternalIcon className="mt-1.5 size-3.5 shrink-0 text-muted group-hover:text-acm" />
                </a>
              </h3>
              {archived && (
                <span className="shrink-0 rounded-full bg-mist px-2.5 py-0.5 text-xs text-muted">Archived</span>
              )}
            </div>

            <p className="mt-3 leading-7 text-muted">{description || "No description provided yet."}</p>

            {topics.length > 0 && (
              <ul className="mt-4 flex flex-wrap gap-2">
                {topics.slice(0, 4).map((topic) => (
                  <li key={topic} className="rounded-full bg-mist px-2.5 py-0.5 text-xs text-muted">
                    {topic}
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-6 text-sm text-muted">
              {language && (
                <span className="inline-flex items-center gap-1.5">
                  <span
                    aria-hidden="true"
                    className="size-2.5 rounded-full"
                    style={{ backgroundColor: languageColors[language] ?? "#8b949e" }}
                  />
                  {language}
                </span>
              )}
              <span className="inline-flex items-center gap-1" title={`${stars} stars`}>
                <StarIcon />
                {stars}
                <span className="sr-only">stars</span>
              </span>
              <span className="inline-flex items-center gap-1" title={`${forks} forks`}>
                <ForkIcon />
                {forks}
                <span className="sr-only">forks</span>
              </span>
              <span>Updated {formatDate(updatedAt)}</span>
            </div>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default RepositoryCards;
