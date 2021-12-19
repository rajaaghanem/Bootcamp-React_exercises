import React from "react";
import "./Button.css";

class Button extends React.Component {


  render() {
    return (
      <button className="btn" name = {this.props.name} onClick={this.props.onclick}>
        {this.props.title}
      </button>
    );
  }
}

export default Button;
