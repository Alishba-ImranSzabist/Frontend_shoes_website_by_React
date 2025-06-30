import React from 'react'
import Bannerimg from "../assets/bannerimg.png"; // Adjust relative path


export default function Banner() {
  return (
    <div>
      
    
      <div style={{width:"100%",padding:"0px"}}>
      <div className="bannertext" style={{  backgroundImage: `url(${Bannerimg})`, backgroundSize: "cover",
        backgroundPosition: "center",height:"38vh",display:"flex",flexDirection:"column",padding:"200px 80px 60px 80px" }}>
            
        <h1 style={{color:"white",height:"60px"}}>👟 Step Into Style & Comfort</h1>
        <h3   style={{color:"white"}}>✨ Premium Shoes for Every Occasion</h3>
        <p  style={{color:"white"}}>Discover the perfect blend of fashion and functionality with our latest collection. Whether you're hitting the streets or stepping into the spotlight, our shoes are designed for ultimate comfort, durability, and style. Shop now and elevate your footwear game!</p>
        <button  style={{ width: "100px", height: "40px", marginRight: "5px",padding:"7px" ,borderRadius:"20px"}}>🛒 Shop Now</button>
      </div>
    </div>
    </div>
  )
}
 