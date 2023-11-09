import React from 'react';
import styles from "./PracticePage.module.css"
import business1 from "../../Assests/Business1.png"
import Partnership from "../../Assests/Partnership.png"
import RealEstate from "../../Assests/RealEstate.png"
import Business2 from "../../Assests/Business2.png"
import LandLord from "../../Assests/LandLord.png"
import ElderAbuse from "../../Assests/elderAbuse.png"
const PracticePage = () => {
  return (
    <div>
    
      <div className={styles.title}>
         <h1>Area of Practices</h1>
      </div>
     <div className={styles.gridContainer}>
        <div className={styles.gridCard1} >
          <img src={business1} alt='business'/>
          <h2 className={styles.cardTitle}>BUSINESS LAW</h2>
        
        </div>
        <div className={styles.gridCard2}>
          <img src={Partnership} alt='partnership'/>
          <h2 className={styles.cardTitle}>PARTNERSHIP LAW</h2>
         
        </div>
        <div className={styles.gridCard3}>
          <img src={RealEstate} alt='realEstate'/>
          <h2 className={styles.cardTitle}>REAL ESTATE LAW</h2>
          
        </div>
        <div className={styles.gridCard4}>
          <img src={Business2} alt='business'/>
          <h2 className={styles.cardTitle}>BUSINESS LAW</h2>
         
        </div>

        <div className={styles.gridCard5}>
          <img src={LandLord} alt='LandLord'/>
          <h2 className={styles.cardTitle}>LANDLORD DISPUTES</h2>
         
        </div>

        <div className={styles.gridCard6}>
          <img src={ElderAbuse} alt='ElderAbuse'/>
          <h2 className={styles.cardTitle}>ELDER ABUSE</h2>
         
        </div>
     </div>
   
    </div>
  );
}

export default PracticePage;
