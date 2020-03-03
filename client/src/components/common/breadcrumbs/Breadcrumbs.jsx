import React, { useEffect, useState } from 'react'

const style = {
  margin: "1rem 0rem",
  fontSize: "0.75rem"
}

const Breadcrumbs = ({ categories }) => {

  return ( 
    <div style={style}>
      { categories.join (" > ") }
    </div>
   );
}
 
export default Breadcrumbs;