import React from 'react';
import logo from '../../Assets/images/logo.svg';
import facebook from '../../Assets/images/icon-facebook.svg';
import instagram from '../../Assets/images/icon-instagram.svg';
import pinterest from '../../Assets/images/icon-pinterest.svg';
import twitter from '../../Assets/images/icon-twitter.svg';

export function Footer() {
    return (
        <footer className='footerBlock'>
            <img src={logo} className='footer_logo'/>
            <div className="options_footer">
                <h2 className="about_F">About</h2>
                <h2 className="careers_F">Careers</h2>
                <h2 className="events_F">Events</h2>
                <h2 className="products_F">Products</h2>
                <h2 className="support_F">Support</h2>
            </div>
            <div className='media_footer'>
                <img src={facebook} className='facebook'/>
                <img src={instagram} className='instagram'/>
                <img src={pinterest} className='pinterest'/>
                <img src={twitter} className='twitter'/>
            </div>
            <h4 className='rights'>@2021 Loopstudios. All rights reserved.</h4>
        </footer>

    )
}