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

      <div>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>

    </div>
  );
}

export default App;
