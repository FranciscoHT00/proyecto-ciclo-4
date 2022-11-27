import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ComponenteInicio from "./components/ComponenteInicio";
import VerOfertas from "./components/VerOfertas";
import PublicarOferta from "./components/PublicarOferta";
import Login from "./components/Login";
import Register from "./components/Register";
import VerPerfil from "./components/VerPerfil";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar bg="success" variant="dark">
            <Container>
              <Navbar.Brand>
                <Link to={"/"} className="nav-link">
                  INICIO
                </Link>
              </Navbar.Brand>

              <Nav className="justify-content-end">
                <Nav>
                  <Link to={"/ver-ofertas"} className="nav-link">
                    Ver ofertas
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/publicar-oferta"} className="nav-link">
                    Publica una oferta
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/ver-perfil-1"} className="nav-link">
                    Perfil Usuario 1
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/ver-perfil-2"} className="nav-link">
                    Perfil Usuario 2
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/login"} className="nav-link">
                    Iniciar Sesión
                  </Link>
                </Nav>

                <Nav>
                  <Link to={"/register"} className="nav-link">
                    Registrarse
                  </Link>
                </Nav>
              </Nav>
            </Container>
          </Navbar>
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route
                    exact
                    path="/"
                    component={(props) => <ComponenteInicio {...props} />}
                  />
                  <Route
                    exact
                    path="/ver-ofertas"
                    component={(props) => (
                      <VerOfertas id={"638148bdaf6e28739a94d90e"} />
                    )}
                  />
                  <Route
                    exact
                    path="/publicar-oferta"
                    component={(props) => (
                      <PublicarOferta id={"63814868af6e28739a94d90c"} />
                    )}
                  />
                  <Route
                    exact
                    path="/ver-perfil-1"
                    component={(props) => (
                      <VerPerfil id={"63814868af6e28739a94d90c"} />
                    )}
                  />
                  <Route
                    exact
                    path="/ver-perfil-2"
                    component={(props) => (
                      <VerPerfil id={"638148bdaf6e28739a94d90e"} />
                    )}
                  />
                  <Route
                    exact
                    path="/login"
                    component={(props) => <Login {...props} />}
                  />
                  <Route
                    exact
                    path="/register"
                    component={(props) => <Register {...props} />}
                  />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </Router>
    </div>
  );
}

export default App;
