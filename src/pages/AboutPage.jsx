import PageHeader from "../components/PageHeader";
import { CtaBand, Section, SectionTitle, TextLink } from "../components/PageBlocks";
import { annualEvents } from "../data/events";
import { chapter } from "../data/chapter";

// Sources: the chapter's LinkedIn page and posts (2026), and its earlier website.

const values = [
  ["Discover", "Explore new ideas, technologies and perspectives in computing."],
  ["Connect", "Build lasting relationships with peers, mentors and researchers."],
  ["Create", "Turn curiosity into something real: code, projects and research."],
  ["Grow", "Learn, take on harder problems and keep improving."],
];

const focusAreas = [
  {
    title: "Talks and workshops",
    body: "Sessions on algorithms, systems, AI/ML and software development, led by students, faculty and invited speakers.",
  },
  {
    title: "Contests and hackathons",
    body: "Competitive programming rounds, ICPC preparation and build challenges that reward depth and creativity.",
  },
  {
    title: "Open source and developer tools",
    body: "Hands-on introductions to the command line, Git and GitHub, and first steps into open source programmes such as Hacktoberfest and Google Summer of Code.",
  },
  {
    title: "Study groups and mentorship",
    body: "Peer-led groups and guidance from senior students on competitive programming, internships and research.",
  },
  {
    title: "Collaborations",
    body: "Work with industry, researchers and other student bodies at IIT Mandi to bring more opportunities to campus.",
  },
];

const network = [
  {
    name: "ACM",
    lead: "The Association for Computing Machinery",
    body: "Founded in 1947, ACM is the world's largest computing society, with more than 100,000 members, 38 Special Interest Groups and over 860 chapters worldwide. Its Digital Library holds more than 600,000 full-text articles, and it presents the A.M. Turing Award.",
    href: "https://www.acm.org/about-acm",
    link: "acm.org",
  },
  {
    name: "ACM India",
    lead: "The ACM India Council",
    body: "Created by ACM to increase the level and visibility of its activities across India, ACM India runs research awards, summer and winter schools, the Eminent Speaker Program for chapters, and ACM-W India for women in computing.",
    href: "https://india.acm.org/",
    link: "india.acm.org",
  },
  {
    name: "IIT Mandi",
    lead: "Our home institute",
    body: "Established in 2009, IIT Mandi sits in the Kamand valley of Himachal Pradesh. The chapter serves students from every school and programme on campus.",
    href: "https://www.iitmandi.ac.in/",
    link: "iitmandi.ac.in",
  },
];

const AboutPage = () => (
  <main>
    <PageHeader
      section="About"
      title="The ACM Student Chapter of IIT Mandi"
      intro={`${chapter.tagline} We are a student-run community for everyone on campus who wants to learn computing deeply and build with it.`}
    />

    <Section id="mission-title">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
        <div>
          <SectionTitle id="mission-title" eyebrow="Our mission" title="A strong computing community on campus" />
          <p className="mt-6 text-sm font-medium tracking-wide text-acm">Building · Learning · Innovating</p>
        </div>
        <div className="space-y-6 text-lg leading-8 text-muted lg:pt-9">
          <p>
            The ACM Student Chapter at IIT Mandi brings together students who are curious about
            computing, whether that means competitive programming, systems, AI, research or building
            software that people use.
          </p>
          <p>
            We create spaces to learn from one another and from the wider ACM community, so that
            every student, in any branch or year, has a way in.
          </p>
        </div>
      </div>

      <dl className="mt-16 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {values.map(([title, body], i) => (
          <div key={title} className="bg-white p-6 sm:p-8">
            <dt>
              <span className="block font-mono text-xs text-acm">0{i + 1}</span>
              <span className="mt-3 block font-display text-2xl font-medium text-ink">{title}</span>
            </dt>
            <dd className="mt-3 leading-7 text-muted">{body}</dd>
          </div>
        ))}
      </dl>
    </Section>

    <div className="bg-mist">
      <Section id="focus-title">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
          <SectionTitle
            id="focus-title"
            eyebrow="What we do"
            title="How the chapter works"
            intro="Every event is open to all students at IIT Mandi."
          />
          <dl className="divide-y divide-line border-y border-line">
            {focusAreas.map(({ title, body }) => (
              <div key={title} className="grid gap-2 py-7 sm:grid-cols-[15rem_1fr] sm:gap-8">
                <dt className="font-semibold text-ink">{title}</dt>
                <dd className="leading-7 text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>

    <Section id="highlights-title">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionTitle
          id="highlights-title"
          eyebrow="Every year"
          title="What we have been up to"
          intro="The workshops, sessions and contests the chapter runs every year."
        />
        {chapter.socials.linkedin && <TextLink href={chapter.socials.linkedin}>Follow updates on LinkedIn</TextLink>}
      </div>
      <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {annualEvents.map(({ subtitle, title, kind, summary }) => (
          <li key={title} className="flex flex-col rounded-lg border border-line p-6 transition-colors hover:border-acm/40">
            <div className="flex items-center justify-between gap-3 text-sm">
              <span className="font-medium text-ink">{subtitle}</span>
              <span className="rounded-full bg-mist px-2.5 py-0.5 text-xs text-muted">{kind}</span>
            </div>
            <h3 className="mt-5 font-display text-xl font-medium leading-snug text-ink">{title}</h3>
            <p className="mt-3 leading-7 text-muted">{summary}</p>
          </li>
        ))}
      </ol>
    </Section>

    <div className="border-t border-line">
      <Section id="network-title">
        <SectionTitle
          id="network-title"
          eyebrow="Our network"
          title="Part of something larger"
          intro="As an ACM student chapter, we connect IIT Mandi to a global community of computing students, researchers and professionals."
        />
        <div className="mt-12 grid gap-x-12 gap-y-10 border-t border-line pt-10 md:grid-cols-3">
          {network.map(({ name, lead, body, href, link }) => (
            <article key={name}>
              <h3 className="font-display text-2xl font-medium text-ink">{name}</h3>
              <p className="mt-1 text-sm text-acm">{lead}</p>
              <p className="mt-4 leading-7 text-muted">{body}</p>
              <div className="mt-4">
                <TextLink href={href}>{link}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </div>

    <CtaBand
      title="Be part of the chapter"
      body="Come to an event, join the team or propose a session. We would love to hear from you."
      primary={{ label: "Join the chapter", to: "/join" }}
      secondary={{ label: "Contact us", to: "/contact" }}
    />
  </main>
);

export default AboutPage;
