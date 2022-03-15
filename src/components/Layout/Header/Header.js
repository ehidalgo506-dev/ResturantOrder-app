import React from 'react';
import foodImage from '../../../img/food.jpg';
import MealSummary from '../../MealsSummary/MealSummary';
import './styles.scss';

const Header = (props) => {
  return (
    <div className='header'>
      <img src={foodImage} alt='Pune Food' />
      <MealSummary />
    </div>
  );
};

export default Header;
