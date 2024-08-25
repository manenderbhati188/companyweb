import React from 'react';
import style from './index.module.scss'; // Import the styles

const Banner = () => {
  return (
    <div className={style.nav}>
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
}

export default Banner;
