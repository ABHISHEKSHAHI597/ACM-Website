import EventList from "../components/EventList";
import PageHeader from "../components/PageHeader";
import { eventFormats } from "../data/events";

const EventsPage = () => (
  <main>
    <PageHeader
      section="Events"
      title="Events at ACM IIT Mandi"
      intro="Talks, workshops, contests and hackathons run by the ACM and ACM-W chapters, open to every student at IIT Mandi."
    />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <h2 className="mb-8 font-display text-3xl font-medium text-ink">Upcoming</h2>
      <EventList />

      <h2 className="mt-20 mb-8 font-display text-3xl font-medium text-ink">Past events</h2>
      <EventList past />

      <h2 className="mt-20 mb-8 font-display text-3xl font-medium text-ink">What we run</h2>
      <dl className="grid gap-x-16 gap-y-10 md:grid-cols-2">
        {eventFormats.map(({ title, body }) => (
          <div key={title} className="border-t border-line pt-6">
            <dt className="font-semibold text-ink">{title}</dt>
            <dd className="mt-2 max-w-xl leading-7 text-muted">{body}</dd>
          </div>
        ))}
      </dl>
    </div>
  </main>
);

export default EventsPage;
