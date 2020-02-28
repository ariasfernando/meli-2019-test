import React from 'react';
import { useParams } from 'react-router-dom';

function Detail() {
  let { id } = useParams();
  return <h3>Requested topic ID: { id }</h3>;
}

export default Detail;