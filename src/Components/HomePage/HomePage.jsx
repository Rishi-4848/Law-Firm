import React from 'react';
import styles from "./HomePage.module.css"
import HeroImage from '../HeroImage/HeroImage';
import {FiMail} from "react-icons/fi"


const HomePage = ({setContact}) => {
  return (
    <div>
     
      <div className={styles.heroContainer}>

        <div className={styles.description}>
          <div className={styles.title}>
          <h1 >You don't have to</h1>
          <h1>  Fight them Alone.</h1>
          </div>
          
          <div className={styles.about}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum voluptate sit ea, voluptatem nemo sapiente totam debitis alias voluptatibus delectus vitae nesciunt fugit officiis rerum a iste? Iste, animi eum!
          </div>

          <div className={styles.mailContainer}>
            <FiMail/>
          <input placeholder='Enter your email address' className={styles.mailInput}/>
          <div className={styles.button} onClick={()=>setContact(true)}>
            Let's Talk
          </div>
          </div>
         
        </div>
      <HeroImage/>
      </div>
     
    
    </div>
  );
}

export default HomePage;
