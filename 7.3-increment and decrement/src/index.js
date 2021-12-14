import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }
    
  handleClick1 = () => {
    if(this.state.count < 10){
      this.setState({ count: this.state.count + 1 });
    }
  };

  handleClick2 = () => {
    if(this.state.count > -10){
      this.setState({ count: this.state.count - 1 });
    }
  };

classN =()=>{
  if(this.state.count <0){
    return "red";
  }
  else {
    return "green";
  }
}

  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>increment</button>
        <label className={`${this.classN()}`}>
          {this.state.count}
        </label>
        <button onClick={this.handleClick2}>decrement</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
