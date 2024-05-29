import React, { useState } from "react";

const SearchSurvey = ({ showForm, setShowForm }) => {
  const demoData = [
    "Survey on Customer Satisfaction",
    "Global Employee Engagement Survey",
    "Market Research Survey",
    "Product Feedback Survey",
    "Healthcare Survey",
    "Education Sector Survey",
  ];

  const [searchInput, setSearchInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase().trim();
    setSearchInput(value);

    // Filter suggestions based on search input
    if (value === "") {
      setSuggestions([]);
    } else {
      const filtered = demoData.filter((item) =>
        item.toLowerCase().includes(value)
      );
      setSuggestions(filtered.length > 0 ? filtered : ["No suggestion"]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchInput(suggestion);
    setSuggestions([]);
  };

  return (
    <div id="overlay2">
      <div
        id="contactPopup"
        style={{ borderRadius: "10px", backgroundColor: "#e9ecef", zIndex: 100 }}
        className="position-relative"
      >
        <div className="row">
          <div className="col-12 justify-content-center align-items-center position-relative">
            <label style={{ width: "100%", textAlign: "left", marginTop: "0.5rem" }}>
              Search Survey
            </label>{" "}
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
                placeholder="Enter search term"
                value={searchInput}
                onChange={handleSearch}
              />
              {suggestions.length > 0 && (
                <ul
                  className="list-group position-absolute w-100 overflow-y-scroll"
                  style={{ top: "100%", maxHeight: "150px", zIndex: 110 }}
                >
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      className="list-group-item"
                      onClick={() => handleSuggestionClick(item)}
                      style={{ cursor: "pointer",color:"#004879" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        <div className="container mt-3">
          {false ? (
            <div id="expand" className="expand1 row d-flex overflow-y-scroll" style={{ minHeight: "200px", maxHeight: "200px" }}>
              <div className="row m-0 justify-content-center  align-item-center">
                <ul className="list-group">
                  {demoData
                    .filter((item) =>
                      item.toLowerCase().includes(searchInput.toLowerCase())
                    )
                    .map((item, index) => (
                      <li key={index} className="list-group-item">
                        {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          ) : (
            <div id="expand" className="row d-flex justify-content-center align-items-center" style={{ minHeight: "200px", fontWeight: "700", color: "GrayText", fontSize: "20px" }}>
              No Preview
            </div>
          )}
          <div className="row" style={{ marginTop: "30px" }}>
            <div className="col-6 d-flex justify-content-end">
              <div className="submit_button-pin" style={{ backgroundColor: "#004879" }}>
                <div>Submit</div>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-start">
              <div className="submit_button-pin">
                <div>Cancel</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSurvey;
