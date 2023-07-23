import React from "react";
import "./Components.css";
const Form = () => {
  return (
    <div className="form">
      <div className="form-text">
        <div id="form-head">Got a project? Let’s talk</div>
        <div id="form-tail">
          {" "}
          <div>T: 1-800-356-8933</div> <div>E: office@tecnologia.com</div>
        </div>
      </div>
      <div className="form-ip">
        <div className="two-ip">
          <input placeholder="Your name" />
          <input placeholder="Your address" />
        </div>
        <div className="two-ip">
          <input placeholder="Phone number" />
          <input placeholder="What is your budget?" />
        </div>
        <div className="one-ip">
          <input placeholder="Message" />
        </div>
        <div className="touch-btn6">
          <button>Send a request</button>
        </div>
      </div>
    </div>
  );
};

export default Form;
