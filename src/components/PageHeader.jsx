const PageHeader = ({ section, title, intro }) => (
  <header className="border-b border-line bg-mist">
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
      {section && <p className="text-sm text-acm">{section}</p>}
      <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-medium tracking-tight text-ink sm:text-6xl">
        {title}
      </h1>
      {intro && <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">{intro}</p>}
    </div>
  </header>
);

export default PageHeader;
