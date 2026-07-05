import React from 'react';

const FoodCard = ({ food, onClick }) => {
  return (
    <div className="food-card" onClick={onClick}>
      <img src={food.src} alt={food.name} />
      <h3>{food.name}</h3>
    </div>
  );
};

export default FoodCard;