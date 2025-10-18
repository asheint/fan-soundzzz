import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useLocation } from "react-router";
import { SwitchTransition, Transition } from "react-transition-group";
import { useResponsiveStore } from "../stores/useResponsiveStore";
import { useToggleRoomStore } from "../stores/toggleRoomStore";
import { usePageTransitionStore } from "../stores/pageTransitionStore";
import "./Transition.scss";

const TransitionComponent = ({ children }) => {
  const nodeRef = useRef(null);

  const delay = 3.5;

  const location = useLocation();

  const [transitionTimeout, setTransitionTimeout] = useState({
    appear: 0,
    enter: 1000,
    exit: 900,
  });

  const { isMobile } = useResponsiveStore();
  const { isDarkRoom } = useToggleRoomStore();
  const { setIsEntering, setIsExiting, setDelay } = usePageTransitionStore();

  // Technically "correct", but actually not needed.
  // Basically setting the correct enter timeout given that sometimes we have a delay.
  useEffect(() => {
    if (location.pathname === "/") {
      setTransitionTimeout({ appear: 0, enter: 1000, exit: 900 });
      return;
    }

    let requireDarkRoom = false;
    if (location.pathname === "/about" || location.pathname === "/dev-work") {
      requireDarkRoom = true;
    }

    const needsDelay = requireDarkRoom !== isDarkRoom;

    if (needsDelay) {
      setTransitionTimeout({
        appear: 0,
        enter: 1000 + delay * 1000,
        exit: 900,
      });
      setDelay(delay);
    } else {
      setTransitionTimeout({ appear: 0, enter: 1000, exit: 900 });
      setDelay(0);
    }
  }, [location.pathname]);

  return (
    <SwitchTransition>
      <Transition
        nodeRef={nodeRef}
        key={location.pathname}
        timeout={transitionTimeout}
        in={true}
        appear={true}
        onEnter={() => {
          // No transition for Home Page
          if (location.pathname === "/") return;

          // Determine if camera transitioning for an added delay
          let flagDelay = false;
          let requireDarkRoom = false;
          if (
            location.pathname === "/about" ||
            location.pathname === "/dev-work"
          ) {
            requireDarkRoom = true;
          }

          if (requireDarkRoom !== isDarkRoom) {
            flagDelay = true;
          }

          // Global Store Logic
          setIsEntering(true);
          setIsExiting(false);
          setDelay(flagDelay ? delay : 0);

          // Page Transition
          if (!isMobile) {
            gsap.set(nodeRef.current, { x: "100%" });
            gsap.to(nodeRef.current, {
              x: 0,
              duration: 1,
              delay: flagDelay ? delay : 0,
              ease: "power3.out",
              onComplete: () => {
                setIsEntering(false);
              },
            });
          } else {
            gsap.set(nodeRef.current, { x: 0, y: "100%" });
            gsap.to(nodeRef.current, {
              y: 0,
              duration: 1,
              delay: flagDelay ? delay : 0,
              ease: "power3.out",
              onComplete: () => {
                setIsEntering(false);
              },
            });
          }
        }}
        onExit={() => {
          // Global Store Logic
          setIsExiting(true);
          setIsEntering(false);

          // Page Transition
          if (!isMobile) {
            gsap.set(nodeRef.current, { x: 0, y: 0 });
            gsap.to(nodeRef.current, {
              x: "100%",
              duration: 0.9,
              ease: "power4.in",
              onComplete: () => {
                setIsExiting(false);
              },
            });
          } else {
            gsap.set(nodeRef.current, { x: 0, y: 0 });
            gsap.to(nodeRef.current, {
              y: "100%",
              duration: 0.9,
              ease: "power4.in",
              onComplete: () => {
                setIsExiting(false);
              },
            });
          }
        }}
      >
        <div ref={nodeRef} className="page-wrapper">
          {children}
        </div>
      </Transition>
    </SwitchTransition>
  );
};

export default TransitionComponent;
