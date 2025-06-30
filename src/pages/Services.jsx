import React from 'react'

export default function Services() {
  return (
    <div>

      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f4', margin: '0', padding: '0' }}>
        
        {/* Header Section */}
        <section style={{
          textAlign: 'center',
          padding: '50px 20px',
          backgroundColor: '#333',
          color: '#fff'
        }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Our Services</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Explore the services we offer to cater to your needs!</p>
        </section>

        {/* Services Section */}
        <section style={{ maxWidth: '1000px', margin: '40px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', color: '#333' }}>What We Offer</h2>
          
          <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
            <div style={{ width: '30%', marginBottom: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Free Shipping</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Enjoy free shipping on all orders above $50. No hidden fees or extra charges.</p>
            </div>

            <div style={{ width: '30%', marginBottom: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>24/7 Customer Support</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Our customer support team is available 24/7 to assist you with any inquiries or issues.</p>
            </div>

            <div style={{ width: '30%', marginBottom: '20px', textAlign: 'center' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Easy Returns</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>We offer hassle-free returns within 30 days. Simply follow our easy return process.</p>
            </div>
          </div>
        </section>

        {/* Service Details Section */}
        <section style={{ maxWidth: '1000px', margin: '40px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', color: '#333' }}>Service Details</h2>
          
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '2rem', color: '#333' }}>1. Premium Membership</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Join our Premium Membership to get exclusive benefits like early access to sales, additional discounts, and special offers!
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '2rem', color: '#333' }}>2. Personalized Shopping</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Receive personalized shopping recommendations based on your preferences and browsing history for a better shopping experience.
            </p>
          </div>

          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ fontSize: '2rem', color: '#333' }}>3. Gift Wrapping Services</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>
              Add an extra special touch to your gifts with our premium gift wrapping services. Available for all products.
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section style={{ backgroundColor: '#f9f9f9', padding: '40px 20px', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Customer Testimonials</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#555' }}>Here’s what our customers say about our services:</p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <div style={{ width: '250px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <p style={{ fontSize: '1rem', color: '#555' }}>“The free shipping is a game-changer! I can order as much as I want without worrying about extra fees.”</p>
              <p style={{ fontSize: '1.1rem', color: '#333', fontWeight: 'bold' }}>John Doe</p>
            </div>

            <div style={{ width: '250px', backgroundColor: '#fff', padding: '20px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
              <p style={{ fontSize: '1rem', color: '#555' }}>“Great customer service. They helped me with my order issues quickly and efficiently!”</p>
              <p style={{ fontSize: '1.1rem', color: '#333', fontWeight: 'bold' }}>Jane Smith</p>
            </div>
          </div>
        </section>

        
      </div>

    </div>
  )
}
