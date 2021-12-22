import React from "react";
import axios from "axios";
import "./Student.css";

class Student extends React.Component {
    state={update:""};

    componentDidMount=()=>{
        this.setState({update: this.props.name})
      }

    handleNewInput=(event)=>{
        this.setState({update: event.target.value});
      }

      handleClickEdit=()=>{
        this.props.update(this.state.update,this.props.id);
      }

    render(){
        return(
            <div className="student-box">
                <input value={this.state.update} onChange={this.handleNewInput}/>
                <img src={`${this.props.imgURL}`} className="img-box"/>
                <button onClick={this.handleClickEdit}>Update</button>
                <button>Delete</button>
            </div>
        );
    }
}
export default Student;