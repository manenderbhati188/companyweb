import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import logo from "../../assests/logo/website logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const service = ["Home", "services", "about", "contact"];
  const [scroll, setScroll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state

    // Add/remove no-scroll class based on menuOpen
    if (menuOpen) {
      document.body.classList.add(style.no_scroll);
    } else {
      document.body.classList.remove(style.no_scroll);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove(style.no_scroll); // Clean up on unmount
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuClose = () => {
    setMenuOpen(false);
  };

  return (
    <div className={style.nav}>
      <div className={`${style.nav_bar_header} ${scroll ? style.scrolled : ""}`}>
        <div className={style.nav_bar_logo}>
          <img src={logo} alt="Logo" />
        </div>
        {isMobile ? (
          <div className={style.hamburger} onClick={toggleMenu}>
              &#9776; 
          </div>
        ) : (
          <div className={style.nav_service}>
            {service.map((item) => (
              <div className={style.service} key={item}>
                <Link to={`/${item}`}>{item.toUpperCase()}</Link>
              </div>
            ))}
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className={style.mobile_menu}>
          {service.map((item) => (
              <div className={style.mobile_service} key={item} onClick={handleMenuClose}>
                <Link to={`/${item}`} onClick={handleMenuClose}>{item.toUpperCase()}</Link>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
