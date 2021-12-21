import React from "react";
import "./App.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {
    userInput: "",
  };

  handleInput=(event)=>{
    this.setState({userInput : event.target.value})
  }

  render() {
    console.log(this.state.userInput);
    return (
      <div className="app-container">
        <input type="textarea" className="input-style" onChange={this.handleInput} value={this.state.userInput}/>
        <button className="add-task-style">Add Task</button>
      </div>
    );
  }
}

export default App;
