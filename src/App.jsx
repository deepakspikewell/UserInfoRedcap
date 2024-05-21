import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Form from "./components/Form";

function App() {

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Navbar />
      <div className="container mt-5">

        <Table setShowForm={() => setShowForm(true)}/>
        <Form showForm={showForm} setShowForm={() => (setShowForm(false),handleClick(0))} />
      </div>
    </>
  );
}

export default App;
