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

export const events = [];

// The chapter's recurring events: run every year, shown on the Events page
// independent of the dated list above.
export const annualEvents = [
  {
    title: "Xploit",
    subtitle: "Reverse engineering competition",
    tags: ["Competition", "At Xpecto"],
    body: [
      "Organized as part of Xpecto, the annual technical fest of IIT Mandi, Xploit is a reverse engineering competition that challenges participants to look beyond the surface and understand how software works internally. Participants are presented with various applications, programs, and codebases and are tasked with analyzing their underlying logic, uncovering hidden functionality, and solving challenges through reverse engineering. The competition encourages analytical thinking, curiosity, and hands-on exploration of software systems.",
    ],
  },
  {
    title: "Introduction to GSoC",
    subtitle: "Google Summer of Code",
    tags: ["Session", "Open source"],
    body: [
      "An introductory session designed to familiarize students with Google Summer of Code (GSoC), its application process, and the opportunities it offers to aspiring developers. The session introduces participants to the open-source ecosystem, explains how organizations and contributors collaborate, and guides students on finding suitable projects, understanding codebases, making their first contributions, and preparing a strong application. It aims to help students take their first steps towards meaningful open-source contributions.",
    ],
  },
  {
    title: "Introduction to Git, GitHub and CLI",
    subtitle: "Hands-on workshop",
    tags: ["Workshop"],
    body: [
      "A hands-on introductory session aimed at equipping students with the essential tools and workflows used in modern software development. Participants are introduced to Git for version control, GitHub for collaborative development and code hosting, and the Command Line Interface (CLI) for interacting with their systems efficiently. Through practical demonstrations and exercises, students learn fundamental Git operations, repository management, branching, commits, and collaboration workflows, building a foundation for working on real-world software projects.",
    ],
  },
  {
    title: "Githero",
    subtitle: "Git & GitHub showdown",
    tags: ["Competition", "First years"],
    body: [
      "Githero is a Git and GitHub-based competition organized primarily for first-year students, providing them with an opportunity to put their version control skills into practice. Participants are given a repository containing multiple issues and are challenged to investigate the codebase, identify and fix the problems, and submit their solutions through Pull Requests (PRs). The competition simulates a collaborative open-source development environment, encouraging participants to develop practical debugging skills, understand existing codebases, and become comfortable with industry-standard development workflows.",
    ],
  },
  {
    title: "AlgoHack",
    subtitle: "Reverse engineering competitive programming contest",
    tags: ["Contest"],
    body: [
      "AlgoHack is a unique competitive programming challenge that approaches problem-solving from a reverse engineering perspective. Instead of writing a solution to a given problem, participants are provided with a problem statement along with an existing implementation that contains logical flaws or hidden edge cases. Their task is to analyze the implementation, understand its behavior, and construct test cases that expose incorrect outputs or cause the solution to fail. The competition tests participants' ability to think critically, identify corner cases, understand algorithmic limitations, and develop a deeper understanding of problem-solving beyond conventional coding contests.",
    ],
  },
  {
    title: "Mock OA",
    subtitle: "Online assessment & interview preparation",
    tags: ["Second years", "Held twice"],
    body: [
      "Mock OA is an initiative aimed at preparing second-year students for internship and placement recruitment processes. The event recreates the environment of an actual online assessment (OA), allowing participants to experience timed coding tests similar to those conducted by companies during their hiring processes. Students are evaluated on their problem-solving abilities, coding proficiency, and performance under time constraints.",
      "Following the assessment, top-performing candidates are shortlisted for mock interviews, providing them with an opportunity to experience technical interview scenarios and receive valuable exposure to the recruitment process. The initiative is conducted twice to give students multiple opportunities to practice, evaluate their progress, and improve their preparation for upcoming internship and placement opportunities.",
    ],
  },
];
