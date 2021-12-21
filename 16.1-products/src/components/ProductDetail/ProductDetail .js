import React from "react";
import { Link } from "react-router-dom";
import store from "../../store/store";

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

    return (<div>
      {this.state.currentItem.size}
    </div>);
  }
}

export default ProductDetail;
