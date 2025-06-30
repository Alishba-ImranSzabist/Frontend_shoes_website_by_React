import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cardcomponent(props) {
    const navigate = useNavigate()
    const { title, description, price, imagurl } = props.product;
    

    const cardStyle = {
        width: "25%",
        border: "1px solid #ddd",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
        margin: "10px",
        boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    };

    const imgStyle = {
        width: "100%",
        height: "150px",
        objectFit: "cover",
        borderRadius: "8px",
    };

   

    return (
        
        <div style={cardStyle}>
            <img src={imagurl} alt={title} style={imgStyle} />
            <h1 style={{ fontSize: "18px", margin: "10px 0" }}>{title}</h1>
            <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
            <h4 style={{ color: "#e63946" }}>${price}</h4>
            <button   onClick={()=>{navigate('/PageProduct',{state:props.product})}}  style={{ padding: "8px 16px", background: "#0288d1", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}>Shop Now</button>
        </div>
        
    );
}
