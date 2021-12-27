import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [randomJoke, setRandomJoke] = useState("");
  const [categories, setCategories] = useState([]);
  const [errorMassege, setErrorMassege] = useState("");
  const [categoryJoke, setCategoryJoke] = useState("");
  const [userInput, setUserInput] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  useEffect(() => {
    const search = async () => {
      try {
        const data = await axios.get(
          "https://api.chucknorris.io/jokes/categories"
        );
        setCategories(data.data);
      } catch (e) {
        setErrorMassege(e.response.data.massege);
      }
    };
    search();
  }, []);

  const handleClickCategory = async (e) => {
    const category = e.target.name;
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${category}`
      );
      setCategoryJoke(response.data.value);
    } catch (e) {
      setErrorMassege(e.response.data.massege);
    }
  };

  const mapping = () => {
    return categories.map((category, idx) => {
      return (
        <button key={idx} name={category} onClick={handleClickCategory}>
          {category}
        </button>
      );
    });
  };

  const mappingSearch = () => {
    return searchRes.map((joke, idx) => {
      return <li><p key={idx}>{joke.value}</p></li>;
    });
  };

  const handleClick = async () => {
    try {
      const response = await axios.get(
        "https://api.chucknorris.io/jokes/random"
      );
      setRandomJoke(response.data.value);
    } catch (e) {
      setErrorMassege(e.response.data.massege);
    }
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/search?query=${userInput}`
      );
      console.log(response.data.result);
      setSearchRes(response.data.result);
    } catch (e) {
      setErrorMassege("something went wrong");
      console.log(errorMassege);
    }
  };

  return (
    <div className="style">
      <button onClick={handleClick}>Random Joke</button>
      <p>{randomJoke}</p>
      <div>{mapping()}</div>
      <div>{categoryJoke}</div>
      <div>
        <label>Enter keyWords</label>
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={handleSearchClick}>Search</button>
        <ul>{mappingSearch()}</ul>
      </div>
    </div>
  );
};

export default App;
