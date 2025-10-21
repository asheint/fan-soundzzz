import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToggleRoomStore } from '../../stores/toggleRoomStore';
import { useStandFanStore } from '../../stores/useStandFanStore';
import gsap from 'gsap';
import './FeedbackPopup.scss';

const FeedbackPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const { isRunning } = useStandFanStore();
  const navigate = useNavigate();
  const popupRef = useRef();
  const startTimeRef = useRef(null);

  useEffect(() => {
    // Check if user has already been asked or dismissed
    const feedbackRequested = localStorage.getItem('feedback-requested');
    const sessionUsage = sessionStorage.getItem('fan-usage-time');
    
    if (feedbackRequested || isRunning) return;

    // Show popup if user used fan for at least 10 seconds and stopped it
    if (sessionUsage && parseInt(sessionUsage) > 10000) {
      setTimeout(() => {
        setIsVisible(true);
      }, 2000); // Wait 2s after stopping
    }
  }, [isRunning]);

  // Track fan usage time - FIXED VERSION
  useEffect(() => {
    if (isRunning && !startTimeRef.current) {
      startTimeRef.current = Date.now();
      console.log('🌀 Fan STARTED at:', new Date(startTimeRef.current).toLocaleTimeString());
    } else if (!isRunning && startTimeRef.current) {
      const stopTime = Date.now();
      const usageTime = stopTime - startTimeRef.current;
      const currentUsage = parseInt(sessionStorage.getItem('fan-usage-time') || '0');
      const newTotalUsage = currentUsage + usageTime;
      
      console.log('⏹️ Fan STOPPED at:', new Date(stopTime).toLocaleTimeString());
      console.log('⏱️ Duration (this session):', (usageTime / 1000).toFixed(2), 'seconds');
      console.log('📊 Total accumulated time:', (newTotalUsage / 1000).toFixed(2), 'seconds');
      console.log('✅ Popup threshold (10s):', newTotalUsage > 10000 ? 'MET' : 'NOT MET');
      
      sessionStorage.setItem('fan-usage-time', newTotalUsage.toString());
      startTimeRef.current = null;
    }
  }, [isRunning]);

  // Animate in
  useEffect(() => {
    if (!popupRef.current || !isVisible) return;

    gsap.set(popupRef.current, {
      scale: 0.8,
      opacity: 0,
      y: 50
    });

    gsap.to(popupRef.current, {
      scale: 1,
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "back.out(1.7)"
    });
  }, [isVisible]);

  // Hide during transitions
  useEffect(() => {
    if (!popupRef.current) return;

    if (isBeforeZooming && isVisible) {
      gsap.to(popupRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4
      });
    } else if (isVisible) {
      gsap.to(popupRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.4
      });
    }
  }, [isBeforeZooming, isVisible]);

  const handleFeedback = () => {
    localStorage.setItem('feedback-requested', 'true');
    animateOut(() => {
      navigate('/feedback');
    });
  };

  const handleDismiss = () => {
    localStorage.setItem('feedback-requested', 'true');
    animateOut();
  };

  const animateOut = (callback) => {
    gsap.to(popupRef.current, {
      scale: 0.9,
      opacity: 0,
      y: 50,
      duration: 0.4,
      ease: "power2.inOut",
      onComplete: () => {
        setIsVisible(false);
        callback && callback();
      }
    });
  };

  if (!isVisible) return null;

  const containerClass = `feedback-popup${!isDarkRoom ? ' light' : ''}`;

  return (
    <div ref={popupRef} className={containerClass}>
      <div className="popup-content">
        <div className="popup-text">
          <h4>Quick Question</h4>
          <p className="main-question">Is Fan SoundZzz helping you sleep better?</p>
          <p className="sub-text">I'm building this to help people who need fan sounds to sleep, and your honest feedback shows me if I'm on the right track.</p>
        </div>
        <div className="popup-buttons">
          <button className="popup-btn dismiss" onClick={handleDismiss}>
            Maybe later
          </button>
          <button className="popup-btn feedback" onClick={handleFeedback}>
            Give feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackPopup;