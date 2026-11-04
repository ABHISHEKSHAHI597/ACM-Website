// Single source of truth for chapter details shown across the site.
// Anything left as null is hidden on the site until you fill it in.

export const chapter = {
  name: "ACM Student Chapter, IIT Mandi",
  shortName: "ACM IIT Mandi",
  email: null, // e.g. "acm@iitmandi.ac.in"
  socials: {
    instagram: null, // full profile URL
    linkedin: null,
    github: null,
  },
};

export const acmw = {
  name: "ACM-W Student Chapter, IIT Mandi",
  shortName: "ACM-W IIT Mandi",
  email: null,
  socials: {
    instagram: null,
    linkedin: null,
  },
};

export const institute = {
  name: "Indian Institute of Technology Mandi",
  address: "Kamand campus, Mandi district, Himachal Pradesh, India",
  url: "https://www.iitmandi.ac.in/",
};

export const acmLinks = [
  { label: "ACM", href: "https://www.acm.org/" },
  { label: "ACM India", href: "https://india.acm.org/" },
  { label: "ACM-W", href: "https://women.acm.org/" },
  { label: "ACM-W India", href: "https://acmwindia.acm.org/" },
  { label: "ACM Digital Library", href: "https://dl.acm.org/" },
];
