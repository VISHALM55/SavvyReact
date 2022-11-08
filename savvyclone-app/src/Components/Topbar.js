import React from 'react'
import '../Styles/Topbar.scss';
import { Routes, Route, Link } from 'react-router-dom'; 
import KnowMore from './KnowMore';




const Topbar =()=>{

    return (
      <>
      
        <div className='topbar'>
            <img className='topbar-logo' src="https://savvyclone.netlify.app/static/media/logo.df99f92804cded1ea132.webp"></img>
        </div>
        <div className='banner'>
          <img className='banner-img' src="https://savvyclone.netlify.app/static/media/banner.2ac6ee22708236c2fb26.jpg"></img>
        </div>
          <div className='banner-right'>
            <span className='bold-font'>Get Rewarded with <br></br>Savvypay</span><br></br><br></br>
          <p className='light-font'>Wish, Save and Buy for the<br></br> <span>products you love, guilt-free</span></p>
        </div>
        <Link to='/KnowMore'><button className='banner-btn'>KNOW MORE</button></Link>
          <Routes>
        <Route path='/KnowMore' element ={<KnowMore />}/>
      </Routes>
        <div className='bank'>
        <div className='payment-topbar'>
            <p><b>Shop securely, </b>setup payments with topnotch</p>   
    </div>
        <div className ="payment-topbar-logo">
            <img className='bankimage1' src="https://savvyclone.netlify.app/static/media/hdfc-logo.1486b7440a2bd9d613a3edf1b5b515ca.svg"></img>
            <img className='bankimage2' src="https://savvyclone.netlify.app/static/media/icici-logo.203167b3101d63921f605fb44c422a76.svg" ></img>
            <img className='bankimage3' src="https://savvyclone.netlify.app/static/media/axis-logo.8b6a207707c37d61c9566e7038bb7352.svg" ></img>
            <img className='bankimage4' src="https://savvyclone.netlify.app/static/media/sbi-logo.aa98839b45cdfddb5157e28f630d0174.svg" ></img>
        </div>
    </div>
        
      
      </>
    )
  }

export default Topbar;