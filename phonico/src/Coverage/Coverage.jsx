import React from "react";
import "./Coverage.css";
import line from '../assets/line.png'
const Coverage = () => {
  return (
    <section className="coverage-section">
      <div className="coverage-text">
        <p className="subtitle"> <img src={line} alt="" /> The Coverage for our prepaid eSIM for USA.</p>
        <h2>
          Buy the data plan and get our Virtual SIM <br /> card for <span>FREE</span> To
          Enjoy the Most <br /> Affordable Data, Call, and Text features.
        </h2>
        <hr className="underline" />
      </div>
      <div className="coverage-card">
        <div className="spaces">
        <h3 >Fastest Nationwide Coverage in <br /> USA</h3>
        <p>Check if it’s in your area.</p>
        <div className="input-group">
          <input
            type="text"
            placeholder="Enter your zipcode"
            className="zipcode-input"
          />
          <button className="go-button">Let’s Go</button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Coverage;
