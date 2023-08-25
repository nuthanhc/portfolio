import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import UiUxHero from './UiUxHero';
import UiUxCards from './UiUxCards';

export const UiUxGallery = () => {
  return (
    <React.StrictMode>
      <UiUxHero />
      <UiUxCards />
      <GoToTop />
    </React.StrictMode>
  );
};

export default UiUxGallery;