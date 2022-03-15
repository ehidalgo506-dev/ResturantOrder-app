import React from 'react';
import './Button.scss';

const Button = (props) => {
  const { className, children, onClick } = props;

  return (
    <button onClick={onClick} className={`${className} button`}>
      {children}
    </button>
  );
};

export default Button;
