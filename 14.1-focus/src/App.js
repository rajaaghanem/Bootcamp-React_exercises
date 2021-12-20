import React from "react";
import "./App.css";
import Input from "./components/Input/Input";

class App extends React.Component {
  state = { userInput: "" };
  handleInputSearch = (userInputText) => {
    this.setState({ userInput: userInputText });
  };

  render() {
    console.log(this.state.userInput);
    return (
      <>
        <Input saveInput={this.handleInputSearch} labelName="Search" />
      </>
    );
  }
}

export default App;
