import React from 'react';
import  HeroImg from"../../Assests/Hero.png"
import styles from "./HeroImage.module.css"
import heroPeice from "../../Assests/HeroPeice.png"

const HeroImage = () => {
  return (
    <div className={styles.container}>
      <div >
      <img src={HeroImg} alt='hero-img' className={styles.img}/>
      </div>
      
     <div className={styles.background}>
      <img src={heroPeice} alt='hero' className={styles.heroCut}/>
     </div>
       
    </div>
  );
}

export default HeroImage;
