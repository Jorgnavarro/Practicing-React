import React from 'react'
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import img_footer from '../images/DH.png'
import img_fb from '../images/ico-facebook.png';
import img_ig from '../images/ico-instagram.png';
import img_tiktok from '../images/ico-tiktok.png';
import img_wp from '../images/ico-whatsapp.png';
import styles from './modules/footer.module.css'
import { ContextGlobal } from './utils/globalContext';

const Footer = () => {
    const [footerBg, setFooterBg] = useState("");
    const {currentTheme} = useContext(ContextGlobal);

    useEffect(()=>{
      if(currentTheme === "light"){
          setFooterBg("defaultBgFooter")
      }else{
          setFooterBg("dark");
      }
    }, [currentTheme])
  return (
    <footer className={footerBg}>
        <div className={styles.container_logo}>
          <p>Powered by</p>
          <img src={img_footer} alt='DH-logo' />
        </div>
        <div className={styles.container_icons}>
          <img src={img_fb} alt='DH-logo' />
          <img src={img_ig} alt='DH-logo' />
          <img src={img_tiktok} alt='DH-logo' />
          <img src={img_wp} alt='DH-logo' />
        </div>
    </footer>
  )
}

export default Footer
