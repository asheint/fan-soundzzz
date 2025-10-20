import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import gsap from "gsap";
import "./FeedbackButton.scss";

const FeedbackButton = () => {
  const navigate = useNavigate();
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const buttonRef = useRef();

  const buttonClassNames = `feedback-button${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!buttonRef.current) return;

    if (isBeforeZooming) {
      gsap.to(buttonRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  const handleClick = () => {
    navigate("/feedback");
  };

  return (
    <button
      ref={buttonRef}
      className={buttonClassNames}
      onClick={handleClick}
      aria-label="Open feedback form"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"/>
        <path d="M6 9H18V11H6V9M6 12H16V14H6V12M6 6H18V8H6V6"/>
      </svg>
    </button>
  );
};

export default FeedbackButton;