import React from "react";
import "./Components.css";

const FooterOne = () => {
  return (
    <div className="foot-box">
      <div className="foot-flex">
        <div className="foothead">Start your journey to better business</div>
        <div>
          <input placeholder="Don't miss our updates" />
        </div>
        <div className="touch-btn">
          <button>Send </button>{" "}
        </div>
      </div>
      <div className="foot-flex">
        <div className="head-flex">New York</div>
        <div>Seventh Ave, 20th Floor New York, NY 10018 </div>
        <div> T: 1-800-356-8933</div>
      </div>
      <div className="foot-flex">
        <div className="head-flex">Boston</div>
        <div>45 Myrtle Street, 02114 Boston, MA </div>
        <div>T: 1-900-322-8422</div>
        <div className="mar-top">
          <div className="blue-col">View all services</div>
          <div className="blue-line"></div>
        </div>
      </div>
    </div>
  );
};

export default FooterOne;
