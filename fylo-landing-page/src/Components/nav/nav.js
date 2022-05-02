import React from 'react';
import {Nav} from './nav-style.js';
import {H1, LogoImg} from './nav-style.js';
export  function NavBlock() {
    return (
        <Nav>
            <LogoImg/>
            <H1>Features</H1>    
            <H1>Team</H1>
            <H1>Sign in</H1>
        </Nav>
    )
};
