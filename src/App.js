import React from "react";
import Navbar from "./Components/Navbar";
import bg from './Assets/Bg-img.webp'
import './App.css'

function App() {
  return <div>
    <Navbar />
    <img src={bg} alt="bg-img" className="bg-img"/>
  </div>;
}

export default App;
