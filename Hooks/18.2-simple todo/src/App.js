import React, { Component } from "react";
import Todo from "./components/Todo/Todo";

export default class App extends Component {
  tasks = [
    { name: "CSS", completed: true },
    { name: "JavaScript", completed: true },
    { name: "Learn React", completed: false },
    { name: "Learn mongoDB", completed: false },
    { name: "Learn Node JS", completed: false },
    ];
    


  render() {
    return <Todo tasks={this.tasks}/>;
  }
}
