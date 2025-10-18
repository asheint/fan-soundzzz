import React, { useRef, useEffect } from "react";
import "./RoomToggleButton.scss";
import { useToggleRoomStore } from "../../../stores/toggleRoomStore";
import gsap from "gsap";
import { useNavigate } from "react-router";

const RoomToggleButton = () => {
  const { isDarkRoom, setDarkRoom, isTransitioning, isBeforeZooming } =
    useToggleRoomStore();

  const toggleButtonRef = useRef();

  const handleToggle = () => {
    if (!isTransitioning) {
      setDarkRoom(!isDarkRoom);
    }
  };

  useEffect(() => {
    if (!toggleButtonRef.current) return;

    if (isBeforeZooming) {
      gsap.to(toggleButtonRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(toggleButtonRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  const buttonClassNames = `toggle-button${!isDarkRoom ? " light" : ""}`;

  return (
    <>
      <button
        ref={toggleButtonRef}
        className={buttonClassNames}
        onClick={handleToggle}
      >
        <svg
          width="48"
          height="18"
          viewBox="0 0 31 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="9.99939"
            y="5.55542"
            width="10.6667"
            height="0.888892"
            fill="currentColor"
          />
          <rect
            x="20.2013"
            y="6"
            width="6.65685"
            height="6.65685"
            transform="rotate(-45 20.2013 6)"
            stroke="currentColor"
          />
          <rect
            x="1.29289"
            y="6"
            width="6.65685"
            height="6.65685"
            transform="rotate(-45 1.29289 6)"
            stroke="currentColor"
          />
        </svg>
      </button>
    </>
  );
};

export default RoomToggleButton;
