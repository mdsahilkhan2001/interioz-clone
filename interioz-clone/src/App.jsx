 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/pages/Home';
import AboutUs from './Components/pages/About';
import Services from './Components/pages/Services';
import Contact from './Components/pages/Contact';
import Portfolio from './Components/pages/Portfolio';
import Header from './Components/Header';
import Footer from './Components/footer';
 
import './Components/styles.css';
import './Components/Portfolio.css';


const App = () => (
    <Router>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
    </Router>
);

export default App;
