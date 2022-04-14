import React from 'react';
import CImg from '../../Assets/images/icon-calculator.svg';

function Calculator() {
    return (
        <div className='Calculator'>
            <h1 className='CTitle'>Calculator</h1>
            <p className='CParagraph'>Uses data from past projects to provide better delivery estimates</p>
            <img className='CImg' src={CImg} alt='desktop screen'/>
        </div>
    )
}

export default Calculator;
