import React from 'react';
import search from '../../../assets/search.png';
import './ErrorMessage.scss';

const ErrorMessage = () => {
  return ( 
    <div className="error__box">
      <img className="error__image" src={search} alt="Seguí buscando!" />
      <h1 className="error__message">No hay publicaciones que coincidan con tu búsqueda.</h1>
    </div>
   );
}
 
export default ErrorMessage;