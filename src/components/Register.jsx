import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserName = this.onChangeUserName.bind(this);
    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserCity = this.onChangeUserCity.bind(this);
    this.onChangeUserAddress = this.onChangeUserAddress.bind(this);
    this.onChangeUserPhone = this.onChangeUserPhone.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onChangeUserPasswordC = this.onChangeUserPasswordC.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      city: "",
      address: "",
      phone: "",
      password: "",
      passwordC: "",
    };
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

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
  }

  onChangeUserPasswordC(e) {
    this.setState({ passwordC: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    if (this.state.password === this.state.passwordC) {
      const userObject = {
        name: this.state.name,
        email: this.state.email,
        city: this.state.city,
        address: this.state.address,
        phone: this.state.phone,
        password: this.state.password,
        balance: 300000,
      };

      axios
        .post("http://localhost:4000/users/create-user", userObject)
        .then((res) => console.log(res.data));

      this.setState({
        name: "",
        email: "",
        city: "",
        address: "",
        phone: "",
        password: "",
        passwordC: "",
      });

      alert("Usuario registrado exitosamente");
    } else {
      alert("Las contraseñas no coinciden.");
    }
  }

  render() {
    return (
      <div className="form-wrapper">
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

          <Form.Group controlId="Password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              value={this.state.password}
              onChange={this.onChangeUserPassword}
            />
          </Form.Group>

          <Form.Group controlId="PasswordC">
            <Form.Label>Confirmar contraseña</Form.Label>
            <Form.Control
              type="password"
              value={this.state.passwordC}
              onChange={this.onChangeUserPasswordC}
            />
          </Form.Group>

          <Button
            variant="success"
            size="md"
            block="block"
            type="submit"
            className="mt-4"
          >
            Registrarse
          </Button>
        </Form>
      </div>
    );
  }
}
