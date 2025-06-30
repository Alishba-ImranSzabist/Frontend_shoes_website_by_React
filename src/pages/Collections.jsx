import React from 'react';

export default function Collections() {
  return (
    <div>
      {/* Header Section */}
      <div style={{ backgroundColor: '#333', color: 'white', textAlign: 'center', padding: '20px' }}>
        <h1 style={{ margin: '0' }}>Our Shoe Collections</h1>
        <p style={{ fontSize: '18px' }}>Explore our best-selling and newest shoes!</p>
      </div>

      {/* Collection Container */}
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', padding: '20px' }}>

        {/* Collection Item 1 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse2.mm.bing.net/th?id=OIP.qtzQXvxmm-uWm6cFCVfE-gHaHa&pid=Api&P=0&h=220" alt="Shoe 1" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Running Shoes</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Comfortable and perfect for running</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$59.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

        {/* Collection Item 2 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.ooldc4kHwSVzwsgp59MgvQHaHa&pid=Api&P=0&h=220" alt="Shoe 2" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Leather Boots</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Durable leather boots for everyday wear</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$89.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

        {/* Collection Item 3 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse4.mm.bing.net/th?id=OIP.Fo4liQlVfKzBuNHzFbP1nwHaHa&pid=Api&P=0&h=220" alt="Shoe 3" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Casual Sneakers</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Stylish and comfortable for casual outings</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$49.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

        {/* Collection Item 4 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse3.mm.bing.net/th?id=OIP.jPg77r89i8W1-Vw6UYmJEAHaHa&pid=Api&P=0&h=220" alt="Shoe 4" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Running Sneakers</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Perfect for sports and outdoor activities</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$79.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

        {/* Collection Item 5 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse4.mm.bing.net/th?id=OIP.wkanqsYuBokuOCSdBbhy2wHaHa&pid=Api&P=0&h=220" alt="Shoe 5" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Summer Sandals</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Light and breathable for summer</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$29.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

        {/* Collection Item 6 */}
        <div style={{ backgroundColor: 'white', margin: '10px', padding: '20px', width: '250px', textAlign: 'center', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', transition: 'transform 0.3s' }}>
          <img src="https://tse1.mm.bing.net/th?id=OIP.YOAoarBetBlg7lOQwlwwLAHaHa&pid=Api&P=0&h=220" alt="Shoe 6" style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
          <h3 style={{ margin: '10px 0', fontSize: '18px', color: '#333' }}>Formal Loafers</h3>
          <p style={{ fontSize: '16px', color: '#777', margin: '5px 0' }}>Perfect for formal occasions</p>
          <div style={{ fontSize: '18px', color: '#e60000', fontWeight: 'bold', margin: '10px 0' }}>$99.99</div>
          <a href="#" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>Add to Cart</a>
        </div>

      </div>
    </div>
  );
}
