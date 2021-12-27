import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [result, setResult] = useState("");
  useEffect(() => {
    const search = async () => {
      const data = await axios.get("https://swapi.dev/api/films/1/");
      setResult(data.data);
    };
    search();
  }, []);

  return (
    <div>
      <div className="style">
        Movie Title: {result.title} Director: {result.director}
      </div>
    </div>
  );
};

export default App;
