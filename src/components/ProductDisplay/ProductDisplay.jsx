import React, { useContext, useState } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../context/ShopContext';

const ProductDisplay = (props) => {
    const { addToCart, cartItems } = useContext(ShopContext);
    const [quantity, setQuantity] = useState(1);
    
    // Get current quantity in cart
    const itemsInCart = cartItems[props.id] || 0;
    
    // Handle adding to cart
    const handleAddToCart = () => {
        console.log("Adding to cart from product detail, ID:", props.id, "Quantity:", quantity);
        
        // Add item to cart multiple times based on quantity
        for (let i = 0; i < quantity; i++) {
            addToCart(props.id);
        }
        
        // Optional: Show a success message or animation
        alert(`Added ${quantity} item(s) to cart!`);
    };


    
    return (
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div>
                    <img src={props.image} alt={props.name} />
                </div>
            </div>
            <div className="productdisplay-right">
                <h1>{props.name}</h1>
                <div className="productdisplay-right-prices">
                    <p>{props.price}</p>
                </div>
                <div className="productSize">
                    <h1>Select Quantity</h1>
                    <div className="productRightSize">
                        <div onClick={() => setQuantity(prev => prev > 1 ? prev - 1 : 1)}>-</div>
                        <div>{quantity}</div>
                        <div onClick={() => setQuantity(prev => prev + 1)}>+</div>
                    </div>
                </div>
                <div className="productdisplay-right-prices">
                    <button 
                        onClick={handleAddToCart}
                    >
                        ADD TO CART {itemsInCart > 0 && `(${itemsInCart})`}
                    </button>
                </div>
                <div className="productTag">
                    <span>Product Details:</span>
                    <p>High-quality product with exceptional features.</p>
                </div>
            </div>
        </div>
    );
};


export default ProductDisplay;