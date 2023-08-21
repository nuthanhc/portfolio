import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Header2 from './Header2';
import GraphicHero from './GraphicHero';
import GraphicCards from "./GraphicCards"

export const GraphicGallery = () => {
  return (
    <React.StrictMode>
      <Header2 />
      <GraphicHero/>
      <GraphicCards/>
      <GoToTop />
    </React.StrictMode>
  );
};

export default GraphicGallery;