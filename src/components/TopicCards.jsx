import { Link } from "react-router-dom";
import EventList from "./EventList";
import RepositoryCards from "./RepositoryCards";
import ResourceCards from "./ResourceCards";

const activities = [
  {
    title: "Talks and workshops",
    body: "Sessions led by students, faculty and visiting engineers, from first steps in a language to research-level topics.",
  },
  {
    title: "Contests and hackathons",
    body: "Competitive programming rounds and build weekends where teams take an idea from sketch to working demo.",
  },
  {
    title: "Reading and project groups",
    body: "Small groups that work through papers from the ACM Digital Library and ship open-source projects together.",
  },
];

const acmFacts = [
  ["Since 1947", "ACM is the world's largest educational and scientific computing society."],
  ["A.M. Turing Award", "ACM presents the award often called the highest honour in computing."],
  ["ACM Digital Library", "Decades of journals, magazines and conference proceedings in one archive."],
];

const SectionHeading = ({ id, title, intro, link }) => (
  <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
    <div>
      <h2 id={id} className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-4 max-w-xl leading-7 text-muted">{intro}</p>}
    </div>
    {link && (
      <Link to={link.to} className="text-sm font-semibold text-acm hover:underline">
        {link.label}
      </Link>
    )}
  </div>
);

const TopicCards = () => {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="activities-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="activities-title" className="font-display text-4xl font-medium tracking-tight text-ink sm:text-5xl">
              What the chapter does
            </h2>
            <p className="mt-5 max-w-sm leading-7 text-muted">
              Everything we run is open to every student at IIT Mandi, whatever
              their branch or year.
            </p>
          </div>
          <dl className="divide-y divide-line border-y border-line">
            {activities.map(({ title, body }) => (
              <div key={title} className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr] sm:gap-8">
                <dt className="font-semibold text-ink">{title}</dt>
                <dd className="leading-7 text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-28" aria-labelledby="events-title">
        <SectionHeading id="events-title" title="Upcoming events" link={{ to: "/events", label: "All events" }} />
        <EventList limit={3} />
      </section>

      <section className="bg-acmw text-white" aria-labelledby="acmw-title">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:grid-cols-[1.2fr_1fr] lg:items-end">
          <div>
            <p className="text-sm text-white/70">ACM-W Student Chapter, IIT Mandi</p>
            <h2 id="acmw-title" className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
              Supporting women in computing at IIT Mandi
            </h2>
          </div>
          <div>
            <p className="leading-7 text-white/80">
              Our ACM-W chapter runs mentoring, workshops and talks by women in
              research and industry, as part of ACM-W and the ACM-W India network.
            </p>
            <Link
              to="/acm-w"
              className="mt-6 inline-flex rounded-md bg-white px-5 py-3 text-sm font-semibold text-acmw transition-colors hover:bg-white/85"
            >
              About ACM-W IIT Mandi
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="projects-title">
        <SectionHeading
          id="projects-title"
          title="What we're building"
          intro="Open-source projects from the chapter's GitHub organization, updated as we ship."
          link={{ to: "/projects", label: "All projects" }}
        />
        <RepositoryCards limit={4} />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28" aria-labelledby="acm-title">
        <SectionHeading
          id="acm-title"
          title="Part of ACM"
          intro="As an ACM student chapter, we connect IIT Mandi to a global computing community, through ACM and ACM India."
          link={{ to: "/about", label: "About the chapter" }}
        />
        <dl className="grid gap-x-12 border-t border-line md:grid-cols-3">
          {acmFacts.map(([title, body]) => (
            <div key={title} className="border-b border-line py-7 md:border-b-0">
              <dt className="font-display text-2xl font-medium text-ink">{title}</dt>
              <dd className="mt-2 leading-7 text-muted">{body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="topics" className="bg-mist" aria-labelledby="topics-title">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28">
          <SectionHeading
            id="topics-title"
            title="Learn with ACM"
            intro="Research, courses and references available through ACM."
            link={{ to: "/resources", label: "View all resources" }}
          />
          <ResourceCards limit={4} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-24">
        <div className="flex flex-col gap-8 border-l-4 border-acm pl-6 sm:flex-row sm:items-center sm:justify-between sm:pl-10">
          <div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Want to get involved?
            </h2>
            <p className="mt-3 max-w-xl leading-7 text-muted">
              Come to an event, become an ACM member, or join the core team.
            </p>
          </div>
          <Link
            to="/join"
            className="shrink-0 self-start rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-acm sm:self-auto"
          >
            Join the chapter
          </Link>
        </div>
      </section>
    </>
  );
};

export default TopicCards;
