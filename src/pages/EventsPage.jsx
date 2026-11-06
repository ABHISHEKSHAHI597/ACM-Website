import EventList from "../components/EventList";
import EventPath from "../components/EventPath";
import PageHeader from "../components/PageHeader";
import { annualEvents } from "../data/events";

const EventsPage = () => (
  <main>
    <PageHeader
      section="Events"
      title="Events at ACM IIT Mandi"
      intro="Workshops, sessions and contests run by the ACM and ACM-W chapters, open to every student at IIT Mandi."
    />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="mb-8 font-display text-3xl font-medium text-ink">Upcoming</h2>
      <EventList />

      <h2 className="mt-20 font-display text-3xl font-medium text-ink">Your path through the year</h2>
      <p className="mt-3 mb-8 max-w-2xl leading-7 text-muted">
        How the yearly events build on each other, from your first commit to your first interview.
      </p>
      <EventPath />

      <h2 className="mt-20 font-display text-3xl font-medium text-ink">Every year</h2>
      <p className="mt-3 mb-8 max-w-2xl leading-7 text-muted">
        The events the chapter runs annually, from first-year workshops to placement preparation.
      </p>
      <ol className="divide-y divide-line border-y border-line">
        {annualEvents.map(({ title, subtitle, tags, body }, i) => (
          <li key={title} className="grid gap-4 py-10 md:grid-cols-[4rem_18rem_1fr] md:gap-8">
            <p className="font-display text-2xl text-muted tabular-nums">{String(i + 1).padStart(2, "0")}</p>
            <div>
              <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
              <p className="mt-1 text-sm text-acm">{subtitle}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <li key={tag} className="rounded-full border border-line px-3 py-1 text-xs font-medium text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
            <div className="max-w-2xl space-y-4 leading-7 text-muted">
              {body.map((para) => (
                <p key={para.slice(0, 32)}>{para}</p>
              ))}
            </div>
          </li>
        ))}
      </ol>

      <h2 className="mt-20 mb-8 font-display text-3xl font-medium text-ink">Past events</h2>
      <EventList past />
    </div>
  </main>
);

export default EventsPage;
