import React, { useState } from "react";

import "../../App.css";
const Form = ({ showForm, setShowForm }) => {
  const [showThanks, setShowThanks] = useState(false);

  return (
    <div>
      {true && !showThanks ? (
        <div className="popup-form-overlay">
          <div className="popup-form">
            <div className="popup-form-header">
              <h5 className="popup-form-title">Add User</h5>
            </div>
            <div className="popup-form-body">
              <form>
                <div className="mb-1">
                  <label htmlFor="" className="form-lable">First Name</label>
                  <input
                    type="text"
                    className="form-control "
                    placeholder="Enter Your First Name"
                  />
                </div>
                <div className="mb-1">
                <label htmlFor="" className="form-lable">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Your Last Email"
                  />
                </div>

                <div className="mb-1">
                <label htmlFor="" className="form-lable">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="mb-3">
                <label htmlFor="" className="form-lable">Select privileges</label>
                  <select className="form-select">
                    <option>Select privileges</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Guest</option>
                  </select>
                </div>
                <div className="d-flex justify-content-center gap-4  ">
                  <button
                    type="submit"
                    className="btn rounded-pill"
                    style={{ backgroundColor: "#004879", color: "#E9ECEF" }}
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn rounded-pill  "
                    onClick={setShowForm}
                    style={{ backgroundColor: "#805791", color: "#E9ECEF" }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
      {showForm && showThanks && (
        <div className="popup-form-overlay">
          <div className="popup-form">
            {" "}
            <div className="popup-form-header">
              <h5 className="popup-form-title"></h5>
              <button
                type="button"
                className="btn btn-danger  "
                onClick={setShowForm}
              >
                X
              </button>
            </div>
            <div className="thank-you-message text-center p-5 bg-light border rounded">
              <h2 className="mb-3">Thank you!</h2>
              <p>Your submission has been received.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Form;
