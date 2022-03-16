import React from 'react';
import Meal from '../Meal/Meal';
import Card from '../UI/Card/Card';
import './styles.scss';

const Menu = (props) => {
  const { data } = props;
  return (
    <Card className='menu'>
      {data.map((meal) => (
        <Meal
          key={meal.id}
          description={meal.description}
          name={meal.name}
          price={meal.price}
        />
      ))}
    </Card>
  );
};

export default Menu;
