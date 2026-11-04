import { useEffect, useState } from "react";

const useResources = () => {
  const [resources, setResources] = useState([]);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState("");

  useEffect(() => {
    const loadResources = async () => {
      try {
        const response = await fetch("/resources.json");

        if (!response.ok) {
          throw new Error(`Resource request failed with status ${response.status}.`);
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("The resources response must be an array.");
        }

        setResources(data);
        setStatus("ready");
      } catch (loadError) {
        setError(loadError.message);
        setStatus("error");
      }
    };

    loadResources();
  }, []);

  return { resources, status, error };
};

export default useResources;
