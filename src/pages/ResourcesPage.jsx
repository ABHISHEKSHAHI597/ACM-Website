import PageHeader from "../components/PageHeader";
import ResourceCards from "../components/ResourceCards";

const ResourcesPage = () => {
  return (
    <main>
      <PageHeader
        section="Resources"
        title="Tools for the computing community"
        intro="ACM provides resources for learning, research, professional development, communication, and participation in the computing community."
      />
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20">
        <ResourceCards />
        <a
          href="https://www.acm.org/resources"
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-md bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-acm"
        >
          Read the official ACM resource guide
        </a>
      </div>
    </main>
  );
};

export default ResourcesPage;
