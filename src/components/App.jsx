import React from 'react';
import Navbar from './navbar.jsx';
import Image from './image.jsx';
import Card from './product-card.jsx';

function App() {
  return (
    <div className="App">

      <div className="twilight-head">
        <h1>Twilight</h1>
          <div class="twilight-header-button">
            <button type="button" className="twilight-search">SEARCH</button>
            <button type="button" className="twilight-signin">SIGN IN</button>
          </div>
      </div>

      <Navbar/>

      <Image/>

      <div>
        <h2>BEST SELLER</h2>
        <div className="best-line"></div>
      </div>

      <div className="product-card">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="new-arrival">
        <h2>NEW ARRIVAL</h2>
        <div className="best-line-2"></div>
      </div>

      <div className="product-card">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div>
        <h2>PROMOTION</h2>
        <div className="best-line-3"></div>
      </div>

      <div className="product-card">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

      <div className="footer">
        <div className="first">
          <p>Twilight</p>
          <p>About Us</p>
          <p>Facebook</p>
          <p>No. 1, St. 2, Phnom Penh</p>
        </div>
        <div className="second">
          <p>Contact</p>
          <p>Twitter</p>
          <p>+855 12 345 678</p>
        </div>
        <div className="third">
          <p>2020 Twilight. All rights reserved</p>
          <p>Terms & Conditions</p>
          <p>Instagram</p>
          <p>twilightskincare@gmail.com</p>
        </div>
      </div>

    </div>
  );
}

export default App;
