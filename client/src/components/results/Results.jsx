import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import './Results.scss';
import ResultItem from './result-item/ResultItem';
import Breadcrumbs from '../common/breadcrumbs/Breadcrumbs';
import ErrorMessage from '../common/error-message/ErrorMessage';
import Data from '../../helpers/Data';
import Search from '../../models/Search';

const Results = ( props ) => {

  const [ products, setProducts ] = useState(new Search());
  const [ error, setError ] = useState(false);

  useEffect( () => {
    Data.getResults(queryString.parse(props.location.search).search)
      .then( results => setProducts(results))
      .catch( () => setError(true) );
  },[]);

  if( error ) {
    return ( <ErrorMessage /> )
  }

  return ( 
    <main className="results__list">
      { products.categories.length > 0 ? <Breadcrumbs categories={ products.categories } detail={ false } /> : '' }
      { products.items.map( product => <ResultItem key={product.id} product={product} />) }
    </main>
   );
}
 
export default Results;
