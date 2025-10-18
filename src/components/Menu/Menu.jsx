import "./Menu.scss";
import { NavLink } from "react-router";
import { useToggleRoomStore } from "../../stores/toggleRoomStore";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaHome, FaFan, FaInfo, FaHeart } from 'react-icons/fa';

const Menu = () => {
  const { isDarkRoom, isBeforeZooming } = useToggleRoomStore();

  const menuRef = useRef();

  const buttonClassNames = `nav-button${!isDarkRoom ? " light" : ""}`;

  useEffect(() => {
    if (!menuRef.current) return;

    if (isBeforeZooming) {
      gsap.to(menuRef.current, {
        opacity: 0,
        duration: 1,
      });
    } else {
      gsap.to(menuRef.current, {
        opacity: 1,
        duration: 1,
      });
    }
  }, [isBeforeZooming]);

  return (
    <>
      <nav ref={menuRef} className="menu">
        <div className="first-row">
          <NavLink to="/">
            <FaHome className={buttonClassNames} size={15} />
          </NavLink>
          <NavLink to="/fan-models">
            <FaFan className={buttonClassNames} size={15} />
          </NavLink>
        </div>
        <div className="second-row">
          <NavLink to="/about">
            <FaInfo className={buttonClassNames} size={15} />
          </NavLink>
          <NavLink to="/support-us">
            <FaHeart className={buttonClassNames} size={15} />
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export default Menu;
