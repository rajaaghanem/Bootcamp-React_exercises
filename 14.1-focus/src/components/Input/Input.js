import React from "react";
import "./Input.css";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: " " };
    this.inputRef = React.createRef();
  }
  // state = {  };

  //update the state text by the user input
  handleInput = (event) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  //save the user input when the user press enter
  handleKey = () => this.props.saveInput(this.state.text);

  render() {
    console.log(this.inputRef);

    return (
      <div>
        <label className="label-design">{this.props.labelName}</label>
        <input
          ref={this.inputRef}
          type="text"
          onChange={this.handleInput}
          value={this.state.text}
          onKeyPress={this.handleKey}
          className="input-design"
        />
      </div>
    );
  }
}

export default Input;
