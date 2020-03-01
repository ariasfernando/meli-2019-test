import React from 'react';
import Form from './form/Form';
import './Header.scss';
import logo from './../../../assets/logo__small.png';

function Header() {

  return(
    <header className="header">
      <a href="/" className="header__logo">
        <img src={ logo } />
      </a>
      <Form />
    </header>
  );
}

export default Header;