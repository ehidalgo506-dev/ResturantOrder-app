import React from 'react';
import Button from '../../UI/Button/Button';
import './styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const NavBar = (props) => {
  const element = <FontAwesomeIcon icon={faCoffee} />;
  return (
    <nav className='navBar'>
      <h1>ReactMeals</h1>

      <Button className={`cartButton`}>
        <i>{element}</i>
        <p>Your Cart</p>
        <span>{props.quantity}</span>
      </Button>
    </nav>
  );
};

NavBar.defaultProps = {
  quantity: 0,
};

export default NavBar;
