import React from 'react'
import './footer.css'
import instagram from '../Assets/images/instagram.png'
import pinterest from '../Assets/images/pinterest.png'
const currentdate = new Date();
const year = currentdate.getFullYear();
const Footer = () => {
  return (
    <div className='footer'>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className='footer-social-icons'>
            <div className='footer-icons-container'>
                <img src={instagram} alt="" />
            </div>
            <div className='footer-icons-container'>
                <img src={pinterest} alt="" />
            </div>
        </div>
        <div className='footer-copyright'>
            <hr />
            <p>Copyright @{year} - All Rights Reserved.</p>
        </div>

    </div>
  )
}


export default Footer;
