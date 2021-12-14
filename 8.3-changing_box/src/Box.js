import React from "react";
import "./index.css";

class Box extends React.Component {
  state = { theColor: "blue", count: 0 };

  componentDidMount() {
    this.interval = setInterval(() => {
      let tmpColor = Math.floor(Math.random() * 16777215).toString(16);
      this.setState({ theColor: `#${tmpColor}`, count: this.state.count + 1 });
    }, 500);
  }

  componentWillUnmount() {
    if(this.state.count === 10)
    clearInterval(this.interval);
  }

  render() {
    return (
      <div
        className={this.state.count < 5 ? "box" : "circle"}
        style={{ backgroundColor: `${this.state.theColor}` }}
      ></div>
    );
  }
}

export default Box;
