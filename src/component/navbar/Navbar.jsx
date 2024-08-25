import React, { useEffect, useState } from "react";
import style from "./index.module.scss";
import logo from "../../assests/logo/website logo.png";

const Navbar = () => {
  const service = ["Services", "Industries", "Clients", "About us", "Contact Us"];
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
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {isMobile && menuOpen && (
        <div className={style.mobile_menu}>
          {service.map((item) => (
            <div className={style.mobile_service} key={item}>
              {item}
            </div>
          ))}
        </div>
      )}

      <div className={style.nav_img}>
        <img
          src="https://img.freepik.com/free-photo/creative-designers-team-working-project-discussing-details_114579-2816.jpg?t=st=1720780754~exp=1720784354~hmac=1366076cae8623f19d89140c1ad1afcca5c872dda50e6dc62f107d964f19c283&w=1060"
          alt="Header"
        />
      </div>

      <div className={style.header_line}>
        <div>
          <h1 className={style.headertext}>
            Your Trusted Partner in <span className={style.itservice}>IT Services</span> and Solutions
          </h1>
        </div>
        <div>
          <p className={style.header_context}>
            We specialize in delivering comprehensive IT solutions tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
