import Page from "../Page";
import "./AboutPage.scss";

const AboutPage = () => {
  return (
    <>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 5.5C14.8 4.1 13.6 3 12.1 3H11.9C10.4 3 9.2 4.1 9 5.5L3 7V9L9 7.5V21C9 21.6 9.4 22 10 22H14C14.6 22 15 21.6 15 21V7.5L21 9Z" />
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M7.07,18.28C7.5,17.38 10.12,16.5 12,16.5C13.88,16.5 16.5,17.38 16.93,18.28C15.57,19.36 13.86,20 12,20C10.14,20 8.43,19.36 7.07,18.28M18.36,16.83C16.93,15.09 13.46,14.5 12,14.5C10.54,14.5 7.07,15.09 5.64,16.83C4.62,15.5 4,13.82 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20,12C20,13.82 19.38,15.5 18.36,16.83M12,6C10.06,6 8.5,7.56 8.5,9.5C8.5,11.44 10.06,13 12,13C13.94,13 15.5,11.44 15.5,9.5C15.5,7.56 13.94,6 12,6M12,11A1.5,1.5 0 0,1 10.5,9.5A1.5,1.5 0 0,1 12,8A1.5,1.5 0 0,1 13.5,9.5A1.5,1.5 0 0,1 12,11Z" />
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19,3H14.82C14.4,1.84 13.3,1 12,1C10.7,1 9.6,1.84 9.18,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M12,3A1,1 0 0,1 13,4A1,1 0 0,1 12,5A1,1 0 0,1 11,4A1,1 0 0,1 12,3M7,7H17V9H7V7M7,11H17V13H7V11M7,15H13V17H7V15Z" />
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M16.2,16.2L11,13V7H12.5V12.2L17,14.9L16.2,16.2Z" />
                </svg>
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
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,5.5C14.8,4.1 13.6,3 12.1,3H11.9C10.4,3 9.2,4.1 9,5.5L3,7V9L9,7.5V21C9,21.6 9.4,22 10,22H14C14.6,22 15,21.6 15,21V7.5L21,9Z" />
                </svg>
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
