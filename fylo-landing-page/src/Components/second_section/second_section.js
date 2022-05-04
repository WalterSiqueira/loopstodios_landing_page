import React from 'react';
import {SecondSection} from './second_style.js';
import {IllustImg2, H3Second, H4SecondOne, H4SecondTwo, ArrowIcon, ButtonS, Testimony, Paragraph} from './second_style.js';
import {QuotesIcon, AvatarT, Name, Job} from './second_style.js';
export function SecondSectionBlock() {
        return (
            <SecondSection>
                <IllustImg2/>
                <H3Second>Stay productive, wherever you are</H3Second>
                <H4SecondOne>Never let location be an issue when accessing your files.
                Fylo has you covered for all of your file storage needs.</H4SecondOne>
                <H4SecondTwo>Securely share files and folders with friends, family,
                colleagues for live collaboration. No email attachments required!</H4SecondTwo>
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
