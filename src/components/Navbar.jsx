import React from "react";
import "../App.css";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-primary">
        <div class="container-fluid">
 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">
                  HOME
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active text-light" href="#">
                  LOG OUT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
