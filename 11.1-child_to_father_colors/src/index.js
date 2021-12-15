import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {currColor : ""};
  colors = ["blue","red","yellow"];

  onClicked=(color)=>{
    this.setState({currColor: color});
  }

  loopColor(){
    let buttons = [];
    for(let i=0; i<this.colors.length; i++){
       buttons.push(<Button cklickedIn={this.onClicked} colorName={`${this.colors[i]}`}/>);
    }
    return buttons;
  }

  render() {
    return (
      <div>
       {this.loopColor()} 
       {this.state.currColor}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
