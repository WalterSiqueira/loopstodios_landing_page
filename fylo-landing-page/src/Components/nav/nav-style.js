import styled from 'styled-components';
import logo from '../../Assets/images/logo.svg';
export const Nav = styled.div `
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 100px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;

    }

`;
export const H1 = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 0;
    }
`;
export const LogoImg = styled.img.attrs({
    src: `${logo}`
})`
    @media screen and (max-width: 320px) {
        width: 70px;
        height: 30px;
        margin-top: 20px;
    }
`;
