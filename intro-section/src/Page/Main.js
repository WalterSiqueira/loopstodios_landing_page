import React from 'react';
import Head from  '../Components/head/head.js';
import Content from '../Components/content/content.js';
import Attribution from '../Components/Attribution/Attribution.js';
import './Main.css';
function Main() {
    return (
      <main className='main_block'>
        <Head/>
        <Content/>
        <Attribution/> 
      </main>
    )
}

export default Main;
