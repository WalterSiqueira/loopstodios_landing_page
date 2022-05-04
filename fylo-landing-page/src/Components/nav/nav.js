import React from 'react';
import {Nav} from './nav-style.js';
import {Features, Team, SignIn, LogoImg} from './nav-style.js';
export  function NavBlock() {
    return (
        <Nav>
            <LogoImg/>
            <Features>Features</Features>    
            <Team>Team</Team>
            <SignIn>Sign in</SignIn>
        </Nav>
    )
};
