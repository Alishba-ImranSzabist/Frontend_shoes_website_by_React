import React from 'react'
import NavbarComponent from '../Components/NavbarComponent'

export default function Contact() {
  return (
    
    <div>
      
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f5f5f5', padding: '0' }}>
      {/* Contact Header */}
      <section style={{
        textAlign: 'center',
        padding: '60px 20px',
        backgroundColor: '#333',
        color: '#fff'
      }}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Contact Us</h1>
        <p style={{ fontSize: '1.2rem', marginTop: '20px' }}>We’d love to hear from you! Reach out to us for any questions or feedback.</p>
      </section>

      {/* Contact Form Section */}
      <section style={{ maxWidth: '800px', margin: '40px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', color: '#333' }}>Get In Touch</h2>
        <form>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ display: 'block', fontSize: '1.1rem', color: '#333', marginBottom: '8px' }}>Your Name</label>
            <input 
              type="text" 
              id="name" 
              name="name" 
              placeholder="Enter your name" 
              required 
              style={{
                width: '100%', 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
                fontSize: '1rem', 
                color: '#333'
              }} 
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="email" style={{ display: 'block', fontSize: '1.1rem', color: '#333', marginBottom: '8px' }}>Your Email</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email" 
              required 
              style={{
                width: '100%', 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
                fontSize: '1rem', 
                color: '#333'
              }} 
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="message" style={{ display: 'block', fontSize: '1.1rem', color: '#333', marginBottom: '8px' }}>Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              rows="5" 
              placeholder="Enter your message" 
              required 
              style={{
                width: '100%', 
                padding: '12px', 
                borderRadius: '5px', 
                border: '1px solid #ccc', 
                fontSize: '1rem', 
                color: '#333'
              }} 
            ></textarea>
          </div>

          <button type="submit" style={{
            width: '100%',
            padding: '12px',
            backgroundColor: '#0288d1',
            color: '#fff',
            fontSize: '1.2rem',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Send Message</button>
        </form>
      </section>

      {/* Address and Social Links Section */}
      <section style={{ textAlign: 'center', padding: '60px 20px', backgroundColor: '#333', color: '#fff' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Our Location</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115787.27509686034!2d67.07609599999998!3d24.920064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb3395298389223%3A0xf2394c66f1333f60!2sPakistan%20Air%20Force%20Museum!5e0!3m2!1sen!2s!4v1741092114427!5m2!1sen!2s" width="600" height="450" style={{border:"0", allowfullscreen:"" ,loading:"lazy" ,referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
        <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
          123 Shoe Street, Fashion City, FC 56789
        </p>

        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Follow Us</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.5rem'
          }}>Facebook</a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.5rem'
          }}>Instagram</a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" style={{
            textDecoration: 'none',
            color: '#fff',
            fontSize: '1.5rem'
          }}>Twitter</a>
        </div>
      </section>

     
    </div>
    </div>
  )
}
