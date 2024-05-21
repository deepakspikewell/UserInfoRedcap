import React from "react";
import "../App.css";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";

import { GiHamburgerMenu } from "react-icons/gi";
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-primary d-lg-none">
        <div class="container-fluid">
          <button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offcanvasExample"
          >
            <GiHamburgerMenu />
          </button>

          <div
            class="offcanvas offcanvas-start desktop-sidebar"
            tabindex="-1"
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
            style={{ width: "20rem" }}
          >
            <div class="offcanvas-body">
              <ul className="nav nav-pills flex-column mt-4 gap-3">
                <li className="nav-item ">
                  <a href="#" className="nav-link fs-5 flex gap-2">
                    <PiUsersThreeFill />
                    <i className="bi bi-bell"></i>
                    User Info
                  </a>
                </li>
                <li className="nav-item ">
                  <a href="#" className="nav-link fs-5 flex gap-2">
                    <PiArrowsCounterClockwiseBold />
                    <i className="bi bi-search"></i>
                    Resubmit form
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
