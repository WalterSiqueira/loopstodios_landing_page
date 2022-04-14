import React from 'react';
import KImg from '../../Assets/images/icon-karma.svg';

function Karma() {
    return (
        <div className='KarmaBlock'>
            <h1 className='KTitle'>Karma</h1>
            <p className='KParagraph'>Regularly evaluates our talent to ensure quality</p>
            <img className='KImg' src={KImg} alt='lamp icon'/>
        </div>
    )
}

export default Karma;
