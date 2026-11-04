import { events } from "../data/events";
import { chapter } from "../data/chapter";

const formatDate = (iso) =>
  new Date(`${iso}T00:00:00`).toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

const EventList = ({ limit }) => {
  const items = limit ? events.slice(0, limit) : events;

  if (items.length === 0) {
    return (
      <div className="border-y border-line py-10">
        <p className="font-display text-2xl text-ink">No events scheduled right now</p>
        <p className="mt-3 max-w-xl leading-7 text-muted">
          Upcoming sessions will be listed here as they are announced.
          {chapter.socials.instagram ? (
            <>
              {" "}
              Follow{" "}
              <a href={chapter.socials.instagram} target="_blank" rel="noreferrer" className="text-acm hover:underline">
                ACM IIT Mandi on Instagram
              </a>{" "}
              to hear first.
            </>
          ) : (
            " Check back soon."
          )}
        </p>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-line border-y border-line">
      {items.map((event) => (
        <li key={`${event.date}-${event.title}`} className="grid gap-3 py-7 sm:grid-cols-[10rem_1fr_auto] sm:gap-8">
          <div>
            <p className="font-semibold text-ink">{formatDate(event.date)}</p>
            {event.time && <p className="text-sm text-muted">{event.time}</p>}
          </div>
          <div>
            <p className={`text-sm ${event.chapter === "ACM-W" ? "text-acmw" : "text-acm"}`}>
              {event.chapter === "ACM-W" ? "ACM-W IIT Mandi" : "ACM IIT Mandi"}
              {event.venue && <span className="text-muted">, {event.venue}</span>}
            </p>
            <h3 className="mt-1 font-display text-2xl font-medium text-ink">{event.title}</h3>
            {event.description && <p className="mt-2 max-w-xl leading-7 text-muted">{event.description}</p>}
          </div>
          {event.registerUrl && (
            <a
              href={event.registerUrl}
              target="_blank"
              rel="noreferrer"
              className="self-start rounded-md border border-line px-4 py-2 text-sm font-semibold text-ink hover:border-ink"
            >
              Register
            </a>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EventList;
