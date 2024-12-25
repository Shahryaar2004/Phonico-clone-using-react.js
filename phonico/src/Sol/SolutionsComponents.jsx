import React from "react";
import "./SolutionsComponents.css";
import smart from '../assets/smart.webp';
import health from '../assets/Healthcare.webp';
import ind from '../assets/industrial.webp';
import retail from '../assets/retail.webp';
import ind1 from '../assets/industry 1.webp';
import smartCity from '../assets/smart-city.webp';
import asset from '../assets/asset-management 1.webp';
import envir from '../assets/environmental.webp';
import mobile from '../assets/mob.webp';

const SolutionsComponent = () => {
  return (
    <section className="solutions-section">
      <div className="solutions-header">
        <p className="solutions-subtitle">— Explore Our Solutions</p>
        <h2 className="solutions-title">M2M & IoT Industry Solutions</h2>
      </div>
      <div className="solutions-layout">
        <div className="solutions-column">
          <div className="solution-item">
            <img src={smart} alt="Smart Utilities Management" />
            <p>Smart Utilities Management</p>
          </div>
          <div className="solution-item">
            <img src={health} alt="Healthcare Monitoring System" />
            <p>Healthcare Monitoring System</p>
          </div>
          <div className="solution-item">
            <img src={ind} alt="Industrial Automation" />
            <p>Industrial Automation</p>
          </div>
          <div className="solution-item">
            <img src={retail} alt="Retail and Inventory Management" />
            <p>Retail and Inventory Management</p>
          </div>
        </div>
        <div className="solutions-image">
          <img src={mobile} alt="Phonico Solutions" />
        </div>
        <div className="solutions-column">
          <div className="solution-item">
            <img src={ind1} alt="Agriculture Automation" />
            <p>Agriculture Automation</p>
          </div>
          <div className="solution-item">
            <img src={smartCity} alt="Smart City Infrastructure" />
            <p>Smart City Infrastructure</p>
          </div>
          <div className="solution-item">
            <img src={asset} alt="Asset Tracking" />
            <p>Asset Tracking</p>
          </div>
          <div className="solution-item">
            <img src={envir} alt="Environmental Monitoring" />
            <p>Environmental Monitoring</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsComponent;
