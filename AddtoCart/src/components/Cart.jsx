// src/components/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cartItems, setCartItems }) => {
  const navigate = useNavigate();

  const handleRemoveFromCart = (id) => {
    const updatedCart = cartItems.filter(item => item.id !== id);
    setCartItems(updatedCart);
  };

  const handleQuantityChange = (id, increment) => {
    const updatedCart = cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + increment);
        return { ...item, quantity: newQuantity };
      }
      return item;
    });
    setCartItems(updatedCart);
  };

  const handleCheckout = () => {
    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    const discountedAmount = totalAmount * 0.9; // 10% discount
    alert(`Total Amount: $${totalAmount.toFixed(2)}\nDiscounted Amount: $${discountedAmount.toFixed(2)}`);
    
    // Clear cart and navigate to home
    setCartItems([]);
    navigate('/');
  };

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
              <button onClick={() => handleRemoveFromCart(item.id)}>Remove from Cart</button>
            </div>
          ))}
          <button onClick={handleCheckout} className="checkout-button">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
