import React from 'react';
import styles from './index.module.scss'; // Import the SCSS module

const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Our Services</h2>
      <div className={styles.servicesList}>
        <div className={styles.serviceItem}>
          <h3>Web Development</h3>
          <p>We build responsive and dynamic websites that cater to all your business needs.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>App Development</h3>
          <p>Our team creates user-friendly mobile applications for both Android and iOS platforms.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Digital Marketing</h3>
          <p>Boost your online presence with our comprehensive digital marketing strategies.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Networking Solutions</h3>
          <p>We provide reliable networking solutions to ensure seamless connectivity for your business.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>SEO Optimization</h3>
          <p>Increase your website's visibility on search engines with our expert SEO services.</p>
        </div>
        <div className={styles.serviceItem}>
          <h3>Content Management</h3>
          <p>Manage your digital content effortlessly with our custom CMS solutions.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
