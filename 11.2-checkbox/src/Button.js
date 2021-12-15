import React from "react";
import "./index.css";

class Button extends React.Component {
state={checked: ""}

  render() {
    return (
      <div>
        <input
          type="checkbox"
          className="box"
          defaultChecked={this.props.checked}
          onChange={this.changeClick}
        />
        <label>{this.props.text}</label>
      </div>
    );
  }
}

export default Button;
