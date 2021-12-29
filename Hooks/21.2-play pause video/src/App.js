import React, { useRef } from "react";
import "./App.css";

const App = () => {
  const myVid = useRef("");

  const handlePlay = () => {
    myVid.current.play();
  };

  const handlePause = () => {
    myVid.current.pause();
  };

  return (
    <div>
      <video width="560" height="315" controls ref={myVid}>
        <source src="video/cake.mp4" type="video/mp4" />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default App;
