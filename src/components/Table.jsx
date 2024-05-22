import React, { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
const Table = ({setShowForm}) => {
  const patients = [
    { firstName: "John", lastName: "Doe", email: "john.doe@example.com" },
    { firstName: "Jane", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
  ];
  return (
    <div>
      <div
        class=" d-flex justify-content-between mt-4"
        style={{ fontWeight: "600", fontSize: "2rem", color: "#004879" }}
      >
        <div style={{ fontWeight: "600", fontSize: "2rem", color: "#004879" }}>
          User Information
        </div>
        <div>
          <button type="submit" className="btn btn-info " onClick={setShowForm}>
          <BsPersonPlusFill /> User
          </button>
        </div>
      </div>
      {/* <div className="table-container mt-3 d-none d-lg-block"> */}
      <div className=" mt-4 d-none d-lg-block">
        <div className="row">
          <div className="col-12">
            <table className="table">
              <thead className="table-light">
                <tr>
                  <th className="col">First Name</th>
                  <th className="col">Last Name</th>
                  <th className="col">Email</th>
                </tr>
              </thead>
              <tbody>
                {patients.map((patient, index) => (
                  <tr key={index}>
                    <td>{patient.firstName}</td>
                    <td>{patient.lastName}</td>
                    <td>{patient.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* </div> */}

      <div className="cards-container mt-4 d-lg-none">
        {patients.map((patient, index) => (
          <div class="card">
            <div class="card-body">
              <div class="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  class="d-lg-none  "
                  style={{ color: "black", fontWeight: "500" }}
                >
                  First Name:
                </span>
                <span class="patientsinfo text-primary">
                  &nbsp;{patient.firstName}
                </span>
              </div>

              <div class="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  class="d-lg-none  "
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Last Name:
                </span>
                <span class=" text-primary">&nbsp;{patient.lastName}</span>
              </div>

              <div class="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  class="d-lg-none patientsinfoTop "
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Email:
                </span>
                <span class=" text-primary">&nbsp;{patient.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Table;
