import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

const pageContent = {
  "/about": {
    section: "About",
    title: "The ACM student chapter of IIT Mandi",
    intro:
      "We are IIT Mandi's student chapter of the Association for Computing Machinery, a community for every student on the Kamand campus who wants to learn computing deeply and build with it.",
    sections: [
      {
        title: "Our chapter",
        body: "The chapter runs talks, workshops, coding contests and hackathons, and supports students working on projects and research. Membership is open to students of every branch and year.",
      },
      {
        title: "About ACM",
        body: "Founded in 1947, the Association for Computing Machinery is the world's largest educational and scientific computing society. It publishes leading journals and conference proceedings, runs Special Interest Groups such as SIGGRAPH, SIGCHI and SIGPLAN, and presents the A.M. Turing Award, often called the highest honour in computing.",
      },
      {
        title: "ACM India",
        body: "ACM India is ACM's regional council for India. It connects chapters across the country through events, awards and programmes for students and professionals.",
      },
      {
        title: "IIT Mandi",
        body: "Established in 2009, IIT Mandi is set in the Kamand valley of Himachal Pradesh. The chapter brings together the institute's growing computing community across disciplines.",
      },
    ],
    links: [
      { label: "Visit acm.org", href: "https://www.acm.org/about-acm" },
      { label: "Visit ACM India", href: "https://india.acm.org/" },
    ],
  },
  "/acm-w": {
    section: "ACM-W",
    title: "ACM-W at IIT Mandi",
    intro:
      "Our ACM-W student chapter supports, celebrates and advocates for women in computing at IIT Mandi, and works to make the field more inclusive for everyone.",
    sections: [
      {
        title: "What ACM-W is",
        body: "ACM-W is ACM's Council on Women in Computing. Through student chapters worldwide, it offers scholarships, mentoring, celebrations of women in computing, and a network of peers and role models.",
      },
      {
        title: "ACM-W India",
        body: "ACM-W India connects ACM-W chapters across the country and runs programmes such as the Grad Cohort for women pursuing research in computing.",
      },
      {
        title: "What we do on campus",
        body: "Mentoring circles, technical workshops, talks by women in research and industry, and support for applying to scholarships, internships and conferences.",
      },
      {
        title: "Who can join",
        body: "Everyone. ACM-W events are open to all students who share the goal of a more inclusive computing community.",
      },
    ],
    links: [
      { label: "Visit ACM-W", href: "https://women.acm.org/" },
      { label: "Visit ACM-W India", href: "https://acmwindia.acm.org/" },
    ],
  },
  "/join": {
    section: "Join",
    title: "Join the chapter",
    intro:
      "Anyone at IIT Mandi can take part in chapter events. Becoming an ACM member adds access to ACM's resources for learning and research.",
    sections: [
      {
        title: "Come to an event",
        body: "Every talk, workshop and contest is open to all students. Check the events page and just show up.",
      },
      {
        title: "Become an ACM student member",
        body: "ACM student membership includes the ACM Learning Center and options for the ACM Digital Library, along with discounts on conferences and publications.",
      },
      {
        title: "Join the core team",
        body: "We recruit volunteers for technical, design, events and outreach roles each year. Watch our announcements or write to the team.",
      },
      {
        title: "Propose a session",
        body: "Have something you'd like to teach or a speaker to suggest? Contact the team and we'll help you run it.",
      },
    ],
    links: [
      { label: "Become an ACM member", href: "https://www.acm.org/membership/membership-options" },
    ],
    internal: [
      { label: "See events", to: "/events" },
      { label: "Contact us", to: "/contact" },
    ],
  },
  "/code-of-conduct": {
    section: "Code of conduct",
    title: "Building a respectful computing community",
    intro:
      "Our events follow ACM's Code of Ethics and Professional Conduct and ACM's policy against harassment.",
    sections: [
      {
        title: "Core principles",
        body: "Contribute to society, avoid harm, be honest and trustworthy, respect privacy, and treat people fairly.",
      },
      {
        title: "At our events",
        body: "Every ACM IIT Mandi and ACM-W IIT Mandi event should be welcoming and safe. If something goes wrong, tell any member of the team and we will act on it.",
      },
    ],
    links: [
      { label: "Read the ACM Code of Ethics", href: "https://www.acm.org/code-of-ethics" },
      { label: "Read ACM's anti-harassment policy", href: "https://www.acm.org/about-acm/policy-against-harassment" },
    ],
  },
};

const buttonPrimary =
  "inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-acm";
const buttonSecondary =
  "inline-flex rounded-md border border-line px-5 py-3 text-sm font-semibold text-ink transition-colors hover:border-ink";

const InfoPage = ({ path }) => {
  const content = pageContent[path];

  if (!content) {
    return null;
  }

  return (
    <main>
      <PageHeader section={content.section} title={content.title} intro={content.intro} />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid gap-x-16 gap-y-12 md:grid-cols-2">
          {content.sections.map(({ title, body }) => (
            <section key={title} className="border-t border-line pt-8">
              <h2 className="font-display text-2xl font-medium text-ink">{title}</h2>
              <p className="mt-4 max-w-xl leading-7 text-muted">{body}</p>
            </section>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap gap-3">
          {content.internal?.map(({ label, to }, i) => (
            <Link key={to} to={to} className={i === 0 ? buttonPrimary : buttonSecondary}>
              {label}
            </Link>
          ))}
          {content.links.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className={!content.internal && i === 0 ? buttonPrimary : buttonSecondary}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

// The route table is shared with App so every information page has one source of truth.
// eslint-disable-next-line react-refresh/only-export-components
export { pageContent };
export default InfoPage;
