import React from "react";
import "./Features.css";
import unlimitedCallsIcon from "../assets/unlimited-calls-and-Texts.png"; 
import dataPlansIcon from "../assets/variety.svg"; 
import activationIcon from "../assets/activation_process.svg"; 
import secureNetworkIcon from "../assets/secure_network.svg"; 

const Features = () => {
  const features = [
    {
      icon: unlimitedCallsIcon,
      title: "Unlimited Calls and Texts",
      description: "We Offer Unlimited Calls and Texts Nationwide with Prepaid eSIM for Unstoppable connectivity.",
    },
    {
      icon: dataPlansIcon,
      title: "Variety of Data Plans",
      description: "Choose the data plan according to your needs. We will keep the Equation Balance | Money = Value.",
    },
    {
      icon: activationIcon,
      title: "Easy Activation Process",
      description: "The hassle-free Activation process Makes your digital connectivity easier.",
    },
    {
      icon: secureNetworkIcon,
      title: "Secure Network",
      description: "Your data security is our prime responsibility. No data breaches or Digital threats.",
    },
  ];

  return (
    <div className="features-section">
      <h2>Your Trusted Partner for eSIM Wireless Networks</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div key={index} className="feature-item">
            <img src={feature.icon} alt={feature.title} className="feature-icon" />
            <div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
