import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";

const Sidebar = () => {
  return (
    <div className=" desktop-sidebar d-none d-lg-block " style={{ width: "400px" }}>
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
  );
};

export default Sidebar;
