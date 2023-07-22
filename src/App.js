import React from "react";
import Navbar from "./Components/Navbar";
import bg from "./Assets/Bg-img.webp";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div>
        <img src={bg} alt="bg-img" className="bg-img" />
      </div>
      <div id="abs-text">
        {" "}
        <div id="large-txt">Mobile app development for funded companies.</div>
        <div id="sml-txt">
          Helping companies succeed through customized software solutions
        </div>
      </div>
      <section>
        <div id="txt">Experienced teams and a agile framework, we prioritise the commercial goals of the client to deliver the highest business value.</div>
        <div className="touch-btn1" ><button>Why to choose us</button></div>
      </section>
    </div>
  );
}

export default App;
