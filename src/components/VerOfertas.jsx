import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResourceCard from "./ResourceCard";

export default class VerOfertas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "63814868af6e28739a94d90c",
      resources: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/resources/")
      .then((res) => {
        this.setState({
          resources: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  loadResources() {
    return this.state.resources.map((res, i) => {
      return <ResourceCard obj={res} key={i} buyer={this.userId} />;
    });
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>{this.loadResources()}</Col>
        </Row>
      </Container>
    );
  }
}
