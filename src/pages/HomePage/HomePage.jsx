import { Helmet } from "react-helmet-async";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Fan Sounds for Sleep | Free White Noise | Fan SoundZzz</title>
        <meta name="description" content="Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online. No downloads needed. Fall asleep faster with Fan SoundZzz." />
        <link rel="canonical" href="https://fansoundzzz.com/" />
        <meta property="og:url" content="https://fansoundzzz.com/" />
        <meta property="og:title" content="Fan Sounds for Sleep | Free White Noise | Fan SoundZzz" />
        <meta property="og:description" content="Free high-quality fan sounds for better sleep. Stream realistic stand fan white noise online. No downloads needed. Fall asleep faster with Fan SoundZzz." />
      </Helmet>
      <h1 className="sr-only">Fan Sounds for Sleep &mdash; Free White Noise Online</h1>
    </>
  );
};

export default HomePage;
