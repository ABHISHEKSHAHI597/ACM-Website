import { useEffect, useState } from "react";
import { chapter } from "../data/chapter";

// Public repositories of the chapter's GitHub organization, newest activity first.
// The response is cached for a short while so navigating between pages and
// React StrictMode's double effects do not spend the unauthenticated rate limit.
const API_URL = `https://api.github.com/orgs/${chapter.githubOrg}/repos?type=public&sort=updated&per_page=100`;
const CACHE_TTL = 10 * 60 * 1000;
const EXCLUDED_REPOSITORIES = new Set([".github"]);

let cache = { repositories: null, fetchedAt: 0 };

const readCache = () =>
  cache.repositories && Date.now() - cache.fetchedAt < CACHE_TTL ? cache.repositories : null;

const normalize = (repositories) =>
  repositories
    .filter((repository) => !repository.fork && !EXCLUDED_REPOSITORIES.has(repository.name))
    .map((repository) => ({
      id: repository.id,
      name: repository.name,
      description: repository.description,
      url: repository.html_url,
      language: repository.language,
      stars: repository.stargazers_count,
      forks: repository.forks_count,
      topics: repository.topics ?? [],
      updatedAt: repository.pushed_at ?? repository.updated_at,
      archived: repository.archived,
    }));

const useRepositories = () => {
  const [repositories, setRepositories] = useState(() => readCache() ?? []);
  const [status, setStatus] = useState(() => (readCache() ? "ready" : "loading"));
  const [error, setError] = useState("");

  useEffect(() => {
    if (readCache()) {
      return;
    }

    let cancelled = false;

    const loadRepositories = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: { Accept: "application/vnd.github+json" },
        });

        if (!response.ok) {
          throw new Error(
            response.status === 403 || response.status === 429
              ? "GitHub is rate limiting requests right now. Please try again in a few minutes."
              : `GitHub returned status ${response.status}.`,
          );
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The GitHub response was not a list of repositories.");
        }

        const nextRepositories = normalize(data);
        cache = { repositories: nextRepositories, fetchedAt: Date.now() };

        if (!cancelled) {
          setRepositories(nextRepositories);
          setStatus("ready");
        }
      } catch (loadError) {
        if (!cancelled) {
          setError(loadError.message);
          setStatus("error");
        }
      }
    };

    loadRepositories();

    return () => {
      cancelled = true;
    };
  }, []);

  return { repositories, status, error };
};

export default useRepositories;
