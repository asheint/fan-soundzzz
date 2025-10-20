import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import { MdFeedback } from "react-icons/md";
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
      <MdFeedback size={24} />
    </button>
  );
};

export default FeedbackButton;
