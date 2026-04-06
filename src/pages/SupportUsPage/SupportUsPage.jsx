import { Helmet } from "react-helmet-async";
import Page from "../Page";
import { HiOutlineMail } from "react-icons/hi";
import { FaHandHoldingHeart, FaRocket, FaUsers } from "react-icons/fa";
import "./SupportUsPage.scss";

const SupportUsPage = () => {
  return (
    <>
      <Helmet>
        <title>Support Us | Fan SoundZzz</title>
        <meta name="description" content="Help keep Fan SoundZzz free for everyone. Support the project so we can keep adding new fan sounds, models, and features." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://fansoundzzz.com/support-us" />
        <meta property="og:url" content="https://fansoundzzz.com/support-us" />
        <meta property="og:title" content="Support Us | Fan SoundZzz" />
        <meta property="og:description" content="Help keep Fan SoundZzz free for everyone. Support the project so we can keep adding new fan sounds, models, and features." />
      </Helmet>
      <Page requireDarkRoom={true} customContent={true}>
        <div className="support-container">
          <div className="support-header">
            <h1>Support Fan SoundZzz</h1>
            <p className="support-subtitle">Help keep this project alive and growing.</p>
          </div>
          
          <div className="support-content">
            <div className="support-section">
              <div className="section-icon">
                <FaHandHoldingHeart size={32} />
              </div>
              <div className="section-content">
                <h3>Why Support Matters</h3>
                <p>Fan SoundZzz is completely free to use, and I want to keep it that way. But running this platform—hosting the website, recording new sounds, and building new 3D environments—takes time and resources.</p>
              </div>
            </div>

            <div className="support-section">
              <div className="section-icon">
                <FaRocket size={32} />
              </div>
              <div className="section-content">
                <h3>What Your Support Enables</h3>
                <p>If Fan SoundZzz has helped you sleep better, focus more, or simply relax, consider supporting the project. Your contribution helps me speed up development of new features, add more sound environments, and keep everything running smoothly.</p>
              </div>
            </div>

            <div className="support-section">
              <div className="section-icon">
                <FaUsers size={32} />
              </div>
              <div className="section-content">
                <h3>Community Impact</h3>
                <p>Every bit of support means the world and keeps this project moving forward.</p>
              </div>
            </div>
          </div>

          <div className="support-action">
            <p className="action-text">Ready to support? Every contribution helps!</p>
            <a
              href="https://buymeacoffee.com/asheint"
              target="_blank"
              rel="noopener noreferrer"
              className="bmc-link"
            >
              <img
                src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
                alt="Buy Me A Coffee"
                className="bmc-img"
              />
            </a>
          </div>

          <div className="contact-section">
            <div className="section-icon">
              <HiOutlineMail size={32} />
            </div>
            <div className="section-content">
              <h3>Get In Touch</h3>
              <p className="contact-text">Have questions or inquiries? I'd love to hear from you:</p>
              <a href="mailto:info@fansoundzzz.com" className="email">
                <HiOutlineMail className="email-icon" />
                info@fansoundzzz.com
              </a>
              <p className="feedback-text">For feedback and suggestions, please use our feedback form.</p>
            </div>
          </div>

          <div className="support-footer">
            <p className="thank-you">Thank you for your support and for being part of Fan SoundZzz.</p>
          </div>
        </div>
      </Page>
    </>
  );
};

export default SupportUsPage;
