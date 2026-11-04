// Single source of truth for chapter details shown across the site.
// Anything left as null is hidden on the site until you fill it in.

export const chapter = {
  name: "ACM Student Chapter, IIT Mandi",
  shortName: "ACM IIT Mandi",
  tagline: "Fostering computing, research and innovation at IIT Mandi.",
  email: "acmchapter@students.iitmandi.ac.in",
  socials: {
    instagram: "https://www.instagram.com/acm_iitmandi/",
    linkedin: "https://www.linkedin.com/company/acm-iit-mandi/",
    github: null,
  },
};

export const acmw = {
  name: "ACM-W Student Chapter, IIT Mandi",
  shortName: "ACM-W IIT Mandi",
  founded: 2019,
  email: null, // ACM-W queries currently go to the chapter email
  socials: {
    instagram: null,
    linkedin: "https://www.linkedin.com/company/iit-mandi-acm-w-chapter/",
  },
};

export const institute = {
  name: "Indian Institute of Technology Mandi",
  address: "Kamand, Mandi district, Himachal Pradesh 175075, India",
  url: "https://www.iitmandi.ac.in/",
  mapUrl: "https://www.google.com/maps/search/?api=1&query=IIT+Mandi+Kamand+Campus",
};

export const acmLinks = [
  { label: "ACM", href: "https://www.acm.org/" },
  { label: "ACM India", href: "https://india.acm.org/" },
  { label: "ACM-W", href: "https://women.acm.org/" },
  { label: "ACM-W India", href: "https://acmwindia.acm.org/" },
  { label: "ACM Digital Library", href: "https://dl.acm.org/" },
];
