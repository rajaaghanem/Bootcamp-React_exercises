import React from "react";
import "./index.css";

class Button extends React.Component {
  state = { myColor: this.props.colorName };

  render() {
    return (
      <button
        className={ `btn ${this.state.myColor} `}
        onClick={(event) => {
          this.props.cklickedIn(this.state.myColor);
        }}
      >
        {this.props.colorName}
      </button>
    );
  }
}

export default Button;
