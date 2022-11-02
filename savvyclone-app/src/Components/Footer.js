import React from 'react'
import '../Styles/Footer.scss'

export default function Footer() {
  return (
    <>
    <footer>
        <div className="footer-container">
            <div className="footer-logo">
                <img src="https://shop.savvyapp.in/assets/images/slogo2.svg"/>
                <p>SavvyPay is a technology services provider and is not a financial institution. The savings product and banking services provided by Yes Bank Limited (an associate of State Bank of India) in association with a technology service provider; all offers and discounts are subject to terms and conditions of the product manufacturers. Copyright ©️ Yellow Sky Technologies Private Limited.</p>
            </div>
            <div id="address-logo"><br></br>
                <p>Get in touch:</p>
                <img src="https://shop.savvyapp.in/assets/images/mail_icon.svg "/>&nbsp;&nbsp;
                <img src="https://shop.savvyapp.in/assets/images/linkedin_icon.svg"/>&nbsp;&nbsp;
                <img src="https://shop.savvyapp.in/assets/images/fb_icon.svg" />&nbsp;&nbsp;
                <img src="https://shop.savvyapp.in/assets/images/call_icon.svg" />&nbsp;&nbsp;
                <a href="#">T&C's</a>&nbsp;|&nbsp;
                <a href="#">FAQ's</a>&nbsp;|&nbsp;
                <a href="#">Privacy Policy.</a>
            
            </div>
        </div>
    </footer>
    </>
  )
}
