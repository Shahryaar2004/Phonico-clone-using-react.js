import React from "react";
import "./PlansSection.css";

const DataPlans = () => {
  const plans = [
    {
      data: "1GB",
      price: "$15",
      description: "5G-4G LTE DATA",
      features: ["Unlimited Talk & Text", "Nationwide Coverage"],
      circleClass: "circle-1gb",
    },
    {
      data: "3GB",
      price: "$30",
      description: "5G-4G LTE DATA",
      features: ["Unlimited Talk & Text", "Nationwide Coverage"],
      circleClass: "circle-3gb",
    },
    {
      data: "5GB",
      price: "$45",
      description: "5G-4G LTE DATA",
      features: ["Unlimited Talk & Text", "Nationwide Coverage"],
      circleClass: "circle-5gb",
    },
  ];

  const premiumPlan = {
    data: "10GB",
    price: "$60",
    description: "5G-4G LTE DATA",
    features: ["Unlimited Talk & Text", "Nationwide Coverage"],
    circleClass: "circle-10gb",
  };

  return (
    <section className="data-plans">
      <div className="data-plans-header">
        <p className="data-plans-subtitle">— Our Top eSIM Plans</p>
        <h2 className="data-plans-title">
          Choose the prepaid plan as per your need.
        </h2>
        <hr className="data-plans-underline" />
      </div>

      {/* Main Plans */}
      <div className="data-plans-grid">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <div className={`plan-circle ${plan.circleClass}`}></div>
            <h3 className="plan-data">{plan.data}</h3>
            <p className="plan-description">{plan.description}</p>
            <h4 className="plan-price">
              Price <span className="price-highlight">{plan.price}</span>/Month
            </h4>
            <ul className="plan-features">
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="plan-activate-button">Activate Plan</button>
          </div>
        ))}
      </div>

      {/* Premium Plan */}
      <div className="premium-plan-card">
        <div className={`plan-circle ${premiumPlan.circleClass}`}></div>
        <h3 className="plan-data">{premiumPlan.data}</h3>
        <p className="plan-description">{premiumPlan.description}</p>
        <h4 className="plan-price">
          Price <span className="price-highlight">{premiumPlan.price}</span>/Month
        </h4>
        <ul className="plan-features">
          {premiumPlan.features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
        <button className="plan-activate-button">Activate Plan</button>
      </div>
    </section>
  );
};

export default DataPlans;
