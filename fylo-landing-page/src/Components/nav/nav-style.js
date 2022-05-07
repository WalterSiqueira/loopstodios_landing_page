import styled from 'styled-components';
import logo from '../../Assets/images/logo.svg';
export const Nav = styled.div `
    @media screen and (max-width: 320px) {
        width: 100%;
        height:10%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        width: 100%;
        height: 10%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-evenly;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        width: 100%;
        height: 10%;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 2fr 3fr 0.6fr 0.6fr 0.6fr;
        grid-template-rows: 100%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        width: 100%;
        height: 10%;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 2fr 5fr 0.6fr 0.6fr 0.8fr;
        grid-template-rows: 100%;
    }
    @media screen and (min-width: 1025px) {
        width: 100%;
        height: 10%;
        display: grid;
        grid-template-areas: 
            'logo . features team signin';
        grid-template-columns: 2fr 6fr 1fr 1fr 1fr;
        grid-template-rows: 100%;
        margin: 0 5% 0 1%;
    }
`;
export const Features = styled.h1 ` 
    @media screen and (max-width: 320px) {
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 7% 0 0 10%;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 4% 0 0 20%;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: features;
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: features;
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 21% 10% 10% 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: features;
        font-size: 1.8em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
`;
export const Team = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 7% 0 0 0;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 4% 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: team;
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 27%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: team;
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 25% 10% 10% 27%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: team;
        font-size: 1.8em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 20%;
    }
`;
export const SignIn = styled.h1 `
    @media screen and (max-width: 320px) {
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 7% 0 0 0;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 4% 0 0 0;
    }
    @media screen and (min-width: 481px) and (max-width: 800px) {
        grid-area: signin;
        font-size: 1.2em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
    @media screen and (min-width: 801px) and (max-width: 1024px) {
        grid-area: signin;
        font-size: 1.4em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 20% 10% 10% 10%;
    }
    @media screen and (min-width: 1025px) {
        grid-area: signin;
        font-size: 1.8em; 
        font-family: Raleway;
        font-weight: 400;
        margin: 30% 10% 10% 10%;
    }
`;
export const LogoImg = styled.img.attrs({
    src: `${logo}`
})`
    @media screen and (max-width: 320px) {
        width: 30%;
        height: 50%;
        margin-top: 8%;
    }
    @media screen and (min-width: 321px) and (max-width: 480px) {
        width: 30%;
        height: 50%;
        margin-top: 5%;
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
