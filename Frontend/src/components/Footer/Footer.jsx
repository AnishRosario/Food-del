import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

        <div className="footer-left">
        <img src={assets.logo} alt="" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum delectus dolorem unde beatae quia perspiciatis corporis velit illum ducimus maxime.</p>
        <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
        </div>
        </div>
        <div className="footer-center">
         <h2>COMPANY</h2>
         <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
         </ul>
        </div>
        <div className="footer-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+91 9876543210</li>
            <li>conatct@tomato.com</li>
           </ul>
        </div>
        </div>
         <hr/>
         <p className='copy-right'>Copyright 2024 -All rights reserved.</p>
    </div>
  )
}

export default Footer