import React from 'react';

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <h2>Pricing</h2>
        <div className="pricing-grid">
          <div className="pricing-plan">
            <h3>Basic</h3>
            <p className="price">$10<span>/month</span></p>
            <ul>
              <li>Feature A</li>
              <li>Feature B</li>
              <li>Feature C</li>
            </ul>
            <a href="#" className="cta-button">Choose Plan</a>
          </div>
          <div className="pricing-plan popular">
            <h3>Pro</h3>
            <p className="price">$25<span>/month</span></p>
            <ul>
              <li>All in Basic</li>
              <li>Feature D</li>
              <li>Feature E</li>
            </ul>
            <a href="#" className="cta-button">Choose Plan</a>
          </div>
          <div className="pricing-plan">
            <h3>Enterprise</h3>
            <p className="price">Contact Us</p>
            <ul>
              <li>All in Pro</li>
              <li>Dedicated Support</li>
              <li>Custom Integrations</li>
            </ul>
            <a href="#" className="cta-button">Contact Sales</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;