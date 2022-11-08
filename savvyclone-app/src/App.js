import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import KnowMore from './Components/KnowMore';
import Home from './Home';
import Footer from './Components/Footer';




function App() {
  
  return (
  <>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/KnowMore' element={<KnowMore />}/>
  </Routes>
  <Footer />
  </>
  );
}

export default App;
