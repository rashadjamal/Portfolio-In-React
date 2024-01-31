import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../Card/Card'
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
  <button className='button s-button'>Downlod CV</button>
  <div className='blur  s-blur1' style={{background: "#ABF1FF94"}}></div>
  </div>
    {/* right side */}
    <div className='cards'>

   <div>
    <Card
     emoji ={HeartEmoji}
     heading={'Design'}
     detail={"Figma , Sketch Photoshop , Adobe ,xd"}
     />
   </div>
 
    </div>
  </div>
  )
}

export default Services