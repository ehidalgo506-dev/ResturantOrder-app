import { useContext, useState } from 'react';

import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../store/cart-context';
import ShippingForm from '../ShippingForm/ShippingForm';

const Cart = (props) => {
  const [activeForm, setActiveForm] = useState(false)


  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };

  const activeFormHandler = () => setActiveForm(true)

  const cartItems = (
    <ul className={classes['cart-items']}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const onConfirmFormHandler = userData => {
    console.log(userData);
    userData.order = cartCtx.items;
    fetch('https://react-restaurant-6fc3e-default-rtdb.firebaseio.com/orders.json', { method: 'POST', body: JSON.stringify(userData) })

  }


  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {!activeForm &&
        <div className={classes.actions}>
          <button className={classes['button--alt']} onClick={props.onClose}>
            Close
          </button>
          {hasItems && <button className={classes.button} onClick={activeFormHandler}>Order</button>}
        </div>
      }
      {activeForm && <ShippingForm onClose={props.onClose} onConfirm={onConfirmFormHandler} />}
    </Modal>

  );
};

export default Cart;
