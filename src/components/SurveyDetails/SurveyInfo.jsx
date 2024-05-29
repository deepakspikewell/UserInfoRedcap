import React, { useState } from "react";
import Chevron from "../../assets/images/chevron.png";
import dChevron from "../../assets/images/chevron_d.png";
import SearchSurvey from "./SearchSurvey";
import "../../App.css";

const SurveyInfo = () => {
  const [fchevron, setfchevron] = useState(false);
  const [INchevron, setINchevron] = useState(false);
  const [Ichevron, setIchevron] = useState(false);
  const [showCondition, setShowCondition] = useState(false);
  const [type, setType] = useState("");
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const formData = ["form1", "form2", "form3"];

  return (
    <div className="col-12">
      <SearchSurvey />

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
              {["Add Survey", "Save Changes"].map((text, index) => (
                <div
                  key={index}
                  className="d-flex justify-content-center align-items-center"
                  style={{
                    backgroundColor:"#fff",
                    color:  "#004879",
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
            <div
              className="formName"
              onClick={() => setIchevron(!Ichevron)}
            >
              <div>{name}</div>
              <img className="chevron" src={Ichevron ? dChevron : Chevron} />
            </div>
            {Ichevron && name === "form1" && (
              <div className="instruments" style={{ fontSize: "18px" }}>
                <div className="row">
                  <div className="col-10 d-flex align-items-center">
                    Health Form
                  </div>
                  <div className="col-2 d-flex align-items-center justify-content-end">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="flexCheckDefault"
                      style={{ border: "1px solid grey" }}
                    />
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
                    <div className="row">
                      <div className="col-10 d-flex align-items-center">
                        Conditions
                      </div>
                      <div className="p-4 d-flex align-items-center gap-2">
                        <div className="d-flex align-items-center gap-2">
                          <label style={{ minWidth: "80px" }}>+ Type:</label>
                          <select
                            className="finInput"
                            value={type}
                            style={{ maxWidth: "200px" }}
                            onChange={(e) => setType(e.target.value)}
                          >
                            <option value="">Select Type</option>
                            <option value="age">Age</option>
                            <option value="location">Location</option>
                          </select>
                        </div>
                        <div>
                          {type === "age" && (
                            <div className="d-flex px-4 align-items-center">
                              <select
                                className="form-control"
                                value={lowerLimit}
                                style={{ maxWidth: "100px" }}
                                onChange={(e) => setLowerLimit(e.target.value)}
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
                                onChange={(e) => setUpperLimit(e.target.value)}
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
                          {type === "location" && (
                            <div className="mx-3">
                              <select
                                className="finInput"
                                value={(e) => e.target.value}
                                style={{ maxWidth: "200px" }}
                              >
                                <option value="">Select Location</option>
                                <option value="in-patient">In Patient</option>
                                <option value="out-patient">Out Patient</option>
                              </select>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
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
