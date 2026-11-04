import PageHeader from "../components/PageHeader";
import RepositoryCards from "../components/RepositoryCards";
import { chapter } from "../data/chapter";

const ProjectsPage = () => (
  <main>
    <PageHeader
      section="Projects"
      title="Open source at ACM IIT Mandi"
      intro="Public repositories built and maintained by the chapter and its members, pulled live from our GitHub organization: contests, tools, study projects and experiments."
    />

    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h2 className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            What we&apos;re building
          </h2>
          <p className="mt-3 text-muted">
            Live from{" "}
            <a
              href={chapter.socials.github}
              target="_blank"
              rel="noreferrer"
              className="text-acm hover:underline"
            >
              github.com/{chapter.githubOrg}
            </a>
          </p>
        </div>
        <a
          href={chapter.socials.github}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink"
        >
          View the organization on GitHub
          <svg viewBox="0 0 24 24" className="size-3.5" fill="none" aria-hidden="true">
            <path
              d="M9 6h9v9M18 6 6 18"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

      <RepositoryCards />

      <section className="mt-20 border-t border-line pt-10" aria-labelledby="contribute-title">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 id="contribute-title" className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
            Contribute to a project
          </h2>
          <div className="space-y-4 leading-7 text-muted">
            <p>
              Most repositories are open to contributions from IIT Mandi students. Pick a project that
              interests you, read its README, and look for issues labelled good first issue or help wanted.
            </p>
            <p>
              New to open source? Come to a Git and GitHub session or ask the team to point you at a
              suitable first issue.
            </p>
          </div>
        </div>
      </section>
    </div>
  </main>
);

export default ProjectsPage;
