"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [version, setVersion] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch current version from API
    fetch("/api/version")
      .then((res) => res.json())
      .then((data) => {
        if (data.version === "v0") {
          // Redirect to v0 HTML page
          window.location.href = "/v0/index.html";
        } else {
          setVersion("v1");
        }
      });
  }, []);

  if (!version) return <div>Loading...</div>;

  // Your v1 Next.js app content
  return (
    <main>
      <h1>Fan SoundZzz - v1</h1>
      {/* Your Three.js content will go here */}
    </main>
  );
}
