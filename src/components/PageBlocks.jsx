import { Link } from "react-router-dom";

// Small layout pieces shared by the About, ACM-W and Contact pages.

export const Section = ({ id, className = "", children }) => (
  <section aria-labelledby={id} className={`mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 ${className}`}>
    {children}
  </section>
);

export const SectionTitle = ({ id, eyebrow, title, intro, tone = "acm" }) => (
  <div className="max-w-2xl">
    {eyebrow && <p className={`text-sm font-medium ${tone === "acmw" ? "text-acmw" : "text-acm"}`}>{eyebrow}</p>}
    <h2 id={id} className="mt-3 font-display text-3xl font-medium tracking-tight text-ink sm:text-5xl">
      {title}
    </h2>
    {intro && <p className="mt-5 text-lg leading-8 text-muted">{intro}</p>}
  </div>
);

export const ArrowIcon = ({ className = "size-4" }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const ExternalIcon = ({ className = "size-3.5" }) => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className={className}>
    <path d="M6 3H3v10h10v-3M9 3h4v4M13 3 7 9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const TextLink = ({ href, to, children, tone = "acm" }) => {
  const className = `inline-flex items-center gap-1.5 text-sm font-semibold ${
    tone === "acmw" ? "text-acmw" : "text-acm"
  } hover:underline`;
  return to ? (
    <Link to={to} className={className}>
      {children}
      <ArrowIcon />
    </Link>
  ) : (
    <a href={href} target="_blank" rel="noreferrer" className={className}>
      {children}
      <ExternalIcon />
    </a>
  );
};

const buttonBase = "inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-semibold transition-colors";

export const CtaBand = ({ title, body, primary, secondary, tone = "ink" }) => {
  const bg = tone === "acmw" ? "bg-acmw" : "bg-ink";
  const primaryText = tone === "acmw" ? "text-acmw" : "text-ink";
  return (
    <section className={`${bg} text-white`}>
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.4fr_1fr] lg:items-end">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 max-w-xl text-lg leading-8 text-white/75">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3 lg:justify-end">
          {primary && (
            <Link to={primary.to} className={`${buttonBase} bg-white ${primaryText} hover:bg-white/85`}>
              {primary.label}
              <ArrowIcon />
            </Link>
          )}
          {secondary && (
            <Link
              to={secondary.to}
              className={`${buttonBase} border border-white/30 text-white hover:border-white hover:bg-white/10`}
            >
              {secondary.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};
