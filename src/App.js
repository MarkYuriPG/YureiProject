/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import MyAppBar from './components/MyAppBar.js';
import './App.css';
import Introduction from './components/Introduction.js';
import About from './components/about.js';
import "@fontsource/outfit";
import "@fontsource/outfit/400.css";
import Experience from './components/experience.js';
import Projects from './components/projects.js';
import Contacts from './components/contacts.js';

function App() {

  return (
    <div className="App">
        <MyAppBar />
        <div id="portfolio"><Introduction /></div>
        <div id="about"><About /></div>
        <div id="experience"><Experience /></div>
        <div id="projects"><Projects /></div>
        <div id="contact"><Contacts /></div>
    </div>
  );
}

export default App;
