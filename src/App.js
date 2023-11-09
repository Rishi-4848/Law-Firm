
import { useState } from 'react';
import styles from'./App.css';
import AboutPage from './Components/AboutPage/AboutPage';
import AttorneyPage from './Components/AttorneysPage/AttorneyPage';
import ContactPage from './Components/ContactPage/ContactPage';
import FaqSection from './Components/FaqSection/FaqSection';
import Footer from './Components/Footer/Footer';
import HomePage from './Components/HomePage/HomePage';
import Navbar from './Components/NavBar/Navbar';
import PracticePage from './Components/PracticePage/PracticePage';
import {Route,Routes} from "react-router-dom";
import Thanks from './Components/ThanksPage/Thanks';

function App() {
  const [ contact,setContact] = useState(false)
  const [name,setName] = useState("");
  const [mail,setMail] = useState("");


  return (
    <div className={styles.App}>
     
        <Navbar setContact={setContact} />
        <Routes>
          <Route exact path='/'  element={<HomePage setContact= {setContact} />}/>
        
          <Route path='/attorney' element={<AttorneyPage />}/>
       
          <Route path='/practice' element={<PracticePage />}/>
      
          <Route path='/about' element={<AboutPage />}/>

          <Route path='/thanks' element={<Thanks name={name} mail={mail} />}/>
        </Routes>
        <FaqSection/>
        <Footer/>
        {contact === true ? (<ContactPage nameProp = {setName} mailProp={setMail} setContact={setContact} />):(null)}
       
    </div>
  );
}

export default App;
