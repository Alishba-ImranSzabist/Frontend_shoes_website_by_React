import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

export default function Aboutus() {
  return (
    <div>
      
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '40px', backgroundColor: '#fff', borderRadius: ' 15px',border: "2px solid #ddd", fontFamily: 'Arial, sans-serif' }}>
      <header style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ fontSize: '3.5rem', color: '#333', borderBottom: '4px solid #000', display: 'inline-block', paddingBottom: '10px', fontWeight: 'bold' }}>
          About Us
        </h1>
      </header>
      <section style={{ textAlign: 'left', lineHeight: '1.8', fontSize: '1.1rem', color: '#555', padding: '0 20px' }}>
        <p style={{ marginBottom: '25px' }}>
          Welcome to our shoe store! We believe the right pair of shoes can transform your style and comfort. Our love for footwear drives us to provide a wide range of designs that suit every need — from casual to elegant.
        </p>
        <p style={{ marginBottom: '25px' }}>
          Our mission is simple: To provide high-quality shoes that not only offer perfect fit but also durability and timeless style. We select premium materials and ensure each shoe is crafted with utmost care.
        </p>
        <p style={{ marginBottom: '25px' }}>
          We're committed to making your shopping experience smooth and enjoyable. Thank you for choosing us to accompany you on your journey to the perfect pair of shoes!
        </p>
      </section>
      <footer style={{ textAlign: 'center', marginTop: '40px', color: '#999' }}>
        <p>&copy; 2025 ShoeStore. All rights reserved.</p>
      </footer>
    </div>
    </div>
  )
}
