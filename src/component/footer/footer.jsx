import React from 'react'
import style from './index.module.scss'
const Footer = () => {
  return (
    <div className={style.footer}>
        <div className={style.reserve}>
            <h1>©2024 Butterfly Digital Solution  All rights reserved.</h1>
        </div>
        <div className={style.footer_pri}>
            <div>Privacy Policy</div>
            <div>Terms of use</div>
            <div>Sitemap</div>
        </div>     
    </div>
  )
}

export default Footer