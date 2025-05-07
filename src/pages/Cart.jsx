import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import './Cart.css'; // You'll need to create this CSS file

const Cart = () => {
  const { 
    AllProducts, 
    cartItems, 
    addToCart, 
    removeFromCart, 
    updateCartItemCount, 
    getTotalCartAmount, 
    checkout 
  } = useContext(ShopContext);

  const totalAmount = getTotalCartAmount();

  // Check if cart is empty
  const isCartEmpty = Object.keys(cartItems).every(item => cartItems[item] === 0);

  // Handle checkout process
  const handleCheckout = () => {
    const result = checkout();
    if (result.success) {
      alert(result.message);
    }
  };

  return (
    <div className="cart-container">
      <h1>Your Cart Items</h1>
      
      <div className="cart-items">
        {isCartEmpty ? (
          <p className="cart-empty-message">Your cart is empty</p>
        ) : (
          AllProducts.map((product) => {
            if (cartItems[product.id] > 0) {
              const priceValue = parseFloat(product.price.replace('₫', ''));
              const itemTotal = priceValue * cartItems[product.id];
              
              return (
                <div className="cart-item" key={product.id}>
                  <img src={product.image} alt={product.name} />
                  
                  <div className="cart-item-details">
                    <h2>{product.name}</h2>
                    <p className="cart-item-price">{product.price}</p>
                  </div>
                  
                  <div className="cart-item-controls">
                    <div className="quantity-controls">
                      <button onClick={() => removeFromCart(product.id)}>-</button>
                      <input
                        type="number"
                        value={cartItems[product.id]}
                        onChange={(e) => updateCartItemCount(Number(e.target.value), product.id)}
                      />
                      <button onClick={() => addToCart(product.id)}>+</button>
                    </div>
                    
                    <p className="item-total">₫{itemTotal.toLocaleString()}</p>
                  </div>
                </div>
              );
            }
            return null;
          })
        )}
      </div>
      
      {!isCartEmpty && (
        <div className="cart-summary">
          <h3>Summary</h3>
          <div className="cart-total">
            <p>Total:</p>
            <p>₫{totalAmount.toLocaleString()}</p>
          </div>
          <button className="checkout-button" onClick={handleCheckout}>
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;