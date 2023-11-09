import React, { useState } from 'react';
import Logo from '../Logo/Logo';
import styles from "./Navbar.module.css"
import NavTabs from '../NavTabs/NavTabs';

const Navbar = ({setContact}) => {
  const [page,setpage] = useState(false)

  const contactFunction = ()=>{
   setpage(!page)
   setContact(page)
  }
  return (
    <div className={styles.wrapper}>

     
      <Logo/>
      <NavTabs />
   
    
     <div className={styles.subdiv} onClick={()=>{contactFunction()}}>
      <div className={styles.button} >
        Contact Now
      </div>
      </div>
    
    </div>
  );
}

export default Navbar;
