import React from "react";
import axios from "axios";
import "./App.css";
import Student from "./components/Student/Student";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
  state = { students: [], userInputName: "", userInputImg: "" };

  componentDidMount = async () => {
    const response = await axios.get(
      "https://61c300cc9cfb8f0017a3e86b.mockapi.io/users"
    );
    this.setState({ students: response.data });
    console.log("api", response);
  };

  //map over students in state and display them on screen
  displayStudent = () => {
    return this.state.students.map((student) => {
      return (
        <Student
          key={student.id}
          id={student.id}
          name={student.name}
          imgURL={student.imgURL}
          update={this.handleUpdate}
          delete={this.handleDelete}
        />
      );
    });
  };

  //update the user input in state
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

  //update the state depends on the user inputs
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

  //add new student to the api and to the state
  handleCreate = async () => {
    const student = {
      // id : uuidv4(),
      name: this.state.userInputName,
      imgURL: this.state.userInputImg,
    };
    try {
      const response = await axios.post(
        `https://61c300cc9cfb8f0017a3e86b.mockapi.io/users`,
        student
      );
      console.log("api add", response);
      this.setState({
        students: [...this.state.students, student],
      });
    } catch (e) {}
  };

  //delete student from api and state students array
  handleDelete = async (id) => {
    try{
      const response = await axios.delete(
        `https://61c300cc9cfb8f0017a3e86b.mockapi.io/users/${id}`
      );
      console.log("delete api", response);
      const filteredList = this.state.students.filter((student) => {
        return student.id !== id;
      });
  
      this.setState({ students: filteredList });
    }catch(e){}
    
  };

  render() {
    console.log("students state", this.state.students);

    return (
      <>
        <label>Name:</label>
        <input
          type="text"
          name="inputName"
          onChange={this.handleChange}
          value={this.state.userInputName}
        />
        <label>Img Url:</label>
        <input
          type="text"
          name="inputImg"
          onChange={this.handleChange}
          value={this.state.userInputImg}
        />
        <button onClick={this.handleCreate}>Add Student</button>
        <div className="students-container"> {this.displayStudent()}</div>
      </>
    );
  }
}

export default App;
