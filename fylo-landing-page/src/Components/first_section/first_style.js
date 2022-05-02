import styled from 'styled-components';
import illustration1 from '../../Assets/images/illustration-1.svg';

export const FirstSection = styled.div `
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 600px;
        display: flex;
        flex-flow: column nowrap;
        text-align: center;
    }
`;
export const IllustImg = styled.img.attrs({
    src: `${illustration1}`
})`
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 200px;
    }
`;
export const H2 = styled.h2 `
    @media screen and (max-width: 320px;) {
        font-family: open-sans;
        font-size: 18px;

    }
`;
export const H3 = styled.h3 `
    @media screen and (max-width: 320px;) {
        font-family: Open-Sans;
        font-size: 14px;
    }
`;
export const Input = styled.input `
    @media screen and (max-width: 320px) {
        width: 294px;
        height: 30px;
        margin: 0 10px 0 10px;
        text-align: left;
        border: solid black 1px;
    }
`;
export const Button = styled.button `
    @media screen and (max-width: 320px) {
        width: 300px;
        height: 30px;
        margin: 10px 10px 0 10px;
        background-color: blue;
        color: white;
        border: solid blue;
    }
`;
