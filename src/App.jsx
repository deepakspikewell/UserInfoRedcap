import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";
import DDNavbar from "./components/DoubleNavbar";

function App() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div>
        <DDNavbar color="#e72222" text1="HOME" text2="LOG OUT"/>

        <DDNavbar color="#05266d" text1="Welcome" text2="dsb592002@gmail.com"/>
        <div className="container-fluid d-flex  ">
          <Sidebar />
          <div className=" mx-0 vw-100 vh-100 ">
            <Navbar />
            <div className="container ">
              <Table setShowForm={() => setShowForm(true)} />
              <Form
                showForm={showForm}
                setShowForm={() => (setShowForm(false), handleClick(0))}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
