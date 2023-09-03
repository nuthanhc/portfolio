import React from "react";
import AboutMe from "./Components/HomePage/AboutMe";
import SkillSet from "./Components/HomePage/SkillSet";
import Tools from "./Components/HomePage/Tools";
import Internship from "./Components/HomePage/Internship";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const fragment = location.hash;
    if (fragment) {
      const targetElement = document.querySelector(fragment);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.replaceState({}, document.title, location.pathname);
      }
    }
  }, [location]);
  return (
    <React.StrictMode>
      <AboutMe />
      <SkillSet />
      <Tools />
      <Internship
        Title="Internship Chronicles"
        Heading="Web Technology"
        About="'I refined my Web Development skills during a transformative 6-month
       internship at IRP Innovative Solutions. Immersed in real-world
       projects, I garnered invaluable experience and actively contributed to
       impactful solutions. This paid opportunity further amplified my
       expertise, enabling me to elevate my Web Development skills while
       delivering meaningful contributions to real-world projects.'"
      />
    </React.StrictMode>
  );
};

export default Home;
