import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect, useState } from 'react';

const DUMMY_MEALS = [
  // {
  //   id: 'm1',
  //   name: 'Sushi',
  //   description: 'Finest fish and veggies',
  //   price: 22.99,
  // },
  // {
  //   id: 'm2',
  //   name: 'Schnitzel',
  //   description: 'A german specialty!',
  //   price: 16.5,
  // },
  // {
  //   id: 'm3',
  //   name: 'Barbecue Burger',
  //   description: 'American, raw, meaty',
  //   price: 12.99,
  // },
  // {
  //   id: 'm4',
  //   name: 'Green Bowl',
  //   description: 'Healthy...and green...',
  //   price: 18.99,
  // },
];


const AvailableMeals = () => {
  const [meals, setMeals] = useState([null])

  useEffect(() => {

    const fetchData = async function (text) {
      try {
        const response = await fetch('https://react-restaurant-6fc3e-default-rtdb.firebaseio.com/meals.json');
        const meals = await response.json();
        //Creating an empty array to loop over the object of objects with the for in and fill this array with each object
        const loadedMeals = [];

        for (const meal in meals) {
          loadedMeals.push({
            key: meal,
            id: meal,
            description: meals[meal].description,
            name: meals[meal].name,
            price: meals[meal].price,
          })
        }

        setMeals(loadedMeals);

      } catch (error) {
        console.error(error)

      }
    }

    //Calling the fetch function
    fetchData();
  }, [])

  console.log(meals);

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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
