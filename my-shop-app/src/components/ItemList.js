// src/components/ItemList.js
import React, { useState, useEffect } from 'react';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/items')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error('Error fetching items:', error));
  }, []);

  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  };

  const itemStyle = {
    border: '1px solid #ccc',
    padding: '16px',
    margin: '16px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    flex: '0 0 30%', // Adjust the width to fit 3 items per row
    boxSizing: 'border-box',
  };

  const buttonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <div>
      <h1>Items</h1>
      <div style={containerStyle}>
        {items.map((item, index) => (
          <div key={index} style={itemStyle}>
            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Quantity:</strong> {item.quantity}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <button style={buttonStyle}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;