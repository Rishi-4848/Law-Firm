import React from 'react';
import styles from "./FaqSection.module.css"
import Accordin from '../Accordin/Accordin';

const FaqSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
       <h1>FAQ</h1>
       <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas ab amet temporibus quod ipsam,
       </div>
      </div>
      <div>
        <Accordin question="Do I need a personal injury report?"/>
         <Accordin question="How much is my case worth?"/>
    <Accordin question="What should I do right after car accidect"/>
    <Accordin question=" How much is my case worth? "/>
     
      </div>
    </div>
  );
}

export default FaqSection;
