import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function PageProduct() {


  const location = useLocation()
  console.log(location.state)
  const { title, description, price, imagurl } = location.state
  return (
    <div className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* Product Container */}
      <div className="flex flex-wrap md:flex-nowrap items-center" style={{ display: "flex", justifyContent: "center" }}>
        {/* Product Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={imagurl}
            alt="Under Armour Men's Charged Assert 10 Running Shoe" style={{ width: '600px', height: '70vh', boxShadow: "10px 10px 5px #aaaaaa", border: "1px solid #BFBFBF", margin: "10px" }}
            className="w-full max-w-md rounded-lg"
          />
        </div>

        {/* Product Details */}
        <div className="w-full md:w-1/2 md:pl-10 flex flex-col" style={{ display: "flex", justifyContent: "space-around", flexDirection: 'column', alignItems: 'center' }}>
          {/* Product Title */}
          <h2 className="text-3xl font-bold text-gray-800" style={{ fontSize: '25px', }}>
            {title}
          </h2>

          <div className="descrip" style={{display:'flex',alignItems:"center"}}>
            <p>
              {description}
            </p>
          </div>
          {/* Rating */}
          <div className="text-yellow-500 flex items-center mt-2" style={{}}>
            ⭐⭐⭐⭐☆ <span className="ml-2 text-gray-600">(11,989 ratings)</span>
          </div>
          {/* Price */}
          <p className="text-red-600 text-2xl font-semibold mt-2" style={{ color: '#e60000', fontWeight: 'bold', fontSize: '20px' }}>
            {price}
          </p>
          {/* Size Selector */}
          <div
            className="mt-4"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "8px",
            }}
          >
            <label
              className="text-gray-700 font-medium"
              style={{ fontSize: "18px", fontWeight: "bold" }}
            >
              Size:
            </label>
            <select
              className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              style={{
                width: "150px",
                padding: "10px",
                fontSize: "16px",
                borderColor: "#ccc",
                borderRadius: "6px",
                cursor: "pointer",
                backgroundColor: "#f9f9f9",
                transition: "all 0.3s ease",
              }}
            >
              <option>Select</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-600 transition duration-300" style={{ backgroundColor: '#0288d1', color: 'white', padding: '10px 20px', textDecoration: 'none', borderRadius: '5px', display: 'inline-block', marginTop: '10px', transition: 'background-color 0.3s' }}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
