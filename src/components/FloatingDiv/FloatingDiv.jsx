<<<<<<< HEAD
import React from "react";

import './FloatingDiv.css'


const FloatinDiv = ({img, text1, text2}) => {
  return (
    // darkMode
    <div className="floatingDiv">
      <img src={img} alt="" />
      <span>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
=======
import React from 'react'
import './FloatingDiv.css'

const FloatingDiv = ({image ,txt1, txt2}) => {
  return (
   <div className='floatingDiv'>
   <img src={image} alt=''/>
    <span>
       {txt1}
        <br/>
       {txt2}
    </span>
   </div>
  )
}

export default FloatingDiv
>>>>>>> origin/main
