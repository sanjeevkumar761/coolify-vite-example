import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#" className="logo">Awesome Software</a>
        <nav>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;