// Infographic: how the yearly events fit together, from first steps to placement preparation.

const stages = [
  {
    step: "01",
    title: "Start here",
    note: "Primarily for first-year students",
    events: [
      { name: "Introduction to Git, GitHub and CLI", detail: "Learn version control and the command line" },
      { name: "Githero", detail: "Fix real issues in a repository and submit pull requests" },
    ],
  },
  {
    step: "02",
    title: "Go further",
    note: "Open source and problem-solving",
    events: [
      { name: "Introduction to GSoC", detail: "Find a project and make your first contributions" },
      { name: "AlgoHack", detail: "Break flawed solutions with the right test cases" },
      { name: "Xploit", detail: "Reverse engineer software at Xpecto, the annual tech fest" },
    ],
  },
  {
    step: "03",
    title: "Get placement-ready",
    note: "For second-year students",
    events: [{ name: "Mock OA", detail: "A company-style online assessment, then mock interviews" }],
    flow: ["Timed online assessment", "Top performers shortlisted", "Mock technical interviews"],
  },
];

const Arrow = () => (
  <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="size-4 shrink-0 text-acm max-sm:rotate-90">
    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const EventPath = () => (
  <ol className="grid gap-px overflow-hidden rounded-lg border border-line bg-line lg:grid-cols-3">
    {stages.map(({ step, title, note, events, flow }) => (
      <li key={step} className="flex flex-col bg-white p-6 sm:p-8">
        <div className="flex items-baseline gap-3">
          <span className="font-display text-4xl text-acm tabular-nums">{step}</span>
          <h3 className="font-display text-2xl font-medium text-ink">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-muted">{note}</p>
        <ul className="mt-6 space-y-4 border-l-2 border-acm/30 pl-5">
          {events.map(({ name, detail }) => (
            <li key={name} className="relative">
              <span className="absolute top-2 -left-[1.6rem] size-2.5 rounded-full border-2 border-white bg-acm" aria-hidden="true" />
              <p className="font-semibold text-ink">{name}</p>
              <p className="mt-0.5 text-sm leading-6 text-muted">{detail}</p>
            </li>
          ))}
        </ul>
        {flow && (
          <div className="mt-6 rounded-md bg-mist p-4">
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              {flow.map((stage, i) => (
                <div key={stage} className="flex flex-col gap-2 sm:flex-row sm:items-center">
                  {i > 0 && <Arrow />}
                  <span className="rounded border border-line bg-white px-2.5 py-1 text-xs font-medium text-ink">{stage}</span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs font-semibold tracking-wide text-acm uppercase">Runs twice a year</p>
          </div>
        )}
      </li>
    ))}
  </ol>
);

export default EventPath;
