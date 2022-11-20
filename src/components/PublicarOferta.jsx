import React, { Component } from "react";
import axios from "axios";

export default class PublicarOferta extends Component {
  constructor(props) {
    super(props);

    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.onChangeResourceColor = this.onChangeResourceColor.bind(this);
    this.onChangeResourceQuantity = this.onChangeResourceQuantity.bind(this);
    this.onChangeResourcePrice = this.onChangeResourcePrice.bind(this);
    this.onChangeResourceSeller = this.onChangeResourceSeller.bind(this);

    this.state = {
      type: "",
      color: "",
      quantity: "",
      price: "",
      seller: "",
    };
  }

  onChangeResourceType(e) {
    this.setState({ type: e.target.value });
  }

  onChangeResourceColor(e) {
    this.setState({ color: e.target.value });
  }

  onChangeResourceQuantity(e) {
    this.setState({ quantity: e.target.value });
  }

  onChangeResourcePrice(e) {
    this.setState({ price: e.target.value });
  }

  onChangeResourceSeller(e) {
    this.setState({ seller: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const resourceObject = {
      type: this.state.type,
      color: this.state.color,
      quantity: this.state.quantity,
      price: this.state.price,
      seller: this.state.seller,
    };

    axios
      .post("http://localhost:4000/resources/create-resource", resourceObject)
      .then((res) => console.log(res.data));

    this.setState({
      type: "",
      color: "",
      quantity: "",
      price: "",
      seller: "",
    });
  }
  render() {
    return <div>PublicarOferta</div>;
  }
}
