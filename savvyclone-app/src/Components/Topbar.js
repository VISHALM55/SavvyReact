import React from 'react'
import '../Styles/Topbar.scss';




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
          <span className='bold-font'>Get Rewarded with <br></br>Savvypay</span><br></br>
          <p className='light-font'>Wish, Save and Buy for the<br></br> products you love, guilt-free</p><br></br><br></br>
          <button className='banner-btn'>KNOW MORE</button>
        </div>
        <div className='bank'>
        <div className='payment-topbar'>
            <p><b>Shop securely, </b>setup payments with topnotch</p>   
    </div>
        <ul className ="payment-topbar-logo">
            <li><img src="https://savvyclone.netlify.app/static/media/hdfc-logo.1486b7440a2bd9d613a3edf1b5b515ca.svg" width="159" height="166"></img></li>
            <li><img src="https://savvyclone.netlify.app/static/media/icici-logo.203167b3101d63921f605fb44c422a76.svg" width="139" height="76"></img></li>
            <li><img src="https://savvyclone.netlify.app/static/media/axis-logo.8b6a207707c37d61c9566e7038bb7352.svg" width="139" height="76"></img></li>
            <li><img src="https://savvyclone.netlify.app/static/media/sbi-logo.aa98839b45cdfddb5157e28f630d0174.svg" width="90" height="66"></img></li>
        </ul>
    </div>
        
      
      </>
    )
  }

export default Topbar;