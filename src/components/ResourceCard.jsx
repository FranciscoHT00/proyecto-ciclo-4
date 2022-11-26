import axios from "axios";
import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import iconoReciclaje from "../images/iconoReciclaje.png";

export default class ResourceCard extends Component {
  constructor(props) {
    super(props);
    this.buyResource = this.buyResource.bind(this);
  }

  buyResource() {}

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
            Total: {this.props.obj.price * this.props.obj.quantity} $
          </Card.Text>
          <Button variant="success" size="sm" onClick={this.buyResource}>
            Comprar
          </Button>
        </Card.Body>
      </Card>
    );
  }
}
