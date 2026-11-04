import PageHeader from "../components/PageHeader";
import { teamGroups } from "../data/team";

const TeamPage = () => (
  <main>
    <PageHeader
      section="Team"
      title="The people who run the chapter"
      intro="Students of IIT Mandi who plan our events, maintain our projects and keep the ACM and ACM-W community welcoming."
    />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      {teamGroups.map(({ title, members }) => (
        <section key={title} className="mb-16 last:mb-0" aria-label={title}>
          <h2 className="border-b border-line pb-4 font-display text-3xl font-medium text-ink">{title}</h2>
          {members.length === 0 ? (
            <p className="mt-6 text-muted">To be announced.</p>
          ) : (
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
              {members.map(({ name, role, image }) => (
                <article key={name}>
                  <div className="aspect-4/5 overflow-hidden rounded-md bg-mist">
                    {image && <img src={image} alt={name} loading="lazy" className="size-full object-cover" />}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{name}</h3>
                  <p className="mt-1 text-sm text-muted">{role}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      ))}
    </div>
  </main>
);

export default TeamPage;
