import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import UiUxHero from './UiUxHero';
import Header2 from './Header2';
import UiUxCards from './UiUxCards';

export const UiUxGallery = () => {
  return (
    <React.StrictMode>
      <Header2 />
      <UiUxHero />
      <UiUxCards />
      <GoToTop />
    </React.StrictMode>
  );
};

export default UiUxGallery;