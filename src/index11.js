import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import Connect from './Connect';
import UiUxHero from './UiUxHero';
import Header2 from './Header2';
import UiUxCards from './UiUxCards';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header2/>
    <UiUxHero/>
    <UiUxCards/>
    <Connect/>
  </React.StrictMode>
);
