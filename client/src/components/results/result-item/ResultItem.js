import React from 'react';
import { Link } from 'react-router-dom';

import FreeShipping from './free-shipping/FreeShipping';

import './ResultItem.scss';


const ResultItem = ({ product }) => {
  const { title, picture, id, price, free_shipping } = product;
  return (
    <article className="result-item">
      <Link to={`/items/${id}`} className ="result-item__image">
        <img src={picture} />
      </Link>
      <div>
        <Link to={`/items/${id}`}>
          <h2 className ="result-item__title">{ title }</h2>
        </Link>
        <span className="result-item__price">
          { `${price.currency} ${price.amount}`}
          <sup>{price.decimals}</sup>
        </span>
        { free_shipping ? <FreeShipping /> : '' }
      </div>
    </article>
  );

}
 
export default ResultItem;