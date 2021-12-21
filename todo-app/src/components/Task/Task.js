import React from "react";
import "./Task.css"

class Task extends React.Component {

  state={ update: " "}

  componentDidMount=()=>{
    this.setState({update: this.props.text})
  }

  handleNewInput=(event)=>{
    this.setState({update: event.target.value});
  }

  handleClickEdit=()=>{
    this.props.update(this.state.update,this.props.id);
  }

  render() {
    console.log(this.props);
    return <div className="task-container">
      <textarea rows="12" cols="28" value={this.state.update} onChange={this.handleNewInput}/>
      <button className="btn-style" onClick={this.handleClickEdit}>Update</button>
      <button className="btn-style">Delete</button>
      </div>;
  }
}

export default Task;
