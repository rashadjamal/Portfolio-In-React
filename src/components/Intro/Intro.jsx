<<<<<<< HEAD
import React, { useContext } from "react";
import "./Intro.css";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import Rashad from "../../img/rashad.png"
import glassesimoji from "../../img/glassesimoji.png";
import thumbup from "../../img/thumbup.png";
import crown from "../../img/crown.png";
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          {/* yahan change hy darkmode ka */}
          <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
          <span>Rashad Jamal</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        {/* social icons */}
        <div className='i-icons'>
=======
import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png'
import Instagram  from '../../img/instagram.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import rashad from '../../img/rashad.png'

import thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import glassesimoji from '../../img/glassesimoji.png'
const Intro = () => {
  return (
<div className='intro'>
  <div className='i-left'>
    <div className='i-name'>
        <span>Hy! I am </span>
        <span>Rashad Jamal </span>
        <span>Fronted Devloper with high level of Experience in web designing and devlopment, producting the Quality work</span>
    </div>
    <button className='button i-button'>Hire me
    </button>

     <div className='i-icons'>
>>>>>>> origin/main
        <a href='https://github.com/rashadjamal'>
        <img src={Github}  alt='' />
        </a>
       
        <a href='https://www.linkedin.com/in/rashad-jamal-ansari-18809b291/'>
        <img src={LinkedIn}  alt='' />
        </a>
       
        <a href='https://www.instagram.com/iamrashad_ja?igsh=MThkbzR5eDVrZTVxMQ=='>
        <img src={Instagram}  alt='' />
        </a>
       
        
    
        </div>
<<<<<<< HEAD
      </div>
      {/* right image side */}
      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={Rashad} alt="" />
        {/* animation */}
        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesimoji}
          alt=""
        />

        <motion.div
          initial={{ top: "-4%", left: "74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Web" text2="Developer" />
        </motion.div>

        {/* animation */}
        <motion.div
          initial={{ left: "9rem", top: "18rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
        >
          {/* floatinDiv mein change hy dark mode ka */}
          <FloatinDiv img={thumbup} text1="Best Design" text2="Award" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
=======
  </div>
  <div className='i-right'>
         <img src={Vector1} alt='' /> 
         <img src={Vector2} alt='' /> 
         <img src={rashad} alt='' /> 
         <img src={glassesimoji} alt='' /> 
         <div style={{top:'-4%' , left:"70%"}}>
      <FloatingDiv image={Crown} txt1='web' txt2='Developer'/>
         </div>
         <div style={{top:'18rem', left:'0rem'}}>
          <FloatingDiv image={thumbup} 
          txt1='Best Design' txt2='Award'/>
         </div>
         {/* blur divs */}
        <div className='blur'
        style={{background: "rgb(238 210 255)"}}
        > </div>
        <div className='blur'
        style={{
          background:'#C1F5FF',
          top:'17rem',
          width:'21rem',
          height:'11rem',
           left:'-9rem'
        }}
        ></div>
         </div>
</div>
  )
}

export default Intro
>>>>>>> origin/main
