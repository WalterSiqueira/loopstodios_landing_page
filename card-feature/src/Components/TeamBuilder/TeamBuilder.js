import React from 'react';
import TbImg from '../../Assets/images/icon-team-builder.svg';

function TeamBuilder() {
    return (
        <div className='TeambuilderBlock'> 
            <h1 className='TbTitle'>Team Builder</h1>
            <p className='TbParagraph'>Scans our talent network to create the optimal team for your project</p>
            <img className='TbImg' src={TbImg} alt='page icon with a house'/>
        </div>
    )
}

export default TeamBuilder;
