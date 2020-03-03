import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import './Results.scss';
import ResultItem from './result-item/ResultItem';
import Data from '../../helpers/Data';
import Search from '../../models/Search';

const Results = ( props ) => {

  const [ products, setProducts ] = useState(new Search());

  useEffect( () => {
    Data.getResults(queryString.parse(props.location.search).search)
      .then( results => setProducts(results));
  },[]);

  return ( 
    <main className="results__list">
      <h3>Resultados</h3>
      { products.items.map( product => <ResultItem key={product.id} product={product} />) }
    </main>
   );
}
 
export default Results;
