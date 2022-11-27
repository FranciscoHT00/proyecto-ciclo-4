import axios from "axios";
import React, { Component } from "react";
import { Button } from "react-bootstrap";

export default class ResourceRow extends Component {
  constructor(props) {
    super(props);
    this.deleteResource = this.deleteResource.bind(this);
  }

  deleteResource() {
    axios
      .delete(
        "http://localhost:4000/resources/delete-resource/" + this.props.obj._id
      )
      .then((res) => {
        alert("Recurso eliminado correctamente!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.type}</td>
        <td>{this.props.obj.color}</td>
        <td>{this.props.obj.quantity}</td>
        <td>{this.props.obj.price}</td>
        <td>
          <Button onClick={this.deleteResource} size="sm" variant="danger">
            Eliminar
          </Button>
        </td>
      </tr>
    );
  }
}
