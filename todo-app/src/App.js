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

  // add a uniqe id and usertext to an task object in tasks array
  createTask = () => {
    const id = uuidv4();
    this.setState({
      tasks: [...this.state.tasks, { id: id, text: this.state.userInput }],
    });
    
  };

  //map over tasks array and create Taks components
  displayTasks = () => {
    return this.state.tasks.map((task) => {
      return (
        <div key={task.id}>
          <Task
            id={task.id}
            text={this.state.userInput}
            update={this.handleUpdate}
            delete={this.handleDelete}
          />
        </div>
      );
    });
  };

  //delete the selected task from tasks
  handleDelete = (id) => {
    const filteredList = this.state.tasks.filter((task) => {
      return task.id !== id;
    });
    this.setState({ tasks: filteredList });
  };

  //update the text inside the selected Task (id) in tasks array
  handleUpdate = (textupdate, id) => {
    const tasks = this.state.tasks;
    const task = tasks.find((task) => task.id === id);
    const editedtask = {
      ...task,
      text: textupdate,
    };
    this.setState({
      tasks: this.state.tasks.map((task) => {
        return task.id === id ? editedtask : task;
      }),
    });
  };

  render() {
    console.log(this.state.tasks);
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
        <div className="tasks-container"> {this.displayTasks()}</div>
      </div>
    );
  }
}

export default App;
