import React from 'react';
import './WhyChoosePhonico.css';
import  lady from '../assets/girl1.webp'
const WhyChoosePhonico = () => {
  return (
    <div className="why-choose-phonico">
      <div className="content-wrapper">
        <div className="image-section">
         <img src={lady} alt="" />
          
        </div>
        <div className="text-section">
          <h2>Why Choose PHONICO eSIM?</h2>
          <p className="subtitle">Our prepaid eSIM service offers a hassle-free activation process. Phonico’s plans provide cost-effective options for everyone.</p>
          <p className="description">
            Our virtual SIM USA service ensures seamless connectivity nationwide without facing high roaming charges. With Phonico, managing your mobile service is effortless through a user-friendly online portal. Choose Phonico, where customer needs are our top priority, and staying connected is simpler than ever.
          </p>
          <button className="btn-primary">Show Me Best Plans</button>
        </div>
      </div>
      <div className="achievements">
        <h3>Here is what we've achieved till now!</h3>
        <div className="stats">
          <div className="stat">
            <p className="number">5K+</p>
            <p className="label">Devices Connected</p>
          </div>
          <div className="stat">
            <p className="number">50+</p>
            <p className="label">Projects Finished</p>
          </div>
          <div className="stat">
            <p className="number">100+</p>
            <p className="label">Business Solutions</p>
          </div>
          <div className="stat">
            <p className="number">1+</p>
            <p className="label">Terabytes of Data</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoosePhonico;