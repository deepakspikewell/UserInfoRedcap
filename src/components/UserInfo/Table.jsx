import React, { useState } from "react";
import { BsPersonPlusFill } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import "../../App.css"; // Import the custom CSS file

const Table = ({ setShowForm }) => {
  const patients = [
    { firstName: "John1", lastName: "Doe", email: "john.doe@example.com" },
    { firstName: "John1", lastName: "Doese", email: "john.doe@example.com" },
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
  const [search, setSearch] = useState("");
  const itemsPerPage = 5;

  const handleClick = (id) => {
    setCurrentPage(Number(id));
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1); // Reset to first page on search change
  };

  const filteredPatients = patients.filter((patient) => {
    const searchTerms = search.trim().toLowerCase().split(" ");
    if (searchTerms.length === 1) {
      return (
        patient.firstName.toLowerCase().includes(searchTerms[0]) ||
        patient.lastName.toLowerCase().includes(searchTerms[0])
      );
    } else if (searchTerms.length > 1) {
      return (
        patient.firstName.toLowerCase().includes(searchTerms[0]) &&
        patient.lastName.toLowerCase().includes(searchTerms[1])
      );
    }
    return true;
  });

  const getPageNumbers = () => {
    const totalPages = Math.ceil(filteredPatients.length / itemsPerPage);
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
  const currentPatients = filteredPatients.slice(
    indexOfFirstPatient,
    indexOfLastPatient
  );

  return (
    <div>
      <div
        className="d-flex justify-content-between mt-4 "
        style={{ fontWeight: "600", fontSize: "2rem", color: "#004879" }}
      >
        <div className="d-lg-block d-none">User Information</div>
        <div className="d-lg-none d-block">User Info</div>
        <div className="d-flex flex-column-reverse align-items-end flex-lg-row lg-align-items-center gap-4">
          <button
            type="submit"
            className="btn "
            style={{ backgroundColor: "#004879", color: "#E9ECEF" }}
            onClick={setShowForm}
          >
            <BsPersonPlusFill /> User
          </button>
        </div>
      </div>
      <div className="d-flex search-name align-items-center gap-2 mt-3">
        <label
          htmlFor=""
          className="flex-shrink-0 "
          style={{ color: "rgb(0, 72, 121)", fontWeight: "700" }}
        >
          Search User{" "}
        </label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by first name, last name and user name"
          value={search}
          onChange={handleSearchChange}
        />
      </div>

      <div class="container text-center mt-5 d-none d-lg-block "style={{borderBottom:"1px solid gray"}}>
        <div class="row">
          <div class="col-3 d-flex justify-content-start thead">First Name</div>
          <div class="col-3 d-flex justify-content-start thead">Last Name</div>
          <div class="col-6 d-flex justify-content-start thead">Email</div>
        </div>
      </div>
      <div class="d-lg-none mt-5"></div>
      {currentPatients.map((patient) => {
        return (
          
      
          <div class="container text-center   tbody"style={{borderTop:"1px solid gray"}}>
            <div class="row d-flex ">
              <div class="col-lg-3 col-md-12 d-flex justify-content-start align-items-center">
                <span className="d-lg-none d-block fs-4"style={{fontWeight:"700"}}>First Name :</span>
                <span className=" fs-5">&nbsp;{patient.firstName}</span>
              </div>
              <div class="col-lg-3 col-md-12 d-flex justify-content-start ">
              <span className="d-lg-none d-block fs-4"style={{fontWeight:"700"}}>Last Name :</span>
              
                <span className="fs-5">&nbsp;{patient.lastName}</span>
              </div>
              <div class="col-lg-3 col-md-12 d-flex justify-content-start ">
              <span className="d-lg-none d-block fs-4"style={{fontWeight:"700"}}>Email :</span>
                <span className="fs-5">&nbsp;{patient.email}</span>
               
              </div>
            </div>
          </div>
        
        );
      })}
      <nav className="mt-3">
        <ul className="pagination justify-content-center">
          {renderPageNumbers}
        </ul>
      </nav>
    </div>
  );
};

export default Table;
