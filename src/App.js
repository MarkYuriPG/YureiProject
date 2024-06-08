/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import MyAppBar from './components/MyAppBar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction.js';
import About from './components/about.js';
import "@fontsource/outfit";
import "@fontsource/outfit/400.css";
import Experience from './components/experience.js';

function App() {

  return (
    <div className="App">
      <Router>
        <MyAppBar />
        <Introduction />
        <About/>
        <Experience/>
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
