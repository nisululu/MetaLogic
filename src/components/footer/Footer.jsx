import React from 'react'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="top">
        <div className="company-info">
          <div className="logo">
            <img src='./meta.png' alt="" />
            <span className='logo-text'>MetaLogic Software Pvt. Ltd.</span>
          </div>
          <ul>
            <li>Saptakhel, Lalitpur (Head office)</li>
            <li>+ 977 9851353599</li>
            <li>info@metalogic.com.np</li>
          </ul>
        </div>
        <div className="middle">
          <div className="company">
            <span>Company</span>
            <ul>
              <li>Feedback</li>
              <li>Partnership</li>
              <li>Terms and Conditions</li>
            </ul>
          </div>
          <div className="join">
            <span>Join</span>
            <ul>
              <li>Careers at MetaLogic</li>
              <li>Internships</li>
            </ul>
          </div>
        </div>
        <div className="services">
          <span>Services</span>
          <ul>
            <li>Custom Software Development</li>
            <li>Web Development</li>
            <li> Mobile App Development</li>
            <li>Cloud Computing Services</li>
            <li>Quality Assurance and Testing</li>
            <li>UI/UX Designing</li>
            <li>Maintenance and Support</li>
            <li>Dev Ops</li>
            <li>Blockchain Solutions</li>
          </ul>
        </div>
        <div className="social-media">
          <span>Join us on Social Medias</span>
          <ul>
            <li>Whatsapp</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
        </div>
        <hr style={{opacity:".1"}} />
        <span className="bottom">
        &copy;Copyright 2024 MetaLogic. All rights reserved.
        </span>
    </footer>
  )
}

export default Footer
