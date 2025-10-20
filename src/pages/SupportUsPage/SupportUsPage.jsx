import Page from "../Page";
import { HiOutlineMail } from "react-icons/hi";
import "./SupportUsPage.scss";

const SupportUsPage = () => {
  return (
    <>
      <Page requireDarkRoom={true} customContent={true}>
        <div className="support-container">
          <div className="support-header">
            <h1>Support Fan SoundZzz</h1>
            <p className="support-subtitle">Help keep this project alive and growing.</p>
          </div>
          
          <div className="support-content">
            <div className="support-section">
              <div className="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
                </svg>
              </div>
              <div className="section-content">
                <h3>Why Support Matters</h3>
                <p>Fan SoundZzz is completely free to use, and I want to keep it that way. But running this platform—hosting the website, recording new sounds, and building new 3D environments—takes time and resources.</p>
              </div>
            </div>

            <div className="support-section">
              <div className="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z"/>
                </svg>
              </div>
              <div className="section-content">
                <h3>What Your Support Enables</h3>
                <p>If Fan SoundZzz has helped you sleep better, focus more, or simply relax, consider supporting the project. Your contribution helps me speed up development of new features, add more sound environments, and keep everything running smoothly.</p>
              </div>
            </div>

            <div className="support-section">
              <div className="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,5.5C14.8,4.1 13.6,3 12.1,3H11.9C10.4,3 9.2,4.1 9,5.5L3,7V9L9,7.5V21C9,21.6 9.4,22 10,22H14C14.6,22 15,21.6 15,21V7.5L21,9Z"/>
                </svg>
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
