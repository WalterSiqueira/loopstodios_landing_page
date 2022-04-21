import React from 'react';
import audiophile from '../../Assets/images/client-audiophile.svg';
import databiz from '../../Assets/images/client-databiz.svg';
import maker from '../../Assets/images/client-maker.svg';
import meet from '../../Assets/images/client-meet.svg';
import desktopHero from '../../Assets/images/image-hero-desktop.png';
import mobileHero from '../../Assets/images/image-hero-mobile.png';

function Content() {
    return (
        <section className='content_block'>
            <div className='text_content'>
                <h1 className='title_content'>Make remote work</h1>
                <p className='subP_content'>Get your team in sync. no matter your
                    location, Streamline process, create team rituals, and watch
                    productivity soar.</p>
                <button className='learnmore_content'>Learn more</button>
                <img src={databiz} className='databiz_img' alt=''/>
                <img src={audiophile} className='audiophile_img' alt=''/>
                <img src={maker} className='maker_img' alt=''/>
                <img src={meet} className='meet_img' alt=''/>
            </div>
            <div className='image_content'>
                <img src={desktopHero} alt='' className='desktopHero_img'/>
                <img src={mobileHero} alt='' className='mobileHero_img'/>
            </div>        
        </section>
    )
}
export default Content;
