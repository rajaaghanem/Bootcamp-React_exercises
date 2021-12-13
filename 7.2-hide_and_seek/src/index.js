import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showBox: true };
  }

  handleClick = () => {
    this.setState({ showBox: !this.state.showBox });
  };

  render() {
    return (
      <div className="container">
        <button className="btn" onClick={this.handleClick}>
          show/hide
        </button>
        {this.state.showBox ? <div className="yellow-box"></div> : null}
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById("root"));
