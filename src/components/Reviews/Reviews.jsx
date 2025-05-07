import React, { useState } from 'react';
import './Reviews.css';
import star from '../Assets/images/star.png';
import stardull from '../Assets/images/stardull.png';

const Reviews = ({ productId, reviews, onAddReview }) => {
    const [newReview, setNewReview] = useState({
        rating: 0,
        comment: '',
        userName: ''
    });
    const [hoveredRating, setHoveredRating] = useState(0);
    const [showForm, setShowForm] = useState(false);
    const [formErrors, setFormErrors] = useState({});

    // Calculate average rating
    const averageRating = reviews && reviews.length > 0 
        ? Math.round((reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length) * 10) / 10
        : 0;

    const validateForm = () => {
        const errors = {};
        
        if (newReview.rating === 0) {
            errors.rating = 'Please select a rating';
        }
        
        if (!newReview.userName.trim()) {
            errors.userName = 'Please enter your name';
        }
        
        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        // Create a new review object
        const reviewToAdd = {
            id: Date.now().toString(),
            productId,
            rating: newReview.rating,
            comment: newReview.comment,
            userName: newReview.userName,
            date: new Date().toLocaleDateString()
        };

        // Add the review
        onAddReview(reviewToAdd);
        
        // Reset form
        setNewReview({
            rating: 0,
            comment: '',
            userName: ''
        });
        
        // Hide form
        setShowForm(false);
    };

    const handleStarClick = (rating) => {
        setNewReview(prev => ({...prev, rating}));
        // Clear error when user selects a rating
        if (formErrors.rating) {
            setFormErrors(prev => ({...prev, rating: undefined}));
        }
    };

    const handleStarHover = (rating) => {
        setHoveredRating(rating);
    };

    // Star Rating Component
    const StarRating = ({ rating, interactive = false, onStarClick, onStarHover }) => {
        return (
            <div className="star-rating">
                {[1, 2, 3, 4, 5].map((starIndex) => {
                    // Determine if this star should be filled
                    let filled = false;
                    
                    if (interactive) {
                        // For interactive stars, use hovered rating if available, otherwise use selected rating
                        filled = starIndex <= (hoveredRating || newReview.rating);
                    } else {
                        // For non-interactive stars, just use the provided rating
                        filled = starIndex <= rating;
                    }
                    
                    return (
                        <img 
                            key={starIndex}
                            src={filled ? star : stardull}
                            alt={`Star ${starIndex}`}
                            onClick={interactive ? () => onStarClick(starIndex) : undefined}
                            onMouseEnter={interactive ? () => onStarHover(starIndex) : undefined}
                            onMouseLeave={interactive ? () => onStarHover(0) : undefined}
                            className={interactive ? 'interactive-star' : ''}
                        />
                    );
                })}
            </div>
        );
    };

    return (
        <div className="reviews-container">
            <h2>Customer Reviews</h2>
            
            {reviews && reviews.length > 0 ? (
                <div className="reviews-summary">
                    <div className="average-rating">
                        <span className="rating-number">{averageRating.toFixed(1)}</span>
                        <StarRating rating={averageRating} />
                        <span className="total-reviews">({reviews.length} {reviews.length === 1 ? 'review' : 'reviews'})</span>
                    </div>
                </div>
            ) : (
                <p>No reviews yet. Be the first to review this product!</p>
            )}

            <button 
                className="write-review-btn"
                onClick={() => setShowForm(!showForm)}
            >
                {showForm ? 'Cancel' : 'Write a Review'}
            </button>

            {showForm && (
                <form className="review-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Your Rating:</label>
                        <StarRating 
                            rating={newReview.rating}
                            interactive={true}
                            onStarClick={handleStarClick}
                            onStarHover={handleStarHover}
                        />
                        {formErrors.rating && <div className="error-message" style={{color: 'red'}}>{formErrors.rating}</div>}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="userName">Your Name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={newReview.userName}
                            onChange={(e) => {
                                setNewReview({...newReview, userName: e.target.value});
                                // Clear error when user types
                                if (formErrors.userName) {
                                    setFormErrors(prev => ({...prev, userName: undefined}));
                                }
                            }}
                        />
                        {formErrors.userName && <div className="error-message" style={{color: 'red'}}>{formErrors.userName}</div>}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="comment">Your Review:</label>
                        <textarea
                            id="comment"
                            value={newReview.comment}
                            onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                            rows="4"
                            placeholder="Write your review here (optional)"
                        />
                    </div>
                    
                    <button type="submit" className="submit-review-btn">Submit Review</button>
                </form>
            )}

            <div className="reviews-list">
                {reviews && reviews.length > 0 ? (
                    reviews.map((review) => (
                        <div key={review.id} className="review-item">
                            <div className="review-header">
                                <span className="review-author">{review.userName}</span>
                                <span className="review-date">{review.date}</span>
                            </div>
                            <div className="review-rating">
                                <StarRating rating={review.rating} />
                            </div>
                            {review.comment && (
                                <div className="review-comment">
                                    <p>{review.comment}</p>
                                </div>
                            )}
                        </div>
                    ))
                ) : (
                    <div className="no-reviews-yet"></div>
                )}
            </div>
        </div>
    );
};

export default Reviews;