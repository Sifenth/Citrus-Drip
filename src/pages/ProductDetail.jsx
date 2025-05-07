// In ProductDetail.jsx
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrum/Breadcrum';
import ProductDisplay from '../components/ProductDisplay/ProductDisplay';
import Reviews from '../components/Reviews/Reviews';

const ProductDetail = () => {
    const { AllProducts, updateProductViews } = useContext(ShopContext);
    const { ProductDetailId } = useParams(); 
    const [productReviews, setProductReviews] = useState([]);
    
    // Find the product with the matching ID
    const product = AllProducts.find((e) => e.id === ProductDetailId);
    
    // Function to handle adding a new review
    const handleAddReview = (newReview) => {
        // For now, we'll just update the local state
        setProductReviews([...productReviews, newReview]);
    };
    
    // Update views when component mounts
    useEffect(() => {
        if (ProductDetailId) {
            updateProductViews(ProductDetailId);
        }
    }, [ProductDetailId, updateProductViews]);
    
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
                views={product.views} // Pass views to ProductDisplay
            />
            <Reviews 
                productId={product.id}
                reviews={productReviews}
                onAddReview={handleAddReview}
            />
        </div>
    )
}

export default ProductDetail;