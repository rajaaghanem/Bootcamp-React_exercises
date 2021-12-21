import React from "react";
import "./App.css";
import Task from "./components/Task/Task";
import { v4 as uuidv4 } from "uuid";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  state = {
    userInput: "",
    tasks: [],
  };

  handleInput = (event) => {
    this.setState({ userInput: event.target.value });
  };

  createTask = () => {
    const id = uuidv4();
    const task = <Task key={id} text={this.state.userInput} />;
    this.setState({ tasks: [...this.state.tasks, task] });
  };

  render() {
    return (
      <div className="app-container">
        <input
          type="textarea"
          className="input-style"
          onChange={this.handleInput}
          value={this.state.userInput}
        />
        <button className="add-task-style" onClick={this.createTask}>
          Add Task
        </button>
        <div className="tasks-container"> {this.state.tasks}</div>
      </div>
    );
  }
}

export default App;
