import React from 'react';
import {FirstSection} from './first_style.js';
import {IllustImg, H2, H3, Input, Button} from './first_style.js';
export function FirstSectionBlock() {
    return (
        <FirstSection>
            <IllustImg/>
            <H2>All your files in one secure location, accessible anywhere.</H2>
            <H3>Fylo stores your most important files in one secure location.
                Access them whenever you need, share and collaborate with firends, family,
                and co-workers.</H3>
            <Input placeholder='Enter your email.'/>
            <Button>Get Started</Button>
        </FirstSection>
    )
}
