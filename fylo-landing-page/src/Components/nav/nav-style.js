import styled from 'styled-components';
import logo from '../../Assets/images/logo.svg';
export const Nav = styled.div `
    @media screen and (max-width: 320px) {
        width: 320px;
        height: 100px;
        display: flex;
        flex-flow: row nowrap;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        width: 100%;
        height: 100px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 200px 335px 66px 66px 66px;
        grid-template-rows: 100%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 224px 600px 66px 66px 66px;
        grid-template-rows: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 100px;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 224px 990px 66px 66px 75px;
        grid-template-rows: 100%;
        margin: 0 20px 0 20px;
    }
`;
export const Features = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 10%;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 20%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: features;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: features;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: features;
        font-size: 20px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
`;
export const Team = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 40px;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: team;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 27%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: team;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 27%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: team;
        font-size: 20px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 27%;
    }
`;
export const SignIn = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 0;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 14px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20px 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: signin;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: signin;
        font-size: 18px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: signin;
        font-size: 20px; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
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
    @media screen and (min-width: 321px) and (max-width: 480px) {
        width: 70px;
        height: 30px;
        margin-top: 20px;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: logo;
        margin: 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: logo;
        margin: 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: logo;
        margin: 10%;
    }
`;
