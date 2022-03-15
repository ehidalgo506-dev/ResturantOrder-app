import React from 'react';
import './styles.scss';

const Card = (props) => {
  const { children, className } = props;
  return <div className={`${className} container`}>{children}</div>;
};

export default Card;
