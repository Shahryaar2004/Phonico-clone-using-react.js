import React from 'react';
import './Subscribe.css';
import model from '../assets/model.webp';

const Subscribe = () => {
  return (
    <div className="subscribe-section">
      <div className="subscribe-image">
        <img src={model} alt="Model" />
      </div>
      <div className="subscribe-content">
        <h4 className="tagline">The Subscribe: Because Netflix Can Wait</h4>
        <h2>We want you to Avail our Limited time offers!</h2>
        <div className="subscribe-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="email-input"
          />
          <button className="subscribe-button">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
