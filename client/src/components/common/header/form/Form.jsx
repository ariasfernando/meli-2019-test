import React from 'react';
import { FaSearch } from "react-icons/fa";
import './Form.scss';

const Form = () => {

  const placeholder = "No dejes nunca de buscar";
  return ( 
    <form className="form">
      <input className="form__input" type="text" placeholder={placeholder}></input>
      <button type="submit" className="form__submit"><FaSearch></FaSearch></button>
    </form>
  );
}
 
export default Form;