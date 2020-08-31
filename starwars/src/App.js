import "./App.css";

import React from "react";

import Character from "./components/Character";
import logo from "./images/Logo.png";

const App = () => {
  return (
    <div className="App">
      <div className="logo_container">
        <img className="logo" src={logo} alt="start wars official logo" />
        <h1 className="Header">Characters</h1>
      </div>
      <Character />
    </div>
  );
};

export default App;