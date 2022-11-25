import React, { Component } from "react";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.onChangeUserEmail = this.onChangeUserEmail.bind(this);
    this.onChangeUserPassword = this.onChangeUserPassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      password: "",
    };
  }


  onChangeUserEmail(e) {
    this.setState({ email: e.target.value });
  }

  onChangeUserPassword(e) {
    this.setState({ password: e.target.value });
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
    } else {
      console.log("Las contraseñas no coinciden.");
    }
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Email">
            <Form.Label>Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeUserEmail}
            />
          </Form.Group>


          <Form.Group controlId="Password">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="text"
              value={this.state.password}
              onChange={this.onChangeUserPassword}
            />
          </Form.Group>


          <Button
            variant="danger"
            size="lg"
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