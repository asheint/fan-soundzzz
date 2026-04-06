import { Helmet } from "react-helmet-async";
import Page from "../Page";
import "./AboutPage.scss";
import { BsChatRightDotsFill } from "react-icons/bs";
import { MdScience } from "react-icons/md";
import { TbBeta } from "react-icons/tb";
import { GiNightSleep } from "react-icons/gi";
import { FaRegQuestionCircle, FaHandHoldingHeart } from "react-icons/fa";

const AboutPage = () => {
  return (
    <>
      <Helmet>
        <title>About | Fan SoundZzz</title>
        <meta name="description" content="Learn about Fan SoundZzz — the story behind the app, the science of fan white noise for sleep, and how it helps you fall asleep faster." />
        <link rel="canonical" href="https://fansoundzzz.com/about" />
        <meta property="og:url" content="https://fansoundzzz.com/about" />
        <meta property="og:title" content="About | Fan SoundZzz" />
        <meta property="og:description" content="Learn about Fan SoundZzz — the story behind the app, the science of fan white noise for sleep, and how it helps you fall asleep faster." />
      </Helmet>
      <Page requireDarkRoom={true} customContent={true}>
        <div className="about-container">
          <div className="about-header">
            <h1>About Fan SoundZzz</h1>
            <p className="about-subtitle">
              High-quality fan sounds for better sleep. Completely free.
            </p>
          </div>

          <div className="about-content">
            <div className="about-section">
              <div className="section-icon">
                <BsChatRightDotsFill size={32} />
              </div>
              <div className="section-content">
                <h3>The Story Behind...</h3>
                <p>
                  Hi, I'm Ashen Thilakarathna. I created Fan SoundZzz after
                  noticing something curious about my fiancée's sleep habits.
                  Even on cold, rainy nights, she'd still turn on the fan. Not for
                  cooling—just for the sound. That's when it clicked: fans aren't
                  just about beating the heat. For many people, it's the
                  consistent hum that helps them sleep. That realization led me to
                  create this.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-icon">
                <MdScience size={32} />
              </div>
              <div className="section-content">
                <h3>The Science</h3>
                <p>
                  The science behind fan sounds is fascinating. Research shows
                  that white noise can help people fall asleep up to 40% faster by
                  masking sudden environmental noises like traffic, barking dogs,
                  or household sounds. Fan sounds create a consistent, predictable
                  soundscape that our brains naturally find relaxing. It's not
                  just comfort—it's backed by science.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-icon">
                <TbBeta size={32} />
              </div>
              <div className="section-content">
                <h3>Current Version</h3>
                <p>
                  Currently, Fan SoundZzz features a professionally recorded
                  pedestal fan sound. This is the beta version 2.0, and I'm
                  focused on gathering feedback from users like you. Your
                  experience and suggestions will shape what comes next.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-icon">
                <GiNightSleep size={32} />
              </div>
              <div className="section-content">
                <h3>Who Needs This?</h3>
                <p>
                  If you're among the 50 million people globally who struggle
                  with sleep issues, if you've ever needed that familiar hum to
                  quiet your mind, or if you find comfort in consistent
                  background sound, this is for you. Some use it for focus while
                  working, others for meditation, but most just need it to sleep.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-icon">
                <FaRegQuestionCircle size={32} />
              </div>
              <div className="section-content">
                <h3>What's Coming Next?</h3>
                <p>
                  I'm planning to add many more sounds in brand new 3D
                  environments. Imagine different fan types in various room
                  settings, or a calming jungle scene with fireflies and gentle
                  frog sounds at night. Each environment will be designed to
                  match its sounds perfectly. Every addition will be shaped by
                  your feedback.
                </p>
              </div>
            </div>

            <div className="about-section">
              <div className="section-icon">
                <FaHandHoldingHeart size={32} />
              </div>
              <div className="section-content">
                <h3>Special Thanks</h3>
                <p>
                  When I started Fan SoundZzz v1, I only had simple 3D models for
                  each fan and a basic web UI. I always dreamed of building a
                  fully immersive 3D experience, but with university exams and
                  work, time was limited. Luckily, I found an incredible YouTube
                  tutorial by{" "}
                  <strong>Andrew Woan</strong>—the best teacher I’ve come across
                  online. His video showed exactly the environment I had in mind,
                  and provided all the resources I needed. The 3D environment you
                  see here is partially based on his open source project, with my
                  own custom implementations. Huge thanks to Andrew for making
                  this possible!
                </p>
              </div>
            </div>

            <div className="about-footer">
              <p>
                Stay relaxed, sleep well, and thank you for being part of this
                journey.
              </p>
              <p className="piano-note">
                While you're here, explore the interactive piano tiles for a
                moment of relaxation and stress release. Sometimes we all need a
                creative way to unwind.
              </p>
            </div>
          </div>
        </div>
      </Page>
    </>
  );
};

export default AboutPage;
