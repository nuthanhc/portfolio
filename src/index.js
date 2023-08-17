import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Technologies from './technologies';
import Internship from './internship';
import Connect from './Connect';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <AboutMe />
    <SkillSet/>
    <Technologies/>
    <Internship/>
    <Connect/>
  </React.StrictMode>
);
