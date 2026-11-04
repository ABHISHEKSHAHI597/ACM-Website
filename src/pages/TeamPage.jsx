import PageHeader from "../components/PageHeader";
import { teamGroups } from "../data/team";

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="size-4 shrink-0">
    <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7 1 .7 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
  </svg>
);

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
              {members.map(({ name, role, github, image }) => (
                <article key={name}>
                  <div className="aspect-4/5 overflow-hidden rounded-md bg-mist">
                    {image && <img src={image} alt={name} loading="lazy" className="size-full object-cover" />}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-ink">{name}</h3>
                  <p className="mt-1 text-sm text-muted">{role}</p>
                  {github && (
                    <a
                      href={`https://github.com/${github}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${name} on GitHub`}
                      className="mt-2 inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-acm"
                    >
                      <GitHubIcon />
                      <span>@{github}</span>
                    </a>
                  )}
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
