import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import ConfirmationPopUp from "./ConfirmationPopUp";

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate();

  const toggle = () => setIsOpen(!isOpen)
  const onLogout = () => {
    localStorage.removeItem("username")
    toggle()
    navigate("/login")
  }

  return (
    <>
    <div className="w-100">
      <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">
        <Link className="navbar-brand" href="/">
          Auth
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${localStorage.getItem("username") ? "d-block" : "d-none"}`} id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <span className="nav-link pe-auto" onClick={toggle}>
                LogOut
              </span>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    {isOpen && <ConfirmationPopUp
      color="danger"
      title="Delete"
      message={`Are you sure you want to Logout?`}
      toggle={toggle}
      onLogout={onLogout}
      />}
    </>
  );
};

export default NavigationBar;
