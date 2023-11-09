import React from 'react';
import Logo from '../Logo/Logo';
import NavTabs from '../NavTabs/NavTabs';
import {AiFillInstagram} from "react-icons/ai"
import {AiFillFacebook} from "react-icons/ai"
import {AiFillTwitterCircle} from "react-icons/ai"
import {BsPinterest} from "react-icons/bs"
import styles from "./Footer.module.css"

const Footer = () => {
  return (
    
    <div className={styles.footerContainer}>

      <div className={styles.footerHead}>
        <div className={styles.logo}>
        <Logo/>
      <NavTabs/>
        </div>
  
      <div  className={styles.social}>
        <AiFillInstagram/>
        <AiFillFacebook/>
        <AiFillTwitterCircle/>
        <BsPinterest/>
      </div>
      </div>

    

     <div className={styles.footerEnd}>
     
      <h5>© 2020 Acme. All right reserved.</h5>
     
       <h5>Privacy Policy</h5>
       <h5>Terms of Service</h5>
     </div>
     </div>
   
  );
}

export default Footer;
