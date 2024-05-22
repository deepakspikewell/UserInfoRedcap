import React from "react";

const DDNavbar = ({color,text1,text2}) => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-primary vw-100" style={{"backgroundColor":color}}>
        <div class="container-fluid">
 
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-light" aria-current="page" href="#">
                  {text1}
                </a>
              </li>
              <li class="nav-item ">
                <a class="nav-link active text-light" href="#">
                  {text2}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default DDNavbar;
