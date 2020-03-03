import React from 'react';
import { Link } from 'react-router-dom';

import Form from './form/Form';
import './Header.scss';
import logo from './../../../assets/logo__small.png';

function Header() {

  return(
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={ logo } alt="Mercado Libre!" />
      </Link>
      <Form />
    </header>
  );
}

export default Header;