import './App.scss';
import React from 'react';
import Products from './Components/Products';
import Customer from './Components/Customer';
import Press from './Components/Press'
import Header from './Components/Topbar';
import Footer from './Components/Footer';



function App() {
  return (
  <>

    <Header />
    <Products />
    <Customer/>
    <Press />
    <Footer />
  
  </>
  );
}

export default App;
