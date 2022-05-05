import styled from 'styled-components';
import logo from '../../Assets/images/logo.svg';
import email from '../../Assets/images/icon-email.svg';
import phone from '../../Assets/images/icon-phone.svg';

export const Footer = styled.div `
    @media screen and (max-width: 480px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 800px;
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
        grid-template-columns: 30px 90px 170px 30px;
        grid-template-rows: 20px 100px 30px 30px 50px 30px 30px 30px 50px 30px 30px 30px 20px;
        grid-row-gap: 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-areas: 
            'logo logo . . '
            'PIcon phone about contactus'
            'EIcon email jobs  terms'
            ' .  . press privacy'
            ' .  . blog  .';
        grid-template-columns: 60px 220px 100px 100px;
        grid-template-rows: 100px 50px 50px 50px 50px;
        grid-gap: 20px;
        padding: 40px;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-areas: 
            '. . . . . .'
            '. logo logo . . .'
            '. PIcon phone about contactus .'
            '. EIcon email jobs  terms .'
            '. .  . press privacy .'
            '. .  . blog  . .'
            '. . . . . .';
        grid-template-columns: 20px 60px 321px 100px 100px 20px;
        grid-template-rows: 20px 100px 50px 50px 50px 50px 20px;
        grid-gap: 10px;
    }
    @media screen and (min-width: 1025px) {
        background-color: hsl(243, 87%, 12%);
        width: 100%;
        height: 400px;
        display: grid;
        grid-template-areas: 
            '. . . . . .'
            '. logo logo . . .'
            '. PIcon phone about contactus .'
            '. EIcon email jobs  terms .'
            '. .  . press privacy .'
            '. .  . blog  . .'
            '. . . . . .';
        grid-template-columns: 154px 194px 455px 234px 234px 154px;
        grid-template-rows: 20px 100px 50px 50px 50px 50px 20px;
        grid-gap: 10px;
    }
`;

export const Emailtext = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: email;
        font-size:14px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: email;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: email;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: email;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Phonetext = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: phone;
        font-size:14px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: phone;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: phone;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: phone;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const AboutUs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: about;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: about;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: about;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: about;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Jobs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: jobs;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: jobs;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: jobs;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: jobs;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Press = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: press;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: press;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: press;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: press;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Blog = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: blog;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: blog;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: blog;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: blog;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const ContactUs = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: contactus;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: contactus;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: contactus;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: contactus;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Terms = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: terms;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: terms;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: terms;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: terms;
        font-size:20px;
        color: white;
        font-weight: 400;
    }
`;
export const Privacy = styled.p `
    @media screen and (max-width: 480px) {
        grid-area: privacy;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: privacy;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: privacy;
        font-size:18px;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: privacy;
        font-size:20px;
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
