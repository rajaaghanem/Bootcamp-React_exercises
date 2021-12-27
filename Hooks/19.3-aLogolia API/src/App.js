import React, { Component, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [term, setTerm] = useState("hooks");
  const [dataRes, setDataRes] = useState([]);
  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    const search = async () => {
      try {
        const data = await axios.get("https://hn.algolia.com/api/v1/search?", {
          params: {
            query: term,
          },
        });
        setDataRes(data.data.hits);
      } catch (e) {
        throw new Error("something went wrong");
      }
    };
    search();
  }, []);

  useEffect(() => {
    setTerm(userInput);
  }, [userInput]);

  const mapping = () => {
    return dataRes.map((link) => {
      return (
        <div key={link.objectID}>
          <a href={link.url}>{link.title}</a>
        </div>
      );
    });
  };

  const handleClick = () => {
    const search = async () => {
      try {
        const data = await axios.get("https://hn.algolia.com/api/v1/search?", {
          params: {
            query: term,
          },
        });
        setDataRes(data.data.hits);
      } catch (e) {
        throw new Error("something went wrong");
      }
    };
    search();
  };

  return (
    <div>
      <div className="style">
        <input
          type="text"
          onChange={(e) => setUserInput(e.target.value)}
          value={userInput}
        />
        <button onClick={handleClick}>Search</button>
        {mapping()}
      </div>
    </div>
  );
};

export default App;
