import React, { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import "../App.css"; // Import the custom CSS file

const Table = ({ setShowForm }) => {
  const patients = [
    { firstName: "John1", lastName: "Doe", email: "john.doe@example.com" },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    { firstName: "Jane2", lastName: "Smith", email: "jane.smith@example.com" },
    {
      firstName: "Michael3",
      lastName: "Brown",
      email: "michael.brown@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },
    {
      firstName: "Mary4",
      lastName: "Williams",
      email: "mary.williams@example.com",
    },

    // Add more patients as needed for testing pagination
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleClick = (id) => {
    setCurrentPage(Number(id));
  };

  const getPageNumbers = () => {
    const totalPages = Math.ceil(patients.length / itemsPerPage);
    const maxPagesToShow = 5;
    const pages = [];
    let startPage = 1;
    let endPage = totalPages;

    if (totalPages > maxPagesToShow) {
      if (currentPage <= 3) {
        endPage = maxPagesToShow;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - (maxPagesToShow - 1);
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (startPage > 1) {
      pages.unshift("...");
      pages.unshift(1);
    }

    if (endPage < totalPages) {
      pages.push("...");
      pages.push(totalPages);
    }

    return pages;
  };

  const renderPageNumbers = getPageNumbers().map((number, index) => {
    if (number === "...") {
      return (
        <li key={index} className="page-item disabled">
          <span className="page-link">{number}</span>
        </li>
      );
    }
    return (
      <li
        key={index}
        className={`page-item ${currentPage === number ? "active" : ""}`}
      >
        <button className="page-link" onClick={() => handleClick(number)}>
          {number}
        </button>
      </li>
    );
  });

  const indexOfLastPatient = currentPage * itemsPerPage;
  const indexOfFirstPatient = indexOfLastPatient - itemsPerPage;
  const currentPatients = patients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  return (
    <div>
      <div
        className="d-flex justify-content-between mt-4 "
        style={{ fontWeight: "600", fontSize: "2rem", color: "#004879" }}
      >
        <div>User Information</div>
        <div>
          <button type="submit" className="btn btn-info" onClick={setShowForm}>
            <BsPersonPlusFill /> User
          </button>
        </div>
      </div>

      <div className="table-container d-none d-lg-block mt-4">
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
                {currentPatients.map((patient, index) => (
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

      <div className="cards-container mt-4 d-lg-none">
        {currentPatients.map((patient, index) => (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  className="d-lg-none"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  First Name:
                </span>
                <span className="patientsinfo text-primary">
                  &nbsp;{patient.firstName}
                </span>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  className="d-lg-none"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Last Name:
                </span>
                <span className="text-primary">&nbsp;{patient.lastName}</span>
              </div>
              <div className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-left mb-1">
                <span
                  className="d-lg-none patientsinfoTop"
                  style={{ color: "black", fontWeight: "500" }}
                >
                  Email:
                </span>
                <span className="text-primary">&nbsp;{patient.email}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav className="mt-3">
        <ul className="pagination justify-content-center">
          {renderPageNumbers}
        </ul>
      </nav>
    </div>
  );
};

export default Table;
