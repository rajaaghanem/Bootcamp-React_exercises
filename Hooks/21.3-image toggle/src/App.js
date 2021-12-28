import React, { Component, useEffect, useRef, useState } from "react";
import "./App.css";

const App = () => {
  const myImg = useRef(null);
  const myImg2 = useRef(null);

  function handleBlackColor(e) {
    switch (e.target.name) {
      case "img1":
        myImg.current.style.filter = "grayscale(100%)";
        break;
      case "img2":
        myImg2.current.style.filter = "grayscale(100%)";
        break;
    }
  }

  function handleColors(e){
    switch (e.target.name) {
      case "img1":
        myImg.current.style.filter = "grayscale(0%)";
        break;
      case "img2":
        myImg2.current.style.filter = "grayscale(0%)";
        break;
    }
  }

  return (
    <div className="style">
      <img
        ref={myImg}
        name="img1"
        onMouseOver={handleBlackColor}
        onMouseOut ={handleColors}
        src="https://images.unsplash.com/photo-1640622209668-7a267d57766b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />
      <img
        ref={myImg2}
        name="img2"
        onMouseOver={handleBlackColor}
        onMouseOut ={handleColors}
        src="https://images.unsplash.com/photo-1640616516113-baf892a564e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
      />
    </div>
  );
};

export default App;
