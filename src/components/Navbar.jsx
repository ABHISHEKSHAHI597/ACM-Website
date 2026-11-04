import { useState } from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { label: "About", to: "/about" },
  { label: "ACM-W", to: "/acm-w" },
  { label: "Events", to: "/events" },
  { label: "Projects", to: "/projects" },
  { label: "Resources", to: "/resources" },
  { label: "Team", to: "/team" },
  { label: "Join", to: "/join" },
];

const linkClass = ({ isActive }) =>
  `text-[15px] transition-colors hover:text-acm ${
    isActive ? "text-acm font-medium" : "text-text"
  }`;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-white">
      <nav
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6"
        aria-label="Main navigation"
      >
        <NavLink to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="ACM IIT Mandi home">
          <img src="/acm_logo.svg" alt="" className="h-9 w-auto shrink-0 sm:h-14" />
          <span className="block border-l border-line pl-2 leading-tight whitespace-nowrap max-[359px]:hidden sm:pl-3">
            <span className="block text-[13px] font-semibold text-ink sm:text-sm">IIT Mandi</span>
            <span className="block text-[11px] text-muted sm:text-xs">Student Chapter</span>
          </span>
        </NavLink>

        <ul className="hidden items-center gap-6 lg:flex">
          {navItems.map(({ label, to }) => (
            <li key={to}>
              <NavLink to={to} className={linkClass}>
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <NavLink
            to="/contact"
            className="hidden rounded-md bg-ink px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-acm sm:inline-block"
          >
            Contact us
          </NavLink>
          <button
            type="button"
            className="flex size-10 shrink-0 items-center justify-center rounded-md text-ink hover:bg-mist lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-white lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {[...navItems, { label: "Contact us", to: "/contact" }].map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={(state) => `block py-3 ${linkClass(state)}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
