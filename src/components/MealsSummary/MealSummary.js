import React from 'react';
import Card from '../UI/Card/Card';
import './styles.scss';

const MealSummary = (props) => {
  return (
    <div className='mealsSummary'>
      <Card className='mealsSummary__info'>
        <h1>Delicious Food, Delivered to you</h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy delicious lunch or diner at home
        </p>

        <p>
          All of our meals are cooked with high-quality ingredients, just in
          time and of course by experiences chefs!
        </p>
      </Card>
    </div>
  );
};

export default MealSummary;
