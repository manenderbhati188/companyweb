import React from "react";
import style from "./index.module.scss";
import feature from "../../assests/icons/features.png";
const Choose = () => {
  return (
    <div className={style.caintainer}>
      <div className={style.header}>Why Choose Us</div>
      <div className={style.content}>
        <div className={`${style.data} ${style.first}`}>
          <div className={style.service}>
            <h2>Experience</h2>
            <p>
            Professional website is essential for making a strong first impression, enhancing user experience, and driving growth. At ButterFly Digital Solution we create visually appealing and functional websites tailored to your needs, ensuring they are mobile-friendly and optimized for search engines
            </p>
          </div>
          <div className={style.service}>
            <h2>Products</h2>
            <p>
            We offer a range of web solutions, including custom website design and development, e-commerce platforms, and content management systems. Our products are crafted to enhance your online presence, incorporating the latest technologies and best practices to meet your specific needs.



            </p>
          </div>
          <div className={style.service}>
            <h2>Custom Products</h2>
            <p>
            we specialize in delivering tailor-made web solutions designed to meet your unique needs. Our custom products range from bespoke website designs to personalized e-commerce platforms, ensuring every detail aligns with your vision and goals.
            </p>
          </div>
        </div>
        <div className={style.image}>
          <img src={feature}></img>
        </div>
        <div className={`${style.data} ${style.second}`}>
          <div className={style.service}>
            <h2>Pricing</h2>
            <p>
            Our pricing is designed to be transparent and flexible, catering to a variety of needs and budgets. We offer competitive rates based on the complexity and scope of your project, with detailed quotes provided after an initial consultation. Whether you need a basic website or a fully customized solution, we ensure you receive high value and quality for your investment.


            </p>
          </div>
          <div className={style.service}>
            <h2>Delivery</h2>
            <p>
            We prioritize timely delivery without compromising quality. From initial design to final launch, we follow a structured process to ensure your project is completed on schedule. Our team keeps you informed at every stage, and we perform thorough testing to ensure your website functions
            </p>
          </div>
          <div className={style.service}>
            <h2>Approach</h2>
            <p>
            Our approach is centered around understanding your unique requirements and goals. We collaborate closely with you to develop a tailored strategy that aligns with your vision. By combining creativity with technical expertise, we create solutions that not only look great but also drive results. Your satisfaction is our top priority, and we’re committed to delivering exceptional outcomes.







            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
