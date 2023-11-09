import React from 'react';
import styles from "./NavTabs.module.css"
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const NavTabs = () => {
  const [currentPage,setCurrentPage] = useState("");

  const navigate = useNavigate();

  const homeFunction = ()=>{
    navigate("/")
    setCurrentPage("home")
   
  }

  const attorneyFunction = ()=>{
    navigate("/attorney")
    setCurrentPage("attorney")
  }

  const practiceFunction = ()=>{
    navigate("/practice")
    setCurrentPage("practice")
  }

  const aboutFunction = ()=>{
    navigate("/about")
    setCurrentPage("about")
  }


  return (
    <div>
      <ul className={styles.tabs}>
        <li className={currentPage === "home"?(styles.active):(null)}  onClick={homeFunction}>Home</li>
        <li className={currentPage === "attorney"?(styles.active):(null)} onClick={attorneyFunction}>Attorneys</li>
        <li className={currentPage === "practice"?(styles.active):(null)} onClick={practiceFunction}>Practice Areas</li>
        <li className={currentPage === "about"?(styles.active):(null)} onClick={aboutFunction}>About Us</li>
      </ul>
    </div>
  );
}

export default NavTabs;
