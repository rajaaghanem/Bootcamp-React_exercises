import React, { Component, useEffect, useState } from "react";
import "./App.css";
import Joke from "./components/Joke";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>Click me!</button>
      {isOn && <Joke />}
    </div>
  );
};

export default App;
