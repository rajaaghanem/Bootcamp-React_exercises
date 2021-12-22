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

      handleClickEdit=async()=>{
        const student = {
            id:this.props.id,
            name: this.state.update,
            imgURL: this.props.imgURL,
        }
        const response = await axios.put(`https://61c300cc9cfb8f0017a3e86b.mockapi.io/users/${this.props.id}`,student);
        console.log("api update:", response);
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