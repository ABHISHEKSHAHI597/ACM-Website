import { annualEvents } from "../data/events";

// Card grid of the chapter's yearly events, used on the Home and About pages.
const AnnualEventCards = ({ limit }) => (
  <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
    {(limit ? annualEvents.slice(0, limit) : annualEvents).map(({ subtitle, title, kind, summary }) => (
      <li key={title} className="flex flex-col rounded-lg border border-line bg-white p-6 transition-colors hover:border-acm/40">
        <div className="flex items-start justify-between gap-3 text-sm">
          <span className="font-medium text-ink">{subtitle}</span>
          <span className="shrink-0 rounded-full bg-mist px-2.5 py-0.5 text-xs text-muted">{kind}</span>
        </div>
        <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink">{title}</h3>
        <p className="mt-3 leading-7 text-muted">{summary}</p>
      </li>
    ))}
  </ol>
);

export default AnnualEventCards;
