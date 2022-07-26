import React from 'react';

import style from './Header.module.css';

import logo from '../assets/Logo.svg'
const Header: React.FC = () => {
  return (
  <div className={style.container}>
    <img src={logo} alt="Logo tipo do Desafio 01" />  
  </div>
  )
}

export default Header;