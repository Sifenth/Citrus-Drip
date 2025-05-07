import React, { createContext, useState, useEffect } from 'react';
import Allproducts from "../components/Assets/AllProducts";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
    // Initialize products with views, sold, and reviews fields if not already present
    const initialProducts = Allproducts.map(product => ({
        ...product,
        views: product.views || 0,
        sold: product.sold || 0,
        reviews: product.reviews || []
    }));
    
    // Set up state for products
    const [products, setProducts] = useState(() => {
        // Try to load from localStorage first
        const savedProducts = localStorage.getItem('products');
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });
    
    // Set up state for cart
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : {};
    });
    
    // Save products to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('products', JSON.stringify(products));
    }, [products]);
    
    // Save cart to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);
    
    // ADD THIS FUNCTION: Generic function to update product data
    const updateProductData = (productId, updateFn) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? updateFn(product)
                    : product
            )
        );
    };
    
    // Function to update product views
    const updateProductViews = (productId) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? { ...product, views: (product.views || 0) + 1 } 
                    : product
            )
        );
    };
    
    // Function to update product sold count
    const updateProductSold = (productId, quantity) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? { ...product, sold: (product.sold || 0) + quantity } 
                    : product
            )
        );
    };
    
    // Function to add a review to a product
    const addReview = (productId, review) => {
        setProducts(prevProducts => 
            prevProducts.map(product => 
                product.id === productId 
                    ? { 
                        ...product, 
                        reviews: [...(product.reviews || []), review] 
                      } 
                    : product
            )
        );
    };
    
    // Function to add item to cart
    const addToCart = (itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };
    
    // Function to remove item from cart
    const removeFromCart = (itemId) => {
        setCartItems(prev => {
            const newCart = { ...prev };
            if (newCart[itemId] > 0) {
                newCart[itemId] -= 1;
            }
            return newCart;
        });
    };
    
    // Function to update cart item quantity
    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems(prev => ({
            ...prev,
            [itemId]: newAmount
        }));
    };
    
    // Function to empty cart
    const emptyCart = () => {
        setCartItems({});
    };
    
    // Function to get cart total
    const getTotalCartAmount = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                const itemInfo = products.find(product => product.id === item);
                // Remove the currency symbol and convert to number
                const priceValue = parseFloat(itemInfo.price.replace('₫', ''));
                total += priceValue * cartItems[item];
            }
        }
        return total;
    };
    
    // Function to get cart count
    const getTotalCartItems = () => {
        let total = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                total += cartItems[item];
            }
        }
        return total;
    };
    
    // Checkout function (simulated)
    const checkout = () => {
        // Update sold count for each item in cart
        for (const itemId in cartItems) {
            if (cartItems[itemId] > 0) {
                updateProductSold(itemId, cartItems[itemId]);
            }
        }
        
        // Empty the cart after checkout
        emptyCart();
        
        // Return success message
        return { success: true, message: "Thank you for your purchase!" };
    };
    
    // Create the context value object
    const contextValue = {
        AllProducts: products,
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemCount,
        getTotalCartAmount,
        getTotalCartItems,
        checkout,
        updateProductViews,
        updateProductSold,
        addReview,
        updateProductData  // Add the new function to the context
    };
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;