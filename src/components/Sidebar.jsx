import React from "react";
import { PiUsersThreeFill } from "react-icons/pi";
import { PiArrowsCounterClockwiseBold } from "react-icons/pi";
import { RiSettings5Fill } from "react-icons/ri";

const Sidebar = ({setShowUserDetails,dontShow}) => {
  return (
    <div className=" desktop-sidebar flex-grow-1 " style={{ width: "300px"}}>
      <ul className="nav nav-pills flex-column pt-4 gap-3">
        <li className="nav-item " onClick={setShowUserDetails}>
          <a href="#" className="nav-link fs-5 flex gap-2">
            <PiUsersThreeFill />
            <i className="bi bi-bell"></i>
            User Info
          </a>
        </li>
        <li className="nav-item " onClick={dontShow}>
          <a href="#" className="nav-link fs-5 flex gap-2">
          <RiSettings5Fill />
            <i className="bi bi-search"></i>
            Survey Management
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
