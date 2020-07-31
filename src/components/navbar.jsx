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
              <a class="dropdown-item" href="#">Skincare</a>
              <a class="dropdown-item" href="#">BB/CC Cream</a>
              <a class="dropdown-item" href="#">Toner</a>
              <a class="dropdown-item" href="#">Mask</a>
              <a class="dropdown-item" href="#">Cleansing</a>
            </div>
          </li>

            <li class="nav-item">
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
            <li class="nav-item" id="mybag">
              <a class="nav-link" href="#">My Bag</a>
            </li>

          </ul>

        </div>
      </nav>

      <div className="line"></div>

    </div>
  );
}

export default Navbar;
