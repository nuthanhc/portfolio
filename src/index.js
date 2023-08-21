import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Footer from './Connect';
import UiUxGallery from './UiUxGallery';
import Home from './Home';
import GraphicGallery from './GraphicGallery';

const Index = () => {
  return (
    <React.StrictMode>
      <Router>
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


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Header />
//     <AboutMe />
//     <SkillSet/>
//     <Tools/>
//     <Internship/>
//     <Connect/>
//     <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//     </Routes>
//   </React.StrictMode>
// );
