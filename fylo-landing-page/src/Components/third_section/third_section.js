import React from 'react';
import {ThirdSection, H3Third, Paragraph} from './third_style.js';
import {Input, Button} from '../first_section/first_style.js';
export function ThirdSectionBlock() {
    return (
        <ThirdSection>
            <H3Third>Get early access today</H3Third>
            <Paragraph>It only takes a minute to sign up and 
            our free starter tier is extremely generous. if you
            have any questions, our suppor team would be happy to 
            help you.</Paragraph>
            <Input placeholder='email@example.com'/>
            <Button>Get Started For Free</Button>

        </ThirdSection>
    )
}
