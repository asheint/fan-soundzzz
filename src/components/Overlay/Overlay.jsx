import React, { useEffect, useRef, useState } from "react";
import "./Overlay.scss";
import gsap from "gsap";
import { useNavigate } from "react-router";
import { usePageTransitionStore } from "../../stores/pageTransitionStore";

const Overlay = () => {
  const overlayRef = useRef();
  let navigate = useNavigate();

  const { isEntering, isExiting, delay } = usePageTransitionStore();

  useEffect(() => {
    if (isEntering) {
      gsap
        .timeline()
        .set(overlayRef.current, { display: "block", opacity: 0 })
        .to(overlayRef.current, {
          opacity: 1,
          duration: 1,
          delay: delay,
        });
    }
  }, [isEntering]);

  useEffect(() => {
    if (isExiting) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.9,
        onComplete: () => {
          gsap.set(overlayRef.current, { display: "none" });
        },
      });
    }
  }, [isExiting]);

  const handleClick = () => {
    navigate("/");
  };

  return (
    <>
      <div onClick={handleClick} ref={overlayRef} className="overlay"></div>
    </>
  );
};

export default Overlay;
