import React from 'react'
import '../Navbar.css';
const Navbar = () => {
  return (
   <div className='n-wrapper'>
   <diV className="n-left" >
       <div className='n-name'>Rashad</div>
       <span>toggle</span>
   </diV>
   <diV className="n-right">
       <div className='n-list'>
        <ul style={{listStyle:"none"}}>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
        </ul>
       </div>
       <button className='button'>
        Contact us
       </button>
    </diV>
   </div>
  )
}

export default Navbar