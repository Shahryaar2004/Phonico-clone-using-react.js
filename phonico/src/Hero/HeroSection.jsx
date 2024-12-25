import React from "react";
import "./Hero.css";
import hero_img from '../assets/hero.webp'
import line_img from '../assets/line-green.png'
import black_line from  '../assets/line.png'
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h3 className="hero-tagline"><img src={black_line} alt="" /> USA’s Most Affordable 5G eSIM Solution</h3>
        <h1 className="hero-title">Stay Connected, Not Overcharged! <br /> With Phonico’s Fast and Affordable <br /> Nationwide Wireless Service</h1>
        <img src={line_img} alt="" />
        <p className="hero-description">
          Get the Best Data Plans | FREE Unlimited Calls and Texts with each plan!
        </p>
        <div className="hero-buttons">
          <button className="app-store-button">App Store <br /> Download on the</button>
          <button className="play-store-button">Play Store <br /> Download on the</button>
        </div>
      </div>
      <div className="hero-image">
        <img
          src={hero_img}
          alt="Hero"
          className="image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
