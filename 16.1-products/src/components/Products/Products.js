import React from "react";
// import{Link} from 'react-router-dom';
import store from "../../store/store";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount = () => {
    this.setState({ data: store });
  };

  render() {
    console.log(this.state.data);
    return <div className="">products</div>;
  }
}

export default Products;
