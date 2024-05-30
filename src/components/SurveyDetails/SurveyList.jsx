import React from "react";
import SurveyInfo from "./SurveyInfo";

const SurveyList = () => {
  return (
    <div>
      {/* Search Component */}
      <div className="tabData" id="patientlistdata">
        <div id="patient_information">
          <div className="piTitle container-fluid" style={{ marginLeft: "0" }}>
            Survey Management Settings
          </div>
          <nav>
            <div className="nav nav-tabs" role="tablist">
              <button
                className="nav-link active textStyle"
                id="nav-profile-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-profile"
                type="button"
                role="tab"
                aria-controls="nav-profile"
                aria-selected="true"
                style={{ marginLeft: "0" }}
              >
                Filter
              </button>
            </div>
            <div className="tab-content" id="nav-tabContent">
              <div
                className="tab-pane fade show active"
                id="nav-profile"
                role="tabpanel"
                aria-labelledby="nav-profile-tab"
              >
                <div
                  id="visitInputs"
                  className="piInputs container-fluid justify-content-center"
                >
                  <div className="row d-flex">
                    <div className="col-lg-10 col-md-12 col-sm-12 d-flex justify-content-center justify-content-sm-start align-items-center">
                      <div id="AppointmentResource" style={{ width: "100%" }}>
                        <select
                          className="finInput custom-lg-4 col-md-12"
                          id="currentAppointment"
                        >
                          <option value="">Select Your Clinic</option>
                          <option value="">Select Your Form</option>
                          <option value="">Select Your Form</option>
                        </select>
                      </div>
                    </div>
                    <div
                      className="col-lg-2 col-md-12 col-sm-12 d-flex justify-content-center mt-2 mt-lg-0"
                      style={{ alignSelf: "center" }}
                    >
                      <div className="col w-100 m-0 p-0 d-flex justify-content-center">
                        <div className="col-sm-4 col-md-4 col-lg-12 m-0 p-0 d-flex justify-content-center">
                          <button
                            className="searchButton d-flex justify-content-around"
                            id="visitSearchButton"
                          >
                            <div>Search</div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      {/* Survey List */}
      <div className="row d-flex flex-column-reverse flex-lg-row" style={{ margin: "0" }}>
        <SurveyInfo />
      </div>
    </div>
  );
};

export default SurveyList;
