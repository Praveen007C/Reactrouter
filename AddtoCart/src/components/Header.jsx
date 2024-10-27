// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ categories, onCategoryChange, cartItems }) => {
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="header">
      <h1><Link to="/">Product Store</Link></h1>
      <div className="category-filter">
        <Link to="/products">
          <button onClick={() => onCategoryChange('')}>All Products</button>
        </Link>
        {categories.map(category => (
          <Link to="/products" key={category}>
            <button onClick={() => onCategoryChange(category)}>{category}</button>
          </Link>
        ))}
        <Link to="/cart">
          <button className="cart-button">Cart ({totalItems})</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
