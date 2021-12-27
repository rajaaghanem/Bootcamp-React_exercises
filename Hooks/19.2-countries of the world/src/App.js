import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [originalData, setOriginalData] = useState([]);
  const [result, setResult] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const search = async () => {
      const {data} = await axios.get("https://restcountries.com/v2/all");
      setOriginalData(data);
      setResult(data);
    };
    search();
  }, []);

  useEffect(() => {
    filterData(originalData);
  }, [userInput]);

  const filterData = (data) => {
    const arr = data.filter((country) => {
      return country.name.toLowerCase().includes(userInput.toLowerCase());
    });
    setResult(arr);
  };

  const mapping = () => {
    return result.map((country) => {
      return <div key={country.numericCode}>{country.name}</div>;
    });
  };

  return (
    <div>
      <div className="style">
        <label>Search for a Country</label>
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        {mapping()}
      </div>
    </div>
  );
};

export default App;
