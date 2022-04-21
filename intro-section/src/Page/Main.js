import React from 'react';
import Head from  '../Components/head/head.js';
import Content from '../Components/content/content.js';
import './Main.css';
function Main() {
    return (
      <main className='main_block'>
        <Head/>
        <Content/>
      </main>
    )
}

export default Main;
