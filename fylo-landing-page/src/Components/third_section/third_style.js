import styled from 'styled-components';

export const ThirdSection = styled.div `
    @media screen and (max-width: 320px) {
        width: 100%;
        height: 190px;
        background-color: hsl(238, 22%, 44%);
        display: flex;
        flex-flow: column nowrap;
        text-align: center; 
        padding: 60px;
        padding-left: 0;
    }
`;
export const H3Third = styled.h3 `
    @media screen and (max-width: 320px) {
        font-size: 18px;
        color: white;
        font-weight: 400;
        margin: 30px 0 0 5%;
    }
`;
export const Paragraph = styled.p `
    @media screen and (max-width: 320px) {
        font-size: 12px;
        color: white;
        font-weight: 200;
        margin: 10px;
    }
`;
