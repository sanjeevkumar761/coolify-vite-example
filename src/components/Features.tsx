import React from 'react';

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Feature One</h3>
            <p>
              Description of an amazing feature that will make you want to
              use this software.
            </p>
          </div>
          <div className="feature-item">
            <h3>Feature Two</h3>
            <p>
              Another great feature that solves a common problem in a unique
              way.
            </p>
          </div>
          <div className="feature-item">
            <h3>Feature Three</h3>
            <p>
              This feature is the reason our customers love us. It's simply
              the best.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;