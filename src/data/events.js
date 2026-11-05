// Add upcoming events here. The site shows them in the order listed.
// Shape:
// {
//   title: "Intro to competitive programming",
//   date: "2026-11-20",          // ISO date
//   time: "6:00 pm",
//   venue: "A10, North Campus",
//   chapter: "ACM",              // "ACM" or "ACM-W"
//   description: "One or two sentences about the session.",
//   imageUrl: "https://lh3.googleusercontent.com/d/FILE_ID",  // optional, replace FILE_ID with an actual image file ID from the Drive folder
//   registerUrl: "https://...",  // optional
// }

// Google Drive folder shared for event photos: 1JZGfmBAWCeo6EBgwgGeUSFC7sIIoqGxh
// To load event photos, replace FILE_ID below with each image's actual file ID from that folder.
// You cannot list folder contents client-side without the Google Drive API, so file IDs must be added manually.

export const events = [
  {
    title: "Githero",
    date: "2026-11-20",
    time: "10:00 am",
    venue: "Lecture Hall Complex",
    chapter: "ACM",
    description: "A Git and GitHub showdown primarily for first-year students: investigate a repository with multiple issues, identify and fix the problems, and submit solutions through pull requests in a simulated open-source environment.",
    registerUrl: "https://forms.gle/example-githero",
  },
  {
    title: "Introduction to GSoC",
    date: "2026-10-01",
    time: "6:00 pm",
    venue: "A10, North Campus",
    chapter: "ACM",
    description: "An introduction to Google Summer of Code: the application process, the open-source ecosystem, how organizations and contributors collaborate, finding suitable projects, making first contributions and preparing a strong application.",
  },
  {
    title: "Introduction to Git, GitHub and CLI",
    date: "2026-08-15",
    time: "5:00 pm",
    venue: "A10, North Campus",
    chapter: "ACM",
    description: "A hands-on introduction to Git for version control, GitHub for collaborative development, and the command line for interacting with your system efficiently, covering commits, branching and collaboration workflows.",
  },
  {
    title: "Xploit at Xpecto 2026",
    date: "2026-03-15",
    time: "11:00 am",
    venue: "Lecture Hall Complex",
    chapter: "ACM",
    description: "A reverse engineering competition at IIT Mandi's annual tech fest: analyse applications, programs and codebases, uncover hidden functionality and solve challenges by understanding how software works internally.",
  },
  {
    title: "AlgoHack",
    date: "2026-01-20",
    time: "9:00 am",
    venue: "Online",
    chapter: "ACM",
    description: "A reverse engineering competitive programming contest: given a problem statement and a flawed implementation, analyse its behaviour and construct test cases that expose incorrect outputs or cause it to fail.",
  },
  {
    title: "Mock OA",
    date: "2026-02-10",
    time: "6:00 pm",
    venue: "Online",
    chapter: "ACM",
    description: "An online assessment and interview preparation initiative for second-year students: timed coding tests modelled on company hiring rounds, followed by mock interviews for top performers, conducted twice.",
  },
];

export const eventFormats = [
  {
    title: "Talks",
    body: "Speakers from academia and industry on research, careers and the ideas shaping computing.",
  },
  {
    title: "Workshops",
    body: "Hands-on sessions where you leave with something working: a tool learned, a project started.",
  },
  {
    title: "Coding contests",
    body: "Competitive programming rounds to practise for ICPC-style contests and technical interviews.",
  },
  {
    title: "Hackathons",
    body: "Team weekends that take an idea from sketch to working demo.",
  },
];
