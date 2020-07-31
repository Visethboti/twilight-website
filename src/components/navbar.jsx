import React from 'react';

function Navbar() {
  return (
    <div className="twilight-navbar">
      <nav class="navbar navbar-expand-lg navbar-light">

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">

          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Category
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>

            <li class="nav-item active">
              <a class="nav-link" href="#">Best Seller</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">New Arrival</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Promotion</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">FAQ</a>
            </li>
            <li class="nav-item" id="n1234">
              <a class="nav-link" href="#">My Bag</a>
            </li>

          </ul>

        </div>
      </nav>
    </div>
  );
}

export default Navbar;
