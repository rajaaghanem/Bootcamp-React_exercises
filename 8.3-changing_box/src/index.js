import React from "react";
import ReactDOM from "react-dom";
import Box from "./Box";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Box/>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
