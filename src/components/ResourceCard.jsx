import axios from "axios";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import iconoReciclaje from "../images/iconoReciclaje.png";

export default class ResourceCard extends Component {
  constructor(props) {
    super(props);
    this.buyResource = this.buyResource.bind(this);

    this.state = {
      total: this.props.obj.quantity * this.props.obj.price,
    };
  }

  buyResource() {
    const buyerNewBalance = {
      newBalance: -1 * this.state.total,
    };

    const sellerNewBalance = {
      newBalance: this.state.total,
    };

    const newOwner = {
      newOwner: this.props.buyer,
    };

    axios
      .patch(
        "http://localhost:4000/users/update-balance/" + this.props.buyer,
        buyerNewBalance
      )
      .then((res) => console.log(res.data));

    axios
      .patch(
        "http://localhost:4000/users/update-balance/" + this.props.obj.owner,
        sellerNewBalance
      )
      .then((res) => console.log(res.data));

    axios
      .patch(
        "http://localhost:4000/resources/update-owner/" + this.props.obj._id,
        newOwner
      )
      .then((res) => console.log(res.data));

    alert("Recurso comprado correctamente!");
    window.location.reload();
  }

  render() {
    return (
      <Card style={{ width: "10rem", display: "inline-block", margin: "1rem" }}>
        <Card.Img
          variant="top"
          src={iconoReciclaje}
          style={{ padding: "2rem", marginTop: "-1rem", marginBottom: "-2rem" }}
        />
        <Card.Body>
          <Card.Title>{this.props.obj.type}</Card.Title>
          <Card.Text>
            Color: {this.props.obj.color} <br></br>
            Cantidad: {this.props.obj.quantity} kg <br></br>
            Precio: {this.props.obj.price} $/kg <br></br>
            <strong>Total: {this.state.total} $</strong>
          </Card.Text>
          <Button variant="success" size="sm" onClick={this.buyResource}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
