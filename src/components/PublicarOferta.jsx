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
    this.onChangeResourceSeller = this.onChangeResourceSeller.bind(this);

    this.state = {
      type: "",
      color: "",
      quantity: "",
      price: "",
      owner: "",
      forSale: "",
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
      owner: this.state.owner,
      forSale: this.state.forSale,
    };

    axios
      .post("http://localhost:4000/resources/create-resource", resourceObject)
      .then((res) => console.log(res.data));

    this.setState({
      type: "",
      color: "",
      quantity: "",
      price: "",
      owner: "",
      forSale: "",
    });
  }
  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Form>
              <h4>Selecciona la categoría</h4>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="type"
                  label="PET o PETE"
                ></Form.Check>
                <Form.Check type="radio" name="type" label="HDPE"></Form.Check>
                <Form.Check type="radio" name="type" label="PVC"></Form.Check>
                <Form.Check
                  type="radio"
                  name="type"
                  label="LDPE o PEBD"
                ></Form.Check>
                <Form.Check type="radio" name="type" label="PP"></Form.Check>
                <Form.Check type="radio" name="type" label="PS"></Form.Check>
                <Form.Check type="radio" name="type" label="Otros"></Form.Check>
              </Form.Group>
            </Form>
          </Col>

          <Col>
            <Form>
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
                  type="text"
                  value={this.state.quantity}
                  onChange={this.onChangeResourceQuantity}
                />
              </Form.Group>

              <Form.Group controlId="Precio">
                <Form.Label>Precio por kg:</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.color}
                  onChange={this.onChangeResourceColor}
                />
              </Form.Group>

              <Button
                variant="danger"
                size="lg"
                block="block"
                type="submit"
                className="mt-4"
              >
                Publicar Oferta
              </Button>
            </Form>
          </Col>
          <Col>
            <Form>
              <h4>Descripción del producto:</h4>
              <textarea name="" id="" cols="30" rows="15"></textarea>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
