import styled from 'styled-components';
import illustration1 from '../../Assets/images/illustration-1.svg';

export const FirstSection = styled.div `
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 50%;
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title title . illustone'
            'sub sub . illustone'
            'input button . illustone';
        grid-template-columns: 1fr 1fr 0.1fr 3fr;
        grid-template-rows: 1fr 1fr 0.5fr ;
        grid-row-gap: 10px;
        margin: 1%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title title . illustone'
            'sub sub . illustone'
            'input button . illustone';
        grid-template-columns: 3fr 3fr 0.1fr 3fr;
        grid-template-rows: 1fr 1fr 0.5fr ;
        grid-row-gap: 10px;
        margin: 1%;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 55%;
        display: grid;
        grid-template-areas: 
            'title title . illustone'
            'sub sub . illustone'
            'input button . illustone';
        grid-template-columns: 4fr 4fr 0.1fr 4fr;
        grid-template-rows: 1fr 1fr 0.5fr ;
        grid-row-gap: 10px;
        margin: 1%;
    }
`;
export const IllustImg = styled.img.attrs({
    src: `${illustration1}`
})`
    @media screen and (max-width: 480px) {
        width: 100%;
        height: 200px;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: illustone;
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: illustone;
        width: 100%;
        height: 100%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: illustone;
        width: 100%;
        height: 100%;
    }
`;
export const H2 = styled.h2 `
    @media screen and (max-width: 480px;) {
        font-family: open-sans;
        font-size: 1.4em;

    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: title;
        font-family: open-sans;
        font-size: 2.2em;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: title;
        font-family: open-sans;
        font-size: 2.2em;
    }
    @media screen and (min-width: 1025px) {
        grid-area: title;
        font-family: open-sans;
        font-size: 2.4em;
    }
    
`;
export const H3 = styled.h3 `
    @media screen and (max-width: 480px) {
        font-family: Open-Sans;
        font-size: 1.2em;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: sub;
        font-family: open-sans;
        font-size: 1.4em;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: sub;
        font-family: open-sans;
        font-size: 1.4em;
    }
    @media screen and (min-width: 1025px) {
        grid-area: sub;
        font-family: open-sans;
        font-size: 2em;
    }
`;
export const Input = styled.input `
    @media screen and (max-width: 480px) {
        width: 60%;
        height: 100%;
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
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: input;
        width: 90%;
        height: 50%;
        text-align: left;
        border: solid black 1px;
    }
    @media screen and (min-width: 1025px) {
        grid-area: input;
        width: 90%;
        height: 50%;
        text-align: left;
        border: solid black 1px;
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
        width: 80%;
        height: 55%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin-left: 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: button;
        width: 80%;
        height: 55%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin-left: 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: button;
        width: 80%;
        height: 55%;
        background-color: blue;
        color: white;
        border: solid blue;
        margin-left: 10%;
    }
`;
