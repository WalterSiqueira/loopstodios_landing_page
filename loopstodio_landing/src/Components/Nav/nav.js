import React, {useRef} from 'react';
import logo from '../../Assets/images/logo.svg';
import menu from '../../Assets/images/icon-hamburger.svg';
import close from '../../Assets/images/icon-close.svg';
export function Nav() {
    const menu_action = useRef(null);
    const close_action = useRef(null);
    const nav_switch = useRef(null);
    const options_action = useRef(null);

    const open = () => {
        menu_action.current.style.display = 'none';
        close_action.current.style.display = 'block';
        options_action.current.style.display = 'grid';
        nav_switch.current.className = 'navBlock_Active';
    }
    const hide = () => {
        menu_action.current.style.display = 'block';
        close_action.current.style.display = 'none';
        options_action.current.style.display = 'none';
        nav_switch.current.className = 'navBlock';
    }
    return(
        <nav className="navBlock" ref={nav_switch}>
            <img src={logo} alt='' className="logo"/>
            <img src={menu} alt='' onClick={open} className="menu" ref={menu_action} />
            <img src={close} alt='' onClick={hide} className="close" ref={close_action} />
            <div className="options" ref={options_action}>
                <h2 className="about">About</h2>
                <h2 className="careers">Careers</h2>
                <h2 className="events">Events</h2>
                <h2 className="products">Products</h2>
                <h2 className="support">Support</h2>
            </div>
        </nav>
    )
}