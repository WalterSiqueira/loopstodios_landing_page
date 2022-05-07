import styled from 'styled-components';
import illust from '../../Assets/images/illustration-2.svg';
import  arrow from '../../Assets/images/icon-arrow.svg';
import quote from '../../Assets/images/icon-quotes.svg';
import avatar from '../../Assets/images/avatar-testimonial.jpg';
export const SecondSection = styled.div `
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 55%;
        display: flex;
        flex-flow: column nowrap;
        text-align: left;
        margin: 2% 0 0 2%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title . illustTwo'
            'sub . illustTwo'
            'link . illustTwo'
            'testimony . illustTwo';
        grid-template-columns: 4fr 0.1fr 4fr;
        grid-template-rows: 0.5fr 2fr 0.5fr 2fr;
        margin: 1%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title . illustTwo'
            'sub . illustTwo'
            'link . illustTwo'
            'testimony . illustTwo';
        grid-template-columns: 5fr 0.1fr 5fr;
        grid-template-rows: 0.5fr 1fr 0.5fr 2fr;
        margin: 1%;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title . illustTwo'
            'sub . illustTwo'
            'link . illustTwo'
            'testimony . illustTwo';
        grid-template-columns: 7fr 0.1fr 7fr;
        grid-template-rows: 0.5fr 1fr 0.5fr 2fr;
        margin: 1%;
    }
`;
export const Testimony = styled.div `
    @media screen and (max-width: 480px) {
        width: 55%;
        height: 50%;
        margin: 5%;
        display: grid;
        grid-template-areas: 
            ". . . ."
            ". quote . ."
            ". text text ."
            ". pic name ."
            ". pic job .";
        grid-template-columns: 0.1fr 0.5fr 2fr 0.1fr;
        grid-template-rows: 0.1fr 0.2fr 1fr 0.2fr 0.2fr;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 55%;
        height: 50%;
        grid-area: testimony;
        display: grid;
        grid-template-areas: 
            ". . . ."
            ". quote . ."
            ". text text ."
            ". pic name ."
            ". pic job .";
        grid-template-columns: 0.1fr 0.5fr 2fr 0.1fr;
        grid-template-rows: 0.1fr 0.2fr 1fr 0.2fr 0.2fr;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 55%;
        height: 50%;
        grid-area: testimony;
        display: grid;
        grid-template-areas: 
            ". . . ."
            ". quote . ."
            ". text text ."
            ". pic name ."
            ". pic job .";
        grid-template-columns: 0.1fr 0.5fr 2fr 0.1fr;
        grid-template-rows: 0.1fr 0.2fr 1fr 0.2fr 0.2fr;
    }
    @media screen and (min-width: 1025px) {
        width: 55%;
        height: 50%;
        grid-area: testimony;
        display: grid;
        grid-template-areas: 
            ". . . ."
            ". quote . ."
            ". text text ."
            ". pic name ."
            ". pic job .";
        grid-template-columns: 0.1fr 0.5fr 4fr 0.1fr;
        grid-template-rows: 0.1fr 0.2fr 1fr 0.2fr 0.2fr;
    }
`;
export const IllustImg2 = styled.img.attrs({
    src: `${illust}`
})
`
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 30%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 100%;
        grid-area: illustTwo;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 100%;
        grid-area: illustTwo;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 100%;
        grid-area: illustTwo;
    }
`;
export const H3Second = styled.h3 `
    @media screen and (max-width: 480px) {
        width: 90%;
        font-family: open-sans;
        font-size: 1.4em;
        margin: 0 0 0 5%;

    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: title;
        font-size: 1.6em;
        font-family: open-sans;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: title;
        font-size: 1.4em;
        font-family: open-sans;
    }
    @media screen and (min-width: 1025px) {
        grid-area: title;
        font-size: 2em;
        font-family: open-sans;
    }
`;
export const ArrowIcon = styled.img.attrs({
    src: `${arrow}`
})
`
    @media screen and (max-width: 480px) {
        width: 10%;
        height: 50%;
        margin: 10% 0 0 5%; 
    }
`;
export const QuotesIcon = styled.img.attrs({
    src: `${quote}`
})
`
    @media screen and (max-width: 1024px) {
        grid-area: quote;
        width: 50%;
        height: 70%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: quote;
        width: 50%;
        height: 70%;
    }
`;
export const AvatarT = styled.img.attrs({
    src: `${avatar}`
})
`
    @media screen and (max-width: 1024px) {
        grid-area: pic;
        width: 100%;
        height: 100%;
        border-radius: 10vh; 
    }
    @media screen and (min-width: 1025px) {
        grid-area: pic;
        width: 100%;
        height: 100%;
        border-radius: 10vh; 
    }
`;
export const H4SecondOne = styled.h4 `
    @media screen and (max-width: 480px) {
        font-family: Open-Sans;
        font-size: 1.2em;
        margin: 5% 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.2em;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.2em;
    }
    @media screen and (min-width: 1025px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.4em;
    }
`;
export const H4SecondTwo = styled.h4 `
    @media screen and (max-width: 480px) {
        font-family: Open-Sans;
        font-size: 1.2em;
        margin: 10% 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.2em;
        margin-top: 30%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.2em;
        margin-top: 15%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 1.4em;
        margin-top: 14%;
    }
`;
export const Paragraph = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: text;
        font-family: open-sans;
        font-size: 1em;

    }
    @media screen and (min-width: 1025px) {
        grid-area: text;
        font-family: open-sans;
        font-size: 1.4em;

    }
`;
export const Name = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: name;
        font-family: open-sans;
        font-size: 1.2em;
        margin: 0 0 1px 5px;

    }
    @media screen and (min-width: 1025px) {
        grid-area: name;
        font-family: open-sans;
        font-size: 1.4em;
        margin: 0 0 1px 5px;

    }
`;
export const Job = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: job;
        font-family: open-sans;
        font-size: 1em;
        margin: 0 0 2px 5px;

    }
    @media screen and (min-width: 1025px) {
        grid-area: job;
        font-family: open-sans;
        font-size: 1.2em;
        margin: 0 0 2px 5px;

    }
`;
export const ButtonS = styled.button `
    @media screen and (max-width: 480px) {
        text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 1.4em;
        width: 60%;
        height: 55%;
        margin: 0 0 0 20%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
       grid-area: link; 
       text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 1.4em;
        width: 60%;
        height: 45%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
       grid-area: link; 
       text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 55%;
        width: 60%;
        height: 55%;
    }
    @media screen and (min-width: 1025px) {
       grid-area: link; 
       text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 2em;
        width: 60%;
        height: 55%;
    }
`;
