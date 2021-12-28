import React, { Component, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const myVid = useRef("");

  const handlePlay = () => {
    myVid.play();
  };

  const handlePause = () => {
    myVid.pause();
  };

  return (
    <div>
      <iframe
        ref={myVid}
        width="560"
        height="315"
        src="https://www.youtube.com/embed/fUXdrl9ch_Q"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
};

export default App;
