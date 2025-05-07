import React, { useState, useContext } from 'react';
import './item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext'; // Import ShopContext

const Item = (props) => {
  const [currentsh, setcurrentsh] = useState(false);
  const { addToCart, cartItems } = useContext(ShopContext); // Use ShopContext
  
  // Get current item quantity in cart
  const cartItemCount = cartItems[props.id] || 0;

  // Handle add to cart button click
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation
    addToCart(props.id);
    console.log("Added to cart:", props.id); // Debug log
  };

  return (
    <div 
      onMouseEnter={() => setcurrentsh(true)} 
      onMouseLeave={() => setcurrentsh(false)}  
      className="card" 
      style={{width: "18rem", border: currentsh === true ? "black 2px solid" : null }}
    >
      <Link to={`/ProductDetail/${props.id}`}>
        <img src={props.image} className="card-img-top itemimg" alt={props.name}/>
      </Link>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <p className="card-text">{props.price}</p>
        <button 
          className="btn"
          onClick={handleAddToCart}
          style={{cursor: 'pointer'}}
        >
          Add to cart {cartItemCount > 0 && `(${cartItemCount})`}
        </button>
      </div>
    </div>
  );
}

export default Item;