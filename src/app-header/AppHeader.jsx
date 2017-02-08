import React from 'react';
import './AppHeader.css'
import logo from '../../public/logo.svg';

const AppHeader = () => {
  return (
    <header className="AppHeader">
      <div className="container-fluid AppHeader__nav">
        <div className="AppHeader__nav--left">
          <a href="#">
            <img src={logo} className="AppHeader__logo" alt="logo" />
          </a>
        </div>

        <nav className="AppHeader__nav--right">
          <ul className="AppHeader__nav-list">
            <li><a href="#" className="AppHeader__nav-link">Sell</a></li>
            <li><a href="#" className="AppHeader__nav-link">Buy</a></li>
            <li><a href="#" className="AppHeader__nav-link">Refinance</a></li>
            <li><a href="#" className="AppHeader__nav-link active">Shop</a></li>
            <li><a href="#" className="AppHeader__nav-link">Questions?</a></li>
            <li><a href="#" className="AppHeader__nav-link">Download</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;