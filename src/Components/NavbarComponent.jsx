import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


export default function NavbarComponent() {

    const navigate = useNavigate()
    return (
        <>
            <nav style={{ display: "flex", backgroundColor: "#222222", justifyContent: "space-evenly", alignItems: "center" }}>
                <div className="logo" style={{}}>
                    <img src="https://tse3.mm.bing.net/th?id=OIP.3A4NR5aerx3tvNEVKVv0KgHaHa&pid=Api&P=0&h=220" width={"80px"} alt="" />
                </div>
                <div className="links" style={{ width: "50%" }}>
                    <ul style={{ display: "flex", listStyle: "none", justifyContent: "space-between", width: "100%", color: "white" }}>

                    <Link to="./">Home</Link>
                  
                        <Link to="about">About</Link>
                        <Link to="Categories">Categories</Link>
                        <Link to="Collections">Collections</Link>
                        <Link to="products">L_Products</Link>
                       
                        <Link to="contact">Contact</Link>
                        <Link to="Services">Services</Link>
                       
                        <Link to="Help">Help</Link>
                        

                       
                        
                        
                       

                    </ul>
                </div>
                <div className="action-btns" >
                    <button onClick={()=>{navigate('login')}} style={{ width: "100px", height: "30px", marginRight: "5px" }}>Login</button>
                    <button onClick={()=>{navigate('Signup')}} style={{ width: "100px", height: "30px" }}>Signup</button>
                </div>
            </nav>
        </>
    )
}
