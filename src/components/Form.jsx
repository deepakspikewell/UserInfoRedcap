import React, { useState } from 'react';

import "../App.css";
const Form = ({showForm,setShowForm}) => {
  const [show, setShow] = useState(false);



  return (
    <div>
      {showForm ? (
        <div className="popup-form-overlay">
          <div className="popup-form">
            <div className="popup-form-header">
              <h5 className="popup-form-title">Add User</h5>
              <button type="button" className="btn btn-danger  " onClick={setShowForm}>X</button>
            </div>
            <div className="popup-form-body">
              <form>
                <div className="mb-3">
                  <input type="text" className="form-control " placeholder="Enter Your First Name" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control"  placeholder="Enter Your Last Email" />
                </div>
                <div className="mb-3">
                  <input type="text" className="form-control"  placeholder="Enter Your User Name" />
                </div>
                <div className="mb-3">
                  <input type="email" className="form-control"  placeholder="Enter Your Email" />
                </div>
                <div className="mb-3">
                  <select className="form-select">
                    <option>Select privileges</option>
                    <option>Admin</option>
                    <option>User</option>
                    <option>Guest</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-danger w-100">ADD USER</button>
              </form>
            </div>
          </div>
        </div>
      ):null}
    </div>
  );
};

export default Form;
