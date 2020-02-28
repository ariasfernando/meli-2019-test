import React from 'react';
import { useParams } from 'react-router-dom';

function Results() {
  let { search } = useParams();
  return <h3>Requested topic ID: { search }</h3>;
}

export default Results;
