import React from 'react';
import styles from "./Thanks.module.css"
import { useNavigate } from 'react-router-dom';

const Thanks = ({name,mail}) => {
  
  const navigate = useNavigate();

const thanksFunction = ()=>{
  navigate("/")
 
}

  return (
    <div className={styles.wrapper}>
      <h1>
        Thank You for Reaching Us ! {name}
      </h1>
      <h3>we will Contact your Mail {mail} before 24 hours</h3>
      <div>
      <h5>click here to redirect to Home Page</h5>
      <div className={styles.button} onClick={thanksFunction}>
        Home
      </div>
      </div>
    
    </div>
  );
}

export default Thanks;
