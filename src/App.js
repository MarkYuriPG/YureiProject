/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import MyAppBar from './components/MyAppBar.js';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Introduction from './components/Introduction.js';

function App() {
  return (
    <div className="App">
      <Router>
        <MyAppBar />
        <Introduction />
        <Routes>
        </Routes>
      </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

export default App;
