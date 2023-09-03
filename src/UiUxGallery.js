import React from 'react';
import GoToTop from './GoToTop';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import UiUxHero from './Components/UiUx/UiUxHero';
import UiUxBody from './Components/UiUx/UiUxBody';

export const UiUxGallery = () => {
  return (
    <React.StrictMode>
      <UiUxHero />
      <UiUxBody/>
      <GoToTop />
    </React.StrictMode>
  );
};

export default UiUxGallery;