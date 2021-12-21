import React from "react";
import "./Product.css"
import { Link } from "react-router-dom";
import store from "../../store/store";

class Products extends React.Component {
  state = { data: [], Links: [] };

  componentDidMount = () => {
    this.setState({ data: store });
  };

  updateProducts = () => {
    this.state.data.map((el) => {
      return <div>{el.title}</div>;
    });
  };

  render() {
    return (
      <div >
        {this.state.data.map((el) => {
          return <Link className="product-design">{el.title}</Link>;
        })}
      </div>
    );
  }
}

export default Products;
