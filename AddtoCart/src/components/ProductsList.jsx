// src/components/ProductsList.jsx
import React from 'react';
import ProductCard from './ProductCard';

const ProductsList = ({ products, cartItems, setCartItems }) => {
  const handleAddToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      alert(`${product.title} is already in the cart.`);
    } else {
      setCartItems(prevItems => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="products-list">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))
      ) : (
        <p>No products found for this category.</p>
      )}
    </div>
  );
};

export default ProductsList;
