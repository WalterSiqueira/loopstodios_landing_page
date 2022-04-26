import React from 'react';
import Nav from './navigation.js';
import menu from '../../Assets/images/icon-menu.svg';
import logo from '../../Assets/images/logo.svg';

function Head() {
    return (
      <header className='head_block'>
        <img src={logo} className='logo_head'alt=''/>
        <img src={menu} className='menu_head' id='menu' alt=''/>
        <Nav/>
      </header>
    )
}

export default Head;
