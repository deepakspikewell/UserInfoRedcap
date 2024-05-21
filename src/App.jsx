import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Form from "./components/Form";
import Sidebar from "./components/Sidebar";

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
    <div className=" d-flex  ">
      <Sidebar/>
      <div className=" mx-0 vw-100 vh-100 ">

      <Navbar />   
      <div className="container ">

        <Table setShowForm={() => setShowForm(true)}/>
        <Form showForm={showForm} setShowForm={() => (setShowForm(false),handleClick(0))} />
      </div>
      </div>
    </div>
    </>
  );
}

export default App;
