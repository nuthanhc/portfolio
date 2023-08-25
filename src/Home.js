import React from 'react';
import AboutMe from './AboutMe';
import SkillSet from './SkillSet';
import Tools from './Tools';
import Internship from './Internship';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const fragment = location.hash;
    if (fragment) {
      const targetElement = document.querySelector(fragment);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
        window.history.replaceState({}, document.title, location.pathname);
      }
    }
  }, [location]);
    return (
      <React.StrictMode>
        <AboutMe/>
        <SkillSet/>
        <Tools />
        <Internship />
      </React.StrictMode>
    );
  };
  
  export default Home;