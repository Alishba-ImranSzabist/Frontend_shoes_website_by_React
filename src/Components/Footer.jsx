import React from 'react';

export default function Footer() {
  return (
    
    
    <div>
      <footer style={{ backgroundColor: "#222", color: "white", textAlign: "center", padding: "20px", width: "100%", fontFamily: "Arial, sans-serif" }}>
        <div style={{ maxWidth: "1200px", margin: "auto" }}>
          {/* Logo and About */}
          <div style={{ marginBottom: "15px" }}>
            <h2 style={{ margin: "0", fontSize: "22px" }}>Your Website</h2>
            <p style={{ fontSize: "14px", color: "#bbb" }}>Providing quality content and services since 2025.</p>
          </div>

          {/* Quick Links */}
          <div style={{ marginBottom: "15px" }}>
            <a href="#" style={{ color: "#bbb", textDecoration: "none", margin: "0 10px" }}>Home</a> |
            <a href="#" style={{ color: "#bbb", textDecoration: "none", margin: "0 10px" }}>About</a> |
            <a href="#" style={{ color: "#bbb", textDecoration: "none", margin: "0 10px" }}>Services</a> |
            <a href="#" style={{ color: "#bbb", textDecoration: "none", margin: "0 10px" }}>Contact</a>
          </div>

          {/* Contact Info */}
          <div style={{ marginBottom: "15px" }}>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>📍 123 Street, City, Country</p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>📧 Email: info@yourwebsite.com</p>
            <p style={{ margin: "5px 0", fontSize: "14px" }}>📞 Phone: +123 456 7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "18px", margin: "0 10px" }}>🌐 Facebook</a>
            <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "18px", margin: "0 10px" }}>🐦 Twitter</a>
            <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "18px", margin: "0 10px" }}>📷 Instagram</a>
            <a href="#" style={{ color: "#bbb", textDecoration: "none", fontSize: "18px", margin: "0 10px" }}>💼 LinkedIn</a>
          </div>

          {/* Copyright */}
          <div style={{ marginTop: "15px", fontSize: "12px", color: "#888" }}>
            &copy; 2025 Your Website | All Rights Reserved
          </div>
        </div>
      </footer>
   

    </div>
  );
}
