import styled from 'styled-components';
import illust from '../../Assets/images/illustration-2.svg';
import  arrow from '../../Assets/images/icon-arrow.svg';
import quote from '../../Assets/images/icon-quotes.svg';
import avatar from '../../Assets/images/avatar-testimonial.jpg';
export const SecondSection = styled.div `
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 600px;
        display: flex;
        flex-flow: column nowrap;
        text-align: left;
        margin: 2% 0 0 2%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 500px;
        display: grid;
        grid-template-areas: 
            'title . illustTwo'
            'sub . illustTwo'
            'link . illustTwo'
            'testimony . illustTwo';
        grid-template-columns: 290px 10px 400px;
        grid-template-rows: 50px 150px 50px 200px;
        margin: 1%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 500px;
        display: grid;
        grid-template-areas: 
            'title . illustTwo'
            'sub . illustTwo'
            'link . illustTwo'
            'testimony . illustTwo';
        grid-template-columns: 507px 10px 507px;
        grid-template-rows: 50px 150px 50px 200px;
        margin: 1%;
    }
`;
export const Testimony = styled.div `
    @media screen and (max-width: 480px) {
        width: 280px;
        height: 200px;
        margin: 20px;
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
        width: 280px;
        height: 200px;
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
        width: 280px;
        height: 200px;
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
`;
export const IllustImg2 = styled.img.attrs({
    src: `${illust}`
})
`
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 200px;
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
`;
export const H3Second = styled.h3 `
    @media screen and (max-width: 480px) {
        width: 300px;
        font-family: open-sans;
        font-size: 14px;
        margin: 0 0 0 10px;

    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: title;
        font-size: 18px;
        font-family: open-sans;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: title;
        font-size: 18px;
        font-family: open-sans;
    }
`;
export const ArrowIcon = styled.img.attrs({
    src: `${arrow}`
})
`
    @media screen and (max-width: 480px) {
        width: 30px;
        height: 30px;
        margin: 10px 0 0 5px;
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
`;
export const H4SecondOne = styled.h4 `
    @media screen and (max-width: 480px) {
        font-family: Open-Sans;
        font-size: 12px;
        margin: 10px 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 14px;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 14px;
    }
`;
export const H4SecondTwo = styled.h4 `
    @media screen and (max-width: 480px) {
        font-family: Open-Sans;
        font-size: 12px;
        margin: 10px 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 14px;
        margin-top: 80px;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-family: Open-Sans;
        font-size: 14px;
        margin-top: 80px;
    }
`;
export const Paragraph = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: text;
        font-family: open-sans;
        font-size: 12px;

    }
`;
export const Name = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: name;
        font-family: open-sans;
        font-size: 16px;
        margin: 0 0 1px 5px;

    }
`;
export const Job = styled.p `
    @media screen and (max-width: 1024px) {
        grid-area: job;
        font-family: open-sans;
        font-size: 14px;
        margin: 0 0 2px 5px;

    }
`;
export const ButtonS = styled.button `
    @media screen and (max-width: 480px) {
        text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 18px;
        width: 60%;
        height: 45px;
        margin: 0 0 0 20%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
       grid-area: link; 
       text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 18px;
        width: 60%;
        height: 45px;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
       grid-area: link; 
       text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 18px;
        width: 60%;
        height: 45px;
    }
`;
