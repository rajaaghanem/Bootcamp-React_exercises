import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {count: 0};

}


handleClick = () => {
  console.log(this.state);
  this.setState({count : (this.state.count+1)});
};

  render() {
    return (
      <div><button onClick={this.handleClick}>increment</button> <label>{this.state.count}</label></div>
      );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
