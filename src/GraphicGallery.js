import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import GraphicHero from './Components/GraphicDesign/GraphicHero';
import GraphicCards from "./Components/GraphicDesign/GraphicCards"

export const GraphicGallery = () => {
  return (
    <React.StrictMode>
      <GraphicHero/>
      <GraphicCards/>
      <GoToTop />
    </React.StrictMode>
  );
};

export default GraphicGallery;