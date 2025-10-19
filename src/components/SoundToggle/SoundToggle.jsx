import React, { useRef, useEffect } from "react";
import { useSoundStore } from "../../stores/soundStore";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import gsap from "gsap";
import "./SoundToggle.scss";

const SoundToggle = () => {
  const { isSoundEnabled, toggleSound } = useSoundStore();
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const buttonRef = useRef();

  const buttonClassNames = `sound-toggle${!isDarkRoom ? " light" : ""}`;

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

  return (
    <button
      ref={buttonRef}
      className={buttonClassNames}
      onClick={toggleSound}
      aria-label={isSoundEnabled ? "Mute sound" : "Unmute sound"}
    >
      {isSoundEnabled ? (
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
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      ) : (
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
          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
      )}
    </button>
  );
};

export default SoundToggle;
