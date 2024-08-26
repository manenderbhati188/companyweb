import React from 'react';
import styles from './index.module.scss';

const AboutPage = () => {
  return (
    <div className={styles.aboutPage}>
      <header className={styles.aboutHeader}>
        <h1>Butterfly Digital Solution Pvt Ltd</h1>
        <p>Your Partner in Digital Transformation</p>
      </header>
      <section className={styles.aboutCompany}>
        <div className={styles.contentWrapper}>
          <div className={styles.leftSide}>
            <img src="https://bhutani-alphathum.com/img/alphathum-banner.png" alt="Company Overview" />
          </div>
          <div className={styles.rightSide}>
            <h2>About Us</h2>
            <p>
              Butterfly Digital Solution Pvt Ltd is a leading digital solutions provider specializing in a wide range of services tailored to meet the needs of modern businesses. Our team of experts is dedicated to delivering high-quality solutions that drive growth and innovation.
            </p>
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower businesses with cutting-edge digital solutions that enhance their operational efficiency, improve customer experiences, and drive sustainable growth. We are committed to being at the forefront of technology and innovation to deliver exceptional value to our clients.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
