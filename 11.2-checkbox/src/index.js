import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
    
  render() {
    return (
      <div className="container">
        <Button text="I read the terms of the app"/>
        <Button text="I accept the terms of the app"/>
        <Button text="I want to get the weekly news" checked={true}/>
        <Button text="I want to get sales and offers" checked={true}/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
