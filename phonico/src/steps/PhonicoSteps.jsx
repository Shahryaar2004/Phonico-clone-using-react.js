
import React from 'react';
import './PhonicoSteps.css';
import step1 from '../assets/step1.png'
import step2 from '../assets/step2.svg'
import step3 from '../assets/step3.svg'
import step4 from '../assets/step4.png'
const PhonicoSteps = () => {
  return (
    <div className="phonico-steps">
      <h2>Switching Is Easy With Phonico</h2>
      <p className="subtitle">
        You need an eSIM in the USA or a Prepaid SIM to Stay Here! Get your Phonico eSIM in four easy steps.
      </p>
      <div className="steps-container">
        <div className="step">
          <div className="icon"><img src={step1} alt="" /></div>
          <h3>Step 1</h3>
          <p className="step-title">Select a Data Plan</p>
          <p className="step-description">
            Choose the most suitable data plan from Phonico's options to fit your needs.
          </p>
        </div>
        <div className="step">
          <div className="icon"><img src={step2} alt="" /></div>
          <h3>Step 2</h3>
          <p className="step-title">Enter Your Details</p>
          <p className="step-description">
            Fill in the necessary personal information to set up your account and prepare for activation.
          </p>
        </div>
        <div className="step">
          <div className="icon"><img src={step3} alt="" /></div>
          <h3>Step 3</h3>
          <p className="step-title">Get Activation Details</p>
          <p className="step-description">
            Receive your eSIM activation instructions through Phonico's Online Management Portal, Phonico Mobile app, or email.
          </p>
        </div>
        <div className="step">
          <div className="icon"><img src={step4} alt="" /></div>
          <h3>Step 4</h3>
          <p className="step-title">Activate the eSIM Online</p>
          <p className="step-description">
            Follow the steps to activate Phonico on your device. Once activated, you are connected to Phonico and ready to enjoy our services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhonicoSteps;