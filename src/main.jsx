import React from 'react';

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Teams from './pages/Teams';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/teams' element={<Teams />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
);
