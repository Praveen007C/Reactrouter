// src/components/Checkout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Checkout = ({ cartItems, totalAmount, setCartItems }) => {
  const navigate = useNavigate();
  const discount = 0.1; // 10% discount
  const discountedAmount = totalAmount * (1 - discount);

  const handleCheckout = () => {
    alert(`Total amount after discount: $${discountedAmount.toFixed(2)}`);
    // Clear the cart
    setCartItems([]);
    // Redirect to home page
    navigate('/');
  };

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <h3>Your Items:</h3>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <img src={item.image} alt={item.title} />
          <div>
            <h4>{item.title}</h4>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        </div>
      ))}
      <h3>Total Amount: ${totalAmount.toFixed(2)}</h3>
      <h3>Discounted Amount: ${discountedAmount.toFixed(2)}</h3>
      <button className="checkout-button" onClick={handleCheckout}>
        Checkout
      </button>
    </div>
  );
};

export default Checkout;
