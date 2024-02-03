import React from 'react'
import './Testimonials'
import{Swiper, SwiperSlide} from 'swiper/react'
const Testimonials = () => {
const clients =[
    {
        img: profilePicle1,
        review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam doloribus esse dolorem corporis sunt non accusamus quis similique eius dolor ducimus eveniet vitae cupiditate aspernatur error, laudantium, voluptate nam! ",
       
        
    },
    {
        img:profilePicle2,
        review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam doloribus esse dolorem corporis sunt non accusamus quis similique eius dolor ducimus eveniet vitae cupiditate aspernatur error, laudantium, voluptate nam!",
    },
    {
        img:profilePicle3,
        review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam doloribus esse dolorem corporis sunt non accusamus quis similique eius dolor ducimus eveniet vitae cupiditate aspernatur error, laudantium, voluptate nam!",
    },
    {
        img: profilePicle4,
        review:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione totam doloribus esse dolorem corporis sunt non accusamus quis similique eius dolor ducimus eveniet vitae cupiditate aspernatur error, laudantium, voluptate nam!",
    }
    
]

  return (
   <div className='t-wrapper'>
    <div className='t-heading'>
        <span>Client always get </span>
        <span>Exceptional Work</span>
        <span>from me..</span>
        <div className='blur t-blure-1' style={{background: "var(--purple)"}}></div>
        <div className='blur t-blure-2' style={{background: "skyblue"}}></div>

    </div>
    {/* slider */}
    <Swiper>
     {clients.map((client, index)=>{
   return(
    <SwiperSlide key={index}>
        <img src={client.img} alt=''/>
        <span>{client.review}</span>
    </SwiperSlide>
   )
     })}
    </Swiper>

   </div>
  )
}

export default Testimonials