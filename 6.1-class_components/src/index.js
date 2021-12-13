import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Card from "./Card";

if (module.hot) {
  module.hot.accept();
}

// const App = function () {
  class App extends React.Component{
    render(){
  return (
    <div className="card-container">
      <Card
        image={
          "https://picsum.photos/300/200?random=1"
        }
        title="Golan"
        description="lalalalalalala"
      />
      <Card
        image={
          "https://picsum.photos/300/200?random=2"
        }
        title="Galile"
        description="nananannan"
      />
      <Card
        image={
          "https://picsum.photos/300/200?random=3"
        }
        title="Tel-Aviv"
        description="babababba"
      />
    </div>
  );
  }};

ReactDOM.render(<App />, document.getElementById("root"));
