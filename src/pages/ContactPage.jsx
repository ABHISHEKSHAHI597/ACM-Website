import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { acmw, chapter, institute } from "../data/chapter";

const socialLabels = { instagram: "Instagram", linkedin: "LinkedIn", github: "GitHub" };

const ContactCard = ({ org }) => {
  const socials = Object.entries(org.socials).filter(([, url]) => url);

  return (
    <section className="border-t border-line pt-8">
      <h2 className="font-display text-2xl font-medium text-ink">{org.name}</h2>
      <ul className="mt-4 space-y-2 leading-7">
        {org.email && (
          <li>
            <a href={`mailto:${org.email}`} className="text-acm hover:underline">
              {org.email}
            </a>
          </li>
        )}
        {socials.map(([key, url]) => (
          <li key={key}>
            <a href={url} target="_blank" rel="noreferrer" className="text-acm hover:underline">
              {socialLabels[key]}
            </a>
          </li>
        ))}
        {!org.email && socials.length === 0 && (
          <li className="text-muted">
            Reach the office bearers listed on the <Link to="/team" className="text-acm hover:underline">team page</Link>.
          </li>
        )}
      </ul>
    </section>
  );
};

const ContactPage = () => (
  <main>
    <PageHeader
      section="Contact"
      title="Get in touch"
      intro="Questions about events, membership, sponsorship or speaking at the chapter? Write to us."
    />
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="grid gap-x-16 gap-y-12 md:grid-cols-3">
        <ContactCard org={chapter} />
        <ContactCard org={acmw} />
        <section className="border-t border-line pt-8">
          <h2 className="font-display text-2xl font-medium text-ink">Find us</h2>
          <p className="mt-4 leading-7 text-muted">
            {institute.name}
            <br />
            {institute.address}
          </p>
          <a href={institute.url} target="_blank" rel="noreferrer" className="mt-3 inline-block text-acm hover:underline">
            iitmandi.ac.in
          </a>
        </section>
      </div>
    </div>
  </main>
);

export default ContactPage;
