import React from "react";
import Button from "../Button/Button";
import "./Input.css";


class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: " " };
    this.inputRef = React.createRef();
  }

  //update the state text by the user input
  handleInput = (event) => {
    this.setState({ text: event.target.value });
  };

  componentDidMount = () => {
    this.inputRef.current.focus();
  };

  //save the user input when the user press enter
  handleKey = () => this.props.saveInput(this.state.text);

  handleClick=()=>{
    this.inputRef.current.select();
    document.execCommand('copy');
  }
  
  render() {
    console.log(this.inputRef.current);

    return (
      <div>
        <label className="label-design">{this.props.labelName}</label>
        <textarea
          ref={this.inputRef}
          type="text"
          onChange={this.handleInput}
          value={this.state.text}
          onKeyPress={this.handleKey}
          className="input-design"
          rows="8" cols="50"
        />
        <Button title="Copy" onclick={this.handleClick}/>
      </div>
    );
  }
}

export default Input;
