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