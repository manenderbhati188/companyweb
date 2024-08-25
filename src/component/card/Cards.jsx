import React, { useEffect, useState } from "react";
import style from "./index.module.scss"; // Assuming you have SCSS modules configured
import carddata from "../../assests/carddata"; // Assuming you have data imported correctly

const Cards = () => {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 300 && !animated) {
        setAnimated(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animated]);

  return (
    <div className={style.service_card}>
      <div className={style.service_top}>
        <h1 className={style.service}>services</h1>
        <div className={style.under}></div>
        <div className={style.checkservice}>
          <p>Check our Services</p>
        </div>
        <div className={style.webtech}>
          <p>
            Butterfly Digital Solution provides turn-key digital marketing
            services, which means we offer everything your business needs to
            execute its marketing strategy. Explore our services now to get
            started!
          </p>
        </div>
      </div>
      <div className={style.cardlist}>
        {carddata.map((card, id) => (
          <div className={`${style.card} ${animated ? style.animated : ""}`}
            key={id}
            >
            <div className={style.card_img}>
              <img
                src={card.image}
                className={style.image}
                alt="done"
              />
            </div>
            <div className={style.header}>
              <h1 className={style.title}>{card.title}</h1>
              <div className={style.content}>{card.description}</div>
              {/* <hr className={style.line} /> */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
