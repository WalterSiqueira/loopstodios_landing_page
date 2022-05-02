import React from 'react';
import {NavBlock} from '../Components/nav/nav.js';
import {FirstSectionBlock} from '../Components/first_section/first_section.js';
import {SecondSectionBlock} from '../Components/second_section/second_section.js';
import {ThirdSectionBlock} from '../Components/third_section/third_section.js';
import {FooterBlock} from '../Components/footer/footer.js';
export function Main() {
    return (
        <main >
            <NavBlock/> 
            <FirstSectionBlock/>
            <SecondSectionBlock/>
            <ThirdSectionBlock/>
            <FooterBlock/>
        </main>
    )
}


