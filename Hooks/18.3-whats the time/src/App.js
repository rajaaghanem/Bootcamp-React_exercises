import React, { Component, useState } from "react";
import "./App.css";

const App = () => {
  const [sec, setSec] = useState("0");
  const [min, setMin] = useState("0");
  const [hour, setHour] = useState("0");
  const [active, setActive] = useState("");

  const handleChange = (event) => {
    const input = event.target.value;
    switch (event.target.name) {
      case "sec":
        setSec(input);
        setMin(input / 60);
        setHour(input / 3600);
        break;
      case "min":
        setMin(input);
        setSec(input * 60);
        setHour(input / 60);
        break;
      case "hour":
        setHour(input);
        setMin(input * 60);
        setMin(input * 3600);
        break;
    }
    setActive(event.target.name);
  };

  return (
    <div className="style">
      <label>Secounds</label>
      <input onChange={handleChange} value={sec} name="sec"></input>
      <label>Minutes</label>
      <input onChange={handleChange} value={min} name="min"></input>
      <label>Hours</label>
      <input onChange={handleChange} value={hour} name="hour"></input>
    </div>
  );
};

export default App;
