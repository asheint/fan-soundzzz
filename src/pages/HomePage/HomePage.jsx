import { Helmet } from "react-helmet-async";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <Helmet>
      <title>Fan Sounds for Sleep | Free White Noise | Fan SoundZzz</title>
      <meta name="description" content="Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online — no downloads required. Fall asleep faster with Fan SoundZzz." />
      <link rel="canonical" href="https://fansoundzzz.com/" />
      <meta property="og:url" content="https://fansoundzzz.com/" />
      <meta property="og:title" content="Fan Sounds for Sleep | Free White Noise | Fan SoundZzz" />
      <meta property="og:description" content="Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online — no downloads required. Fall asleep faster with Fan SoundZzz." />
      <script type="application/ld+json">{JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://fansoundzzz.com/#webpage",
        "url": "https://fansoundzzz.com/",
        "name": "Fan Sounds for Sleep | Free White Noise | Fan SoundZzz",
        "description": "Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online.",
        "isPartOf": { "@id": "https://fansoundzzz.com/#website" },
        "inLanguage": "en-US"
      })}</script>
    </Helmet>
  );
};

export default HomePage;
