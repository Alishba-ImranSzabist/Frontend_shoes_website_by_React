import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

export default function Help() {
  return (
    <div>
      <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '0' }}>
        
        {/* Help Header */}
        <section style={{
          textAlign: 'center',
          padding: '60px 20px',
          backgroundColor: '#333',
          color: '#fff'
        }}>
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Help & Support</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>Need help? We're here to assist you with any questions or concerns.</p>
        </section>

        {/* FAQ Section */}
        <section style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', color: '#333' }}>Frequently Asked Questions</h2>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>How can I track my order?</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>Once your order is shipped, you will receive a tracking number via email. You can use it to track your package on the shipping carrier’s website.</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>What is your return policy?</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>We offer a 30-day return policy on all unused and unworn items. For more details, visit our Return Policy page.</p>
          </div>

          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.5rem', color: '#333' }}>How do I contact customer support?</h3>
            <p style={{ fontSize: '1rem', color: '#555' }}>You can reach us by clicking the "Contact Us" button at the bottom of the page, or you can email us at support@shoestore.com.</p>
          </div>

        </section>

        {/* Help Contact Section */}
        <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#333', color: '#fff' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Still Need Help?</h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>If you didn't find the answer you were looking for, feel free to get in touch with our support team.</p>
          <a href="/contact" style={{
            padding: '12px 20px',
            backgroundColor: '#eee',
            color: 'black',
            fontSize: '1.2rem',
            textDecoration: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Contact Support</a>
        </section>

       
      </div>
    </div>
  )
}
