import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Cart = () => {

     const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'High Power Fusion',
      price: 18.60,
      quantity: 1,
      image: '/assets/images/img49.jpg',
    },
    {
      id: 2,
      name: 'Mass Gainer Extreme',
      price: 32.99,
      quantity: 2,
      image: '/assets/images/img48.jpg',
    },
  ]);

  const updateQuantity = (id, change) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);


  return (
    <>
    <div>
        <div className='cstm-cart-page'>
        <img src="assets/images/img51.jpg" className='img-fluid'></img>
        <div className='cstm-text-cart'>
            <p>CART PAGE</p>
        </div>
        </div>
    </div>



     <div className="cart-wrapper">
      <h1>Your Cart</h1>

      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p className="empty-cart">Your cart is empty.</p>
        ) : (
          cartItems.map(item => (
            <div key={item.id} className="cart-card">
              <img src={item.image} alt={item.name} className="product-img" />

              <div className="product-info">
                <h3>{item.name}</h3>
                <p>Rs.{item.price.toFixed(2)}</p>

                <div className="qty-controls">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                </div>
              </div>

              <div className="product-actions">
                <p>Total: Rs.{(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-btn" onClick={() => removeItem(item.id)}>Remove</button>
              </div>
            </div>
          ))
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="cart-summary">
          <h2>Subtotal: Rs.{subtotal.toFixed(2)}</h2>
         <NavLink to="/checkout"><button className="checkout-btn">Proceed to Checkout</button></NavLink> 
        </div>
      )}
    </div>
    </>
  )
}

export default Cart