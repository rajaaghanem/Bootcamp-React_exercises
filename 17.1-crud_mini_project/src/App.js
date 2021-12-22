import React from "react";
import axios from "axios";
import "./App.css";
import Student from "./components/Student/Student";

class App extends React.Component {
  state = { students: [], userInputName: "", userInputImg: " " };

  componentDidMount=async ()=>{
    const response = await axios.get("https://61c300cc9cfb8f0017a3e86b.mockapi.io/users");
    this.setState({students: response.data})
    console.log("api",response);
  }

  displayStudent=()=>{
    return this.state.students.map((student)=>{
      return <Student key={student.id} id={student.id} name={student.name} imgURL={student.imgURL} update={this.handleUpdate}/>
    })
  }
 
  handleUpdate = (textupdate, id) => {
    const students = [...this.state.students];
    const student = students.find((student) => student.id === id);
    const editedstudent = {
      ...student,
      name: textupdate,
    };
    this.setState({
      students: this.state.students.map((student) => {
        return student.id === id ? editedstudent : student;
      }),
    });
  };

  handleChange = (event) => {
    const inputType = event.target.name;
    switch (inputType) {
      case "inputName":
        this.setState({ userInputName: event.target.value });
        break;
      case "inputImg":
        this.setState({ userInputImg: event.target.value });
    }
  };

  render() {
    console.log("students state",this.state.students);

    return (
      <>
        <label>Name:</label>
        <input type="text" name="inputName" onChange={this.handleChange} value={this.state.userInputName}/>
        <label>Img Url:</label>
        <input type="text" name="inputImg" onChange={this.handleChange} value={this.state.userInputImg}/>
        <button>Add Student</button>
        <div className="students-container"> {this.displayStudent()}</div>
      </>
    );
  }
}

export default App;
