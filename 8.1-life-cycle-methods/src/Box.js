import React from "react";
import "./index.css";

class Box extends React.Component {
  state = { favoriteColor: "pink" };

  componentDidMount() {
    setTimeout(()=> {
      this.setState({favoriteColor: "orange"});
      document.querySelector("#empty").innerText = `The updated favorite color is: ${this.state.favoriteColor}`;
    }, 1000);
  }
  

  render() {
    return (
      <div className="box">
        <h1>my favorite color is : {this.state.favoriteColor}</h1>
        <div id="empty">{this.componentDidMount()}</div>
      </div>
    );
  }
}

export default Box;
