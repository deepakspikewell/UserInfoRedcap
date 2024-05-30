import React, { useState } from "react";

import Sidebar from "../Sidebar";
import Table from "./Table";
import Form from "./Form";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiArrowsCounterClockwiseBold, PiUsersThreeFill } from "react-icons/pi";

const UserDetails = () => {
  const [showForm, setShowForm] = useState(false);
  const [showUserDetails, setShowUserDetails] = useState(true);
  return (
    <div className="flex-grow-1 d-flex">
      <div className="d-lg-flex d-none" style={{width:"300px"}}>
        <Sidebar
          setShowUserDetails={() => setShowUserDetails(true)}
          dontShow={() => setShowUserDetails(false)}
        />
      </div>
     
      <div className=" mx-1 mt-1 w-100 ">
        <button
          class="btn btn-primary d-lg-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <FaArrowCircleRight />
        </button>
        <div
          class="offcanvas offcanvas-start desktop-sidebar"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
          style={{ width: "20rem" }}
        >
          <div class="offcanvas-body">
            <Sidebar />
          </div>
        </div>
        {showUserDetails && (
          <div className=" px-4 ">
            <Table setShowForm={() => setShowForm(true)} />
            <Form
              showForm={showForm}
              setShowForm={() => (setShowForm(false), handleClick(0))}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
