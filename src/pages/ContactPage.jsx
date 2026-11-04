import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { ExternalIcon, Section } from "../components/PageBlocks";
import { acmw, chapter, institute } from "../data/chapter";

const topics = [
  { id: "general", label: "General question" },
  { id: "events", label: "Events and sessions" },
  { id: "collab", label: "Collaboration or sponsorship" },
  { id: "speak", label: "Speaking or running a session" },
  { id: "acmw", label: "ACM-W" },
  { id: "membership", label: "Membership and joining the team" },
];

const reasons = [
  ["Events", "Questions about an upcoming session, contest or registration."],
  ["Collaborations", "Industry partners, sponsors and other student bodies who want to work with us."],
  ["Speakers", "Researchers, engineers and alumni who would like to give a talk or run a workshop."],
  ["ACM-W", "Mentoring, scholarships and programmes for women in computing."],
];

const Icon = ({ path }) => (
  <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-mist text-acm">
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="size-5">
      <path d={path} stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

const icons = {
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  pin: "M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Zm0-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
};

const socialLinks = [
  { label: "Instagram", handle: "@acm_iitmandi", href: chapter.socials.instagram },
  { label: "LinkedIn", handle: chapter.shortName, href: chapter.socials.linkedin },
  { label: "LinkedIn", handle: acmw.shortName, href: acmw.socials.linkedin },
  { label: "Instagram", handle: acmw.shortName, href: acmw.socials.instagram },
  { label: "GitHub", handle: chapter.shortName, href: chapter.socials.github },
].filter(({ href }) => href);

const fieldClass =
  "mt-2 block w-full rounded-md border border-line bg-white px-3.5 py-2.5 text-ink placeholder:text-muted/70 transition-colors focus:border-acm focus:outline-none focus:ring-2 focus:ring-acm/20";

const ContactForm = () => {
  const [params] = useSearchParams();
  const initialTopic = topics.some(({ id }) => id === params.get("topic")) ? params.get("topic") : "general";
  const [form, setForm] = useState({ name: "", topic: initialTopic, message: "" });
  const [opened, setOpened] = useState(false);

  const update = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    const topic = topics.find(({ id }) => id === form.topic)?.label ?? "General question";
    const subject = `[${topic}] Message from ${form.name.trim()}`;
    const body = `${form.message.trim()}\n\n${form.name.trim()}`;
    window.location.href = `mailto:${chapter.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-line p-6 sm:p-8">
      <h2 id="form-title" className="font-display text-2xl font-medium text-ink">
        Send us a message
      </h2>
      <p className="mt-2 leading-7 text-muted">
        This opens your email app with the message ready to send to the chapter.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <label className="block text-sm font-medium text-ink">
          Your name
          <input required type="text" autoComplete="name" value={form.name} onChange={update("name")} className={fieldClass} />
        </label>
        <label className="block text-sm font-medium text-ink">
          Topic
          <select value={form.topic} onChange={update("topic")} className={fieldClass}>
            {topics.map(({ id, label }) => (
              <option key={id} value={id}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label className="block text-sm font-medium text-ink sm:col-span-2">
          Message
          <textarea
            required
            rows={6}
            value={form.message}
            onChange={update("message")}
            placeholder="Tell us what you have in mind."
            className={`${fieldClass} resize-y`}
          />
        </label>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="inline-flex rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-acm"
        >
          Write email
        </button>
        <p className="text-sm text-muted" aria-live="polite">
          {opened ? (
            <>
              Didn&apos;t open? Email us at{" "}
              <a href={`mailto:${chapter.email}`} className="text-acm hover:underline">
                {chapter.email}
              </a>
            </>
          ) : (
            "We usually reply by email."
          )}
        </p>
      </div>
    </form>
  );
};

const ContactPage = () => (
  <main>
    <PageHeader
      section="Contact"
      title="Get in touch"
      intro="Questions about events, membership, collaborations or speaking at the chapter? We'd be glad to hear from you."
    />

    <Section id="form-title">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
        <ContactForm />

        <aside className="space-y-10" aria-label="Contact details">
          <div className="flex gap-4">
            <Icon path={icons.mail} />
            <div className="min-w-0">
              <h2 className="font-semibold text-ink">Email</h2>
              <a href={`mailto:${chapter.email}`} className="mt-1 block break-all text-acm hover:underline">
                {chapter.email}
              </a>
              <p className="mt-1 text-sm leading-6 text-muted">For the ACM and ACM-W chapters.</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Icon path={icons.link} />
            <div className="min-w-0 flex-1">
              <h2 className="font-semibold text-ink">Follow us</h2>
              <ul className="mt-2 divide-y divide-line">
                {socialLinks.map(({ label, handle, href }) => (
                  <li key={href}>
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-between gap-3 py-2.5 text-sm"
                    >
                      <span>
                        <span className="font-medium text-ink group-hover:text-acm">{label}</span>
                        <span className="text-muted"> · {handle}</span>
                      </span>
                      <ExternalIcon className="size-3.5 text-muted group-hover:text-acm" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <Icon path={icons.pin} />
            <div>
              <h2 className="font-semibold text-ink">Find us</h2>
              <p className="mt-1 leading-7 text-muted">
                {institute.name}
                <br />
                {institute.address}
              </p>
              <a
                href={institute.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-acm hover:underline"
              >
                Open in Google Maps
                <ExternalIcon />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </Section>

    <div className="bg-mist">
      <Section id="reasons-title">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 id="reasons-title" className="font-display text-3xl font-medium tracking-tight text-ink sm:text-4xl">
              Who should write to us
            </h2>
            <p className="mt-4 max-w-sm leading-7 text-muted">
              Looking for a specific person? The office bearers are on the{" "}
              <Link to="/team" className="text-acm hover:underline">
                team page
              </Link>
              .
            </p>
          </div>
          <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {reasons.map(([title, body]) => (
              <div key={title} className="border-t border-line pt-5">
                <dt className="font-semibold text-ink">{title}</dt>
                <dd className="mt-2 leading-7 text-muted">{body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>
    </div>
  </main>
);

export default ContactPage;
