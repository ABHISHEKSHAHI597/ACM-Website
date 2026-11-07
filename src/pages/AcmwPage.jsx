import { Link } from "react-router-dom";
import { CtaBand, Section, SectionTitle, TextLink } from "../components/PageBlocks";
import { acmw } from "../data/chapter";

// Sources: women.acm.org (mission, chapters, scholarships), acmwindia.acm.org/about,
// the chapter's LinkedIn page, and the chapter's earlier website (past events).

const stats = [
  [String(acmw.founded), "Our chapter at IIT Mandi was founded"],
  ["200+", "ACM-W chapters worldwide"],
  ["~50,000", "members in the global ACM-W community"],
];

const pillars = [
  {
    title: "Celebrate",
    body: "Recognise the achievements of women in computing, on campus and beyond, through events, award nominations and national celebrations such as AICWiC.",
  },
  {
    title: "Inform",
    body: "Share opportunities that matter: scholarships, research programmes, internships and fellowships, and how to apply for them.",
  },
  {
    title: "Support",
    body: "Build a network of peers and mentors so that every woman in computing at IIT Mandi has people to learn from and lean on.",
  },
];

const programmes = [
  {
    title: "Clash of Codes",
    kind: "Contest",
    audience: "First-year women",
    body: "A beginner-friendly competitive programming contest that builds confidence through approachable problems in a supportive setting.",
  },
  {
    title: "Puzzle Pit",
    kind: "Contest",
    audience: "First-year women",
    body: "A Python-based puzzle contest for learning programming concepts and applying them in a fun, interactive format.",
  },
  {
    title: "Code Quest",
    kind: "Contest",
    audience: "Second-year women",
    body: "A timed competitive programming challenge, ranked on correctness and efficiency, with awards for top performers.",
  },
  {
    title: "Internship Guidance",
    kind: "Session",
    audience: "Open to all",
    body: "An interactive session on internship applications, building a strong profile and preparing for interviews and selection.",
  },
];

const opportunities = [
  {
    title: "ACM-W Scholarships",
    from: "ACM-W",
    body: "Support for undergraduate and graduate students in computing to attend research conferences anywhere in the world. No paper is required, and awards go up to US$600 for travel within a continent and US$1,200 for intercontinental travel.",
    href: "https://women.acm.org/scholarships/",
  },
  {
    title: "ACM-W India Grad Cohort",
    from: "ACM-W India",
    body: "A workshop that mentors women pursuing, or considering, graduate research in computing, with talks and guidance from senior researchers and industry leaders.",
    href: "https://acmwindia.acm.org/",
  },
  {
    title: "Lady Ada Programming Contest",
    from: "ACM-W India",
    body: "A national-level coding competition that celebrates the technical and problem-solving skills of women students.",
    href: "https://acmwindia.acm.org/about/",
  },
  {
    title: "NariYukti Hackathon",
    from: "ACM-W India",
    body: "A hackathon that challenges women to build technology-driven solutions to real-world societal problems.",
    href: "https://acmwindia.acm.org/about/",
  },
  {
    title: "AICWiC",
    from: "ACM-W India",
    body: "The All India Celebration of Women in Computing: a national gathering for networking, knowledge sharing and the advancement of women in technology.",
    href: "https://acmwindia.acm.org/about/",
  },
];

const AcmwPage = () => (
  <main>
    <header className="relative isolate overflow-hidden bg-acmw text-white">
      <div
        aria-hidden="true"
        className="absolute inset-y-0 right-0 -z-10 hidden w-1/2 opacity-15 lg:block"
        style={{
          backgroundImage: "radial-gradient(circle at center, white 1px, transparent 1.5px)",
          backgroundSize: "22px 22px",
          maskImage: "linear-gradient(to left, black, transparent)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-sm text-white/75">ACM-W</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight sm:text-6xl">
          Women in computing at IIT Mandi
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          The ACM-W Student Chapter of IIT Mandi is a community that learns and excels together.
          We celebrate, inform and support women in computing, and work to make the field more
          inclusive for everyone.
        </p>
        <dl className="mt-12 grid max-w-3xl gap-8 border-t border-white/20 pt-8 sm:grid-cols-3">
          {stats.map(([value, label]) => (
            <div key={label}>
              <dt className="sr-only">{label}</dt>
              <dd>
                <span className="block font-display text-4xl font-medium">{value}</span>
                <span className="mt-1 block text-sm leading-6 text-white/70">{label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </header>

    <Section id="about-acmw-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionTitle id="about-acmw-title" tone="acmw" eyebrow="About ACM-W" title="Part of ACM's Council on Women in Computing" />
        <div className="space-y-6 text-lg leading-8 text-muted lg:pt-9">
          <p>
            ACM-W advocates internationally for the full engagement of women in all aspects of
            computing. Its student chapters give students the community and resources to advocate
            for women in computing at their own institutions.
          </p>
          <p>
            In India, ACM-W India, a standing committee of ACM India, carries this mission forward
            through programmes for students and researchers across the country. Our chapter is part
            of that network.
          </p>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map(({ title, body }) => (
          <article key={title} className="rounded-lg border-t-4 border-acmw bg-mist p-6 sm:p-8">
            <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
            <p className="mt-3 leading-7 text-muted">{body}</p>
          </article>
        ))}
      </div>
    </Section>

    <div className="border-t border-line">
      <Section id="programmes-title">
        <SectionTitle
          id="programmes-title"
          tone="acmw"
          eyebrow="On campus"
          title="What we run at IIT Mandi"
          intro="Contests and sessions designed to give students, especially first- and second-year women, a confident start in computing."
        />
        <ul className="mt-12 divide-y divide-line border-y border-line">
          {programmes.map(({ title, kind, audience, body }) => (
            <li key={title} className="grid gap-3 py-7 md:grid-cols-[16rem_1fr_10rem] md:gap-8">
              <div>
                <h3 className="font-semibold text-ink">{title}</h3>
                <p className="mt-1 text-sm text-acmw">{kind}</p>
              </div>
              <p className="leading-7 text-muted">{body}</p>
              <p className="text-sm text-muted md:text-right">{audience}</p>
            </li>
          ))}
        </ul>
      </Section>
    </div>

    <div className="bg-mist">
      <Section id="opportunities-title">
        <SectionTitle
          id="opportunities-title"
          tone="acmw"
          eyebrow="Opportunities"
          title="Programmes from ACM-W and ACM-W India"
          intro="As chapter members, students can take part in programmes run by the wider ACM-W community. We help with applications."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {opportunities.map(({ title, from, body, href }) => (
            <article key={title} className="flex flex-col rounded-lg border border-line bg-white p-6 sm:p-8">
              <p className="text-sm text-acmw">{from}</p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ink">{title}</h3>
              <p className="mt-3 flex-1 leading-7 text-muted">{body}</p>
              <div className="mt-6">
                <TextLink href={href} tone="acmw">
                  Learn more
                </TextLink>
              </div>
            </article>
          ))}
          <article className="flex flex-col justify-between rounded-lg bg-acmw p-6 text-white sm:p-8">
            <div>
              <h3 className="font-display text-2xl font-medium">Need help applying?</h3>
              <p className="mt-3 leading-7 text-white/80">
                Our team can help with applications, recommendations and finding the right programme for you.
              </p>
            </div>
            <Link
              to="/contact?topic=acmw"
              className="mt-6 inline-flex w-fit items-center gap-1.5 rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-acmw hover:bg-white/85"
            >
              Write to ACM-W
            </Link>
          </article>
        </div>
      </Section>
    </div>

    <Section id="join-acmw-title">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <SectionTitle id="join-acmw-title" tone="acmw" eyebrow="Get involved" title="Everyone is welcome" />
        <div className="lg:pt-9">
          <p className="text-lg leading-8 text-muted">
            ACM-W events are open to all students who share the goal of a more inclusive computing
            community. Some contests are reserved for women students to give them a dedicated
            space to start competing; everything else is open to everyone.
          </p>
          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {acmw.socials.linkedin && (
              <TextLink href={acmw.socials.linkedin} tone="acmw">
                ACM-W IIT Mandi on LinkedIn
              </TextLink>
            )}
            <TextLink href="https://women.acm.org/" tone="acmw">
              women.acm.org
            </TextLink>
            <TextLink href="https://acmwindia.acm.org/" tone="acmw">
              ACM-W India
            </TextLink>
          </div>
        </div>
      </div>
    </Section>

    <CtaBand
      tone="acmw"
      title="Have an idea or a question?"
      body="Want to mentor, speak, propose a session or get help with an application? Write to the team."
      primary={{ label: "Contact us", to: "/contact?topic=acmw" }}
      secondary={{ label: "See events", to: "/events" }}
    />
  </main>
);

export default AcmwPage;
