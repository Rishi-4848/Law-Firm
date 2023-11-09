import React from 'react';
import styles from "./AboutPage.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import client1 from "../../Assests/client1.png"
import client2 from "../../Assests/client2.png"
import client3 from "../../Assests/client3.png"
import SuccessCard from '../SuccessCard/SuccessCard';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
import TeamCard from '../TeamCard/TeamCard';
import team1 from "../../Assests/team1.png";
import team2 from "../../Assests/team2.png"
import team3 from "../../Assests/team3.png"
import team4 from "../../Assests/team4.png"
import team5 from "../../Assests/team5.png"
import team6 from "../../Assests/team6.png";
const AboutPage = () => {
  return (
    <div>
     
      <div>
      <div className={styles.title}>
        <h1>What says our</h1>
        <h1>happy clients</h1>
      </div>
      <div className={styles.swiperContainer}>
      <Swiper
         modules={[Navigation]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <SuccessCard name="Jane Cooper" bgColor=" #E3B748" color="yellow"  image={client1}/>
      </SwiperSlide>
      <SwiperSlide>
         <SuccessCard name="Devon Lane" image={client2}/>
      </SwiperSlide>
      <SwiperSlide>
       <SuccessCard  name="Robert Fox" image={client3}/>
      </SwiperSlide>
      <SwiperSlide>
        <SuccessCard name="Jane Cooper"  image={client1}/>
      </SwiperSlide>
      <SwiperSlide>
         <SuccessCard name="Devon Lane" image={client2}/>
      </SwiperSlide>
      <SwiperSlide>
       <SuccessCard  name="Robert Fox" image={client3}/>
      </SwiperSlide>
     
      ...
    </Swiper>
      </div>
      </div>

      <div className={styles.teamContainer}>
        <div>
        <h1>Our Team</h1>
        </div>
       <div className={styles.cardContainer}>
        <TeamCard image={team1} name="Daniel Def" cases="301" className={styles.teamCard}/>
        <TeamCard image={team2} name="Sanfole" cases="850"/>
        <TeamCard image={team3} name="Cesforila" cases="470"/>
        <TeamCard image={team4} name="Collen" cases="180"/>
        <TeamCard image={team5} name="Haldone" cases="212"/>
        <TeamCard image={team6} name="Nik Jeo" cases="350"/>
       </div>
      </div>
     
    
    </div>
  );
}

export default AboutPage;
