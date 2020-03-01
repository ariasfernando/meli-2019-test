import React, { useState } from 'react';
import './Results.scss';
import ResultItem from './result-item/ResultItem';

const Results = ( props ) => {

  console.log(props.location.search);

  const [ products, setProducts ] = useState(
    { 
      author: {
        name: "Fernando",
        lastName: "Arias"
      },
      categories: ["Productos", "Juegos", "Juegos de Mesa"],
      items: [
        { 
          id: 1,
          title: "Teg Nuevo 2020 Original",
          price: {
            currency: "ARS",
            amount: "1999",
            decimals: "90"
          },
          picture: "https://http2.mlstatic.com/D_NQ_NP_850734-MLA32650463598_102019-V.webp",
          condition: "new",
          free_shipping: true
        },
        { 
          id: 2,
          title: "Teg Nuevo 2020 Original",
          price: {
            currency: "ARS",
            amount: "1999",
            decimals: "90"
          },
          picture: "https://http2.mlstatic.com/D_NQ_NP_850734-MLA32650463598_102019-V.webp",
          condition: "new",
          free_shipping: true
        },
        { 
          id: 3,
          title: "Teg Nuevo 2020 Original",
          price: {
            currency: "ARS",
            amount: "1999",
            decimals: "90"
          },
          picture: "https://http2.mlstatic.com/D_NQ_NP_850734-MLA32650463598_102019-V.webp",
          condition: "new",
          free_shipping: true
        },
        { 
          id: 4,
          title: "Teg Nuevo 2020 Original",
          price: {
            currency: "ARS",
            amount: "1999",
            decimals: "90"
          },
          picture: "https://http2.mlstatic.com/D_NQ_NP_850734-MLA32650463598_102019-V.webp",
          condition: "new",
          free_shipping: true
        }
      ]
    }
  );

  return ( 
    <main className="results__list">
      <h3>Resultados</h3>
      { products.items.map( product => <ResultItem key={product.id} product={product} />) }
    </main>
   );
}
 
export default Results;
