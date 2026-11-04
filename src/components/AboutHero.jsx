import { Link } from "react-router-dom";
import Contours from "./Contours";

const AboutHero = () => {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-ink text-white"
      aria-labelledby="about-title"
    >
      <Contours className="absolute inset-0 -z-10 size-full" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink via-ink/85 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:py-40">
        <p className="text-sm text-acm-light">ACM and ACM-W Student Chapters, IIT Mandi</p>
        <h1
          id="about-title"
          className="mt-5 max-w-3xl font-display text-5xl leading-[1.05] font-medium tracking-tight sm:text-7xl"
        >
          The computing community of IIT Mandi
        </h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">
          We bring together IIT Mandi students who are curious about technology
          and problem-solving, through talks, workshops, contests and projects
          built together.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/join"
            className="rounded-md bg-white px-5 py-3 text-sm font-semibold text-ink transition-colors hover:bg-acm-light"
          >
            Join the chapter
          </Link>
          <Link
            to="/events"
            className="rounded-md border border-white/30 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white/10"
          >
            See upcoming events
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
