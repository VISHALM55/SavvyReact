import React from 'react'
import Products from './Components/Products';
import Customer from './Components/Customer';
import Press from './Components/Press'
import Header from './Components/Topbar';


export default function Home() {
  return (
    <>
    
    <Header />
    <Products />
    <Customer/>
    <Press />

    </>
  )
}
