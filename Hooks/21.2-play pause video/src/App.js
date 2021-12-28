import React, { Component, useEffect, useRef, useState } from "react";
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
      <video ref={myVid} width="750" height="500" controls>
        <source
          src="myvideo.mp4"
          type="video/mp4"
        />
      </video>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default App;
