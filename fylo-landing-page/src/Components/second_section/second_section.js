import React from 'react';
import {SecondSection} from './second_style.js';
import {IllustImg2, H3Second, H4Second, ArrowIcon, ButtonS, Testimony, Paragraph} from './second_style.js';
import {QuotesIcon, AvatarT, Name, Job} from './second_style.js';
export function SecondSectionBlock() {
        return (
            <SecondSection>
                <IllustImg2/>
                <H3Second>Stay productive, wherever you are</H3Second>
                <H4Second>Never let location be an issue when accessing your files.
                Fylo has you covered for all of your file storage needs.</H4Second>
                <H4Second>Securely share files and folders with friends, family,
                colleagues for live collaboration. No email attachments required!</H4Second>
                <ButtonS>See how Fylo works<ArrowIcon/></ButtonS>
                <Testimony>
                    <QuotesIcon/>
                    <Paragraph>Fylo has improved our team productivity by an order
                     of magnitude. Since making the switch our team has become
                    a well-oiled collaboration machine.</Paragraph>
                    <AvatarT/>
                    <Name>Kyle Burton</Name>
                    <Job>Founder & CEO, Huddle</Job>
                </Testimony>
            </SecondSection>
        )
}
