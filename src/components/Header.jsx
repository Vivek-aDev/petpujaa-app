import { useState } from "react";
import { Link } from "react-router-dom";

import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [btnName, setBtnName] = useState("login");
  // console.log("Header Rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="app logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About us</Link>
          </li>
          <li>
            <Link to="/contact">Contact us</Link>
          </li>
          <li>Cart</li>
        </ul>
        <button
          className="btn"
          onClick={() => {
            btnName === "login" ? setBtnName("logout") : setBtnName("login");
          }}
        >
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
