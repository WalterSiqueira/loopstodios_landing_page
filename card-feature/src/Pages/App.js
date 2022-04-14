import React from 'react';
import './App.css';
import Head from '../Components/Head/Head.js';
import Supervisor from '../Components/Supervisor/Supervisor.js';
import TeamBuilder from '../Components/TeamBuilder/TeamBuilder.js';
import Karma from '../Components/Karma/Karma.js';
import Calculator from '../Components/Calculator/Calculator.js';


function Main() {
  return(
    <main className='MainBlock'>
      <Head/> 
      <div className='cardsBlock'>
          <Supervisor/>
          <TeamBuilder/> 
          <Karma/> 
          <Calculator/>
      </div>
      <footer className='Attribution'>
        <p className="attributionP">Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a href="https://github.com/WalterSiqueira" target="blank">Walter Siqueira</a>.
        </p>
      </footer>
    </main>
  )
}

export default Main
