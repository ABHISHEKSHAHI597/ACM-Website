import { NavLink } from "react-router-dom";
import { acmLinks, acmw, chapter, institute } from "../data/chapter";

const footerGroups = [
  {
    title: "Chapter",
    links: [
      ["About", "/about"],
      ["ACM-W", "/acm-w"],
      ["Team", "/team"],
      ["Contact", "/contact"],
    ],
  },
  {
    title: "Take part",
    links: [
      ["Events", "/events"],
      ["Join the chapter", "/join"],
      ["Resources", "/resources"],
      ["Code of conduct", "/code-of-conduct"],
    ],
  },
  {
    title: "ACM network",
    links: acmLinks.map(({ label, href }) => [label, href]),
  },
];

const socialIcons = [
  {
    key: "instagram",
    name: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" className="size-5">
        <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    key: "linkedin",
    name: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="size-5">
        <path d="M5.2 8.4H2.1V21h3.1V8.4ZM3.7 3A1.8 1.8 0 1 0 3.7 6.6 1.8 1.8 0 0 0 3.7 3ZM21.9 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.2 1.2-3.8 2v-1.8h-3.1V21h3.1v-6.2c0-1.6.3-3.2 2.3-3.2 2 0 2 1.9 2 3.3V21h3.1l.1-7.2Z" />
      </svg>
    ),
  },
  {
    key: "github",
    name: "GitHub",
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" className="size-5">
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.7.3-1.1.6-1.4-2.2-.3-4.5-1.1-4.5-4.8 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.7-2.3 4.5-4.5 4.8.4.3.7 1 .7 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    ),
  },
];

const socialRow = (org) =>
  socialIcons
    .filter(({ key }) => org.socials[key])
    .map((icon) => ({ ...icon, href: org.socials[icon.key], name: `${org.shortName} on ${icon.name}` }));

const FooterLink = ({ label, to }) =>
  to.startsWith("http") ? (
    <a href={to} target="_blank" rel="noreferrer" className="text-sm text-white/60 transition-colors hover:text-white">
      {label}
    </a>
  ) : (
    <NavLink to={to} className="text-sm text-white/60 transition-colors hover:text-white">
      {label}
    </NavLink>
  );

const Footer = () => {
  const socialLinks = [...socialRow(chapter), ...socialRow(acmw)];

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <p className="font-display text-2xl font-medium">{chapter.name}</p>
            <p className="mt-1 text-white/70">with {acmw.name}</p>
            <p className="mt-4 max-w-xs leading-7 text-white/60">
              <a href={institute.url} target="_blank" rel="noreferrer" className="hover:text-white">
                {institute.name}
              </a>
              <br />
              {institute.address}
            </p>
            {socialLinks.length > 0 && (
            <ul className="mt-6 flex gap-2">
              {socialLinks.map(({ name, href, icon }) => (
                <li key={href}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="flex size-10 items-center justify-center rounded-md border border-white/15 text-white/80 transition-colors hover:border-white/50 hover:text-white"
                  >
                    {icon}
                  </a>
                </li>
              ))}
            </ul>
            )}
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {footerGroups.map(({ title, links }) => (
              <div key={title}>
                <h2 className="text-sm font-semibold text-white">{title}</h2>
                <ul className="mt-4 space-y-3">
                  {links.map(([label, to]) => (
                    <li key={to}>
                      <FooterLink label={label} to={to} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/50 sm:flex-row sm:justify-between">
          <span>© 2026 ACM IIT Mandi</span>
          <span>Student chapters of the Association for Computing Machinery and ACM-W</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
