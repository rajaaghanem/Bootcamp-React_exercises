import React from "react";
import "./Product.css"
import { Link } from "react-router-dom";
import store from "../../store/store";

class Products extends React.Component {
  state = { data: [] };

  componentDidMount = () => {
    this.setState({ data: store });
  };

  render() {
      console.log(this.state.data);
    return (
      <div >
        {this.state.data.map((el) => {
          return <Link key={el.id} to={`/productDetails/${el.id}`} className="product-design">{el.title}</Link>;
        })}
      </div>
    );
  }
}

export default Products;
