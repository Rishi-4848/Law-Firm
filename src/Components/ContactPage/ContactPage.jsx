import React from 'react';
import styles from "./ContactPage.module.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = ({nameProp,mailProp,setContact}) => {
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");

  const navigate = useNavigate();


  const DataTransfer = ()=>{

   nameProp(name)

   mailProp(mail)

   setContact(false)

   navigate("/thanks")
  }

  return (
    <div className={styles.wrapper}>
      <h1>Subscribe Our NewsLetter</h1>
      <div className={styles.inputContainer}>
        <input placeholder='Name :' className={styles.input1} onChange={(e)=>setName(e.target.value)}/>
        <input placeholder='Enter your Email :' className={styles.input2} onChange={(e)=> setMail(e.target.value)}/>
        <div className={styles.button} onClick={DataTransfer}>
          Send
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
