import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Tools from './Tools';
import Internship from './Internship';
import Connect from './Connect';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <SkillSet/>
    <Tools/>
    <Internship/>
    <Connect/>
  </React.StrictMode>
);
