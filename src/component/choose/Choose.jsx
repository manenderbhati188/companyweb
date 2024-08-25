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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
            </p>
          </div>
          <div className={style.service}>
            <h2>Products</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
            </p>
          </div>
          <div className={style.service}>
            <h2>Approach</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque, ratione. Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
            </p>
          </div>
          <div className={style.service}>
            <h2>Delivery</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, fugiat? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
            </p>
          </div>
          <div className={style.service}>
            <h2>Approach</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Doloribus, sunt Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus, eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, placeat!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
