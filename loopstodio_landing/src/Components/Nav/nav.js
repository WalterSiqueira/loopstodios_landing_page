import React from 'react';
import logo from '../../Assets/images/logo.svg';
import menu from '../../Assets/images/icon-hamburger.svg';
import close from '../../Assets/images/icon-close.svg';
export function Nav() {
    return(
        <nav className="navBlock">
            <img src={logo} alt='' className="logo"/>
            <img src={menu} alt='' className="menu"/>
            <img src={close} alt='' className="close"/>
            <div className="options">
                <h2 className="about">About</h2>
                <h2 className="careers">Careers</h2>
                <h2 className="events">Events</h2>
                <h2 className="products">Products</h2>
                <h2 className="support">Support</h2>
            </div>
        </nav>
    )
}