import React from "react";
import "./AppDownloadSection.css";
import personImage from "../assets/personimg.webp"; // Ensure the image path is correct

const AppDownloadSection = () => {
  return (
    <section className="app-download-section">
      {/* Text Content Section */}
      <div className="text-content">
        <p className="subtitle">— Download the Phonico eSIM Mobile App</p>
        <h2 className="title">
          Unlock a World of Convenience and Connectivity in the USA
        </h2>
        {/* Buttons */}
        <div className="buttons">
          <button className="app-store-button">Download on App Store</button>
          <button className="play-store-button">Download on Play Store</button>
        </div>
      </div>

      {/* Image Section */}
      <div className="image-content">
        <img src={personImage} alt="Happy person using phone" />
      </div>
    </section>
  );
};

export default AppDownloadSection;
