import { useRef, useEffect, useState } from 'react';
import { useToggleRoomStore } from '../../stores/toggleRoomStore';
import gsap from 'gsap';
import './FeedbackLabel.scss';

const FeedbackLabel = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const [isVisible, setIsVisible] = useState(true);
  const labelRef = useRef();

  useEffect(() => {

    const dismissed = localStorage.getItem('feedback-label-dismissed');
    if (dismissed) {
      setIsVisible(false);
    }
  }, []);

  useEffect(() => {
    if (!labelRef.current || !isVisible) return;

    gsap.set(labelRef.current, { y: 0 });

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(labelRef.current, {
      y: -8,
      duration: 1.5,
      ease: "power1.inOut"
    });

    return () => tl.kill();
  }, [isVisible]);

  useEffect(() => {
    if (!labelRef.current || !isVisible) return;

    if (isBeforeZooming) {
      gsap.to(labelRef.current, {
        opacity: 0,
        duration: 0.6
      });
    } else {
      gsap.to(labelRef.current, {
        opacity: 1,
        duration: 0.6
      });
    }
  }, [isBeforeZooming, isVisible]);

  const handleDismiss = () => {
    if (!labelRef.current) return;

    gsap.to(labelRef.current, {
      y: 20,
      opacity: 0,
      scale: 0.95,
      duration: 0.5,
      ease: "power2.inOut",
      onComplete: () => {
        localStorage.setItem('feedback-label-dismissed', 'true');
        setIsVisible(false);
      }
    });
  };

  if (!isVisible) return null;

  const labelClass = `feedback-label${!isDarkRoom ? ' light' : ''}`;

  return (
    <div ref={labelRef} className={labelClass}>
      <div className="label-content">
        Feedback
        <button 
          className="dismiss-btn"
          onClick={handleDismiss}
          aria-label="Dismiss feedback label"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      <div className="label-arrow"></div>
    </div>
  );
};

export default FeedbackLabel;
