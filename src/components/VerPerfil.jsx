import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Container, Form, Row, Table } from "react-bootstrap";
import ResourceRow from "./ResourceRow";

export default class VerPerfil extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      city: "",
      address: "",
      phone: "",
      balance: "",
      password: "",
      resources: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/users/edit-user/" + this.props.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          email: res.data.email,
          city: res.data.city,
          address: res.data.address,
          phone: res.data.phone,
          balance: res.data.balance,
          password: res.data.password,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:4000/resources/")
      .then((res) => {
        var resources = [];
        res.data.forEach((element, i) => {
          if (element.owner === this.props.id) {
            resources[i] = element;
          }
        });

        this.setState({
          resources: resources,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  onChangeUserName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserCity(e) {
    this.setState({ city: e.target.value });
  }

  onChangeUserAddress(e) {
    this.setState({ address: e.target.value });
  }

  onChangeUserPhone(e) {
    this.setState({ phone: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const userObject = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      address: this.state.address,
      phone: this.state.phone,
      balance: this.state.balance,
      password: this.state.password,
    };

    axios
      .put(
        "http://localhost:4000/users/update-user/" + this.props.id,
        userObject
      )
      .then((res) => {
        console.log(res.data);
        console.log("User successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadTable() {
    return this.state.resources.map((res, i) => {
      return <ResourceRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <h3>TUS DATOS</h3>
            <Form onSubmit={this.onSubmit} style={{ marginBottom: "2rem" }}>
              <Form.Group controlId="Name">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.name}
                  onChange={this.onChangeUserName}
                />
              </Form.Group>

              <Form.Group controlId="Email">
                <Form.Label>Correo Electrónico</Form.Label>
                <Form.Control
                  type="email"
                  value={this.state.email}
                  onChange={this.onChangeUserEmail}
                />
              </Form.Group>

              <Form.Group controlId="City">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.city}
                  onChange={this.onChangeUserCity}
                />
              </Form.Group>

              <Form.Group controlId="Address">
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.address}
                  onChange={this.onChangeUserAddress}
                />
              </Form.Group>

              <Form.Group controlId="Phone">
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.phone}
                  onChange={this.onChangeUserPhone}
                />
              </Form.Group>

              <Form.Group controlId="Balance">
                <Form.Label>Saldo</Form.Label>
                <Form.Control
                  type="number"
                  value={this.state.balance}
                  readOnly
                />
              </Form.Group>

              <Button
                variant="success"
                size="md"
                block="block"
                type="submit"
                className="mt-4"
              >
                Actualizar Datos
              </Button>
            </Form>
          </Col>
          <Col>
            <h3>TUS RECURSOS</h3>

            <Table stripe bordered hover>
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Color</th>
                  <th>Cantidad (kg)</th>
                  <th>Precio</th>
                  <th>Eliminar</th>
                </tr>
              </thead>
              <tbody>{this.loadTable()}</tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}
