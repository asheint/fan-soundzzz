// src/app/page.js

"use client";

import { useEffect, useState } from "react";
import LoadingPage from "../components/LoadingPage";

export default function Home() {
  const [version, setVersion] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the version from the API
    async function fetchVersion() {
      try {
        setLoading(true);
        const response = await fetch("/api/version");
        const data = await response.json();
        setVersion(data.version);

        // Small delay to ensure everything is loaded
        setTimeout(() => {
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching version:", error);
        setLoading(false);
      }
    }

    fetchVersion();
  }, []);

  useEffect(() => {
    // Handle version changes
    if (version === "v0") {
      // For v0, we're going to redirect to the static HTML file
      window.location.href = "/v0/index.html";
    }
    // For v1, we would render the React components here
  }, [version]);

  // Show loading page while determining version or during transition
  if (loading || !version) {
    return <LoadingPage />;
  }

  // This will only show if version is 'v1' since 'v0' redirects
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Fan SoundZzz v1</h1>
      <p>Modern version of Fan SoundZzz coming soon!</p>
    </div>
  );
}
