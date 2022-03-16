import React, { useState } from 'react';
import Button from '../UI/Button/Button';
import './styles.scss';

const Meal = (props) => {
  const { name, description, price } = props;
  const [mealAmount, setMealAmount] = useState(0);

  const setMealAmountHandler = (e) => {
    setMealAmount(e.target.value);
  };
  const onSubmitFormHandler = (e) => {
    e.preventDefault();
    console.log(mealAmount);
  };

  return (
    <div className='meal'>
      <div className='meal__group'>
        <h3 className='meal__name'>{name}</h3>
        <p className='meal__description'>{description}</p>
        <p className='meal__price'>{price}</p>
      </div>
      <form className='form' onSubmit={onSubmitFormHandler}>
        <div className='form__group'>
          <label htmlFor='amount_input'>Amount</label>
          <input
            type='number'
            id='amount_input'
            value={mealAmount}
            onChange={setMealAmountHandler}
          />
        </div>

        <Button className='form__submit'>+ Add</Button>
      </form>
    </div>
  );
};

export default Meal;
