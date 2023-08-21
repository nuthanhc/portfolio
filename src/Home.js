import React from 'react';
import Header from './Header';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Tools from './Tools';
import Internship from './Internship';

export const Home = () => {
    return (
      <React.StrictMode>
        <Header/>
        <AboutMe/>
        <SkillSet/>
        <Tools />
        <Internship />
      </React.StrictMode>
    );
  };
  
  export default Home;