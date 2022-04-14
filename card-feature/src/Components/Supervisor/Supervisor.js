import React from 'react';
import SImg from '../../Assets/images/icon-supervisor.svg';
function Supervisor() {
    return(
        <div className='SupervisorBlock'>
            <h1 className='STitle'>Supervisor</h1>
            <p className='SParagraph'>Monitors activity to identify project roadblocks</p>
            <img className='SImg' src={SImg} alt='eyed lupe'/>
        </div>
    )
}
export default Supervisor;
