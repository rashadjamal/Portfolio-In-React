<<<<<<< HEAD
import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './Resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>services</span>
        <spane>
          Lorem ispum is simpley dummy text of printing of printing Lorem
          <br />
          ispum is simpley dummy text of printing
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              "Lorem ispum dummy text are usually use in section where we need some random text"
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
=======
import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
import Resume from './Resume.pdf'
const Services = () => {
  return (
  <div className='services'>

  {/* left side */}
  <div className='awesome'>
  <span>My Awesome</span>
  <span>services</span>
  <span>Lorem is simply dumy text of printing of orinting Lorem
  <br/>
  ispum is simply dummy text printing
  </span>
 <a href={Resume} download>

 <button className='button s-button'>Downlod CV</button>
 </a>
  <div className='blur  s-blur1' style={{background: "#ABF1FF94"}}></div>
  </div>
    {/* right side */}
    <div className='cards'>

   <div style={{left: '14rem'}}>
    <Card
     emoji ={HeartEmoji}
     heading={'Design'}
     detail={"Figma , Sketch Photoshop , Adobe , xd"}
     />
   </div>
   {/* second card */}
   <div style={{ top:"12rem", left:"-4rem" }}>
    <Card
     emoji ={Glasses}
     heading={'Developer'}
     detail={"Html, Css, JavaScript , React"}

     />
        </div>
        {/* 3rd */}
        <div style={{ top:"19rem", left:"12rem" }}>
    <Card
     emoji ={Humble}
     heading={'UI/UX'}
     detail={"Lorem is simply dumy text of printing of orinting Lorem"
     }

     />
        </div>
        <div className='blur s-blur2' style={{background: "var(--purple)" }}>

        </div>
    </div>
  </div>
  )
}

export default Services
>>>>>>> origin/main
