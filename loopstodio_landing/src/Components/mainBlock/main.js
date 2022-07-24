import React from 'react';
import {Nav} from '../Nav/nav.js';
import { Immersive } from '../ImmersiveSec/immersive.js';
import { Interactive } from '../InteractiveSec/interactive.js';
import { Creations } from '../creations/creations.js';
export function Main() {
    
    return (
        <main>
            <Nav/>
            <Immersive/>
            <Interactive/>
            <Creations/>
        </main>
    )
}
