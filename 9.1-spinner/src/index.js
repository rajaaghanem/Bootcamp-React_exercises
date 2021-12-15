import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Spinner from "./Spinner";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = { count: 0 };

  componentDidMount() {
    this.timerFunc();
  }

  timerFunc() {
    this.interval = setInterval(() => {
      this.setState({ count: this.state.count + 1 });
      console.log(this.state.count);
    }, 1000);
  }

  shouldComponentUpdate(){
    if(this.state.count < 9) return true;
    else {
      clearInterval(this.interval);
      return false;
    }
  }

  // componentWillUnmount() {
  //   clearInterval(this.interval);
  // }

  isValid() {
    if (this.state.count < 9)
      return (
        <div>
          <Spinner />
          <div>{this.state.count}</div>
        </div>
      );
    else {
      return null;
    }
  }

  render() {
    return this.isValid();
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
