// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to the Product Store</h1>
      <p>Explore our amazing collection of products.</p>
      <Link to="/products">
        <button className="explore-button">Explore Products</button>
      </Link>
    </div>
  );
};

export default Home;
