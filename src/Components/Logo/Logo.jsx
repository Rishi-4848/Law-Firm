import React from 'react';
import  img from "../../Assests/logo.png"
import styles from "./Logo.module.css"
import { useNavigate } from 'react-router-dom';
const Logo = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.wrapper} onClick={()=>{navigate("/")}}>
      <div className={styles.Logo}>
      <img src={img} alt="logo-img"/>
      </div>
     
      <div className={styles.title}>
        IGSTUDIO
      </div>
    </div>
  );
}

export default Logo;
