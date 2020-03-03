import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';
import Item from '../../models/Item';
import Data from '../../helpers/Data';

const Detail = () => {

  let { id } = useParams();

  const [ item, setItem ] = useState(new Item());

  useEffect(() => {
    Data.getItem(id)
      .then( item => setItem( item ));
  }, []);

  const { title, picture, description, price } = item;

  function comprar() {
    alert("Agregado al carrito!");
  }

  return (
    <article className="item__box">
      <div>
        <img src={picture} />
      </div>
      <div>
        <h1>{title}</h1>
        <span className="item__price">
          { `${(price.currency === 'ARS') ? 'AR$' : '$'} ${price.amount}`}
          <sup>{ (price.decimals > 0) ? price.decimals : ''}</sup>
        </span>
        <button className="item__buy" onClick={comprar}>Comprar</button>
      </div>
      <div>
        <h2>Descripción del producto</h2>
        {description}
      </div>
    </article>
    );
}

export default Detail;