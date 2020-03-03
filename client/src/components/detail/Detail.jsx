import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../common/breadcrumbs/Breadcrumbs';
import FreeShipping from '../common/free-shipping/FreeShipping';
import ErrorMessage from '../common/error-message/ErrorMessage';
import './Detail.scss';
import Item from '../../models/Item';
import Data from '../../helpers/Data';


const Detail = () => {

  let { id } = useParams();

  const [ item, setItem ] = useState(new Item());
  const [ error, setError ] = useState(false);

  useEffect(() => {
    Data.getItem(id)
      .then( item => setItem( item ))
      .catch( () => setError(true) );
  }, []);

  const { title, picture, description, price, free_shipping, condition, sold_quantity } = item;

  function comprar() {
    alert("Agregado al carrito!");
  }

  if( error ) {
    return ( <ErrorMessage /> )
  }

  return (
    <article className="item__box">
      <div>
        <img src={picture} />
      </div>
      <div>
        <span>{ `Vendidos: ${sold_quantity} - ${ condition === "new" ? 'Nuevo' : 'Usado' }` }</span>
        <h1 className="item__title">{title}</h1>
        <span className="item__price">
          { `${(price.currency === 'ARS') ? 'AR$' : '$'} ${price.amount}`}
          <sup>{ (price.decimals > 0) ? price.decimals : ''}</sup>
        </span>
        <button className="item__buy" onClick={comprar}>Comprar</button>
        { free_shipping ? <FreeShipping /> : '' }
      </div>
      <div>
        <h2>Descripción del producto</h2>
        {description}
      </div>
    </article>
    );
}

export default Detail;