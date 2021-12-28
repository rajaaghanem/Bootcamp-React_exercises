import React, { Component, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const [isOn, setIsON] = useState(false);
  const btnValue = useRef("Edit");

  const change = () => {
    if (btnValue.current === "Edit") {
      btnValue.current = "save";
    } else {
      btnValue.current = "Edit";
    }
    setIsON(!isOn);
  };

  return (
    <div>
      {isOn ? (
        <div>
          <input autoFocus />
          <button onClick={change}>{btnValue.current}</button>
        </div>
      ) : (
        <button onClick={change}>{btnValue.current}</button>
      )}
    </div>
  );
};

export default App;
