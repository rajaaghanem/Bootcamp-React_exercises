import React from "react";
import "./Task.css"

class Task extends React.Component {

  render() {
    return <div className="task-container">
      <div> {this.props.text}</div>
      <button className="btn-style">Edit</button>
      <button className="btn-style">Delete</button>
      </div>;
  }
}

export default Task;
