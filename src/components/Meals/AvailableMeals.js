import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';
import useAPI from '../../hooks/use-api';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([])
  const { isLoading, error, sendRequest } = useAPI({ url: 'https://react-restaurant-6fc3e-default-rtdb.firebaseio.com/meals.json' }, setMeals)

  useEffect(() => {
    sendRequest();
  }, [])


  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {error && <p>Oops, something went wrong. Please try again later</p>}
          {isLoading && <p>Loading...</p>}
          {!error && !isLoading && mealsList}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
