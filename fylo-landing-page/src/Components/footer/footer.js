import React from 'react';
import {Footer, LogoImg, EmailImg, PhoneImg} from './footer_style.js';
import {Emailtext, Phonetext, AboutUs, Jobs, Press, Blog, ContactUs, Terms, Privacy} from './footer_style.js';
export function FooterBlock() {
    return (

        <Footer>
            <LogoImg />
            <PhoneImg/>
            <EmailImg/>
            <Phonetext>Phone: +1-543-123-4567</Phonetext>
            <Emailtext>example@fylo.com</Emailtext>
            <AboutUs>About Us</AboutUs>
            <Jobs>Jobs</Jobs>
            <Press>Press</Press>
            <Blog>Blog</Blog>
            <ContactUs>Contact Us</ContactUs>
            <Terms>Terms</Terms>
            <Privacy>Privacy</Privacy>
        </Footer>
    )
}
