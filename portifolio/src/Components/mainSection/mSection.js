import React from 'react';
import main from '../../Assets/css-styles/main.css';
import profile from '../../Assets/images/profile.jpg';
import calculator from '../../Assets/images/Calculator.png';
import fylo from '../../Assets/images/FyloLanding.png';
import snap from '../../Assets/images/Snap.png';
import card from '../../Assets/images/CardComponent.png';
import twitter from '../../Assets/images/twitter.png';
import linkedin from '../../Assets/images/linkedin.png';
import email from '../../Assets/images/o-email.png';
export function Mother() {
    return (
        <main className="mainDiv">
            <nav className="menublock">
                <button className="contactsbtn">Contacts</button>
                <button className="projectsbtn">Projects</button>
                <button className="aboutbtn">About Me</button>
                <button className="techbtn">Technology</button>
            </nav>
            <section className="Presentation">
                <img src={profile} className="profile_pic" alt=""/> 
                <h2 className="name">Walter Siqueira</h2>
                <h3 className="job">Programmer</h3>
            </section>
            <section className="about">
                <h1 className="title_about">About me</h1>
                <p className="description">Hello i'm Walter Siqueira a self-taugh programmer, born in Bazil,
                i've learned programming all by myself at home throught the internet.
                You can find my previous works on the Projects button bellow</p>
                <p className="welcome"> hope you like my work and welcome to my website!!.</p>
            </section>
            <section className="projects">
                <img src={card} className="card" alt="card-component project"/>     
                <img src={calculator} className="calc" alt="interactive calculator"/>
                <img src={fylo} className="fylo" alt="corporative introduction page"/>
                <img src={snap} className="snap" alt="corporative introduction homepage"/>
            </section>
            <section className="technology">
                <h1 className="title_tech">Technology</h1>
                <ul className="stylelist">
                    <li>Css</li>
                    <li>Scss/Sass</li>
                    <li>Styled Components</li>
                </ul>
                <ul className="logiclist">
                    <li>Javascript</li>
                    <li>React.js</li>
                </ul>
            </section>
            <section className="contact">
                <img src={linkedin} width="50px" height="50px"/>
                <h2>my linkedin</h2>
                <img src={twitter} width="50px" height="50px"/>
                <h2>my twitter</h2>
                <img src={email} width="50px" height="50px"/>
                <h2>walterbarbozasiqueira@gmail.com</h2>
            </section>
        </main>
    )
}
