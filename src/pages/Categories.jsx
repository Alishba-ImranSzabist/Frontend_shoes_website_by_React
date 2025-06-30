import React from 'react';

export default function Categories() {
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
          <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Shop by Category</h1>
          <p style={{ fontSize: '1.2rem', marginTop: '10px' }}>Browse through our wide range of footwear categories.</p>
        </section>

        {/* Categories Section */}
        <section style={{ maxWidth: '1200px', margin: '40px auto', backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', color: '#333' }}>Explore Our Shoe Categories</h2>

          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>

            {/* All Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>All Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Browse all of our shoes, ranging from casual to formal styles.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop All</button>
            </div>

            {/* Men's Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Men's Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Explore a range of stylish and comfortable shoes for men.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Men's</button>
            </div>

            {/* Women's Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Women's Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Find the perfect pair of shoes for every occasion for women.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Women's</button>
            </div>

            {/* Kids' Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Kids' Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Shop fun and comfortable shoes for your little ones.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Kids'</button>
            </div>

            {/* Sneakers Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Sneakers</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Find your perfect pair of sneakers for sports or casual wear.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Sneakers</button>
            </div>

            {/* Boots Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Boots</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Explore various types of boots including winter, hiking, and more.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1 ',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Boots</button>
            </div>

            {/* Sandals & Flip Flops Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Sandals & Flip Flops</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Perfect for summer! Shop sandals and flip-flops for comfort and style.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Sandals</button>
            </div>

            {/* Formal Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Formal Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Elegance at its finest. Shop our collection of dress shoes, oxfords, loafers, and more.</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Formal</button>
            </div>

            {/* Sports Shoes Category */}
            <div style={{ width: '22%', marginBottom: '30px', textAlign: 'center', backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
              <h3 style={{ fontSize: '1.8rem', color: '#333' }}>Sports Shoes</h3>
              <p style={{ fontSize: '1rem', color: '#555' }}>Specialized footwear for different sports and activities. Find your performance shoes!</p>
              <button style={{
                padding: '10px 20px',
                backgroundColor: '#0288d1',
                color: '#fff',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>Shop Sports</button>
            </div>

          </div>
        </section>

        

      </div>
    </div>
  )
}
