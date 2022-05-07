import styled from 'styled-components';

export const ThirdSection = styled.div `
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 55%;
        background-color: hsl(238, 22%, 44%);
        display: flex;
        flex-flow: column nowrap;
        text-align: center; 
        padding-left: 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 55%;
        background-color: hsl(238, 22%, 44%);
        display: grid;
        grid-template-areas: 
            'title . input'
            'sub . button';
        grid-template-columns: 3fr 0.2fr 3fr ;
        grid-template-rows: 0.5fr 1fr;
        grid-row-gap: 5px;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 55%;
        background-color: hsl(238, 22%, 44%);
        display: grid;
        grid-template-areas: 
            'title . input'
            'sub . button';
        grid-template-columns: 5fr 0.1fr 5fr ;
        grid-template-rows: 0.5fr 1fr;
        grid-row-gap: 5px;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 55%;
        background-color: hsl(238, 22%, 44%);
        display: grid;
        grid-template-areas: 
            'title . input'
            'sub . button';
        grid-template-columns: 7fr 0.1fr 7fr ;
        grid-template-rows: 0.5fr 1fr;
        grid-row-gap: 5px;
    }
`;
export const H3Third = styled.h3 `
    @media screen and (max-width: 480px) {
        font-size: 1.4em;
        color: white;
        font-weight: 400;
        margin: 30px 0 0 5%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: title;
        font-size: 1.6em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: title;
        font-size: 1.6em;
        color: white;
        font-weight: 400;
    }
    @media screen and (min-width: 1025px) {
        grid-area: title;
        font-size: 2em;
        color: white;
        font-weight: 400;
    }
`;
export const Paragraph = styled.p `
    @media screen and (max-width: 480px) {
        font-size: 1.2em;
        color: white;
        font-weight: 200;
        margin: 10px;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
        margin: 0;

    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-size: 1.4em;
        color: white;
        font-weight: 400;
        margin: 0;

    }
    @media screen and (min-width: 1025px) {
        grid-area: sub;
        font-size: 1.5em;
        color: white;
        font-weight: 400;
        margin: 0;

    }
`;
export const Input = styled.input `
    @media screen and (max-width: 480px) {
        width: 60%;
        height: 50%;
        margin: 0 0 0 18%;
        text-align: left;
        border: solid black 1px;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: input;
        width: 90%;
        height: 50%;
        text-align: left;
        border: solid black 1px;
        margin: 10px 0 0 0;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: input;
        width: 90%;
        height: 50%;
        text-align: left;
        border: solid black 1px;
        margin: 10px 0 0 0;
    }
    @media screen and (min-width: 1025px) {
        grid-area: input;
        width: 90%;
        height: 50%;
        text-align: left;
        border: solid black 1px;
        margin: 20px 0 0 0;
    }
`;
export const Button = styled.button `
    @media screen and (max-width: 480px) {
        width: 61%;
        height: 50%;
        margin: 2% 0 0 18%;
        background-color: blue;
        color: white;
        border: solid blue;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: button;
        width: 50%;
        height: 30%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin: 0;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: button;
        width: 50%;
        height: 30%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin: 0;
    }
    @media screen and (min-width: 1025px) {
        grid-area: button;
        width: 50%;
        height: 30%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin: 0;
    }
`;
