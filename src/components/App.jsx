import React from 'react';
import Navbar from './navbar.jsx';

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

    </div>
  );
}

export default App;
