import React, { useRef, useEffect } from "react";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import "./Logo.scss";
import gsap from "gsap";

const Logo = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();
  const logoRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();
  const timelineRef = useRef();

  const logoClassNames = `logo${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!logoRef.current) return;

    if (isBeforeZooming) {
      gsap.to(logoRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(logoRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  const handleMouseEnter = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    timelineRef.current = gsap.timeline();

    timelineRef.current
      .to(textRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 0.3,
        ease: "power2.in",
      })
      .set(imageRef.current, { display: "block" })
      .fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0,
          rotation: -180,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 0.5,
          ease: "back.out(1.7)",
        },
        "-=0.1"
      )
      .to(imageRef.current, {
        rotation: 360,
        duration: 1.2,
        ease: "power1.inOut",
        repeat: -1,
      });
  };

  const handleMouseLeave = () => {
    if (timelineRef.current) {
      timelineRef.current.kill();
    }

    timelineRef.current = gsap.timeline();

    timelineRef.current
      .to(imageRef.current, {
        opacity: 0,
        scale: 0,
        rotation: "+=180",
        duration: 0.4,
        ease: "power2.in",
      })
      .set(imageRef.current, { display: "none" })
      .to(
        textRef.current,
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        },
        "-=0.2"
      );
  };

  return (
    <>
      <div
        ref={logoRef}
        className={logoClassNames}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span ref={textRef} className="logo-text">
          FS
        </span>
        <img
          ref={imageRef}
          src="/media/fan-logo.png"
          alt="Fan Soundzzz Logo"
          className="logo-image"
          style={{ display: "none" }}
        />
      </div>
    </>
  );
};

export default Logo;
