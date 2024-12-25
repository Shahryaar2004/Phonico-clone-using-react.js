import React from 'react';
import './Footer.css';
import head from './headphone.png';
import mail from './mail.png';

import fb from './facebook.svg';
import twitter from './twitter.svg';
import insta from './instagram.svg';
import link from './linkedin.svg';
import play from './playstore.jpeg'
import app from './appstore.jpeg'

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Contact Us Section */}
        <div className="footer-column">
          <h3>Contact Us!</h3>
          <div className="contact-item">
            <img src={head} alt="Phone Icon" className="contact-icon" />
            <p className="contact-text">We love taking your call</p>
          </div>
          <p className="contact-number">(484) 746-6426</p>
          <div className="contact-item">
            <img src={mail} alt="Email Icon" className="contact-icon" />
            <p className="contact-text">Drop a message</p>
          </div>
          <p className="contact-email">support@phonico.com</p>
        </div>

        {/* Opening Hours Section */}
        <div className="footer-column">
          <h3>Opening Hours</h3>
          <p>Monday - Sunday</p>
          <p>24 Hours Support</p>
        </div>

        {/* Quick Link Section */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul className="quick-links">
            <li>Home</li>
            <li>Blog</li>
            <li>Terms of use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Social Section */}
        <div className="footer-column">
          <h3>Social</h3>
          <div className="social-icons">
            <img src={fb} alt="Facebook" />
            <img src={twitter} alt="Twitter" />
            <img src={insta} alt="Instagram" />
            <img src={link} alt="LinkedIn" />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
     
        <p>Phonico © 2024. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
