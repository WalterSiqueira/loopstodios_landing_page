import styled from 'styled-components';
import illust from '../../Assets/images/illustration-2.svg';
import  arrow from '../../Assets/images/icon-arrow.svg';
import quote from '../../Assets/images/icon-quotes.svg';
import avatar from '../../Assets/images/avatar-testimonial.jpg';
export const SecondSection = styled.div `
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 750px;
        display: flex;
        flex-flow: column nowrap;
        text-align: left;
        margin: 20px 0 20px;
    }
`;
export const Testimony = styled.div `
    @media screen and (max-width: 320px) {
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
        grid-template-columns: 10px 50px 200px 10px;
        grid-template-rows: 10px 20px 100px 25px 25px;
    }
`;
export const IllustImg2 = styled.img.attrs({
    src: `${illust}`
})
`
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 200px;
    }
`;
export const H3Second = styled.h3 `
    @media screen and (max-width: 320px;) {
        width: 300px;
        font-family: open-sans;
        font-size: 14px;
        margin: 0 0 0 10px;

    }
`;
export const ArrowIcon = styled.img.attrs({
    src: `${arrow}`
})
`
    @media screen and (max-width: 320px) {
        width: 30px;
        height: 30px;
        margin: 10px 0 0 5px;
    }
`;
export const QuotesIcon = styled.img.attrs({
    src: `${quote}`
})
`
    @media screen and (max-width: 320px) {
        grid-area: quote;
        width: 50%;
        height: 70%;
    }
`;
export const AvatarT = styled.img.attrs({
    src: `${avatar}`
})
`
    @media screen and (max-width: 320px) {
        grid-area: pic;
        width: 100%;
        height: 100%;
        border-radius: 10vh; 
    }
`;
export const H4Second = styled.h4 `
    @media screen and (max-width: 320px;) {
        font-family: Open-Sans;
        font-size: 12px;
        margin: 10px 0 0 0;
    }
`;
export const Paragraph = styled.p `
    @media screen and (max-width: 320px) {
        grid-area: text;
        font-family: open-sans;
        font-size: 12px;

    }
`;
export const Name = styled.p `
    @media screen and (max-width: 320px) {
        grid-area: name;
        font-family: open-sans;
        font-size: 16px;
        margin: 0 0 1px 5px;

    }
`;
export const Job = styled.p `
    @media screen and (max-width: 320px) {
        grid-area: job;
        font-family: open-sans;
        font-size: 14px;
        margin: 0 0 2px 5px;

    }
`;
export const ButtonS = styled.button `
    @media screen and (max-width: 320px) {
        text-decoration: underline green;
        background-color: white;
        border: hidden;
        font-size: 18px;
        width: 220px;
        height: 45px;
        margin: 0 0 0 20%;
    }
`;
