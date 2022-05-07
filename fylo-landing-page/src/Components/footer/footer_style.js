import styled from 'styled-components';
import logo from '../../Assets/images/logo.svg';
import email from '../../Assets/images/icon-email.svg';
import phone from '../../Assets/images/icon-phone.svg';

export const Footer = styled.div `
    @media screen and (max-width: 480px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: 
            '. . . .'
            '. logo logo .'
            '. PIcon phone .'
            '. EIcon email .'
            '. . . .'
            '. about . .'
            '. jobs . .'
            '. press . .'
            '. blog . .'
            '. . . .'
            '. contactus . .'
            '. terms . .'
            '. privacy . .'
            '. . . .';
        grid-template-columns: 0.3fr 0.9fr 1fr 0.3fr;
        grid-template-rows: 0.1fr 1fr 0.2fr 0.2fr 0.3fr 0.2fr 0.2fr 0.2fr 0.3fr 0.2fr 0.2fr 0.2fr 0.1fr;
        grid-row-gap: 0.8%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'logo logo . . '
            'PIcon phone about contactus'
            'EIcon email jobs  terms'
            ' .  . press privacy'
            ' .  . blog  .';
        grid-template-columns: 0.6fr 2fr 1fr 1fr;
        grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
        grid-gap: 1%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            '. . . . . .'
            '. logo logo . . .'
            '. PIcon phone about contactus .'
            '. EIcon email jobs  terms .'
            '. .  . press privacy .'
            '. .  . blog  . .'
            '. . . . . .';
        grid-template-columns: 0.2fr 0.6fr 3fr 1fr 1fr 0.2fr;
        grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr 0.2fr;
        grid-gap: 2%;
    }
    @media screen and (min-width: 1025px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            '. . . . . .'
            '. logo logo . . .'
            '. PIcon phone about contactus .'
            '. EIcon email jobs  terms .'
            '. .  . press privacy .'
            '. .  . blog  . .'
            '. . . . . .';
        grid-template-columns: 1fr 1fr 4fr 2fr 2fr 1fr;
        grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr 0.5fr 0.5fr 0.2fr;
        grid-gap: 2%;
    }
`;

export const Emailtext = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: email;
        font-size:1.2em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: email;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: email;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: email;
        font-size: 1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Phonetext = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: phone;
        font-size: 1.2em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: phone;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: phone;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: phone;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const AboutUs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: about;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: about;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: about;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: about;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Jobs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: jobs;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: jobs;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: jobs;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: jobs;
        font-size: 1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Press = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: press;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: press;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: press;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: press;
        font-size: 1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Blog = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: blog;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: blog;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: blog;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: blog;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const ContactUs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: contactus;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: contactus;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: contactus;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: contactus;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Terms = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: terms;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: terms;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: terms;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: terms;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const Privacy = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: privacy;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: privacy;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: privacy;
        font-size:1.4em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: privacy;
        font-size:1.8em;
        color: white;
        font-weight: 400;
    }
`;
export const LogoImg = styled.img.attrs({
    src: `${logo}`
})
`
    grid-area: logo;
    width: 100%;
    height: 100%;
    filter: brightness(0) invert(1);
`;
export const EmailImg = styled.img.attrs({
    src: `${email}`
})
`
    grid-area: EIcon;
    width: 50%;
    height: 70%;
    margin: 10% 10% 10% 0%; 
`;
export const PhoneImg = styled.img.attrs({
    src: `${phone}`
})
`
    grid-area: PIcon;
    width: 50%;
    height: 70%;
    margin: 10% 10% 10% 0%; 
`;
