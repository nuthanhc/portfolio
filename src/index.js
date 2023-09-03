import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Footer from './Components/Footer/Footer';
import UiUxGallery from './UiUxGallery';
import Home from './Home';
import GraphicGallery from './GraphicGallery';
import Header from './Components/Header/Header';

const Index = () => {
  return (
    <React.StrictMode>
      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UiUxGallery" element={<UiUxGallery />} />
          <Route path="/GraphicGallery" element={<GraphicGallery />} />
        </Routes>
        <Footer/>
      </Router>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<Index />);
