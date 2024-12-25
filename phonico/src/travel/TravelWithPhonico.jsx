import React from "react";
import "./TravelWithPhonico.css";
import text from "../assets/text.svg";
import call from "../assets/incoming-call.svg";
import rocket from "../assets/rocket.svg";
import wifi from "../assets/wifi.svg";
import calendar from "../assets/calendar.svg";
import phone from "../assets/own-phone.svg";
import chip from "../assets/chip.svg";
import thumbs from "../assets/thumbs-up.svg";
import sim from "../assets/summ.webp";
import green from '../assets/line-green.png'

const TravelWithPhonico = () => {
  return (
    <section className="travel-section">
      <div className="travel-benefits">
        <ul className="benefits-list">
          <li>
            <img src={text} alt="Unlimited Free Calls and Texts" />
            <p>Unlimited Free calls and texts</p>
          </li>
          <li>
            <img src={call} alt="Free Incoming Calls" />
            <p>Free Incoming Calls</p>
          </li>
          <li>
            <img src={rocket} alt="5G Internet Speed & Wifi Calling" />
            <p>5G Internet Speed & Wifi Calling</p>
          </li>
          <li>
            <img src={wifi} alt="Free Mobile Hotspot" />
            <p>Free Mobile Hotspot</p>
          </li>
          <li>
            <img src={calendar} alt="24/7 Customer Service" />
            <p>24/7 Customer Service</p>
          </li>
          <li>
            <img src={phone} alt="Bring Your Own Phone" />
            <p>Bring Your Own Phone</p>
          </li>
          <li>
            <img src={chip} alt="Get Free eSIM" />
            <p>Get Free eSIM</p>
          </li>
          <li>
            <img src={thumbs} alt="Low Overage Rates" />
            <p>Low Overage Rates</p>
          </li>
        </ul>
      </div>

      <div className="travel-main">
        <div className="travel-text">
          <p className="travel-subtitle">— Travel with Phonico</p>
          <h2 className="travel-title">eSIM for travel to USA</h2>
          <img src={green}alt="" />
          <p className="travel-description">
            Travel Smart with Phonico’s eSIM Technology as USA Awaits you
          </p>
          <p className="travel-details">
            Start your journey with ease using our eSIM for travel to the USA.
            Phonico eSIM ensures you stay connected as you explore the vibrant
            cities of the United States. Phonico eSIM offers reliable, fast, and
            affordable connectivity. Say goodbye to the hassle of high roaming
            charges and choose a smart way to travel.
          </p>
          <button className="travel-button">Show Me Best Plans</button>
        </div>
        <div className="travel-image">
          <img src={rocket} alt="Plane" className="plane-image" />
          <img src={sim} alt="Phone" className="phone-image" />
        </div>
      </div>
    </section>
  );
};

export default TravelWithPhonico;
