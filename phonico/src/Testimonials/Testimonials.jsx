import React from 'react';
import './Testimonials.css';
import rand from '../assets/Randall.webp'
import Lin from '../assets/Linda.webp'
import John from '../assets/John.png'
const Testimonials = () => {
  return (
    <div className="testimonials">
      <h3>Testimonial</h3>
      <h2>What People Say About Phonico</h2>
      <div className="testimonial-cards">
        {/* Testimonial Card 1 */}
        <div className="testimonial-card">
          <div className="profile-image"> <img src={rand} alt="" /></div>
          <h4>John L. Ray</h4>
          <p className="location">California, America</p>
          <p className="rating">★★★★★</p>
          <h5>Affordable</h5>
          <p className="review">
            "I've got to say, Phonico's cheap cell phone plan is a total game-changer. Staying connected without breaking the bank? That’s what Phonico is all about."
          </p>
        </div>

        {/* Testimonial Card 2 */}
        <div className="testimonial-card">
          <div className="profile-image"> <img src={Lin} alt="" /></div>
          <h4>Linda W. Rangel</h4>
          <p className="location">Mountain View, UT</p>
          <p className="rating">★★★★★</p>
          <h5>Great Plans</h5>
          <p className="review">
            "Phonico offers some great plans, and let me tell you, their support is top-notch! I had an iPhone lying around, so I unlocked it and transferred my number to Phonico. Can you believe it? I was up and running with their service in less than an hour. It's been a game-changer for me!"
          </p>
        </div>

        {/* Testimonial Card 3 */}
        <div className="testimonial-card">
          <div className="profile-image"> <img src={John} alt="" /></div>
          <h4>Randall A. Dean</h4>
          <p className="location">Asheville, NC</p>
          <p className="rating">★★★★★</p>
          <h5>Exclusive Services</h5>
          <p className="review">
            "Phonico's network and service are top-notch, and what’s even better is that it works in rural Oklahoma, where even big names fall short. I can finally stay connected no matter where I am. Thanks, Phonico!"
          </p>
        </div>
      </div>
      <button className="btn-primary">Show Me Best Plans</button>
    </div>
  );
};

export default Testimonials;
