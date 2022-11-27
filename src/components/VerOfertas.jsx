import axios from "axios";
import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import ResourceCard from "./ResourceCard";

export default class VerOfertas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resources: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/resources/")
      .then((res) => {
        var resources = [];
        res.data.forEach((element, i) => {
          if (element.owner !== this.props.id) {
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

  loadResources() {
    return this.state.resources.map((res, i) => {
      return <ResourceCard obj={res} key={i} buyer={this.props.id} />;
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
