import React, { Component, useState } from "react";
import "./App.css";

const App = (props) => {
  const data = ["one", "two", "three", "four", "five"];
  const [unChecked, setUnCheked] = useState(data);
  const [dataLite, setDataLite] = useState (data);


  const mapping = () => {
    return dataLite.map((item, idx) => {
      return (
        <div key={idx}>
          <input name={item} type="checkbox" onChange={handleCheck} />
          <label>{item}</label>
        </div>
      );
    });
  };

  const handleCheck = (event)=>{
    const change = unChecked.filter((data)=>{
      return (data !== event.target.name && event.target.checked )
    });
    setUnCheked(change);
  }

 const handleDelete =()=>{
  setDataLite(unChecked);
 }

 const handleReset =()=>{
  setUnCheked([...data]);
  setDataLite([...data]);
 }

  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReset}>Reset</button>
      <div className="style">{mapping()}</div>
    </div>
  );
};

export default App;
