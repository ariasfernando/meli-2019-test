import React from 'react';
import { useParams } from 'react-router-dom';

function List() {
  let { search } = useParams();
  return <h3>Requested topic ID: { search }</h3>;
}

export default List;
