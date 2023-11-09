import React from 'react';
import styles from "./AttorneyPage.module.css"
import SuccessCard from '../SuccessCard/SuccessCard';
import cardIcon from "../../Assests/cardIcon.png"


const AttorneyPage = () => {
  return (
    <div className={styles.wrapper}>
    
      <div className={styles.intro}>
       <div className={styles.introduce}>
        <h1>
          Let's Introduce
        </h1>
        <h1>
          Ourself
        </h1>
       </div>
       <div className={styles.description}>
       <h1>Criminal Lawyer</h1>
       <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, deserunt corporis esse nisi culpa autem sed aperiam libero totam error eaque rerum earum nemo, magnam, perferendis itaque explicabo maiores velit?
       </div>
       </div>
      </div>
      <div className={styles.title}>
        <h1>Why Choose Us ?</h1>
      </div>
      <div className={styles.cardContainer}>
        <SuccessCard rate={98} image={cardIcon} height={60} width={60} page="attorney"/>
        <SuccessCard rate={100} image={cardIcon} height={60} width={60}  page="attorney"/>
        <SuccessCard rate={100} image={cardIcon} height={60} width={60}  page="attorney"/>
       
      </div>
     
    </div>
  );
}

export default AttorneyPage;
