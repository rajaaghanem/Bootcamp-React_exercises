import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Button from "./Button";

if (module.hot) {
  module.hot.accept();
}

const App = function (){
return (
<div>
  <Button text='important'/>
  <Button text='Not important!'/>
</div>
);
};

ReactDOM.render(<App />, document.getElementById("root"));
