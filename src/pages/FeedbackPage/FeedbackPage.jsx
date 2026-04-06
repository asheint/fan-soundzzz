import { Helmet } from "react-helmet-async";
import Page from "../Page";
import "./FeedbackPage.scss";
import { useState } from "react";
import emailjs from 'emailjs-com';

const FeedbackPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );
      
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error('Failed to send feedback:', error);
      alert('Failed to send feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Feedback | Fan SoundZzz</title>
        <meta name="description" content="Share your feedback about Fan SoundZzz. Help us improve fan sounds, features, and your sleep experience." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://fansoundzzz.com/feedback" />
        <meta property="og:url" content="https://fansoundzzz.com/feedback" />
        <meta property="og:title" content="Feedback | Fan SoundZzz" />
        <meta property="og:description" content="Share your feedback about Fan SoundZzz. Help us improve fan sounds, features, and your sleep experience." />
      </Helmet>
      <Page requireDarkRoom={true} customContent={true}>
        <div className="feedback-container">
          <div className="feedback-header">
            <h1>Feedback</h1>
            <p className="feedback-subtitle">Share your thoughts and help us improve Fan SoundZzz</p>
        </div>

        {!isSubmitted ? (
          <div className="feedback-content">
            <div className="feedback-intro">
              <div className="section-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2M6 9H18V11H6V9M6 12H16V14H6V12M6 6H18V8H6V6Z"/>
                </svg>
              </div>
              <div className="intro-content">
                <h3>What's Working? What's Not?</h3>
                <p>Fan SoundZzz is in beta, and honestly, I need to know if this is actually useful to you. Your real thoughts help me decide what to build next.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="feedback-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Just your first name is fine"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="In case I need to follow up"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">What's this about?</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Pick one...</option>
                  <option value="general">Just sharing thoughts</option>
                  <option value="feature-request">I have an idea</option>
                  <option value="sound-quality">About the sound</option>
                  <option value="bug-report">Something's broken</option>
                  <option value="user-experience">Using the app</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell Me Everything</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  placeholder="Does this help you? Be honest—I can take it."
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send It"}
              </button>
            </form>
          </div>
        ) : (
          <div className="success-message">
            <div className="success-icon">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M11,16.5L6.5,12L7.91,10.59L11,13.67L16.59,8.09L18,9.5L11,16.5Z"/>
              </svg>
            </div>
            <h3>Got It, Thanks!</h3>
            <p>Seriously, this means a lot. I read every message and your feedback directly shapes what gets built next.</p>
            <button 
              className="back-button" 
              onClick={() => setIsSubmitted(false)}
            >
              Send More Thoughts
            </button>
          </div>
        )}
      </div>
    </Page>
    </>
  );
};

export default FeedbackPage;
