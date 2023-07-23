import React from "react";
import "./Components.css";
import logo from "../Assets/Logo-white.svg";
import dropdown from "../Assets/dropdown.svg";

const Navbar = () => {
  return (
    <div id="navbar">
      <div id="logo">
        <img src={logo} alt="logo-img" loading="lazy" />
      </div>
      <div id="links">
        <div>
          Home <img src={dropdown} alt="dropdown" className="drop" />
        </div>
        <div>
          Solution <img src={dropdown} alt="dropdown" className="drop" />
        </div>
        <div>
          Company <img src={dropdown} alt="dropdown" className="drop" />
        </div>
        <div>
          Resources <img src={dropdown} alt="dropdown" className="drop" />
        </div>
        <div>Portfolio</div>
      </div>
      <div className="touch-btn">
        <button>Get in touch</button>
      </div>
    </div>
  );
};

export default Navbar;
