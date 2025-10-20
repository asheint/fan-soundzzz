import { useState, useEffect, useRef } from 'react';
import { useToggleRoomStore } from '../../stores/toggleRoomStore';
import gsap from 'gsap';
import './CookieConsent.scss';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const bannerRef = useRef();

  useEffect(() => {
    const acknowledged = localStorage.getItem('analytics-acknowledged');
    if (!acknowledged) {
      setIsVisible(true);
    }
  }, []);

  useEffect(() => {
    if (!bannerRef.current) return;

    if (isVisible) {
      gsap.set(bannerRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.9
      });

      gsap.to(bannerRef.current, {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.5
      });
    }
  }, [isVisible]);

  useEffect(() => {
    if (!bannerRef.current) return;

    if (isBeforeZooming) {
      gsap.to(bannerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        ease: "power2.inOut"
      });
    } else if (isVisible) {
      gsap.to(bannerRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.inOut"
      });
    }
  }, [isBeforeZooming, isVisible]);

  const handleAcknowledge = () => {
    if (!bannerRef.current) return;

    gsap.to(bannerRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        localStorage.setItem('analytics-acknowledged', 'true');
        setIsVisible(false);
      }
    });
  };

  if (!isVisible) return null;

  const containerClass = `cookie-consent${!isDarkRoom ? ' light' : ''}`;

  return (
    <div ref={bannerRef} className={containerClass}>
      <div className="cookie-content">
        <div className="cookie-text">
          <p>
            <strong>Analytics Notice:</strong> We use Google Analytics to understand how visitors interact with our website. No personal information is collected.
          </p>
        </div>
        <div className="cookie-buttons">
          <button 
            className="cookie-btn acknowledge"
            onClick={handleAcknowledge}
          >
            Got it
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
