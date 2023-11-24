// src/RatingBar.jsx
import React, { useState } from 'react';

const RatingBar = ({ totalStars, initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating || 0);

  const handleStarClick = (starIndex) => {
    setRating(starIndex + 1);
    if (onRatingChange) {
      onRatingChange(starIndex + 1);
    }
  };

  const handleStarHover = (starIndex) => {
    // Implementing hover effect by updating the rating on hover
    setRating(starIndex + 1);
  };

  const handleMouseLeave = () => {
    // Resetting rating to initial value when mouse leaves the rating bar
    setRating(initialRating || 0);
  };

  return (
    <div>
      {[...Array(totalStars).keys()].map((index) => (
        <span
          key={index}
          onClick={() => handleStarClick(index)}
          onMouseEnter={() => handleStarHover(index)}
          onMouseLeave={handleMouseLeave}
          className={`cursor-pointer text-2xl ${
            index < rating ? 'text-yellow-500' : 'text-gray-300'
          }`}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default RatingBar;
