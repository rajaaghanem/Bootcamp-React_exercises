import React from "react";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  state = { students: [], userInputName: "", userInputImg: " " };

  componentDidMount=async ()=>{
    const response = await axios.get("https://61c300cc9cfb8f0017a3e86b.mockapi.io/users");
    this.setState({students: response.data})
  }


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
    return (
      <>
        <label>Name:</label>
        <input type="text" name="inputName" onChange={this.handleChange} value={this.state.userInputName}/>
        <label>Img Url:</label>
        <input type="text" name="inputImg" onChange={this.handleChange} value={this.state.userInputImg}/>
        <button>Add Student</button>
      </>
    );
  }
}

export default App;
