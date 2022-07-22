import React from 'react';
import {Nav} from '../Nav/nav.js';
import { Immersive } from '../ImmersiveSec/immersive.js';
import { Interactive } from '../InteractiveSec/interactive.js';
export function Main() {
    
    return (
        <main>
            <Nav/>
            <Immersive/>
            <Interactive/>
        </main>
    )
}
