import React from 'react'

export default function Signup() {
  return (
    <div style={{height:""}}>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '110vh', backgroundColor: '#f2f2f2' }}>
        <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', width: '300px' }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Sign Up</h2>
          <form>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="fullName">Full Name</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" id="fullName" name="fullName" required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="email">Email</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="email" id="email" name="email" required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="username">Username</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="text" id="username" name="username" required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="password">Password</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="password" id="password" name="password" required />
            </div>
            <div style={{ marginBottom: '15px' }}>
              <label style={{ display: 'block', marginBottom: '5px' }} htmlFor="confirmPassword">Confirm Password</label>
              <input style={{ width: '100%', padding: '8px', border: '1px solid #ccc', borderRadius: '4px' }} type="password" id="confirmPassword" name="confirmPassword" required />
            </div>
            <button style={{ width: '100%', padding: '10px', backgroundColor: '#0288d1', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} type="submit">Sign Up</button>
          </form>
          <div style={{ textAlign: 'center', marginTop: '10px' }}>
            <p>Already have an account? <a href="#">Login</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}
