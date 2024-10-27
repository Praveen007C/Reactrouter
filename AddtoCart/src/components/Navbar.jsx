// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ categories, onCategoryChange }) => {
  return (
    <nav className="navbar">
      <h1>Product Store</h1>
      <div className="category-filter">
        <Link to="/" onClick={() => onCategoryChange('')}>
          <button>All Categories</button>
        </Link>
        {categories.map(category => (
          <Link key={category} to="/" onClick={() => onCategoryChange(category)}>
            <button>{category}</button>
          </Link>
        ))}
      </div>
      <Link to="/cart">
        <button className="cart-button">Cart</button>
      </Link>
    </nav>
  );
};

export default Navbar;
