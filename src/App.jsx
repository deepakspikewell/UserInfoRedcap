import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import DDNavbar from "./components/DoubleNavbar";
import UserDetails from "./components/UserInfo/UserDetails";
import SurveyInfo from "./components/SurveyDetails/SurveyInfo";
import Sidebar from "./components/Sidebar";
import { FaArrowCircleRight } from "react-icons/fa";
import SurveyList from "./components/SurveyDetails/SurveyList";

function App() {


  return (
    <>
      <div className="vh-100 d-flex flex-column main-container">
        <DDNavbar color="#e72222" text1="HOME" text2="LOG OUT" />
        <DDNavbar color="#05266d" text1="Welcome" text2="dsb592002@gmail.com" />

        
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
        {true && (
          <div className=" px-4 ">
           <SurveyList/>
          </div>
        )}
      </div>
    </div>

        

      </div>
    </>
  );
}

export default App;
