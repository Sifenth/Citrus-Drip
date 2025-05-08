import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Reviews from '../components/Reviews/Reviews'; // Import Reviews component

const ProductDetail = () => {
    const { AllProducts } = useContext(ShopContext);
    const { ProductDetailId } = useParams(); 
    const [productReviews, setProductReviews] = useState([]);
    
    // Find the product with the matching ID
    const product = AllProducts.find((e) => e.id === ProductDetailId);
    
    // Function to handle adding a new review
    const handleAddReview = (newReview) => {
        // In a real app, you would likely send this to an API
        // For now, we'll just update the local state
        setProductReviews([...productReviews, newReview]);
        
        // You might want to update the context or storage here as well
    };
    
    // Set product reviews when product changes
    useEffect(() => {
        if (product && product.reviews) {
            setProductReviews(product.reviews);
        }
    }, [product]);
    
    // Added check to ensure product exists before rendering
    if (!product) {
        return <div>Product not found</div>;
    }
    
    return (
        <div>
            <Breadcrum product={product} />
            <ProductDisplay 
                id={product.id}
                image={product.image}
                image1={product.image1}  
                name={product.name} 
                price={product.price}
            />
            {/* Add Reviews component here */}
            <Reviews 
                productId={product.id}
                reviews={productReviews}
                onAddReview={handleAddReview}
            />
        </div>
    )
}

export default ProductDetail;