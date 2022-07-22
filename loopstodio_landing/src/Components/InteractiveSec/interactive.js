import React from 'react';
import interactive_image from '../../Assets/images/mobile/image-interactive.jpg';
export function Interactive() {
    return(
        <section className='interactive_block'>
                <img src={interactive_image} className="interactive_image"/>
                <h2 className='int_title'> The leader in interactive vr</h2>
                <p className="introduction">Founded in 2011, loopstodios has beed producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind their brand.
                </p>
        </section>
    ) 
}