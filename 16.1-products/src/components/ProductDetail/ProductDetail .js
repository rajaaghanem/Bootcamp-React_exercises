import React from "react";
import { Link } from "react-router-dom";
import store from "../../store/store";
import "./ProuductDetail.css";

class ProductDetail extends React.Component {
  state = { data: store, currentItem: {} };

  componentDidMount = () => {
    const id = Number(this.props.match.params.id);
    const findItem = this.state.data.find((item) => {
      return item.id === id;
    });
    this.setState({ currentItem: findItem });
  };

  render() {
    console.log(this.props.match.params.id);
    console.log(this.state.currentItem);

    return (<div className="proudct-container">
      <div>{this.state.currentItem.title}</div>
      <img src={`${this.state.currentItem.imageUrl}`}/>
      <div>  {this.state.currentItem.size}</div>
      <div>  {`${this.state.currentItem.price} $`}</div>
    </div>);
  }
}

export default ProductDetail;
