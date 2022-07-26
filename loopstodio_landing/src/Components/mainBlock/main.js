import React from 'react';
import {Nav} from '../Nav/nav.js';
import { Immersive } from '../ImmersiveSec/immersive.js';
import { Interactive } from '../InteractiveSec/interactive.js';
import { Creations } from '../creations/creations.js';
import { Footer } from '../footer/footer.js';
export function Main() {
    
    return (
        <main className='mainBlock'>
            <Nav/>
            <Immersive/>
            <Interactive/>
            <Creations/>
            <Footer/>
        </main>
    )
}
