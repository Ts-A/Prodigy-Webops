import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Schedule from './pages/Schedule';
import Teams from './pages/Teams';
import Contacts from './pages/Contacts';
import Gallery from './pages/Gallery';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/about' element={<About />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/contact' element={<Contacts />} />
        <Route path='/gallery' element={<Gallery />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
