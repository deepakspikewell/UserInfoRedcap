import React, { useState, useEffect } from "react";
import Chevron from "../../assets/images/chevron.png";
import dChevron from "../../assets/images/chevron_d.png";
import "../../App.css";
import { MdDelete } from "react-icons/md";
import { TbPlaylistAdd } from "react-icons/tb";

const SurveyInfo = () => {
  const [INchevron, setINchevron] = useState(false);
  const [Ichevron, setIchevron] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [showAddCondition, setShowAddCondition] = useState(false);
  const [type, setType] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const formData = ["form1", "form2", "form3"];
  const [conditions, setConditions] = useState(["age", "locations"]);
  const [selectedConditions, setSelectedConditions] = useState([]);

  useEffect(() => {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltipTriggerList.forEach((tooltipTriggerEl) => {
      if (conditions.length === 0) {
        new bootstrap.Tooltip(tooltipTriggerEl);
      } else {
        const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltipInstance) {
          tooltipInstance.dispose();
          console.log("ddiskj")
        }
      }
    })
    const tooltipTriggerListRemove = document.querySelectorAll('[data-bs-toggle=""]');
    tooltipTriggerListRemove.forEach((tooltipTriggerEl) => {
    
        const tooltipInstance = bootstrap.Tooltip.getInstance(tooltipTriggerEl);
        if (tooltipInstance) {
          tooltipInstance.dispose();
          console.log("ddiskj")
        
      }
    }
  
  
  );
  }, [conditions]);

  const handleConditionClick = (condition) => {
    setShowAddCondition(false);
    setSelectedConditions((x) => [...x, condition]);
    setConditions((prevConditions) =>
      prevConditions.filter((x) => x !== condition)
    );
  };

  const handleDeleteConditionClick = (condition) => {
    setShowAddCondition(false)
    setConditions((x) => [...x, condition]);
    setSelectedConditions((prevConditions) =>
      prevConditions.filter((x) => x !== condition)
    );
  };

  return (
    <div className="col-12">
      <div className="formsHeder">
        <div className="formsBody d-flex flex-sm-row justify-content-between align-items-sm-center">
          <div>Survey forms</div>
          <div className="d-flex flex-column align-items-end gap-2">
            <img
              className="chevron d-sm-none d-block"
              src={INchevron ? dChevron : Chevron}
              onClick={() => setINchevron(!INchevron)}
            />
            <div
              className={`d-flex gap-sm-4 gap-3 flex-column flex-sm-row align-items-end justify-content-end ${
                INchevron ? "d-flex" : "d-none d-sm-flex"
              }`}
              style={{
                fontWeight: "700",
                fontSize: "smaller",
                color: "#004879",
              }}
            >
              {["Add Survey", "Save"].map((text, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor: "#fff",
                    color: "#004879",
                    padding: "4px",
                    fontSize: "smaller",
                    fontWeight: "700",
                    borderRadius: "10px",
                    minWidth: "100px",
                  }}
                >
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
        {formData.map((name) => (
          <div key={name}>
            <div className="formName" onClick={() => setIchevron(!Ichevron)}>
              <div>{name}</div>
              <img className="chevron" src={Ichevron ? dChevron : Chevron} />
            </div>
            {Ichevron && name === "form1" && (
              <div className="instruments" style={{ fontSize: "18px" }}>
                <div className="row">
                  <div className="col-10 d-flex align-items-center">
                    Health Form
                  </div>
                  <div className="col-2">
                    <label
                        className="custom-checkbox-label"
                        // onClick={() => {
                        //     checkboxToggle();                            
                        // }}
                    >
                        {true ? (
                            <span>&#9744;</span>
                        ) : (
                            <span>&#9745;</span>
                        )}
                    </label>
                </div>
                </div>
                <div className="row">
                  <div className="col-12 mt-1 d-flex justify-content-end historyText">
                    <div onClick={() => setShowCondition(!showCondition)}>
                      Additional Settings
                    </div>
                    <div onClick={() => setShowCondition(!showCondition)}>
                      {showCondition ? "▼" : "▲"}
                    </div>
                  </div>
                </div>
                {showCondition && (
                  <div className="condition" style={{ fontSize: "18px" }}>
                    <div className="d-flex justify-content-between align-items-center">
                      <div>Conditions</div>
                      <div className="position-relative">
                        <div
                          className="text-end"
                          style={{ fontSize: "30px", minWidth: "150px" }}
                          onClick={() => setShowAddCondition(!showAddCondition)}
                        >
                          <a
                            data-bs-toggle={
                              conditions.length === 0 ? "tooltip" : ""
                            }
                            data-bs-placement="bottom"
                            title={
                              conditions.length === 0
                                ? "All conditions have been set"
                                : ""
                            }
                          >
                            <TbPlaylistAdd />
                          </a>
                        </div>
                        {showAddCondition && conditions.length > 0 && (
                          <ul
                            className="list-group position-absolute w-100 overflow-y-scroll"
                            style={{
                              top: "100%",
                              maxHeight: "150px",
                              zIndex: 110,
                              fontWeight: "500",
                            }}
                          >
                            {conditions.map((item, index) => (
                              <li
                                key={index}
                                className="list-group-item"
                                onClick={() => handleConditionClick(item)}
                                style={{ cursor: "pointer", color: "#004879" }}
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                    {selectedConditions.length === 0 ? (
                      <div
                        className="text-center mt-3"
                        style={{
                          fontWeight: "700",
                          color: "GrayText",
                          fontSize: "15px",
                        }}
                      >
                        No conditions have been selected yet. Please click "
                        <TbPlaylistAdd />" to add one.
                      </div>
                    ) : (
                      <div className="px-4">
                        <ul className="list-group">
                          {selectedConditions.map((condition, index) => (
                            <li
                              key={index}
                              className=" d-flex align-items-center p-2"
                            >
                              <div className="col-lg-2 col-3" >
                                <label style={{ minWidth: "50px" }}>
                                  {condition}:
                                </label>
                              </div>
                              <div className="col-lg-3 col-md-6">
                                {condition === "age" && (
                                  <div className="d-flex align-items-center">
                                    <select
                                      className="form-control"
                                      value={lowerLimit}
                                      style={{ maxWidth: "100px" }}
                                      onChange={(e) =>
                                        setLowerLimit(e.target.value)
                                      }
                                    >
                                      <option value="">Lower Limit</option>
                                      {[...Array(100).keys()].map((age) => (
                                        <option key={age} value={age}>
                                          {age}
                                        </option>
                                      ))}
                                    </select>
                                    <span>-</span>
                                    <select
                                      className="form-control"
                                      value={upperLimit}
                                      style={{ maxWidth: "100px" }}
                                      onChange={(e) =>
                                        setUpperLimit(e.target.value)
                                      }
                                    >
                                      <option value="">Upper Limit</option>
                                      {[...Array(100).keys()].map((age) => (
                                        <option key={age} value={age}>
                                          {age}
                                        </option>
                                      ))}
                                    </select>
                                  </div>
                                )}
                                {condition === "locations" && (
                                  <select
                                    className="form-control"
                                    value={type}
                                    style={{ maxWidth: "200px" }}
                                    onChange={(e) => setType(e.target.value)}
                                  >
                                    <option value="">Select Location</option>
                                    <option value="in-patient">
                                      In Patient
                                    </option>
                                    <option value="out-patient">
                                      Out Patient
                                    </option>
                                  </select>
                                )}
                              </div>
                              <div className="col-4">
                                <MdDelete
                                  style={{ cursor: "pointer" }}
                                  onClick={() =>
                                    handleDeleteConditionClick(condition)
                                  }
                                />
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyInfo;
