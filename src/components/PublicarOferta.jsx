import React, { Component } from "react";
import axios from "axios";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default class PublicarOferta extends Component {
  constructor(props) {
    super(props);

    this.onChangeResourceType = this.onChangeResourceType.bind(this);
    this.onChangeResourceColor = this.onChangeResourceColor.bind(this);
    this.onChangeResourceQuantity = this.onChangeResourceQuantity.bind(this);
    this.onChangeResourcePrice = this.onChangeResourcePrice.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "PET",
      color: "",
      quantity: "",
      price: "",
      owner: "63814868af6e28739a94d90c",
      forSale: 1,
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

  onSubmit(e) {
    e.preventDefault();

    const resourceObject = {
      type: this.state.type,
      color: this.state.color,
      quantity: this.state.quantity,
      price: this.state.price,
      owner: this.state.owner,
      forSale: this.state.forSale,
    };

    axios
      .post("http://localhost:4000/resources/create-resource", resourceObject)
      .then((res) => console.log(res.data));

    this.setState({
      type: "PET",
      color: "",
      quantity: "",
      price: "",
    });
  }
  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.onSubmit}>
          <Row>
            <Col>
              <h4>Selecciona la categoría</h4>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="type"
                  label="PET o PETE"
                  value="PET"
                  checked={this.state.type === "PET"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="HDPE"
                  value="HDPE"
                  checked={this.state.type === "HDPE"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="PVC"
                  value="PVC"
                  checked={this.state.type === "PVC"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="LDPE o PEBD"
                  value="LDPE"
                  checked={this.state.type === "LDPE"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="PP"
                  value="PP"
                  checked={this.state.type === "PP"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="PS"
                  value="PS"
                  checked={this.state.type === "PS"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="Otros"
                  value="Otros"
                  checked={this.state.type === "Otros"}
                  onChange={this.onChangeResourceType}
                ></Form.Check>
              </Form.Group>
            </Col>

            <Col>
              <Form.Group controlId="Color">
                <Form.Label>Color:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.color}
                  onChange={this.onChangeResourceColor}
                />
              </Form.Group>

              <Form.Group controlId="Cantidad">
                <Form.Label>Cantida disponible (kg):</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.quantity}
                  onChange={this.onChangeResourceQuantity}
                  step="5"
                />
              </Form.Group>

              <Form.Group controlId="Precio">
                <Form.Label>Precio por kg:</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.price}
                  onChange={this.onChangeResourcePrice}
                  step="1000"
                />
              </Form.Group>

              <Button
                variant="success"
                size="md"
                block="block"
                type="submit"
                className="mt-4"
              >
                Publicar Oferta
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
