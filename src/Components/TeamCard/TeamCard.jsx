import React from 'react';
import styles from "./TeamCard.module.css"

const TeamCard = ({image,name,cases}) => {
  return (
    <div className={styles.wrapper}>
       <div className={styles.cardContainer}>
      <div className={styles.image}>
        <img src={image} alt={name}/>
      </div>
      <div className={styles.about}>
      <h2>{name}</h2>
      <h5>{cases} Cases</h5>
      </div>
     
    </div>
    </div>
   
  );
}

export default TeamCard;
