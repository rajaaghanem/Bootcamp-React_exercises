import React from "react";
import "./index.css";

class Box extends React.Component {
  state = { classN: "box-hidden" };

  componentDidMount() {
    setTimeout(() => {
        this.setState({classN: "box"})
    }, 1000);

    setTimeout(() => {
        this.setState({classN: "box-hidden"});
    }, 4000);
  }

  render() {
    return (
      <div className={`${this.state.classN} ${this.props.theClass}` }></div>
    );
  }
}

export default Box;
