import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import GraphicHero from './Components/GraphicDesign/GraphicHero';
import GraphicBody from "./Components/GraphicDesign/GraphicBody"

export const GraphicGallery = () => {
  return (
    <React.StrictMode>
      <GraphicHero/>
      <GraphicBody/>
      <GoToTop />
    </React.StrictMode>
  );
};

export default GraphicGallery;